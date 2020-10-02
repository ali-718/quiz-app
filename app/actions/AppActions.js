export const EnterLocation = (location) => (dispatch) => {
  dispatch({ type: "LOCATION", payload: location });
};

export const EnterUser = (location) => (dispatch) => {
  dispatch({ type: "USER", payload: location });
};

export const StartAgain = () => (dispatch) => {
  dispatch({ type: "START_AGAIN" });
};

export const fillMarks = (marks) => (dispatch) => {
  dispatch({ type: "MARKS", payload: marks });
};
