/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/js/main2.js ***!
  \*************************/
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
        const item = document.createElement('div');
        item.classList.add('todo-item');
        item.classList.add('js--todo-item');
        item.dataset.id = id;

        item.innerHTML = (
            `<label class="todo-item__label">
                <input type="checkbox" class="js--complete" ${checked ? 'checked="true"' : ''}>
                <p class=" todo-item__desc js--desc ${checked ? 'todo-item__desc--underline' : ''}">${description}</p>
             </label>
             <button class="form__button js--delete">Удалить</button>`
        );

        item.querySelector('.js--delete').addEventListener('click', () => this.delete(id, item));
        item.querySelector('.js--complete').addEventListener('click', (event) => {
            this.complete(event, description, id, item)
        })
        return item;
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
        item.remove();
    }

    async complete(event, description, id, item) {
        let state = !event.target.checked !== true;
        const currentItem = item.querySelector('p');
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"checked": state, "text": description})
        })
        state ? currentItem.classList.add('todo-item__desc--underline') : currentItem.classList.remove('todo-item__desc--underline');
    }
}

new Todo({
    input: '.js--form__input',
    todosWrapper: '.js--todos-wrapper',
    form: '.js--form'
})
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map