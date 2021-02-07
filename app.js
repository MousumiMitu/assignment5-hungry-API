// get data from API
const getMeal = (food) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals) {
        getMealLists(data.meals);
      } else {
        const errorMsg = "sorry!! didn't match any food";
        document.getElementById("error-message").innerText = errorMsg;
      }
    });
};

// input button
const getFoodInfo = () => {
  const foodName = document.getElementById("food-input").value;
  getMeal(foodName);
};
// input search items function
const getMealLists = (foodKeywords) => {
  const mealArea = document.getElementById("food-area");
  foodKeywords.forEach((meal) => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "meal-container";
    const foodData = `
        <img onclick="getBtn('${meal.strMeal}')" src="${meal.strMealThumb}">
        <h4 onclick="getBtn('${meal.strMeal}')"> ${meal.strMeal}</h4>
    `;
    foodDiv.innerHTML = foodData;
    mealArea.appendChild(foodDiv);
  });
  document.getElementById("food-input").value = "";
};

// API call for ingredients
const getBtn = (food) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => getIngredientList(data.meals[0]));
};

// detail ingredient function
const getIngredientList = (ingredient) => {
  const listDiv = document.getElementById("ingredient-list");
  listDiv.innerHTML = `
  <img class="ingredient-img" src="${ingredient.strMealThumb}">
  <h3><img class="icon" src="./images/icon.png">${ingredient.strIngredient1}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient2}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient3}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient4}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient5}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient6}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient7}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient8}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient9}</h3>
  <h3><img class="icon" src="/images/icon.png">${ingredient.strIngredient10}</h3>
  `;
};
