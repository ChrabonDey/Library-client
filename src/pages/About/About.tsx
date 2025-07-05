
import image1 from "../../assets/abundant-collection-antique-books-wooden-shelves-generated-by-ai.jpg"; // You can replace this with a library-related image

const About = () => {
  return (
    <section
      id="about-section"
      className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-16 py-16 bg-white text-black"
    >
      {/* Image Section */}
      <div className="sm:w-[564px] w-full sm:h-[646px] h-80 sm:bg-blue-400 rounded-3xl sm:border border-blue-500 relative shadow-2xl overflow-hidden">
        <img
          className="w-full h-full rounded-3xl object-cover object-center"
          src={image1}
          alt="Library System"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
        <p className="text-orange-600 font-semibold font-[cursive] text-lg lg:text-xl tracking-widest uppercase">
          About the Library System
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md">
          Simplifying Book Management for Everyone
        </h1>
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          Our Minimal Library Management System is designed to help librarians and readers easily manage book collections, borrowing, and returns.
        </p>
        <ul className="list-disc list-inside text-gray-800 text-sm lg:text-base leading-relaxed space-y-2">
          <li>
            <strong>Book Catalog:</strong> View and manage all available books in one place.
          </li>
          <li>
            <strong>Borrowing System:</strong> Seamlessly borrow books with quantity limits and return tracking.
          </li>
          <li>
            <strong>Admin Controls:</strong> Add, update, or delete books and monitor borrowing summaries.
          </li>
        </ul>
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          Whether you're a librarian or a reader, our system provides a user-friendly way to keep the library organized and efficient.
        </p>
      </div>
    </section>
  );
};

export default About;
