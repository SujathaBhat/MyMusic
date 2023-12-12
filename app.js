function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Add your authentication logic here
  // For demonstration purposes, let's assume a simple check
  if (username === "sujatha" && password === "1234") {
    // Add code for redirecting to the main page
    window.location.assign('index.html');
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

const music = new Audio("audio/1.mp3");
// music.play();
const songs = [
  {
    id: 1,
    songName: 'Heeriye <div class="subtitle"> Arjith Singh </div>',
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: 'Dil Diyan Gallan <div class="subtitle">Atif Aslam</div>',
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: 'Kacchi Yaari <div class="subtitle">Krithik Mallik</div>',
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: 'Pyaar he toh he <div class="subtitle">Armaan Mallik</div>',
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: 'Baarishein <div class="subtitle">Anuv Jain</div>',
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: 'Believer <div class="subtitle">Image dragons</div>',
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: 'Hamari Adhuri Kahani <div class="subtitle">Arijit Singh</div>',
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: 'Shayad<div class="subtitle">Vishal Shekhar</div>',
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: 'Maan Meri Jaan<div class="subtitle"> King  </div>',
    poster: "img/9.jpg",
  },
  {
    id: 10,
    songName: 'Mahiye Jinna Sohna<div class="subtitle"> Darshan Raval </div>',
    poster: "img/10.jpg",
  },
  {
    id: 11,
    songName: 'Shape of You<div class="subtitle">Ed Shreeran  </div>',
    poster: "img/11.jpg",
  },
  {
    id: 12,
    songName: 'Tu Jaana Na Piya<div class="subtitle"> King </div>',
    poster: "img/12.jpg",
  },
  {
    id: 13,
    songName: 'Gasolina<div class="subtitle"> Daddy Yankee </div>',
    poster: "img/13.jpg",
  },
  {
    id: 14,
    songName:
      'Sukhkarta-Dukhharta<div class="subtitle"> Shankar mahadevan </div>',
    poster: "img/14.jpg",
  },
  {
    id: 15,
    songName: 'Unstoppable<div class="subtitle">Sia  </div>',
    poster: "img/15.jpg",
  },
];

Array.from(document.getElementsByClassName("SongItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = `${songs[i].songName}`;
});
// search start
let search_results = document.getElementsByClassName("search_results")[0];
songs.forEach((element) => {
  const { id, songName, poster } = element;
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;
  card.innerHTML = `<img src=${poster} alt="">
      <div class="content">
        ${songName}
      </div>`;
  search_results.appendChild(card);
});
let input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName("a");
  for (index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];
    let text_value = as.textContent || as.innerHTML;
    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }
    if (input.value == 0) {
      search_results.style.display = "none";
    } else {
      search_results.style.display = "";
    }
  }
});

// search end

let masterplay = document.getElementById("master_play");
let waves = document.getElementById("waves");
masterplay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    waves.classList.add("active1");
    masterplay.classList.remove("bi-play-fill");
    masterplay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    waves.classList.remove("active1");
    masterplay.classList.remove("bi-pause-fill");
    masterplay.classList.add("bi-play-fill");
  }
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("SongItem")).forEach((el) => {
    el.style.background = "rgb(105, 105, 105,.0)";
  });
};

let index = 0;
// index++;
// console.log(index);

let title = document.getElementById("title");
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");

Array.from(document.getElementsByClassName("playListPlay")).forEach((a) => {
  a.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `audio/${index}.mp3`;
    // poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterplay.classList.remove("bi-play-fill");
    masterplay.classList.add("bi-pause-fill");
    download_music.href = `audio/${index}.mp3`;

    let filteredSongs = songs.filter((els) => els.id == index);

    if (filteredSongs.length > 0) {
      let { songName, poster } = filteredSongs[0];
      title.innerHTML = songName;
      poster_master_play.src = poster;
      download_music.setAttribute("download", songName);
    } else {
      console.error(`No song found with index ${index}`);
    }

    makeAllBackground();
    Array.from(document.getElementsByClassName("SongItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105,.1)";

    makeAllplays();

    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    waves.classList.add("active1");
  });
});
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_duration = music.duration;
  // console.log(music_curr)

  let min1 = Math.floor(music_duration / 60);
  let sec1 = Math.floor(music_duration % 60);

  // console.log('min1');
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_duration) * 100);
  seek.value = progressBar;
  console.log(seek.value);
  let seekbar = seek.value;
  if (!isNaN(seekbar)) {
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
  }
});
seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});
// music.addEventListener('ended', ()=>{

//     masterplay.classList.add('bi-pause-fill');
//     waves.classList.remove('active2');
//     index++;

//     music.src = `audio/${index}.mp3`;
//      poster_master_play.src=`img/${index}.jpg`;
//      music.play();
//     let filteredSongs = songs.filter((els) => els.id == index);

//     if (filteredSongs.length > 0) {
//     let { songName, poster } = filteredSongs[0];
//     title.innerHTML = songName;
//     poster_master_play.src = poster;
//     } else {
//     console.error(`No song found with index ${index}`);
//     };
//     makeAllBackground();
//     Array.from(document.getElementsByClassName('SongItem'))[`${index-1}`].style.background='rgb(105, 105, 105,.1)';;
//     makeAllplays();
//     document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
//     document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');

// });

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("SongItem")).length;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  masterplay.classList.remove("bi-play-fill");
  masterplay.classList.add("bi-pause-fill");

  let filteredSongs = songs.filter((els) => els.id == index);

  if (filteredSongs.length > 0) {
    let { songName, poster } = filteredSongs[0];
    title.innerHTML = songName;
    poster_master_play.src = poster;
  } else {
    console.error(`No song found with index ${index}`);
  }

  makeAllBackground();
  Array.from(document.getElementsByClassName("SongItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105,.1)";

  makeAllplays();

  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  waves.classList.add("active1");
});
next.addEventListener("click", () => {
  index += 1;
  if (index > Array.from(document.getElementsByClassName("SongItem")).length) {
    index = 1;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  masterplay.classList.remove("bi-play-fill");
  masterplay.classList.add("bi-pause-fill");

  let filteredSongs = songs.filter((els) => els.id == index);

  if (filteredSongs.length > 0) {
    let { songName, poster } = filteredSongs[0];
    title.innerHTML = songName;
    poster_master_play.src = poster;
  } else {
    console.error(`No song found with index ${index}`);
  }

  makeAllBackground();
  Array.from(document.getElementsByClassName("SongItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105,.1)";

  makeAllplays();

  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  waves.classList.add("active1");
});

let shuffle = document.getElementsByClassName("shuffle")[0];
shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;
  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;
    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";
      break;
    case "random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next|";
      break;
  }
});

const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  masterplay.classList.remove("bi-play-fill");
  masterplay.classList.add("bi-pause-fill");
  download_music.href = `audio/${index}.mp3`;

  let filteredSongs = songs.filter((els) => els.id == index);

  if (filteredSongs.length > 0) {
    let { songName, poster } = filteredSongs[0];
    title.innerHTML = songName;
    poster_master_play.src = poster;
    download_music.setAttribute("download", songName);
  } else {
    console.error(`No song found with index ${index}`);
  }

  makeAllBackground();
  Array.from(document.getElementsByClassName("SongItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105,.1)";

  makeAllplays();

  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  waves.classList.add("active1");
};

const random_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `audio/${index}.mp3`;
  // poster_master_play.src=`img/${index}.jpg`;
  music.play();
  masterplay.classList.remove("bi-play-fill");
  masterplay.classList.add("bi-pause-fill");
  download_music.href = `audio/${index}.mp3`;

  let filteredSongs = songs.filter((els) => els.id == index);

  if (filteredSongs.length > 0) {
    let { songName, poster } = filteredSongs[0];
    title.innerHTML = songName;
    poster_master_play.src = poster;
    download_music.setAttribute("download", songName);
  } else {
    console.error(`No song found with index ${index}`);
  }

  makeAllBackground();
  Array.from(document.getElementsByClassName("SongItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105,.1)";

  makeAllplays();

  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  waves.classList.add("active1");
};
const repeat_music = () => {
  index;
  music.src = `audio/${index}.mp3`;
  // poster_master_play.src=`img/${index}.jpg`;
  music.play();
  masterplay.classList.remove("bi-play-fill");
  masterplay.classList.add("bi-pause-fill");
  download_music.href = `audio/${index}.mp3`;

  let filteredSongs = songs.filter((els) => els.id == index);

  if (filteredSongs.length > 0) {
    let { songName, poster } = filteredSongs[0];
    title.innerHTML = songName;
    poster_master_play.src = poster;
    download_music.setAttribute("download", songName);
  } else {
    console.error(`No song found with index ${index}`);
  }

  makeAllBackground();
  Array.from(document.getElementsByClassName("SongItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105,.1)";

  makeAllplays();

  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  waves.classList.add("active1");
};

music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;
  switch (b) {
    case "repeat":
      repeat_music();
      break;
    // break;
    case "next":
      next_music();
      break;
    case "random":
      random_music();
      break;
  }
});

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 300;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 300;
});
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 300;
});
pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 300;
});
