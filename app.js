// //Setup the Api

// const searchForm = document.querySelector("form");
// let searchQuery = "";

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   searchQuery = e.target.querySelector("input").value;
//   console.log(searchQuery);
//   sendApiRequest();
// });

// // const searchFrom = document.querySelector("form");

// async function sendApiRequest() {
//   let APP_ID = "45f096af";
//   let API_KEY = "bb61bad6acb48ab5de5fab16ff5f74ec";

//   let response = await fetch(
//     `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchQuery}&to=9`
//   );
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
//   useApiData(data);
// }

// const recipes = document.querySelector(".search_result");

// function useApiData(data) {
//   data.hits.forEach((data) => {
//     recipes.innerHTML += `
//         <div class="col-md-4">
//         <div class="card">
//           <img src="${data.recipe.image}" alt="">
//           <div class="flex-container">
//             <h1 class="title">${data.recipe.label}</h1>
//             <a class="view-btn" href="${data.recipe.url}">View Recipe</a>
//           </div>
//           <p class="item-data">Calories: ${data.recipe.calories.toFixed(0)}</p>
//         </div>
//             </div>
//         `;
//   });
// }

/////////////////

const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search_result");
const container = document.querySelector(".container");
let searchQuery = "";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  console.log(searchQuery);
  sendApiRequest();
});

async function sendApiRequest() {
  let APP_ID = "45f096af";
  let API_KEY = "bb61bad6acb48ab5de5fab16ff5f74ec";

  let response = await fetch(
    `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchQuery}&to=9`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data.hits);
}

function useApiData(data) {
  container.classList.remove("initial");
  let useApiData = "";
  data.map((data) => {
    useApiData += `
            <div class="col-md-4">
            <div class="card">
              <img src="${data.recipe.image}" alt="">
              <div class="flex-container">
                <h1 class="title">${
                  data.recipe.label.length < 15
                    ? `${data.recipe.label}`
                    : `${data.recipe.label.substring(0, 15)}..`
                }</h1>
                <a class="view-btn" href="${data.recipe.url}">View Recipe</a>
              </div>
              <p class="item-data">Calories: ${data.recipe.calories.toFixed(
                0
              )}</p>
            </div>
                </div>
    `;
  });
  searchResult.innerHTML = useApiData;
}
