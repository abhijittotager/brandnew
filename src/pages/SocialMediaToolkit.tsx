import React from 'react';
import { Download } from 'lucide-react';

export function SocialMediaToolkit() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
            alt="Social Media Safety"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Social Media Safety Toolkit</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Social Media Safety Toolkit is a comprehensive guide designed to help users navigate social media platforms safely and confidently. This resource provides practical strategies for protecting privacy, managing digital presence, and responding to online threats.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Platform-Specific Guidelines</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>Instagram privacy and security settings</li>
              <li>Facebook account protection measures</li>
              <li>Twitter safety features and tools</li>
              <li>TikTok privacy controls</li>
              <li>LinkedIn professional boundary setting</li>
            </ul>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Content Management</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Learn effective strategies for managing your digital footprint, including content filtering, audience management, and safe sharing practices. Our toolkit provides detailed guides for controlling who sees your content and how to maintain privacy across platforms.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Crisis Response</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The toolkit includes comprehensive guidelines for responding to social media crises, from account compromises to harassment. Find step-by-step instructions for securing compromised accounts, reporting violations, and protecting yourself from future incidents.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Digital Well-being</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover tools and techniques for maintaining a healthy relationship with social media, including screen time management, content filtering, and mental health preservation strategies. Learn how to create boundaries and maintain a positive online presence.
            </p>
          </div>

          <button 
            className="mt-8 flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => window.open('/toolkits/social-media-safety.pdf', '_blank')}
          >
            <Download className="h-5 w-5" />
            <span>Download Social Media Safety Toolkit</span>
          </button>
        </div>
      </div>
    </div>
  );
}