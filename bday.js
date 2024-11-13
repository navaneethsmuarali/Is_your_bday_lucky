const Date_in = document.getElementById('Dateinput');

const Lucky_Number = document.getElementById('Lucky_nmbr');

const ClickButton = document.getElementById('Button_check');
const Out = document.getElementById('output')

ClickButton.addEventListener('click', function() {
    const Dob = Date_in.value.replaceAll('-', '')
    let sum = 0;
    for (let i = 0; i < Dob.length; i++) {

        sum = sum + Number(Dob.charAt(i))

    }
    if (sum % Number(Lucky_Number.value) === 0) {

        Out.innerText = 'Your are lucky'
    } else {
        Out.innerText = 'Your dob is not that lucky'
    }




})