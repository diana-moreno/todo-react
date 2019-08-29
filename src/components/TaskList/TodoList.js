import React, { Component } from 'react';
import TodoTask from '../../components/TodoTask/TodoTask';
import NewTask from '../../components/NewTask/NewTask';
import PropTypes from 'prop-types';

class TodoList extends Component {
  state = { visibleNewTask: false }

  toggleClick = () => {
    this.setState({
      visibleNewTask: this.state.visibleNewTask ? false : true
    })
  }
  render() {

    return(
      <div className='card'>
        <div className='card-body m-4'>
          <h2 className='mb-4 word-nowrap text-center title'>TO DO</h2>

            <i className="fas fa-plus orange"
               onClick={() => this.toggleClick()}
            >
              <h4 className='d-inline new-task-add-message orange'>Add new task</h4>
            </i>

          {this.state.visibleNewTask &&
          <NewTask
            addTask={this.props.addTask}
            toggleClick={this.toggleClick}
          />}

          {this.props.TodoTasks.map(task =>
            <TodoTask
              key={task.id}
              task={task}
              deleteTask={this.props.deleteTask}
              doneTask={this.props.doneTask}
            />
          )}
        </div>
      </div>
    );
  }
}

TodoList.propTypes = {
  deleteTask : PropTypes.func.isRequired,
  doneTask : PropTypes.func.isRequired,
  addTask : PropTypes.func.isRequired,
  TodoTasks: PropTypes.array.isRequired
}

export default TodoList;