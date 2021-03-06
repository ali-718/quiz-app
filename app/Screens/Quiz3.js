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
        question: "هل يمكن أن نجد بدائل لمستحضرات العناية داخل المنزل؟",
        answers: [
          {
            id: 1,
            ans: "نعم",
          },
          {
            id: 2,
            ans: "لا",
          },
        ],
        correctAnswer: 1,
      },
      {
        question:
          "كريم النهار أو كريم الليل هل أنتى بحاجة إلى استخدام الأثنين ؟",
        answers: [
          {
            id: 1,
            ans: "النهار",
          },
          {
            id: 2,
            ans: "الليل",
          },
          {
            id: 3,
            ans: "الاثنين",
          },
        ],
        correctAnswer: 3,
      },
      {
        question: "كم مره يجب ان يقص الشعر بالسنه؟",
        answers: [
          {
            id: 1,
            ans: "4",
          },
          {
            id: 2,
            ans: "10",
          },
          {
            id: 3,
            ans: "7",
          },
          {
            id: 4,
            ans: "2",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "كم مره يجب غسل الشعر بالشامبو بالأسبوع؟",
        answers: [
          {
            id: 1,
            ans: "2-3",
          },
          {
            id: 2,
            ans: "1-2",
          },
          {
            id: 3,
            ans: "3-4",
          },
          {
            id: 4,
            ans: "4-5",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "هل يجب وضع مرطب الوجه يوميا؟",
        answers: [
          {
            id: 1,
            ans: "نعم",
          },
          {
            id: 2,
            ans: "لا",
          },
        ],
        correctAnswer: 1,
      },
      {
        question: "هل ممكن المول يكون فيه كوافير؟",
        answers: [
          {
            id: 1,
            ans: "نعم",
          },
          {
            id: 2,
            ans: "لا",
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

    const auth = this.props.auth;
    this.props.fillMarks(this.state.correctAnswers);
    this.props
      .submitQuiz(
        auth.user?.name,
        auth.user?.mobile,
        "المرأة",
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
                  ? "برافو.. معلوماتك قوية"
                  : "لا محتاجة تذاكري شوية"}
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
