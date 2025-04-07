import React from 'react';
import { Download } from 'lucide-react';

export function AndrewTateToolkit() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-900">Andrew Tate Schools Toolkit</h1>
            
            <div className="prose prose-purple max-w-none">
              <p className="text-gray-700 leading-relaxed">
                This comprehensive toolkit is designed to help educators, parents, and school administrators address the influence of Andrew Tate's content on young people, particularly in educational settings. It provides evidence-based strategies and resources to promote critical thinking and healthy discussions about online influence, misogyny, and digital citizenship.
              </p>
              
              <h2 className="text-xl font-semibold text-purple-800 mt-6">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Classroom discussion guides and lesson plans</li>
                <li>Parent communication templates</li>
                <li>Student workshop materials</li>
                <li>Digital literacy resources</li>
                <li>Response strategies for harmful content</li>
              </ul>

              <h2 className="text-xl font-semibold text-purple-800 mt-6">Implementation Guide</h2>
              <p className="text-gray-700 leading-relaxed">
                The toolkit includes step-by-step guidance for implementing these resources in your school community, along with best practices for creating safe spaces for discussion and supporting students who may have been influenced by harmful content.
              </p>
            </div>

            <button 
              className="mt-8 flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              onClick={() => window.open('/toolkits/andrew-tate-schools.pdf', '_blank')}
            >
              <Download className="h-5 w-5" />
              <span>Download Toolkit</span>
            </button>
          </div>

          {/* Image Section */}
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
              alt="Educational toolkit"
              className="w-full rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
              alt="School discussion"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}