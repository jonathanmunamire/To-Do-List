const localStorageMock = require('../__mock__/mockStorage.js');

class Tasks {
  constructor() {
    this.list = [];
  }

  addTodo(todo) {
    this.list.push(todo);
    localStorageMock.data = this.list;
  }

  removeTodo(ids) {
    const rem = this.list.filter((todo) => todo.ids !== ids);
    rem.forEach((remm, index) => {
      remm.index = index + 1;
    });
    this.list = rem;
    localStorageMock.data = this.list;
  }

  editTodo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === Number(todoId)) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorageMock.data = this.list;
  }

  isCompletedStatus(todoId, status) {
    const checked = this.list.findIndex((element) => element.id === Number(todoId));
    this.list[checked].completed = status;
    localStorageMock.data = this.list;
  }

  clearAllCompletedTask() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorageMock.data = this.list;
  }
}

module.exports = Tasks;