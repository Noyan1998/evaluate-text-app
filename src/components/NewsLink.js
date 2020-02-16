import React from 'react';

const NewsLink = ({ onInputChange, onSubmit }) => {
  return(
    <div className='tc ma3 pa3 br5 shadow-10'>
      <input className='f5 pa2 w-80' type='text' onChange={onInputChange} />
      <button className='f5 pa2 w-20 grow pointer bg-yellow' onClick={onSubmit}>Evaluate</button>
    </div>
  );
}

export default NewsLink;
