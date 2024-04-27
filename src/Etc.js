import React from 'react';
import './Etc.css'; 

function Etc({ exp, period }) {
  return (
    <div className="etc_container ">
      <p className="etc-text">{exp}</p>
      <p className = "etc-period">{period}</p>
    </div>
  );
}

export default Etc;
