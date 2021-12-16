let recpies = { israel: { name: "Hummus", ingredients: ["Chickpeas","Garlic","Kosher Salt","Garnish","Tahini"], srcImg: "../imgs-project/hummus.jpeg"  }, 
usa: { name: "Burger", ingredients: ["1 pound ground lean beef","1 large egg","half cup minced onion","1 tablespoon Worcestershire","1 or 2 cloves garlic, peeled and minced","tomato", "red onion"], srcImg: "../imgs-project/american_burger.jpeg" }, 
japan: { name: "Sushi",ingredients: ["sushi rice","a bamboo mat","low-sodium soy sauce","toasted sesame seeds","wasabi","pickled ginger", "nori"," chia seeds"], srcImg: "../imgs-project/sushi_japan.jpeg" },
mexico: { name: "Burrito", ingredients: ["Beef Burrito Filling","Cheese","Diced tomato","Coriander/cilantro","Black beans","Corn"], srcImg: "../imgs-project/burrito4.jpeg"} , 
thailand: { name: "Padthai", ingredients: ["2 Tbsp coconut or avocado oil","Thai Basil and Holy Basil"," Sticky Rice","Coriander/cilantro","Palm Sugar","Corn","Mofongo"], srcImg: "../imgs-project/padthai3.jpeg" }, 
india: { name: "chutney", ingredients: ["2 cups fresh cilantro","stems","2 green chilies","half inch fresh ginger","tsp lime juice","chaat masala"], srcImg: "../imgs-project/indian.jpeg" }, 

};

let url = new URL(window.location.href);
let country = url.searchParams.get("country");

function getIngredients(recpie){
    console.log(recpie.ingredients)
    let ingredientList = "";
    let ingredientsUlelm = document.getElementsByClassName("fw-recpie-ingredients-list")[0];
    recpie.ingredients.forEach(ingredient => {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(ingredient));
        ingredientsUlelm.appendChild(li);
    });
}

function getRecpies() {
    let recpie = recpies[country];
    let titleElm = document.getElementById("fw-recpie-title");
    titleElm.innerHTML = recpie.name;
    getIngredients(recpie)
}

getRecpies()

function getRecpieImg(){
    let source = recpies[country].srcImg;
    console.log(source);
    let srcChange = document.getElementById("fw-recpie-img-in");
    srcChange.src = source;
}

getRecpieImg()

function done(){ //this function will get the data the review of the user and store it the db
    let recommendations = JSON.parse(window.localStorage.getItem("recommendations") || "[]");
    //let name = userName.value;
    let name = document.getElementById("fw-user-review").value;
    let rating = document.getElementById("exampleFormControlSelect1").value;
    let review = document.getElementById("exampleFormControlTextarea1").value;
    recommendations.push({
        "country" : country,
        "name": name,
        "recommendation": review,
        "rating" : rating
    })
    console.log(recommendations)
    window.localStorage.setItem('recommendations', JSON.stringify(recommendations));
    alert("thanks")
}


