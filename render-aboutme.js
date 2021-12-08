export function renderAboutMe(meData) {
        
    const meContainer = document.createElement('div');
    const meItem = document.createElement('p');
    const hobbiesArray = document.createElement('p');

    meItem.textContent = `My name is ${meData.name}. I am ${meData.age} years old.`;

    meContainer.classList.add('list');
    meContainer.append(meItem);

    hobbiesArray.textContent = 'My hobbies include:';

    for (let hobby of meData.hobbies) {
        const hobbyEl = document.createElement('span');
        hobbyEl.textContent = ` ${hobby} `;
        hobbiesArray.append(hobbyEl);
    }

    meContainer.append(hobbiesArray);
    return meContainer;
}