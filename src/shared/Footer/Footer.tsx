import logo from '../../assets/stack-books-education-day.jpg';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Contact Info */}
          <div className="flex items-start gap-4">
            <img src={logo} alt="Logo" className="w-16 h-16 rounded-full border-2 border-black" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p>Email: librarysys@gmail.com</p>
              <p>Phone: +880 123 456 789</p>
              <p>Address: Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <form>
              <label className="block mb-1 text-sm">Your Email</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 rounded-md border border-black focus:outline-none text-black"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>

        <hr className="my-6 border-black/20" />

        {/* Footer Bottom */}
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} <strong>LibrarySys 📚</strong> — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
