const videos = [
  { id: "YmvTv--1hFE", type: "short",  // galneryus raise my sword 
    id: "wu1giNm8KW0",type:"short} //a7x seize the day        

];

const grid = document.getElementById("videoGrid");

videos.forEach(({ id, type }) => {
  const card = document.createElement("div");
  card.className = `video-card ${type}`;

  card.innerHTML = `
    <div class="video-thumb">
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
      <div class="play-button">▶</div>
    </div>
  `;

  card.querySelector(".video-thumb").onclick = () => {
    card.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${id}?autoplay=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    `;
  };

  grid.appendChild(card);
});

