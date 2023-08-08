import React from "react";
import { faker } from "@faker-js/faker";

const data = new Array(1000).fill().map((value, index) => ({
  id: index,
  title: faker.lorem.words(5),
  body: faker.lorem.sentences(4),
}));

const LargeListRow = ({ item: { id, title, body } }) => (
  <div className="post">
    <h3>
      {title} - {id}
    </h3>
    <p>{body}</p>
  </div>
);

function LargeList() {
  return data.map((item) => <LargeListRow item={item} key={item.id} />);
}

export default LargeList;
