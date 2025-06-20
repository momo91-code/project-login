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
const personaggio ={nome:'',sex:''};
let currentObj = {};

const story = 
[{
  id:1,
  title:'risveglio',
  subtitle:'a causa di un rumore assordante, ti risvegli nel cuore della notte.',
  options:[
  {
    lable:'ti alzi',action:2
  },
  {
    lable:'torni a dormire',action:10
  }
  ]
},
{
  id:2,
  title:'ombra',
  subtitle:"appena ti alzi scorgi un'ombra passare davanti alla tua stanza",
  options:[
  {
    lable:"segui l'ombra",action:3
  },
  {
    lable:'corri dalla parte opposta',action:4
  }
  ]
},{
  id:10,
  title:'sei morto',
  subtitle:'le tue scelte ti hanno portato ad una fine di agonie',
  options:[
  {
    lable:'ricomincia',action:1
  },
  {
    lable:'torna alla login',action:100
  }
  ]
}]
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
    loginBlock.classList.add('hidden');
    wrapBlock.classList.remove('hidden');
    sessionStorage.setItem('loginDone',true);
  }else{
    alert('Hai sbagliato qualcosa,ritenta')
  }
  
}

function alreadyLogged(){
  const loginBlock = document.getElementsByClassName('login-block')[0];
  const wrapBlock = document.getElementsByClassName('main-wrap')[0];
  loginBlock.classList.add('hidden');
  wrapBlock.classList.remove('hidden');
}

function iniziaIlGioco(){
  const wrapBlock = document.getElementsByClassName('main-wrap')[0];
  const playerBlock = document.getElementsByClassName('step1')[0];
  wrapBlock.classList.add('hidden');
  playerBlock.classList.remove('hidden');
}

function chosePlayer(sex){
  switch(sex){
    case 1:
      personaggio.sex='maschio';
      break
    case 2:
      personaggio.sex='femmina';
      break 
      default:
        personaggio.sex='maschio';
  }
const step1 = document.getElementsByClassName('step1')[0];
const step2 = document.getElementById('game-block');
const gameTitle = document.getElementById('game-title');
const gameSubtitle = document.getElementById('game-subtitle');
const chose1 = document.getElementById('game-chose1');
const chose2 = document.getElementById('game-chose2');
currentObj = story.find(oggetto => oggetto.id ==1);
step1.classList.add('hidden');
step2.classList.remove('hidden');
gameTitle.textContent = currentObj.title;
gameSubtitle.textContent = currentObj.subtitle;
chose1.textContent = currentObj.options[0].lable;
chose2.textContent = currentObj.options[1].lable;

}
 function buttonChose(chose){

 }