// Menu
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// using map
const breakfastItems = breakfastMenu.map((menu, index) => `<p>Item ${index}: ${menu}`);
document.getElementById('breakfastMenuItems').innerHTML = breakfastItems;

// using foreach
let mainItems = ''; 
mainCourseMenu.forEach((menu, index) => {
    mainItems += `<p>Item ${index + 1}: ${menu}`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainItems;

// using for
let dessertItems = '';
for (let index = 0; index < dessertMenu.length; index++) {
    dessertItems += `<p>Item ${index + 1}: ${dessertMenu[index]}`;;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItems;