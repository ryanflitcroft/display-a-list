import { helloWorld } from './hello.js';
import { renderHello } from './render-hello.js';
import { renderPets } from './render-pets.js';
import { pets } from './pets.js';
import { foodGroups } from './foodgroups.js';
import { renderFoodGroups } from './render-foodgroups.js';

const stringElement = document.getElementById('string-element');
const objectElement = document.getElementById('object-element');
const nestedObjectElement = document.getElementById('nested-object-element');

for (let hello of helloWorld) {
    const myHello = renderHello(hello);
    stringElement.append(myHello);
}

for (let pet of pets) {
    const petContent = renderPets(pet);
    objectElement.append(petContent);
}

for (let food of foodGroups) {
    const myFood = renderFoodGroups(food);
    nestedObjectElement.append(myFood);
}