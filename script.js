const cardArray = [
  { name: 'img1', img: 'img/01.jpg' },
  { name: 'img1', img: 'img/01.jpg' },
  { name: 'img2', img: 'img/02.jpg' },
  { name: 'img2', img: 'img/02.jpg' },
  { name: 'img3', img: 'img/03.jpg' },
  { name: 'img3', img: 'img/03.jpg' },
  { name: 'img4', img: 'img/04.jpg' },
  { name: 'img4', img: 'img/04.jpg' },
  { name: 'img5', img: 'img/05.jpg' },
  { name: 'img5', img: 'img/05.jpg' },
  { name: 'img6', img: 'img/06.jpg' },
  { name: 'img6', img: 'img/06.jpg' },
  { name: 'img7', img: 'img/07.jpg' },
  { name: 'img7', img: 'img/07.jpg' },
  { name: 'img8', img: 'img/08.jpg' },
  { name: 'img8', img: 'img/08.jpg' },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function checkForMatch() {
  let cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'img/water.jpg')
    cards[optionTwoId].setAttribute('src', 'img/water.jpg')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'img/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.innerHTML = cardsWon.length
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = 'Congratilation! You found them all!'
  }
}

function createBoard() {

  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    card.setAttribute('src', 'img/blank.jpg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }
}

function flipcard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard()