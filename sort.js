const arr_size = 5; // Maybe cap at 100 (slider)
const arr = [];
let copyArr = [];

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
for (let i = 0; i < arr_size; i++) {
    arr[i] = Math.random();
}
displayArr(arr);

// Display array logic
function displayArr(arr) {
    container.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
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

async function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    displayArr(arr);
    sortIndicator.innerHTML = "Sorting...";
    await sleep(200);
}

async function bogoSort() {
    copyArr = arr.slice();
    console.log("Bogosorting");
    console.log(copyArr);

    while (!isSorted(copyArr)) {
        await shuffle(copyArr);
    }

    sortCompletedMessage()
    return copyArr;
}

// console.log("Bogo-sorted array:", bogoSort(arr));


// Stalin Sort Logic
async function stalinSort() {
    copyArr = arr.slice();
    console.log("Stalinsorting");
    console.log(copyArr);

    if (copyArr.length === 0) {
        return [];
    }

    let i = 1;
    while (i < copyArr.length) {
        if (copyArr[i] < copyArr[i - 1]) {
            sortIndicator.innerHTML = `Sorting...`;
            copyArr.splice(i, 1);
        } 
        else {
            i++;
        }

        displayArr(copyArr);
        await sleep(200);
    }

    sortCompletedMessage();
    // displayArr(copyArr);
    return copyArr;
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



