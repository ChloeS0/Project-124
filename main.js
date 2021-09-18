function preload()
{

}

function draw()
{
    
}

PoseX=0;
PoseY=0;
leftWrist=0;
rightWrist=0;
Distance=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,550);
    canvas.center;
    background("#495459");
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses);
   
}

function getPoses(results)
{
if(results.length > 0)
{
    console.log(results);
   
}
}

function modelLoaded()
{
    console.log("poseNet is loaded");
}