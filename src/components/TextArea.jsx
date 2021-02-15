import React from "react";
import { useSelector } from "react-redux";

import { Spinner, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

import Stats from "./Stats";
const TextArea = () => {
  const { loading, text, error } = useSelector((state) => state.testText);
  const { letterIndex, error: letterError } = useSelector((state) => state.letterInput);

  return (
    <>
      {loading ? (
        <Spinner animation="border" className="color-info d-block m-auto" />
      ) : error ? (
        <div className="bg-danger rounded p-2 my-2">Error Again</div>
      ) : (
        text && (
          <Row className="bg-lightGray m-auto rounded">
            <Col md={8} className="bg-lightGray rounded">
              <div className="bg-lightGray py-2 px-3 m-0">
                {text.substr(0, letterIndex)}
                <span
                  className={`d-inline-block py-1 px-1 mr-1 rounded h-100 spanLetter ${
                    letterError ? "bg-litered" : "bg-litegreen"
                  }`}
                >
                  {text[letterIndex]}
                </span>
                {text.substr(letterIndex + 1, text.length + 1)}
              </div>
            </Col>
            <Col md={4} className="bg-lightGray py-2 px-3 rounded m-0">
              <Stats />
            </Col>
          </Row>
        )
      )}
    </>
  );
};

export default TextArea;
