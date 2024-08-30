const arr_size = 3; // Maybe cap at 100 (slider)
const arr = [];

for (let i = 0; i < arr_size; i++){
    arr[i] = Math.random();
}

for (let i = 0; i < arr.length; i++){
    const bar = document.createElement("div");
    bar.style.height = arr[i] * 100 + "%";
    bar.style.width = (110 - arr_size) + "px";
    bar.style.backgroundColor = "black";
    bar.style.margin = "1px";
    container.appendChild(bar);
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

function bogosort(arr) {
    while (!isSorted(arr)) {
        shuffle(arr);
    }
    return arr;
}

// console.log("Bogo-sorted array:", bogosort(arr));


// Stalin Sort Logic

function stalinSort(arr) {
    if (arr.length === 0) {
        return [];
    }

    const result = [arr[0]]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= result[result.length - 1]) {
            result.push(arr[i]); 
        }
    }

    return result;
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

function bozoSort(arr) {
    while (!isSorted(arr)) {
        // Randomly select two indices to swap
        const i = Math.floor(Math.random() * arr.length);
        const j = Math.floor(Math.random() * arr.length);

        // Swap the elements at the two random indices
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

//console.log("Bozo-sorted array:", bozoSort(arr));



