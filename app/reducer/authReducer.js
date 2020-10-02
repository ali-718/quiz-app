const initialState = {
  user: {},
  location: "",
  correctAnswer: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "MARKS":
      return {
        ...state,
        correctAnswer: payload,
      };
    case "LOCATION":
      return {
        ...state,
        location: payload,
      };
    case "START_AGAIN":
      return {
        ...state,
        user: {},
        correctAnswer: 0,
      };
    case "USER":
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
}
