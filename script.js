let txt = document.querySelector('input');
let btn = document.querySelector('button');
let p = document.getElementById('output');
let floatChecker = (value) => {
    let statsus = false;
    for (let i = 0; i < value.length; i++) {
        if (value[i] == '.') {
            statsus = true;
        }
    }
    if (statsus) {
        return true;
    }
    else {
        return false;
    }
}
let array_checker = (arr) => {
    let sts = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '[') {
            sts = true;
        }
    }
    if (sts) {
        return true;
    }
    else {
        return false;
    }
}
let set_checker = (arr) => {
    let sts = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '{') {
            sts = true;
        }
    }
    if (sts) {
        return true;
    }
    else {
        return false;
    }
}
let undefined_checker = (val) => {
    let str = 0;
    for (let i = 0; i < val.length; i++) {
        if (parseInt(val[i])) {
            str++;
        }
    }
    if (val.length != str) {
        return true
    }
    else {
        return false
    }
}
btn.addEventListener('click', () => {
    let temp_num = parseInt(txt.value);
    if (txt.value == '') {
        alert("Add Something");
        return;
    }
    if (isNaN(temp_num)) {
        if (txt.value == "true" || txt.value == "false") {
            p.innerHTML = "Bool";
        }
        else if (txt.value.length == 1) {
            p.innerHTML = "Char";
        }
        else if (floatChecker(txt.value)) {
            p.innerHTML = "Float";
        }
        else if (array_checker(txt.value)) {
            p.innerText = "Array"
        }
        else if (set_checker(txt.value)) {
            p.innerText = "Set"
        }

        else {
            p.innerHTML = "String";
        }
    }
    else if (undefined_checker(txt.value)) {
        p.innerText = "Undefined";
    }
    else {
        p.innerHTML = "Number";
    }
    txt.value = "";
})