/**
 * Array methods.
 *   - forEach
 *   - map
 *   - filter
 *   - reduce
 *   - find
 */


/**
 * 1. forEach
 */
const users = ['Alex', 'Sarah', 'Juan'];

function greeting(user) {
    console.log(`Welcome - ${user}`);
}

users.forEach( (user) => {
    greeting(user);
});


/**
 * 2. map
 *   - return new array
 */
const products = [
    { 'name': 'laptop', 'price': 1000 },
    { 'name': 'smartphone', 'price': 500 },
    { 'name': 'tablet', 'price': 400 }
];

const prices = products.map( (product) => {
    return product.price;
});
console.log('Products - ', products);
console.log('Product prices - ', prices);

/**
 * 3. Filter
 *   - return new array
 *   - return element that pass specific condition
 *   - use the above products const
 */
const minPrice = 200;
const maxPrice = 1000;

const filterProducts = products.filter( (product) => {
    return product.price >= minPrice && product.price <= maxPrice;
});
console.log(`Filteed products. Min - ${minPrice}, Max - ${maxPrice}, products -`, filterProducts);

/**
 * 4. Reduce
 *   - reduce array into a single value
 *   - apply function to each element
 *   - useful for aggregating data
 */
const orderedPrices = [10, 20, 30];
const totalOrderPrice = orderedPrices.reduce( (total, orderPrice) => total + orderPrice, 0);
console.log('Order prices - ', totalOrderPrice);

/**
 * 5. Find
 *   - return the first element found
 *   - searching with condition
 */
let idToFind = 2;
const employees = [
    {'id': 1, 'name': 'Alex', 'email': 'alex@gmail.com'},
    {'id': 3, 'name': 'Juan', 'email': 'juan@gmail.com'},
    {'id': 2, 'name': 'Sarah', 'email': 'sarah@gmail.com'},
    {'id': 1, 'name': 'Alex Clone', 'email': 'alexclone@gmail.com'}
];
const foundEmployee = employees.find( employee => employee.id == idToFind);
console.log(`Found employee. \nID - ${foundEmployee.id} \nName - ${foundEmployee.name} \nEmail - ${foundEmployee.email}`);