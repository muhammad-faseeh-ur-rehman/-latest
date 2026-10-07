import { useEffect, useState } from "react";

const Carts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => setCarts(data.carts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Carts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="border rounded-lg p-5 shadow-md bg-white"
          >
            <h3 className="text-xl font-bold mb-2">
              Cart #{cart.id}
            </h3>

            <p className="text-gray-600 mb-1">
              User ID: {cart.userId}
            </p>

            <p className="text-gray-600 mb-1">
              Total Products: {cart.totalProducts}
            </p>

            <p className="text-gray-600 mb-1">
              Total Quantity: {cart.totalQuantity}
            </p>

            <p className="font-bold text-lg mb-4">
              Total: ${cart.total}
            </p>

            <div className="space-y-3">
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 border-t pt-3"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div>
                    <h4 className="font-semibold">
                      {product.title}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Price: ${product.price}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {product.quantity}
                    </p>

                    <p className="text-sm text-gray-500">
                      Discount: {product.discountPercentage}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;