import React from "react";

// inline style for now
export const List = ({ lists, onDelete, onEdit }) => {
  const date = () => {
    let date = new Date();
    return JSON.stringify(date);
  };

  return (
    lists &&
    lists.map((list) => (
      <div key={list.articleTitle}>
        <label>
          <strong>Title </strong>
        </label>
        {list.articleTitle}
        <div>
          <label>Content</label> <p>{list.articleContent}</p>
        </div>

        <div>{date()}</div>
        <div>
          <button onClick={() => onEdit(list)}>Edit</button>
          <button onClick={() => onDelete(list)}>Delete</button>
        </div>
      </div>
    ))
  );
};
