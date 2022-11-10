/**
 * @jest-environment jsdom
 */

const localStorageMock = require('../__mock__/mockStorage');
const Tasks = require('./storageTest');

const task = new Tasks();

const html = (obj) => {
  const htmlLi = `<li class="task-li">
    <input id="${obj.id}" type="checkbox" class="checked" ${obj.completed}>
    <input id="${obj.id}" type="text" class="text" value="${obj.description}" readonly>
    <button id="${obj.id}" class="trash"></button>
    </li>`;
  return htmlLi;
};

describe('Adding and Removing', () => {
  test('adding to do task', () => {
    const mockBody = `
    <ul class="todo-body"></ul>
    `;
    // Object 1
    document.body.insertAdjacentHTML('afterbegin', mockBody);
    const todoBody = document.querySelector('.todo-body');
    let object1 = {
      description: 'Jonathan',
      completed: false,
      index: 1,
      id: 1,
    };
    task.addItem(object1);
    todoBody.insertAdjacentHTML('afterbegin', html(object1));
    expect(localStorageMock.data[0]).toEqual(object1);
  });

  test('Delete todo Item', () => {
    const DeleteBtn = document.querySelectorAll('.trash');
    DeleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const elem = btn.parentNode;
        elem.remove();
        task.removeItem(e.target.parentNode.id);
      });
    });
  });
});