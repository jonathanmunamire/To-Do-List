const dragDrop = (listItems) => {
  let dragStartIndex;

  function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('id');
    this.style.backgroundColor = '#0000.3';
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.task-content');
    const itemTwo = listItems[toIndex].querySelector('.task-content');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);

    const myTasks = JSON.parse(localStorage.getItem('tasks'));
    const origin = myTasks[fromIndex];
    const target = myTasks[toIndex];

    myTasks[fromIndex] = { ...target, index: fromIndex };
    myTasks[toIndex] = { ...origin, index: toIndex };
    localStorage.setItem('tasks', JSON.stringify(myTasks));
  }

  function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.style.backgroundColor = '#00f0.3';
    document.location.reload();
  }

  function addEventListener() {
    const draggables = document.querySelectorAll('.todo-task');

    draggables.forEach((draggable) => {
      draggable.addEventListener('dragstart', dragStart);
      draggable.addEventListener('dragover', dragOver);
      draggable.addEventListener('drop', dragDrop);
    });
  }

  addEventListener();
};

export default dragDrop;