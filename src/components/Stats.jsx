import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Stats = () => {
  const { letterIndex, error, accuracy, startTime } = useSelector((state) => state.letterInput);

  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (error || letterIndex >= 1) {
        setTime(Date.now());
      }
    }, 1000);
  }, []);

  console.log(time);
  return (
    <ListGroup>
      <ListGroupItem className="bg-lightGray">
        <div className="d-flex justify-content-center align-items-center bg-lightGray d-inline ">
          <i class="fas fa-bullseye bg-lightGray" />
          <span className="bg-lightGray pl-2">{" " + accuracy.toFixed(2)} %</span>
        </div>
      </ListGroupItem>
      <ListGroupItem className="bg-lightGray">
        <div className="d-flex justify-content-center align-items-center bg-lightGray d-inline ">
          <i class="fas fa-tachometer-alt bg-lightGray" />
          <span className="bg-lightGray pl-2">
            {startTime ? Math.ceil((60 * 1000 * letterIndex) / (time - startTime)) : "--"} CPM
          </span>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Stats;
