canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

var car1_width=120;
var car1_height=70;
var car1_image="car1.png"
var car1_x=10;
var car1_y=10;

var car2_width=120;
var car2_height=70;
var car2_image="car2.png"
var car2_x=10;
var car2_y=100;

var background_image="racing.jpg";


var background_imgTag,rover_imgTag,keypressed;
function add(){
   background_imgTag=new Image();
   background_imgTag.onload=upload_background;
   background_imgTag.src=background_image;
   
   car1_imgTag=new Image();
   car1_imgTag.onload=upload_car1;
   car1_imgTag.src=car1_image;

   car2_imgTag=new Image();
   car2_imgTag.onload=upload_car2;
   car2_imgTag.src=car2_image;
}

function upload_background(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function upload_car2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        console.log("up");
        car1_up();
    }
    if(keypressed=="40"){
        console.log("down");
        car1_down();
    }
    if(keypressed=="37"){
        console.log("left");
        car1_left();
    }
    if(keypressed=="39"){
        console.log("right");
        car1_right();
    }
    if(keypressed=="87"){
        console.log("key_w");
        car2_up();
    }
    if(keypressed=="83"){
        console.log("key_s");
        car2_down();
    }
    if(keypressed=="65"){
        console.log("key_a");
        car2_left();
    }
    if(keypressed=="68"){
        console.log("key_d");
        car2_right();
    }
    
    if(car1_x >700){
        document.getElementById("game_status").innerHTML="Car_1 Won!";
        console.log("Car_1 Won!");
    }
    if(car2_x >700){
        document.getElementById("game_status").innerHTML="Car_2 Won!";
        console.log("Car_2 Won!");
    }
}

function car1_up(){
    if(car1_y >=0){
        car1_y=car1_y-10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_down(){
    if(car1_y <=500){
        car1_y=car1_y+10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_left(){
    if(car1_x >=0){
        car1_x=car1_x-10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_right(){
    if(car1_x <=700){
        car1_x=car1_x+10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}


function car2_up(){
    if(car2_y >=0){
        car2_y=car2_y-10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_down(){
    if(car2_y <=500){
        car2_y=car2_y+10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_left(){
    if(car2_x >=0){
        car2_x=car2_x-10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_right(){
    if(car2_x <=700){
        car2_x=car2_x+10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

