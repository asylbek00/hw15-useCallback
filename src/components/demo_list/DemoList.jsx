import React from "react";

const DemoList = () => {
  console.log("demolist");
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default React.memo(DemoList); // когда stste изменяется весь проект будет ререндер это нам не нужен