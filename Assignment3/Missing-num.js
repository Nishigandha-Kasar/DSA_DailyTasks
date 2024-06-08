function getMissingNumber(num,n){
    let sum =(n*(n+1)/2);

    const actualsum = num.reduce((acc,curr)=>acc + curr,0);
    return sum - actualsum;

    // let actualsum =0;
    //  for(let i=0;i<n;i++){
    //     actualsum+=num[i] || 0;
    // }
    // return sum - actualsum;;
}
    
const array = [1,2,4,6,3,7,8];
const n=array.length+1;
console.log("The missing number is:",getMissingNumber(array,n));
