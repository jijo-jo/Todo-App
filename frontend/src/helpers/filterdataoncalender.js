export const filterdataoncalender = (tasks, status) => {
    if (status === 'Completed') {
        return tasks.filter(task => task.Status === 'completed');
    }
  
    else if (status === 'Not Completed') {
        return tasks.filter(task => task.Status === 'inprogress' || task.Status === 'todo');
    }
    else if (status === 'Postponed') {
        return tasks.filter(task => task.Status === 'postponed');
    }
    else if (status === 'Cancelled') {
        return tasks.filter(task => task.Status === 'cancelled');
    }
    else{
        return tasks
    }

  };