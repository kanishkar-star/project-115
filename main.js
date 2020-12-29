change_filter = 0;
noseX = 0;
noseY = 0;
function preload(){

}

function setup(){
    canvas = createCanvas(300, 280);
    canvas.position(643, 300);
    video = createCapture(VIDEO);
    video.size(300, 280);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotpose);
}

function modelLoaded(){
    console.log('Posenet is Initialized');
}

function gotpose(results){
    if(change_filter == 2){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y+15;
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
    }
}
if(change_filter == 1){
    if( results.length > 0){
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log('Nose X = ' + results[0].pose.nose.x);
        console.log('Nose Y = ' + results[0].pose.nose.y);
    }

}

}

function draw(){
image(video, 0, 0, 300, 280);
}

function take_snapshot(){
    save('myFilter.png');
}

function change_moustache(){
    document.getElementById("background_body").style.backgroundImage = "url(moustache.jpg)";
    change_filter = 1;
    marquee = document.getElementById("alerting_marquee");
    marquee.parentNode.removeChild(marquee);
} 

function change_lipstick(){
    document.getElementById("background_body").style.backgroundImage = "url(lipstick.jpg)";
    change_filter = 2;
    marquee = document.getElementById("alerting_marquee");
    marquee.parentNode.removeChild(marquee);
}

if(change_filter == 0){
    document.getElementById("alerting_div").innerHTML = "<marquee direction = 'left' id='alerting_marquee'>Click on any one of the filter to add filter on your video</marquee>"
}