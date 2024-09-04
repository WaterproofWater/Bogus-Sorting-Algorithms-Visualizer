let arrSize = 5;
let sortingSpeed = 500;
let arr = [];
let copyArr = [];

// Array size and sorting speed updater
document.getElementById('arraySize').addEventListener('input', updateArraySizeDisplay);
document.getElementById('sortSpeed').addEventListener('input', updateSortSpeedDisplay);

function updateArraySizeDisplay() {
    const arraySizeSlider = document.getElementById('arraySize');
    const arraySizeValue = document.getElementById('arraySizeValue');
    arraySizeValue.textContent = arraySizeSlider.value;

    arrSize = parseInt(arraySizeSlider.value);
    arr = [];
    container.innerHTML = "";
    console.log("updating array");
    createArray(arrSize);
}

function updateSortSpeedDisplay() {
    const sortSpeedSlider = document.getElementById('sortSpeed');
    const sortSpeedValue = document.getElementById('sortSpeedValue');
    sortSpeedValue.textContent = sortSpeedSlider.value;
    sortingSpeed = parseInt(sortSpeedSlider.value);
}

// Button toggle logic
function disableButtons() {
    document.getElementById("arraySize").disabled = true;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
}

function enableButtons() {
    document.getElementById("arraySize").disabled = false;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = false);
}

// Sleep logic
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Sort finished message
async function sortCompletedMessage() {
    sortIndicator.innerHTML = "Done!";
    await sleep(1000);
    sortIndicator.innerHTML = "";
}

// Array creation logic
function createArray(arraySize) {
    for (let i = 0; i < arraySize; i++) {
        arr[i] = Math.random();
    }
    displayArr(arr, "black");
}

// Display array logic
function displayArr(arr, colour) {
    container.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = arr[i] * 100 + "%";
        bar.style.width = (110 - arrSize) + "px";
        bar.style.backgroundColor = colour;
        bar.style.margin = "1px";
        container.appendChild(bar);
    }
}

// Display bar logic
function displayBar(arr, index1 = null, index2 = null) {
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = arr[i] * 100 + "%";
        bar.style.width = (110 - arrSize) + "px";
        bar.style.margin = "1px";
        
        if (i === index1 || i === index2) {
            bar.style.backgroundColor = "red"; 
        } 
        else {
            bar.style.backgroundColor = "black"; 
        }
        
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

async function shuffle(arr) {
    displayArr(arr, "red");
    await sleep(sortingSpeed);
    
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    displayArr(arr, "black");
    await sleep(sortingSpeed);
}

async function bogoSort() {
    disableButtons();

    copyArr = arr.slice();
    console.log("Bogosorting");
    console.log(copyArr);
    sortIndicator.innerHTML = "Sorting...";

    while (!isSorted(copyArr)) {
        await shuffle(copyArr);
    }

    displayArr(copyArr, "black");
    sortCompletedMessage();

    enableButtons();
    return copyArr;
}

// console.log("Bogo-sorted array:", bogoSort(arr));


// Stalin Sort Logic
async function stalinSort() {
    disableButtons();
    copyArr = arr.slice();
    console.log("Stalinsorting");
    console.log(copyArr);
    sortIndicator.innerHTML = `Sorting...`;

    if (copyArr.length === 0) {
        return [];
    }

    let i = 1;
    while (i < copyArr.length) {
        displayBar(copyArr, i, i - 1);
        await sleep(sortingSpeed);

        if (copyArr[i] < copyArr[i - 1]) {
            copyArr.splice(i, 1);
        } else {
            i++;
        }

        displayArr(copyArr, "black");
        await sleep(sortingSpeed);
    }

    sortCompletedMessage();
    enableButtons();
    return copyArr;
}

// console.log("Stalin-sorted array:", stalinSort(arr));


// Bozo sort Logic
async function bozoSort() {
    disableButtons();
    copyArr = arr.slice();
    console.log("Bozosorting");
    console.log(copyArr);
    sortIndicator.innerHTML = `Sorting...`;

    while (!isSorted(copyArr)) {
        let i, j;

        i = Math.floor(Math.random() * copyArr.length);

        do {
            j = Math.floor(Math.random() * copyArr.length);
        } while (i === j);

        displayBar(copyArr, i, j);
        await sleep(sortingSpeed); 

        [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];

        displayArr(copyArr, "black");
        await sleep(sortingSpeed);
    }

    sortCompletedMessage();
    enableButtons();
    return copyArr;
}

//console.log("Bozo-sorted array:", bozoSort(arr));


createArray(arrSize);
