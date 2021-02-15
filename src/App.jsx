import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Container } from "react-bootstrap";
import LoadingBtn from "./components/LoadingBtn";
import TextArea from "./components/TextArea";

import "bootstrap/dist/css/bootstrap.min.css";

import { letterInput } from "./store/actions/letterInput";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      dispatch(letterInput(e));
    });
    window.addEventListener("keydown", function (e) {
      if (e.keyCode === 32 && e.target == document.body) {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <header className="py-3">
          <strong>test your typing speed</strong>
        </header>
        <LoadingBtn />
        <TextArea />
        <footer className="mt-5 text-center">
          <p>&copy; all copyright reserved</p>
        </footer>
      </Container>
    </div>
  );
};

export default App;
