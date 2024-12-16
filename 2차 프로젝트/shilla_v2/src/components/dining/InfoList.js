import React from 'react';

const InfoList = ({ propInfo }) => {
  return (
    <ul className="info">
      {propInfo.map((item, index) => {
        const formattedContent = item.content.replace(/\n/g, '<br />');
        return (
          <li className="list" key={index}>
            <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
            <p className="txt" dangerouslySetInnerHTML={{ __html: formattedContent }} />
          </li>
        );
      })}
    </ul>
  );
};

export default InfoList;
