const arr_size = 10;
const arr = [];

for (let i = 0; i < arr_size; i++){
    arr[i] = Math.random();
}

for (let i = 0; i < arr.length; i++){
    const bar = document.createElement("div");
    bar.style.height = arr[i] * 100 + "%";
    bar.style.width = arr_size + "px";          // Change this to reverse of this logic (more numbers should make the width less)
    bar.style.backgroundColor = "black";
    container.appendChild(bar);
}

// Sort logic here


