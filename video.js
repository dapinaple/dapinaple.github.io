const videoIds = [
  "dQw4w9WgXcQ",
  "Zi_XLOBDo_Y",
  "kXYiU_JCYtU"
];

const grid = document.getElementById("videoGrid");

videoIds.forEach(id => {
  const wrapper = document.createElement("div");
  wrapper.className = "video-card";

  wrapper.innerHTML = `
    <div class="video-thumb" data-id="${id}">
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Guitar video">
      <div class="play-button">▶</div>
    </div>
  `;

  wrapper.querySelector(".video-thumb").addEventListener("click", () => {
    wrapper.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${id}?autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    `;
  });

  grid.appendChild(wrapper);
});
