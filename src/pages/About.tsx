
import React from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">About TrueBLS</h1>
        
        <div className="space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-sm">
          <p className="text-lg">
            TrueBLS, a pioneering brand under iVectorFlux Technologies Pvt Ltd, is on a mission to 
            revolutionize CPR, first aid, and life support training in India. We aim to empower every 
            individual with the knowledge and skills to respond effectively during emergencies, ultimately 
            saving lives and making communities safer.
          </p>
          
          <p className="text-lg">
            At TrueBLS, we believe that lifesaving skills should be accessible to all. Through our 
            innovative training methods—both online and in-person—we provide comprehensive courses in 
            CPR, Basic Life Support (BLS), and Advanced Cardiovascular Life Support (ACLS). Our programs 
            cater to individuals, corporates, educational institutions, healthcare organizations, and 
            public sectors, ensuring that lifesaving expertise is widespread and impactful.
          </p>
          
          <p className="text-lg">
            By combining modern technology with expert training, TrueBLS is committed to fostering a 
            culture of preparedness and resilience. Join us in our mission to build a nation of lifesavers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
