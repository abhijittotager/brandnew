import React from 'react';
import { useNavigate } from 'react-router-dom';

const toolkits = [
  {
    id: 1,
    title: "Digital Shield",
    
   image: "pics/Screenshot 2025-04-04 164921.png", // updated local image path
    imageClass: "w-24 h-200px mx-200px",
    route: "/toolkit/digital-shield",
    content: "A powerful symbol of our commitment to combating cyber violence against women, representing resilience and strength in the face of digital harassment."
  },
  {
    id: 2,
    title: "Andrew Tate Schools Toolkit",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    route: "/toolkit/andrew-tate",
    content: "Violence can be psychological as well as physical, and it can be just as harmful. With people receiving obnoxious advances, unsolicited sexual messages, and even threats online, cyber harassment is becoming a bigger problem."
  },
  {
    id: 3,
    title: "Digital Safety Toolkit",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    route: "/toolkit/digital-safety",
    content: "Technology-Driven Coercive Control: A Detailed Summary. A cycle of harmful behavior in which technology is used as a tool to erode independence, encompassing: Psychological damage: Eroding self-esteem, assurance, and autonomy via gaslighting or degradation. Isolation: Removing access to social or financial support systems through device tampering or social media disruption. Monitoring: Following activities through applications (e.g., Life360, Instagram) or tracking software. Coercion: Forcing/threatening victims to manipulate behavior via messages, extortion, or impersonation. Entrapment: Limiting technology access to encourage reliance and hinder escape. This organized mistreatment takes advantage of gadgets (phones, smart home technology) and platforms (social media, messaging applications) to uphold control."
  },
  {
    id: 4,
    title: "Online Harassment Prevention",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    route: "/toolkit/harassment-prevention",
    content: "Conducting Workshops: These workshops provide participants with a deep understanding of cyber violence, enabling them to identify warning signs and implement prevention strategies. They empower individuals to recognize forms of online abuse and leverage digital tools to create safer online environments."
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
        
        {/* Digital Shield - First Item */}
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

        {/* Grid of remaining toolkits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}