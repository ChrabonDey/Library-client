
import img from "../../assets/luxury-reading-material-illuminates-old-fashioned-elegance-indoors-generated-by-ai.jpg"; // Replace with your own library image

const Banner = () => {
  return (
    <div
      className="relative min-h-[85vh] bg-cover bg-center rounded-2xl flex items-center justify-center mx-10 my-10"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>

      {/* Main Text */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
          Welcome to LibrarySys 📚
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-12">
          Discover, Borrow, and Read Anytime
        </h2>
      </div>

      {/* Bottom Text Strip */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-20">
        <div className="bg-white font-serif text-blue-800 rounded-xl shadow-md text-lg text-center py-4 px-6">
          Your Minimal Library Management Solution — Easy & Efficient
        </div>
      </div>
    </div>
  );
};

export default Banner;
