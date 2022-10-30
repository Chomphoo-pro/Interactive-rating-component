function selectReview(reviewId){
    let nbReview = 5;

    for (id = 1 ; id <= nbReview ; id++){ //remove all class "selected" to review button
        document.getElementById(id).classList.remove("selected");
    }

    document.getElementById(reviewId).classList.add("selected") //add class "selected"
}

function submit(){
    //Default if not selected: NA
    let reviewSelected = (document.getElementsByClassName("selected")[0] != undefined ? document.getElementsByClassName("selected")[0].id : "NA");
    console.log("review " + reviewSelected + " is selected");
}