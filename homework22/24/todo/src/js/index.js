function Tasks(input, todosWrapper) {
    this.input = document.querySelector(input);
    this.todosWrapper = document.querySelector(todosWrapper);

    // async

    // this.addItem = (event) => {
    //     event.preventDefault();
    //     this.todosWrapper.appendChild(this.createTemplate(this.input.value));
    //     this.input.value = '';
    // }
    // this.complete = function(description, id, item) {
    // }
    // this.delete = function(id, item) {
    // }

    this.createTemplate = (description, checked, id) => { // TODO сказать про изменения
        const item = document.createElement('div');
        item.classList.add('todo-item');
        item.classList.add('js--todo-item');
        item.dataset.id = id;
        item.innerHTML = (
            `<label class="todo-item__label">
                <input type="checkbox" class="js--complete" ${checked ? 'checked="true"' : '' }>
                <p class="todo-item__desc js--desc">${description}</p>
             </label>
             <button class="form__button js--delete">Удалить</button>`
        );

        item.querySelector('.js--delete').addEventListener('click', () => this.delete(id, item));
        item.querySelector('.js--complete').addEventListener('click', () => this.complete(description, id, item));
        return item;
    }
}
Tasks.prototype.loadFromServer = async function () {
    const response = await fetch("http://localhost:3000/todos", {
        method: "GET"
    });
    const data = await response.json();
            data.forEach(dataItem => {
                this.todosWrapper.appendChild(this.createTemplate(
                    dataItem.text,
                    dataItem.checked,
                    dataItem.id
                ))
            })
        // })
}

Tasks.prototype.addServerItem = async function (event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                "text": this.input.value,
                "checked": false,
            })
    })
    const dataItem = await response.json();
    // fetch("http://localhost:3000/todos", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "id": Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    //         "text": this.input.value,
    //         "checked": false,
    //     })
    // })
    //     .then(res => res.json())
    //     .then(dataItem => {
            this.todosWrapper.appendChild(this.createTemplate(
                dataItem.text,
                dataItem.checked,
                dataItem.id
            ))
            this.input.value = ''
        // })
}

document.addEventListener('DOMContentLoaded', function () {
    const task = new Tasks(
        '.js--form__input',
        '.js--todos-wrapper'
    );
    task.loadFromServer()
    const bindAddServerItem = task.addServerItem.bind(task)
    const form = document.querySelector('.js--form');
    form.addEventListener('submit', bindAddServerItem);
})