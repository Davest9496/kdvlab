
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Services', path: '/services', 
    dropdown: [
      { name: 'Custom Software', path: '/services/custom-software' },
      { name: 'Web Applications', path: '/services/web-applications' },
      { name: 'Mobile Apps', path: '/services/mobile-apps' },
      { name: 'Cloud Services', path: '/services/cloud-services' },
      { name: 'UI/UX Design', path: '/services/design' },
      { name: 'Consultancy', path: '/services/consultancy' },
    ]
  },
  { name: 'Our Work', path: '/our-work' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-kdv-darkest/90 backdrop-blur-sm border-b border-kdv-neutral/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-kdv-blue to-kdv-purple bg-clip-text text-transparent">
              KDVLAB
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-kdv-light hover:text-kdv-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-kdv-light hover:text-kdv-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.dropdown && (
                    <div className={cn(
                      "absolute left-0 mt-2 w-48 bg-kdv-darker rounded-md shadow-lg py-1 border border-kdv-neutral/20",
                      "transition-all duration-200 transform origin-top-left",
                      openDropdown === item.name ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                    )}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-kdv-light hover:bg-kdv-neutral/10"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary ml-4">
                Get in Touch
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-kdv-light hover:text-kdv-blue"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-kdv-darkest border-t border-kdv-neutral/20">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between text-kdv-light hover:text-kdv-blue px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-3 py-2 rounded-md text-base font-medium text-kdv-light hover:text-kdv-blue"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-kdv-light hover:text-kdv-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center btn btn-primary mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
