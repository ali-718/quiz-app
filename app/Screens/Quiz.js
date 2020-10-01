import { Icon } from "native-base";
import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeColor, Green } from "../Config";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";

export default class Quiz extends Component {
  state = {
    currentQuestion: 1,
    selectedAnswer: "",
    data1: [
      {
        question: "What is your name ?",
        answers: [
          {
            id: 1,
            ans: "Ali Haider is it",
          },
          {
            id: 2,
            ans: "Ali Haider is it",
          },
          {
            id: 3,
            ans: "Ali Haider is it",
          },
          {
            id: 4,
            ans: "Ali Haider is it",
          },
        ],
        correctAnswer: 3,
      },
      {
        question: "What is your name ?",
        answers: [
          {
            id: 1,
            ans: "Ali Haider is it",
          },
          {
            id: 2,
            ans: "Ali Haider is it",
          },
          {
            id: 3,
            ans: "Ali Haider is it",
          },
          {
            id: 4,
            ans: "Ali Haider is it",
          },
        ],
        correctAnswer: 3,
      },
      {
        question: "What is your name ?",
        answers: [
          {
            id: 1,
            ans: "Ali Haider is it",
          },
          {
            id: 2,
            ans: "Ali Haider is it",
          },
          {
            id: 3,
            ans: "Ali Haider is it",
          },
          {
            id: 4,
            ans: "Ali Haider is it",
          },
        ],
        correctAnswer: 3,
      },
    ],
  };

  selectAnswer = (id) => {
    this.setState({ selectedAnswer: id });
  };

  nextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      selectedAnswer: "",
    });
    this.view.bounceOutLeft(800).then((endstate) => {
      this.view.pulse(800);
    });
    this.view2.bounceOutLeft(1000).then((endstate) => {
      this.view2.pulse(800);
    });
    this.view3.bounceOutLeft(1200).then((endstate) => {
      this.view3.pulse(800);
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
              <Text style={{ color: Green, fontWeight: "bold", fontSize: 18 }}>
                {this.state.data1[this.state.currentQuestion - 1].question}
              </Text>

              <View style={{ width: "100%", marginTop: 20 }}>
                {this.state.data1[this.state.currentQuestion - 1].answers.map(
                  (item, i) => (
                    <TouchableOpacity
                      onPress={() => this.selectAnswer(item.id)}
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
                      }}
                    >
                      <Text
                        style={{
                          color:
                            this.state.selectedAnswer == item.id
                              ? "white"
                              : Green,
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
        </SafeAreaView>
      </View>
    );
  }
}
