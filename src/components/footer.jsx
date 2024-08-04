const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 WhiteSky. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
