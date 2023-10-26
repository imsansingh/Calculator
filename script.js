function square(string) {
    string = string * string;
    return string;
}
let string = " ";
let buttons = document.querySelectorAll('button') // all selected with class button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = " ";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '^2') {
            string = square(string);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target) //targeting the button
            string = string + e.target.innerHTML; // setting the value of string
            document.querySelector('input').value = string; // setting the value of input = string
        }
    })
})
