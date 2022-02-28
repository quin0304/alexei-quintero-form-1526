let submit = document.getElementById('submit');
function submitMesg{
    on
}
*/
/*
let em = document.getElementById('email');
let fb = document.querySelector('.feedbackjs');
let err = document.querySelector('.errorjs');


function handleForm(event){
    event.preventDefault();

    let data = {};
    let errors = [];
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (em.value !== ''){
    if(regex.test(em.value)){
        data.email = em.value;
    }else {
        errors.push('Please enter the valid email');

    } 
} else{
    errors.push('Email is empty. Please enter your email');
}

console.log(data);
console.log(errors);
if(errors.length === 0){
    console.log(data);
    fb.textContent = 'Thank you. Your email ' + em.value + ' is saved.';
    err.textContent = '';
    //clears the text input
    fm.reset();
} else {
    console.log(errors);
    fb.textContent = '';
    //programmatically create list item
  for(let singleError of errors){
    let li = document.createElement('li');
    //add error message to list
    li.textContent = singleError;
    //append list item to unordered list
    err.appendChild(li);
  } 
}

}
fm.addEventListener('submit', handleForm);
