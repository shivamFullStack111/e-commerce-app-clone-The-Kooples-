import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.344 1.348M7 13h10l4-8H5.344L4 3H2m5 10v5a2 2 0 002 2h6a2 2 0 002-2v-5M5 21h14"/>
            </svg>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-4">Add items to your cart to view them here.</p>
            <Link to={'/products'} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
