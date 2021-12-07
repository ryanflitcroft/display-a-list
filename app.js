import { helloWorld } from './hello.js';
import { renderHello } from './render-hello.js';
import { renderPets } from './render-pets.js';
import { pets } from './pets.js';
import { foodGroups } from './foodgroups.js';

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
  // for each food object of foodGroups array:
  // create groupContainer div
  // create groupItem p
  // create objItemContainer div
    const groupContainer = document.createElement('div');
    const groupItem = document.createElement('p');
    const objItemContainer = document.createElement('div');
    const objItem = document.createElement('p');
    
    groupItem.textContent = `This is the ${food.group} food group. It is ${food.plantBased} that this food group is plant based.`;
    objItem.textContent = `An example of this food group is ${food.example.type}. This food is ${food.example.color}.`;

    objItemContainer.append(objItem);
    groupContainer.append(groupItem, objItem);

    nestedObjectElement.append(groupContainer);
}