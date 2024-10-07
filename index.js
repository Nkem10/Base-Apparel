const form = document.getElementById('form1');
const inputEmail = document.getElementById('input_email');
const spanError = document.getElementById('error_msg');
const iconError = document.getElementById('icon_error');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputEmail.value === '') {
        spanError.innerHTML = 'This field is required';
        iconError.classList.remove('hidden');
        inputEmail.focus();
    } else if (inputEmail.value.search("@") < 0) {
        spanError.innerHTML = 'Please provide a valid email';
        inputEmail.focus();
    } else if (inputEmail.value.indexOf(".com") < 0) {
        spanError.innerHTML = 'Please provide a valid email';
        inputEmail.focus();
    } else {
        iconError.classList.add('hidden');
        spanError.classList.add('text-[#00ced1]');
        inputEmail.value = '';
        spanError.innerHTML = 'Email registered correctly';
        setTimeout(() => {
            inputEmail.value = ''
            window.location.reload()
        }, 2000)
    }
});
