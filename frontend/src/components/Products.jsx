import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
const Products = ({category}) => {
 
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [visible, setvisible] = useState(false);
  const [temp, settemp] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    status:''
  });

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
  const visi =() =>{
    setvisible(!visible);
    
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
          <Button id='view' label='View' onClick={()=>{
              settemp({
                name:item.name,
                price:item.price,
                image:item.image,
                status:"active"
              })
              visi();
            }
          }/>
        </div>
      ))}
    </div>
    {visible?
      <>
       <div className="product-overlay"></div>
       <div className="detail-container">
         <img src={temp.image} alt="" width={500} />
         <div className="product-content">
            <h2>{temp.name}</h2>
         </div>
       </div>
       </>
      :""
    }

    </>
  );
};

export default Products;
