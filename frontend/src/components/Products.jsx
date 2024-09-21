import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
const Products = ({category}) => {
 
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const res = await fetch(`/itemslist?category=${category}`);
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.log('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]); // Dependency on category prop

  if (loading) {
    return <p>Loading...</p>; // Show loading while fetching data
  }

  if (items.length === 0) {
    return <p>No items found for this category.</p>; // If no items for the selected category
  }

  return (
    <>
    <div className='products'>
        {items.map((item) => (
        <div key={item.id} className="product-container">
          <img src={item.image} alt={item.name} width={200} />
          <h2>{item.name}</h2>
          <p>Product Description</p>
          <span>Rs {item.price} /-</span><br />
          <Button id='cartadd' label='Add to Cart' />
         <Link to='/details'><Button id='view' label='View' /></Link>
        </div>
      ))}
    </div>
    {/* <div className="product-overlay">
      <div className="product-container">
        <div className="product-content">
          
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Products;
