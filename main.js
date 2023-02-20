NoseX= "";
NoseY= "";
leftWristX= 0;
rightWristX= 0;
difference= 0;
function setup(){
    canvas= createCanvas(300,300)
    canvas.center();
    video= createCapture(VIDEO)
    video.size(300,300);
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
console.log("Model Loaded!!")}
function gotPoses(results){
if(results.length>0){
    console.log(results)
    NoseX= results[0].pose.nose.x;
    NoseY= results[0].pose.nose.y;
    console.log("noseX="+NoseX+"noseY="+NoseY);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference=  floor(leftWristX-rightWristX);
}
}
function draw(){
    background('#348feb');
fill('#ba03fc')
stroke('#ba03fc')
text(Sarthak,leftWristX,rightWristX)
}