import { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact', isButton: true }
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Main Navigation Container with scroll-based background */}
      <div className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 hover:text-purple-300 transition-colors">
              <Terminal className="h-8 w-8" />
              <span className="font-mono text-lg">Spiff.Azeta</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                item.isButton ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`hover:text-purple-300 transition-colors ${
                      isActive(item.href) ? 'text-purple-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
            ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-indigo-800/95 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col p-8" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xl ${
                    item.isButton
                      ? 'bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-center transition-colors'
                      : `hover:text-purple-300 transition-colors ${
                          isActive(item.href) ? 'text-purple-400' : ''
                        }`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;