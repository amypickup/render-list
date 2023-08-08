import React from "react";
import { faker } from "@faker-js/faker";
import { FixedSizeList as List } from "react-window";

const data = new Array(10).fill().map((value, index) => ({
  id: index,
  title: faker.lorem.words(5),
  body: faker.lorem.sentences(4),
  avatar: faker.image.avatar(),
}));

const MemoRow = ({ index, style }) => (
  <div key={data[index].id} style={style}>
    <div className="post">
      <img src={data[index].avatar} alt="avatar" height="200" />
      <div className="content">
        <h3>{`${data[index].title} - ${data[index].id}`}</h3>
        <p>{data[index].body}</p>
      </div>
    </div>
  </div>
);

function WindowMemo() {
  return (
    <List height={600} itemCount={data.length} itemSize={210} width={1032}>
      {MemoRow}
    </List>
  );
}

export default WindowMemo;
