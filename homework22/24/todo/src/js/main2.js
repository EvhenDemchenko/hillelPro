class Todo {
    constructor(props) {
        this.input = document.querySelector(props.input);
        this.todosWrapper = document.querySelector(props.todosWrapper);
        this.form = document.querySelector(props.form);
        this.init()
    }

    async init() {
        await this.loadFromServer();
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addServerItem();
        })
    }

    createTemplate(description, checked, id) {
        this.item = document.createElement('div');
        this.item.classList.add('todo-item');
        this.item.classList.add('js--todo-item');
        this.item.dataset.id = id;

        this.item.innerHTML = (
            `<label class="todo-item__label">
                <input type="checkbox" class="js--complete" ${checked ? 'checked="true"' : ''}>
                <p class=" todo-item__desc js--desc ${checked ? 'checked' : ''}">${description}</p>
             </label>
             <button class="form__button js--delete">Удалить</button>`
        );

        this.item.querySelector('.js--delete').addEventListener('click', () => this.delete(id, this.item));
        this.item.querySelector('.js--complete').addEventListener('click', (event) => {
            this.complete(event, description, id)
        })
        return this.item;
    }


    async addServerItem() {
        const response = await fetch(("http://localhost:3000/todos"), {
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
        this.todosWrapper.appendChild(this.createTemplate(
            dataItem.text,
            dataItem.checked,
            dataItem.id
        ))
        this.input.value = '';
    }

    async loadFromServer() {
        const response = await fetch("http://localhost:3000/todos", {
            method: "GET"
        });
        this.todosWrapper.innerHTML = '';
        const data = await response.json();
        data.forEach(dataItem => {
            this.todosWrapper.appendChild(this.createTemplate(
                dataItem.text,
                dataItem.checked,
                dataItem.id
            ))
        })
    }

    async delete(id, item) {
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE'
        })
        await this.loadFromServer();
    }

    async complete(event, description, id) {
        let state;
        state = !event.target.checked !== true;
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"checked": state, "text": description})
        })
        await this.loadFromServer();
    }
}

new Todo({
    input: '.js--form__input',
    todosWrapper: '.js--todos-wrapper',
    form: '.js--form'
})