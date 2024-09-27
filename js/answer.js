var countdown = 120;	
var usetime = 120;
var handin = document.getElementById("handin");
var timer = document.getElementById("counttime");

//清除上次commit内存
sessionStorage.clear();	

//倒计时函数
function Count() { 		
	  
    	var t = setTimeout("Count()",1000);	
        let minutes = Math.floor(countdown/60); //计算出分钟    
    	let seconds = Math.floor(countdown%60);  //计算出秒   
    	timer.innerHTML = "距离答题结束还有"+minutes+"分"+seconds+"秒";
        --countdown;
        if(sessionStorage.click){
    		usetime = 120 - countdown;
    		clearTimeout(t);
   
    		Commitdisplay();
    		return usetime;
    	}
        	
    if (!countdown) {
    	timer.innerHTML = "答题结束";
    	clearTimeout(t);
    	var arr = document.getElementsByClassName("box");
    	for (; arr[11].style.left != 666 + "px"; ) {
    		Next();
    	}
    	Score();
    	Commit();

    } 
     return usetime;
 		
}

// localStorage.setItem(localStorage.clickcount,usetime);

var score = 0;
var Score = function(){		
	var A = document.getElementsByClassName('A');
	for (var i = 0; i < A.length; i++) {
		(function(i){
			A[i].onclick = function(){
				A[i].style.background = "green";
				if (i == 0 || i == 5 || i == 9){
					score = score + 10;
				}
			}		
		}(i))	
	}

	var B = document.getElementsByClassName('B');
	for (var i = 0; i < B.length; i++) {
		(function(i){
			B[i].onclick = function(){
				B[i].style.background = "green";
				if (i == 4 || i == 7){
					score = score + 10;
				}
			}		
		}(i))	
	}
	var C = document.getElementsByClassName('C');
	for (var i = 0; i < C.length; i++) {
		(function(i){
			C[i].onclick = function(){
				C[i].style.background = "green";
				if (i == 1 || i == 6){
					score = score + 10;
				}
			}		
		}(i))	
	}
	var D = document.getElementsByClassName('D');
	for (var i = 0; i < D.length; i++) {
		(function(i){
			D[i].onclick = function(){
				D[i].style.background = "green";
				if (i == 2 || i == 3 || i == 8){
					score = score + 10;
				}
			}		
		}(i))	
	}
	
	return score;
	
}


//开始答题
function Start(){
	Next();
	Count();
}




//提交
function Commit(){
	Next();
	Commitdisplay();
}

function Commitdisplay(){
	var scoreall = document.getElementById("scoreall");
	timer.innerHTML = "答题结束";
	clearTimeout();
// 记录commit次数
	if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
    if(sessionStorage.click)
    	sessionStorage.click = 1;
    else
    	sessionStorage.click = 0;
        // var number = localStorage.clickcount;
        scoreall.innerHTML = " 本次答题，你的分数是" + score + "，用时" + usetime + "秒";
        localStorage.setItem(localStorage.clickcount,score);
        localStorage.setItem(score,usetime);
    // return number;
	// Again();
}
	let number = localStorage.clickcount;
    let scores = localStorage.getItem(localStorage.clickcount);
    let times = localStorage.getItem(score);
// localStorage.clear();

//点击至上一页
function Last(){
	var arr = document.getElementsByClassName("box");
	for(var i=0;i<arr.length;i++){
		arr[i].style.left = parseInt(arr[i].style.left) + 666 + "px";
	}
}

//点击至下一页
function Next(){
	var arr = document.getElementsByClassName("box");
	for(var i=0;i<arr.length;i++){
		arr[i].style.left = parseInt(arr[i].style.left) - 666 + "px";
	}
}

//重做一遍
var Again = function()  
{  
   window.location.reload();  
}

//排行榜
// var no1 = document.getElementById("no1");
// var no2 = document.getElementById("no2");
// var no3 = document.getElementById("no3");
// var no4 = document.getElementById("no4");
// var no5 = document.getElementById("no5");
// for (var i = 1; i <= number; i++) {
// 	for (var m = number; m >= 1; m--) {
// 		if (localStorage.getItem(number) < localStorage.getItem(number-1)) {
// 			var middle;
// 			middle = localStorage.getItem(number);
// 			localStorage.getItem(number) = localStorage.getItem(number-1);
// 			localStorage.getItem(number-1) = middle;			
// 		}		
// 	}	
// }
no1.innerHTML = score+"分, 用时"+usetime + "s";

//加载页面
window.onload = Allonload()
function Allonload(){
	Onload1();
	Onload2();
	Score();
}
//加载轮播
function Onload1(){
	var arr = document.getElementsByClassName("box");
	for(var i = 0; i < arr.length; i++){
		arr[i].style.left = i*666+"px";
	}
}

//加载题目及选项
function Onload2(){
			var question1 = document.getElementById("question1");
			var question2 = document.getElementById("question2");
			var question3 = document.getElementById("question3");
			var question4 = document.getElementById("question4");
			var question5 = document.getElementById("question5");
			var question6 = document.getElementById("question6");
			var question7 = document.getElementById("question7");
			var question8 = document.getElementById("question8");
			var question9 = document.getElementById("question9");
			var question10 = document.getElementById("question10");
			var oneA = document.getElementById("oneA");
			var oneB = document.getElementById("oneB");
			var oneC = document.getElementById("oneC");
			var oneD = document.getElementById("oneD");
			var twoA = document.getElementById("twoA");
			var twoB = document.getElementById("twoB");
			var twoC = document.getElementById("twoC");
			var twoD = document.getElementById("twoD");
			var threeA = document.getElementById("threeA");
			var threeB = document.getElementById("threeB");
			var threeC = document.getElementById("threeC");
			var threeD = document.getElementById("threeD");
			var fourA = document.getElementById("fourA");
			var fourB = document.getElementById("fourB");
			var fourC = document.getElementById("fourC");
			var fourD = document.getElementById("fourD");
			var fiveA = document.getElementById("fiveA");
			var fiveB = document.getElementById("fiveB");
			var fiveC = document.getElementById("fiveC");
			var fiveD = document.getElementById("fiveD");
			var sixA = document.getElementById("sixA");
			var sixB = document.getElementById("sixB");
			var sixC = document.getElementById("sixC");
			var sixD = document.getElementById("sixD");
			var sevenA = document.getElementById("sevenA");
			var sevenB = document.getElementById("sevenB");
			var sevenC = document.getElementById("sevenC");
			var sevenD = document.getElementById("sevenD");
			var eightA = document.getElementById("eightA");
			var eightB = document.getElementById("eightB");
			var eightC = document.getElementById("eightC");
			var eightD = document.getElementById("eightD");
			var nineA = document.getElementById("nineA");
			var nineB = document.getElementById("nineB");
			var nineC = document.getElementById("nineC");
			var nineD = document.getElementById("nineD");
			var tenA = document.getElementById("tenA");
			var tenB = document.getElementById("tenB");
			var tenC = document.getElementById("tenC");
			var tenD = document.getElementById("tenD");
			var request = new XMLHttpRequest();
			request.onreadystatechange = function(){
				if(request.status === 200 && request.readyState === 4) {
					console.log("success");
					var text = request.response;
					question1.innerHTML = JSON.parse(text).data.one.question + '<br/>' ;
					question2.innerHTML = JSON.parse(text).data.two.question + '<br/>' ;
					question3.innerHTML = JSON.parse(text).data.three.question + '<br/>' ;
					question4.innerHTML = JSON.parse(text).data.four.question + '<br/>' ;
					question5.innerHTML = JSON.parse(text).data.five.question + '<br/>' ;
					question6.innerHTML = JSON.parse(text).data.six.question + '<br/>' ;
					question7.innerHTML = JSON.parse(text).data.seven.question + '<br/>' ;
					question8.innerHTML = JSON.parse(text).data.eight.question + '<br/>' ;
					question9.innerHTML = JSON.parse(text).data.nine.question + '<br/>' ;
					question10.innerHTML = JSON.parse(text).data.ten.question + '<br/>' ;
					oneA.innerHTML = JSON.parse(text).data.one.answer.A + '<br/>' ;
					oneB.innerHTML = JSON.parse(text).data.one.answer.B + '<br/>' ;
					oneC.innerHTML = JSON.parse(text).data.one.answer.C + '<br/>' ;
					oneD.innerHTML = JSON.parse(text).data.one.answer.D + '<br/>' ;
					twoA.innerHTML = JSON.parse(text).data.two.answer.A + '<br/>' ;
					twoB.innerHTML = JSON.parse(text).data.two.answer.B + '<br/>' ;
					twoC.innerHTML = JSON.parse(text).data.two.answer.C + '<br/>' ;
					twoD.innerHTML = JSON.parse(text).data.two.answer.D + '<br/>' ;
					threeA.innerHTML = JSON.parse(text).data.three.answer.A + '<br/>' ;
					threeB.innerHTML = JSON.parse(text).data.three.answer.B + '<br/>' ;
					threeC.innerHTML = JSON.parse(text).data.three.answer.C + '<br/>' ;
					threeD.innerHTML = JSON.parse(text).data.three.answer.D + '<br/>' ;
					fourA.innerHTML = JSON.parse(text).data.four.answer.A + '<br/>' ;
					fourB.innerHTML = JSON.parse(text).data.four.answer.B + '<br/>' ;
					fourC.innerHTML = JSON.parse(text).data.four.answer.C + '<br/>' ;
					fourD.innerHTML = JSON.parse(text).data.four.answer.D + '<br/>' ;
					fiveA.innerHTML = JSON.parse(text).data.five.answer.A + '<br/>' ;
					fiveB.innerHTML = JSON.parse(text).data.five.answer.B + '<br/>' ;
					fiveC.innerHTML = JSON.parse(text).data.five.answer.C + '<br/>' ;
					fiveD.innerHTML = JSON.parse(text).data.five.answer.D + '<br/>' ;
					sixA.innerHTML = JSON.parse(text).data.six.answer.A + '<br/>' ;
					sixB.innerHTML = JSON.parse(text).data.six.answer.B + '<br/>' ;
					sixC.innerHTML = JSON.parse(text).data.six.answer.C + '<br/>' ;
					sixD.innerHTML = JSON.parse(text).data.six.answer.D + '<br/>' ;
					sevenA.innerHTML = JSON.parse(text).data.seven.answer.A + '<br/>' ;
					sevenB.innerHTML = JSON.parse(text).data.seven.answer.B + '<br/>' ;
					sevenC.innerHTML = JSON.parse(text).data.seven.answer.C + '<br/>' ;
					sevenD.innerHTML = JSON.parse(text).data.seven.answer.D + '<br/>' ;
					eightA.innerHTML = JSON.parse(text).data.eight.answer.A + '<br/>' ;
					eightB.innerHTML = JSON.parse(text).data.eight.answer.B + '<br/>' ;
					eightC.innerHTML = JSON.parse(text).data.eight.answer.C + '<br/>' ;
					eightD.innerHTML = JSON.parse(text).data.eight.answer.D + '<br/>' ;
					nineA.innerHTML = JSON.parse(text).data.nine.answer.A + '<br/>' ;
					nineB.innerHTML = JSON.parse(text).data.nine.answer.B + '<br/>' ;
					nineC.innerHTML = JSON.parse(text).data.nine.answer.C + '<br/>' ;
					nineD.innerHTML = JSON.parse(text).data.nine.answer.D + '<br/>' ;
					tenA.innerHTML = JSON.parse(text).data.ten.answer.A + '<br/>' ;
					tenB.innerHTML = JSON.parse(text).data.ten.answer.B + '<br/>' ;
					tenC.innerHTML = JSON.parse(text).data.ten.answer.C + '<br/>' ;
					tenD.innerHTML = JSON.parse(text).data.ten.answer.D + '<br/>' ;

				}else{
					console.log("something wrong");
				}
			}
			request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/question",true);
			request.send();
		}