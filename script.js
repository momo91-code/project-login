//login//

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

//scelta personaggio//
const personaggio ={nome:'',sex:''};
let currentObj = {};

//storia//
const story = 
[{
  id:1,
  title:'risveglio',
  subtitle:'a causa di un rumore assordante, ti risvegli nel cuore della notte.',
  imageUrl : 'immagini/stanza.jpg',
  options:[
  {
    label:'ti alzi',action:2
  },
  {
    label:"controlli l'orologio",action:3
  }
  ]
},
{
  id:2,
  title:'ombra',
  subtitle:"dirigendoti verso la porta di camera tua, scorgi un'imbra passare",
  imageUrl : 'immagini/mazza.jpg',
  options:[
  {
    label:"segui l'ombra",action:6
  },
  {
    label:'corri dalla parte opposta',action:7
  }
  ]
},

{
 id:3,
  title:'ora infernale',
  subtitle:"guardando l'orologio, scopri che nono le 3.33 di notte! l'ora del diavolo",
  imageUrl : 'immagini/cucina.jpg',
  options:[
  {
    label:"ti alzi e corri verso il cellulare",action:4
  },
  {
    label:'brandisci la tua mazza da baseball e vai a controllare',action:8
  }
  ]
},

{
 id:6,
  title:'panico!',
  subtitle:"un altro rumore assordante ti rimbomba nelle orecchie facendoti sobbalzare",
  imageUrl : 'immagini/corridoio2.jpg',
  options:[
  {
    label:"segui quel rumore verso il salotto",action:9
  },
  {
    label:"corri in cucina a procurarti un'arma",action:10
  }
  ]
},

{
 id:7,
  title:'SBAM!',
  subtitle:"una forza invisibile ti trascina verso di lei buttandoti a terra e facendoti sbattere contro il muro",
  imageUrl : 'immagini/stanza.jpg',
  options:[
  {
    label:"urli dalla paura",action:5
  },
  {
    label:"ti rialzi e provi a raggiungere la porta di casa",action:11
  }
  ]
},

{
 id:8,
  title:'buio',
  subtitle:"a causa di un forte temporale, scopri di non avere più corrente in casa",
  imageUrl : 'immagini/stanza.jpg',
  options:[
  {
    label:"brancolando nel buio cerchi di raggiungere il contatore elettrico",action:12
  },
  {
    label:"ti paralizzi dalla paura e rimani in un angolo aspettando che il sole sorga",action:100
  }
  ]
},
{
 id:4,
  title:'dannata tecnologia!',
  subtitle:"a causa di un corto circuito, il tuo telefono si è fulminato e non funziona più",
  imageUrl : 'immagini/stanza.jpg',
  options:[
  {
    label:"lo sbatti a terra ed inizi ad urlare",action:14
  },
  {
    label:"non ti perdi d'animo, è il momento di agire",action:15
  }
  ]
},
{
 id:9,
  title:'rivelazione',
  subtitle:"una volta in salotto, scorgi nuovamente quell'ombra. In un batter d'occhio si avventa su di te con un urlo frastornante facendoti cadere a terra",
  imageUrl : 'immagini/stanza.jpg',
  options:[
  {
    label:"urli, scalci e ti liberi",action:16
  },
  {
    label:"accetti il tuo destino e ti lasci travolgere",action:100
  }
  ]
},

{
 id:10,
  title:'armi',
  subtitle:"in preda all'agitazione, svuoti tutti i cassetti della cucina munendoti di più oggetti taglienti possibili. Girandoti, però, ti ritrovi faccia a faccia con quell'ombra maledetta che ti aggredisce",
  imageUrl : 'immagini/stanza.jpg',
  options:[
  {
    label:"ti dimeni e sferri colpi di coltello nel vuoto",action:17
  },
  {
    label:"chiudi gli occhi ed inizi a pregare",action:100
  }
  ]
},

{
  id:100,
  title:'sei morto',
  subtitle:'le tue scelte ti hanno portato ad una fine di agonie',
  options:[
  {
    label:'ricomincia',action:1
  },
  {
    label:'torna alla login',action:101
  }
  ]
}]

//ESEMPIO DI OGGETTO
// const users = [{email:'mario@libero.it',password:'marioxxx'},{email:'gino@libero.it',password:'ginorrr'},{email:'monica@libero.it',password:'monicavvv'}];

// check login//
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
    alert('Hai sbagliato qualcosa,ritenta');
  }
}

//quando loggato il container di login sparisce e viene visualizzato container di inizio gioco(main wrap)//
function alreadyLogged(){
  const loginBlock = document.getElementsByClassName('login-block')[0];
  const wrapBlock = document.getElementsByClassName('main-wrap')[0];
  loginBlock.classList.add('hidden');
  wrapBlock.classList.remove('hidden');
}

//dopo selezione inizio gioco di contanier main wrap, quest'ultimo viene nascosto per far visualizzare container gioca ora(step1)//
function iniziaIlGioco(){
  const wrapBlock = document.getElementsByClassName('main-wrap')[0];
  const playerBlock = document.getElementsByClassName('step1')[0];
  wrapBlock.classList.add('hidden');
  playerBlock.classList.remove('hidden');
}

//scelta giocatore//
function chosePlayer(sex){
  switch(sex){
    case 1:
      personaggio.sex = 'maschio';
      break
    case 2:
      personaggio.sex='femmina';
      break 
      default:
        personaggio.sex='maschio';
  }

//recupero elementi da html//
const step1 = document.getElementsByClassName('step1')[0];
const step2 = document.getElementById('game-block1');

//recupero elementi html dove vengono mostrati titoli, sottotitoli e due opzioni a scelta//
const gameTitle = document.getElementById('game-title');
const gameSubtitle = document.getElementById('game-subtitle');
const chose1 = document.getElementById('game-chose1');
const chose2 = document.getElementById('game-chose2');

//cerco nel mio array STORY l'oggetto con id == 1.questo è l'inizio della storia//
currentObj = story.find(oggetto => oggetto.id == 1);

//nascondo prima schermata e mostro seconda//
step1.classList.add('hidden');
step2.classList.remove('hidden');

//imposto titolo e sottotitolo con i dati dell'oggetto corrispondente//
gameTitle.textContent = currentObj.title;
gameSubtitle.textContent = currentObj.subtitle;

//imposto etichette per le due opzioni di scelta//
chose1.textContent = currentObj.options[0].label;
chose2.textContent = currentObj.options[1].label;
}

function buttonChoice(choice){
const step2 = document.getElementsByClassName('step2')[0];
const gameBlock = document.getElementById('game-block1');

const gameTitle = document.getElementById('game-title');
const gameSubtitle = document.getElementById('game-subtitle');
const chose1 = document.getElementById('game-chose1');
const chose2 = document.getElementById('game-chose2');

let action = choice == 1 ? currentObj.options[0].action : currentObj.options[1].action;
//variabile =   SE ?(allora) AZIONE SE VERA :(altrimenti) AZIONE SE NON VERA

  currentObj = story.find(oggetto => oggetto.id == action);
  console.log(currentObj);
  
  gameTitle.textContent = currentObj.title;
  gameSubtitle.textContent = currentObj.subtitle;
  chose1.textContent = currentObj.options[0].label;
  chose2.textContent = currentObj.options[1].label;
  step2.style.backgroundImage = "url(currentObj.imageUrl)";
}

