export const filterTasks = (tasks, status) => {
    if (status === 'inprogress') {
        return tasks.filter(task => task.Status === status);
    }
  
    else if (status === 'completed') {
        return tasks.filter(task => task.Status === status);
    }
    
    else{
        return tasks
    }

  };