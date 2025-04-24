'use client';

import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';

const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home', 'Toys'];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-xl font-medium">
        Loading products...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl font-medium">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-6 border-r border-gray-200 min-h-screen">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left p-2 rounded transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Product Listings</h1>
          {filteredProducts.length === 0 ? (
            <p>No products found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
