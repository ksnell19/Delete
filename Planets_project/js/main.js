var mercury = {
  name: 'mercury',
  text: 'Mercury is',
  img: ''
};

var venus = {
  name: 'venus',
  text: 'Venus is',
  img: ''
};

var earth = {
  name: 'earth',
  text: 'Earth is',
  img: ''
};

var mars = {
  name: 'mars',
  text: 'Mars is',
  img: ''
};
var jupiter = {
  name: 'jupiter',
  text: 'Jupiter is',
  img: ''
};
var saturn = {
  name: 'saturn',
  text: 'Saturn is',
  img: ''
};
var uranus = {
  name: 'uranus',
  text: 'Uranus is',
  img: ''
};
var neptune = {
  name: 'neptune',
  text: 'Neptune is.\nA wonderful planet.',
  img: 'https://space-facts.com/wp-content/uploads/neptune-transparent.png'
};


//array of objects
var planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

//write the click function first
function showInfo(){
//remove whats in div in first place. (Why is there something there?)
document.getElementById('planet-names').innerHTML= '' ;

   //grab the input
   var userInput = document.getElementById('planet').value;
   console.log(userInput);

 //match input to one of our objects
 //loop through and return a match
 for(var i=0; i<planets.length; i++) {
   if(userInput.toLowerCase() === planets[i].name) { //do we have a match?

   var head = document.createElement('h5');
   var p = document.createElement('p');
   // p.setAttribute('style', 'width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #868e96; border-radius: 10px; text-align: left');
   var div = document.createElement('div');

   //created elements with the planet info
   head.textContent = planets[i].name;
   p.textContent = planets[i].text;

   //add image and p to our div
   div.appendChild(head);
   div.appendChild(p);


   //display to user
   var planetName = document.getElementById('planet-names');
   planetName.appendChild(div);
    }else{
      document.getElementById('planet-names').innerHTML = "Please enter the name of a planet.";}
  }
}
