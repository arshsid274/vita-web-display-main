import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

import Logo2 from "../assets/logo2.png"
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2  rounded-lg h-16 w-16">
               <img src={Logo2} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-black uppercase">Chaudhary Ehsan </h1>
                <p className="text-sm opacity-80 text-black pl-8 uppercase">Kareem Hospital</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Providing world-class healthcare services with international standards 
              and Indian values of compassion for over 29 years.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                
                Amarpali Zodiac,Sector 120,Noida, Uttar pradesh - 201301
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 9335596042
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@Chaudhary Ehsan Kareemhealthcare.in
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#doctors" className="opacity-80 hover:opacity-100 transition-opacity">Doctors</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Medical Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-80">Hospital Camp</span></li>
              <li><span className="opacity-80">Eye Care</span></li>
              <li><span className="opacity-80">Lab</span></li>
              <li><span className="opacity-80">Otho</span></li>
              <li><span className="opacity-80">Blood Donation</span></li>
              <li><span className="opacity-80">Dental Care </span></li>
              <li><span className="opacity-80">Gynecology & Obstetrics</span></li>
              <li><span className="opacity-80">Dermatology</span></li>
            </ul>
          </div>

          {/* Emergency Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Emergency Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="opacity-80">24x7 Emergency Care</span>
              </div>
              <div className="p-4 bg-accent/20 rounded-lg">
                <p className="font-semibold text-accent-foreground">Emergency Helpline</p>
                <p className="text-lg font-bold">+91 9335596042</p>
              </div>
              <p className="text-xs opacity-70">
                For life-threatening emergencies, call 108 (National Ambulance Service) immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-80">
              © 2025 Chaudhary Ehsan Kareem Hospital. All rights reserved.
            </p>
            <div className="flex gap-6 opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Patient Rights</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;