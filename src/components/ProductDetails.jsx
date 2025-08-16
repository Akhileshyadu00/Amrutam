import React from 'react';
import { useParams, Link } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/400x250",
//     description: "Herbal Face Pack for Glowing Skin",
//     price: 999,
//     rating: 4,
//     details: "Natural herbs that rejuvenate and enhance your skin's glow.",
//     highlights: "Made with multani mitti and sandalwood for natural brightness.",
//     keyPoints: [
//       "100% Ayurvedic ingredients",
//       "No harmful chemicals",
//       "Dermatologically tested",
//       "For all skin types"
//     ],
//     usage: "Apply on clean face, leave for 15 mins, rinse with lukewarm water.",
//     instructions: [
//       "Store in a cool, dry place",
//       "Avoid contact with eyes",
//       "Keep out of reach of children"
//     ],
//     ingredients: ["Multani Mitti", "Sandalwood", "Rose Water", "Turmeric"],
//   },
//   // ... other products remain unchanged
// ];

const products = [
  {
    id: 1,
    image: "https://t4.ftcdn.net/jpg/16/37/33/71/240_F_1637337105_hzwFQaCjEYRRZu3124rv7CZy6uXitRml.jpg",
    description: "Herbal Face Pack for Glowing Skin",
    price: 999,
    rating: 4,
    details: "Natural herbs that rejuvenate and enhance your skin's glow.",
    highlights: "Made with multani mitti and sandalwood for natural brightness.",
    keyPoints: [
      "100% Ayurvedic ingredients",
      "No harmful chemicals",
      "Dermatologically tested",
      "For all skin types"
    ],
    usage: "Apply on clean face, leave for 15 mins, rinse with lukewarm water.",
    instructions: [
      "Store in a cool, dry place",
      "Avoid contact with eyes",
      "Keep out of reach of children"
    ],
    ingredients: ["Multani Mitti", "Sandalwood", "Rose Water", "Turmeric"],
  },
  {
    id: 2,
    image: "https://t3.ftcdn.net/jpg/15/75/73/34/240_F_1575733431_svOQjfXRCNLicRXv8BcCMGCdYcDjM1uv.jpg",
    description: "Ayurvedic Hair Oil for Hair Fall",
    price: 599,
    rating: 3,
    details: "Strengthens hair roots and prevents hair fall with traditional herbs.",
    highlights: "Infused with Bhringraj and Amla for deep nourishment.",
    keyPoints: [
      "Promotes hair growth",
      "Improves scalp health",
      "Free from sulfates and parabens"
    ],
    usage: "Massage into scalp twice a week before washing hair.",
    instructions: [
      "Do a patch test before use",
      "Store away from direct sunlight"
    ],
    ingredients: ["Bhringraj", "Amla", "Coconut Oil", "Neem"],
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x250",
    description: "Immunity Booster Capsules",
    price: 799,
    rating: 5,
    details: "Boost your immune system with these powerful herbal supplements.",
    highlights: "With Giloy, Tulsi, and Ashwagandha extracts.",
    keyPoints: [
      "Improves overall immunity",
      "Reduces fatigue",
      "Natural and safe for daily use"
    ],
    usage: "Take 1 capsule twice daily after meals or as directed.",
    instructions: [
      "Not recommended for children below 12 years",
      "Consult doctor during pregnancy"
    ],
    ingredients: ["Giloy", "Tulsi", "Ashwagandha", "Triphala"],
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x250",
    description: "Digestive Churna",
    price: 299,
    rating: 3,
    details: "Improves digestion and relieves bloating with a blend of herbs.",
    highlights: "Contains Hing, Ajwain, and Jeera for quick relief.",
    keyPoints: [
      "Supports gut health",
      "Non-habit forming",
      "Fast acting formula"
    ],
    usage: "Take 1 tsp after meals with warm water.",
    instructions: [
      "Avoid overdose",
      "Keep bottle tightly closed"
    ],
    ingredients: ["Hing", "Ajwain", "Jeera", "Saunf"],
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x250",
    description: "Skin Care Herbal Soap",
    price: 199,
    rating: 4,
    details: "Mild and moisturizing soap made from natural herbs.",
    highlights: "Enriched with neem and aloe vera for skin protection.",
    keyPoints: [
      "Cleanses gently",
      "No artificial fragrance",
      "Suitable for daily use"
    ],
    usage: "Apply on wet skin, lather, and rinse thoroughly.",
    instructions: [
      "Store in a dry soap dish",
      "Avoid direct contact with eyes"
    ],
    ingredients: ["Neem", "Aloe Vera", "Tulsi", "Coconut Oil"],
  },
];


function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6 text-center text-red-600">
        Product not found. <Link to="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6">
        
        {/* Left: Image */}
        <div className="flex justify-center items-start">
          <img
            src={product.image}
            alt={product.description}
            className="w-full max-w-sm rounded-md object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-between space-y-6">
          {/* Basic Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{product.description}</h1>
            <p className="text-gray-600 mt-3">{product.details}</p>
            <p className="text-xl text-green-700 mt-4 font-semibold">₹{product.price}</p>
            <p className="text-yellow-500 text-lg mt-1">
              {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
            </p>
            <button className="mt-6 w-full md:w-48 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md transition">
              Add to Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className="space-y-6 pt-6 border-t border-gray-200">
            {/* Product Highlights */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">Product Highlights</h2>
              <p className="text-gray-600 text-sm">{product.highlights}</p>
            </div>

            {/* Ingredients */}
            {/* <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Ingredients</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div> */}


<div>
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Ingredients</h3>
  <ul className="list-disc list-inside text-gray-700">
    {product.ingredients.map((item, index) => (
      <li key={index}>
        <Link to={`/ingredient/${encodeURIComponent(item)}`} className="text-blue-600 hover:underline">
          {item}
        </Link>
      </li>
    ))}
  </ul>
</div>

            {/* Key Highlights */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">Key Highlights</h2>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {product.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">How to Use</h2>
              <p className="text-gray-600 text-sm">{product.usage}</p>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">General Instructions</h2>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {product.instructions.map((instruction, idx) => (
                  <li key={idx}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
