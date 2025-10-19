document.addEventListener('DOMContentLoaded', function () {
  // Counter functionality
  let count = 0;
  const countDisplay = document.getElementById('count');
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');

  function updateCounter() {
    countDisplay.textContent = count;
    countDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
      countDisplay.style.transform = 'scale(1)';
    }, 150);
  }

  decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
  });

  increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
  });

  // Todo functionality
  const todoInput = document.getElementById('todoInput');
  const addTodoBtn = document.getElementById('addTodo');
  const todoList = document.getElementById('todoList');

  function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
        `;
    return li;
  }

  function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') {
      todoInput.style.borderColor = '#ff6b6b';
      setTimeout(() => {
        todoInput.style.borderColor = '#ddd';
      }, 1000);
      return;
    }

    const todoItem = createTodoItem(text);
    todoList.appendChild(todoItem);
    todoInput.value = '';

    // Animation
    todoItem.style.opacity = '0';
    todoItem.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      todoItem.style.transition = 'all 0.3s ease';
      todoItem.style.opacity = '1';
      todoItem.style.transform = 'translateY(0)';
    }, 10);
  }

  // Global function for delete (accessed from onclick)
  window.deleteTodo = function (button) {
    const todoItem = button.parentElement;
    todoItem.style.transition = 'all 0.3s ease';
    todoItem.style.opacity = '0';
    todoItem.style.transform = 'translateX(100px)';
    setTimeout(() => {
      todoItem.remove();
    }, 300);
  };

  addTodoBtn.addEventListener('click', addTodo);

  todoInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });

  // Color changer functionality
  const randomColorBtn = document.getElementById('randomColor');
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #ff8a80 0%, #ffb74d 100%)',
    'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)',
  ];

  randomColorBtn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;

    // Button animation
    randomColorBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      randomColorBtn.style.transform = 'scale(1)';
    }, 150);
  });

  // Welcome animation
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    setTimeout(
      () => {
        section.style.transition = 'all 0.6s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      },
      index * 200 + 500
    );
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
      case '=':
      case '+':
        e.preventDefault();
        count++;
        updateCounter();
        break;
      case '-':
        e.preventDefault();
        count--;
        updateCounter();
        break;
      case 'r': {
        e.preventDefault();
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = randomColor;
        break;
      }
      }
    }
  });

  console.log('Practice App loaded! 🚀');
  console.log('Keyboard shortcuts:');
  console.log('- Ctrl/Cmd + Plus: Increase counter');
  console.log('- Ctrl/Cmd + Minus: Decrease counter');
  console.log('- Ctrl/Cmd + R: Random color');
});
