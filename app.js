import { renderPets } from './render-pets.js';
import { pets } from './pets.js';
import { helloWorld } from './hello.js';

const stringElement = document.getElementById('string-element');
const objectElement = document.getElementById('object-element');

for (let pet of pets) {
    const petContent = renderPets(pet);
    objectElement.append(petContent);
}

for (let hello of helloWorld) {
    const helloContainer = document.createElement('div');
    const helloItem = document.createElement('p');
    
    helloItem.textContent = hello;
    helloContainer.classList.add('list');
    helloContainer.append(helloItem);

    stringElement.append(helloContainer);
}