/* window.onload = () => {
    if(sessionStorage.user)
    {
        user  = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.emailToken)){
            location.raplace('/login');
        }
    }
}
*/
const loader = document.querySelector('.loader');
const submitBtn = document.querySelector('.submit-btn');
const nam = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#term-and-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(nam != null){
  if( nam.value.length<3)
  {
      showAlert('name must be 3 letters long ');
  }
  else if(!email.value.length)
  {
      showAlert('enter email address');

  }
  else if(password.value.length<8)
  {
      showAlert('password must be at least 8 characters long');

  }
  else if(!number.value.length){
      showAlert('enter your phone number');

  }
  else if(!Number(number.value) || number.value.length <10 || number.value.length >12) {

showAlert('invalid phone number please enter a valid phone number');
  }
  else if(!tac.checked){
      showAlert('you must agree to the terms and conditions');
  }
  else{
      //submit form
      loader.style.display = 'block';
        sendData('/signup', {
            nam: nam.value,
            email:email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false

      }) 
      
  }
    }
    else{
        if(!email.value.length || !password.value.length){
            showAlert('fill all the Field');

        }
        else{
            loader.style.display = 'block';
           sendData('/login', {
           
            email:email.value,
            password: password.value,
        

      }) 
        }
    }

})


const sendData = (path, data) => {
 fetch(path, {
        method: 'post',
        headers: new Headers({'content-Type': 'application/json'}),
        body: JSON.stringify(data)

     }).then((res) => res.json())
    .then(response => {
        processData(response);
        console.log(response);
     }) 
      
}
const processData = (data) => {
    loader.style.display = 'null';
    if(data.alert){
        showAlert(data.alert);
    }
    /*
    else if (data.nam)
    {
        //create authtoken
      data.authToken = generateToken(data.email);
      sessionStorage.user = JSON.stringify(data);
      location.replace('/login');
       
}
 */
}

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() =>
    {
        alertBox.classList.remove('show');
    }, 3000);
}
