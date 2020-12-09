import * as React from "react";

export default function VocabularyCard({ item }) {
  return (
    <div className="vocabularyCard">
      <img src={item.img} />
      <span>{item.text}</span>
    </div>
  );
}
