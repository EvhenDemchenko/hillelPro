class Clocks {
    constructor() {
        this.clockOutput = document.querySelector('.clock');
        this.btn = document.querySelector('button')
            .addEventListener('click', () => {
                clearInterval(this.timerId)
            })
        this.date = undefined;
        this.init();
        this.timerId = setInterval(() => {
            this.init();
        }, 1000);
    }

    init() {
        this.date = new Date();
        const sec = (this.date.getSeconds() < 10 ? '0' : '') + this.date.getSeconds();
        const min = (this.date.getMinutes() < 10 ? '0' : '') + this.date.getMinutes();
        const hour = (this.date.getHours() < 10 ? '0' : '') + this.date.getHours();
        this.clockOutput.innerText = `${hour}:${min}:${sec}`;
    }
}

new Clocks();
