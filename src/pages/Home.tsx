import React from 'react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-purple-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 md:mb-6">Fighting Cyber Violence Against Women and Girls</h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The increasing reach of the internet, the rapid spread of mobile information, and the widespread use of social media, coupled with the existing pandemic of violence against women and girls (VAWG), has led to the emergence of cyber VAWG as a growing global problem with potentially significant economic and societal consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8 md:mb-12">Who We Are</h2>
          <div className="space-y-8">
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The CyVAWG Project (Cyber Violence Against Women and Girls) is a groundbreaking initiative dedicated to addressing and mitigating the impact of online violence targeting women and girls. Funded by Innovate UK and supported by the Department for Science, Innovation and Technology (DSIT) and West Midlands Police, our project operates at the intersection of research, advocacy, and technology.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Led by Dr. Anitha Chinnaswamy at Aston University, CyVAWG brings together a team of experts, researchers, and stakeholders who are committed to raising awareness, conducting in-depth research, and developing practical solutions to protect vulnerable communities from the growing threat of cyber violence.
              </p>
              <div className="flex justify-center items-center">
              <img 
                src="\pics\e5f54562-7f4d-4dd3-b7bb-681a27cc44e0.jpeg"
                alt="West Midlands Police Logo"
                className="w-64 h-auto object-contain"
              />
            </div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower individuals and institutions by providing resources, policy recommendations, and cutting-edge strategies to combat online harassment, abuse, and exploitation. Through collaboration with law enforcement agencies, policymakers, and the tech industry, we aim to create safer digital spaces for women and girls worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <img 
                src="\pics\OIP (1).jpeg"
                alt="Aston University Logo"
                className="w-full object-contain"
              />
              <img 
                src="\pics\38657e45-efc0-4287-8bf3-42d6517819e5.jpeg"
                alt="Department for Science, Innovation & Technology Logo"
                className="w-full object-contain"
              />
              <img 
                src="\pics\050bf6bf-2299-44e9-8558-d9d9650ad9ae.jpeg"
                alt="Innovate UK Logo"
                className="w-full object-contain"
              />
              <img 
                src="\pics\450b4284-1f6e-4ed4-b5e6-af89841d819d.jpeg"
                alt="West Midlands Police Logo"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}