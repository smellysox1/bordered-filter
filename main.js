function preload() {
    img= loadImage("https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    }
    
    function setup() {
   canvas =  createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
    }
    
    function draw() {
    image(video,0,0,640,480);
      tint(tint_colour);
      fill("green")
      rect(40,450,550,30)
      fill("green")
      rect(0,50,30,580)
      fill("green")
      rect(610,50,30,580)
fill("green")
rect(40,0,550,30)
fill("red");
circle(620,20,100);
fill("red");
      circle(20,20,100);
      fill("red");
      circle(20,470,100);
      fill("red");
      circle(620,470,100);
      ;
    }
 function   filter_tint(){
  tint_colour = document.getElementById("colour_name").value;

    }
    function take_snapshot(){
        save("slightly_edited_selfie.png");
    }