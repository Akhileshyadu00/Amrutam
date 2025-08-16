import { Link } from "react-router-dom";


function StarRating({ rating }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className=" rounded-lg  overflow-hidden hover:shadow-lg transition-transform hover:scale-[1.02]">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.description}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 space-y-2">
          <p className="font-medium">{product.description}</p>
        </div>
      </Link>

      <div className="px-4 pb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">₹{product.price}</h3>

        <div className="flex items-center space-x-3">
          <StarRating rating={product.rating} />
          <Link to={`/product/${product.id}`}>
          <button className="w-8 h-8 bg-green-700 hover:bg-green-900 text-white rounded-full text-lg font-bold flex items-center justify-center transition">
            +
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
