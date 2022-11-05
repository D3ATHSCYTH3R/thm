o=[];
s="";

function preload(){
    b=loadImage('dc.jpg');
}
function setup(){
    canvas=createCanvas(380,370);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,370);
    video.hide();
    h=ml5.objectDetector('cocossd', ok);
    document.getElementById("l").innerHTML="PROGRESS : DETECTING";
}

function ok(){
    console.log("model is loaded");
   s=true;
   h.detect(video ,gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }

        console.log("results");
        o=results;

}

function draw(){
    image(video ,0,0, 380,370);

    if(s != ""){
        for(i=0; i<o.length; i++){
            document.getElementById("l").innerHTML="STATUS = OBJECT DETCTED";
            document.getElementById("kl").innerHTML="Number of objects detected is = " + o.length;


            r= random(255);
            g= random(255);
            b= random(255);


            fill(r, g, b);
            n=floor(o[i].confidence*100);

            noFill();
            stroke(r, g, b);
            text(o[i].label+" "+n+"%",o[i].x+15,o[i].y+15);
             rect(o[i].x,o[i].y,o[i].width,o[i].height);
        }
    }
}