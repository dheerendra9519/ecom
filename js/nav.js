const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
   
        <div class="nav">
            <img src="css/img/Color logo - no background.png" class="brand-logo" alt=" ">
            <div class = "nav-items">
                <div class = "search">
                    <input type="text" class="search-box" placeholder="search">
                 
                    <button class="search-btn">search</button>
        </div>
         <a>
         <img src="css/img/user.png" id  = "user-img"alt="User" /></a>
         <div class = "login-logout-popup hide"> 
           <p class="account-info"> log in as, name</p>
           <button class = "btn" id = "user-btn"> log out</button>
         </div>
         <a href="#"><img src="css/img/cart.png" alt="User" />
         <span class = "count">0</span>

     
         </a>
         
        </div>
        </div>
        <ul class="link-container" id = "mynav">
            <li class="link-item"><a href="#" class="links">Home</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">Women</a></li>
            <li class="link-item"><a href="#" class="link">Kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </ul>

    `;
    function myFunction(){
        var x = document.getElementsByClassName("link-container");
        if(x.className === "link-container")
        {
            x.className += "responsive";
    
        }
        else {
            x.clasName = "link-container";
    
        }
    }
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const  userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
     userPopup.classList.toggle('hide');

})
window.onload = () => {
    let  user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        popuptext.innerHTML = `log in as , ${user.name}`;
        actionBtn.innerHTML = `log out`;
        action.Btn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();

        })

    }
    else{
        
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login'; 
        })

    }



}
