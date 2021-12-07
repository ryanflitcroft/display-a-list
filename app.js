import { helloWorld } from './hello.js';
import { renderHello } from './render-hello.js';
import { renderPets } from './render-pets.js';
import { pets } from './pets.js';

const stringElement = document.getElementById('string-element');
const objectElement = document.getElementById('object-element');

for (let hello of helloWorld) {
    const myHello = renderHello(hello);
    stringElement.append(myHello);
}

for (let pet of pets) {
    const petContent = renderPets(pet);
    objectElement.append(petContent);
}