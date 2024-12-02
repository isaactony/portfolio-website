import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WavesPattern } from './Patterns';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:isaactonyloi@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-white relative">
      <WavesPattern />
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-5xl font-bold text-center text-violet-600 mb-6">
          Send me a message!
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-500">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-violet-600 bg-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-violet-600 bg-transparent"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-500">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-violet-600 bg-transparent resize-none"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-violet-600 rounded-full border-2 border-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-200 group"
            >
              <span className="font-medium">SHOOT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}