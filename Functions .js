
// Image declarations

let spartan = document.getElementById('Spartan');
let kratosAtSparta = document.getElementById('Kratos-at-Sparta');
let sparta = document.getElementById('Sparta');
let trader = document.getElementById('Trader');
let atTrader = document.getElementById('At-Trader');
let boc = document.getElementById('B-o-c');
let potion = document.getElementById('Potion');
let nemesiswhip = document.getElementById('Nemesis-whip');
let whipClaim = document.getElementsByName('Whip-claim');
let gauntletZeus= document.getElementById('Gauntlet-of-Zeus');
let gauntletClaim = document.getElementById('Gauntlet-claim');
let clawsHades = document.getElementById('Claws-of-Hades');
let clawsClaim = document.getElementsByName('Claws-claim');
let bladeOlympus = document.getElementById('Blade-of-Olympus');
let bladeClaim = document.getElementById('Blade-claim');
let underworld = document.getElementById('Underworld');
let kratosUnderworld = document.getElementById('Kratos-in-Underworld');
let hoplite = document.getElementById('Hoplite');
let hopliteAttack = document.getElementById('Hoplite-attack');
let hopliteKill = document.getElementById('Hoplite-kill');
let banshee = document.getElementById('Banshee');
let bansheeAttack= document.getElementById('Banshee-attack');
let bansheeKill = document.getElementById('Banshee-kill');
let satyr = document.getElementById('Satyr')
let satyrAttack = document.getElementById('Satyr-attack');
let satyrKill = document.getElementById('Satyr-kill');
let minotaur= document.getElementById('Minotaur');
let minotaurAttack= document.getElementById('Minotaur-attack');
let minotaurKill= document.getElementById('Minotaur-kill');
let medusa = document.getElementById('Medusa');
let medusaAttack = document.getElementById('Medusa-attack');
let medusaKill = document.getElementById('Medusa-kill');
let cyclops= document.getElementById('Cyclops');
let cyclopsAttack= document.getElementById('Cyclops-attack');
let cyclopsKill= document.getElementById('Cyclops-kill');
let mountOlympus= document.getElementById('Mount-Olympus');
let kratosOlympus = document.getElementById('Kratos-at-Olympus');
let hermes = document.getElementById('Hermes');
let hermesxkratos = document.getElementById('HermesxKratos');
let hermesFight = document.getElementById('Hermes-fight');
let hermesKill = document.getElementById('Hermes-kill');
let hercules = document.getElementById('Hercules');
let herculesxkratos = document.getElementById('HerculesxKratos');
let herculesFight = document.getElementById('Hercules-fight');
let herculesKill = document.getElementById('Hercules-kill');
let zeus = document.getElementById('Zeus');
let zeusxkratos = document.getElementById('ZeusxKratos');
let zeusFight= document.getElementById('Zeus-fight');
let zeusKill= document.getElementById('Zeus-kill');
let kratosRunning = document.getElementById('Kratos-running');
let youDead = document.getElementById('You-dead');
let kratosDead = document.getElementById('Kratos-dead');

// Audio declarations

let menuTheme = new Audio('Audio/Main menu theme GoW 3 .mp3');
let hoverSound = new Audio('Audio/Hover sound GoW2 .mp3');
let selection = new Audio('Audio/GoW CoO Selection sound .mp3');
let selection2 = new Audio('Audio/Other selection sound GoW2 .mp3');
let returnSound = new Audio('Audio/GoW CoO Exit sound .mp3');
let noice = new Audio('Audio/Noice .mp3');
let bruh = new Audio('Audio/Bruh .mp3');
let brokie = new Audio('Audio/YOURE BROKE! .mp3');
let battleTheme = new Audio('Audio/Gow CoO Battle theme .mp3');
let battleTheme2 = new Audio('Audio/Gow CoO Battle theme 2.mp3');
let cyclopsBattle = new Audio('Audio/Cyclops battle theme .mp3');
let zeusBattle = new Audio('Audio/Battle theme Zeus .mp3');
let underworldAm = new Audio('Audio/Underworld ambience .mp3');
let hoplteSound;
let hopliteAttacks = new Audio('Audio/Hoplite attacks .mp3');
let attacksHoplite = new Audio('Audio/Kratos attacks Hoplite .mp3');
let bansheeSound = new Audio('Audio/Banshee sound .mp3');
let bansheeAttacks = new Audio('Audio/Banshee attacks .mp3');
let bansheeAttacks2 = new Audio('Audio/Banshee attacks 2 .mp3');
let attacksBanshee = new Audio('Audio/Kratos attacks Banshee .mp3');
let satyrSound;
let satyrAttacks = new Audio('Audio/Satyr attacks .mp3');
let throwsSatyr = new Audio('Audio/Kratos throws Satyr .mp3');
let attacksSatyr = new Audio('Audio/Kratos attacks Satyr .mp3');
let minotaurSound = new Audio('Audio/Minotaur sound .mp3');
let minotaurAttacks = new Audio('Audio/Minotaur attacks .mp3');
let minotaurAttacks2 = new Audio('Audio/Minotaur attacks 2 .mp3');
let attacksMinotaur = new Audio('Audio/Kratos attacks Minotaur .mp3');
let medusaSound;
let medusaAttacks = new Audio('Audio/Medusa attacks Kratos .mp3');
let attacksMedusa = new Audio('Audio/Kratos attacks Medusa .mp3');
let olympusAm = new Audio('Audio/Olympus ambience .mp3');
let cyclopsSound = new Audio('Audio/Cyclops Sound .mp3');
let cyclopsAttacks = new Audio('Audio/Cyclops attacks .mp3');
let cyclopsAttacks2 = new Audio('Audio/Cyclops attacks 2 .mp3');
let attacksCyclops = new Audio('Audio/Kratos attacks Cyclops .mp3');
let hermesLine = new Audio('Audio/You may have brute force.. but you lack speed. .mp3');
let hermesAttacks = new Audio('Audio/Hermes attacks Kratos .mp3');
let hermesAttacks2 = new Audio('Audio/Hermes attacks Kratos 2 .mp3');
let herculesLine = new Audio('Audio/Hello.. brother .mp3');
let herculesAttacks = new Audio('Audio/Hercules attacks Kratos .mp3');
let herculesAttacks2 = new Audio('Audio/Hercules attacks Kratos 2 .mp3');
let zeusLine = new Audio('Audio/Such chaos... I will have much to do after I kill you. .mp3');
let zeusAttacks = new Audio('Audio/Zeus attacks Kratos .mp3');
let attacksZeus = new Audio('Audio/Kratos attacks Zeus .mp3');
let attacks = new Audio('Audio/Kratos attacks .mp3');
let attacks2 = new Audio('Audio/Kratos attacks 2 .mp3');
let evadeSound  = new Audio('Audio/Evade sound .mp3');
let achievement = new Audio('Audio/Achievment sound .mp3');
let defeatSound = new Audio('Audio/Defeat sound .mp3');
let orbSound = new Audio('Audio/Orb collection sound .mp3');
let orbsSound = new Audio('Audio/Orbs collection sound .mp3');
let orbsSound2 = new Audio('Audio/Orbs collection sound 2 .mp3');
let orbsSound3 = new Audio('Audio/Orbs collection sound 3 .mp3');
let wonned = new Audio('Audio/Wonned .mp3');
let heartbeat = new Audio('Audio/Heartbeat .mp3');
let deathSound = new Audio('Audio/Kratos death sound GoW2 2 .mp3');
let deathScream = new Audio('Audio/Kratos death sound GoW2 .mp3');
let deathScream2 = new Audio('Audio/Kratos death sound GoW2 2 .mp3');
let ahShit = new Audio('Audio/Ah shit,here we go again .mp3');

// Stats declarations

let exp = 0;
let health = 100;
let orbs = 0;
let currentWeapon = 0;
let fighting;
let enemyHealth;
let inventory = ["Blades of chaos"];
let weapons = [
    { name: "Blades of chaos", damage: 17 },
    { name: "Nemesis Whip", damage: 28},
    { name: "Gauntlet of Zeus", damage: 44 },
    { name: "Claws of Hades", damage: 64 },
    { name: "Blade of Olympus", damage: 88 }
];

// Enemies 

let enemies = [
    {
      name: "Hoplite",
      level: 2,
      health: 55
    },
    {
      name: "Banshee",
      level: 4,
      health: 80
    },
    {
      name: "Satyr",
      level: 5,
      health: 100
    },
    {
      name: "Minotaur",
      level: 6,
      health: 120
    },
    {
      name: "Medusa",
      level: 8,
      health: 150
    },
    {
      name: "Cyclops",
      level: 11,
      health: 180
    },
    {
      name: "Hermes",
      level: 14,
      health: 220
    },
    {
      name: "Hercules",
      level: 17,
      health: 280
    },
    {
      name: "Zeus",
      level: 20,
      health: 350
    }
];

// Text declarations

let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let voltext = document.getElementById('Volume');
let expText = document.getElementById('Exp-text');
let healthText = document.getElementById('Health-text');
let orbsText = document.getElementById('Orbs-text');
let sellText = document.getElementById('Sell-text');
let whipDamage = document.getElementById('Whip-damage');
    whipDamage.innerText = weapons[1].damage;
let gauntletDamage = document.getElementById('Gauntlet-damage');
    gauntletDamage.innerText = weapons[2].damage;
let clawsDamage = document.getElementById('Claws-damage');
    clawsDamage.innerText = weapons[3].damage;
let bladeDamage = document.getElementById('Blade-damage');
    bladeDamage.innerText = weapons[4].damage;
let enemyName = document.getElementById('Enemy-name');
let enemyInfo = document.getElementById('Enemy-info');
let enemyHealthText = document.getElementById('Enemy-health');

// Container declarations

let gamebox = document.querySelector('.Game');
let settings = document.querySelector('.Settings');
let sellCon = document.querySelector('.Sell-price');
let potionInfo = document.querySelector('.Potion-info');
let whipInfo = document.querySelector('.Whip-info');
let gauntletInfo = document.querySelector('.Gauntlet-info');
let clawsInfo = document.querySelector('.Claws-info');
let bladeInfo = document.querySelector('.BladeO-info');
let enemyStats = document.querySelector('.Enemy-stats');

// Button declarations|

let clicks = 0;
let settingsB = document.getElementById('settings');
let musicOption = document.getElementById('music-option');
let shop = document.getElementById('Shop');
let sellWeaponB = document.getElementById('Sell-weapon');
let potionB = document.getElementById('Buy-health');
let nemesisWhipB = document.getElementById('Nemesis-whipB');
let gauntletB = document.getElementById('GauntletB');
let clawsB = document.getElementById('Claws');
let bladeOlympusB= document.getElementById('Blade-of-OlympusB');
let leaveShop = document.getElementById('Leave-shop');
let underworldB = document.getElementById('Underworld-button');
let evadeB = document.getElementById('Evade-enemy');
let runB = document.getElementById('Escape-enemy');
let hopliteB = document.getElementById('HopliteB');
let attackHoplite = document.getElementById('Attack-Hoplite');
let bansheeB = document.getElementById('BansheeB');
let attackBanshee = document.getElementById('Attack-Banshee');
let satyrB = document.getElementById('SatyrB');
let attackSatyr = document.getElementById('Attack-Satyr')
let minotaurB = document.getElementById('MinotaurB');
let attackMinotaur = document.getElementById('Attack-Minotaur');
let medusaB = document.getElementById('MedusaB');
let attackMedusa = document.getElementById('Attack-Medusa');
let cyclopsB = document.getElementById('CyclopsB');
let attackCyclops = document.getElementById('Attack-Cyclops');
let leaveUnderworld = document.getElementById('Leave-Underworld');
let olympusB = document.getElementById('Olympus-button');
let herculesB = document.getElementById('HerculesB');
let attackHercules = document.getElementById('Attack-Hercules');
let hermesB = document.getElementById('HermesB');
let attackHermes = document.getElementById('Attack-Hermes');
let zeusB = document.getElementById('ZeusB');
let attackZeus = document.getElementById('Attack-Zeus');
let rungod = document.getElementById('Run-from-god');
let leaveOlympus = document.getElementById('Leave-Olympus');
let reset = document.getElementById('Reset');

// Icon declarations

let musicnote = document.getElementById('music-note');
let gear = document.getElementById('gear');
let volup = document.getElementById('higher-volume');
let voldown = document.getElementById('lower-volume');
let mute = document.getElementById('mute');

// function declarations

let hopat;
let banshat;
let satat;
let minat;
let medat;
let cyclat;
let hermat;
let hercat;
let zeuat;

// Just an extra function

gamebox.addEventListener('mouseover', event => {
    spartan.style.display = 'inline-block';
});
gamebox.addEventListener('mouseout', event => {
    spartan.style.display = 'none';
});

//                                                                                                       Initialize buttons

// Sound Settings 

musicOption.addEventListener('mouseover', event => {
    hoverSound.play();
    musicnote.style.color = '#614051';
});
musicOption.addEventListener('mouseout', event => {
    hoverSound.pause(); 
    hoverSound.currentTime = 0;
    musicnote.style.color = '#0d0d0d';
});

let pop = false;

musicOption.addEventListener('click', event => {
    switch(pop) {
      case false:
      menuTheme.play();
      musicOption.style.background = 'grey';
      pop = true;
      break;
      case true:
      menuTheme.pause();
      musicOption.style.background = '#464646';
      pop = false;
    }
});

settingsB.addEventListener('mouseover', event => {
    hoverSound.play();
    gear.style.animation = 'rotateZ 0.7s';
    gear.style.color = '#332822';
});
settingsB.addEventListener('mouseout', event => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
    gear.style.animation = 'no';
    gear.style.color = '#0d0d0d';
});

let set = false;

settingsB.addEventListener('click', event => {
  switch(set) {
    case false:
    settingsB.style.background = 'grey';
    settings.style.display = 'block';
    set = true;
    break;
    case true:
    settingsB.style.background = '#464646';
    settings.style.display = 'none';
    set = false;
  }
});

let volume = 100;

volup.addEventListener('click', event => {
    if (volume <= 100 ) {
       menuTheme.volume += 0.1;
       battleTheme.volume += 0.1;
       battleTheme2.volume += 0.1;
       cyclopsBattle.volume += 0.1;
       zeusBattle.volume += 0.1;
       volume += 10;
       voltext.innerText = volume;
    }
});
voldown.addEventListener('click', event => {
   if (volume <= 100) {
      menuTheme.volume -= 0.1;
      battleTheme.volume -= 0.1;
      battleTheme2.volume -= 0.1;
      cyclopsBattle.volume -= 0.1;
      zeusBattle.volume -= 0.1;
      volume -= 10;
      voltext.innerText = volume;
   } else if (volume <= 0) {
      volume = 0;
      voltext.innerText = volume;
   }
});
mute.addEventListener('click', event => {
    menuTheme.volume = 0;
    battleTheme.volume = 0;
    battleTheme2.volume = 0;
    cyclopsBattle.volume = 0;
    zeusBattle.volume = 0;
    volume = 0;
    voltext.innerText = volume;
});

// Main menu buttons functions

shop.addEventListener('mouseover', event => {
  hoverSound.play();
  gamebox.style.background = '#09090b';
  kratosAtSparta.style.position = 'absolute';
  kratosAtSparta.style.left = '35cm';
  trader.style.display = 'block';
  text.innerText = "You can go to the shop to get weapons with orbs to get stronger to defeat stronger enemies. \n 🏪";
  shop.style.background = '#09090b';
  shop.style.animation = 'tilt-n-move-shaking 0.5s';
});
shop.addEventListener('mouseout', event => {
  hoverSound.pause(); 
  hoverSound.currentTime = 0;
  gamebox.style.background = '#464646';
  kratosAtSparta.style.position = 'relative';
  kratosAtSparta.style.left = '0';
  trader.style.display = 'none';
  text.innerText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
  shop.style.background = '#4b3f33';
  shop.style.animation = 'grow';
});
shop.addEventListener('click', event => {
  selection.play();
  text.style.display = 'none';
  text2.style.display = 'inline-block';
  text2.innerText = 'You enter the shop. You see a bunch of weapons that vary in power.. also a potion of healing. Get the ones you can, or take a look at them for now if you are currently a brokie.';
  shop.style.display = 'none';
  setTimeout(() => {
    gamebox.style.background = '#09090b';
  }, 1);
  musicOption.style.background = '#09090b';
  settingsB.style.background = '#09090b';
  kratosAtSparta.style.display = 'none';
  underworldB.style.display = 'none';
  olympusB.style.display = 'none';
  atTrader.style.display = 'block';
  sellWeaponB.style.display = 'inline';
  sellWeaponB.style.animationDuration = '2s';
  sellWeaponB.style.animationTimingFunction = 'linear';
  potionB.style.display = 'inline';
  potionB.style.animationDuration = '2s';
  potionB.style.animationTimingFunction = 'linear';
  nemesisWhipB.style.display = 'inline';
  nemesisWhipB.style.animationDuration = '2s';
  nemesisWhipB.style.animationTimingFunction = 'linear';
  gauntletB.style.display = 'inline';
  gauntletB.style.animationDuration = '2s';
  gauntletB.style.animationTimingFunction = 'linear';
  clawsB.style.display = 'inline';
  clawsB.style.animationDuration = '2s';
  clawsB.style.animationTimingFunction = 'linear';
  bladeOlympusB.style.display = 'inline';
  bladeOlympusB.style.animationDuration = '2s';
  bladeOlympusB.style.animationTimingFunction = 'linear';
  leaveShop.style.display = 'inline';
  leaveShop.style.animationDuration = '2s';
  leaveShop.style.animationTimingFunction = 'linear';
});

underworldB.addEventListener('mouseover', event => {
  hoverSound.play();
  gamebox.style.background = '#2f1c12';
  kratosAtSparta.style.position = 'absolute';
  kratosAtSparta.style.left = '35cm';
  underworld.style.display = 'block';
  text.innerText = "This is the underworld. Where you will see a bunch of strange creatures you will have to defeat to get stronger so you can defeat Zeus. \n 🔥";
  underworldB.style.background = '#2f1c12';
  underworldB.style.animation = 'tilt-n-move-shaking 0.5s';
});
underworldB.addEventListener('mouseout', event => {
  hoverSound.pause(); 
  hoverSound.currentTime = 0;
  gamebox.style.background = '#464646';
  kratosAtSparta.style.position = 'relative';
  kratosAtSparta.style.left = '0';
  underworld.style.display = 'none';
  text.innerText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
  underworldB.style.background = '#4b3f33';
  underworldB.style.animation = 'grow';
});
underworldB.addEventListener('click', event => {
  selection.play();
  if (pop == true) {
    menuTheme.pause();
    menuTheme.currentTime = 0;
    underworldAm.play()
  } else {
    underworldAm.play()
  }
  setTimeout(() => {
     gamebox.style.background = "#3c3837"
  }, 1);
  settingsB.style.background = '#3c3837';
  text.style.display = 'none';
  text2.style.display = 'inline-block';
  text2.innerText = 'You have arrived in the underworld. You see some strange creatures. Choose which one you want to attack. Be sure to attack one that you are sure you can defeat. \n ⇊';
  underworldB.style.display = 'none';
  musicOption.style.display = 'none'
  kratosAtSparta.style.display = 'none';
  shop.style.display = 'none';
  olympusB.style.display = 'none';
  kratosUnderworld.style.display = 'block';
  hopliteB.style.display = 'inline';
  hopliteB.style.animationDuration = '2s';
  hopliteB.style.animationTimingFunction = 'linear';
  bansheeB.style.display = 'inline';
  bansheeB.style.animationDuration = '2s';
  bansheeB.style.animationTimingFunction = 'linear';
  satyrB.style.display = 'inline';
  satyrB.style.animationDuration = '2s';
  satyrB.style.animationTimingFunction = 'linear';
  minotaurB.style.display = 'inline';
  minotaurB.style.animationDuration = '2s';
  minotaurB.style.animationTimingFunction = 'linear';
  medusaB.style.display = 'inline';
  medusaB.style.animationDuration = '2s';
  medusaB.style.animationTimingFunction = 'linear';
  cyclopsB.style.display = 'inline';
  cyclopsB.style.animationDuration = '2s';
  cyclopsB.style.animationTimingFunction = 'linear';
  leaveUnderworld.style.display = 'inline';
  leaveUnderworld.style.animationDuration = '2s';
  leaveUnderworld.style.animationTimingFunction = 'linear';
});

olympusB.addEventListener('mouseover', event => {
  hoverSound.play();
  gamebox.style.background = 'rgba(102,47,18,255)';
  kratosAtSparta.style.position = 'absolute';
  kratosAtSparta.style.left = '35cm';
  mountOlympus.style.display = 'block';
  text.innerText = "This is Mount Olympus. Where you will fight the gods of olympus and where you can fight Zeus when you are ready. I suggest you only come here when you have defeated all the createres of the underworld. Otherwise, you are not ready for this smoke.";
  olympusB.style.background = 'rgba(102,47,18,255)';
  olympusB.style.animation = 'tilt-n-move-shaking 0.5s';
});
olympusB.addEventListener('mouseout', event => {
  hoverSound.pause(); 
  hoverSound.currentTime = 0;
  gamebox.style.background = '#464646';
  kratosAtSparta.style.position = 'relative';
  kratosAtSparta.style.left = '0';
  mountOlympus.style.display = 'none';
  text.innerText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
  olympusB.style.background = '#4b3f33';
  olympusB.style.animation = 'grow';
});
olympusB.addEventListener('click', event => {
  selection.play();
  if (pop == true) {
    menuTheme.pause();
    menuTheme.currentTime= 0;
    olympusAm.play()
  } else {
    olympusAm.play()
  }
  text.style.display = 'none';
  text2.style.display = 'inline-block';
  text2.innerText = 'You have now arrived at Olympus. Choose which god you want to battle. Be sure to at least have the Gauntlet weapon as these gods are strong. \n ⇈';
  setTimeout(() => {
     gamebox.style.background = '#335168';
  }, 1);
  settingsB.style.background = '#335168';
  olympusB.style.display = 'none';
  musicOption.style.display = 'none'
  shop.style.display = 'none';
  underworldB.style.display = 'none';
  kratosAtSparta.style.display = 'none';
  kratosOlympus.style.display = 'inline-block';
  herculesB.style.display = 'inline';
  herculesB.style.animationDuration = '2s';
  herculesB.style.animationTimingFunction = 'linear';
  hermesB.style.display = 'inline';
  hermesB.style.animationDuration = '2s';
  hermesB.style.animationTimingFunction = 'linear';
  zeusB.style.display = 'inline';
  zeusB.style.animationDuration = '2s';
  zeusB.style.animationTimingFunction = 'linear';
  leaveOlympus.style.display = 'inline';
  leaveOlympus.style.animationDuration = '2s';
  leaveOlympus.style.animationTimingFunction = 'linear';
});

// Shop functions

sellWeaponB.addEventListener('mouseover', event => {
  hoverSound.play();
  atTrader.style.display = 'none';
  if (inventory.length = 1) {
    boc.style.display = 'inline-block';
  } else {
    nemesiswhip.style.display = 'none';
  }
  sellCon.style.display = 'inline-block';
  sellWeaponB.style.animation = 'vertical-shaking 0.5s';
  sellText.innerText = "Sell the " + weapons[currentWeapon].name + " for 28 orbs?";
});
sellWeaponB.addEventListener('mouseout', event => {
  hoverSound.pause();
  atTrader.style.display = 'block';
  boc.style.display = 'none';
  hoverSound.currentTime = 0;
  sellWeaponB.style.animation = 'grow';
  sellCon.style.display = 'none';
});
sellWeaponB.addEventListener('click', event => {
  sellWeapon();
});

potionB.addEventListener('mouseover', event => {
  hoverSound.play();
  potionB.style.animation = 'tilt-shaking 0.5s';
  atTrader.style.display = 'none';
  potion.style.display = 'inline-block';
  potionInfo.style.display = 'inline-block';
});
potionB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  potionB.style.animation = 'grow';
  atTrader.style.display = 'block';
  potion.style.display = 'none';
  potionInfo.style.display = 'none';
});
potionB.addEventListener('click', event => {
  increaseHealth();
});

nemesisWhipB.addEventListener('mouseover', event => {
  hoverSound.play();
  nemesisWhipB.style.animation = 'tilt-shaking 0.5s';
  atTrader.style.display = 'none';
  nemesiswhip.style.display = 'inline-block';
  whipInfo.style.display = 'inline-block';
});
nemesisWhipB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  nemesisWhipB.style.animation = 'grow';
  atTrader.style.display = 'block';
  nemesiswhip.style.display = 'none';
  whipInfo.style.display = 'none';
});
nemesisWhipB.addEventListener('click', event => {
  buyWhip();
});

gauntletB.addEventListener('mouseover', event => {
  hoverSound.play();
  gauntletB.style.animation = 'tilt-shaking 0.5s';
  atTrader.style.display = 'none';
  gauntletZeus.style.display = 'inline-block';
  gauntletInfo.style.display = 'inline-block';
});
gauntletB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  gauntletB.style.animation = 'grow';
  atTrader.style.display = 'block'
  gauntletZeus.style.display = 'none';
  gauntletInfo.style.display = 'none';
});
gauntletB.addEventListener('click', event => {
  buyGauntlet();
});

clawsB.addEventListener('mouseover', event => {
  hoverSound.play();
  clawsB.style.animation = 'tilt-shaking 0.5s';
  atTrader.style.display = 'none';
  clawsHades.style.display = 'inline-block';
  clawsInfo.style.display = 'inline-block';
  clawsInfo.style.right = '2.8cm';
});
clawsB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  clawsB.style.animation = 'grow';
  atTrader.style.display = 'block';
  clawsHades.style.display = 'none';
  clawsInfo.style.display = 'none';
});
clawsB.addEventListener('click', event => {
  buyClaws();
});

bladeOlympusB.addEventListener('mouseover', event => {
  hoverSound.play();
  bladeOlympusB.style.animation = 'tilt-shaking 0.5s';
  atTrader.style.display = 'none';
  bladeOlympus.style.display = 'inline-block';
  bladeInfo.style.display = 'inline-block';
});
bladeOlympusB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  bladeOlympusB.style.animation = 'grow';
  atTrader.style.display = 'block';
  bladeOlympus.style.display = 'none';
  bladeInfo.style.display = 'none';
});
bladeOlympusB.addEventListener('click', event => {
  buyBlade();
});

leaveShop.addEventListener('mouseover', event => {
  hoverSound.play();
  gamebox.style.background = '#20130c';
  leaveShop.style.animation = 'horizontal-shaking 0.5s';
  atTrader.style.position = 'absolute';
  atTrader.style.left = '35cm';
  sparta.style.display = 'block';
});
leaveShop.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  gamebox.style.background = '#09090b';
  leaveShop.style.animation = 'grow';
  atTrader.style.position = 'relative';
  atTrader.style.left = '0';
  sparta.style.display = 'none';
});
leaveShop.addEventListener('click', event => {
  returnSound.play();
  musicOption.style.background = '#464646';
  atTrader.style.display = 'none';
  sellWeaponB.style.display = 'none';
  potionB.style.display = 'none';
  nemesisWhipB.style.display = 'none';
  gauntletB.style.display = 'none';
  clawsB.style.display = 'none';
  bladeOlympusB.style.display = 'none';
  leaveShop.style.display = 'none';
  mainAppear();
});

let count = 0;

function sellWeapon() {
  if (inventory.length > 1) {
    achievement.play();
    var sold = setInterval(() => {
      count++;
      orbs++;
      orbsText.innerText = orbs;
      if (count == 28) {
        count = 0;
        clearInterval(sold);
      }
    }, 140);
    currentWeapon = inventory.shift();
    text.innerText = "You sold the " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    bruh.play();
    text.innerText = "Don't sell your only weapon, you dumbass!";
    setTimeout(() => {
      text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
    }, 5000 );
  }
}

function increaseHealth() {
  checkHealth();
  if (orbs >= 22) {
    noice.play();
    var boughted = setInterval (() => {
      count++;
      orbs--;
      orbsText.innerText = orbs;
      if (count == 22) {
        count = 0;
        clearInterval(boughted);
      }
    }, 170 );
    health += 10;
    healthText.innerText = health;
  } else {
    brokie.play();
    text.innerText = "You do not have enough orbs to buy a health potion, dummy!";
    setTimeout(() => {
    text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
    }, 4000 );
  }
}

function checkHealth() {
  if(health >= 36) {
    gamebox.style.boxShadow = 'none';
  } else if(health >= 200) {
    health = 200;
    healthText.inerText = health;
    text.innerText = "You have reached you health capacity. YOu cannot buy anymore potions.";
    return increaseHealth
  }
}

function buyWhip() {
  if(orbs >= 55) {
    achievement.play();
    var bought = setInterval (() => {
      count++;
      orbs--;
      orbsText.innerText = orbs;
      if (count == 55) {
        count = 0;
        clearInterval(bought);
      }
    }, 100 );
    let whip = weapons[1].name;
    inventory.push(whip);
    text.innerText = "You now have the " + whip + ".";
    text.innerText += " In your inventory you have: " + inventory;
    text.style.color = '#191970';
    setTimeout(() => {
      atTrader.style.display = 'none';
    }, 1);
    whipClaim.style.display = 'block';
    setTimeout(() => {
      atTrader.style.display = 'block';
      whipClaim.style.display = 'none';
    }, 4000 );
  } else {
    brokie.play();
    text.innerText = "You do not have enough orbs to buy the Nemesis whip. You are a brokie! Go fight enemies to earn more orbs.";
    text.style.color = '#bb0a1e';
  }
}

function buyGauntlet() {
  if(orbs >= 99) {
    achievement.play();
    var bought = setInterval (() => {
      count++;
      orbs--;
      orbsText.innerText = orbs;
      if (count == 99) {
        count = 0;
        clearInterval(bought);
      }
    }, 80 );
    let gauntlet = weapons[2].name;
    inventory.push(gauntlet);
    text.innerText = "You now have the " + gauntlet + ".";
    text.innerText = " In your inventory you have: " + inventory;
    text.style.color = '#191970';
    setTimeout(() => {
      atTrader.style.display = 'none';
    }, 1);
    gauntletClaim.style.display = 'block';
    setTimeout(() => {
      atTrader.style.display = 'block';
      gauntletClaim.style.display = 'none';
    }, 4000 );
  } else {
    brokie.play();
    text.innerText = "You do not have enough orbs to buy the Gauntlet of Zeus. You are a brokie! Go fight enemies to earn more orbs.";
    text.style.color = '#bb0a1e';
  }
}

function buyClaws() {
  if(orbs >= 155) {
    achievement.play();
    var bought = setInterval (() => {
      count++;
      orbs--;
      orbsText.innerText = orbs;
      if (count == 155) {
        count = 0;
        clearInterval(bought);
      }
    }, 55 );
    let claws = weapons[3].name;
    inventory.push(claws);
    text.innerText = "You now have the " + claws + ".";
    text.innerText = " In your inventory you have: " + inventory;
    text.style.color = '#191970';
    setTimeout(() => {
      atTrader.style.display = 'none';
    }, 1);
    clawsClaim.style.display = 'block';
    setTimeout(() => {
      atTrader.style.display = 'block';
      clawsClaim.style.display = 'none';
    }, 4000 );
  } else {
    brokie.play();
    text.innerText = "You do not have enough orbs to buy the Claws of Hades. You are a brokie! Go fight enemies to earn more orbs.";
    text.style.color = '#bb0a1e';
  }
}

function buyBlade() {
  if(orbs >= 200) {
    achievement.play();
    var bought = setInterval (() => {
      count++;
      orbs--;
      orbsText.innerText = orbs;
      if (count == 200) {
        count = 0;
        clearInterval(bought);
      }
    }, 35 );
    let blade = weapons[4].name;
    inventory.push(blade);
    text.innerText = "You now have the " + blade + ".";
    text.innerText = " In your inventory you have: " + inventory;
    text.style.color = '#191970';
    setTimeout(() => {
      atTrader.style.display = 'none';
    }, 1);
    bladeClaim.style.display = 'block';
    setTimeout(() => {
      atTrader.style.display = 'block';
      bladeClaim.style.display = 'none';
    }, 4000 );
  } else {
    brokie.play();
    text.innerText = "You do not have enough orbs to buy the Blade of Olympus. You are a brokie! Go fight enemies to earn more orbs.";
    text.style.color = '#bb0a1e';
  }
}

// Underworld functions

hopliteB.addEventListener('mouseover', event => {
  hoverSound.play();
  kratosUnderworld.style.display = 'none';
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = "An enemy that appears to be a skeletal corpse adorned in standard Greek armor, and with two swords for weapons. \n Damage: 9 p3s"
  hoplite.style.display = 'block';
  hopliteB.style.animation = 'tilt-shaking 0.5s';
});
hopliteB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  text2.style.display = 'inline-block';
  enemyInfo.style.display = 'none';
  kratosUnderworld.style.display = 'block';
  hoplite.style.display = 'none';
  hopliteB.style.animation = 'grow';
});
hopliteB.addEventListener('click', event => {
  setTimeout(() => {
    selection2.play();
    battleTheme.play();
    attackHoplite.style.display = 'inline';
    attackHoplite.style.animationDuration = '2s';
    attackHoplite.style.animationTimingFunction = 'linear';
  }, 800 );
  text2.innerText = "You are fighting a Hoplite. Try not to die, please.";
  fighting = 0;
  go();
  hopliteShapa();
});

attackHoplite.addEventListener('mouseover', event => {
  kratosUnderworld.style.display = 'none';
  hopliteAttack.style.display = 'block';
  attackHoplite.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackHoplite.addEventListener('mouseout', event => {
  kratosUnderworld.style.display = 'block';
  hopliteAttack.style.display = 'none';
  attackHoplite.style.animation = 'grow';
});
attackHoplite.addEventListener('click', event => {
  attacksHoplite.play();
  attack();
});

bansheeB.addEventListener('mouseover', event => {
  bansheeSound.play();
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = "The Banshee is also known for having the ability to deliver a frightening inhuman scream that could harm and even kill humans. \n Damage: 15 p3s";
  kratosUnderworld.style.display = 'none';
  banshee.style.display = 'block';
  bansheeB.style.animation = 'tilt-shaking 1.8s';
});
bansheeB.addEventListener('mouseout', event => {
  bansheeSound.pause();
  bansheeSound.currentTime = 0;
  text2.style.display = 'inline-block';
  enemyInfo.style.display = 'none';
  kratosUnderworld.style.display = 'block';
  banshee.style.display = 'none';
  bansheeB.style.animation = 'grow';
});
bansheeB.addEventListener('click', event => {
  setTimeout(() => {
    battleTheme.play();
  }, 1000 );
  text2.innerText = "You are now fighting a Banshee. Try not to die, please.";
  fighting = 1;
  go();
  setTimeout(() => {
    selection2.play();
    attackBanshee.style.display = 'inline';
    attackBanshee.style.animationDuration = '2s';
    attackBanshee.style.animationTimingFunction = 'linear';
  }, 800 );
  bansheeShapa();
});

attackBanshee.addEventListener('mouseover', event => {
  kratosUnderworld.style.display = 'none';
  bansheeAttack.style.display = 'block';
  attackBanshee.style.animation = 'tilt-n-move-shaking 0.5s';
});
attackBanshee.addEventListener('mouseout', event => {
  kratosUnderworld.style.display = 'block';
  bansheeAttack.style.display = 'none';
  attackBanshee.style.animation = 'grow';
});
attackBanshee.addEventListener('click', event => {
  attacksBanshee.play();
  attack();
});

satyrB.addEventListener('mouseover', event => {
  hoverSound.play();
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = "Satyrs are one of the most formidable opponents, able to go toe-to-toe with Kratos and make short work of him. They have the upper body of a man and the horns and back legs of a goat. Damage: 19 p3s";
  kratosUnderworld.style.display = 'none';
  satyr.style.display = 'block';
  satyrB.style.animation = 'tilt-shaking 0.5s';
});
satyrB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  text2.style.display = 'inline-block';
  enemyInfo.style.display = 'none';
  kratosUnderworld.style.display = 'block';
  satyr.style.display = 'none';
  satyrB.style.animation = 'grow';
});
satyrB.addEventListener('click', event => {
  setTimeout(() => {
    battleTheme2.play();
  }, 1000 );
  text2.innerText = "You are now fighting a Satyr. Try not to die, please.";
  fighting = 2;
  go();
  setTimeout(() => {
    selection2.play();
    attackSatyr.style.display = 'inline';
    attackSatyr.style.animationDuration = '2s';
    attackSatyr.style.animationTimingFunction = 'linear';
  }, 800 );
  satyrShapa();
});

attackSatyr.addEventListener('mouseover', event => {
  kratosUnderworld.style.display = 'none';
  satyrAttack.style.display = 'block';
  attackSatyr.style.animation = 'tilt-n-move-shaking 0.5s';
});
attackSatyr.addEventListener('mouseout', event => {
  kratosUnderworld.style.display = 'block';
  satyrAttack.style.display = 'none';
  attackSatyr.style.animation = 'grow';
});
attackSatyr.addEventListener('click', event => {
  clicks = 1;
  switch (clicks) {
    case 1:
      attacksSatyr.play();
      clicks++;
      break;
    case 2:
      attacksSatyr.play();
      clicks++;
      break;
    case 3:
      attacksSatyr.play();
      clicks++;
      break;
    case 4:
      throwsSatyr.play();
      clicks = 1;
      break;
  }
  attacksSatyr.play();
  attack();
});

minotaurB.addEventListener('mouseover', event => {
  minotaurSound.play();
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = "The Minotaur appears as a species of anthropomorphic bull, about eight feet tall. Minotaurs walk on their hind legs and carry a variety of massive war axes. Damage: 23 p3s";
  kratosUnderworld.style.display = 'none';
  minotaur.style.display = 'block';
  minotaurB.style.animation = 'tilt-shaking 1s';
});
minotaurB.addEventListener('mouseout', event => {
  minotaurSound.pause();
  minotaurSound.currentTime = 0;
  text2.style.display = 'inline-block';
  enemyInfo.style.display = 'none';
  kratosUnderworld.style.display = 'block';
  minotaur.style.display = 'none';
  minotaurB.style.animation = 'grow';
});
minotaurB.addEventListener('click', event => {
  setTimeout(() => {
    battleTheme2.play();
  }, 1000 );
  text2.innerText = "You are now fighting a Minotaur. Try not to die, please.";
  fighting = 3;
  go();
  setTimeout(() => {
    selection2.play();
    attackMinotaur.style.display = 'inline';
    attackMinotaur.style.animationDuration = '2s';
    attackMinotaur.style.animationTimingFunction = 'linear';
  }, 800 );
  minotaurShapa();
});

attackMinotaur.addEventListener('mouseover', event => {
  kratosUnderworld.style.display = 'none';
  minotaurAttack.style.display = 'block';
  attackMinotaur.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackMinotaur.addEventListener('mouseout', event => {
  kratosUnderworld.style.display = 'block';
  minotaurAttack.style.display = 'none';
  attackMinotaur.style.animation = 'grow';
});
attackMinotaur.addEventListener('click', event => {
  attacksMinotaur.play();
  attack()
});

medusaB.addEventListener('mouseover', event => {
  hoverSound.play();
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = "Medusa was first of the Gorgon sisters in Greek mythology. Medusa has the power to turn Kratos to stone with her gaze, but she can also still attack with her snake-like lower body. Damage: 31 p3s";
  kratosUnderworld.style.display = 'none';
  medusa.style.display = 'block';
  medusaB.style.animation = 'tilt-shaking 0.5s';
});
medusaB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  text2.style.display = 'inline-block';
  enemyInfo.style.display = 'none';
  kratosUnderworld.style.display = 'block';
  medusa.style.display = 'none';
  medusaB.style.animation = 'grow';
});
medusaB.addEventListener('click', event => {
  text2.innerText = "You are now fighting Medusa. We must stay focused, brothers. Do not look at those breast and try not to die.";
  fighting = 4;
  go();
  setTimeout(() => {
    selection2.play();
    attackMedusa.style.display = 'inline';
    attackMedusa.style.animationDuration = '2s';
    attackMedusa.style.animationTimingFunction = 'linear';
  }, 800 );
  medusaShapa();
});

attackMedusa.addEventListener('mouseover', event => {
  kratosUnderworld.style.display = 'none';
  medusaAttack.style.display = 'block';
  attackMedusa.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackMedusa.addEventListener('mouseout', event => {
  kratosUnderworld.style.display = 'block';
  medusaAttack.style.display = 'none';
  attackMedusa.style.animation = 'grow';
});
attackMedusa.addEventListener('click', event => {
  attacksMedusa.play();
  attack();
});

cyclopsB.addEventListener('mouseover', event => {
  cyclopsSound.play();
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = "Cyclopes are a species of burly, one-eyed giants, they give plenty of damage (43) so you will want to have a lot of health and/or a good weapon if you want to fight it.";
  kratosUnderworld.style.display = 'none';
  cyclops.style.display = 'block';
  cyclopsB.style.animation = 'tilt-shaking 1.6s';
});
cyclopsB.addEventListener('mouseout', event => {
  cyclopsSound.pause();
  cyclopsSound.currentTime = 0;
  text2.style.display = 'inline-block';
  enemyInfo.style.display = 'none';
  kratosUnderworld.style.display = 'block';
  cyclops.style.display = 'none';
  cyclopsB.style.animation = 'grow';
});
cyclopsB.addEventListener('click', event => {
  setTimeout(() => {
    cyclopsBattle.play();
  }, 1000 );
  text2.innerText = "You are now fighting a Cyclops. This thing is dangerous. Try not to die.";
  fighting = 5;
  go();
  setTimeout(() => {
    selection2.play();
    attackCyclops.style.display = 'inline';
    attackCyclops.style.animationDuration = '2s';
    attackCyclops.style.animationTimingFunction = 'linear';
  }, 800 );
  cyclopsShapa();
});

attackCyclops.addEventListener('mouseover', event => {
  kratosUnderworld.style.display = 'none';
  cyclopsAttack.style.display = 'block';
  attackCyclops.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackCyclops.addEventListener('mouseout', event => {
  kratosUnderworld.style.display = 'block';
  cyclopsAttack.style.display = 'none';
  attackCyclops.style.animation = 'grow';
});
attackCyclops.addEventListener('click', event => {
  attacksCyclops.play();
  attack();
});

function go() {
  enemyStats.style.display = "inline-block";
  enemyName.innerText = enemies[fighting].name;
  enemyHealth = enemies[fighting].health;
  enemyHealthText.innerText = enemyHealth;
  hopliteB.style.display = 'none';
  bansheeB.style.display = 'none';
  satyrB.style.display = 'none';
  minotaurB.style.display = 'none';
  medusaB.style.display = 'none';
  cyclopsB.style.display = 'none';
  leaveUnderworld.style.display = 'none';
  setTimeout(() => {
    evadeB.style.display = 'inline';
    evadeB.style.animationDuration = '2s';
    evadeB.style.animationTimingFunction = 'linear';
    runB.style.display = 'inline';
    runB.style.animationDuration = '2s';
    runB.style.animationTimingFunction = 'linear';
  }, 800 );
}

// button functions continuation

evadeB.addEventListener('mouseover', event => {
  hoverSound.play();
  evadeB.style.animation = 'vertical-shaking 0.8s';
});
evadeB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  evadeB.style.animation = 'grow';
});
evadeB.addEventListener('click', event => {
  evade();
});

runB.addEventListener('mouseover', event => {
  hoverSound.play();
  kratosUnderworld.style.display = 'none';
  kratosRunning.style.display = 'inline';
  runB.style.animation = 'horizontal-shaking 0.5s';
  hopliteKill.style.display = 'none';
  bansheeKill.style.display = 'none';
  satyrKill.style.display = 'none';
  minotaurKill.style.display = 'none';
  medusaKill.style.display = 'none';
  cyclops.style.display = 'none';
});
runB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  kratosUnderworld.style.display = 'block';
  kratosRunning.style.display = 'none';
  runB.style.animation = 'grow';
});
runB.addEventListener('click', event => {
  stopMusic();
  returnSound.play();
  text2.innerText = "You ran from the creature, knowing that you cannot defeat it.... or you're just a pussio."
  setTimeout(() => {
    text2.innerText = "You have arrived in the underworld. You see some strange creatures. Choose which one you want to attack. Be sure to attack one that you are sure you can defeat.";
  }, 8000 );
  enemyStats.style.display = 'none';
  evadeB.style.display = 'none';
  runB.style.display = 'none';
  hopliteB.style.display = 'inline';
  hopliteB.style.animationDuration = '2s';
  hopliteB.style.animationTimingFunction = 'linear';
  bansheeB.style.display = 'inline';
  bansheeB.style.animationDuration = '2s';
  bansheeB.style.animationTimingFunction = 'linear';
  satyrB.style.display = 'inline';
  satyrB.style.animationDuration = '2s';
  satyrB.style.animationTimingFunction = 'linear';
  minotaurB.style.display = 'inline';
  minotaurB.style.animationDuration = '2s';
  minotaurB.style.animationTimingFunction = 'linear';
  medusaB.style.display = 'inline';
  medusaB.style.animationDuration = '2s';
  medusaB.style.animationTimingFunction = 'linear';
  cyclopsB.style.display = 'inline';
  cyclopsB.style.animationDuration = '2s';
  cyclopsB.style.animationTimingFunction = 'linear';
  leaveUnderworld.style.display = 'inline';
  leaveUnderworld.style.animationDuration = '2s';
  leaveUnderworld.style.animationTimingFunction = 'linear';
  if (runB.innerText = 'Return') {
    runB.innerText = 'Run';
  }
  switch (fighting) {
    case 0:
      attackHoplite.style.display = 'none';
      clearInterval(hopat);
      break;
    case 1:
      attackBanshee.style.display = 'none';
      clearInterval(banshat);
      break;
    case 2:
      attackSatyr.style.display = 'none';
      clearInterval(satat);
      break;
    case 3:
      attackMinotaur.style.display = 'none';
      clearInterval(minat);
      break;
    case 4:
      attackMedusa.style.display = 'none';
      clearInterval(medat);
      break;
    case 5:
      attackCyclops.style.display = 'none';
      clearInterval(cyclat);
  }
});

// Underworld battle functions

function hopliteShapa() {

  hopat = setInterval (( ) => {
    hopliteAttacks.play();
    //health -= enemies[fighting].level * 8;
    health -= getEnemyAttackValue(enemies[fighting].level);
    healthText.innerText = health;
    setTimeout (() => {
      gamebox.style.animationPlayState = 'paused';
    }, 1000 );
    if (health <= 0) {
      death();
      clearInterval(hopat);
    } else if (health <= 35) {
      lowHealth();
    }
    if (enemyHealth <= 0) {
        defeatEnemy();
        hopliteKill.style.display = 'block';
        hopliteKill.style.width = '420px';
        var hopdef = setInterval(( )=> {
          count += 2;
          orbs += 2;
          exp++;
          orbsText.innerText = orbs;
          expText.innerText = exp;
          if (count == 16) {
            count = 0;
            clearInterval(hopdef);
          }
        }, 200);
        clearInterval(hopat);
    }
  }, 3000);
}

function bansheeShapa() {
  setTimeout(() => {
    bansheeAttacks.play();
  }, 1000)
    let banshat = setInterval (() => {
    bansheeAttacks2.play();
    //health -= enemies[fighting].level * 8;
    health -= getEnemyAttackValue(enemies[fighting].level);
    healthText.innerText = health;
    setTimeout (() => {
      gamebox.style.animationPlayState = 'paused';
    }, 1000 );
    if (health <= 0) {
      death();
      clearInterval(banshat);
    } else if (health <= 35) {
      lowHealth();
    }
    if (enemyHealth <= 0) {
        defeatEnemy();
        bansheeKill.style.display = 'block';
        var bandef = setInterval(( )=> {
          count += 2;
          orbs += enemies[fighting].level - 2;
          exp++;
          orbsText.innerText = orbs;
          expText.innerText = exp;
          if (count == 32) {
            count = 0;
            clearInterval(bandef);
          }
        }, 180);
        clearInterval(banshat);
    }
  }, 3000);
}

function satyrShapa() {

  satat = setInterval (() => {
    satyrAttacks.play();
    //health -= enemies[fighting].level * 8;
    health -= getEnemyAttackValue(enemies[fighting].level);
    healthText.innerText = health;
    setTimeout (() => {
      gamebox.style.animationPlayState = 'paused';
    }, 1000 );
    if (health <= 0) {
      death();
      clearInterval(satat);
    } else if (health <= 35) {
        lowHealth();
    }
    if (enemyHealth <= 0) {
        defeatEnemy();
        satyrKill.style.display = 'block';
        var satdef = setInterval(( )=> {
          count += 2;
          orbs += enemies[fighting].level - 3;
          exp++;
          orbsText.innerText = orbs;
          expText.innerText = exp;
          if (count == 40) {
            count = 0;
            clearInterval(satdef);
          }
        }, 140);
        clearInterval(satat);
    }
  }, 3000);
}

function minotaurShapa() {
  setTimeout(() => {
    minotaurAttacks.play();
  }, 1000 );
  minat = setInterval (() => {
    minotaurAttacks2.play();
    //health -= enemies[fighting].level * 8;
    health -= getEnemyAttackValue(enemies[fighting].level);
    healthText.innerText = health;
    setTimeout (() => {
      gamebox.style.animationPlayState = 'paused';
    }, 1000 );
    if (health <= 0) {
      death();
      clearInterval(minat);
    } else if (health <= 35) {
        lowHealth();
    }
    if (enemyHealth <= 0) {
        defeatEnemy();
        minotaurKill.style.display = 'block';
        var mindef = setInterval(( )=> {
          count += 2;
          orbs += enemies[fighting].level - 4;
          exp++;
          orbsText.innerText = orbs;
          expText.innerText = exp;
          if (count == 48) {
            count = 0;
            clearInterval(mindef);
          }
        }, 140);
        clearInterval(minat);
    }
  }, 3200);
}

function medusaShapa() {
  medat = setInterval (() => {
    medusaAttacks.play();
    health -= getEnemyAttackValue(enemies[fighting].level);
    healthText.innerText = health;
    setTimeout (() => {
      gamebox.style.animationPlayState = 'paused';
    }, 1000 );
    if (health <= 0) {
      death();
      clearInterval(medat);
    } else if (health <= 35) {
        lowHealth();
    }
    if (enemyHealth <= 0) {
        defeatEnemy();
        medusaKill.style.display = 'block';
        var meddef = setInterval(( )=> {
          count += 2;
          orbs += enemies[fighting].level - 6;
          exp++;
          orbsText.innerText = orbs;
          expText.innerText = exp;
          if (count == 64) {
            count = 0;
            clearInterval(meddef);
          }
        }, 120);
        clearInterval(medat);
    }
  }, 3000);
}

function cyclopsShapa() {
  setTimeout(() => {
    cyclopsAttacks2.play();
  }, 1000)
    cyclat = setInterval (() => {
    cyclopsAttacks.play();
    health -= getEnemyAttackValue(enemies[fighting].level);
    healthText.innerText = health;
    setTimeout (() => {
      gamebox.style.animationPlayState = 'paused';
    }, 1000 );
    if (health <= 0) {
      death();
      clearInterval(cyclat);
    } else if (health <= 35) {
      lowHealth();
    }
    if (enemyHealth <= 0) {
        defeatEnemy();
        cyclopsBattle.pause();
        cyclopsBattle.currentTime = 0;
        cyclopsKill.style.display = 'block';
        var cyclef = setInterval(( )=> {
          count += 2;
          orbs += enemies[fighting].level - 8;
          exp++;
          orbsText.innerText = orbs;
          expText.innerText = exp;
          if (count == 88) {
            count = 0;
            clearInterval(cyclef);
          }
        }, 100);
        clearInterval(cyclat);
    }
  }, 3400);
}

// Underworld battle functions complete

leaveUnderworld.addEventListener('mouseover', event => {
  hoverSound.play();
  gamebox.style.background = '#20130c';
  leaveUnderworld.style.animation = 'horizontal-shaking 0.5s';
  kratosUnderworld.style.position = 'absolute';
  kratosUnderworld.style.left = '35cm';
  sparta.style.display = 'block';
});
leaveUnderworld.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  gamebox.style.background = '#3c3837';
  leaveUnderworld.style.animation = 'grow';
  kratosUnderworld.style.position = 'relative';
  kratosUnderworld.style.left = '0';
  sparta.style.display = 'none';
});
leaveUnderworld.addEventListener('click', event => {
  underworldAm.pause();
  underworldAm.currentTime = 0;
  returnSound.play();
  kratosUnderworld.style.display = 'none';
  hopliteB.style.display = 'none';
  bansheeB.style.display = 'none';
  satyrB.style.display = 'none';
  minotaurB.style.display = 'none';
  medusaB.style.display = 'none';
  cyclopsB.style.display = 'none';
  leaveUnderworld.style.display = 'none';
  mainAppear();
});

// Olympus functions

hermesB.addEventListener('mouseover', event => {
  hoverSound.play();
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = 'Hermes (Greek: Ἑρμῆς) is the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and mostly.. Speed. \n Damage: 55 ps';
  kratosOlympus.style.position = 'absolute';
  kratosOlympus.style.left = '35cm';
  hermes.style.display = 'block';
  hermesB.style.animation = 'tilt-shaking 0.5s';
});
hermesB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  text2.style.display = 'block';
  enemyInfo.style.display = 'none';
  hermes.style.display = 'none';
  kratosOlympus.style.position = 'relative';
  kratosOlympus.style.left = '0';
  hermesB.style.animation = 'grow';
});
hermesB.addEventListener('click', event => {
  olympusAm.pause();
  olympusAm.currentTime = 0;
  gamebox.style.background = '#0f2738';
  hermesLine.play();
  kratosOlympus.style.display = 'none';
  hermesxkratos.style.display = 'block';
  text2.innerText = "You are now by the god, Hermes. He spots you and he quickly starts attacking. \n 😟";
  fighting = 6;
  gaan();
});

attackHermes.addEventListener('mouseover', event => {
  hermesxkratos.style.display = 'none';
  hermesFight.style.display = 'block';
  hermesFight.style.animation = 'tilt-n-move-shaking';
  attackHermes.style.animationDuration = '0.8s';
});
attackHermes.addEventListener('mouseout', event => {
  hermesxkratos.style.display = 'block';
  hermesFight.style.display = 'none';
  attackHermes.style.animation = 'grow';
});
attackHermes.addEventListener('click', event => {
  attacks.play();
  attack();
});

herculesB.addEventListener('mouseover', event => {
  hoverSound.play();
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = 'Hercules (Greek: Ἡρακλῆς) is the son of Zeus and half-brother to Kratos. He is known for having a lot of strength. \n Damage: 67 p3s';
  kratosOlympus.style.position = 'absolute';
  kratosOlympus.style.left = '35cm';
  hercules.style.display = 'block';
  herculesB.style.animation = 'tilt-shaking 0.5s';
});
herculesB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  text2.style.display = 'block';
  enemyInfo.style.display = 'none';
  hercules.style.display = 'none';
  kratosOlympus.style.position = 'relative';
  kratosOlympus.style.left = '0';
  herculesB.style.animation = 'grow';
});
herculesB.addEventListener('click', event => {
  olympusAm.pause();
  olympusAm.currentTime = 0;
  gamebox.style.background = '#59636f';
  herculesLine.play();
  kratosOlympus.style.display = 'none';
  herculesxkratos.style.display = 'block';
  text2.innerText = "Hercules gets in your way, to Zeus. He challenges you to fight him to the death to see who is stronger. \n 😟";
  fighting = 7;
  gaan();
});

attackHercules.addEventListener('mouseover', event => {
  herculesxkratos.style.display = 'none';
  herculesFight.style.display = 'block';
  herculesFight.style.animation = 'tilt-n-move-shaking 0.5s';
});
attackHercules.addEventListener('mouseout', event => {
  herculesxkratos.style.display = 'block';
  herculesFight.style.display = 'none';
  attackHercules.style.animation = 'grow';
});
attackHercules.addEventListener('click', event => {
  switch (clicks) {
    case 1:
      attacks.play();
      clicks++;
      break;
    case 2:
      attacks2.play();
      clicks++;
      break;
    case 3:
      attacks.play();
      clicks++;
      break;
    case 4:
      attacks.play();
      clicks = 1;
      break;
  }
  attack();
});

zeusB.addEventListener('mouseover', event => {
  hoverSound.play();
  text2.style.display = 'none';
  enemyInfo.style.display = 'inline-block';
  enemyInfo.innerText = 'Zeus (Greek: Ζεύς) is the King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Storm, Thunder and Lightning. Also the father of Kratos. Damage: 79 p3s';
  kratosOlympus.style.position = 'absolute';
  kratosOlympus.style.left = '35cm';
  zeus.style.display = 'block';
  zeusB.style.animation = 'tilt-shaking 0.5s';
});
zeusB.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  text2.style.display = 'block';
  enemyInfo.style.display = 'none';
  zeus.style.display = 'none';
  kratosOlympus.style.position = 'relative';
  kratosOlympus.style.left = '0';
  zeusB.style.animation = 'grow';
});
zeusB.addEventListener('click', event => {
  olympusAm.pause();
  olympusAm.currentTime = 0;
  gamebox.style.background = '#3f383e';
  zeusLine.play();
  kratosOlympus.style.display = 'none';
  zeusxkratos.style.display = 'block';
  text2.innerText = "You finally arrive to the god of thunder and lightning, and also your father, Zeus. Try killing him in fashion. \n 😈";
  fighting = 8;
  gaan();
});

attackZeus.addEventListener('mouseover', event => {
  zeusxkratos.style.display = 'none';
  zeusFight.style.display = 'block';
  attackZeus.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackZeus.addEventListener('mouseout', event => {
  zeusxkratos.style.display = 'block';
  zeusFight.style.display = 'none';
  attackZeus.style.animation = 'grow';
});
attackZeus.addEventListener('click', event => {
  attackZeus.play();
  attack();
});

rungod.addEventListener('mouseover', event => {
  hoverSound.play();
  switch (fighting) {
    case 6:
      hermesxkratos.style.display = 'none';
      hermesFight.style.display = 'none';
      hermesKill.style.display = 'none';
      break;
    case 7:
      herculesxkratos.style.display = 'none';
      herculesFight.style.display = 'none';
      herculesKill.style.display = 'none';
      break;
    case 8:
      zeusxkratos.style.display = 'none';
      zeusFight.style.display = 'none';
      break;
  }
  gamebox.style.background = '#335168';
  kratosRunning.style.display = 'block';
  rungod.style.animation = 'horizonal-shaking 0.8s';
});
rungod.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  hermesxkratos.style.display = 'none';
  herculesxkratos.style.display = 'none';
  zeusxkratos.style.display = 'none';
  kratosOlympus.style.display = 'block';
  kratosRunning.style.display = 'none';
  rungod.style.animation = 'grow';
});
rungod.addEventListener('click', event => {
  returnSound.play();
  switch (fighting) {
    case 6:
      clearInterval(hermat);
      battleTheme2.pause();
      battleTheme2.currentTime = 0;
      text2.innerText = "You escaped Hermes, knowing you cannot defeat him.\n Get more health or a better weapon to be able to defeat him.";
      hermesxkratos.style.display = 'none';
      hermesKill.style.display = 'none';
      attackHermes.style.display = 'none';
      break;
    case 7:
      clearInterval(hercat);
      battleTheme2.pause();
      battleTheme2.currentTime = 0;
      text2.innerText = "You escaped Hercules, knowing you cannot defeat him with all that incredible strength. \n Get more health or a better weapon to be able to defeat him.";
      herculesxkratos.style.display = 'none';
      herculesKill.style.display = 'none';
      attackHercules.style.display = 'none';
      break;
    case 8:
      clearInterval(zeuat);
      zeusBattle.pause();
      zeusBattle.currentTime = 0;
      text2.innerText = "You escaped Zeus, knowing you cannot defeat him. His power was SHOCKING (Get it? 😆)! \n Get more health or a better weapon to be able to defeat him.";
      zeusxkratos.style.display = 'none';
      attackZeus.style.display = 'none';
      break;
  }
  setTimeout(() => {
    olympusAm.play();
  }, 2000 )
  setTimeout(() => {
    text.innerText = "You have now arrived at Olympus. Choose which god you want to battle. Be sure to at least have the Gauntlet weapon as these gods are strong.";
  }, 8000);
  enemyStats.style.display = 'none';
  if (rungod.innerText = "Return") {
     rungod.innerText = "Run";
  }
  rungod.style.display = 'none';
  evadeB.style.display = 'none';
  hermesB.style.display = 'inline';
  hermesB.style.animationDuration = '2s';
  hermesB.style.animationTimingFunction = 'linear';
  herculesB.style.display = 'inline';
  herculesB.style.animationDuration = '2s';
  herculesB.style.animationTimingFunction = 'linear';
  zeusB.style.display = 'inline';
  zeusB.style.animationDuration = '2s';
  zeusB.style.animationTimingFunction = 'linear';
  leaveOlympus.style.display = 'inline';
  leaveOlympus.style.animationDuration = '2s';
  leaveOlympus.style.animationTimingFunction = 'linear';
});

// Olympus battle functions

let hit = 0;

function hermesShapa() {
    hermat = setInterval (() => {
    hit++;
    if(hit == 1) {
      hermesAttacks.play();
    } else if(hit >= 2) {
      hermesAttacks2.play();
    }
    health -= getEnemyAttackValue(enemies[fighting].level);
    healthText.innerText = health;
    setTimeout (() => {
      gamebox.style.animationPlayState = 'paused';
    }, 1000 );
    if (health <= 0) {
      death();
      setTimeout(() => {
        hermesxkratos.style.display = 'none';
      }, 1);
      clearInterval(hermat);
    } else if (health <= 35) {
      lowHealth();
    }
    if (enemyHealth <= 0) {
        defeatEnemy();
        battleTheme2.pause();
        battleTheme2.currentTime = 0;
        setTimeout(() => {
          hermesxkratos.style.display = 'none';
        }, 1);
        hermesKill.style.display = 'block';
        var hermef = setInterval(( )=> {
          count += 2;
          orbs += enemies[fighting].level - 8;
          exp++;
          orbsText.innerText = orbs;
          expText.innerText = exp;
          if (count == 112) {
            count = 0;
            clearInterval(hermef);
          }
        }, 80);
        clearInterval(hermat);
    }
  }, 1000);
}

function herculesShapa() {
  hercat = setInterval (() => {
  hit++;
  if(hit == 1) {
    herculesAttacks.play();
  } else if(hit >= 2) {
    hermesAttacks2.play();
  }
  health -= getEnemyAttackValue(enemies[fighting].level);
  healthText.innerText = health;
  setTimeout (() => {
    gamebox.style.animationPlayState = 'paused';
  }, 1000 );
  if (health <= 0) {
    death();
    setTimeout(() => {
      herculesxkratos.style.display = 'none';
    }, 1);
    clearInterval(hercat);
  } else if (health <= 35) {
    lowHealth();
  }
  if (enemyHealth <= 0) {
      defeatEnemy();
      battleTheme2.pause();
      battleTheme2.currentTime = 0;
      setTimeout(() => {
        herculesxkratos.style.display = 'none';
      }, 1);
      herculesKill.style.display = 'block';
      var hercef = setInterval(( )=> {
        count += 2;
        orbs += enemies[fighting].level - 8;
        exp++;
        orbsText.innerText = orbs;
        expText.innerText = exp;
        if (count == 136) {
          count = 0;
          clearInterval(hercef);
        }
      }, 80);
      clearInterval(hercat);
  }
  }, 3000);
}

function zeusShapa() {
  zeuat = setInterval (() => {
  zeusAttacks.play();
  health -= getEnemyAttackValue(enemies[fighting].level);
  healthText.innerText = health;
  setTimeout (() => {
    gamebox.style.animationPlayState = 'paused';
  }, 1000 );
  if (health <= 0) {
    death();
    clearInterval(zeuat);
  } else if (health <= 35) {
    lowHealth();
  }
  if (enemyHealth <= 0) {
    beatGame();
  }
}, 2800);
}

// Olympus battle functions complete

function gaan(){
  enemyStats.style.display = "inline-block";
  enemyName.innerText = enemies[fighting].name;
  enemyHealth = enemies[fighting].health;
  enemyHealthText.innerText = enemyHealth;
  herculesB.style.display = 'none';
  hermesB.style.display = 'none';
  zeusB.style.display = 'none';
  leaveOlympus.style.display = 'none';
  switch(fighting){
    case 6: 
      setTimeout(() => {
        selection2.play();
        setTimeout(() => {
          battleTheme2.play();
        }, 1000 );
        evadeB.style.display = 'inline';
        evadeB.style.animationDuration = '2s';
        evadeB.style.animationTimingFunction = 'linear';
        attackHermes.style.display = 'inline';
        attackHermes.style.animationDuration = '2s';
        attackHermes.style.animationTimingFunction = 'linear';
        rungod.style.display = 'inline';
        rungod.style.animationDuration = '2s';
        rungod.style.animationTimingFunction = 'linear';
        hermesShapa();
      }, 4200 );
    break;
    case 7:
      setTimeout(() => {
        selection2.play();
        setTimeout(() => {
          battleTheme2.play();
        }, 1000 );
        evadeB.style.display = 'inline';
        evadeB.style.animationDuration = '2s';
        evadeB.style.animationTimingFunction = 'linear';
        attackHercules.style.display = 'inline';
        attackHercules.style.animationDuration = '2s';
        attackHercules.style.animationTimingFunction = 'linear';
        rungod.style.display = 'inline';
        rungod.style.animationDuration = '2s';
        rungod.style.animationTimingFunction = 'linear';
        herculesShapa();
      }, 3000 );
    break;
    case 8:
      setTimeout(() => {
        selection2.play();
        setTimeout(() => {
          zeusBattle.play();
        }, 1000 );
        evadeB.style.display = 'inline';
        evadeB.style.animationDuration = '2s';
        evadeB.style.animationTimingFunction = 'linear';
        attackZeus.style.display = 'inline';
        attackZeus.style.animationDuration = '2s';
        attackZeus.style.animationTimingFunction = 'linear';
        rungod.style.display = 'inline';
        rungod.style.animationDuration = '2s';
        rungod.style.animationTimingFunction = 'linear';
        zeusShapa();
      }, 14200 );
    break;

  }
}

// Battle functions

function attack() {
  //text2.innerText = "You approach the " + enemies[fighting].name + " and the " + enemies[fighting].name + " detects you and attacks attacks.";
  //text2.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  enemyHealth -= weapons[currentWeapon].damage;    
  enemyHealthText.innerText = enemyHealth;
}

function getEnemyAttackValue(level) {
  gamebox.style.animationPlayState = 'running';
  var hit = (level * 4 + 1) + (Math.floor(Math.random() * exp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function evade() {
  evadeSound.play();
  if (fighting >= 6 ) {
    text.innerText = "You evade the attack from " + enemies[fighting].name + ".";
  } else {
    text.innerText = "You evade the attack from the " + enemies[fighting].name;
  }
}

function lowHealth() {
  heartbeat.play();
  gamebox.style.boxShadow = '#880808 0px 20px 30px -10px'; // '#4c0807 0px 10px 36px 0px, #4c0807 0px 0px 0px 1px';
    if(health >= 36) {
      heartbeat.pause();
      heartbeat.currentTime = 0;
      gamebox.style.boxShadow = 'none';
    }
}

function defeatEnemy() {
  stopMusic();
  enemyHealth = 0;
  enemyHealthText.innerText = enemyHealth;
  setTimeout(() => {
    kratosUnderworld.style.display = 'none';
  }, 1);
  defeatSound.play();
  setTimeout (() => {
    switch (fighting) {
      case 0: 
        orbSound.play();
        break;
      case 1:
        orbsSound.play();
        break;
      case 2: 
        orbsSound.play();
        break;
      case 4:
        orbsSound2.play();
      case 7:
        orbsSound3.play();
      default:
        orbsSound2.play();
    }
  }, 3000 );
  text2.innerText = 'You have defeated the enemy. You have now earned some exp and have recieved some orbs from the defeated enemy.';
  gone();
  evadeB.style.display = 'none';
  runB.innerText = 'Return';
}

function death() {
  stopMusic();
  gamebox.style.background = 'black';
  settingsB.style.display = 'none';
  health = 0;
  healthText.innerText = health;
  heartbeat.pause();
  heartbeat.currentTime = 0;
  deathScream.play();
  text.innerText = "You're dead 🫥. Guess now you really are the \"Ghost\" of sparta";
  enemyStats.style.display = 'none';
  setTimeout(() => {
    kratosUnderworld.style.display = 'none';
  }, 1);
  if (fighting <= 7) {
    youDead.style.display = 'block';
  } else {
    setTimeout(() => {
      zeusxkratos.style.display = 'none';
      kratosDead.style.display = 'block';
    }, 1);
  }
  gone();
  evadeB.style.display = 'none';
  runB.style.display = 'none';
  rungod.style.display = 'none';
  reset.style.display = 'inline';
}

function stopMusic() {
  if (fighting <= 1) {
    battleTheme.pause();
    battleTheme.currentTime = 0;
 } else if(fighting <= 4) {
    battleTheme2.pause();
    battleTheme.currentTime = 0;
 }
  else if (fighting == 5) {
    cyclopsBattle.pause();
    cyclopsBattle.currentTime = 0;
 } else if (fighting <= 7) {
    battleTheme2.pause();
    battleTheme2.currentTime = 0;
 } else {
    zeusBattle.pause();
    zeusBattle.currentTime = 0;
 }
}

function gone() {
  if(fighting <= 5) {
    attackHoplite.style.display = 'none';
    attackBanshee.style.display = 'none';
    attackSatyr.style.display = 'none';
    attackMinotaur.style.display = 'none';
    attackMedusa.style.display = 'none';
    attackCyclops.style.display = 'none';
  } else if(fighting >= 6) {
    attackHermes.style.display = 'none';
    attackHercules.style.display = 'none';
    attackZeus.style.display = 'none';
  }
}

// More functions

leaveOlympus.addEventListener('mouseover', event => {
  hoverSound.play();
  gamebox.style.background = '#20130c';
  leaveOlympus.style.animation = 'horizontal-shaking 0.5s';
  kratosOlympus.style.position = 'absolute';
  kratosOlympus.style.left = '35cm';
  sparta.style.display = 'block';
});
leaveOlympus.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  gamebox.style.background = '#335168';
  leaveOlympus.style.animation = 'grow';
  kratosOlympus.style.position = 'relative';
  kratosOlympus.style.left = '0';
  sparta.style.display = 'none';
});
leaveOlympus.addEventListener('click', event => {
  olympusAm.pause();
  olympusAm.currentTime = 0;
  returnSound.play();
  kratosOlympus.style.display = 'none';
  hermesB.style.display = 'none';
  herculesB.style.display = 'none';
  zeusB.style.display = 'none';
  leaveOlympus.style.display = 'none';
  mainAppear();
});

reset.addEventListener('mouseover', event => {
  hoverSound.play();
  reset.style.animation = 'horizontal-shaking';
  reset.style.animationDuration = '0.5s';
  switch (fighting) {
    case 0:
      kratosUnderworld.style.display = 'none';
      break;
    case 1:
      kratosUnderworld.style.display = 'none';
      break;
      case 2:
        kratosUnderworld.style.display = 'none';
        break;
      case 3:
        kratosUnderworld.style.display = 'none';
        break;
      case 4:
        kratosUnderworld.style.display = 'none';
        break;
      case 5:
        kratosUnderworld.style.display = 'none';
        break;
    case 6:
      hermesxkratos.style.display = 'none';
      hermesFight.style.display = 'none';
      hermesKill.style.display = 'none';
      break;
    case 7:
      herculesxkratos.style.display = 'none';
      herculesFight.style.display = 'none';
      herculesKill.style.display = 'none';
      break;
    case 8:
      zeusxkratos.style.display = 'none';
      zeusFight.style.display = 'none';
      break;
  }
});
reset.addEventListener('mouseout', event => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
  reset.style.animation = 'no';
});
reset.addEventListener('click', event => {
  restart();
});

function beatGame() {
  zeusBattle.pause();
  zeusBattle.currentTime = 0;
  wonned.play();
  text.innerText = "You defeated Zeus! You have finally completed this SHIT game! 🤩";
  fightZeus.style.display = 'none';
  evadeB.style.display = 'none';
  reset.style.display = 'inline';
  hermesxkratos.style.display = 'none';
  zeusKill.style.display = 'block';
  var zeuef = setInterval(( )=> {
    count += 2;
    orbs += enemies[fighting].level - 8;
    exp++;
    orbsText.innerText = orbs;
    expText.innerText = exp;
  if (count == 160) {
      count = 0;
      clearInterval(zeuef);
    }
  }, 80);
  clearInterval(zeuat);
}

function restart() {
  ambienceStop();
  returnSound.play();
  gamebox.style.background = '#464646';
  settingsB.style.display = 'inline';
  settingsB.style.background = '#464646';
  setTimeout(() => {
    ahShit.play();
  }, 1800 );
  exp = 0;
  health = 100;
  orbs = 0;
  currentWeapon = 0;
  inventory = ["blades of chaos"];
  orbsText.innerText = orbs;
  healthText.innerText = health;
  expText.innerText = exp;
  gamebox.style.boxShadow = 'none';
  musicOption.style.display = 'inline';
  text2.style.display = 'none';
  text.style.display='inline-block';
  text.innerText = "Welcome back to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
  if (fighting <= 7) {
    youDead.style.display = 'none';
  } else {
    kratosDead.style.display = 'none';
  }
  kratosAtSparta.style.display = 'inline-block';
  reset.style.display = 'none';
  shop.style.display = 'inline';
  shop.style.animation = 'rotateX';
  shop.style.animationDuration = '0.8s';
  underworldB.style.display = 'inline';
  underworldB.style.animation = 'rotateX';
  underworldB.style.animationDuration = '0.8s';
  olympusB.style.display = 'inline';
  olympusB.style.animation = 'rotateX';
  olympusB.style.animationDuration = '0.8s';
}

function ambienceStop() {
  if (fighting <= 5) {
    underworldAm.pause();
    underworldAm.currentTime = 0;
  } else {
    olympusAm.pause();
    olympusAm.currentTime = 0;
  }
}

function mainAppear() {
  if(pop == true) {
    menuTheme.play();
  }
  musicOption.style.display = 'inline'
  gamebox.style.background = '#464646';
  settingsB.style.background = '#464646';
  text2.style.display = 'none';
  text.style.display = 'inline-block'
  text.innerText = "You have returned to Sparta. Where do you want to go next?";
  kratosAtSparta.style.display = 'block';
  shop.style.display = 'inline-block';
  shop.style.animation = 'rotateY';
  shop.style.animationDuration = '0.8s';
  underworldB.style.display = 'inline-block';
  underworldB.style.animation = 'rotateY';
  underworldB.style.animationDuration = '0.8s';
  olympusB.style.display = 'inline-block';
  olympusB.style.animation = 'rotateY';
  olympusB.style.animationDuration = '0.8s';
}
