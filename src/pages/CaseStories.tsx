import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';

const caseStories = [
  {
    id: 1,
    title: "Samantha Billingham – A Survivor's Journey and Advocacy Against Cyber-Enabled Domestic Abuse",
    preview: "Samantha Billingham's journey from victim to advocate highlights the urgent need for digital safety, early abuse recognition, and stronger support systems against tech-facilitated coercive control.",
    description: "Samantha Billingham details her transformative journey from enduring covert, technology-facilitated abuse to emerging as a resilient advocate for survivors. Her experience highlights the subtle, yet pervasive nature of coercive control, where digital tools are misused to isolate and manipulate, resulting in significant psychological and emotional impacts. Through her personal narrative, Samantha underscores the critical need for early recognition of abuse and the importance of supportive interventions. Her development of the ABC Toolkit stands as a practical resource, empowering others to identify red flags and seek help. This case study is a compelling call to action for improved legal protections, comprehensive digital safety education, and robust support systems for those affected by cyber-enabled domestic abuse.",
    downloadUrl: "https://drive.google.com/file/d/18MsMh-ollUmPk9dKpdv8nggmwNaT-eQ6/view?usp=sharing"
  },
  {
    id: 2,
    title: "Nina Jane Patel",
    preview: "Implementation of digital safety education programs in universities to protect female students from cyber violence.",
    description: "Psychotherapist and metaverse researcher Nina Jane Patel was sexually assaulted by male avatars within minutes of entering Meta’s Horizon Worlds VR platform. Despite the immersive trauma—triggering panic attacks and professional repercussions—Meta dismissed the incident as non-consensual imagery,not rape, and took no action. Patel faced victim-blaming and found no legal recourse, as virtual assault lacks evidentiary frameworks and legal recognition. Her case exposes systemic failures: VR platforms lack moderation, reporting tools, and accountability, while laws lag behind tech-enabled abuse. Similar incidents, like 2022’s VR child grooming cases, highlight escalating risks, particularly for women and marginalized users. Aftermath  of  Patel now advocates for VR safety reforms, no charges were filed, underscoring the urgent need for platform accountability, trauma-informed policies, and legal updates to address virtual violence as a real-world harm. This case underscores how digital abuse mirrors offline coercion, demanding immediate intervention in tech governance and victim support.",
    downloadUrl: "/cases/case2.pdf"
  },
  {
    id: 3,
    title: "Hannah Moore",
    preview: "Strategies and tools for protecting women and girls from harassment and abuse on social media platforms.",
    description: "Hannah Moore who’s a fashion designer met Kin Hung at London Fashion Week, which led to a years-long cyberstalking campaign against him. The offender used her personal information as a weapon to arrange identity theft, constant harassment, and threats, but UK police did nothing in spite of copious evidence. From Moore's job to her mental health, the stalking affected every part of her life, revealing structural flaws in the way that digitally enabled gender-based violence is addressed. The case was brought to light by investigative journalist Carole Cadwalladr in the Stalked podcast, which exposed how legal inertia allows offenders to take advantage of lack of  safeguards against online abuse. Digital trails were disregarded as low risk, allowing escalation without intervention, in contrast to physical stalking. Moore's story highlights how urgently law enforcement training, stricter cyberstalking legislation, and IT platform accountability are needed to plug the gaps exploited by abusers. The case mirrors global patterns where women face disproportionate online violence, yet institutional responses remain inadequate. Without legal reform, survivors like Moore remain vulnerable to tech-enabled coercion.",
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