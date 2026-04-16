import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 w-[85%] mx-auto shadow rounded-xl my-6">
      
      <div className="text-center max-w-xl mx-auto">
        
        {/* 404 Number */}
        <h1 className="text-7xl md:text-8xl font-bold text-black tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-500 text-sm md:text-base leading-relaxed">
          Sorry, the page you're looking for doesn't exist or may have been moved. 
          Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link href="/">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 font-medium w-full sm:w-auto">
              Back to Home
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default NotFound;