let fm = document.querySelector('form');//for the form
let fn = document.getElementById('full-name');//for full name
let em = document.getElementById('email');//for email
let msg = document.getElementById('message');//fo rmessage
let fb = document.querySelector('.feedback-js');//for feedback to appear bellow form
let err = document.querySelector('.errors-js');//for errors to appear bellow form
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;//expression to create a filter for proper email input-written inside forward slashes
let sbm = document.getElementById('submit');//for submit






function handleForm(event){
    
    event.preventDefault();//prevents submitting form and preserves user input inside the form
    console.log('Your name is: ' + fn.value);
    console.log('Your email is: ' + em.value);
    console.log('Your message: ' + msg.value);
    let data = {};//variable as an empty object
    let errors = [];// as an empty array
    
    if (fn.value !== ''){
    
        data.name = fn.value;//new property for name is declared inside the data object
    
    } else{
    errors.push('Name is empty. Please enter your full name');
    }

    if (em.value !== ''){
        if(regex.test(em.value)){
            data.email = em.value;//new property is declared inside the data object
        }else {
            errors.push('Please enter the valid email');
        } 
    } else{
        errors.push('Email is empty. Please enter your email');
    }
    
    if (msg.value !== ''){
    
        data.message = msg.value;//new property for message is declared inside the data object
    
    } else{
    errors.push('Message is empty. Please write your message');
    }

    //handles feedback//error messages

    if(errors.length === 0){
    console.log(data);
    fb.textContent = 'Thank you ' + fn.value + ' for filling out the form. Your email ' + em.value + ' is saved. And your message is: <br>' + msg.value;
    err.textContent = '';
    //clears the text inputs
    fm.reset();
    } else {
    console.log(errors);
    fb.textContent = '';
     //prints error message bellow the form
    for(let singleError of errors){
      //programmatically create list item
    let li = document.createElement('li');
     //add error message to list
    li.textContent = singleError;
        //append list item to unordered list
    err.appendChild(li);
    } 
}

}
fm.addEventListener('submit', handleForm);

