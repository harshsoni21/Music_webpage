const music = new Audio('audio/arjit song and img/arjit_audio/1.mp3');
// music play();
// making array  

const songs = [
    {
        id:'1',
        songName:` Naina Asaq Na Ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/1.jpg"
    },
    {
        id:'2',
        songName:` Khairiyat <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Desh Mere <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/3.jpg",
    },
    {
        id:"4",
        songName: `Dokha <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/4.jpg",
    },
    {
        id:"5",
        songName: `Tera Yaar Hu Main <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/5.jpg",
    },
    {
        id:"6",
        songName: `Muskarane ki Wajah <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/6.jpg",
    },
    {
        id:"7",
        songName: `Galti Se Mistake <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/7.jpg",
    },
    {
        id:"8",
        songName: `Hamari Aduri Kahani  <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/8.jpg",
    },
    {
        id:"9",
        songName: `Traffic <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/9.jpg",
    },
    {
        id:"10",
        songName: `EK Villian <br><div class="subtitle">Arijit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/10.jpg",
    },
    {
        id:"11",
        songName: `Mere Yaara <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/11.jpg",
    },
    {
        id:"12",
        songName: `Befike <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/12.jpg",
    },
    {
        id:"13",
        songName: `Ae Vatan <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/13.jpg",
    },
    {
        id:"14",
        songName: `Tamasa <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/14.jpg",
    },
    {
        id:"15",
        songName: `Pachtaoge <br><div class="subtitle">Arjit Singh</div>`,
        poster: "audio/arjit song and img/arjit_img/15.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

// search 
let search_results = document.getElementsByClassName("search_results")[0];

songs.forEach(element=>{
    const {id,songName,poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `   <img src= ${poster} alt="">
    <div class="content">
      ${songName}
    </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
  let as = items[index].getElementsByClassName('content')[0];
  let text_value = as.textContent || as.innerHTML;

  if(text_value.toUpperCase().indexOf(input_value) > -1){
    items[index].style.display = "flex";
  }
  else{
    items[index].style.display = "none";
  }
        if (input.value==0) {
            search_results.style.display = "none";
        }
        else{
            search_results.style.display = "";
        }
    }
})
// search finish


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/arjit song and img/arjit_audio/${index}.mp3`;
        poster_master_play.src =`audio/arjit song and img/arjit_img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/arjit song and img/arjit_audio/${index}.mp3`;
    poster_master_play.src =`audio/arjit song and img/arjit_img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/arjit song and img/arjit_audio/${index}.mp3`;
    poster_master_play.src =`audio/arjit song and img/arjit_img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})



let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})

music.addEventListener('ended',(e)=>{
    // masterPlay.classList.remove('bi-play-fill');
    // masterPlay.classList.add('bi-pause-fill');
    // wave.classList.add('active2');
   index ++;
   makeAllPlays();
//    e.target.classList.remove('bi-play-circle-fill');
//    e.target.classList.add('bi-pause-circle-fill');
   music.src = `audio/arjit song and img/arjit_audio/${index}.mp3`;
   poster_master_play.src =`audio/arjit song and img/arjit_img/${index}.jpg`;
   music.play();
    let song_title = songs.filter((ele)=>{
       return ele.id == index;
   })

   song_title.forEach(ele =>{
       let {songName} = ele;
       title.innerHTML = songName;
   })
 
 
    //    masterPlay.classList.add('bi-play-fill');
    //    masterPlay.classList.remove('bi-pause-fill');
    //    wave.classList.remove('active2');

   makeAllBackgrounds();
   Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
  
});




