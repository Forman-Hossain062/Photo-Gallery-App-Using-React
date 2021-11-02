import React, { Component } from "react";
import Body from "./body/body";
// import Footer from "../Components/footer/footer";
import Header from "./header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./Auth/Auth";
import Logout from "../Components/Auth/Logout";
import { connect } from "react-redux";
import { authCheck } from "../redux/authActionCreators";
import Breakfast from "./body/Catagories/Breakfast/Breakfast";
import Lunch from "./body/Catagories/Lunch/Lunch";
import Shakes from "./body/Catagories/Shakes/Shakes";

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    token: state.dishes.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authCheck: () => dispatch(authCheck()),
  };
};
class MainComponents extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.authCheck();
  }
  render() {
    // console.log(this.props);
    let links = null;
    if (this.props.token === null) {
      links = (
        <Switch>
          <Route path="/login" exact component={Auth} />
          <Route path="/" exact component={Body} />
          <Route path="/breakfast" exact component={Breakfast} />
          <Route path="/lunch" exact component={Lunch} />
          <Route path="/shakes" exact component={Shakes} />
          <Redirect to="/login" />
        </Switch>
      );
    } else {
      links = (
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/breakfast" exact component={Breakfast} />
          <Route path="/lunch" exact component={Lunch} />
          <Route path="/shakes" exact component={Shakes} />
          <Route path="/logout" exact component={Logout} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div
        style={{
          backgroundColor: "#E8F6EF",
          minHeight: "100vh",
        }}
      >
        <Header />
        <span> {links}</span>

        {/* <Footer /> */}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponents);
