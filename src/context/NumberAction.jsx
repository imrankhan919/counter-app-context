export const increaseNumber = () => {
  return "INCREASE_NUMBER";
};

export const decreaseNumber = () => {
  dispatch({
    type: "DECREASE_NUMBER",
  });
};

export const checkEven = (num) => {
  return num;
};
