
import bgImage from "../../assets/abundant-collection-antique-books-wooden-shelves-generated-by-ai.jpg"; // Replace with a more library-related background if needed

const BecomePartnerSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-end"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-left text-white px-6 md:px-12">
        <h2 className="text-3xl font-[cursive] text-white md:text-4xl font-bold mb-4">
          Become a Library Partner
        </h2>
        <p className="mb-6 text-sm md:text-base leading-relaxed">
          We believe in the power of collaboration to expand access to
          knowledge. If you're a publisher, bookstore, educational institute, or
          community organization, we invite you to partner with us.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
          <li>Contribute books or digital content</li>
          <li>Host author talks and reading events</li>
          <li>Support student and community learning programs</li>
        </ul>
        <p className="mt-4 text-sm md:text-base">
          📚 Together, we can build a stronger and more informed community.
        </p>
      </div>
    </div>
  );
};

export default BecomePartnerSection;
