import React from 'react';

function Recommendation({ book }) {
  return (
    <div className="quote-container" style={{ backgroundColor: 'beige', textAlign: 'center' }}>
      <h2>좋아하는 책</h2>
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  );
}

export default Recommendation;