import React from "react";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x250",
    description: "Herbal Face Pack for Glowing Skin",
    price: 999,
    rating: "★★★★☆",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x250",
    description: "Ayurvedic Hair Oil for Hair Fall",
    price: 599,
    rating: "★★★☆☆",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x250",
    description: "Immunity Booster Capsules",
    price: 799,
    rating: "★★★★★",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x250",
    description: "Digestive Churna",
    price: 299,
    rating: "★★★☆☆",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x250",
    description: "Skin Care Herbal Soap",
    price: 199,
    rating: "★★★★☆",
  },
];

function Home() {
  return (
    <div className=" bg-amber-50 max-w-screen py-10 text-green-800">
      <div className="max-w-7xl mx-auto p-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold  mb-6">
          Summer Collection
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.description}
                className="w-full h-64 object-cover"
              />

              <div className="p-4 space-y-2">
                <p className="">{product.description}</p>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold ">
                    ₹{product.price}
                  </h3>

                  <div className="flex items-center space-x-3">
                    <span className=" text-sm">
                      {product.rating}
                    </span>
                    <button className="w-8 h-8 bg-green-700 hover:bg-green-900 text-white rounded-full text-lg font-bold flex items-center justify-center transition">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between rounded-lg  max-w-6xl mx-auto my-12">
        {/* Text Section */}
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-3xl font-bold ">
            Download Amrutam Ayurveda
          </h2>
          <h3 className="text-xl font-medium  mt-2">App Now</h3>
          <p className=" mt-4">
            Explore Ayurvedic treatments, shop natural products, book doctor
            consultations, and more — all in one app.
          </p>
          <div className="mt-6 flex space-x-4">
            {/* Replace with real download links */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Download on Play Store"
              className="h-12 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg"
              alt="Download on App Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/300x500?text=App+Screenshot"
            alt="Amrutam App Preview"
            className="rounded-lg shadow-lg max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
