import { Icon } from "native-base";
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeColor, Green, Yellow, MapStateToProps } from "../Config";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";
import { StartAgain, fillMarks } from "../actions/AppActions";
import { connect } from "react-redux";

class Quiz extends Component {
  state = {
    currentQuestion: 1,
    selectedAnswer: "",
    quizFinished: false,
    data1: [
      {
        question: "متي تم اطلاق جهاز بلاي ستيشن 4",
        answers: [
          {
            id: 1,
            ans: "2014",
          },
          {
            id: 2,
            ans: "2013",
          },
          {
            id: 3,
            ans: "2012",
          },
          {
            id: 4,
            ans: "2011",
          },
        ],
        correctAnswer: 2,
      },
      {
        question: "من الاعبان الذين ظهروا علي غلاف فيفا 2020",
        answers: [
          {
            id: 1,
            ans: "فيرجل فان دايك و ادين هازارد",
          },
          {
            id: 2,
            ans: "ميسي و كرسيانو روناالدو",
          },
          {
            id: 3,
            ans: "دي صورة دراع",
          },
          {
            id: 4,
            ans: "كلين مبابي و سيرجو اجويرو​",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "متي اطلقت لعبة Fortnite",
        answers: [
          {
            id: 1,
            ans: "2016",
          },
          {
            id: 2,
            ans: "2017",
          },
          {
            id: 3,
            ans: "2018",
          },
          {
            id: 4,
            ans: "2019",
          },
        ],
        correctAnswer: 2,
      },
      {
        question: "متي اطلقت لعبة فورتنايت؟",
        answers: [
          {
            id: 1,
            ans: "2017",
          },
          {
            id: 2,
            ans: "2016",
          },
          {
            id: 3,
            ans: "2015",
          },
          {
            id: 4,
            ans: "2014",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "من هو بطل فيفا بلاي ستيشن سنة 2019؟​",
        answers: [
          {
            id: 1,
            ans: "محمد حركوس",
          },
          {
            id: 2,
            ans: "مساعد الدوسري",
          },
          {
            id: 3,
            ans: "سبينسر ايلينج",
          },
          {
            id: 4,
            ans: "محمد الباشا",
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
    this.props.navigation.navigate("home");
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
    this.props.fillMarks(this.state.correctAnswers);
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
            }}
          >
            <View
              style={{ width: "100%", alignItems: "center", marginTop: 10 }}
            >
              <Text
                style={{
                  fontSize: Dimensions.get("window").width > 400 ? 53 : 33,
                  color: "white",
                }}
              >
                Your score is
              </Text>
              <Text
                style={{
                  fontSize: Dimensions.get("window").width > 400 ? 50 : 30,
                  marginTop: 10,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                100 /{" "}
                <Text style={{ color: Yellow }}>
                  {" "}
                  {(this.state.correctAnswers / 5) * 100}
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get("window").width > 400 ? 53 : 25,
                  color: "white",
                  marginTop: 20,
                  textAlign: "right",
                }}
              >
                {(this.state.correctAnswers / 5) * 100 > 50
                  ? "شكلك جيمر جامد"
                  : "شكلك ملكش في الجيمز اوي"}
              </Text>
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
                style={{ width: "100%", alignItems: "center", marginTop: 20 }}
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
                style={{ width: "100%", alignItems: "center", marginTop: 20 }}
              >
                <Text
                  style={{
                    fontSize: Dimensions.get("window").width > 400 ? 35 : 20,
                    color: "white",
                    textAlign: "right",
                    paddingRight: 10,
                  }}
                >
                  في سيتي كلوب يوجد مركز المرأة يوفر المبنى كل إحتياجات المرأة
                  بدءا من جيم - منتجع صحي - مركز تجميل – كوافير - عيادات نسائية
                  -متاجر مستحضرات التجميل​
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
                onPress={() => {
                  this.props.StartAgain();
                  this.resetQuiz();
                }}
              >
                <Text style={{ color: Green, fontWeight: "bold" }}>
                  اعادة تشغيل
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
        <SafeAreaView style={{ width: "100%", flex: 1 }}>
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                width: 70,
                padding: 15,
                backgroundColor: "white",
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
                alignItems: "flex-end",
                marginTop: 10,
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
              <Text
                style={{
                  color: "white",
                  fontSize: Dimensions.get("window").width > 400 ? 22 : 18,
                }}
              >
                Question {this.state.currentQuestion} / 5
              </Text>
              <View style={{ width: "100%", marginTop: 10 }}>
                <Progress.Bar
                  progress={this.state.currentQuestion / 5}
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
                    fontSize: Dimensions.get("window").width > 400 ? 22 : 18,
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
                          fontSize:
                            Dimensions.get("window").width > 400 ? 22 : 18,
                        }}
                      >
                        {item.ans}
                      </Text>
                    </TouchableOpacity>
                  )
                )}

                {this.state.currentQuestion < 5 &&
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
                      <Text style={{ color: "white" }}>التالى</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}

                {this.state.currentQuestion == 5 &&
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
                      <Text style={{ color: "white" }}>انتهاء</Text>
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

export default connect(MapStateToProps, { StartAgain, fillMarks })(Quiz);
