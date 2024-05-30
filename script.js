let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", () => {
  imageGallery.scrollLeft += 292;
});

backBtn.addEventListener("click", () => {
  imageGallery.scrollLeft -= 292;
});
