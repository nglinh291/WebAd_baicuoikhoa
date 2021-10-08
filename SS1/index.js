// chuyển banner
function reader(nameUser){
	console.log(nameUser)
	DocumentTimeline(OfflineAudioCompletionEvent)+1
	document.getElementsByClassName(
		"botcheckdata"
	)fetch("")

}
function switchBanner(numberBanner) {
	console.log(numberBanner);
	document.getElementById(
	  "header"
	).style.backgroundImage = `url('images/banner${numberBanner}.webp')`;
  }
  
function notify(notifyvar){
	consolde.log(notifyvar);
	
}
  function getAPI() {
	fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
	  method: "POST",
	  body: JSON.stringify({
		name: "Food",
	  }),
	})
	  .then((res) => {
		return res.json();
	  })
	  .then((data) => {
		randomMeal(data);
	  })
	  .catch((error) => console.log(error));
  }
  
  function randomMeal(data) {
	let food = data.meals[0];
  
	// Switch banner
	var numberBanner = Math.floor(Math.random() * 4) + 1;
	switchBanner(numberBanner);
  
	// Switch mode active
	document.getElementById("body").classList.add("active");
  
	console.log(food);
  
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
	  if (food[`strIngredient${i}`]) {
		ingredients.push(
		  `${food[`strIngredient${i}`]} - ${food[`strMeasure${i}`]}`
		);
	  } else {
		continue;
	  }
	}
	console.log("Đây là ingredients: " + ingredients);
  
	//   Cột trái
	document.getElementById("meal").innerHTML = `
	<img src="${food.strMealThumb}" alt="Meal Image" />
			  <p><strong>Category:</strong> ${food.strCategory}</p>
			  <p><strong>Area:</strong> ${food.strArea}</p>
			  <p><strong>Tags:</strong> ${food.strTags}</p>
			  <h5>Ingredients:</h5>
			  <ul>
				${ingredients
				  .map((ingredient) => `<li>${ingredient}</li>`)
				  .join("")}
			  </ul>`;
  
	// Cột phải
	document.getElementById("strMeal").innerHTML = `
	  <h4 >${food.strMeal}</h4>
	  <p>
		  ${food.strInstructions}
	  </p>`;
  
	// Video
	document.getElementById("video").innerHTML = `<iframe
	width="100%"
	height="100%"
	src="https://www.youtube.com/embed/${food.strYoutube.slice(-11)}"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
	></iframe>`;
  
	var body = document.getElementById("body");
	body.scrollIntoView();
  }
  
  const addMeal = () => {
	alert("Chức năng này đang hoàn thiện !");
  };