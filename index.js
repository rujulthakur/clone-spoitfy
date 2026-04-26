// -----------------------all initializations---------------------

const playlist_box = document.querySelector(".playlist1")



let dowload_button = document.querySelector(".install")
dowload_button.addEventListener("click", () => {
  // window.location.href = 'index2.html';
  window.open('index2.html', '_blank')
});
if (playlist_box) {

  playlist_box.addEventListener("click", () => {
    window.location.href = 'playlist.html';
  })
}




//------------------home button------------

// let home_button = document.querySelector(".home_icon");

// home_button.addEventListener("click", ()=>{
//   window.location.href = "index.html";
// })


document.addEventListener("DOMContentLoaded", () => {
  let home_button = document.querySelector(".home_icon");

  // Check if the button actually exists on this specific page
  if (home_button) {
    home_button.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  } else {
    console.log("Home button not found on this page - skipping listener.");
  }
});


// ------------------------for resizing of left box and right box

const resizer = document.getElementById('dragMe');
const leftbox = document.getElementById('leftbox');
const rightbox = document.querySelector('.right-box');

let isResizing = false;
if (resizer) {

  resizer.addEventListener('mousedown', function (e) {
    isResizing = true;
    e.preventDefault();
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
  });
}



function resize(e) {
  if (!isResizing) return;

  const dimenssions = leftbox.getBoundingClientRect();
  const oldWidth = dimenssions.left;

  // Calculate new width based on mouse position
  let newWidth = e.clientX - oldWidth;

  // Convert to viewport width for comparison
  const vwValue = (newWidth / window.innerWidth) * 100;

  // Apply min (20vw) and max (30vw) limits
  const minWidth = (18 * window.innerWidth) / 100;
  const maxWidth = (30 * window.innerWidth) / 100;

  if (newWidth > minWidth && newWidth < maxWidth) {
    leftbox.style.width = newWidth + 'px';
    resizer.style.cursor = "grabbing"
  }
  libraryIcon.style.display = 'none';
  libraryIcon.classList.remove("show");
  widthofrightbox(newWidth);
}

function stopResize() {
  isResizing = false;
  libraryIcon.style.display = 'flex';
  libraryIcon.classList.add("show");
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}








//--------------------------------- for add-library button


const addButton = document.querySelector('.add-library');


function widthofrightbox(newWidth) {
  const vwValue = (newWidth / window.innerWidth) * 100;
  if (vwValue < 24) {
    addButton.classList.add('hidden');

  } else {
    addButton.classList.remove('hidden');
  }
}
if(leftbox){

  widthofrightbox(leftbox.getBoundingClientRect().width);
}




// When the user clicks the resizer
if (resizer) {

  resizer.addEventListener('mousedown', function (e) {

    resizer.style.cursor = '';
    document.body.classList.add('is-dragging');

    // Your existing resizing logic here...
  });


  // When the user releases the mouse anywhere on the screen
  window.addEventListener('mouseup', function () {
    document.body.classList.remove('is-dragging');

  });
}




//---------------------------------- enlarge toggle button
const inlargerButton = document.querySelector('.inlarger');
if(leftbox){

  let previousLeftBoxWidth = leftbox.getBoundingClientRect().width;

let isExpanded = false;
if (inlargerButton) {

  inlargerButton.addEventListener('click', function () {
    if (!isExpanded) {
      previousLeftBoxWidth = leftbox.getBoundingClientRect().width;
      leftbox.style.width = '100vw';
      rightbox.style.display = 'none';
      document.getElementById('dragMe').style.display = 'none';
      isExpanded = true;
      document.querySelector('.inlarger').innerHTML = ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 4l-7 7" />
    <path d="M13 7v4h4" />
    
    <path d="M4 20l7-7" />
    <path d="M11 17v-4h-4" />
  </svg> `  }
    else {
      leftbox.style.width = previousLeftBoxWidth + 'px';
      rightbox.style.display = '';
      document.getElementById('dragMe').style.display = '';
      isExpanded = false;
      document.querySelector('.inlarger').innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 4h7v7" />
    <path d="M20 4l-7 7" />
    
    <path d="M11 20H4v-7" />
    <path d="M4 20l7-7" />
  </svg>`
    }
  });
}



}





const libraryIcon = document.querySelector('.library-icon');
const libraryButton = document.querySelector('.library-button');
const libraryadd = document.querySelector('.add-library');
if(leftbox){

  let leftboxoriginalWidth = leftbox.getBoundingClientRect().width;
  let minimize = false;
  if (leftbox) {
  
    leftbox.addEventListener('mouseenter', function () {
      if (!minimize) {
        libraryIcon.style.display = 'flex';
        libraryIcon.classList.add("show");
      }
    });
  
    leftbox.addEventListener('mouseleave', function () {
      if (!minimize) {
        libraryIcon.style.display = 'none';
        libraryIcon.classList.remove("show");
      }
    });
  }
}

if(leftbox){
  
  // ----------------------------------------------left minimize -----------------------

  if(libraryButton){
    let minimize = false
    libraryButton.addEventListener('click', function () {
      if (!minimize) {
        leftboxoriginalWidth = leftbox.getBoundingClientRect().width;
        leftbox.style.width = '3vw';
        leftbox.classList.add('minimized');
        libraryadd.classList.add("minimized");
        resizer.style.display = "none";
    
        libraryIcon.style.display = 'flex';
        libraryIcon.classList.add("show");
        libraryButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg> `
    
        minimize = true;
      } else {
        leftbox.style.width = leftboxoriginalWidth + 'px';
        leftbox.classList.remove('minimized');
        libraryadd.classList.remove("minimized");
        resizer.style.display = "";
        libraryButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg> `
    
        minimize = false;
      }
    });
    
  
  }  
  
  //---------------------------------------------------song card  -----------------------------------------
  
  
  
  function song_card(photosrc, songname, song_src, list_number) {
    let song_number = 1;
    let html_of_card = `
      <div class="song song_number${song_number}" 
           data-song="songs/${song_src}" 
           data-cover="${photosrc}" 
           data-name="${songname}">
        <div class="song-photo">
          <img src="${photosrc}" alt="${photosrc}">
          <button class="play-button" type="button">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M7 6v12l10-6z" fill="black"></path>
            </svg>
          </button>
        </div>
        <div class="song-name">${songname}</div>
      </div>
    `;
  
    if (list_number == 1) {
      document.querySelector(".allsongs1").innerHTML += html_of_card;
  
      song_number++;
  
    }
  
    else if (list_number == 2) {
      document.querySelector(".allsongs2").innerHTML += html_of_card;
  
      song_number++;
  
    }
    else if (list_number == 3) {
      document.querySelector(".allsongs3").innerHTML += html_of_card;
  
      song_number++;
  
    }
  
  
  }
  
  // // ------------------------------making songs-------------------------------------------------------------
  
  
  
  
  
  
  song_card("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkx1QBsMk2NSMW_jBMcsvYbRtc6SSF3eihA&s", "senorita", "senorita.mp3", "1")
  song_card("https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521", "there's nothing holding me back", "there's_nothing_holding_me_back.mp3", "1")
  song_card("https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96", "shape of you", "shape_of_you.mp3", "1")
  song_card("https://c.saavncdn.com/038/Bones-English-2022-20250618201126-500x500.jpg", "bones", "bones.mp3", "1")
  song_card("https://i1.sndcdn.com/artworks-REFVtCyn6wJTUaH9-CGZtVA-t500x500.png", "birds of feather", "birds_of_feather.mp3", "1")
  song_card("https://i1.sndcdn.com/artworks-qEILQazWGzao-0-t500x500.jpg", "CO2", "CO2.mp3", "1")
  song_card("https://c.saavncdn.com/131/Sailor-Song-English-2024-20240725141523-500x500.jpg", "sailor song", "sailor_song.mp3", "1")
  song_card("https://cdn-images.dzcdn.net/images/cover/37a20b62f754b7ff5a9a29a8f2fe9d27/200x200.jpg", "back to friends", "back_to_friends.mp3", "1")
  song_card("https://i.scdn.co/image/ab67616d0000b2738265a736a1eb838ad5a0b921", "sweater weather", "sweater_weather.mp3", "1")
  song_card("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iZ1QR1-UXRmeEA3brwxq2CsCHi8--XoiNw&s", "untill I find you", "untill_i_find_you.mp3", "1")
  song_card("https://cdn-images.dzcdn.net/images/cover/5d284b31cb9ddeb1a0c79aede5a94e1c/1900x1900-000000-81-0-0.jpg", "Wildflower", "WILDFLOWER.mp3", "1")
  song_card("https://i.scdn.co/image/ab67616d0000b27358d009016df3b62c8f9cad4d", "judas", "judas.mp3", "1")
  song_card("https://i.ytimg.com/vi/GQQWKsATQqQ/mqdefault.jpg", "poker face", "poker_face.mp3", "1")
  song_card("https://www.eminem.com/wp-content/uploads/sites/2004/2017/12/release_201712_cfbf1b48be71c873fa039edea69ca206b832f41b_0.jpg", "River", "river.mp3", "1")
  song_card("https://i.scdn.co/image/ab67616d0000b2731192ae62dfe52262a3cc3fed", "2002", "2002.mp3", "1")
  song_card("https://c.saavncdn.com/321/Rap-God-2013-500x500.jpg", "rap god", "rap_god.mp3", "1")
  song_card("https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/d9/ad/52/d9ad52e6-df50-8624-9a93-731aa4497d65/cover.jpg/800x600mv.webp", "happy nation", "happy_nation.mp3", "1")
  
  
  song_card("https://c.saavncdn.com/937/Chhichhore-Hindi-2019-20190904104023-500x500.jpg", "fikar not", "fikar_not.mp3", "2")
  song_card("https://c.saavncdn.com/304/Desi-Kalakaar-Hindi-2014-500x500.jpg", "love dose", "love_dose.mp3", "2")
  song_card("https://images.squarespace-cdn.com/content/v1/59bc5a17bebafb2c4407319a/1541000618676-PPUNQZCY3UF5I4FIZGGF/pinkLipstickCoverFor-i-net-noboarder.jpg", "pink lips", "pink_lips.mp3", "2")
  song_card("https://media.lyricsmint.com/photos/4730/character-dheela-ready_large.jpg", "character dheela", "character_dheela.mp3", "2")
  song_card("https://m.media-amazon.com/images/M/MV5BNjJkMjQ2YjctNGI5YS00MmMwLWFjMDItN2NjMTY1MDNmM2FkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "hayee oye", "hayee_oye.mp3", "2")
  song_card("https://m.media-amazon.com/images/I/51qMAH5oHHL._UXNaN_FMjpg_QL85_.jpg", "tu meri", "tu_meri", "2")
  song_card("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6Tm54e6LvnYaRPA4ZB724JTE2n0vnwRVrQ&s", "nashe si chad gyi", "nashe_si_chad_gyi.mp3", "2")
  
  
  
  
  // -----------------------------------------------playlist----------------------------------------------------->
  let playlist_songs = []
  const playlist_btn = document.querySelector(".add-library");
  playlist_box.classList.add("empty");
  let one_time_only = false;
  
  
  
  function playlist(nameofplaylist) {
    nameofplaylist = prompt("name of playlist")
    console.log("playlist created")
    playlist_box.innerHTML += ` <div class="playlist_outline"> <div class="playlist_icon"> 
                      <img src="https://i1.sndcdn.com/artworks-REFVtCyn6wJTUaH9-CGZtVA-t500x500.png" alt="#">
                  </div>
                  <div class="playlist_content">
                      <div class="playlist_name">${nameofplaylist}</div>
                      <div class="default_playlist">Playlist : Guest</div>
                  </div
                  </div>
     `
  }
  
  if (playlist_btn) {
  
    playlist_btn.addEventListener("click", () => {
  
      playlist();
      if (!one_time_only) {
        playlist_box.classList.remove("empty");
        one_time_only = true;
      }
  
    })
  }

}



//-------------------------------button functionality--------------------------------





const audio = document.getElementById("audio-player");
const buttons = document.querySelectorAll(".player_control button");
const prevBtn = buttons[0];
const playBtn = buttons[1];
const nextBtn = buttons[2];

const songBar = document.querySelector(".song-bar");
const currentT = document.querySelector(".current-time");
const totalT = document.querySelector(".total-time");
const coverpage = document.querySelector(".coverpage");
const nameofsong = document.querySelector(".nameofsong");






// Format seconds into mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}



//---------------------------onclick song get played---------------------------

document.querySelectorAll(".song").forEach(card => {
  if(card){

    card.addEventListener("click", () => {
      const songSrc = card.getAttribute("data-song");
      const coverpagedata = card.getAttribute("data-cover");
      const namesong = card.getAttribute("data-name");
  
      if (songSrc) {
        audio.src = songSrc;
        audio.dataset.currentname = namesong;
        audio.dataset.currentphoto = coverpagedata;
        audio.play();
        console.log("Playing:", songSrc);
        playBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6V18M15 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>
  `;
        coverpage.innerHTML = `
        <img src="${coverpagedata}" alt="#">
        `
        nameofsong.innerHTML = `
  ${namesong}`
  
      } else {
        console.error("No data-song attribute found on this card.");
      }
    });
  }
});



//----------------------------on space bar song get pause and played------------------------------------


window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();

    if (audio.paused) {
      audio.play();
      console.log("Music Resumed");
      playBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 6V18M15 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
</svg>
`;

    } else {
      audio.pause();
      console.log("Music Paused");
      playBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 4V20L20 12L7 4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>
`;
    }
  }
});

// -----------------------------------Play / Pause------------------------------------


playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 6V18M15 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
</svg>
`;
  } else {
    audio.pause();
    playBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 4V20L20 12L7 4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>
`;
  }
});

// // Previous Song
// prevBtn.addEventListener("click", () => {
//   currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
//   audio.src = playlist[currentSongIndex];
//   audio.play();
//   playBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9 6V18M15 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
// </svg>`
// });

// // Next Song
// nextBtn.addEventListener("click", () => {
//   currentSongIndex = (currentSongIndex + 1) % playlist.length;
//   audio.src = playlist[currentSongIndex];
//   audio.play();
//   playBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9 6V18M15 6V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
// </svg>`
// });





// -------------------------song bar controls------------------------------------------------




// Update total duration 
audio.addEventListener("loadedmetadata", () => {
  totalT.textContent = formatTime(audio.duration);
});



// update current duration
audio.addEventListener("timeupdate", () => {
  currentT.textContent = formatTime(audio.currentTime);
});



// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
  songBar.value = (audio.currentTime / audio.duration) * 100;
});

// jump when user click the bar
songBar.addEventListener("input", () => {
  audio.currentTime = (songBar.value / 100) * audio.duration;
});









// Auto-next when song ends
audio.addEventListener("ended", () => {
  nextBtn.click();
});










// ---------------------------Whenever the song source changes, ensure the bar is at 0--------



audio.addEventListener('loadstart', () => {
  document.querySelector('input[type="range"]').value = 0;
});

const mutebutton = document.getElementById("muted");

mutebutton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false
    mutebutton.innerHTML = `
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                    <path d="M15.5 8.5C16.8333 9.66667 17.5 10.8333 17.5 12C17.5 13.1667 16.8333 14.3333 15.5 15.5"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M19 5C21 7.33333 22 9.66667 22 12C22 14.3333 21 16.6667 19 19" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" />
                </svg>
        `

  }
  else {
    audio.muted = true
    mutebutton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/>
  <path d="M22 9L16 15M16 9L22 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
  }

})

//-----------------------------------volume bar-------------------

const volume_bar = document.getElementById("volume-bar");

volume_bar.addEventListener('input', (e) => {
  let value = e.target.value;
  audio.volume = value / 100;
});

audio.addEventListener("volumechange", () => {
  volume_bar.value = audio.volume * 100;
});



function updateVolumeBar(value) {
  volume_bar.style.background = `linear-gradient(
    to right,
    #00cded ${value}%,
    #535353 ${value}%
  )`;
}

volume_bar.addEventListener("input", (e) => {
  let value = e.target.value;
  audio.volume = value / 100;
  updateVolumeBar(value);
});

// Initialize
updateVolumeBar(volume_bar.value);







// ----------------------------------------playlist add button visibility --------------





const totalTim = document.querySelector(".total-time");
const librarybt = document.querySelector(".add-in-library");

function updatePlusIconVisibility() {
  const timeText = totalTim.textContent.trim();

  if (timeText === "0:00") {
    librarybt.style.display = "none";
  } else {
    librarybt.style.display = "block";
    librarybt.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
           viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>`;
  }
}


updatePlusIconVisibility();

// 2. IMPORTANT: Run this whenever the audio metadata loads (when a song starts)
audio.addEventListener('loadedmetadata', updatePlusIconVisibility);










