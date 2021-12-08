export function renderPets(petData) {
// for each object in pets array:
    // create petContainerEl div
    // create petPropertyEl p 
    const petContainerEl = document.createElement('div');
    const petPropertyEl = document.createElement('p');

    // text content of petPropertyEl p is a string pet.type pet.name pet.age
    petPropertyEl.textContent = `I have a ${petData.type} named ${petData.name}, and their age is ${petData.age}`;
    
    // add class of list to petContainerEl div
    petContainerEl.classList.add('list');
    
    // append petPropertyEl p to petContainerEl div
    petContainerEl.append(petPropertyEl);
    return petContainerEl;
}