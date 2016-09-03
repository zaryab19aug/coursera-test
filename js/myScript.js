function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function geti()
{

var x = getRandomInt(0,40);
var myElements = document.querySelectorAll(".banner");
   
if( x == 1 || x == 2)
	myElements[0].style.backgroundImage = "url('img/1.jpg')";
else if (x == 3 || x == 4)
	myElements[0].style.backgroundImage = "url('img/2.jpg')";
else if (x == 5 || x == 6)
	myElements[0].style.backgroundImage = "url('img/3.jpg')";
else if (x == 7 || x == 8)
	myElements[0].style.backgroundImage = "url('img/4.jpg')";
else if (x == 9 || x == 10)
	myElements[0].style.backgroundImage = "url('img/5.jpg')";
else if (x == 11 || x == 12)
	myElements[0].style.backgroundImage = "url('img/6.jpg')";
else if (x == 13 || x == 14)
	myElements[0].style.backgroundImage = "url('img/7.jpg')";
else if (x == 15 || x == 16)
	myElements[0].style.backgroundImage = "url('img/8.jpg')";
else if (x == 17 || x == 18)
	myElements[0].style.backgroundImage = "url('img/9.jpg')";
else if (x == 19 || x == 20)
	myElements[0].style.backgroundImage = "url('img/10.jpg')";
else if (x == 21 || x == 22)
	myElements[0].style.backgroundImage = "url('img/11.jpg')";
else if (x == 23 || x == 24)
	myElements[0].style.backgroundImage = "url('img/12.jpg')";
else if (x == 25 || x == 26)
	myElements[0].style.backgroundImage = "url('img/13.jpg')";
else if (x == 27 || x == 28)
	myElements[0].style.backgroundImage = "url('img/14.jpg')";
else if (x == 29 || x == 30)
	myElements[0].style.backgroundImage = "url('img/15.jpg')";
else if (x == 31 || x == 32)
	myElements[0].style.backgroundImage = "url('img/16.jpg')";
else if (x == 33 || x == 34)
	myElements[0].style.backgroundImage = "url('img/17.jpg')";
else if (x == 35 || x == 36)
	myElements[0].style.backgroundImage = "url('img/18.jpg')";
else 
	myElements[0].style.backgroundImage = "url('img/19.jpg')";
}

$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
});