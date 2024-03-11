import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleStatus }) => {
  const tasksJsx = tasks.map((t) => (
    <Task
      key={t.id}
      task={t}
      toggleStatus={toggleStatus}
      deleteTask={deleteTask}
    />
  ));

  return (
    <>
      <h3>Here are the tasks:</h3>
      <div style={{ width: '300px' }} className='list-group'>
        {tasksJsx}
      </div>
    </>
  );
};

export default TaskList;
