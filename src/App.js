import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import UpButton from "./components/UpButton/UpButton";
import SideBar from "./components/SideBar/SideBar.jsx";
import { CSSTransition } from "react-transition-group";
import popTransition from "./transitions/pop.module.css";
import slideTransition from "./transitions/slide.module.css";

class App extends Component {
  state = {
    isUpButton: false,
    isSideBar: false,
  };

  componentDidMount() {
    const options = {
      rootMargin: "200px",
    };

    const onEntry = (entries, observer) => {
      const isUpButton = entries[0].isIntersecting;
      this.setState({ isUpButton });
    };

    const elem = document.querySelector("#big_logo");
    const observer = new IntersectionObserver(onEntry, options);

    observer.observe(elem);
  }

  toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  openSideBar = (e) => {
    this.setState({ isSideBar: true });
  };

  closeSideBar = (e) => {
    this.setState({ isSideBar: false });
  };

  render() {
    const { isUpButton, isSideBar } = this.state;
    return (
      <div>
        <CSSTransition
          in={isSideBar}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <SideBar closeSideBar={this.closeSideBar} />
        </CSSTransition>
        <Header openSideBar={this.openSideBar} />
        <Body />

        <CSSTransition
          in={!isUpButton}
          timeout={250}
          classNames={popTransition}
          unmountOnExit
        >
          <UpButton onTop={this.toTop} />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
