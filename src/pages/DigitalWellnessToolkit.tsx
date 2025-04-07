import React from 'react';
import { Download } from 'lucide-react';

export function DigitalWellnessToolkit() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
            alt="Digital Wellness"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Digital Wellness Guide</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our Digital Wellness Guide is designed to help individuals maintain a healthy relationship with technology while maximizing its benefits. This comprehensive resource focuses on creating balance, setting boundaries, and promoting positive digital habits.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Screen Time Management</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>Setting healthy screen time limits</li>
              <li>Digital detox strategies</li>
              <li>Productivity tools and techniques</li>
              <li>Work-life balance in digital age</li>
              <li>Family screen time guidelines</li>
            </ul>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Mental Health Preservation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Learn effective strategies for protecting your mental health while staying connected digitally. Our guide includes techniques for managing digital anxiety, avoiding information overload, and maintaining emotional well-being online.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Digital Mindfulness</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover practices for maintaining mindfulness in the digital age. From meditation apps to conscious content consumption, learn how to stay present and focused while using technology.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Healthy Digital Habits</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Build sustainable digital habits that promote wellness and productivity. Our guide provides practical steps for creating routines that support both your online and offline well-being.
            </p>
          </div>

          <button 
            className="mt-8 flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => window.open('/toolkits/digital-wellness.pdf', '_blank')}
          >
            <Download className="h-5 w-5" />
            <span>Download Digital Wellness Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
}