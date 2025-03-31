let song = document.getElementById("song")
let progress = document.getElementById("progress")
let playPause = document.getElementById("controlPlay")
let nextCount = 1
let next = document.getElementById("next")
let previous = document.getElementById("previous")
let music = document.getElementById("music")
let image = document.getElementById("image")
let text = document.getElementById("imagesText")
song.pause()
playPause.src = "images/play-button-arrowhead.png"
song.onloadedmetadata = function(){
    progress.max = song.duration
    progress.value = song.currentTime
}
playPause.addEventListener("click", ()=>{
    PausePlay()
})
document.addEventListener("keypress", (event)=>{
    if (event.key === "Enter"){
        PausePlay() 
    }
})
document.addEventListener("keypress", (event)=>{
    if (event.key === "Backspace"){
        PausePlay()
    }
})
if (song.play()){
    setInterval(() => {
        progress.value = song.currentTime
    }, 500);
}
progress.onchange = function(){
    song.play()
    playPause.src = "/images/pause.png"
    song.currentTime = progress.value
    song.duration = progress.max
}
function PausePlay() {
    if(playPause.src.includes("pause.png")){
        song.pause()
        playPause.src = "images/play-button-arrowhead.png"
    }
    else{
        song.play()
        playPause.src = "/images/pause.png"
    }
}
next.addEventListener("click", (event)=>{
    if (nextCount >= 1){
        nextCount ++
        song.src = "Musics/music" + nextCount + ".mp3"
        song.play()
        image.src = "images/image2.jpg"
    }
})
previous.addEventListener("click", (event)=>{
    if (nextCount >= 1){
        nextCount --;
        song.src = "Musics/music" + nextCount + ".mp3"
        song.play()
        image.src = "images/image1.png"
    }
})
