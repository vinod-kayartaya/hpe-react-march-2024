import React, { Component } from 'react';

export default class TaskOps extends Component {
  render() {
    // const deleteFinishedTasks = this.props.deleteFinishedTasks;
    // const deleteAllTasks = this.props.deleteAllTasks;
    // const toggleTaskStatus = this.props.toggleTaskStatus;

    const { deleteAllTasks, deleteFinishedTasks, toggleTaskStatus } =
      this.props;

    return (
      <>
        <button onClick={deleteFinishedTasks} className='btn btn-danger me-2'>
          Delete finished tasks
        </button>

        <button onClick={deleteAllTasks} className='btn btn-danger me-2'>
          Delete all tasks
        </button>

        <button onClick={toggleTaskStatus} className='btn btn-danger me-2'>
          Swap task status
        </button>
      </>
    );
  }
}
