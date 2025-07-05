import { NavLink } from 'react-router-dom';
import logo from '../../assets/stack-books-education-day.jpg'; // Replace with your actual logo path
import { FaBook, FaPlus, FaList } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { label: 'Books', path: '/books', icon: <FaBook /> },
    { label: 'Create Book', path: '/create-book', icon: <FaPlus /> },
    { label: 'Borrow Summary', path: '/borrow-summary', icon: <FaList /> },
  ];

  return (
    <div className="navbar bg-white shadow-md px-4 lg:px-12 sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full border-2 border-orange-400" />
          <NavLink to="/" className="text-2xl font-bold text-orange-500">
            LibrarySys 📚
          </NavLink>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-bold flex items-center gap-1'
                    : 'flex items-center gap-1 text-gray-600'
                }
              >
                {item.icon} {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
