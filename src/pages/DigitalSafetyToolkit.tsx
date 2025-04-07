import React from 'react';
import { Download } from 'lucide-react';

export function DigitalSafetyToolkit() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            alt="Digital Safety"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Digital Safety Toolkit</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our Digital Safety Toolkit provides comprehensive resources and strategies to help individuals navigate the digital world safely and securely. This toolkit is designed for everyone, from beginners to advanced users, focusing on practical steps to enhance online security.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Key Components</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>Password security and management guidelines</li>
              <li>Two-factor authentication setup guides</li>
              <li>Privacy settings optimization for social media</li>
              <li>Data backup and recovery strategies</li>
              <li>Safe browsing practices and tools</li>
              <li>Mobile device security recommendations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Implementation Steps</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The toolkit includes step-by-step guides for implementing various security measures, from basic password protection to advanced encryption techniques. Each section is designed to be accessible while providing comprehensive coverage of essential digital safety practices.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Regular Updates</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Digital threats evolve constantly, and so does our toolkit. We regularly update our resources to address new security challenges and incorporate the latest best practices in digital safety.
            </p>
          </div>

          <button 
            className="mt-8 flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => window.open('/toolkits/digital-safety.pdf', '_blank')}
          >
            <Download className="h-5 w-5" />
            <span>Download Digital Safety Toolkit</span>
          </button>
        </div>
      </div>
    </div>
  );
}