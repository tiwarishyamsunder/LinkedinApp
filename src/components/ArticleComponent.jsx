import React from "react";
import "../Sass/HomeComponent.scss";
import Article from "./common/Article";

export default function ArticleComponent({currentUser}) {
  return (
    <div className="home-component">
      <Article currentUser={currentUser}/>
    </div>
  );
}