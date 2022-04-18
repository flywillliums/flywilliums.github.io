const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

window.onload=function(){
  randomize.addEventListener('click', result);
}


function result() {

  var newStory = storyText;
  var xitem= randomValueFromArray(insertX);
  var yitem= randomValueFromArray(insertY);
  var zitem= randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xitem)
  newStory = newStory.replace(/:inserty:/g, yitem)
  newStory = newStory.replace(/:insertz:/g, zitem)

  console.log(newStory)

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94-32)/1.8);
    newStory = newStory.replace(/300 pounds/g, weight + ' stones')
    newStory = newStory.replace(/94 fahrenheit/g, temperature + ' celsius')
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
