let videos = [
  {
    "name": "Rivals Edit",
    "creator": "xXSillyBillyXx",
    "video": "https://ia903108.us.archive.org/3/items/rivals-edit/Rivals%20Edit.mp4",
    "thumbnail": "Rivals Edit.png",
    "tags": ["roblox", "rivals", "edit"]
  },
  {
    "name": "BLOOD!!!",
    "creator": "xXSillyBillyXx",
    "video": "https://ia800603.us.archive.org/22/items/blood_202607/BLOOD%21%21%21.mp4",
    "thumbnail": "Rivals Edit.png",
    "tags": ["roblox", "rivals", "edit", "blood", "horror"]
  }
];

// ELEMENTS
const player = document.getElementById("player");
const title = document.getElementById("title");
const creator = document.getElementById("creator");
const sidebar = document.getElementById("sidebar");
const search = document.getElementById("search");

// LOAD VIDEO INTO PLAYER
function loadVideo(video) {
  player.src = video.video;
  player.load();
  player.play();

  title.innerText = video.name;
  creator.innerText = "Created by " + video.creator;
}

// RENDER SIDEBAR VIDEOS
function renderSidebar(list) {
  sidebar.innerHTML = "";

  list.forEach(video => {
    const item = document.createElement("div");
    item.className = "video-item";

    item.innerHTML = `
      <img src="${video.thumbnail}">
      <div class="info">
        <h4>${video.name}</h4>
        <p>${video.creator}</p>
      </div>
    `;

    item.onclick = () => loadVideo(video);

    sidebar.appendChild(item);
  });
}

// SEARCH FUNCTION
search.addEventListener("input", () => {
  const query = search.value.toLowerCase();

  const filtered = videos.filter(v =>
    v.name.toLowerCase().includes(query) ||
    v.creator.toLowerCase().includes(query)
  );

  renderSidebar(filtered);
});

// INIT PAGE
renderSidebar(videos);
loadVideo(videos[0]);
