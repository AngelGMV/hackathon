import RedesSociales from "./RedesSociales";

function Footer() {
  return (
    <footer className="w-full font-header bg-[#DA4167] text-white text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
      <div>Derechos reservados © 2025</div>
      <RedesSociales />
      </div>
    </footer>
  );
}

export default Footer;