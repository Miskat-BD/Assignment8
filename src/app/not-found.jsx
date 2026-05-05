import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-6xl font-bold text-purple-600">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <button className="mt-6 btn bg-gradient-to-r from-[#9514FA] to-[#4F39F6] text-white">
          ⬅ Back to Home
        </button>
      </Link>

    </div>
  );
};

export default NotFound;