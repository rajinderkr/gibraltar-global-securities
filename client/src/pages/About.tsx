import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Gibraltar Global Securities</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Decades of expertise in global logistics, compliance, and operational excellence
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Company
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Headquartered in Austin, Texas, we operate as a trusted intermediary in complex supply chains where standard commercial solutions fall short. With 65 operational facilities worldwide, we maintain the global presence necessary to serve clients requiring both capability and discretion.
                </p>
                <p className="text-base text-foreground mb-8 leading-relaxed">
                  Our team brings decades of combined experience in logistics, regulatory compliance, international law, and operational security. We understand the unique challenges faced by organizations operating in high-stakes environments.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-primary text-lg mb-2">Global Presence</h3>
                  <p className="text-foreground">65 operational facilities across all continents ensuring local expertise and rapid response</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-primary text-lg mb-2">Expert Team</h3>
                  <p className="text-foreground">Decades of combined experience in logistics, compliance, law, and operational security</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-bold text-primary text-lg mb-2">Trusted Partner</h3>
                  <p className="text-foreground">Proven track record serving humanitarian, peacekeeping, and security organizations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Approach
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Rigorous Compliance',
                  description: 'Unwavering adherence to all applicable international trade regulations and frameworks',
                },
                {
                  title: 'Client Verification',
                  description: 'Strict qualification and background verification protocols for all partnerships',
                },
                {
                  title: 'Absolute Discretion',
                  description: 'Complete confidentiality and operational security in all client engagements',
                },
                {
                  title: 'Global Network',
                  description: 'Authorized partners and service providers strategically positioned worldwide',
                },
                {
                  title: 'Ethical Standards',
                  description: 'Unwavering commitment to ethical business practices and legal compliance',
                },
                {
                  title: 'Continuous Excellence',
                  description: 'Ongoing training and development to maintain highest operational standards',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Certifications & Compliance
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground mb-8 text-center">
                Our operations maintain full compliance with:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'International Traffic in Arms Regulations (ITAR)',
                  'Export Administration Regulations (EAR)',
                  'Relevant UN Sanctions Frameworks',
                  'National and International Trade Control Regimes',
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <p className="font-medium text-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learn More About Our Services
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how we can support your organization's operational needs
            </p>
            <Link href="/services">
              <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 mx-auto cursor-pointer">
                View Services
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
