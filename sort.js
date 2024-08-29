const arr_size = 30; // Maybe cap at 100 (slider)
const arr = [];

for (let i = 0; i < arr_size; i++){
    arr[i] = Math.random();
}

for (let i = 0; i < arr.length; i++){
    const bar = document.createElement("div");
    bar.style.height = arr[i] * 100 + "%";
    bar.style.width = (110 - arr_size) + "px";          // Change this to reverse of this logic (more numbers should make the width less)
    bar.style.backgroundColor = "black";
    bar.style.margin = "1px";
    container.appendChild(bar);
}

// Sort logic here


