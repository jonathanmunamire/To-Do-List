const localStorageMock = require('../__mock__/mockStorage.js');

class Tasks {
  constructor() {
    this.list = [];
  }

  addItem(todo) {
    this.list.push(todo);
    localStorageMock.data = this.list;
  }

  removeItem(id) {
    const rem = this.list.filter((todo) => todo.id !== id);
    rem.forEach((rem, index) => {
      rem.index = index + 1;
    });
    this.list = rem;
    localStorageMock.data = this.list;
  }
}

module.exports = Tasks;