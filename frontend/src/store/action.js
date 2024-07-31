export const setProjects = (projects) => {
    return {
      type: "ALL_PROJECTS",
      payload: projects,
    };
  };
  
  export const setAlltask = (tasks) => {
    return {
      type: "ALL_TASKS",
      payload: tasks,
    };
  };

  export const nonfilteredTask = (tasks) => {
    return {
      type: "NON_FILTERED_TASK",
      payload: tasks,
    };
};

export const dasboardbuttonstatus= (status) => {
    return {
      type: "DASHBOARD_STATUS",
      payload: status,
    };
};

 export const allTaskCalender = (tasks) => {
        return {
          type: "ALL_TASK_CALENDER",
          payload: tasks,
        }
    };

  export const nonfilteredTaskCalender = (tasks) => {
        return {
          type: "NON_FILTERED_TASK_CALENDER",
          payload: tasks,
        }
    };

    export const setActiveslide = (slideIndex) => {
        return {
          type: "ACTIVE_SLIDE",
          payload: slideIndex,
        }
    };

    export const statusCalender = (calstatus) => {
        return {
          type: "CALENDER_STATUS",
          payload: calstatus,
        }
    };
