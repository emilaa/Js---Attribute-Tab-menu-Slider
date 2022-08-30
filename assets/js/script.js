let infoContainers = document.querySelectorAll("#last-news .info-container");
let nxtBtn = document.querySelectorAll("#last-news .nxt-btn");
let preBtn = document.querySelectorAll("#last-news .pre-btn");

infoContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
