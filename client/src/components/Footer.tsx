import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339346971/EihsNDjcUFVjAdIE.png" alt="Gibraltar Global Securities" className="h-16 w-auto" />
            </div>
            <p className="text-sm opacity-90">
              Specialized logistics and compliance services for verified organizations worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/compliance">
                  <span className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer">Compliance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact">
                  <span className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer">Get in Touch</span>
                </Link>
              </li>
              <li className="opacity-90">Austin, Texas</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-90">
              © 2025 Gibraltar Global Securities. All Rights Reserved.
            </p>
            <p className="opacity-90">
              Services are provided exclusively to verified and authorized organizations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
