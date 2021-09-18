song= "";
song_1 = "";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}    

function draw()
{
    image(video, 0, 0 , 600, 500);
}

function preload()
{
    song = loadSound("BadBoy.mp3");
    song_1 = loadSound("ShellShocked.mp3");
}

function play()
{
    song.play();
    song_1.play();
}
