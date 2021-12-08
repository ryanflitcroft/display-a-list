import { helloWorld } from './hello.js';
import { renderHello } from './render-hello.js';
import { renderPets } from './render-pets.js';
import { pets } from './pets.js';
import { foodGroups } from './foodgroups.js';
import { renderFoodGroups } from './render-foodgroups.js';
import { aboutMe } from './aboutme.js';

const stringElement = document.getElementById('string-element');
const objectElement = document.getElementById('object-element');
const nestedObjectElement = document.getElementById('nested-object-element');
const arrayPropertyElement = document.getElementById('array-property-element');

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

for (let me of aboutMe) {
    // for each object me of array aboutMe
        //create element meContainer div
        // create element meItem p
        // create element hobbiesArray div
    const meContainer = document.createElement('div');
    const meItem = document.createElement('p');
    const hobbiesArray = document.createElement('p');

    // textContent of meItem p is a string me.name me.age
    // textContent of hobbiesArray p is a string me.hobbies[0-2]
    meItem.textContent = `My name is ${me.name}. I am ${me.age} years old.`;
    // hobbiesArray.textContent = `My hobbies are ${me.hobbies[0]}, ${me.hobbies[1]}, and ${me.hobbies[2]}.`;
    
    // add classList list to meContainer div
    // append meItem p and hobbiesArray p to meContainer div
    meContainer.classList.add('list');
    meContainer.append(meItem);

    hobbiesArray.textContent = 'My hobbies include:';

     // for each item hobby of object property me.hobbies:
     // create element hobbyEl span
     // hobbyEl textContent is item hobby
     // append hobbyEl span to hobbiesArray p
    for (let hobby of me.hobbies) {
        const hobbyEl = document.createElement('span');
        hobbyEl.textContent = ` ${hobby} `;
        hobbiesArray.append(hobbyEl);
    }
    // append hobbiesArray p to meContainer div
    meContainer.append(hobbiesArray);

    arrayPropertyElement.append(meContainer);
}