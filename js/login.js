//用户名验证
function checkUsername(){
    var user = document.getElementById("user");
    var englishreg = /^[a-zA-Z0-9]{1,15}$/; 
    var chinesereg = /^[\u4e00-\u9fa5 ]{1,8}$/;
    if(englishreg.test(user.value)||chinesereg.test(user.value)){
        document.getElementById('span_user').innerHTML = '';
        return true;
        }
    else{
        document.getElementById('span_user').innerHTML = "*格式错误，请重新输入"
        user.value = "";
        return false;
        }
      
    }

//密码验证
function checkPwd(){
    var pwd=document.getElementById('pwd');
    var regpwd=/^[a-zA-Z0-9]{8,16}$/;
    if(regpwd.test(pwd.value)){
        document.getElementById('span_pwd').innerHTML = "";
        return true;
        }
    else{
        document.getElementById('span_pwd').innerHTML = '*密码错误，请重新输入';
        pwd.value="";
        return false;
    }
}

//登录答题页面
function Login(){
    if ( checkUsername() && checkPwd() ) {
        window.location.href = "../html/answer.html";
    }
    
}