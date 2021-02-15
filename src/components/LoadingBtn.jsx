import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { loadText } from "../store/actions/textLoading";

const LoadingBtn = () => {
  const dispatch = useDispatch();
  const ClickHandler = (e) => {
    e.target.blur();
    dispatch(loadText());
  };
  return (
    <Button className="my-4 bg-lightGray" onClick={ClickHandler}>
      Load Text
    </Button>
  );
};

export default LoadingBtn;
