const initialState = {
  user: {},
  location: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOCATION":
      return {
        ...state,
        location: payload,
      };
    case "START_AGAIN":
      return {
        ...state,
        user: {},
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
