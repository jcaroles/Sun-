import React, { Fragment, useState } from "react";
import { List } from "./List";

export const Article = () => {
  const [article, setArticle] = useState({
    articleTitle: "",
    articleContent: "",
  });
  const [list, setList] = useState({
    currentArticle: "",
    article: [],
  });
  const [editList, setEditList] = useState({});

  const onDelete = (article) => {
    list.article.map((deleteArticle, index) => {
      if (deleteArticle.articleTitle === article.articleTitle) {
        list.article.splice(index);
        setList({ ...list, currentArticle: "" });
      }

      return list;
    });
  };

  const onEdit = (article) => {
    setArticle({ ...article });
    console.log("EDIT LIST", article);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    let trackingData = {
      articleTitle: evt.target[0].value,
      articleContent: evt.target[1].value,
    };
    list.article.push({ ...trackingData });
    setList({ ...list, currentArticle: article });
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter Article"
          onChange={(evt) => setArticle({ articleTitle: evt.target.value })}
          value={
            editList?.articleTitle
              ? editList.articleTitle
              : article.articleTitle
          }
        ></input>

        <input
          type="text"
          placeholder="Article Content"
          onChange={(evt) => setArticle({ articleContent: evt.target.value })}
          value={
            editList?.articleContent
              ? editList.articleContent
              : article.articleContent
          }
        ></input>

        <button>Submit</button>
      </form>

      <List lists={list.article} onDelete={onDelete} onEdit={onEdit}></List>
    </Fragment>
  );
};
