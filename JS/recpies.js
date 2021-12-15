let recpies = { israel: { name: "Hummus", ingredients: ["Chickpeas","Garlic","Kosher Salt","Garnish","Tahini"], srcImg: "../imgs-project/hummus.jpeg"  }, 
usa: { name: "Burger", ingredients: ["1 pound ground lean beef","1 large egg","half cup minced onion","1 tablespoon Worcestershire","1 or 2 cloves garlic, peeled and minced","tomato", "red onion"], srcImg: "../imgs-project/american_burger.jpeg" }, 
japan: { name: "Sushi",ingredients: ["sushi rice","a bamboo mat","low-sodium soy sauce","toasted sesame seeds","wasabi","pickled ginger", "nori"," chia seeds"], srcImg: "../imgs-project/sushi_japan.jpeg" } };


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
    let url = new URL(window.location.href);
    let country = url.searchParams.get("country");
    let recpie = recpies[country];
    let titleElm = document.getElementById("fw-recpie-title");
    titleElm.innerHTML = recpie.name;
    getIngredients(recpie)
   
    
}

getRecpies()

function getCountry(){
    let url = new URL(window.location.href);
    let country = url.searchParams.get("country");
    let country2 = country.charAt(0).toUpperCase() + country.slice(1);
    let countryTitle = document.getElementById("fw-country-name");
    countryTitle.innerHTML = country2;
}

getCountry()


function getRecpieImg(){
    let url = new URL(window.location.href);
    let country = url.searchParams.get("country");
    let source = recpies[country].srcImg;
    console.log(source);
    let srcChange = document.getElementById("fw-recpie-img-in");
    srcChange.src = source;
}

getRecpieImg()

var recommendationsv2 = []

function done(){ //this function will get the data the review of the user and store it the db
            
    var userName = document.getElementById("fw-user-review");
    let name = userName.value;
    let country = url.searchParams.get("country");
    let rating = document.getElementById("exampleFormControlSelect1").value;
    let review = document.getElementById("exampleFormControlTextarea1").value;
    recommendationsv2.push({
        "country" : Country,
        "name": name,
        "Recommendation": review
    })
    console.log(recommendationsv2)
    alert("thanks")
}
