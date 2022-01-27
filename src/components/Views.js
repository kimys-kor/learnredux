import React, { useState } from "react";
import { connect } from "react-redux";
import { addView } from "../redux";

const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="items">
      <p>조회 수: {count}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => addView(number)}>조회하기!</button>
    </div>
  );
};

const mapStateToProps = ({ viewsReducer }) => {
  return {
    count: viewsReducer.count,
  };
};

const mapDispatchToProps = {
  addView: (number) => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
