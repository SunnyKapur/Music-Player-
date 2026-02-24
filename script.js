let arr = [{
        songName: "Badli Si Hawa",
        url: "./audio/Badli.mp3",
        img: "https://c.saavncdn.com/376/Badli-Si-Hawa-Hai-From-The-Ba-ds-Of-Bollywood-Hindi-2025-20250825191010-500x500.jpg",
    },
    {
        songName: "Dilbar",
        url: "./audio/Dilbar.mp3",
        img: "https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/VW1EnqEgWk/size_m.jpg",
    },
    {
        songName: "Ghafoor",
        url: "./audio/Ghafoor.mp3",
        img: "https://i.ytimg.com/vi/ZFoGMWceM2A/maxresdefault.jpg",
    },
    {
        songName: "Raanjhan",
        url: "./audio/Raanjhan.mp3",
        img: "https://www.lyricsgoo.com/wp-content/uploads/2025/07/ja-ranjhan-ranjhan-lyrics.webp",
    },
    {
        songName: "Om Namo",
        url: "./audio/OmNamo.mp3",
        img: "https://i.ytimg.com/vi/lvUlT8VyOaw/sddefault.jpg",
    },
    {
        songName: "Roar",
        url: "./audio/Roar.mp3",
        img: "https://i.ytimg.com/vi/lvUlT8VyOaw/sddefault.jpg",
    },
    {
        songName: "Saiyaara",
        url: "./audio/Saiyaara.mp3",
        img: "https://c.ndtvimg.com/2025-07/9ln27jac_saiyaara_625x300_27_July_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    }
]

let allSongs = document.querySelector('.songs_list')
let card_img = document.querySelector('.card_img')


let playbtn = document.querySelector('button.play')
let body = document.body
let fill_div = document.querySelector('.fill_bar')
let replaybtn = document.querySelector('button.replay')
let forwardbtn = document.querySelector('button.forward')
let backbtn = document.querySelector('button.previous_song')
let nxtbtn = document.querySelector('button.next_song')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')



let audio = new Audio()
let selectedSong = 0;

function songsPlay() {
    let add = ""

    arr.forEach(function (elem, idx) {
        add = add + ` <div class="songs" id=${idx}>
                <img src="${elem.img}"
                    alt="">
                <h3>${elem.songName}</h3>
                <button><i class="ri-play-fill"></i> </button>
            </div>`

    })
    allSongs.innerHTML = add
    audio.src = arr[selectedSong].url
    
    card_img.style.backgroundImage = `url(${arr[selectedSong].img})`
    
    

}

songsPlay()

allSongs.addEventListener("click", function (elem) {
     playbtn.innerHTML = '<i class="ri-pause-fill"></i>'
    selectedSong = elem.target.id
    songsPlay()
    console.log(selectedSong)
    audio.play()
})

playbtn.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playbtn.innerHTML = '<i class="ri-pause-fill"></i>'
        console.log("audio play through btn")
    } else {
        audio.pause()
        playbtn.innerHTML = '<i class="ri-play-fill"></i>'
        console.log("audio paused through btn")
    }
})

body.addEventListener('keydown', function (elem) {
    if (elem.code == 'Space') {
        if (audio.paused) {
            audio.play();
            playbtn.innerHTML = '<i class="ri-pause-fill"></i>'

            console.log("audio play")
        } else {
            audio.pause()
            playbtn.innerHTML = '<i class="ri-play-fill"></i>'
            console.log("audio paused")
        }
    }
})

audio.addEventListener('timeupdate',function(){
    if(!isNaN(audio.duration)){
        let time =(audio.currentTime / audio.duration) *100;
        fill_div.style.width = `${time}%`
        h3.innerHTML = Math.floor(audio.currentTime)
        h4.innerHTML = Math.floor(audio.duration)
    }
})


body.addEventListener('keydown',function(elem){
   if(elem.code == 'ArrowLeft'){
     audio.currentTime = audio.currentTime - 10
   }
})
replaybtn.addEventListener('click',function(){
    audio.currentTime = audio.currentTime - 10
})

body.addEventListener('keydown',function(elem){
    if(elem.code == 'ArrowRight'){
        console.log( audio.currentTime = audio.currentTime + 10)
    }
})
forwardbtn.addEventListener('click',function(){
    audio.currentTime = audio.currentTime + 10
})

nxtbtn.addEventListener('click',function(){
    if(selectedSong < arr.length-1){
        selectedSong++
        songsPlay()
        audio.play()
        console.log(selectedSong)
    }
})
backbtn.addEventListener('click',function(){
    if(selectedSong >= 0){
        selectedSong--
        songsPlay()
        audio.play()
        console.log(selectedSong)
    }
})