// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createArticle(obj) {
  //CREATE ELEMENTS
  const cardContainer = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  //SETUP CLASSES
  cardContainer.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //SETUP ATTRIBUTES
  img.src = obj.authorPhoto;

  //SETUP CONTENT
  headLine.textContent = obj.headline;
  authorName.textContent = obj.authorName;

  //APPEND
  cardContainer.appendChild(headLine);
  cardContainer.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(img);

  return cardContainer;
}

const cards = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    Object.keys(response.data.articles).forEach(key => {
      response.data.articles[`${key}`].forEach(article => {
        cards.appendChild(createArticle(article));
      });
    });
  })
  .catch(error => {
    console.log(error);
  });
