export function renderHello(helloData) {
    const helloContainer = document.createElement('div');
    const helloItem = document.createElement('p');
    
    helloItem.textContent = helloData;
    helloContainer.classList.add('list');
    helloContainer.append(helloItem);
    return helloContainer;
}