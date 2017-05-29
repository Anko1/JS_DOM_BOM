$(document).ready(function () {
    document.body.appendChild(formFactory());

    $('form').submit(function (ev) {
        ev.preventDefault(); // to stop the form from submitting
        /* Validations go here */

        // Validate();

        if (!Validate()) alert('Validation errors!');
        else alert('Validation success!');



        // this.submit(); // If all the validations succeeded
    });
});


function formFactory() {
    var form = document.createElement('form');
    var inputAge = document.createElement('input');
    var inputDate = document.createElement('input');
    var inputUsername = document.createElement('input');
    var inputSubmit = document.createElement('input');

    form.name = 'login';
    form.action = 'google.com';

    inputAge.type = 'text';
    inputAge.name = 'age';
    inputAge.id = 'age';
    inputAge.value = '21';

    inputUsername.type = 'text';
    inputUsername.name = 'username';
    inputUsername.id = 'username';
    inputUsername.value = 'user_you';

    inputDate.type = 'text';
    inputDate.name = 'date';
    inputDate.id = 'date';
    inputDate.value = todayForInput();

    inputSubmit.type = 'submit';
    inputSubmit.value = 'Validate Me';

    form.appendChild(inputAge);
    form.appendChild(inputUsername);
    form.appendChild(inputDate);
    form.appendChild(inputSubmit);

    return form;
}

function Validate() {
    var testAge;
    var testUser;
    var testDate;

    var age = $('#age').val();
    var user = $('#username').val();
    var date = $('#date').val();

    testAge = IsNumeric(age) && age >= 0;
    if(!testAge) alert('Напиши людськтй вік, ублюдок!');
    testUser = testOnUser(user);
    if(!testUser) alert('Та навіть я, називаю тебе краще ніж ти сам написав!');
    testDate = isValidDate(date);
    if(!testDate) alert('Напиши норм дату, бо в цей час я твою мамку в кіно водив!');

    return testAge && testUser && testDate;
}

function IsNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}

function testOnUser(uName) {
    var pre = uName.substring(0, 5);

    return pre === 'user_';
}

function isValidDate(date) {
    var valid = false;
    var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    var today = new Date();

    // alert(pattern.test(date));
    if(pattern.test(date)){
        var splDate = date.split('/'); // date Format: dd/MM/yyyy

        console.log(splDate[0] == today.getDate());
        valid = splDate[0] == today.getDate() && splDate[1] == (today.getMonth() + 1) && splDate[2] == today.getFullYear() ;
    }

    return valid;
}

function todayForInput() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    var today = dd+'/'+mm+'/'+yyyy;

    return today;
}