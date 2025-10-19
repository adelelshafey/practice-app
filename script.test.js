/**
 * @jest-environment jsdom
 */

// Mock the DOM ready event
Object.defineProperty(document, 'readyState', {
  get() {
    return 'complete';
  },
});

// Mock HTML structure for testing
document.body.innerHTML = `
  <section>
    <div id="count">0</div>
    <button id="decrease">-</button>
    <button id="increase">+</button>
  </section>
  <section>
    <input id="todoInput" type="text">
    <button id="addTodo">Add Todo</button>
    <ul id="todoList"></ul>
  </section>
  <section>
    <button id="randomColor">Random Color</button>
  </section>
`;

// Load the script after DOM is ready
require('./script.js');

// Trigger DOMContentLoaded event
const event = new Event('DOMContentLoaded');
document.dispatchEvent(event);

describe('Counter functionality', () => {
  let countDisplay, decreaseBtn, increaseBtn;

  beforeEach(() => {
    countDisplay = document.getElementById('count');
    decreaseBtn = document.getElementById('decrease');
    increaseBtn = document.getElementById('increase');
    countDisplay.textContent = '0';
  });

  test('should increase counter when increase button is clicked', () => {
    increaseBtn.click();
    expect(countDisplay.textContent).toBe('1');
  });

  test('should decrease counter when decrease button is clicked', () => {
    // Reset counter to 0 first
    countDisplay.textContent = '0';
    decreaseBtn.click();
    expect(countDisplay.textContent).toBe('-1');
  });

  test('should handle multiple clicks correctly', () => {
    increaseBtn.click();
    increaseBtn.click();
    decreaseBtn.click();
    expect(countDisplay.textContent).toBe('1');
  });
});

describe('Todo functionality', () => {
  let todoInput, addTodoBtn, todoList;

  beforeEach(() => {
    todoInput = document.getElementById('todoInput');
    addTodoBtn = document.getElementById('addTodo');
    todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todoInput.value = '';
  });

  test('should add todo item when add button is clicked', () => {
    todoInput.value = 'Test todo';
    addTodoBtn.click();

    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].textContent).toContain('Test todo');
  });

  test('should not add empty todo', () => {
    todoInput.value = '';
    addTodoBtn.click();

    expect(todoList.children.length).toBe(0);
  });

  test('should clear input after adding todo', () => {
    todoInput.value = 'Test todo';
    addTodoBtn.click();

    expect(todoInput.value).toBe('');
  });

  test('should add todo when Enter key is pressed', () => {
    todoInput.value = 'Test todo with enter';
    const enterEvent = new KeyboardEvent('keypress', { key: 'Enter' });
    todoInput.dispatchEvent(enterEvent);

    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].textContent).toContain('Test todo with enter');
  });
});

describe('Delete todo functionality', () => {
  let todoList;

  beforeEach(() => {
    todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
  });

  test('should delete todo when delete button is clicked', done => {
    // Add a todo first through the normal flow
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodo');

    todoInput.value = 'Test todo to delete';
    addTodoBtn.click();

    expect(todoList.children.length).toBe(1);

    // Click delete button
    const deleteBtn = todoList.querySelector('.delete-btn');
    deleteBtn.click();

    // Wait for animation to complete
    setTimeout(() => {
      expect(todoList.children.length).toBe(0);
      done();
    }, 350);
  });
});

describe('Color changer functionality', () => {
  let randomColorBtn;

  beforeEach(() => {
    randomColorBtn = document.getElementById('randomColor');
    document.body.style.background = '';
  });

  test('should change background color when random color button is clicked', () => {
    document.body.style.background = '';
    randomColorBtn.click();

    expect(document.body.style.background).not.toBe('');
    expect(document.body.style.background).toContain('linear-gradient');
  });
});

describe('Keyboard shortcuts', () => {
  let countDisplay;

  beforeEach(() => {
    countDisplay = document.getElementById('count');
    countDisplay.textContent = '0';
  });

  test('should increase counter with Ctrl + Plus', () => {
    countDisplay.textContent = '0';
    const event = new KeyboardEvent('keydown', {
      key: '+',
      ctrlKey: true,
    });
    Object.defineProperty(event, 'preventDefault', {
      value: jest.fn(),
    });

    document.dispatchEvent(event);
    expect(countDisplay.textContent).toBe('1');
  });

  test('should decrease counter with Ctrl + Minus', () => {
    countDisplay.textContent = '0';
    const event = new KeyboardEvent('keydown', {
      key: '-',
      ctrlKey: true,
    });
    Object.defineProperty(event, 'preventDefault', {
      value: jest.fn(),
    });

    document.dispatchEvent(event);
    expect(countDisplay.textContent).toBe('-1');
  });

  test('should change color with Ctrl + R', () => {
    document.body.style.background = '';
    const event = new KeyboardEvent('keydown', {
      key: 'r',
      ctrlKey: true,
    });
    Object.defineProperty(event, 'preventDefault', {
      value: jest.fn(),
    });

    document.dispatchEvent(event);
    expect(document.body.style.background).not.toBe('');
    expect(document.body.style.background).toContain('linear-gradient');
  });
});
