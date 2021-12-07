const objectElement = document.getElementById('object-element');

const pets = [
    {
        name: 'Lissie',
        type: 'dog',
        age: 10
    },
    {
        name: 'Millie',
        type: 'dog',
        age: 6
    },
    {
        name: 'Kurt',
        type: 'goldfish',
        age: 3
    }
];

for (let pet of pets) {
    const petContainerEl = document.createElement('div');
    const petPropertyEl = document.createElement('p');

    petPropertyEl.textContent = `I have a ${pet.type} named ${pet.name}, and their age is ${pet.age}`;

    petContainerEl.classList.add('list');
    
    petContainerEl.append(petPropertyEl);
    objectElement.append(petContainerEl);
}