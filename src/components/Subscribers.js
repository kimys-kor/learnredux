import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux";

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <p>구독자 수: {count}</p>
      <button onClick={() => addSubscriber()}>구독하기!</button>
    </div>
  );
};

const mapStateToProps = ({ subscribersReducer }) => {
  return {
    count: subscribersReducer.count,
  };
};

const mapDispatchToProps = {
  addSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
