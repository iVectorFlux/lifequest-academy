
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Play, Lock, FileText, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';

// Course data
const courseModules = [
  {
    id: 1,
    title: "Introduction to Basic Life Support",
    description: "Learn the fundamentals of BLS and understand when and how to apply life-saving techniques.",
    duration: "15 min",
    completed: true,
    locked: false,
  },
  {
    id: 2,
    title: "Adult CPR and AED Use",
    description: "Master the techniques for performing CPR and using an AED on adult patients.",
    duration: "25 min",
    completed: true,
    locked: false,
  },
  {
    id: 3,
    title: "Child CPR and AED Modifications",
    description: "Learn the modifications needed when performing CPR and using an AED on children.",
    duration: "20 min",
    completed: false,
    locked: false,
  },
  {
    id: 4,
    title: "Infant CPR Techniques",
    description: "Understand the specific techniques required for performing CPR on infants.",
    duration: "20 min",
    completed: false,
    locked: false,
  },
  {
    id: 5,
    title: "Choking Management",
    description: "Learn how to recognize and respond to choking emergencies in adults, children, and infants.",
    duration: "15 min",
    completed: false,
    locked: false,
  },
  {
    id: 6,
    title: "Recovery Position",
    description: "Understand when and how to place someone in the recovery position.",
    duration: "10 min",
    completed: false,
    locked: true,
  },
  {
    id: 7,
    title: "Team Dynamics in Resuscitation",
    description: "Learn effective communication and coordination during emergency responses.",
    duration: "15 min",
    completed: false,
    locked: true,
  },
  {
    id: 8,
    title: "Special Considerations",
    description: "Address special situations including pregnancy, drowning, and electrocution.",
    duration: "20 min",
    completed: false,
    locked: true,
  },
  {
    id: 9,
    title: "Legal and Ethical Considerations",
    description: "Understand the legal protections and ethical obligations in providing emergency care.",
    duration: "15 min",
    completed: false,
    locked: true,
  },
  {
    id: 10,
    title: "Final Assessment and Certification",
    description: "Complete the final examination to earn your BLS certification.",
    duration: "30 min",
    completed: false,
    locked: true,
  },
];

const Course = () => {
  const [currentTab, setCurrentTab] = useState<'modules' | 'resources'>('modules');
  
  // Calculate progress
  const completedModules = courseModules.filter(module => module.completed).length;
  const progressPercentage = (completedModules / courseModules.length) * 100;
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-28 pb-10 px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-fade-in">
            <div>
              <h1 className="text-3xl font-bold mb-2">Basic Life Support Certification</h1>
              <p className="text-muted-foreground">Master essential life-saving techniques and earn your certification</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-life-blue-600 hover:bg-life-blue-700">
                Continue Learning
              </Button>
              <Button variant="outline" className="border-life-blue-200 text-life-blue-700 hover:bg-life-blue-50">
                Download Materials
              </Button>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white border-gray-100 shadow-sm animate-slide-up">
              <CardContent className="p-5 flex items-center">
                <div className="mr-4 bg-life-blue-50 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-life-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">3.5 hours total</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-100 shadow-sm animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-5 flex items-center">
                <div className="mr-4 bg-life-blue-50 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-life-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Resources</p>
                  <p className="font-medium">10 videos, 10 exercises</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-100 shadow-sm animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground mb-1">Your Progress</p>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{completedModules} of {courseModules.length} modules</p>
                  <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2 bg-gray-100" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-10 px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                currentTab === 'modules'
                  ? 'text-life-blue-700 border-b-2 border-life-blue-500'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setCurrentTab('modules')}
            >
              Course Modules
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                currentTab === 'resources'
                  ? 'text-life-blue-700 border-b-2 border-life-blue-500'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setCurrentTab('resources')}
            >
              Resources
            </button>
          </div>
          
          {currentTab === 'modules' ? (
            <div className="space-y-4 animate-fade-in">
              {courseModules.map((module) => (
                <Card 
                  key={module.id}
                  className={`border ${
                    module.completed 
                      ? 'bg-life-blue-50/50 border-life-blue-100' 
                      : module.locked
                        ? 'bg-gray-50 border-gray-200'
                        : 'bg-white border-gray-100 hover:border-life-blue-200'
                  } transition-all duration-200`}
                >
                  <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-life-blue-100 text-life-blue-700 font-semibold text-sm mr-3">
                          {module.id}
                        </span>
                        <h3 className="font-semibold">{module.title}</h3>
                        {module.completed && (
                          <Badge className="ml-3 bg-green-100 text-green-800 hover:bg-green-200">
                            Completed
                          </Badge>
                        )}
                        {module.locked && (
                          <Badge className="ml-3 bg-gray-100 text-gray-600 hover:bg-gray-200">
                            Locked
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm ml-11 mb-3">
                        {module.description}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground ml-11">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        <span>{module.duration}</span>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4 flex space-x-3 ml-11 sm:ml-0">
                      <Button 
                        asChild
                        variant="outline" 
                        size="sm"
                        className={`text-xs ${
                          module.locked
                            ? 'text-gray-400 border-gray-200 hover:bg-gray-100 cursor-not-allowed'
                            : 'text-life-blue-700 border-life-blue-200 hover:bg-life-blue-50'
                        }`}
                        disabled={module.locked}
                      >
                        <Link to={module.locked ? "#" : `/video/${module.id}`}>
                          {module.completed ? (
                            <div className="flex items-center">
                              <CheckCircle className="h-3.5 w-3.5 mr-1.5" />
                              Rewatch
                            </div>
                          ) : (
                            <div className="flex items-center">
                              {module.locked ? (
                                <Lock className="h-3.5 w-3.5 mr-1.5" />
                              ) : (
                                <Play className="h-3.5 w-3.5 mr-1.5" />
                              )}
                              {module.locked ? "Locked" : "Watch Video"}
                            </div>
                          )}
                        </Link>
                      </Button>
                      
                      <Button 
                        asChild
                        size="sm"
                        className={`text-xs ${
                          module.locked
                            ? 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed'
                            : 'bg-life-blue-600 hover:bg-life-blue-700'
                        }`}
                        disabled={module.locked}
                      >
                        <Link to={module.locked ? "#" : `/video/${module.id}?exercise=true`}>
                          Start Exercise
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {[
                {
                  title: "BLS Handbook PDF",
                  description: "Comprehensive guide covering all aspects of basic life support techniques.",
                  icon: <FileText className="h-10 w-10 text-life-blue-600" />,
                  buttonText: "Download PDF"
                },
                {
                  title: "CPR Reference Cards",
                  description: "Quick reference cards for adult, child, and infant CPR procedures.",
                  icon: <FileText className="h-10 w-10 text-life-blue-600" />,
                  buttonText: "Download Cards"
                },
                {
                  title: "Equipment Checklist",
                  description: "List of recommended equipment for practicing BLS techniques at home.",
                  icon: <FileText className="h-10 w-10 text-life-blue-600" />,
                  buttonText: "View Checklist"
                },
                {
                  title: "Latest Guidelines",
                  description: "Most recent guidelines and recommendations from leading health organizations.",
                  icon: <FileText className="h-10 w-10 text-life-blue-600" />,
                  buttonText: "View Guidelines"
                }
              ].map((resource, index) => (
                <Card key={index} className="bg-white border-gray-100 hover:border-life-blue-200 transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-life-blue-50 p-3 w-16 h-16 rounded-lg flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {resource.description}
                    </p>
                    <Button variant="outline" size="sm" className="text-life-blue-700 border-life-blue-200 hover:bg-life-blue-50">
                      {resource.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Course;
