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

function createCarousel() {
  //CREATE ELEMENTS
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("div");
  const imgOne = document.createElement("img");
  const imgTwo = document.createElement("img");
  const imgThree = document.createElement("img");
  const imgFour = document.createElement("img");
  const rightBtn = document.createElement("div");

  //SETUP CLASSES
  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");
  imgTwo.classList.add("hide");
  imgThree.classList.add("hide");
  imgFour.classList.add("hide");

  //SETUP ATTRIBUTES
  imgOne.setAttribute("src", "../../assets/carousel/computer.jpeg");
  imgTwo.setAttribute("src", "../../assets/carousel/mountains.jpeg");
  imgThree.setAttribute("src", "../../assets/carousel/trees.jpeg");
  imgFour.setAttribute("src", "../../assets/carousel/turntable.jpeg");

  //SETUP CONTENT
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";

  //APPEND
  carousel.appendChild(leftBtn);
  carousel.appendChild(imgOne);
  carousel.appendChild(imgTwo);
  carousel.appendChild(imgThree);
  carousel.appendChild(imgFour);
  carousel.appendChild(rightBtn);

  //ADD EVENT LISTENER TO BUTTONS
  //I WILL TRY LATER TO KIND OF JUST LOOP THROUGH AN ARRAY OF IMAGES AND THEN JUST DISPLAY THEM AFTER BTN CLICK
  //I JUST REALIZED THIS NOW!
  rightBtn.addEventListener("click", function(e) {
    if (
      imgTwo.className === "hide" &&
      imgThree.className === "hide" &&
      imgFour.className === "hide"
    ) {
      imgOne.classList.add("hide");
      imgTwo.classList.toggle("hide");
    } else if (
      imgOne.className === "hide" &&
      imgThree.className === "hide" &&
      imgFour.className === "hide"
    ) {
      imgTwo.classList.toggle("hide");
      imgThree.classList.toggle("hide");
    } else if (
      imgOne.className === "hide" &&
      imgTwo.className === "hide" &&
      imgFour.className === "hide"
    ) {
      imgThree.classList.add("hide");
      imgFour.classList.remove("hide");
    } else if (
      imgOne.className === "hide" &&
      imgTwo.className === "hide" &&
      imgThree.className === "hide"
    ) {
      imgOne.classList.toggle("hide");
      imgFour.classList.toggle("hide");
    }

    e.stopPropagation();
  });

  leftBtn.addEventListener("click", function(e) {
    if (
      imgTwo.className === "hide" &&
      imgThree.className === "hide" &&
      imgFour.className === "hide"
    ) {
      imgOne.classList.add("hide");
      imgFour.classList.toggle("hide");
    } else if (
      imgOne.className === "hide" &&
      imgThree.className === "hide" &&
      imgFour.className === "hide"
    ) {
      imgOne.classList.toggle("hide");
      imgTwo.classList.toggle("hide");
    } else if (
      imgOne.className === "hide" &&
      imgTwo.className === "hide" &&
      imgFour.className === "hide"
    ) {
      imgThree.classList.toggle("hide");
      imgTwo.classList.toggle("hide");
    } else if (
      imgOne.className === "hide" &&
      imgTwo.className === "hide" &&
      imgThree.className === "hide"
    ) {
      imgFour.classList.toggle("hide");
      imgThree.classList.toggle("hide");
    }
  });

  return carousel;
}

const carouselCont = document.querySelector(".carousel-container");
carouselCont.appendChild(createCarousel());
