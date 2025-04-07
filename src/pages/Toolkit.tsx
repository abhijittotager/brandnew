import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';

const toolkits = [
  {
    id: 1,
    title: "Digital Shield",
    image: "/pics/Screenshot 2025-04-04 164921.png",
    route: "/toolkit/digital-shield",
    content: "A powerful symbol of our commitment to combating cyber violence against women, representing resilience and strength in the face of digital harassment."
  },
  {
    id: 2,
    title: "Andrew Tate Schools Toolkit",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    route: "/toolkit/andrew-tate",
    content: "Violence can be psychological as well as physical, and it can be just as harmful..."
  },
  {
    id: 3,
    title: "Digital Safety Toolkit",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    route: "/toolkit/digital-safety",
    content: "Technology-Driven Coercive Control: A Detailed Summary..."
  },
  {
    id: 4,
    title: "Online Harassment Prevention",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    route: "/toolkit/harassment-prevention",
    content: "Conducting Workshops: These workshops provide participants..."
  },
  {
    id: 5,
    title: "Cyberbullying Response Guide",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&q=80",
    route: "/toolkit/cyberbullying"
  },
  {
    id: 6,
    title: "Social Media Safety",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    route: "/toolkit/social-media"
  }
];

export function Toolkit() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-purple-900 mb-12 text-center">Tool Kit</h1>

        {/* First Toolkit */}
        <div className="mb-12">
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/toolkit/digital-shield')}
          >
            <img 
              src={toolkits[0].image}
              alt={toolkits[0].title}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">{toolkits[0].title}</h2>
              <p className="text-gray-700">{toolkits[0].content}</p>
            </div>
          </div>
        </div>

        {/* Toolkit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {toolkits.slice(1).map((toolkit) => (
            <div 
              key={toolkit.id}
              onClick={() => navigate(toolkit.route)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img 
                  src={toolkit.image}
                  alt={toolkit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    {toolkit.title}
                  </p>
                </div>
              </div>
              {toolkit.content && (
                <div className="p-4">
                  <p className="text-gray-700 text-sm line-clamp-3">{toolkit.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
 {/* Download Button */}
 <div className="flex justify-center">
            <button 
              className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              onClick={() => window.open('/toolkits/digital-shield.pdf', '_blank')}
            >
              <Download className="h-5 w-5" />
              <span>Download Digital Shield Guide</span>
            </button>
          </div>
       
      </div>
    </div>
  );
}
