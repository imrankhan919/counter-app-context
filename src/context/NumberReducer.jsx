const NumberReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER":
      return {
        ...state,
        number: state.number + 1,
      };

    case "DECREASE_NUMBER":
      return {
        ...state,
        number: state.number - 1,
      };

    case "CHECK_EVEN":
      return {
        ...state,
        evenNumber: action.payload,
      };
  }
};

export default NumberReducer;
