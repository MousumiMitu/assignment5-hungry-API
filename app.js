const getMeal = (food) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => getMealLists(data.meals));
};

const getFoodInfo = () => {
  const foodName = document.getElementById("food-input").value;
  getMeal(foodName);
};

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
const getBtn = (food) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => getIngredientList(data.meals[0]));
};
const getIngredientList = (ingredient) => {
  const listDiv = document.getElementById("ingredient-list");
  listDiv.innerHTML = `
  <img src="${ingredient.strMealThumb}">
  <h3>${ingredient.strIngredient1}</h3>
  <h3>${ingredient.strIngredient2}</h3>
  <h3>${ingredient.strIngredient3}</h3>
  <h3>${ingredient.strIngredient4}</h3>
  <h3>${ingredient.strIngredient5}</h3>
  <h3>${ingredient.strIngredient6}</h3>
  <h3>${ingredient.strIngredient7}</h3>
  <h3>${ingredient.strIngredient8}</h3>
  <h3>${ingredient.strIngredient9}</h3>
  `;
};
