const RedesSociales = () => {
  return (
    <div className="flex gap-6 justify-center items-center">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/fotovoltenergymx/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/fotovoltenergy"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>

      {/* TikTok */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform"
      >
        <i className="fa-brands fa-tiktok"></i>
      </a>
    </div>
  );
};

export default RedesSociales;
