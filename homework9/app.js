class Slider {
    constructor(props) {
        this.left = document.querySelector(props.leftBtn);
        this.right = document.querySelector(props.rightBtn);
        this.sliderItems = document.querySelectorAll(props.sliderItems);
        this.sliderContainer = document.querySelector(props.sliderContainer);
        this.counter = 0;
        this.randomColor = props.randomColor;

    }

    randColor = (min, max) => {
        if (this.randomColor === true) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        } else {
            console.log('random-color is not enable');
        }
    }

    addEvents() {
        this.sliderContainer.addEventListener('click', (e) => {
            if (e.target === this.left) {
                this.slideLeft();
            } else if (e.target === this.right) {
                this.slideRight();
            }
        })
        this.buttonsState();
    }

    buttonsState() {
        if (this.counter === 0) {
            this.left.disabled = true;
        } else if (this.counter === this.sliderItems.length - 1) {
            this.right.disabled = true;
        } else {
            this.left.disabled = false;
            this.right.disabled = false;
        }
        console.log(this.sliderItems[this.counter])
        this.sliderItems[this.counter].style.background = `
        rgb(
         ${this.randColor(1, 255)}
        ,${this.randColor(1, 255)}
        ,${this.randColor(1, 255)}
        )`
    }

    slideLeft() {
        this.sliderItems.forEach(item => {
            item.classList.remove('active')
        })
        this.counter--;
        this.buttonsState();
        this.sliderItems[this.counter].classList.add('active');
    }

    slideRight() {
        this.sliderItems.forEach(item => {
            item.classList.remove('active')
        })
        this.counter++;
        this.buttonsState();
        this.sliderItems[this.counter].classList.add('active');
    }
}

const
    slider = new Slider({
        leftBtn: '.js--btn1',
        rightBtn: '.js--btn2',
        sliderItems: '.js--slider__content',
        sliderContainer: '.js--slider__wrapper',
        randomColor: true // можно включать и выключать рандомный цвет слайдов
    });

slider.addEvents();
