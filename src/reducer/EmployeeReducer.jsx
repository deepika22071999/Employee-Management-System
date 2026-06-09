export const employeeReducer = (state, action) => {

  switch (action.type) {

    case "ADD_EMPLOYEE":
      return [...state, action.payload];

    case "DELETE_EMPLOYEE":
      return state.filter(
        (employee) => employee.id !== action.payload
      );

    default:
      return state;
  }

};