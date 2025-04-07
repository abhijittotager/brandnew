import React from 'react';
import { Download } from 'lucide-react';

export function CyberbullyingToolkit() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&q=80"
            alt="Cyberbullying Response"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Cyberbullying Response Guide</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our Cyberbullying Response Guide provides comprehensive strategies and tools for addressing cyberbullying effectively. This guide is designed for parents, educators, and young people, offering practical steps for prevention and intervention.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Immediate Response Protocol</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>Documentation and evidence collection</li>
              <li>Reporting procedures for different platforms</li>
              <li>Emergency response guidelines</li>
              <li>Communication templates for various situations</li>
              <li>Legal resources and options</li>
            </ul>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Long-term Support Strategies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond immediate response, our guide includes comprehensive strategies for long-term support and healing. This includes mental health resources, confidence-building exercises, and techniques for rebuilding online presence safely.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Prevention Framework</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The guide includes a robust prevention framework that helps create safer online environments and build resilience against cyberbullying. This includes digital citizenship education, emotional intelligence development, and community building strategies.
            </p>
          </div>

          <button 
            className="mt-8 flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => window.open('/toolkits/cyberbullying-response.pdf', '_blank')}
          >
            <Download className="h-5 w-5" />
            <span>Download Cyberbullying Response Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
}