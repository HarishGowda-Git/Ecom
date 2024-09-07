import React, { useState, useEffect } from 'react';

const Items = ({ type }) => {
  const [style, setStyle] = useState(type); // Initialize with the 'type' prop

  // Use useEffect to update the style when 'type' changes
  useEffect(() => {
    setStyle(type);
  }, [type]); // Only run when 'type' changes

  // Conditional rendering based on the 'style' state
  if (style === 'mens') {
    return <div className="mens">Mens</div>;
  } else if (style === 'womens') {
    return <div className="womens">Womens</div>;
  } else if (style === 'kids') {
    return <div className="kids">Kids</div>;
  } else if (style === 'summer') {
    return <div className="summer">Summer</div>;
  } else {
    return <div className="winter">Winter</div>;
  }
};

export default Items;
