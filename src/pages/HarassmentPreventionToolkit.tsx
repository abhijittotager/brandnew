import React from 'react';
import { Download } from 'lucide-react';

export function HarassmentPreventionToolkit() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
            alt="Harassment Prevention"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Online Harassment Prevention Toolkit</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Online Harassment Prevention Toolkit is a comprehensive resource designed to help individuals and organizations prevent, identify, and respond to online harassment. This toolkit combines research-based strategies with practical tools to create safer online spaces.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Prevention Strategies</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>Early warning signs identification</li>
              <li>Privacy protection measures</li>
              <li>Digital boundary setting techniques</li>
              <li>Community guidelines development</li>
              <li>Moderation best practices</li>
            </ul>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Response Framework</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our toolkit provides a structured approach to responding to online harassment, including documentation guidelines, reporting procedures, and support resources for victims. The framework is adaptable to various online platforms and contexts.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Support Network Development</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Learn how to build and maintain support networks, connect with advocacy groups, and access professional resources when dealing with online harassment. The toolkit includes templates for creating support systems and emergency response plans.
            </p>
          </div>

          <button 
            className="mt-8 flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => window.open('/toolkits/harassment-prevention.pdf', '_blank')}
          >
            <Download className="h-5 w-5" />
            <span>Download Harassment Prevention Toolkit</span>
          </button>
        </div>
      </div>
    </div>
  );
}