import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import UpButton from "./components/UpButton/UpButton";
import { CSSTransition } from "react-transition-group";
import popTransition from "./transitions/pop.module.css";

class App extends Component {
  state = {
    isUpButton: false,
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

  render() {
    const { isUpButton } = this.state;
    return (
      <div>
        <Header />
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
