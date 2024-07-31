import { combineReducers } from "redux";

const projectReducer = ( state = [], { type, payload }) => {
    switch (type) {
      case "ALL_PROJECTS":
        state = payload
        return state;
      default:
        return state;
    }
  };
  
 const allTaskReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "ALL_TASKS":
            state = payload
            return state;
        default:
          return state;
      }
  };

  const nonfilteredTaskReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "NON_FILTERED_TASK":
            state = payload
            return state;
        default:
          return state;
      }
  };

  const dashBoardStatusReducer = (state = "mytasks", { type, payload }) => {
    switch (type) {
        case "DASHBOARD_STATUS":
            state = payload
            return state;
        default:
          return state;
      }
  };

  const allTaskCalenderReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "ALL_TASK_CALENDER":
            state = payload
            return state;
        default:
          return state;
      }
  };

  const nonfilterTaskCalenderReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "NON_FILTERED_TASK_CALENDER":
            state = payload
            return state;
        default:
          return state;
      }
  };

  const activeIndexReducer= (state = 0, { type, payload }) => {
    switch (type) {
        case "ACTIVE_SLIDE":
            state = payload
            return state;
        default:
          return state;
      }
  };

  const claenderStatusReducer = (state = "All Tasks", { type, payload }) => {
    switch (type) {
        case "CALENDER_STATUS":
            state = payload
            return state;
        default:
          return state;
      }
  };


const reducers = combineReducers({
  allProjects: projectReducer,
  allTasks: allTaskReducer,
  nonfilteredTasks:nonfilteredTaskReducer,
  allTaskscalval:allTaskCalenderReducer,
  nonfilterTaskCalender:nonfilterTaskCalenderReducer,
  activeSlide:activeIndexReducer,
  dashBoardStatus:dashBoardStatusReducer,
  calenderStat:claenderStatusReducer
});

export default reducers;