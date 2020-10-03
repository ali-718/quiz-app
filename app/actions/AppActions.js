import Axios from "axios";

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

export const submitQuiz = (name, phone, quizName, score, location) => (
  dispatch
) =>
  new Promise((resolve, reject) => {
    console.log(name);
    console.log(phone);
    console.log(quizName);
    console.log(score);
    console.log(location);
    Axios.post(
      `http://phpstack-482842-1520149.cloudwaysapps.com/api/submit/quiz`,
      {
        user_name: name,
        phone: phone,
        quiz_name: quizName,
        score: score,
        location: location,
      }
    ).then((res) => {
      resolve(true);
      console.log(res.data);
    });
  });
