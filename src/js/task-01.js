const mainList = document.querySelector('#categories');
const itemList = mainList.querySelectorAll('.item');
const itemNumber = itemList.length;
console.log(`Number of categories: ${itemNumber}`)


itemList.forEach((item) => {
    const title = item.querySelector('h2').innerText;
    const itemLength = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemLength}`);
});






