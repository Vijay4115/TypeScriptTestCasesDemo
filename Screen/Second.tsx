import axios from "axios";
import * as React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import moment from "moment";
import { Icon } from "react-native-material-ui";

const sw = Dimensions.get("window").width;
const sh = Dimensions.get("window").height;
interface killer {
  navigation: any;
  route: any;
}
interface Ss {
  api_data: any[];
  title: any;
  id: string;
  state: string;
  opendate: any;
  username: string;
  userimg: string;
  labels: [];
  body:any;
}
export default class Second extends React.Component<killer, Ss, {}> {
  constructor(props: killer) {
    super(props);
    this.state = {
      api_data: [],
      title: "",
      id: "",
      state: "",
      opendate: "",
      username: "",
      userimg: "https://avatars.githubusercontent.com/u/2286579?v=4",
      labels: [],
      body:'',
    };
  }
  getdata = () => {
    if (this.props.route.params.id) {
      this.setState({ id: this.props.route.params.id });

      let str =
        "https://api.github.com/repos/facebook/react/issues/" +
        this.props.route.params.id;
      

      axios.get(str).then((res) => {
        this.setState({
          api_data: res.data,
          title: res.data.title,
          state: res.data.state,
          opendate: res.data.created_at,
          username: res.data.user.login,
          userimg: res.data.user.avatar_url,
          labels: res.data.labels,
          body:res.data.body
        });
        // console.log(res.data.labels);
      });
    } else {
    }
  };
  formatdate = (date: any) => {
    let Sdate = String(date);
    return moment(Sdate, "YYYYMMDD").fromNow();
  };
  componentDidMount() {
    this.getdata();
  }

  renderData = (item: any) => {
    

    return (
      

        <View style={{ marginLeft: 40 }}>
       
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            {item.name
              ? this.fectordata(item.name)
              : console.log()}
            {item.name
              ? console.log()
              : console.log()}
          </View>
        </View>

      
    );
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

  render() {
    return (
     
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "#131212", }}
        >
        <TouchableOpacity style={{marginLeft:20}}
        onPress={()=>this.props.navigation.goBack()}
        >
            <Text style={{color:'#fff'}}> Go Back</Text>
            </TouchableOpacity>
          <View style={{ marginTop: sh * 0.08, margin: 15 }}>
            <Text style={{ color: "#c9d1d9", margin: 10, fontWeight: "500" }}>
              {this.state.title}{" "}
              <Text style={{ color: "#8b949e" }}>#{this.state.id}</Text>
            </Text>
          </View>
          <View style={{ marginLeft: 15, marginRight: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "green",
                  borderWidth: 1,
                  borderRadius: 25,
                  alignItems: "center",
                  padding: 8,
                  flexDirection: "row",
                }}
              >
                <Icon name="album" color="#fff" style={{ marginRight: 2 }} />
                <Text style={{ color: "#fff", fontWeight: "700" }}>
                  {this.state.state}
                </Text>
              </View>

              <View>
                <Text style={{ color: "#fff", marginLeft: 10 }}>
                  <Text style={{ fontWeight: "700" }}>
                    {this.state.username}{" "}
                  </Text>
                  Opened This issue {this.formatdate(this.state.opendate)}
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: this.state.userimg }}
                style={{
                  height: sh * 0.04,
                  width: sw * 0.08,
                  borderRadius: 150,
                }}
                
              />
              <Text
                style={{ color: "#fff", marginLeft: 10, fontWeight: "700" }}
              >
                {this.state.username}{" "}
              </Text>
            </View>
              
              <View style={{paddingBottom:20}}>
             <FlatList
              data={this.state.labels}
              renderItem={({ item }) => this.renderData(item)}
              
            />
            </View>
           
           <ScrollView
            
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#8b949e",
                marginTop: 25,
                marginBottom: sh*0.38,
                paddingLeft:5,
                paddingRight:5
              }}
            >
                <Text style={{color:'#fff'}}>{this.state.body}</Text>
            
        </ScrollView>
          </View>
        </SafeAreaView>
     
    );
  }
}
