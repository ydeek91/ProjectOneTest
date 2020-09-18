$(document).ready(function () {
    console.log("I'm ready..");
    var edamamId = "9f4f3487"
    var edamamKey = "8e2d662eda8d8f1307f21875dbd2373b"
    $("#meal-search-button").on("click", mealSearchResults);
    function mealSearchResults(event) {
        event.preventDefault();
        var mealSearchInput = $("#mealSearchInput").val();
        console.log(mealSearchInput);
        getMealRecipe(mealSearchInput);
    }
    // checkMealRecipe function has been given the users search criteria..
    // ..by the searchResults function, and it will now call on the edamam api..
    function getMealRecipe(mealSearchInput) {
        // var mealSearchInput = $("#mealSearchInput").val();
        var queryURL = `https://api.edamam.com/search?q=${mealSearchInput}&app_id=${edamamId}&app_key=${edamamKey}`
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (data) {
                console.log(data);
            });
        // randomDrinkOption();
    };
    // checkMealRecipe function has been given the users search criteria..
    // ..by the searchResults function, and it will now call on the cocktailDB api ..
    // a random cocktail selection will be provided along side of the users generated recipe.
    //random option below.
    var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (data) {
            console.log(data);
        });
});
// option that we moved on past for drink search input
//   var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSearchInput}`