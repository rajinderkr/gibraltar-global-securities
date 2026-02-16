import { Link } from 'wouter';
import { ArrowRight, Shield, Globe, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
       <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Large Logo */}
              <div className="flex justify-center mb-0">
                <img
                  src="/images/logo.png"
                  alt="Gibraltar Global Securities Logo"
                  className="h-24 md:h-42 lg:h-48 w-auto"
                />
              </div>
              {/* Hero Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Gibraltar Global Securities
              </h1>
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                Providing specialized logistics, trade compliance, and operational support services to verified organizations worldwide.
              </p>
              {/* CTA Button */}
              <Link href="/contact">
                <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                  Contact Us
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Brief Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  We are a specialized service provider operating at the intersection of global logistics, regulatory compliance, and operational support. Our clients include humanitarian organizations, peacekeeping entities, and authorized security operations requiring discretion, precision, and unwavering reliability.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  All partnerships are subject to comprehensive qualification and compliance review.
                </p>
                <Link href="/about">
                  <button className="text-accent font-bold hover:text-blue-600 transition-colors flex items-center gap-2 cursor-pointer">
                    Learn More About Us
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                  <Shield className="text-accent mb-4" size={32} />
                  <h3 className="font-bold text-primary mb-2">Compliance First</h3>
                  <p className="text-sm text-foreground">Rigorous adherence to all international trade regulations</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg">
                  <Globe className="text-blue-700 mb-4" size={32} />
                  <h3 className="font-bold text-primary mb-2">Global Reach</h3>
                  <p className="text-sm text-foreground">65 operational facilities worldwide</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                  <CheckCircle className="text-blue-600 mb-4" size={32} />
                  <h3 className="font-bold text-primary mb-2">Verified Partners</h3>
                  <p className="text-sm text-foreground">Strict client qualification protocols</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg">
                  <Shield className="text-blue-700 mb-4" size={32} />
                  <h3 className="font-bold text-primary mb-2">Discretion</h3>
                  <p className="text-sm text-foreground">Absolute confidentiality in operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions tailored to the unique needs of complex operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Supply Chain Management',
                  description: 'End-to-end supply chain solutions for controlled and sensitive goods with enhanced security protocols.',
                },
                {
                  title: 'Import & Export Services',
                  description: 'Expert management of cross-border trade including licensing, customs, and regulatory compliance.',
                },
                {
                  title: 'Working K9 Services',
                  description: 'Trained working dogs for detection, security, and humanitarian applications with full documentation.',
                },
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-sm card-hover border border-border">
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors cursor-pointer">
                  View All Services
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              If your organization requires specialized logistics or operational support services, submit an inquiry to begin our qualification process.
            </p>
            <Link href="/contact">
              <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto cursor-pointer">
                Start Your Inquiry
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
