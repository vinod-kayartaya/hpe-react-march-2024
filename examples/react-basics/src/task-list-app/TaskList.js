import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleStatus, setTaskToEdit }) => {
  return (
    <>
      <h3>Here are the tasks:</h3>
      <div className='list-group'>
        {tasks.map((t) => (
          <Task
            key={t.id}
            task={t}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
            setTaskToEdit={setTaskToEdit}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
