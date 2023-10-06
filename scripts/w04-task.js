/* LESSON 3 - Programming Tasks */

/* Profile Object  */
myProfile = {
    name: "Emenike Ozioma",
    photo: "images/profile-picture.JPG",
    favoriteFoods: [
        "Rice",
        "Spagetti",
        "Chocolate",
        "Ice Cream",
        "Pizza"
    ],
    hobbies: [
        "Coding",
        "Playing Video Games",
        "Watching Movies",
        "Swimming",
        "Weekend Gym"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Lagos State, Nigeria",
        length: "16 Years"
    },
    {
        place: "Imo State, Nigeria",
        length: "2 Years"
    },
    {
        place: "Ogun State, Nigeria",
        length: "1 Year"
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
myProfile.placesLived.forEach(lived => {
    let dt = document.createElement("dt");
    dt.textContent = lived.place;
    let dd = document.createElement("dd");
    dd.textContent = lived.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
