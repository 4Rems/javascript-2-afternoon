/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

/*
  Create an object called me. 
  Give it a key of name with the value being your name, and another key of age with the value being your age. 
  Then alert your name using dot notation.
*/

//Code here
const me = {
  name: "Robert",
  age: 46,
};
alert(me.name);

////////// PROBLEM 2 //////////

/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. 
  Have the values to those keys be your favorite thing in that category.
*/

//Code here
const favoriteThings = {
  band: "Mnozil Brass",
  food: "tamales",
  person: "wife, Alison",
  book: "To Kill a Mockingbird",
  movie: "It's a Wonderful Life",
  holiday: "Thanksgiving",
};


/*
  After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
*/

//Code here
favoriteThings.car = "Citroen Cactus M";
favoriteThings.brand = "Hoka";


/*
  Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.
*/

//Code here
favoriteThings.food = "Chicken Nuggets";
favoriteThings.book = "Harry Potter";


////////// PROBLEM 3 //////////

/* 
  Create an empty Object called backPack. 
  Now, create a variable called 'item' and set it equal to the string 'firstPocket'. 
  Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'.
  Set the value of that key to 'chapstick'.
  Using dot notation, add another key (or property) to your backPack object that is named color, with the value being the color of your backpack. 
*/

//Code here
const backPack = {

};
const item = "firstPocket";
backPack["firstPocket"] = item;
backPack.firstPocket = "chapstick";
backPack.color = "Red";


/*
  After you do the above, alert your entire backPack object.
*/

//Code here
alert(backPack);

/*
You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. 
*/

//Code here
console.log(backPack);


////////// PROBLEM 4 //////////

// Do not edit the code below.
var user2 = {
  name: 'Ty',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'ty33@gmail.com',
  birthday: '05/02/1990',
  username: 'tylermcginnis33'
};
// Do not edit the code above.

/* 
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Tyler S. McGinnis' and email -> 'tyler.mcginnis@devmounta.in'. 
  Make that change without modifying the original object code above.
*/

//Code Here
function updateUser(userName, userEmail) {
  // Code Here
  user2.name = userName;
  user2.email = userEmail;
  return user2;
}

var a = updateUser('Tyler S. McGinnis', 'tyler.mcginnis@devmounta.in');






/////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////







////////// PROBLEM 5 //////////

/*
  Create an empty object called methodCollection.
*/

//Code Here



/*
  Now add two methods (functions that are properties on objects) to your methodCollection object. 
  One called 'alertHello' which alerts 'hello' and another method called 'logHello' which logs 'hello' to the console. 
*/

//Code Here



/*
  Now call your alertHello and logHello methods.
*/

//Code Here



////////// PROBLEM 6 //////////

/* 
  Create a function called makePerson which takes in name, birthday, ssn as its parameters. 
  Return a new object with all of the information that you passed in.
*/

//Code Here



////////// PROBLEM 7 //////////

/*
  Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object.
  Return that object so that whenever you invoke makeCard, you get a brand new credit card.
*/

//Code Here


