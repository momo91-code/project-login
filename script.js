const email = document.getElementsByClassName('input-custom')[0];
const password = document.getElementsByClassName('input-custom')[1];
const listAccessMail= ['mario@libero.it','gino@libero.it','monica@libero.it','emanuele@libero.it',
  'lorenzo@libero.it','andrea@libero.it','anna@libero.it','cinzia@libero.it',
];
const listAccessPassword= ['marioxxx','ginorrr','monicavvv','emanuelebbb',
  'lorenzolll','andreaqqq','annasss','cinziappp',
];

if(sessionStorage.getItem('loginDone')){
  alreadyLogged();
}

//ESEMPIO DI OGGETTO
// const users = [{email:'mario@libero.it',password:'marioxxx'},{email:'gino@libero.it',password:'ginorrr'},{email:'monica@libero.it',password:'monicavvv'}];

function checkLogin(){
  let emailValid = listAccessMail.includes(email.value);
  let passwordValid =  listAccessPassword.includes(password.value);

  let emailIndex = listAccessMail.indexOf(email.value);
  let passwordIndex =  listAccessPassword.indexOf(password.value);

  if((emailValid && passwordValid) && (emailIndex == passwordIndex)){
    console.log('entra');
    const loginBlock = document.getElementsByClassName('login-block')[0];
    const wrapBlock = document.getElementsByClassName('main-wrap')[0];
    loginBlock.classList.add('hide');
    wrapBlock.classList.remove('hide');
    sessionStorage.setItem('loginDone',true);
  }else{
    alert('Hai sbagliato qualcosa,ritenta')
  }
  
}

function alreadyLogged(){
  const loginBlock = document.getElementsByClassName('login-block')[0];
  const wrapBlock = document.getElementsByClassName('main-wrap')[0];
  loginBlock.classList.add('hide');
  wrapBlock.classList.remove('hide');
}