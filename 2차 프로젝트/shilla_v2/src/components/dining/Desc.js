import React from 'react';

const Desc = ({ propDesc }) => {
  return (
    <div className="desc-wrap">
      {propDesc.map((desc, index) => (
        <p className="desc" key={index}>
          {desc}
        </p>
      ))}
    </div>
  );
};

export default Desc;