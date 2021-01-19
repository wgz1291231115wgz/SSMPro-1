function checkname(){
    var div = $("#div1");
    div.html("");
    var name1 = $("#text1").val();
    if (name1.length < 4 || name1.length > 16) {
        div.text("姓名输入的长度4-16个字符！");
        return false;
    }
    for (var i = 0; i < name1.length; i++) {
        var name = name1.charAt(i);
        if (!(name >= 0 && name <= 9) && (!(name >= 'A' && name <= 'Z')) && (!(name >= 'a' && name <= 'z')) && (name != '_')) {
            div.text("姓名包含非法字母，只能包含字母，数字，和下划线");
            return false;
        }
    }
    return true;
}

function checkpassword(){
    var div = $("#div2");
    div.html("");
    var password = $("#text2").val();
    if (password.length < 4 || password.length > 12) {
        div.text("密码长度4-12位");
        return false;
    }
    return true;
}

function checkrepassword(){
    var div = $("#div3");
    div.html("");
    var password = $("#text2").val();
    var repass = $("#text3").val();
    if (repass == "") {
        div.text("密码不能为空！");
        return false;
    }
    else if (password != repass) {
        div.text("输入密码和确认密码长度不一致");
        return false;
    }
    return true;
}

function checkEmail(){
    var div = $("#div4");
    div.html("");
    var email = $("#text4").val();
    var sw = email.indexOf("@", 0);
    var sw1 = email.indexOf(".", 0);
    var tt = sw1 - sw;
    if (email.length == 0) {
        div.text("电子邮件不能位空");
        return false;
    }
    else if (email.indexOf("@", 0) == -1) {
        div.text("电子邮件格式不正确，必须包含@符号！");
        return false;
    }
    else if (email.indexOf(".", 0) == -1) {
        div.text("电子邮件格式不正确，必须包含.符号!");
        return false;
    }
    else if (tt == 1) {
        div.text("邮件格式不对。@和.不可以挨着！");
        return false;
    }
    else if (sw > sw1) {
        div.text("电子邮件格式不正确，@符号必须在.之前");
        return false;
    }
    return true;
}

function checkPhone() {
    var div = $("#div5");
    div.html("");
    var phone = $("#text5").val();
    if (phone == "") {
        div.text("电话不能为空！");
        return false;
    }else {
        for (var i=0;i<phone.length;i++){
            var phone1 = phone.charAt(i);
            if (!(phone1>=0&&phone1<=9) && phone.length != 11) {
                div.text("手机号必须是11位的数字!");
                return false;
            }
        }
    }
    return true;
}

function Mlogin() {
    if (checkname() && checkpassword() && checkrepassword() && checkEmail() && checkPhone()){
        return true;
    }else {
        return false;
    }
}

function login() {
    if (checkname() && checkpassword()){
        return true;
    }else {
        return false;
    }
}