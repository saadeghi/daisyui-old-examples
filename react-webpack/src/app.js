import React from "react";

const App = (props) => {
  return (
    <div>
      <div className="bg-base-100 p-10 text-base-content">
        <button className="btn">button</button>
        <button className="btn btn-primary">button</button>
        <button className="btn btn-secondary">button</button>
        <button className="btn btn-accent">button</button>
      </div>

      <div className="bg-base-100 p-10 text-base-content" data-theme="garden">
        <button className="btn">button</button>
        <button className="btn btn-primary">button</button>
        <button className="btn btn-secondary">button</button>
        <button className="btn btn-accent">button</button>
      </div>

      <div className="bg-base-100 p-10 text-base-content" data-theme="forest">
        <button className="btn">button</button>
        <button className="btn btn-primary">button</button>
        <button className="btn btn-secondary">button</button>
        <button className="btn btn-accent">button</button>
      </div>
    </div>
  );
};
export default App;
