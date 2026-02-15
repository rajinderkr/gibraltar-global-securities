import { ArrowRight, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Compliance() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Compliance & Qualification</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Rigorous standards and verification protocols for all partnerships
            </p>
          </div>
        </section>

        {/* Our Standards */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Standards
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-foreground leading-relaxed mb-8">
                We maintain zero-tolerance policies regarding unauthorized transactions, non-compliant activities, or partnerships that could compromise regulatory standing or ethical obligations.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-8 flex gap-4">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Zero Tolerance Policy</h3>
                  <p className="text-red-800">
                    We reserve the right to decline any engagement that does not meet our compliance standards. All partnerships are subject to comprehensive due diligence and ongoing monitoring.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: 'Ethical Operations',
                  description: 'Unwavering commitment to ethical business practices and legal compliance in all activities',
                },
                {
                  icon: CheckCircle,
                  title: 'Regulatory Adherence',
                  description: 'Full compliance with all applicable laws and regulations governing international trade',
                },
                {
                  icon: AlertCircle,
                  title: 'Risk Management',
                  description: 'Comprehensive risk assessment and mitigation strategies for all partnerships',
                },
                {
                  icon: Shield,
                  title: 'Continuous Monitoring',
                  description: 'Ongoing monitoring of partnership status and regulatory compliance',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
                    <Icon className="text-primary mb-4" size={32} />
                    <h3 className="font-bold text-primary mb-3 text-lg">{item.title}</h3>
                    <p className="text-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Qualification Process */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Client Qualification Process
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground mb-12 text-center">
                All prospective clients undergo comprehensive due diligence prior to engagement
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Organizational Verification',
                    description: 'Thorough verification of organizational legitimacy, registration, and operational status',
                  },
                  {
                    step: '02',
                    title: 'Background Checks',
                    description: 'Comprehensive background checks on key personnel and organizational leadership',
                  },
                  {
                    step: '03',
                    title: 'End-Use Certification',
                    description: 'Verification of intended use and end-user certification for all services',
                  },
                  {
                    step: '04',
                    title: 'Compliance History Review',
                    description: 'Detailed review of compliance history and regulatory standing',
                  },
                  {
                    step: '05',
                    title: 'Ongoing Monitoring',
                    description: 'Continuous monitoring of partnership status and compliance throughout engagement',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-white font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                      <p className="text-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Regulatory Commitment
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                We operate in strict accordance with all applicable laws and regulations governing international trade, controlled goods, and cross-border services. Our compliance team maintains current knowledge of evolving regulatory frameworks and ensures all operations meet or exceed legal requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: 'ITAR Compliance',
                  description: 'International Traffic in Arms Regulations - strict adherence to all ITAR requirements',
                },
                {
                  title: 'EAR Compliance',
                  description: 'Export Administration Regulations - full compliance with all export control measures',
                },
                {
                  title: 'UN Sanctions',
                  description: 'Relevant UN sanctions frameworks - comprehensive monitoring and adherence',
                },
                {
                  title: 'Trade Control',
                  description: 'National and international trade control regimes - complete regulatory compliance',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-primary mb-3 text-lg">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Team */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dedicated Compliance Team
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Our specialized compliance team maintains current knowledge of evolving regulatory frameworks and ensures all operations meet or exceed legal requirements. We stay ahead of regulatory changes to protect our partners and maintain the highest standards.
              </p>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-white border-opacity-20">
                <p className="text-blue-100 font-medium">
                  We reserve the right to decline any engagement that does not meet our compliance standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Interested in Partnership?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              If your organization meets our compliance standards and requirements, we'd like to discuss potential partnership opportunities
            </p>
            <Link href="/contact">
              <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 mx-auto cursor-pointer">
                Start Qualification Process
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
