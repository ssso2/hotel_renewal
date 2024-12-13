import React from 'react';

const Introduction = ({ title, description, highlights, additionalInfo }) => {
  // description 문자열에서 줄바꿈(\n)을 <br /> 태그로 변환
  const formattedDescription = description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="Introduction">
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p className="txt">{formattedDescription}</p>}
      {highlights &&
        highlights.map((highlight, index) => (
          <React.Fragment key={index}>
            <strong>{highlight.title}</strong>
            <p className="txt small">{highlight.text}</p>
          </React.Fragment>
        ))}
      {additionalInfo && <div className="additional-info">{additionalInfo}</div>}
    </div>
  );
};

export default Introduction;
