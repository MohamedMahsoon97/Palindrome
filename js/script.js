// find elements
const myContent = document.getElementById("inp");
const myBtn = document.getElementById("checked");

// add function to btn when clicked
myBtn.addEventListener('click', function() {
    const x = myContent.value.split("").reverse().toString();
    const y = myContent.value.split("").toString();

    // (x === y) ? console.log(true): console.log(false);    // Ternary Operator

    if (x === y) {
        myContent.value = 'true';
        myBtn.style.backgroundColor = "green";
        myBtn.innerHTML = `<i class="fas fa-check"></i>`;
    } else {
        myContent.value = 'false';
        myBtn.style.backgroundColor = "crimson";
        myBtn.innerHTML = `<i class="fas fa-times"></i>`;
    }
});