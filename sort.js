const arr_size = 3; // Maybe cap at 100 (slider)
const arr = [];
var copyArr = [];

// Array creation logic
for (let i = 0; i < arr_size; i++){
    arr[i] = Math.random();
}
displayArr(arr);

// Display array logic
function displayArr(arr){
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++){
        const bar = document.createElement("div");
        bar.style.height = arr[i] * 100 + "%";
        bar.style.width = (110 - arr_size) + "px";
        bar.style.backgroundColor = "black";
        bar.style.margin = "1px";
        container.appendChild(bar);
    }
}


// Bogo Sort Logic
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function bogoSort() {
    copyArr = arr.slice();
    console.log("Bogosorting");
    console.log(copyArr);

    while (!isSorted(copyArr)) {
        shuffle(copyArr);
    }

    displayArr(copyArr);
    return copyArr;
}

// console.log("Bogo-sorted array:", bogoSort(arr));


// Stalin Sort Logic

function stalinSort() {
    copyArr = arr.slice();
    console.log("Stalinsorting");
    console.log(copyArr);

    if (copyArr.length === 0) {
        return [];
    }

    const stalinArr = [copyArr[0]]; 

    for (let i = 1; i < copyArr.length; i++) {
        if (copyArr[i] >= stalinArr[stalinArr.length - 1]) {
            stalinArr.push(copyArr[i]); 
        }
    }

    displayArr(stalinArr);
    return stalinArr;
}

// console.log("Stalin-sorted array:", stalinSort(arr));


// Bozo sort Logic

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function bozoSort() {
    copyArr = arr.slice();
    console.log("Bozosorting");
    console.log(copyArr);

    while (!isSorted(copyArr)) {
        // Randomly select two indices to swap
        const i = Math.floor(Math.random() * copyArr.length);
        const j = Math.floor(Math.random() * copyArr.length);

        // Swap the elements at the two random indices
        [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }

    displayArr(copyArr);
    return copyArr;
}

//console.log("Bozo-sorted array:", bozoSort(arr));



