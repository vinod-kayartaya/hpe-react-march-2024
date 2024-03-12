import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleStatus, setTaskToEdit }) => {
  const tasksJsx = tasks.map((t) => (
    <Task
      key={t.id}
      task={t}
      toggleStatus={toggleStatus}
      deleteTask={deleteTask}
      setTaskToEdit={setTaskToEdit}
    />
  ));

  return (
    <>
      <h3>Here are the tasks:</h3>
      <div className='list-group'>{tasksJsx}</div>
    </>
  );
};

export default TaskList;
