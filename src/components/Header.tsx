import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './Navigation';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">华卓科技</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="nav-link">首页</Link>
            <Link href="#services" className="nav-link">服务</Link>
            <Link href="#about" className="nav-link">关于我们</Link>
            <Link href="#team" className="nav-link">团队</Link>
            <Link href="#testimonials" className="nav-link">客户评价</Link>
            <Link href="#contact" className="nav-link">联系我们</Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-500 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen bg-white shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link href="#home" onClick={toggleMenu} className="mobile-nav-link">首页</Link>
          <Link href="#services" onClick={toggleMenu} className="mobile-nav-link">服务</Link>
          <Link href="#about" onClick={toggleMenu} className="mobile-nav-link">关于我们</Link>
          <Link href="#team" onClick={toggleMenu} className="mobile-nav-link">团队</Link>
          <Link href="#testimonials" onClick={toggleMenu} className="mobile-nav-link">客户评价</Link>
          <Link href="#contact" onClick={toggleMenu} className="mobile-nav-link">联系我们</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;