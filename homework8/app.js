class Card {
    constructor() {
        this.cardNumber = document.querySelector('.js--card__number');
        this.cardName = document.querySelector('.js--card__name');
        this.cardDataMonth = document.querySelector('.card-data__month');
        this.cardDateYear = document.querySelector('.card-date__year');
        this.cardCvvText = document.querySelector('.card-cvv__text');
        this.outPut = document.querySelector('.js--output');
        this.submitBtn = document.querySelector('.js--button')

        this.state = {
            cardNumber: '#### #### #### ####',
            cardName: 'YOUR NAME',
            dateMonth: 'MM',
            dateYear: 'YY',
            cvv: 'CVV CODE',
            valid: false,

            checkState: function () {
                return this.valid = this.cardNumber.length === 16
                    && this.cardName.length >= 3
                    && this.cardName.length <= 10
                    && this.cvv.length === 3
                    && this.dateYear.length === 4
                    && this.dateMonth.length === 2;
            },
        };
    };

    setInputData(cardInput, cardInfoField, rangeA, rangeB, strLength) {
        cardInput.addEventListener('keypress', (e) => {
            if (e.keyCode >= rangeA && e.keyCode <= rangeB || e.keyCode === 32) {
                cardInput.addEventListener('input', (event) => {
                    event.target.value = event.target.value.substring(0, strLength);
                    this.state[cardInfoField] = event.target.value;
                    this.render();
                })
            } else {
                e.preventDefault();
            }
        })

    }

    setOptionData(item, data) {
        item.addEventListener('input', e => {
            this.state[data] = e.target.value;
            this.render();
        })
    }

    addInputEvents() {
        this.setInputData(this.cardName, 'cardName', 97, 122, 10);
        this.setInputData(this.cardNumber, 'cardNumber', 47, 58, 16);
        this.setInputData(this.cardCvvText, 'cvv', 47, 58, 3);
        this.setOptionData(this.cardDataMonth, 'dateMonth');
        this.setOptionData(this.cardDateYear, 'dateYear');
        this.submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`
                cardName:  ${this.state.cardName},
                cardNumber:  ${this.state.cardNumber},
                dateMonth:  ${this.state.dateMonth},
                dateYear:  ${this.state.dateYear},
                cvv:  ${this.state.cvv},
            `)
        })
    }

    formValidate() {
        this.submitBtn.disabled = !this.state.checkState();
        if (this.state.checkState()) {
            this.submitBtn.disabled = false;
            this.submitBtn.classList.remove('opacity-50')
        } else {
            this.submitBtn.classList.add('opacity-50')
        }
    }


    render() {
        this.formValidate()
        this.outPut.innerHTML = `
         <div class="card__info-nuber">
         ${this.state.cardNumber.substring(0, 4)}
          ${this.state.cardNumber.substring(4, 8)}
            ${this.state.cardNumber.substring(8, 12)}
            ${this.state.cardNumber.substring(12, 16)}
        </div>
        <div class="card__personalInfo flex flex-col">
            <div class="card__info-holder">
                <div class="holder__name"> 
                ${this.state.cardName.toUpperCase()}
                </div>
            </div>
            <div class="card__bottom-section flex justify-between">
            <div class="card__expiresDate">
                ${this.state.dateMonth}/${this.state.dateYear}
            </div>
            <div class="card__cvv">
                ${this.state.cvv}
            </div>
            </div>
        </div>`;
    }
}

const ui = new Card();
ui.addInputEvents()
