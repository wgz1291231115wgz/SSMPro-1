$('.wgz-addTest-backBtn').click(function () {
    let mainBackBtn = $(this).parent().parent();
    mainBackBtn.html('');
    mainBackBtn.load("con-pages/showTest.html");
});

let topBtn = $('.wgz-addTest-top>p>button');

topBtn.click(function () {
    $('.wgz-addTest-top>p>button').removeAttr('id');
    $(this).attr('id','wgz-addTest-topBtn-act');
    if($(this).text() === "单选题") $('.wgz-addTest-mid').show();
    else if($(this).text() === "简答题") $('.wgz-addTest-mid').hide();
});

$(function () {
    let jsonData = {
        mark: 'showAllClassify',
        data: ''
    };
    $.ajax({
        url: pathOl + 'classify',
        type: 'post',
        data: JSON.stringify(jsonData),
        contentType: 'application/json',
        dataType: 'json',
        success: function (result) {
            $('#wgz-addTest-tClassify').html('');
            let len = result.result.length;
            for(let i = 0; i < len; i++){
                let option = $('<option value="'+result.result[i]+'">'+result.result[i]+'</option>')
                $('#wgz-addTest-tClassify').append(option);
            }
        }
    });

    if(localStorage.getItem("mark")==="edit"){
        let tType = localStorage.getItem("tType");
        let tTopic = localStorage.getItem("tTopic");

        localStorage.setItem('mark',"");
        localStorage.setItem('tTopic',"");
        localStorage.setItem('tType',"");

        let tTypeBtns = $('.wgz-addTest-top>p>button');
        tTypeBtns.attr('disabled',true);
        tTypeBtns.removeAttr('id');
        let jsonData = {
            mark: 'changeTest',
            data: {
                judge: tType,
                tTopic: tTopic
            }
        };
        $.ajax({
            url: pathOl + 'test',
            type: 'post',
            data: JSON.stringify(jsonData),
            contentType: 'application/json',
            dataType: 'json',
            success: function (result) {
                if(result.testAllCon.tType === 0){

                    let activeBtn = $('.wgz-addTest-top>p button:nth-child(1)');
                    activeBtn.attr('id','wgz-addTest-topBtn-act');
                    activeBtn.attr('mark','change');

                    $('.wgz-addTest-mid').show();

                    $('#wgz-addTest-tTopic').val(result.testAllCon.tTopic);
                    $('#wgz-addTest-choiceA').val(result.optionAllCon.oA);
                    $('#wgz-addTest-choiceB').val(result.optionAllCon.oB);
                    $('#wgz-addTest-choiceC').val(result.optionAllCon.oC);
                    $('#wgz-addTest-choiceD').val(result.optionAllCon.oD);
                    $('#wgz-addTest-answer').val(result.testAllCon.tAnswer);
                    $('#wgz-addTest-tScore').val(result.testAllCon.tScore);
                    $('#wgz-addTest-tClassify').val(result.testAllCon.tClassify);

                    localStorage.setItem('mark',"needSubmitSingle");

                }else if(result.testAllCon.tType === 1){

                    let activeBtn = $('.wgz-addTest-top>p button:nth-child(2)');
                    activeBtn.attr('id','wgz-addTest-topBtn-act');
                    activeBtn.attr('mark','change');

                    $('.wgz-addTest-mid').hide();

                    $('#wgz-addTest-tTopic').val(result.testAllCon.tTopic);
                    $('#wgz-addTest-answer').val(result.testAllCon.tAnswer);
                    $('#wgz-addTest-tScore').val(result.testAllCon.tScore);
                    $('#wgz-addTest-tClassify').val(result.testAllCon.tClassify);

                    localStorage.setItem('mark',"needSubmitQuest");
                }
            }
        });
    }

});

$('#wgz-addTest-submit').click(function () {
    if(localStorage.getItem('mark') === "needSubmit"){
        localStorage.setItem('mark',"");
        let tType = $('#wgz-addTest-topBtn-act').val();
        if(tType === "0") {
            let jsonData = {
                mark: 'insertSingle',
                data: {
                    tType: tType,
                    tTopic: $('#wgz-addTest-tTopic').val(),
                    choiceA: $('#wgz-addTest-choiceA').val(),
                    choiceB: $('#wgz-addTest-choiceB').val(),
                    choiceC: $('#wgz-addTest-choiceC').val(),
                    choiceD: $('#wgz-addTest-choiceD').val(),
                    tAnswer: $('#wgz-addTest-answer').val(),
                    tScore: $('#wgz-addTest-tScore').val(),
                    tClassify: $('#wgz-addTest-tClassify').val()
                }
            }
            $.ajax({
                url: pathOl + 'test',
                type: 'post',
                data: JSON.stringify(jsonData),
                contentType: 'application/json',
                dataType: 'json',
                success: function (result){
                    if(result.result) {
                        $('#wgz-addTest-tTopic').val('');
                        $('#wgz-addTest-choiceA').val('');
                        $('#wgz-addTest-choiceB').val('');
                        $('#wgz-addTest-choiceC').val('');
                        $('#wgz-addTest-choiceD').val('');
                        $('#wgz-addTest-answer').val('');
                        $('#wgz-addTest-tScore').val('');
                        alert("添加成功！");
                    }
                }
            });
        }else if(tType === "1"){
            let jsonData = {
                mark: 'insertQuest',
                data: {
                    tType: tType,
                    tTopic: $('#wgz-addTest-tTopic').val(),
                    tAnswer: $('#wgz-addTest-answer').val(),
                    tScore: $('#wgz-addTest-tScore').val(),
                    tClassify: $('#wgz-addTest-tClassify').val()
                }
            }
            $.ajax({
                url: pathOl + 'test',
                type: 'post',
                data: JSON.stringify(jsonData),
                contentType: 'application/json',
                dataType: 'json',
                success: function (result){
                    if(result.result) {
                        $('#wgz-addTest-tTopic').val('');
                        $('#wgz-addTest-answer').val('');
                        $('#wgz-addTest-tScore').val('');
                        alert("添加成功！");
                    }
                }
            });
        }
    }else if(localStorage.getItem('mark') === "needSubmitSingle"){
        localStorage.setItem('mark',"");
        let jsonData = {
            mark: 'updateSingle',
            data: {
                tTopic: $('#wgz-addTest-tTopic').val(),
                choiceA: $('#wgz-addTest-choiceA').val(),
                choiceB: $('#wgz-addTest-choiceB').val(),
                choiceC: $('#wgz-addTest-choiceC').val(),
                choiceD: $('#wgz-addTest-choiceD').val(),
                tAnswer: $('#wgz-addTest-answer').val(),
                tScore: $('#wgz-addTest-tScore').val(),
                tClassify: $('#wgz-addTest-tClassify').val()
            }
        };
        $.ajax({
            url: pathOl + 'test',
            type: 'post',
            data: JSON.stringify(jsonData),
            contentType: 'application/json',
            dataType: 'json',
            success: function (result){
                if(result.result) {
                    $('#wgz-addTest-tTopic').val('');
                    $('#wgz-addTest-choiceA').val('');
                    $('#wgz-addTest-choiceB').val('');
                    $('#wgz-addTest-choiceC').val('');
                    $('#wgz-addTest-choiceD').val('');
                    $('#wgz-addTest-answer').val('');
                    $('#wgz-addTest-tScore').val('');
                    alert("修改成功！");
                }
            }
        });


    }else if(localStorage.getItem('mark') === "needSubmitQuest"){
        localStorage.setItem('mark',"");
        let jsonData = {
            mark: 'updateQuest',
            data: {
                tTopic: $('#wgz-addTest-tTopic').val(),
                tAnswer: $('#wgz-addTest-answer').val(),
                tScore: $('#wgz-addTest-tScore').val(),
                tClassify: $('#wgz-addTest-tClassify').val()
            }
        };
        $.ajax({
            url: pathOl + 'test',
            type: 'post',
            data: JSON.stringify(jsonData),
            contentType: 'application/json',
            dataType: 'json',
            success: function (result){
                if(result.result) {
                    $('#wgz-addTest-tTopic').val('');
                    $('#wgz-addTest-choiceA').val('');
                    $('#wgz-addTest-choiceB').val('');
                    $('#wgz-addTest-choiceC').val('');
                    $('#wgz-addTest-choiceD').val('');
                    $('#wgz-addTest-answer').val('');
                    $('#wgz-addTest-tScore').val('');
                    alert("修改成功！");
                }
            }
        });

    }



});