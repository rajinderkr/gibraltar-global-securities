import { ArrowRight, Package, Globe, Dog } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Comprehensive solutions tailored to complex operational requirements
            </p>
          </div>
        </section>

        {/* Service 1: Supply Chain Management */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-12 rounded-lg flex items-center justify-center h-64">
                  <Package className="text-primary" size={180} />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Supply Chain Management
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  We provide end-to-end supply chain solutions for controlled and sensitive goods. Our services include procurement coordination, inventory management, secure warehousing, and delivery to challenging locations.
                </p>
                <p className="text-base text-foreground mb-8">
                  We specialize in supply chains requiring enhanced security protocols and regulatory oversight.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    'Procurement coordination for sensitive goods',
                    'Inventory management and tracking',
                    'Secure warehousing with advanced protocols',
                    'Delivery to challenging and remote locations',
                    'Enhanced security and compliance oversight',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Import & Export */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-12 rounded-lg flex items-center justify-center h-64">
                  <Globe className="text-accent" size={180} />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Import & Export Services
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  International movement of controlled goods requires expertise in multiple regulatory frameworks. We manage all aspects of compliant cross-border trade with precision and discretion.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    'Export/import license applications and management',
                    'Customs documentation and clearance',
                    'End-user verification and documentation',
                    'Regulatory compliance across multiple jurisdictions',
                    'Secure transportation and chain of custody',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Working K9 Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-12 rounded-lg flex items-center justify-center h-64">
                  <img src="/images/dog.png" alt="Gibraltar Global Securities" className="h-100 w-auto" />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Working K9 Services
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  We supply and coordinate trained working dogs for detection, security, and humanitarian applications. Our programs support critical operational needs with professionally trained animals.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    'Explosive detection for peacekeeping operations',
                    'Humanitarian demining support',
                    'Search and rescue capabilities',
                    'Facility security applications',
                    'Specialized detection requirements',
                    'Full veterinary certification and handler support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-muted-foreground">
                  All animals are professionally trained, properly documented for international transport, and delivered with full veterinary certification and handler coordination support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose Gibraltar Global Securities
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expertise',
                  description: 'Decades of combined experience in complex logistics and compliance',
                },
                {
                  title: 'Global Network',
                  description: '65 operational facilities worldwide with local expertise',
                },
                {
                  title: 'Compliance First',
                  description: 'Unwavering commitment to all regulatory requirements',
                },
                {
                  title: 'Discretion',
                  description: 'Absolute confidentiality in all operations and communications',
                },
                {
                  title: 'Reliability',
                  description: 'Proven track record with humanitarian and security organizations',
                },
                {
                  title: 'Security',
                  description: 'Enhanced protocols and operational security measures',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-blue-400 border-opacity-30">
                  <h3 className="font-bold text-lg mb-3 text-white">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Contact us to learn how our services can support your organization's operational needs
            </p>
            <Link href="/contact">
              <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 mx-auto cursor-pointer">
                Get in Touch
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
