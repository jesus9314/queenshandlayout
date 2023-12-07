import logo from "../../assets/logo/logo.png";
import { MdShoppingCart } from "react-icons/md";
import { FaUser, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import useModal from "../../hooks/useModal";
const Navbar = () => {
  const { isModalOpen: isMenuOpen, HandlerModal: handlerMenu } = useModal();
  const { isModalOpen: isSearchOpen, HandlerModal: handlerSearch } = useModal();
  return (
    <header className="flex flex-col w-full h-full bg-white">
      <nav
        className="sticky h-16 top-0 flex items-end lg:items-center justify-between font-poppins px-4 lg:px-0 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto border-b-[1px] pb-2 border-gray-300 w-full"
        role="navigation"
        aria-label="Menú de Navegación"
      >
        <div className="flex items-end gap-10 relative">
          <figure>
            <a href="#">
              <img
                className="h-10"
                src={logo}
                alt="Logotipo de QueensHand: Una mano estilizada con corona"
              />
            </a>
          </figure>
          <ul
            className="hidden lg:flex items-center gap-4 uppercase font-medium tracking-wide"
            role="menu"
          >
            <li>
              <a
                className="hover:text-gray-600 transition duration-75"
                href="#"
              >
                inicio
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-600 transition duration-75"
                href="#"
              >
                categoras
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-600 transition duration-75"
                href="#"
              >
                blog
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-600 transition duration-75"
                href="#"
              >
                contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="hidden lg:flex items-center gap-4 text-lg">
            <button
              onClick={handlerSearch}
              className="hover:text-gray-600 transition duration-75"
            >
              <FaSearch />
            </button>
            <button className="hover:text-gray-600 transition duration-75">
              <MdShoppingCart />
            </button>
            <button className="hover:text-gray-600 transition duration-75">
              <FaUser />
            </button>
          </div>
          <span className="block lg:hidden">
            <button
              onClick={handlerMenu}
              aria-label="Abrir menú"
              aria-expanded="false"
              aria-controls="menu-mobile"
              className="border-[1px] p-2 rounded-md border-gray-300 hover:text-gray-600 hover:shadow-sm transition duration-75"
            >
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </span>
        </div>
      </nav>
      <nav
        className={`${isMenuOpen ? 'opacity-100 visible': 'opacity-0 invisible pointer-events-none'} transition-opacity duration-300 ease-in-out absolute w-full top-16 bg-white opacity-0 md:hidden`}
      >
        <ul className="flex flex-col items-center justify-evenly font-poppins uppercase tracking-wider">
          <li className="border-b-[1px] border-gray-500 hover:border-gray-300 transition w-full flex justify-center hover:text-gray-400 hover:shadow-md">
            <a className="w-full h-20 flex justify-center items-center" href="">
              inicio
            </a>
          </li>
          <li className="border-b-[1px] border-gray-500 hover:border-gray-300 transition w-full flex justify-center hover:text-gray-400 hover:shadow-md">
            <a className="w-full h-20 flex justify-center items-center" href="">
              categorias
            </a>
          </li>
          <li className="border-b-[1px] border-gray-500 hover:border-gray-300 transition w-full flex justify-center hover:text-gray-400 hover:shadow-md">
            <a className="w-full h-20 flex justify-center items-center" href="">
              blog
            </a>
          </li>
          <li className="border-b-[1px] border-gray-500 hover:border-gray-300 transition w-full flex justify-center hover:text-gray-400 hover:shadow-md">
            <a className="w-full h-20 flex justify-center items-center" href="">
              contacto
            </a>
          </li>
        </ul>
      </nav>
      {/* search bar */}
      <div
        className={`${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} transition-opacity duration-150 ease-in-out w-full relative opacity-0 hidden md:block`}
      >
        <div className="absolute bg-white right-0 px-4 py-4 w-full">
          <input
            className="border-gray-300 border-[1px] rounded-md w-full h-8 px-2 py-4 capitalize tracking-wide"
            placeholder="Buscar..."
            type="text"
            name=""
            id=""
          />
          <button
            title="Buscar"
            className="absolute top-6 right-6 hover:text-gray-400 transition duration-75"
          >
            <FaSearch />
          </button>
          <div className="w-full bg-white mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-x-2 border-gray-500">
            <div className="">
                busqueda 1
            </div>
            <div className="">
                busqueda 1
            </div>
            <div className="">
                busqueda 1
            </div>
            <div className="">
                busqueda 1
            </div>
            <div className="">
                busqueda 1
            </div>
            <div className="">
                busqueda 1
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
