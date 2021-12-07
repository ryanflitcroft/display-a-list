import { renderPets } from './render-pets.js';
import { pets } from './pets.js';

const objectElement = document.getElementById('object-element');


// console.log(pets);

for (let pet of pets) {
// for each object in pets array:
    // create petContainerEl div
    // create petPropertyEl p 
    const petContainerEl = document.createElement('div');
    const petPropertyEl = document.createElement('p');

    // text content of petPropertyEl p is a string pet.type pet.name pet.age
    petPropertyEl.textContent = `I have a ${pet.type} named ${pet.name}, and their age is ${pet.age}`;
    // console.log(petPropertyEl);

    // add class of list to petContainerEl div
    petContainerEl.classList.add('list');
    
    // append petPropertyEl p to petContainerEl div
    petContainerEl.append(petPropertyEl);
    // console.log(petContainerEl);

    objectElement.append(petContainerEl);

}
