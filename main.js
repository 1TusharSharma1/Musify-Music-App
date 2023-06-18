console.log("Musify for the win!");
let songIndex = 0;
let audioElement = new Audio('./Songs/Starboy.mp3');
    // audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let gif  = document.getElementById('songBanner');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Songs = [
    {songName: "Let Me Love You",filePath: "./Songs/LMLY.mp3" , coverPath: "https://c.saavncdn.com/273/Encore-English-2016-20190419221937-500x500.jpg"},
    {songName: "Call Out My Name",filePath: "./Songs/Starboy.mp3" , coverPath: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"},
    {songName: "Attention",filePath: "./Songs/LMLY.mp3" , coverPath: "https://wallpapercave.com/dwp1x/wp10168148.jpg"},
    {songName: "Drag Me Down",filePath: "./Songs/LMLY.mp3" , coverPath: "https://upload.wikimedia.org/wikipedia/en/3/34/One_Direction_-_Drag_Me_Down_%28Official_Single_Cover%29.png"},
    {songName: "ABCD",filePath: "./Songs/LMLY.mp3" , coverPath: " "},
    {songName: "Let Me Love You",filePath: "./Songs/LMLY.mp3" , coverPath: " "},
    {songName: "Let Me Love You",filePath: "./Songs/LMLY.mp3" , coverPath: " "},
    {songName: "Let Me Love You",filePath: "./Songs/LMLY.mp3" , coverPath: " "},
    {songName: "Let Me Love You",filePath: "./Songs/LMLY.mp3" , coverPath: " "},
    {songName: "Let Me Love You",filePath: "./Songs/LMLY.mp3" , coverPath: " "}
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
