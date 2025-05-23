import RedesSociales from "../components/RedesSociales";
import { Link } from "react-router-dom";
export default function Inicio() {
  return (
    <div className="bg-[#ebebd3] w-full min-h-screen flex items-center justify-center">
      <div className="text-black font-body text-center">
        <p className="text-4xl md:text-6xl leading-snug">
          EL BANQUETE QUE <br />
          TU EVENTO MERECE
        </p>
        <div className="mt-5">
          <Link to="/calendario" className="mt-1 rounded-2xl bg-[#DA4167] w-50 h-15 text-white text-2xl pl-5 pr-5 pt-3 pb-3">
            Cotizar ahora
          </Link>
        </div>
        <div className="h-10"></div>
        <RedesSociales />
      </div>
    </div>


  )
}
