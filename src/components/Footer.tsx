import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import footerLogo from 'figma:asset/f1b78d61e858241de34302910e7cbd7ea153e33a.png';
import { services, CALENDLY_30MIN } from '../lib/constants';

const footerLinks = {
  services: services.map(service => ({ name: service.title, href: '#services' })),
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ],
  resources: [
    { name: '30-Minute Consultation', href: CALENDLY_30MIN, target: '_blank', rel: 'noopener noreferrer' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'About Us', href: '#team' },
    { name: 'Projects', href: '#portfolio' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <img 
                  src={footerLogo} 
                  alt="DUDAT Sales & Marketing" 
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-black/80 mb-6 max-w-md">
                We help businesses stand out with social media management and content creation that drives real results.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a 
                    href="mailto:duda@dudat.marketing" 
                    className="text-sm hover:text-black/60 transition-colors underline"
                  >
                    duda@dudat.marketing
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">+1 (214) 505-0184</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-sm text-black/80 hover:text-black transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Resources */}
            <div>
              <h4 className="font-semibold mb-4">Company Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className="text-sm text-black/80 hover:text-black transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-black/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-black/80">
                © 2025 Dudat Marketing. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-sm text-black/80 hover:text-black transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-black/80 hover:text-black transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-black/80 hover:text-black transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
