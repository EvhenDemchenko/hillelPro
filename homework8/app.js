class Card {
    constructor() {
        this.cardNumber = document.querySelector('.js--card__number');
        this.cardName = document.querySelector('.js--card__name');
        this.cardDataMonth = document.querySelector('.card-data__month');
        this.cardDateYear = document.querySelector('.card-date__year');
        this.cardCvvText = document.querySelector('.card-cvv__text');
        this.outPut = document.querySelector('.card__infoOutput');

        this.state = {
            cardNumber: '#### #### #### ####',
            cardName: 'Evhen Demchenko',
            dateMonth: 'mm/yy',
            dateYear: '2022',
            cvv: 'cvv'
        };
    };

    getData(cardInput, cardInfoField, rangeA, rangeB, strLength) {
        cardInput.addEventListener('keypress', (e) => {
            console.log(e);
            if (e.keyCode >= rangeA && e.keyCode <= rangeB || e.keyCode === 32) {
                cardInput.addEventListener('input', (event) => {
                    event.target.value = event.target.value.substr(0, strLength);
                    this.state[cardInfoField] = event.target.value;
                    this.render();
                })
            } else {
                e.preventDefault();
            }
        })

    }

    addSelectEvents(item, data) {
        item.addEventListener('input', e => {
            this.state[data] = e.target.value;
            this.render();
        })
    }

    addInputEvents() {
        this.getData(this.cardName, 'cardName', 97, 122, 10);
        this.getData(this.cardNumber, 'cardNumber', 47, 58, 16);
        this.getData(this.cardCvvText, 'cvv', 47, 58, 3);
        this.addSelectEvents(this.cardDataMonth, 'dateMonth');
        this.addSelectEvents(this.cardDateYear, 'dateYear');
    }

    render() {

        this.outPut.innerHTML = `
         <div class="card__info-nuber">
         ${this.state.cardNumber}
        </div>
        <div class="card__personalInfo">
            <div class="card__info-holder">
                <div class="holder__name">
                ${this.state.cardName}
                </div>
            </div>
            <div class="card__expiresDate">
                ${this.state.dateMonth}/${this.state.dateYear}
            </div>
            <div class="card__cvv">
                ${this.state.cvv}
            </div>
        </div>`;
    }
}

const a = new Card();
a.addInputEvents();