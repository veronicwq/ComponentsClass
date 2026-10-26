import React, { Component } from "react";
import "./TaskList.css"; 

class TaskList extends Component {
  tasks = [
    { id: 1, text: "Вивчити основи React" },
    { id: 2, text: "Створити класовий компонент" },
    { id: 3, text: "Зробити додавання та видалення завдань" },
  ];

  
  handleAddTask = (event) => {
    event.preventDefault();
    const input = event.target.elements.taskInput;
    const text = input.value.trim();

    if (!text) return;

    const newTask = {
      id: Date.now(), 
      text: text,
    };

    
    this.tasks.push(newTask);
    input.value = "";

  
    this.forceUpdate();
  };
  
  handleDeleteTask = (id) => {
    
    this.tasks = this.tasks.filter((task) => task.id !== id);

    
    this.forceUpdate();
  };

  render() {
    return (
      <div className="task-container">
        <h2>Список завдань</h2>

        
        <form onSubmit={this.handleAddTask} className="task-form">
          <input
            type="text"
            name="taskInput"
            placeholder="Введіть нове завдання..."
            className="task-input"
          />
          <button type="submit" className="add-btn">
            Додати
          </button>
        </form>

        {/* Список завдань */}
        <ul className="task-list">
          {this.tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className="task-text">{task.text}</span>
              <button
                onClick={() => this.handleDeleteTask(task.id)}
                className="delete-btn"
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
