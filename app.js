const totalFields = 4;
const correctPassword = '1234';

const verificationInputs = [...document.querySelectorAll('.fields> input[type="text"]')];

const verification1 = document.querySelector('input[name="verification_1"]');

const verify = () =>{
    const password = verificationInputs.map(input => input.value).join('');
    if(password === correctPassword){
    console.log('Yes');
    }else{
        console.log('No');
    }
};

verificationInputs.forEach((input, i) => {
    input.addEventListener('keyup', e =>{
        if(!e.target.value) return;
        if (i === totalFields - 1){
            verify();
            return;
        }
        verificationInputs[i + 1].focus();
    });
});
verification1.addEventListener('paste', e => {
    navigator.clipboard.readText().then(text =>{
        if(text.length !== totalFields){
            console.log('Invalid paste length');
            return;
        }
        verificationInputs.forEach((input, i) => {
            input.value = text[i];
        });
        verificationInputs[totalFields -1].focus();
        verify();
    });
});