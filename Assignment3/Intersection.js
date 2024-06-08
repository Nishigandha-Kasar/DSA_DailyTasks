function findIntersection(arr1,arr2){
    return arr1.filter(element => arr2.includes(element));
}

const arr1 = [1,3,2,1];
const arr2 = [2,6];
console.log(findIntersection(arr1,arr2));