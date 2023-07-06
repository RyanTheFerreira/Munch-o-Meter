const foodName = document.getElementById('name');
const servingSize = document.getElementById('serving-size');
const date = document.getElementById('date');
const mealType = document.getElementById('meal-type');
const addFoodBtn = document.getElementById('add-meal-btn');
const searchBtn = document.getElementById('search-button');

const searchFood = async (event) => {
  event.preventDefault();
  console.log('searching food');
  try {
    const query = foodName.value.trim() + ' ' + servingSize.value.trim();
    const response = await fetch('/api/food/nutrition?query=' + query);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
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