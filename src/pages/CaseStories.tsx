import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';

const caseStories = [
  {
    id: 1,
    title: "Samantha Billingham – A Survivor's Journey and Advocacy Against Cyber-Enabled Domestic Abuse",
    preview: "Samantha Billingham's journey from victim to advocate highlights the urgent need for digital safety, early abuse recognition, and stronger support systems against tech-facilitated coercive control.",
    description: "Samantha Billingham details her transformative journey from enduring covert, technology-facilitated abuse to emerging as a resilient advocate for survivors. Her experience highlights the subtle, yet pervasive nature of coercive control, where digital tools are misused to isolate and manipulate, resulting in significant psychological and emotional impacts. Through her personal narrative, Samantha underscores the critical need for early recognition of abuse and the importance of supportive interventions. Her development of the ABC Toolkit stands as a practical resource, empowering others to identify red flags and seek help. This case study is a compelling call to action for improved legal protections, comprehensive digital safety education, and robust support systems for those affected by cyber-enabled domestic abuse.",
    downloadUrl: "/cases/case1.pdf"
  },
  {
    id: 2,
    title: "Digital Safety Education",
    preview: "Implementation of digital safety education programs in universities to protect female students from cyber violence.",
    description: "This comprehensive case study documents the successful implementation of digital safety education programs across five major universities in the UK. The initiative was developed in response to the rising incidents of cyber violence targeting female students in higher education. Our team worked closely with university administrators, student welfare officers, and cybersecurity experts to design a curriculum that addresses modern digital threats while being accessible and engaging for students. The program covers various aspects of digital safety, including social media privacy, online harassment prevention, and emergency response protocols. Over the course of two academic years, we trained over 5,000 students and documented a significant improvement in digital safety awareness and incident reporting. The study includes detailed analysis of program effectiveness, student feedback, and measurable outcomes in terms of reduced cyber violence incidents. The success of this program has led to its adoption by twelve additional universities, and it has become a model for similar initiatives internationally. The case study also explores the challenges faced during implementation and provides valuable insights for other institutions looking to establish similar programs.",
    downloadUrl: "/cases/case2.pdf"
  },
  {
    id: 3,
    title: "Social Media Protection",
    preview: "Strategies and tools for protecting women and girls from harassment and abuse on social media platforms.",
    description: "This case study presents an innovative approach to combating harassment and abuse on social media platforms, specifically targeting the protection of women and girls. Through collaboration with leading social media companies and cybersecurity experts, we developed and implemented a comprehensive set of tools and strategies. The study examines the effectiveness of various protection measures, including AI-powered content filtering, automated threat detection, and user-friendly reporting systems. Our research involved analyzing over 10,000 cases of social media harassment, leading to the identification of key patterns and vulnerable points in existing protection systems. The project resulted in the development of a toolkit that includes both technical solutions and educational resources. Implementation of these tools across various platforms showed a 65% improvement in early detection of harassing behavior and a 78% increase in successful intervention rates. The study also addresses the psychological impact of online harassment and provides guidelines for creating support systems for victims. This work has influenced platform policies and contributed to the development of new features focused on user safety across major social media networks.",
    downloadUrl: "/cases/case3.pdf"
  }
];

export function CaseStories() {
  const [expandedCases, setExpandedCases] = useState<number[]>([]);

  const toggleCase = (id: number) => {
    setExpandedCases(prev => 
      prev.includes(id) 
        ? prev.filter(caseId => caseId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-purple-50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 md:mb-12 text-center">Case Study</h1>
        
        <div className="space-y-6 md:space-y-8">
          {caseStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-purple-900 mb-3 md:mb-4">Case Study {story.id}</h2>
                <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2 md:mb-3">{story.title}</h3>
                
                <div className="mb-4">
                  <p className="text-gray-600">{story.preview}</p>
                  
                  <div className={`mt-4 transition-all duration-300 ${expandedCases.includes(story.id) ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600">{story.description}</p>
                  </div>
                  
                  <button 
                    onClick={() => toggleCase(story.id)}
                    className="mt-2 text-[#58005b] hover:text-[#3e0044] flex items-center gap-1 transition-colors"

                  >
                    {expandedCases.includes(story.id) ? (
                      <>
                        Read Less
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                <button 
                className="flex items-center space-x-2 bg-[#58005b] text-white px-4 py-2 rounded-lg hover:bg-[#3e0044] transition-colors"


                  onClick={() => window.open(story.downloadUrl, '_blank')}
                >
                  <Download className="h-5 w-5" />
                  <span>Download Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}