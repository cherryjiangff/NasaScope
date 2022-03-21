//PART I D.O.M. Manipulation

// Select the search button pokeball by its HTML Id Attribute
//let dateInput1 = document.getElementById('pictureDate').value; // search button pokeball

// document.getElementById("pictureDate").addEventListener("change", function() {
//     let input = this.value;
//     let  dateEntered = new Date(input);
//     console.log(input); //e.g. 2015-11-13
//     console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
// });

// Select the search field input by its HTML Id Attribute
var title = document.getElementById('title'); // search field input

// Select the pokemon name screen by it's HTML Id Attribute
var description = document.getElementById('description'); //pokemon name-screen

// Select the pokemon image screen by it's HTML Id Attribute
var image = document.getElementById('picture'); // pokemon image screen

var submitBtn = document.getElementById('submitBtn');

//PART II Fetching the Pokemon Data from the PokeAPI

//Create a function that uses fetch api to call the poke api and search for a specific pokemon and then add the poke api data to the
//appropriate HTML elements from PART I

//Let's assign our fucntion to a variable
var getNasaPictureInfo = (dateInput=document.getElementById('pictureDate').value) => {

    //Call the fetch api and attach a callback function that will turn the response into json
    fetch("https://api.nasa.gov/planetary/apod?date="+ dateInput +"&start_date=&end_date=&count=&thumbs=&api_key=Ln2stFpO2e6mBMTvWEetBiAuTI97j5ilrucMrbto")
        //a callback function to turn our api response into json
        .then((response) => response.json())
        //a callback function to take the data from out newly converted json data and insert it into our appropriate DOM elements
        .then((data) => {
            //change the background image of the image screen element to the appropriate pokemon image
            console.log(`url(${data.url})`);
            image.style.backgroundImage = `url(${data.url})`;
            //change the text of the name screen element to the appropriate pokemon name
            title.innerHTML = data.title;
            //change the text of the type screen element to the appropriate pokemon type
            description.innerHTML = data.explanation;
            //change the text of the id screen element to the appropriate pokemon id
            //idScreen.innerHTML = `#${data.id}`;
            //change the text of the id screen element to the appropriate pokemon height and weight
            console.log(dateInput);
        })
};

//PART III Triggering the Search Functionality

//Create an event listner that attaches to the search button poke ball and activates when a user 'clicks' on it!
//The event listener should call our pokemon data function from PART II
// submitBtn.addEventListener('click', console.log(dateInput.valueOf().value));
submitBtn.addEventListener('click', () => getNasaPictureInfo());


// <!-- Copyright (c) 2021 by oryam (https://codepen.io/oryamne/pen/vYKXbgZ)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. -->

