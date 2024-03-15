import React from 'react';

const Box = ({ children, color = 'black' }) => {
  return (
    <>
      <div
        style={{
          border: `2px solid ${color}`,
          padding: '20px',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Box;
