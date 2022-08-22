// btn click 
function srcBtn() {
    const searchKeyword = document.getElementById('search-input').value;
    // dynamic url creation
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`;
    loadData(url);
}
// after clicking search btn 
function loadData(url) {
    // fetch url for load data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // loop
            const results = data.meals;
            for (const result of results) {
                // showing functionality
                appenData(result)
            }
        })
}
const container = document.getElementById('container');
function appenData(result) {
    const div = document.createElement('div');
    div.classList.add('card');
    container.appendChild(div);
    
    div.innerHTML = `
    <img src="${result.strMealThumb}" onclick="veiwFullDiv('${result.idMeal}')" class="card-img-top" alt="...">
    <div onclick="veiwFullDiv('${result.idMeal}')" class="card-body">
    <h3>${result.strMeal}</h3>
        <p class="card-text">${result.strInstructions.slice(0, 150)}...</p>
    </div>
    `;
    
}

function veiwFullDiv(result){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${result}`;
    
    fetch(url)
    .then(res => res.json())
    .then(Id => {
        loopAndAppended(Id.meals)
    })
}

// loop and appended
function loopAndAppended(allId){
    const fullView = document.getElementById('fullResult');
    for(const id of allId){
        console.log(id);
        fullView.innerHTML = `
        <div class="card" style="width: 500px;">
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img class="card-img" src="${id.strMealThumb}" alt="Suresh Dasari Card">
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title">${id.strMeal}</h5>
                        <code>${id.strArea}</code>
                        <p class="card-text">${id.strInstructions.slice(0, 100)}...</p>
                        <a target="_blank" href="${id.strYoutube}" class="btn btn-primary">Watch Video</a>
                    </div>
                </div>
            </div>
        </div>
        `
        
    }
}