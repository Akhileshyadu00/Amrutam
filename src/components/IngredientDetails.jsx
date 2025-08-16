import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample ingredient data
const ingredientData = {
  Turmeric: {
    description: "Turmeric (Curcuma longa) is a potent Ayurvedic spice with anti-inflammatory and antioxidant properties.",
    benefits: [
      "Reduces inflammation",
      "Improves digestion",
      "Promotes skin clarity"
    ],
  },
  Ashwagandha: {
    description: "Ashwagandha is a revered adaptogen that helps reduce stress, enhance energy, and support cognitive function.",
    benefits: [
      "Reduces stress",
      "Boosts brain function",
      "Supports vitality"
    ],
  },
  Neem: {
    description: "Neem is known for its antibacterial, anti-inflammatory, and detoxifying properties.",
    benefits: [
      "Purifies skin",
      "Supports oral health",
      "Boosts immunity"
    ],
  },
};

// Sample product data
const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x250",
    description: "Herbal Face Pack for Glowing Skin",
    price: 999,
    ingredients: ["Multani Mitti", "Sandalwood", "Rose Water", "Turmeric"],
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x250",
    description: "Ayurvedic Hair Oil for Hair Fall",
    price: 599,
    ingredients: ["Bhringraj", "Amla", "Coconut Oil", "Neem"],
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x250",
    description: "Immunity Booster Capsules",
    price: 799,
    ingredients: ["Giloy", "Tulsi", "Ashwagandha", "Triphala"],
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x250",
    description: "Skin Care Herbal Soap",
    price: 199,
    ingredients: ["Neem", "Aloe Vera", "Tulsi", "Coconut Oil"],
  },
];

function IngredientDetails() {
  const { name } = useParams();
  const info = ingredientData[name];
  const relatedProducts = products.filter(product => product.ingredients.includes(name));

  if (!info) {
    return (
      <div className="p-6 bg-amber-50 text-center text-red-600">
        Ingredient not found. <Link to="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT SIDE — Ingredient Details */}
        <div className="md:col-span-1  p-6 ">
          <img
            src={`https://via.placeholder.com/400x200?text=${encodeURIComponent(name)}`}
            alt={`${name}`}
            className="w-full rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-gray-600">{info.description}</p>

          <h2 className="text-lg font-semibold text-gray-800 mt-6">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            {info.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>

          <Link to="/" className="text-blue-600 mt-6 inline-block">← Back to Home</Link>
        </div>

        {/* RIGHT SIDE — Related Products */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Products with <span className="text-green-700">{name}</span>
          </h2>

          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-md shadow-md overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.description}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.description}</h3>
                    <p className="text-green-700 font-medium mt-1">₹{product.price}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="inline-block mt-4 bg-green-700 hover:bg-green-800 text-white py-1 px-4 rounded-md"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No products found using this ingredient.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
