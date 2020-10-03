import { Icon } from "native-base";
import React, { Component } from "react";
import {
  Alert,
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
        question: "من هو المطرب صاحب لقب الهضبة؟​",
        answers: [
          {
            id: 1,
            ans: "عمرو دياب",
          },
          {
            id: 2,
            ans: "محمد منير",
          },
          {
            id: 3,
            ans: "كاظم الساهر",
          },
          {
            id: 4,
            ans: "محمد فؤاد",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "من من الاتي في فريف تحكيم the voice kids arabic؟​​",
        answers: [
          {
            id: 1,
            ans: "اليسا ",
          },
          {
            id: 2,
            ans: "نانسي عجرم ",
          },
          {
            id: 3,
            ans: "شيرين عبد الوهاب",
          },
          {
            id: 4,
            ans: "هيفاء وهبي​",
          },
        ],
        correctAnswer: 2,
      },
      {
        question: "من هو مطرب أغنية “أهواك واتمنى لو أنساك”؟",
        answers: [
          {
            id: 1,
            ans: "عبد الحليم حافظ",
          },
          {
            id: 2,
            ans: "ام كلثوم",
          },
          {
            id: 3,
            ans: "سيد درويش",
          },
          {
            id: 4,
            ans: "شادية",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "البوم حدوتة مصرية يعود إلى من من المطربين؟",
        answers: [
          {
            id: 1,
            ans: "محمد منير",
          },
          {
            id: 2,
            ans: "محمد فؤاد",
          },
          {
            id: 3,
            ans: "هاني شاكر",
          },
          {
            id: 4,
            ans: "محرم فؤاد​",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "من هو الموسيقار صاحب لقب “موسيقار الأجيال”؟​",
        answers: [
          {
            id: 1,
            ans: "عبد الوهاب",
          },
          {
            id: 2,
            ans: "عبد الغني السيد",
          },
          {
            id: 3,
            ans: "علي الحجار",
          },
          {
            id: 4,
            ans: "احمد عدويه ",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "من هو المطرب صاحب لقب الكينج؟​",
        answers: [
          {
            id: 1,
            ans: "محمد منير",
          },
          {
            id: 2,
            ans: "محمد حماقي",
          },
          {
            id: 3,
            ans: "محرم فؤاد",
          },
          {
            id: 4,
            ans: "محمد فؤاد",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "من هو المطرب زوج المطربة شيرين عبد الوهاب؟",
        answers: [
          {
            id: 1,
            ans: "حسام حبيب",
          },
          {
            id: 2,
            ans: " محمد حماقي",
          },
          {
            id: 3,
            ans: "رامي صبري",
          },
          {
            id: 4,
            ans: "رامي عشور​",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "ما هي جنسية المطرب النجم صابر الرباعي؟",
        answers: [
          {
            id: 1,
            ans: "لبناني",
          },
          {
            id: 2,
            ans: "تونسي ",
          },
          {
            id: 3,
            ans: "مغربي ",
          },
          {
            id: 4,
            ans: "مصري",
          },
        ],
        correctAnswer: 2,
      },
      {
        question: "من هو ابن الفنانة اللبنانية فيروز؟",
        answers: [
          {
            id: 1,
            ans: "صابر الرباعي",
          },
          {
            id: 2,
            ans: "غير معروف",
          },
          {
            id: 3,
            ans: "زياد الرحباني",
          },
          {
            id: 4,
            ans: "وائل كفوري",
          },
        ],
        correctAnswer: 3,
      },
      {
        question: "متى ولد الفنان الشاب خالد؟",
        answers: [
          {
            id: 1,
            ans: "1970",
          },
          {
            id: 2,
            ans: "1960",
          },
          {
            id: 3,
            ans: "1978",
          },
          {
            id: 4,
            ans: "1695",
          },
        ],
        correctAnswer: 2,
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
                  ? "شكلك متابع للفن جامد"
                  : "معلوماتك الفنية مش قد كدة"}
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
                  في سيتي كلوب يوجد مسرح يقام حفلات هولوغرام كل شهر في منطقة
                  المسرح حيث يمكن للأعضاء الاستماع ومشاهدة مغنيهم المفضل من
                  العصور القديمة و الحديثة
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
                    fontSize: Dimensions.get("window").width > 600 ? 22 : 14,
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
                            Dimensions.get("window").width > 600 ? 22 : 14,
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
          {/* 
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
          </View> */}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default connect(MapStateToProps, { StartAgain, fillMarks, submitQuiz })(
  Quiz
);
