const foodName = document.getElementById('name');
const servingSize = document.getElementById('serving-size');
const date = document.getElementById('date');
const mealType = document.getElementById('meal-type');
const addFoodBtn = document.getElementById('add-meal-btn');
const searchBtn = document.getElementById('search-button');

const nutritionFoodName = document.getElementById('food-name');
const nutritionCalories = document.getElementById('calories');
const nutritionSugar = document.getElementById('sugar');
const nutritionCarbs = document.getElementById('carbohydrates');
const nutritionFat = document.getElementById('total-fat');
const nutritionProtein = document.getElementById('protein');
const nutritionSodium = document.getElementById('sodium');
const nutritionCholesterol = document.getElementById('cholesterol');

const searchFood = async (event) => {
  event.preventDefault();
  try {
    const query = servingSize.value.trim() + ' ' + foodName.value.trim();
    const response = await fetch('/api/food/nutrition?query=' + query);
    if (response.ok) {
      const result = await response.json();
      nutritionFoodName.textContent = result.items[0].name;
      nutritionCalories.textContent = result.items[0].calories;
      nutritionSugar.textContent = result.items[0].sugar_g + "g";
      nutritionSodium.textContent = result.items[0].sodium_mg + "mg";
      nutritionProtein.textContent = result.items[0].protein_g + "g";
      nutritionFat.textContent = result.items[0].fat_total_g + "g";
      nutritionCarbs.textContent = result.items[0].carbohydrates_total_g + "g";
      nutritionCholesterol.textContent = result.items[0].cholesterol_mg + "mg";

    } else {
      alert('Failed to search food');
    }
  }
  catch (err) {
    console.log(err);
  }
};

const addFood = async (event) => {
  event.preventDefault();
  try {
    const name = foodName.value.trim();
    const serving_amount = servingSize.value.trim();
    const date_time = date.value.trim();
    const meal_type = mealType.value.trim();

    if (name && serving_amount && date_time && meal_type) {
      const response = await fetch('/api/food/addfood', {
        method: 'POST',
        body: JSON.stringify({ name, serving_amount, date_time, meal_type }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/nutrition');
      } else {
        alert('Failed to add food');
      }
    }
  }
  catch (err) {
    console.log(err);
  }
};

addFoodBtn.addEventListener('click', addFood);
searchBtn.addEventListener('click', searchFood);