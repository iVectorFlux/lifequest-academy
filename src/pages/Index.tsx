import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Heart, Award, Clock, HeartPulse, LifeBuoy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white -z-10"></div>
        <div className="absolute right-0 top-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-300 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="px-3 py-1.5 bg-red-100 text-red-800 hover:bg-red-200 border-none mb-2">
              Professional Certification
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-gray-900">
              Master Basic Life Support Skills
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Acquire essential life-saving techniques and gain the confidence to respond effectively in emergency situations.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <Link to="/course">Enroll in Course</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800 transition-all"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 text-sm">
              <div className="flex items-center text-gray-700">
                <Check className="text-red-600 mr-2 h-5 w-5" />
                <span>Internationally Recognized</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Check className="text-red-600 mr-2 h-5 w-5" />
                <span>Certificate Included</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Check className="text-red-600 mr-2 h-5 w-5" />
                <span>Practical Exercises</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-300">
            <div className="flex justify-center items-center">
              <div className="w-64 h-64 bg-white rounded-full overflow-hidden shadow-md flex items-center justify-center">
                <HeartPulse className="h-32 w-32 text-red-500" strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 max-w-xs animate-scale-in">
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 rounded-full p-2">
                  <Heart className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Save Lives</h3>
                  <p className="text-xs text-gray-600">Learn essential CPR techniques</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 max-w-xs animate-scale-in animation-delay-150">
              <div className="flex items-start space-x-3">
                <div className="bg-amber-100 rounded-full p-2">
                  <Award className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Get Certified</h3>
                  <p className="text-xs text-gray-600">Earn your BLS certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Course Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="px-3 py-1.5 bg-red-100 text-red-800 hover:bg-red-200 border-none mb-3">
              Our Curriculum
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Life Support Training</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our professionally designed course provides you with all the skills needed to perform basic life support in emergency situations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard
              id={1}
              title="Basic Life Support Certification"
              description="Learn essential life-saving techniques including CPR, AED use, and how to respond to choking emergencies in adults, children, and infants."
              duration="10 hours"
              students={1250}
              level="Beginner"
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
            />
            
            <CourseCard
              id={2}
              title="Advanced Cardiac Life Support"
              description="Build on your BLS skills with advanced techniques for cardiovascular emergencies, including rhythm recognition and pharmaceutical interventions."
              duration="15 hours"
              students={890}
              level="Intermediate"
              image="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=400&q=80"
            />
            
            <CourseCard
              id={3}
              title="Pediatric Advanced Life Support"
              description="Specialized training focused on emergency care for infants and children, addressing their unique physiological and anatomical differences."
              duration="12 hours"
              students={720}
              level="Advanced"
              image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="px-3 py-1.5 bg-red-100 text-red-800 hover:bg-red-200 border-none mb-3">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Modern Approach to Life Support Training</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our innovative platform combines video-based learning with interactive exercises for a comprehensive learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-red-600" />,
                title: "Self-Paced Learning",
                description: "Complete the course at your own pace, with 24/7 access to all materials."
              },
              {
                icon: <Award className="h-8 w-8 text-red-600" />,
                title: "Certification",
                description: "Earn a verified certificate upon successful completion of the course."
              },
              {
                icon: <Check className="h-8 w-8 text-red-600" />,
                title: "Expert Instruction",
                description: "Learn from certified professionals with years of field experience."
              },
              {
                icon: <LifeBuoy className="h-8 w-8 text-red-600" />,
                title: "Practice Exercises",
                description: "Reinforce your knowledge through interactive quizzes and simulations."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-all animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Life Support Certified?</h2>
            <p className="text-red-100 mb-8 text-lg">
              Join thousands of healthcare professionals and concerned citizens who have learned these critical skills through our platform.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-red-700 hover:bg-red-50 border-white"
              asChild
            >
              <Link to="/course">Start Learning Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white text-xl mb-4">trueBLS</h3>
            <p className="text-gray-400 text-sm">
              Providing quality life support training and certification for healthcare professionals and the general public.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/course" className="hover:text-white transition-colors">Courses</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.504.344-1.857.182-.467.399.8.748-1.15.35.35.683.566.115.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TrueBLS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
