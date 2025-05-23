import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full font-header bg-[#DA4167] text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="text-2xl font-bold">Mi Evento</div>

      
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none text-3xl"
        >
          ☰
        </button>

     
        <nav className={`${menuOpen ? "block" : "hidden"} w-full md:flex md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-10 text-xl">
            <li>
              <NavLink to="/" className="block py-2 px-4 hover:underline" onClick={() => setMenuOpen(false)}>
                INICIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className="block py-2 px-4 hover:underline" onClick={() => setMenuOpen(false)}>
                NOSOTROS
              </NavLink>
            </li>
            <li>
              <NavLink to="/nuestros-paquetes" className="block py-2 px-4 hover:underline" onClick={() => setMenuOpen(false)}>
                NUESTROS PAQUETES
              </NavLink>
            </li>
            <li>
              <NavLink to="/mis-eventos" className="block py-2 px-4 hover:underline" onClick={() => setMenuOpen(false)}>
                MIS EVENTOS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
