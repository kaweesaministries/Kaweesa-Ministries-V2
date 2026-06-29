import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import PageHeader from './components/PageHeader';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './components/WhatsAppIcon';
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Partner with KAWEESA CHILDREN'S MINISTRIES</title>
        <meta name="description" content="Get in touch with KAWEESA CHILDREN'S MINISTRIES (NGO). Contact us for child sponsorship, donations, or partnership inquiries in Uganda." />
        <link rel="canonical" href="https://kaweesachildrensministries.org/contact" />
      </Helmet>
      <div className="min-h-screen bg-white">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team"
        bgImage="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(31).jpeg"
      />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl mb-8">Get in Touch</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Have questions about our services or need assistance? Our team is here to help. Reach out to us through the form or using the contact details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600"><a href="mailto:info@kaweesaministry.org" className="hover:text-primary transition-colors">info@kaweesaministry.org</a></p>
                  <p className="text-sm text-gray-400 mt-1">We aim to reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+256772477774" className="hover:text-primary transition-colors">+256 772 477 774</a>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Available Mon-Sat for inquiries.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <p className="text-gray-600">
                    <a href="https://wa.me/256772477774" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">+256 772 477 774</a>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Chat with us directly on WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Office</h3>
                  <p className="text-gray-600">Kampala, Uganda</p>
                  <p className="text-sm text-gray-400 mt-1">Visit our local center.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem]">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
