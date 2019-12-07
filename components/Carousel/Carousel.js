/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(...imgs) {
  //CREATE ELEMENTS
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("div");
  const rightBtn = document.createElement("div");
  const imgArr = [...imgs];

  //SETUP CLASSES
  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");

  //SETUP CONTENT
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";

  //APPEND
  carousel.appendChild(leftBtn);
  carousel.appendChild(rightBtn);
  imgArr.forEach(image => {
    const img = document.createElement("img");
    img.src = `${image}`;
    carousel.appendChild(img);
  });

  let counter = 0;

  //ADD EVENT LISTENER TO BUTTONS
  rightBtn.addEventListener("click", function(e) {
    if (counter < imgArr.length - 1) {
      carousel.style.transition = "transform 0.5s ease-in-out";
      counter++;
      carousel.style.transform =
        "translateX(" + -e.target.parentElement.clientWidth * counter + "px)";
      rightBtn.style.transform =
        "translateX(" + e.target.parentElement.clientWidth * counter + "px)";
      leftBtn.style.transform =
        "translateX(" + e.target.parentElement.clientWidth * counter + "px)";
    } else if (counter >= imgArr.length - 1) {
      counter = 0;
      carousel.style.transform =
        "translateX(" + -e.target.parentElement.clientWidth * counter + "px)";
      rightBtn.style.transform =
        "translateX(" + e.target.parentElement.clientWidth * counter + "px)";
      leftBtn.style.transform =
        "translateX(" + e.target.parentElement.clientWidth * counter + "px)";
    }
  });

  leftBtn.addEventListener("click", function(e) {
    if (counter > 0) {
      carousel.style.transition = "transform 0.5s ease-in-out";
      counter--;
      carousel.style.transform =
        "translateX(" + -e.target.parentElement.clientWidth * counter + "px)";
      rightBtn.style.transform =
        "translateX(" + e.target.parentElement.clientWidth * counter + "px)";
      leftBtn.style.transform =
        "translateX(" + e.target.parentElement.clientWidth * counter + "px)";
    } else if (counter <= 0) {
      counter = imgArr.length - 1;
      carousel.style.transform =
        "translateX(" + -e.target.parentElement.clientWidth * counter + "px)";
      rightBtn.style.transform =
        "translateX(" + e.target.parentElement.clientWidth * counter + "px)";
      leftBtn.style.transform =
        "translateX(" + e.target.parentElement.clientWidth * counter + "px)";
    }
  });

  return carousel;
}

const carouselCont = document.querySelector(".carousel-container");
carouselCont.style.overflow = "hidden";
carouselCont.appendChild(
  createCarousel(
    "../../assets/carousel/computer.jpeg",
    "../../assets/carousel/mountains.jpeg",
    "../../assets/carousel/trees.jpeg",
    "../../assets/carousel/turntable.jpeg"
  )
);
