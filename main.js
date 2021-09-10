const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//created var for story text
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

//created arrays for the madlib
const insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
];
const insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
];
const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
];

randomize.addEventListener('click', result);

function result() {
  //new vars for the random choices from array items
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertY);

  //functions to insert random array item into story text
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem); //had to make a call twice because it only replaces the first instance of the substring
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name); //replacing Bob with the user input name
  }

  //included conversion math and replacement fuctions for USvUK
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature =  Math.round((94 - 32) * (5/9)) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory; //inserted variable to display the new story created
  story.style.visibility = 'visible';
}