/**
 * @jest-environment jsdom
 */

 const localStorageMock = require('../__mock__/mockStorage.js');
 const Tasks = require('./storageTest.js');

const task = new Tasks();

const html = (obj) => {
  const htmlLi = `<li class="task-li">
    <input id="${obj.id}" type="checkbox" class="checked" ${obj.completed}>
    <input id="${obj.id}" type="text" class="text" value="${obj.description}" readonly>
    <button id="${obj.id}" class="trash"></button>
    </li>`;
  return htmlLi;
};

//test add and remove functions
describe('Adding and Removing a function', () => {
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
    task.addTodo(object1);
    todoBody.insertAdjacentHTML('afterbegin', html(object1));
    expect(localStorageMock.data[0]).toEqual(object1);

    //Rewriting Object 1
    object1 = {
      description: 'Sammy',
      completed: true,
      index: 2,
      id: 2,
    };
    task.addTodo(object1);
    todoBody.insertAdjacentHTML('afterbegin', html(object1));
    expect(localStorageMock.data[1]).toEqual(object1);
  });

  //test delete function
  test('Delete todo Item', () => {
    const DeleteBtn = document.querySelectorAll('.trash');
    DeleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const elem = btn.parentNode;
        elem.remove();
        task.removeTodo(e.target.parentNode.id);
      });
    });
    document.querySelector('button[id="2"]').click();
    task.removeTodo(2);
  });
});

export { localStorageMock, task };