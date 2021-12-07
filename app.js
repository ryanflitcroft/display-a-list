import { renderPets } from './render-pets.js';
import { pets } from './pets.js';

const objectElement = document.getElementById('object-element');


// console.log(pets);

for (let pet of pets) {

    const petContent = renderPets(pet);

    objectElement.append(petContent);
}
