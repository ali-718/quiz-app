import { Icon } from "native-base";
import React, { Component } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeColor, Green, Yellow } from "../Config";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";

export default class Quiz extends Component {
  state = {
    currentQuestion: 1,
    selectedAnswer: "",
    quizFinished: false,
    data1: [
      {
        question: " لأي بلد لعب أوزيل وفاز بكأس العالم 2014 FIFA في البرازيل",
        answers: [
          {
            id: 1,
            ans: "اسبانيا",
          },
          {
            id: 2,
            ans: "المانيا",
          },
          {
            id: 3,
            ans: "فرنسا",
          },
          {
            id: 4,
            ans: "إنجلترا",
          },
        ],
        correctAnswer: 2,
      },
      {
        question: "أي دولة فازت بكأس العالم 5 مرات؟​",
        answers: [
          {
            id: 1,
            ans: "البرازيل",
          },
          {
            id: 2,
            ans: "مصر",
          },
          {
            id: 3,
            ans: "تونس",
          },
          {
            id: 4,
            ans: "الجزائر",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "ما هي الدولة التي خسرت نهائي كأس العالم أكثر الأوقات؟​",
        answers: [
          {
            id: 1,
            ans: "إيطاليا",
          },
          {
            id: 2,
            ans: "المغرب",
          },
          {
            id: 3,
            ans: "تونس",
          },
          {
            id: 4,
            ans: "المانيا",
          },
        ],
        correctAnswer: 4,
      },
      {
        question:
          "في أي موسم تم تغيير اسم كأس أوروبا ليصبح دوري أبطال أوروبا؟​",
        answers: [
          {
            id: 1,
            ans: "1991–1992",
          },
          {
            id: 2,
            ans: "1992-1993",
          },
          {
            id: 3,
            ans: "1990–1991",
          },
          {
            id: 4,
            ans: "1989-1990​",
          },
        ],
        correctAnswer: 2,
      },
      {
        question: "من الفائز بكأس العالم 1998؟​",
        answers: [
          {
            id: 1,
            ans: "فرنسا",
          },
          {
            id: 2,
            ans: "المنيا",
          },
          {
            id: 3,
            ans: "إنجلترا",
          },
          {
            id: 4,
            ans: "المغرب",
          },
          {
            id: 5,
            ans: "مصر",
          },
        ],
        correctAnswer: 1,
      },
    ],
    correctAnswers: 0,
  };

  selectAnswer = (id, correctAnswer) => {
    this.setState(
      {
        selectedAnswer: id,
        correctAnswers:
          id == correctAnswer
            ? this.state.correctAnswers + 1
            : this.state.correctAnswers,
      },
      () => console.log(this.state.correctAnswers)
    );
  };

  resetQuiz = () => {
    this.setState({
      correctAnswers: 0,
      currentQuestion: 1,
      selectedAnswer: "",
      quizFinished: false,
    });
  };

  nextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      selectedAnswer: "",
    });
    this.view.fadeOutLeftBig(800).then((endstate) => {
      this.view.pulse(800);
    });
    this.view2.fadeOutLeftBig(900).then((endstate) => {
      this.view2.pulse(800);
    });
    this.view3.fadeOutLeftBig(1000).then((endstate) => {
      this.view3.pulse(800);
    });
  };

  finishQuiz = () => {
    this.setState({
      quizFinished: true,
    });
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: Green,
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <Modal visible={this.state.quizFinished} animated animationType="slide">
          <SafeAreaView
            style={{
              width: "100%",
              flex: 1,
              backgroundColor: Green,
              paddingTop: StatusBar.currentHeight,
            }}
          >
            <View
              style={{ width: "100%", alignItems: "center", marginTop: 20 }}
            >
              <Text style={{ fontSize: 33, color: "white" }}>Scorecard</Text>
            </View>

            <View
              style={{
                width: "100%",
                flex: 0.4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Animatable.View
                // animation={""}
                style={{ width: "100%", alignItems: "center", marginTop: 30 }}
              >
                <Image
                  source={require("../../assets/cup.png")}
                  style={{ width: 150, height: 150 }}
                />
              </Animatable.View>
            </View>
            <View
              style={{
                width: "100%",
                flex: 0.6,
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <View
                style={{ width: "100%", alignItems: "center", marginTop: 50 }}
              >
                <Text style={{ fontSize: 33, color: "white" }}>
                  Your score is
                </Text>
                <Text
                  style={{
                    fontSize: 30,
                    marginTop: 10,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  100 /{" "}
                  <Text style={{ color: Yellow }}>
                    {" "}
                    {(this.state.correctAnswers / this.state.data1.length) *
                      100}
                  </Text>
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  width: "80%",
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  marginTop: 30,
                }}
                onPress={this.resetQuiz}
              >
                <Text style={{ color: Green, fontWeight: "bold" }}>
                  Start Again
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
        <SafeAreaView style={{ width: "100%", flex: 1 }}>
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              style={{
                width: 70,
                padding: 15,
                backgroundColor: "white",
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
                alignItems: "flex-end",
              }}
            >
              <Icon
                name="arrowleft"
                type="AntDesign"
                style={{ color: Green }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
            <View style={{ width: "90%" }}>
              <Text style={{ color: "white", fontSize: 18 }}>
                Question {this.state.currentQuestion} /{" "}
                {this.state.data1.length}
              </Text>
              <View style={{ width: "100%", marginTop: 10 }}>
                <Progress.Bar
                  progress={
                    this.state.currentQuestion / this.state.data1.length
                  }
                  width={null}
                  color={"white"}
                />
              </View>
            </View>

            <Animatable.View
              ref={(e) => (this.view = e)}
              style={{
                width: "90%",
                borderRadius: 20,
                backgroundColor: "white",
                padding: 20,
                marginTop: 20,
              }}
            >
              <View style={{ width: "100%", alignItems: "flex-end" }}>
                <Text
                  style={{
                    color: Green,
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "right",
                  }}
                >
                  {this.state.data1[this.state.currentQuestion - 1].question}
                </Text>
              </View>

              <View style={{ width: "100%", marginTop: 20 }}>
                {this.state.data1[this.state.currentQuestion - 1].answers.map(
                  (item, i) => (
                    <TouchableOpacity
                      onPress={() =>
                        this.selectAnswer(
                          item.id,
                          this.state.data1[this.state.currentQuestion - 1]
                            .correctAnswer
                        )
                      }
                      key={i}
                      style={{
                        borderWidth: 0.5,
                        borderColor: Green,
                        borderStyle: "solid",
                        padding: 15,
                        borderRadius: 5,
                        marginTop: 20,
                        backgroundColor:
                          this.state.selectedAnswer == item.id
                            ? Green
                            : "white",
                        alignItems: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          color:
                            this.state.selectedAnswer == item.id
                              ? "white"
                              : Green,
                          textAlign: "right",
                        }}
                      >
                        {item.ans}
                      </Text>
                    </TouchableOpacity>
                  )
                )}

                {this.state.currentQuestion < this.state.data1.length &&
                this.state.selectedAnswer != "" ? (
                  <View
                    style={{
                      width: "100%",
                      marginTop: 20,
                      alignItems: "flex-end",
                    }}
                  >
                    <TouchableOpacity
                      onPress={this.nextQuestion}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 25,
                        borderRadius: 10,
                        backgroundColor: Green,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>Next</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}

                {this.state.currentQuestion == this.state.data1.length &&
                this.state.selectedAnswer != "" ? (
                  <View
                    style={{
                      width: "100%",
                      marginTop: 20,
                      alignItems: "flex-end",
                    }}
                  >
                    <TouchableOpacity
                      onPress={this.finishQuiz}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 25,
                        borderRadius: 10,
                        backgroundColor: Green,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>Finish</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            </Animatable.View>
            <Animatable.View
              ref={(e) => (this.view2 = e)}
              style={{
                width: "80%",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: "white",
                padding: 8,
                opacity: 0.5,
              }}
            ></Animatable.View>
            <Animatable.View
              ref={(e) => (this.view3 = e)}
              style={{
                width: "70%",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: "white",
                padding: 8,
                opacity: 0.3,
              }}
            ></Animatable.View>
          </View>

          <View
            style={{
              width: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/whitelogo.png")}
              style={{ width: 250, height: 110 }}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
