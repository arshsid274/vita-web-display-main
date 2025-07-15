import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Heart } from "lucide-react";
import Logo1 from "../assets/HospitalLogo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 h-16 w-16 rounded-lg">
              {/* <Logo className="h-6 w-6 text-primary-foreground" /> */}
              <img src={Logo1} alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-Black">Chaudhary Ehsaan Kareem Hospital</h1>
              {/* <p className="text-xs text-muted-foreground">Multi-Specialty Hospital</p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* <a href="tel:+91987654321" className="flex items-center gap-2 text-accent font-medium">
              <Phone className="h-4 w-4" />
              Emergency: +91 98765 43210
            </a> */}
            <Button variant="appointment" size="sm">
              Emergency: +91 98765 43210
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-4 pt-4 pb-4">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-border pt-4 mt-2">
                <a href="tel:+91987654321" className="flex items-center gap-2 text-accent font-medium mb-3">
                  <Phone className="h-4 w-4" />
                  Emergency: +91 98765 43210
                </a>
                <Button variant="appointment" size="sm" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;