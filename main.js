console.log("Musify for the win!");
let songIndex = 0;
let audioElement = new Audio('./Songs/1.mp3');
    // audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let gif  = document.getElementById('songBanner');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Songs = [
    {songName: "Let Me Love You",filePath: "./Songs/1.mp3" , coverPath: "https://c.saavncdn.com/273/Encore-English-2016-20190419221937-500x500.jpg"},
    {songName: "Call Out My Name",filePath: "./Songs/2.mp3" , coverPath: "https://c.saavncdn.com/396/The-Highlights-English-2021-20210205104909-500x500.jpg"},
    {songName: "Attention",filePath: "./Songs/3.mp3" , coverPath: "https://wallpapercave.com/dwp1x/wp10168148.jpg"},
    {songName: "Drag Me Down",filePath: "./Songs/4.mp3" , coverPath: "https://upload.wikimedia.org/wikipedia/en/3/34/One_Direction_-_Drag_Me_Down_%28Official_Single_Cover%29.png"},
    {songName: "Starboy",filePath: "./Songs/5.mp3" , coverPath: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"},
    {songName: "Calm Down",filePath: "./Songs/6.mp3" , coverPath: "https://i1.sndcdn.com/artworks-TbobgbPvSPkSitB0-biumjQ-t500x500.jpg"}
]

 songItems.forEach((element,i) => {
    console.log(element,i);    
    element.getElementsByTagName("img")[0].src = Songs[i].coverPath;
    element.getElementsByTagName("span")[0].songName = Songs[i].songName;
 })
 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = (myProgressBar.value/100)*audioElement.duration;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index  = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');        
        e.target.classList.add('fa-pause-circle');
        audioElement.src = Songs[index-1].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = Songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
})

document.getElementById('back').addEventListener('click', ()=>{

    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = Songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
