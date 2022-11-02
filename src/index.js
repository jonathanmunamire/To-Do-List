import _ from 'lodash';
import './style.css';

const toToDoArray = [
  {
    index: 0,
    description: 'Exercise',
    completed: true,
  },
  {
    index: 1,
    description: 'Take Breakfast',
    completed: true,
  },
  {
    index: 2,
    description: 'Take a bath',
    completed: true,
  },
  {
    index: 3,
    description: 'Study',
    completed: true,
  },
];

const toDoList = document.querySelector('#todo-list');

const contentMarkup = () => {
  const liMarkup = toToDoArray.map((task) => `<div id="todo-item">
  <div id="todo-items1">
    <input type="checkbox" name="" id="" />
    <p id="task">${task.description}</p>
  </div>
  <button id="">
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </button>
</div>`).join('');

  toDoList.innerHTML = liMarkup;
};

window.document.addEventListener('DOMContentLoaded', contentMarkup);