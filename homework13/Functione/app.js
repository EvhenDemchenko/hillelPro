function Watch() {
    const $OUTPUT_CONTAINER = document.querySelector('.outPut');
    this.timerID = setInterval(() => {
        this.init();
    }, 1000);


    this.init = function () {
        const DATE = new Date();
        const SEC = (DATE.getSeconds() < 10 ? '0' : '') + DATE.getSeconds();
        const MIN = (DATE.getMinutes() < 10 ? '0' : '') + DATE.getMinutes();
        const HOUR = (DATE.getHours() < 10 ? '0' : '') + DATE.getHours();
        $OUTPUT_CONTAINER.innerHTML = `${HOUR}:${MIN}:${SEC}`;
    }
    this.init();
}

Watch.prototype.stopTimer = function () {
    document.querySelector('.btn').addEventListener('click', () => {
        clearInterval(this.timerID);
    })
}
const watch = new Watch();
watch.stopTimer();