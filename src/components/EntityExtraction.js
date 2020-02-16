import React from 'react';

const EntityExtraction = () => {
  return(
    <div className="tc">
      <p className='f4 pa2 ma2'>
        text: ACME corp was founded by John Smith in Chicago<br/>
        language: en<br/>
        entities:<br/>
          location:<br/>
            Chicago

          keyword":<br/>
            John,
            corp,
            Smith,
            Chicago,
            ACME

          organization:<br/>
            ACME

          person:<br/>
            John Smith
      </p>
    </div>
  );
}

export default EntityExtraction;
