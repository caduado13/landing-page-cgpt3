import React from 'react';
import "./article.css";


const Article = ({imgUrl, date, text}) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-image'>
        <img src= {imgUrl} alt="blog"/>  
      </div>  
      <div className='gpt3__blog-container__article-content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read full article</p>
      </div>
        
    </div>
  )
}

export default Article
