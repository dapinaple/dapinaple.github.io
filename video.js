const videoIds = [
  "dQw4w9WgXcQ",
  "kXYiU_JCYtU",
  "3tmd-ClpJxA",
  "RgKAFK5djSk",
  "Zi_XLOBDo_Y",
  "OPf0YbXqDm0"
];

const grid = document.getElementById("videoGrid");

videoIds.forEach(id => {
  const video = document.createElement("a");
  video.href = `https://www.youtube.com/watch?v=${id}`;
  video.target = "_blank";
  video.className = "video-card";

  video.innerHTML = `
    <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Guitar video thumbnail">
  `;

  grid.appendChild(video);
});
