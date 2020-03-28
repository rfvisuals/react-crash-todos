import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: 'Take Out the Trash',
      completed: false
      },
      {
      id: 2,
      title: 'Dinner with Wife',
      completed: false
      },
      {
      id: 3,
      title: 'Meeting with Boss',
      completed: false
      },
    ]
  }

markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

render() {
  console.log(this.state.todos)
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete}/>
    </div>
    );
  }
}

export default App;
