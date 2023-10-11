/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Arianne Looper",
    photo: "images/profilepic.jpg",
    favoriteFoods: [
        "Lechon",
        "Carbonara",
        "Mango",
        "Chocolates",
        "Bruschetta",
        "Fried Moonfish"
    ],
    hobbies: [
        "Playing the piano",
        "Painting",
        "Artwork",
    ],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "🏠United Kingdom",
        length: "8 years"
    }
);

myProfile.placesLived.push(
    {
        place: "🏠Philippines",
        length: "28 years"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */


myProfile.placesLived.forEach(temp => {
    let dt = document.createElement("dt");
    dt.textContent = temp.place;
    document.querySelector("#placesLived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = temp.length;
    document.querySelector("#placesLived").appendChild(dd);
});

