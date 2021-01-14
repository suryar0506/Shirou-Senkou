var mars_nasa_images = ["Mars photo 1.jpeg","Mars photo 2.jpg","Mars photo 3.jpg","Mars photo 4.jpg"];
random_number = Math.floor(Math.random() * 4);
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
var background_image = mars_nasa_images[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

  function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
  } 
    function uploadBackground(){
        ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    }
      function uploadRover(){
        ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
      }
        window.addEventListener("keydown",my_keydown);
          function my_keydown(e){
              keyPressed = e.keyCode;
              console.log(keyPressed);
              if (keyPressed == 38){
                up();
                console.log("up");
              }
              if (keyPressed == 39){
                right();
                console.log("right");
              }
              if (keyPressed == 37){
                left();
                console.log("left");
              }
              if (keyPressed == 40){
                down();
                console.log("down");
              }
          }
          function up(){
              if(rover_y >= 0){
                  rover_y = rover_y - 10;
                  console.log("When up arrow is pressed, X = " + rover_x + ",Y = " + rover_y);
                  uploadBackground();
                  uploadRover();
              } 
          }
          function down(){
              if(rover_y <= 500){
                  rover_y = rover_y + 10;
                  console.log("When down arrow is pressed, X = " + rover_x + ",Y = " + rover_y);
                  uploadBackground();
                  uploadRover();
              }
          }
          function left(){
              if(rover_x >= 0){
                  rover_x = rover_x - 10;
                  console.log("When left arrow is pressed, X = " + rover_x + ",Y = " + rover_y);
                  uploadBackground();
                  uploadRover();
              }
          }
          function right(){
              if(rover_x <= 700){
                rover_x = rover_x + 10;
                console.log("When right arrow is pressed, X = " + rover_x + ",Y = " + rover_y);
                uploadBackground();
                uploadRover();
              }
          }
          