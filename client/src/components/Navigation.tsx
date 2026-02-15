import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/compliance', label: 'Compliance' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339346971/EihsNDjcUFVjAdIE.png" alt="Gibraltar Global Securities" className="h-16 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-foreground hover:text-accent transition-colors cursor-pointer text-sm font-medium">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg cursor-pointer text-sm font-medium"
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/contact">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
