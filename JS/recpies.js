let recpies = { israel: { name: "Hummus", ingredients: ["Chickpeas","Garlic","Kosher Salt","Garnish","Tahini"]  }, mexico: { name: "Burrito" }, japan: { name: "Sushi" } };


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
   
    console.log(recpie)
}



getRecpies()