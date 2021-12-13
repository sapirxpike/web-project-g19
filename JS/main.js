
// We read the data from the db javascript files and load them in html files.

function getRecommendations() {
    let htmlCards = ''
    let recommendationsContainer = document.querySelector('.fw-recommendation-container');
    recommendations.forEach( (recommendtion) => {
      htmlCards += `
      <div class="fw-card">
        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="Avatar" style="width:100%">
        <div class="fw-card-container">
          <h4><b>${recommendtion.country}</b></h4>
          <h5>${recommendtion.type}</h5>
          <p>${recommendtion.Recommendation}</p>
        </div>
      </div>`
    });
  
    recommendationsContainer.innerHTML = htmlCards;
  }
  
  (function run(){
    getRecommendations();
  })();
  