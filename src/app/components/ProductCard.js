// src/app/components/ProductCard.js
import styles from '../../styles/Product.module.css';

const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{product.title}</h3>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="font-semibold text-xl text-blue-500">${product.price}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  