//REVIEW

function selectReview(reviewId){
    let nbReview = 5;

    for (id = 1 ; id <= nbReview ; id++){ //remove all class "selected" to review button
        document.getElementById(id).classList.remove("selected");
    }

    document.getElementById(reviewId).classList.add("selected") //add class "selected"
}

//return 0 if undefined
function getReview(){
    return (document.getElementsByClassName("selected")[0] != undefined ? document.getElementsByClassName("selected")[0].id : 0);
}

function submit(){

    if (getReview()){//Only if review is selected

        //
        //  INSTANCIE ELEMENT
        //
        let child = document.createElement("div");
        let img = document.createElement("img");
        let reviewSelected = document.createElement("div");
        let title = document.createElement("h1");
        let paragraph = document.createElement("p");


        //
        //  UPDATE ELEMENT TEXT
        //
        reviewSelected.append("You selected "+getReview()+" out of 5");
        title.append("Thank you!");
        paragraph.append("We appreciate you taking the time to give a rating. If you ever need more support,"+
        "don’t hesitate to get in touch!");


        //
        //  UPDATE ELEMENTS TO DOM
        //
        child.append(img);
        child.append(reviewSelected);
        child.append(title);
        child.append(paragraph);


        //
        //  REMOVE ELEMENT "CHILD" BY ID FROM DOM
        //
        document.getElementById("child").remove();


        //
        //  SET ATTRIBUTE
        //
        img.setAttribute("alt", "thanks you");
        img.setAttribute("srcset", "images/illustration-thank-you.svg");
        child.setAttribute("id", "child");
        reviewSelected.setAttribute("class", "rating");


        //
        //  UPDATE ELEMENTS TO DOM
        //
        document.getElementById("card").append(child);

    }
}