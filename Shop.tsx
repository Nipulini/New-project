import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Shop.css';  // Corrected path for the CSS file

// Define valid categories type
type Category = 'tops' | 'dresses' | 'skirts' | 'trousers';

const Shop = () => {
  // Get category from URL parameter and assert that it will be of type Category
  const { category } = useParams<{ category: Category }>(); // Type assertion to Category

  // Check if category is valid and fetch items accordingly
  const items = category ? getItemsByCategory(category) : [];

  return (
    <div className="shop-container">
      <h1>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Collection'}</h1>
      <div className="shop-items">
        {items.map((item, index) => (
          <div className="shop-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Fetch items based on the category
const getItemsByCategory = (category: Category) => {
  const allItems = {
    tops: [
      { name: 'Floral Top', image: '/images/floral-top.jpg', price: '$25' },
      { name: 'T-shirt', image: '/images/tshirt.jpg', price: '$15' },
    ],
    dresses: [
      { name: 'Evening Dress', image: '/images/evening-dress.jpg', price: '$50' },
      { name: 'Summer Dress', image: '/images/summer-dress.jpg', price: '$30' },
    ],
    skirts: [
      { name: 'A-line Skirt', image: '/images/aline-skirt.jpg', price: '$20' },
      { name: 'Pencil Skirt', image: '/images/pencil-skirt.jpg', price: '$25' },
    ],
    trousers: [
      { name: 'Jeans', image: '/images/jeans.jpg', price: '$35' },
      { name: 'Chinos', image: '/images/chinos.jpg', price: '$40' },
    ],
  };

  return allItems[category] || [];
};

export default Shop;
