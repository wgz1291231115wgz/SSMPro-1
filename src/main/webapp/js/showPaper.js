$(function () {
    let jsonData = {
        mark: "showAllPaper",
        data: ""
    };
    $.ajax({
        url: pathOl + "paper",
        type: "post",
        data: JSON.stringify(jsonData),
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            let len = result.result.length;
            for(let i = 0; i < len; i++){
                let tr = $('<tr>');
                let tdInput = $('<td><input type="checkbox"></td>')
                let tdIndex = $('<td>'+getIndex(i)+'</td>');
                let tdId = $('<td hidden>'+result.result[i].pId+'</td>');
                let tdA = $('<td><a>'+result.result[i].pName+'</a></td>');
                let tdScore = $('<td>'+result.result[i].pScore+'</td>');
                let tdTime = $('<td>'+result.result[i].createTime+'</td>');
                let tdBtn = $('<td><button class="wgz-paper-delBtn">删除</button><button class="wgz-paper-changeBtn">编辑</button></td>');

                tr.append(tdInput);
                tr.append(tdIndex);
                tr.append(tdA);
                tr.append(tdScore);
                tr.append(tdTime);
                tr.append(tdBtn);
                tr.append(tdId);
                $('#wgz-paper-table').append(tr);
            }
            $('.wgz-paper-delBtn').click(function () {
                
            });
            $('.wgz-paper-changeBtn').click(function () {
                
            });
        }
    });
});
$('#wgz-paper-addBtn').click(function () {
    let mainConPaper = $(this).parent().parent().parent();
    mainConPaper.html('');
    mainConPaper.load('con-pages/addPaper.html');
});