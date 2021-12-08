import * as React from "react";
import axios from "axios";
import moment from "moment";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";

const sw = Dimensions.get("window").width;
const sh = Dimensions.get("window").height;
const test = false;
interface killer {
  navigation: any;
}
interface Ss {
  apidata: [];
  searchtxt: any;
  issearch: boolean;
  searchdata: [];
  createDate: any;
}
export default class First extends React.Component<killer, Ss, {}> {
  constructor(props: killer) {
    super(props);
    this.state = {
      apidata: [],
      searchtxt: "",
      issearch: false,
      createDate: "",
      searchdata: [],
    };
  }

  componentDidMount = () => {
    this.getdata();
  };
  componentWillUnmount = () => {
    this.getdata();
  };

  getdata = () => {
    axios
      .get("https://api.github.com/repos/facebook/react/issues")
      .then((response) => {
        this.setState({ apidata: response.data });
      });
  };
  formatdate = (date: any) => {
    let Sdate = String(date);
    return moment(Sdate, "YYYYMMDD").fromNow();
  };
  fectordata = (item: any) => {
    if (item == "Type: Bug") {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#fd9b9d",
            borderRadius: 15,
            alignItems: "center",
            width: sw * 0.2,
            marginTop: 5,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#fd9b9d", fontSize: 12, fontWeight: "500" }}>
            {item}
          </Text>
        </View>
      );
    }
    if (item == "Component: Developer Tools") {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#fac905",
            borderRadius: 15,
            alignItems: "center",
            width: sw * 0.45,
            marginTop: 5,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#fac905", fontSize: 12, fontWeight: "500" }}>
            {item}
          </Text>
        </View>
      );
    }
    if (item == "Status: Unconfirmed") {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#d2c3f9",
            borderRadius: 15,
            alignItems: "center",
            width: sw * 0.45,
            marginTop: 5,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#d2c3f9", fontSize: 12, fontWeight: "500" }}>
            {item}
          </Text>
        </View>
      );
    }
    if (item == "Type: Discussion") {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#97BFB4",
            borderRadius: 15,
            alignItems: "center",
            width: sw * 0.3,
            marginTop: 5,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#97BFB4", fontSize: 12, fontWeight: "500" }}>
            {item}
          </Text>
        </View>
      );
    }
    if (item == "React 18") {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#F0BB62",
            borderRadius: 15,
            alignItems: "center",
            width: sw * 0.3,
            marginTop: 5,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#F0BB62", fontSize: 12, fontWeight: "500" }}>
            {item}
          </Text>
        </View>
      );
    }
    if (item == "CLA Signed") {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#009DAE",
            borderRadius: 15,
            alignItems: "center",
            width: sw * 0.3,
            marginTop: 5,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#009DAE", fontSize: 12, fontWeight: "500" }}>
            {item}
          </Text>
        </View>
      );
    }
    if (item == "React Core Team") {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E6CCA9",
            borderRadius: 15,
            alignItems: "center",
            width: sw * 0.3,
            marginTop: 5,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#E6CCA9", fontSize: 12, fontWeight: "500" }}>
            {item}
          </Text>
        </View>
      );
    }
    if (item == "Component: DOM") {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#AE4CCF",
            borderRadius: 15,
            alignItems: "center",
            width: sw * 0.3,
            marginTop: 5,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#AE4CCF", fontSize: 12, fontWeight: "500" }}>
            {item}
          </Text>
        </View>
      );
    }
  };

  // renderData = (item: any) => {
  //   return (
    
  //   );
  // };

  onChangeInput = () => {
    let val = this.state.searchtxt;
    let tit = this.state.apidata;
    let newsearch: any = [];

    tit.map((dt: any) => {
      if (dt.title.match(val)) {
        newsearch.push(dt);
      } else {
      }
    });

    this.setState({ issearch: true, searchdata: newsearch });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 2, backgroundColor: "#131212" }}>
        <View style={{ marginTop: sh * 0.05 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              testID="Title"
              style={{ color: "#58a6ff", fontWeight: "500", fontSize: 20 }}
              

            >
              facebook / react
            </Text>
          </View>
          
          
        </View>

        <View style={{ marginTop: sh * 0.1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TextInput
              testID="txt_search"
              style={{
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 5,
                height: sh * 0.04,
                paddingLeft: 15,
                padding: 10,
                color: "#fff",
              }}
              autoCorrect={false}
              autoCapitalize="none"              
              placeholder="is:issue is:open "
              placeholderTextColor="grey"
              onChangeText={(val) => this.setState({ searchtxt: val })}
              value={this.state.searchtxt}
            />
          </View>

          <View
            style={{
              flex: 0.2,
              marginLeft: 5,
              borderWidth: 1,
              borderColor: "#fff",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              testID="btn_search"
              style={{ justifyContent: "center" }}
              onPress={() => this.onChangeInput()}
            >
              <Text 
              
              style={{ color: "#fff" }}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#fff",
            margin: 15,
            marginTop: sh * 0.05,
            borderRadius: 10,
            marginBottom: 200,
          }}
        >
          {this.state.issearch ? (
            <FlatList
              testID="flt_data_search"
              data={this.state.searchdata}
              renderItem={({ item }:any) => (
                <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#fff",
                  paddingTop: 10,
                  paddingBottom: 20,
                  paddingLeft: 15,
                  paddingRight: 10,
                  borderRadius: 5,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                  testID="btn_navigate"
                    onPress={() =>
                      this.props.navigation.navigate("Second", { id: item.number })
                    }
                    style={{ color: "#fff", paddingRight: 45 }}
                  >
                    {item.title}
                  </Text>
                </View>
        
                <View style={{ marginLeft: 40 }}>
                  <View
                    style={{ justifyContent: "space-between", flexDirection: "row" }}
                  >
                    {item.labels[0] ? this.fectordata(item.labels[0].name) : null}
                    {item.labels[1] ? this.fectordata(item.labels[1].name) : null}
                  </View>
                  <View
                    style={{ justifyContent: "space-between", flexDirection: "row" }}
                  >
                    {item.labels[2] ? this.fectordata(item.labels[2].name) : null}
                    {item.labels[3] ? this.fectordata(item.labels[3].name) : null}
                  </View>
                </View>
                <View style={{ marginLeft: 40, marginTop: 10, flexDirection: "row" }}>
                  <Text style={{ color: "#fff" }}>#{item.number} opened</Text>
                  <Text style={{ color: "#fff", marginLeft: 10 }}>
                    {this.formatdate(item.created_at)}
                  </Text>
                  <Text style={{ color: "#fff", marginLeft: 10 }}>
                    by {item.user.login}
                  </Text>
                </View>
              </View>
              )}
            />
          ) : (
            <FlatList
              testID="flt_data"
              data={this.state.apidata}
              renderItem={({ item }:any) => (
                <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#fff",
                  paddingTop: 10,
                  paddingBottom: 20,
                  paddingLeft: 15,
                  paddingRight: 10,
                  borderRadius: 5,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                  testID="btn_navigate"
                    onPress={() =>
                      this.props.navigation.navigate("Second", { id: item.number })
                    }
                    style={{ color: "#fff", paddingRight: 45 }}
                  >
                    {item.title}
                  </Text>
                </View>
        
                <View style={{ marginLeft: 40 }}>
                  <View
                    style={{ justifyContent: "space-between", flexDirection: "row" }}
                  >
                    {item.labels[0] ? this.fectordata(item.labels[0].name) : null}
                    {item.labels[1] ? this.fectordata(item.labels[1].name) : null}
                  </View>
                  <View
                    style={{ justifyContent: "space-between", flexDirection: "row" }}
                  >
                    {item.labels[2] ? this.fectordata(item.labels[2].name) : null}
                    {item.labels[3] ? this.fectordata(item.labels[3].name) : null}
                  </View>
                </View>
                <View style={{ marginLeft: 40, marginTop: 10, flexDirection: "row" }}>
                  <Text style={{ color: "#fff" }}>#{item.number} opened</Text>
                  <Text style={{ color: "#fff", marginLeft: 10 }}>
                    {this.formatdate(item.created_at)}
                  </Text>
                  <Text style={{ color: "#fff", marginLeft: 10 }}>
                    by {item.user.login}
                  </Text>
                </View>
              </View>
              )}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}
