const ancientsData = {
    azathoth: {
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    cthulhu: {
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    iogSothoth: {
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4
      }
    },
    shubNiggurath: {
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
}
  const blueCardsData = [
    {
      id: 'blue1',
      cardFace: './assets/MythicCards/blue/blue1.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      cardFace: './assets/MythicCards/blue/blue2.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      cardFace: './assets/MythicCards/blue/blue3.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      cardFace: './assets/MythicCards/blue/blue4.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      cardFace: './assets/MythicCards/blue/blue5.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      cardFace: './assets/MythicCards/blue/blue6.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      cardFace: './assets/MythicCards/blue/blue7.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      cardFace: './assets/MythicCards/blue/blue8.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      cardFace: './assets/MythicCards/blue/blue9.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      cardFace: './assets/MythicCards/blue/blue10.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      cardFace: './assets/MythicCards/blue/blue11.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      cardFace: './assets/MythicCards/blue/blue12.png',
      difficulty: 'normal',
      color:'blue'
    },
  ]
  const brownCardsData = [
    {
      id: 'brown1',
      cardFace: './assets/MythicCards/brown/brown1.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      cardFace: './assets/MythicCards/brown/brown2.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      cardFace: './assets/MythicCards/brown/brown3.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      cardFace: './assets/MythicCards/brown/brown4.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      cardFace: './assets/MythicCards/brown/brown5.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      cardFace: './assets/MythicCards/brown/brown6.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      cardFace: './assets/MythicCards/brown/brown7.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      cardFace: './assets/MythicCards/brown/brown8.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      cardFace: './assets/MythicCards/brown/brown9.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      cardFace: './assets/MythicCards/brown/brown10.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      cardFace: './assets/MythicCards/brown/brown11.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      cardFace: './assets/MythicCards/brown/brown12.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      cardFace: './assets/MythicCards/brown/brown13.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      cardFace: './assets/MythicCards/brown/brown14.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      cardFace: './assets/MythicCards/brown/brown15.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      cardFace: './assets/MythicCards/brown/brown16.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      cardFace: './assets/MythicCards/brown/brown17.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      cardFace: './assets/MythicCards/brown/brown18.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      cardFace: './assets/MythicCards/brown/brown19.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      cardFace: './assets/MythicCards/brown/brown20.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      cardFace: './assets/MythicCards/brown/brown21.png',
      difficulty: 'easy',
      color:'brown'
    },
  ]
  const greenCardsData = [
    {
      id: 'green1',
      cardFace: './assets/MythicCards/green/green1.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      cardFace: './assets/MythicCards/green/green2.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      cardFace: './assets/MythicCards/green/green3.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      cardFace: './assets/MythicCards/green/green4.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      cardFace: './assets/MythicCards/green/green5.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      cardFace: './assets/MythicCards/green/green6.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      cardFace: './assets/MythicCards/green/green7.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      cardFace: './assets/MythicCards/green/green8.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      cardFace: './assets/MythicCards/green/green9.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      cardFace: './assets/MythicCards/green/green10.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      cardFace: './assets/MythicCards/green/green11.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      cardFace: './assets/MythicCards/green/green12.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      cardFace: './assets/MythicCards/green/green13.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      cardFace: './assets/MythicCards/green/green14.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      cardFace: './assets/MythicCards/green/green15.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      cardFace: './assets/MythicCards/green/green16.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      cardFace: './assets/MythicCards/green/green17.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      cardFace: './assets/MythicCards/green/green18.png',
      difficulty: 'easy',
      color:'green'
    },
  ]
  let currentAncientCard;
  let greenCount, brownCount, blueCount;
  let currentDifficults;
  let ancientsCard = document.querySelectorAll('.ancientsCard');
  let startBtn = document.querySelector('.start');
  let stage1Green = document.querySelector('.stage1Green');
  let stage1Brown = document.querySelector('.stage1Brown');
  let stage1Blue = document.querySelector('.stage1Blue');
  let stage2Green = document.querySelector('.stage2Green');
  let stage2Brown = document.querySelector('.stage2Brown');
  let stage2Blue = document.querySelector('.stage2Blue');
  let stage3Green = document.querySelector('.stage3Green');
  let stage3Brown = document.querySelector('.stage3Brown');
  let stage3Blue = document.querySelector('.stage3Blue');
  let mythicCardBackground = document.querySelector('.mythicCardBackground');
  let currentCard = document.querySelector('.currentCard');
  let greenCards = [];
  let brownCards = [];
  let blueCards = [];
  let stage1, stage2, stage3, deletedCard
  function getRandomIntInclusive(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
  }
  function getCard(ancientData, greenCardsArr, brownCardsArr, blueCardsArr){
    stage1 = []
    stage2 = []
    stage3 = []
    if(ancientData['firstStage']['greenCards'] > 0){
      for(let i = 0;i < ancientData['firstStage']['greenCards'];i++){
        stage1.push(greenCardsArr.pop())
      }
    }
    if(ancientData['firstStage']['brownCards'] > 0){
      for(let i = 0;i < ancientData['firstStage']['brownCards'];i++){
        stage1.push(brownCardsArr.pop())
      }
    }
    if(ancientData['firstStage']['blueCards'] > 0){
      for(let i = 0;i < ancientData['firstStage']['blueCards'];i++){
        stage1.push(blueCardsArr.pop())
      }
    }
    if(ancientData['secondStage']['greenCards'] > 0){
      for(let i = 0;i < ancientData['secondStage']['greenCards'];i++){
        stage2.push(greenCardsArr.pop())
      }
    }
    if(ancientData['secondStage']['brownCards'] > 0){
      for(let i = 0;i < ancientData['secondStage']['brownCards'];i++){
        stage2.push(brownCardsArr.pop())
      }
    }
    if(ancientData['secondStage']['blueCards'] > 0){
      for(let i = 0;i < ancientData['secondStage']['blueCards'];i++){
        stage2.push(blueCardsArr.pop())
      }
    }
    if(ancientData['thirdStage']['greenCards'] > 0){
      for(let i = 0;i < ancientData['thirdStage']['greenCards'];i++){
        stage3.push(greenCardsArr.pop())
      }
    }
    if(ancientData['thirdStage']['brownCards'] > 0){
      for(let i = 0;i < ancientData['thirdStage']['brownCards'];i++){
        stage3.push(brownCardsArr.pop())
      }
    }
    if(ancientData['thirdStage']['blueCards'] > 0){
      for(let i = 0;i < ancientData['thirdStage']['blueCards'];i++){
        stage3.push(blueCardsArr.pop())
      }
    }
    stage1.sort(() => Math.random() - 0.5)
    stage2.sort(() => Math.random() - 0.5)
    stage3.sort(() => Math.random() - 0.5)
  }
Array.from(ancientsCard).forEach(function(button){
    button.addEventListener('click', function() {
        greenCount = 0
        brownCount = 0
        blueCount = 0
        Array.from(ancientsCard).forEach(function(thisAncientCard){thisAncientCard.classList.remove('ancientsCardActive')})
        this.classList.add('ancientsCardActive')
        currentAncientCard = ancientsData[this.id];
        for(let key in currentAncientCard){
            greenCount += currentAncientCard[key]['greenCards']
            brownCount += currentAncientCard[key]['brownCards']
            blueCount += currentAncientCard[key]['blueCards']
        }
    })
});
let difficults = document.querySelectorAll('.difficulty');
Array.from(difficults).forEach(function(button){
    button.addEventListener('click', function(e) {
        Array.from(difficults).forEach(function(thisDifficultStage){thisDifficultStage.classList.remove('difficultyActive')})
        this.classList.add('difficultyActive')
        currentDifficults = this.innerHTML;
    })
});
startBtn.addEventListener('click', function() {
    stage1Green.textContent = currentAncientCard['firstStage']['greenCards']
    stage1Brown.textContent = currentAncientCard['firstStage']['brownCards']
    stage1Blue.textContent = currentAncientCard['firstStage']['blueCards']
    stage2Green.textContent = currentAncientCard['secondStage']['greenCards']
    stage2Brown.textContent = currentAncientCard['secondStage']['brownCards']
    stage2Blue.textContent = currentAncientCard['secondStage']['blueCards']
    stage3Green.textContent = currentAncientCard['thirdStage']['greenCards']
    stage3Brown.textContent = currentAncientCard['thirdStage']['brownCards']
    stage3Blue.textContent = currentAncientCard['thirdStage']['blueCards']



    for(let i = 0;i < greenCount; i++){
      greenCards.push(greenCardsData.splice(getRandomIntInclusive(greenCardsData.length - i), 1)[0])
  }
  for(let i = 0;i < brownCount; i++){
      brownCards.push(brownCardsData.splice(getRandomIntInclusive(brownCardsData.length - i), 1)[0])
  }
  for(let i = 0;i < blueCount; i++){
      blueCards.push(blueCardsData.splice(getRandomIntInclusive(blueCardsData.length - i), 1)[0])
  }



    // if(currentDifficults == 'Средний'){
        
    // }
    
    mythicCardBackground.classList.remove('mythicCardBackgroundInactive')
    getCard(currentAncientCard, greenCards, brownCards, blueCards)
    mythicCardBackground.addEventListener('click', function(){
      currentCard.classList.remove('currentCardInactive')
      if(stage1.length > 0){
        deletedCard = stage1.pop()
        if(deletedCard['color'] == 'green'){
          stage1Green.textContent = Number(stage1Green.textContent) - 1
        }else if (deletedCard['color'] == 'brown'){
          stage1Brown.textContent = Number(stage1Brown.textContent) - 1
        }else if(deletedCard['color'] == 'blue'){
          stage1Blue.textContent = Number(stage1Blue.textContent) - 1
        }
      }else if(stage2.length > 0){
        deletedCard = stage2.pop()
        if(deletedCard['color'] == 'green'){
          stage2Green.textContent = Number(stage2Green.textContent) - 1
        }else if (deletedCard['color'] == 'brown'){
          stage2Brown.textContent = Number(stage2Brown.textContent) - 1
        }else if(deletedCard['color'] == 'blue'){
          stage2Blue.textContent = Number(stage2Blue.textContent) - 1
        }
      }else if(stage3.length > 0){
        deletedCard = stage3.pop()
        if(deletedCard['color'] == 'green'){
          stage3Green.textContent = Number(stage3Green.textContent) - 1
        }else if (deletedCard['color'] == 'brown'){
          stage3Brown.textContent = Number(stage3Brown.textContent) - 1
        }else if(deletedCard['color'] == 'blue'){
          stage3Blue.textContent = Number(stage3Blue.textContent) - 1
        }
        if(stage3.length == 0){
          mythicCardBackground.classList.add('mythicCardBackgroundInactive')
        }
      }
      currentCard.innerHTML = `<img src="${deletedCard['cardFace']}" alt="currentCard" class="currentCardImg">`
    })
});