import React from "react";
import { faker } from "@faker-js/faker";
import { FixedSizeList as List } from "react-window";

const data = new Array(10000).fill().map((value, index) => ({
  id: index,
  title: faker.lorem.words(5),
  body: faker.lorem.sentences(4),
}));

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;
const FakerRow = ({ index, style }) => (
  <div key={data[index].id} style={style}>
    <div className="post">
      <h3>{`${data[index].title} - ${data[index].id}`}</h3>
      <p>{data[index].body}</p>
    </div>
  </div>
);

function Window() {
  return (
    <List height={600} itemCount={data.length} itemSize={120} width={1000}>
      {FakerRow}
    </List>
  );
}

export default Window;
