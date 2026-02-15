import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    requirements: '',
    region: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.organizationName || !formData.contactName || !formData.email || !formData.requirements) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Inquiry submitted successfully! We will review and contact you within 5-7 business days.');
      setFormData({
        organizationName: '',
        contactName: '',
        email: '',
        requirements: '',
        region: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Submit an inquiry to begin our qualification and partnership process
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border text-center">
                <MapPin className="text-accent mx-auto mb-4" size={32} />
                <h3 className="font-bold text-primary mb-2">Headquarters</h3>
                <p className="text-foreground">Austin, Texas</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border text-center">
                <Clock className="text-accent mx-auto mb-4" size={32} />
                <h3 className="font-bold text-primary mb-2">Response Time</h3>
                <p className="text-foreground">5-7 business days</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border text-center">
                <Mail className="text-accent mx-auto mb-4" size={32} />
                <h3 className="font-bold text-primary mb-2">Inquiries</h3>
                <p className="text-foreground">Subject to verification</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Inquiry Process
              </h2>
              
              <p className="text-lg text-foreground mb-12 text-center">
                If your organization requires specialized logistics or operational support services, please submit an inquiry using the form below. All inquiries are reviewed for alignment with our service capabilities and compliance standards.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 rounded-lg">
                {/* Organization Name */}
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Organization Name <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    placeholder="Enter your organization name"
                    className="w-full"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Contact Name <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@organization.com"
                    className="w-full"
                  />
                </div>

                {/* Geographic Region */}
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Geographic Region(s) of Operation
                  </label>
                  <Input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    placeholder="e.g., Sub-Saharan Africa, Southeast Asia"
                    className="w-full"
                  />
                </div>

                {/* Requirements Description */}
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Brief Description of Requirements <span className="text-red-600">*</span>
                  </label>
                  <Textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Please describe your organization's needs and requirements"
                    rows={6}
                    className="w-full"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white hover:bg-orange-600 font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  {!isSubmitting && <ArrowRight size={18} />}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  All inquiries are subject to verification. Initial responses may take 5-7 business days.
                </p>
              </form>

              {/* Next Steps */}
              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">1.</span>
                    <span>Your inquiry is reviewed for alignment with our service capabilities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">2.</span>
                    <span>Our team verifies your organization and key personnel</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">3.</span>
                    <span>Qualified organizations are contacted to discuss requirements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">4.</span>
                    <span>We initiate our comprehensive due diligence process</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions Before You Inquire?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Review our services and compliance standards to ensure alignment with your organization's needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                View Services
              </a>
              <a href="/compliance" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Learn About Compliance
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
