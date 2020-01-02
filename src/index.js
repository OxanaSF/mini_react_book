import React from 'react'
import ReactDom from 'react-dom'
import './index.css';

function Books(){
  return (
    <section className="books">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    </section>
  );
}

const Book = () => {
  return (
  <article className="book">
  <CoverImage />
  <Title />
  <Author />

  </article>
  );
 };

const CoverImage = () => <img width="200" src="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg" alt="michelle obama"/>

const Title = () => <h1>Becoming</h1>;
const Author = () => <h4> by Michelle Obama</h4>;

ReactDom.render(<Books/>,document.getElementById('root'));
