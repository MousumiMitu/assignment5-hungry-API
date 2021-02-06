const getMeal = (food) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
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
  foodKeywords.forEach((user) => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "meal-container";
    const foodData = `
        <img src="${user.strMealThumb}">
        <h4> ${user.strMeal}</h4>
    `;
    foodDiv.innerHTML = foodData;
    mealArea.appendChild(foodDiv);
    document.getElementById("food-input").value = "";
  });
};
