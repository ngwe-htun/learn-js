// Undefine object
try {
    let obj = undefined;
    let a = obj.test;
} catch (error) {
    console.error('Error occur - ', error);
}
console.info(`Even though error occur. It reach to me`);

// Undefine array object
try {
    let arr = [1, 2, 3];
    let res = arr[6].name;
} catch (error) {
    console.error(`Error on undefine array object`);
}
console.info(`Reach after "Error on undefine array object" message`);

