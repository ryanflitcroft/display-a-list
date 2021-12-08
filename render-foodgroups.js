export function renderFoodGroups(foodData) {
    const groupContainer = document.createElement('div');
    const groupItem = document.createElement('p');
    const objItem = document.createElement('p');
    
    groupItem.textContent = `This is the ${foodData.group} food group. It is ${foodData.plantBased} that this food group is plant based.`;
    objItem.textContent = `An example of this food group is ${foodData.example.type}. This food is ${foodData.example.color}.`;

    groupContainer.classList.add('list');
    groupContainer.append(groupItem, objItem);
    
    return groupContainer;
}