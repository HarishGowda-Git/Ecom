import React, { useState, useEffect } from 'react';
import Products from './Products';
const Items = ({ type }) => {
  const [style, setStyle] = useState(type); // Initialize with the 'type' prop

  // Use useEffect to update the style when 'type' changes
  useEffect(() => {
    setStyle(type);
  }, [type]); // Only run when 'type' changes

  // Conditional rendering based on the 'style' state
  if (style === 'mens') {
    return <div className="mens"><Products category="men" /></div>;
  } else if (style === 'womens') {
    return <div className="womens"><Products category="women" /></div>;
  } else if (style === 'kids') {
    return <div className="kids"><Products category="kids" /></div>;
  } else if (style === 'summer') {
    return <div className="summer"><Products category="summer" /></div>;
  } else {
    return <div className="winter"><Products category="winter" /></div>;
  }
};

export default Items;
