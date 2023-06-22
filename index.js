const playButton = document.querySelector('.timer')

let level = 1
const defaultCardNumbers = 3
let randomNumbers = []

playButton.addEventListener('click', () => {
    const cardNumbers = level + defaultCardNumbers - 1
    const cards = document.querySelector('.cards')
    cards.innerHTML = ""

    for (let i = 0; i < cardNumbers; i++) {
        let randomNumber = getRandomNumber(1, 100)

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `<div class="card-inner">
                            <div class="card-front">${randomNumber}</div>
                            <div class="card-back"></div>
                         </div>`

        cards.appendChild(card)
    }
})

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
