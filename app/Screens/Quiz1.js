import { Icon } from "native-base";
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
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
import { StartAgain, fillMarks, submitQuiz } from "../actions/AppActions";
import { connect } from "react-redux";

class Quiz extends Component {
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
            ans: "المانيا",
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
      {
        question: "من هو اسرع عداء في العالم ؟​",
        answers: [
          {
            id: 1,
            ans: "جيسي أوينز",
          },
          {
            id: 2,
            ans: "يوسان بولت",
          },
          {
            id: 3,
            ans: "تايسون جاي",
          },
          {
            id: 4,
            ans: "تومي سميث​",
          },
        ],
        correctAnswer: 2,
      },
      {
        question: "من هو اكثر لاعب حائز علي القاب عالمية في التنس؟​",
        answers: [
          {
            id: 1,
            ans: "رافائل نادال",
          },
          {
            id: 2,
            ans: "روجر فيدرير",
          },
          {
            id: 3,
            ans: "نوفاك دجوجوفيتش",
          },
          {
            id: 4,
            ans: "تومي سميثبيت سامبرس",
          },
        ],
        correctAnswer: 4,
      },
      {
        question:
          "من هو اكثر الاعبين تحقيقا للألقاب في دوري كرة السلة للمحترفين الامريكيNBA؟​",
        answers: [
          {
            id: 1,
            ans: "ليبرون جيمس",
          },
          {
            id: 2,
            ans: "كريم عبد الجبار",
          },
          {
            id: 3,
            ans: "كوبي براينت",
          },
          {
            id: 4,
            ans: "مايكل جوردون​",
          },
        ],
        correctAnswer: 4,
      },
      {
        question: "اكثر دولة حائزة علي كأس العالم لكرة اليد؟​",
        answers: [
          {
            id: 1,
            ans: "فرنسا",
          },
          {
            id: 2,
            ans: "السويد",
          },
          {
            id: 3,
            ans: "روسيا",
          },
          {
            id: 4,
            ans: "الدنمارك",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "أي من الاعاب الاتية ليست لعبة اولمبية؟​",
        answers: [
          {
            id: 1,
            ans: "كرة اليد",
          },
          {
            id: 2,
            ans: "كرة السلة",
          },
          {
            id: 3,
            ans: "التنس",
          },
          {
            id: 4,
            ans: "الاسكواش",
          },
        ],
        correctAnswer: 4,
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
    const auth = this.props.auth;
    this.props.fillMarks(this.state.correctAnswers);
    this.props
      .submitQuiz(
        auth.user?.name,
        auth.user?.mobile,
        "فن",
        this.state.correctAnswers,
        auth.location
      )
      .catch((e) => {
        Alert.alert(
          "Error",
          "unable to submit quiz, kindly check your internet connection",
          [
            {
              text: "cancel",
            },
            {
              text: "retry",
              onPress: () => this.finishQuiz(),
            },
          ]
        );
      });
  };

  componentDidMount() {
    this.props.navigation.addListener("focus", () => {
      this.shuffle(this.state.data1);
    });
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    this.setState({
      data1: a,
    });
  };

  render() {
    return (
      <ImageBackground
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: Green,
          paddingTop: StatusBar.currentHeight,
        }}
        source={require("../../assets/quizBackground.jpg")}
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
                  fontSize: Dimensions.get("window").width > 600 ? 53 : 30,
                  color: "white",
                }}
              >
                Your score is
              </Text>
              <Text
                style={{
                  fontSize: Dimensions.get("window").width > 600 ? 50 : 28,
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
                  fontSize: Dimensions.get("window").width > 600 ? 53 : 22,
                  color: "white",
                  marginTop: 20,
                  textAlign: "right",
                }}
              >
                {(this.state.correctAnswers / 5) * 100 > 50
                  ? "شكلك متابع للرياضة جامد"
                  : "معلوماتك الرياضية مش قد كدة"}
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
                    fontSize: Dimensions.get("window").width > 600 ? 35 : 18,
                    color: "white",
                    textAlign: "right",
                    paddingRight: 10,
                  }}
                >
                  في سيتي كلوب يوجد اكادميات عالمية يوجد أكاديميات في كلاً من
                  الرياضات الآتيه:​
                </Text>
              </View>
              <View
                style={{ width: "100%", alignItems: "center", marginTop: 20 }}
              >
                <Text
                  style={{
                    fontSize: Dimensions.get("window").width > 600 ? 35 : 18,
                    color: "white",
                    textAlign: "right",
                    paddingRight: 10,
                  }}
                >
                  كرة القدم​ كره السلة​ كره اليد​ كره الطائرة​ تنس​ سباحة​
                  الفنون القتالية​
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
                  fontSize: Dimensions.get("window").width > 600 ? 30 : 18,
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
                    fontSize: Dimensions.get("window").width > 600 ? 22 : 16,
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
                            Dimensions.get("window").width > 600 ? 22 : 16,
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

          {/* <View
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
          </View> */}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default connect(MapStateToProps, { StartAgain, fillMarks, submitQuiz })(
  Quiz
);
