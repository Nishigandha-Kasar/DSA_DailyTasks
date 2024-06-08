function countFrequency(arr) {
          let frequencyCounter = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }
    for (let key in frequencyCounter) {
        console.log(`${key}: ${frequencyCounter[key]}`);
    }
}


const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
countFrequency(arr);