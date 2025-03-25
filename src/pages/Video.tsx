
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ChevronRight, ChevronLeft, Book, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import VideoPlayer from '@/components/VideoPlayer';
import ExerciseCard from '@/components/ExerciseCard';

// Mock data for video lessons
const videoLessons = [
  {
    id: 1,
    title: "Introduction to Basic Life Support",
    description: "This video introduces the concept of Basic Life Support and explains when and why it's necessary to perform life-saving techniques.",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    poster: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
    transcript: "Welcome to the Introduction to Basic Life Support. In this module, we'll cover the fundamental concepts of BLS, including when and how to apply life-saving techniques. Basic Life Support consists of a series of life-saving techniques focused on the ABCs of pre-hospital emergency care—Airway, Breathing, and Circulation. The primary goals are to preserve life, prevent further deterioration, and promote recovery...",
    additionalNotes: [
      "BLS is typically performed until the victim shows signs of life or advanced medical care arrives.",
      "Early recognition and action are crucial for improving outcomes in emergency situations.",
      "Always remember to assess your own safety before attempting to help others."
    ]
  },
  {
    id: 2,
    title: "Adult CPR and AED Use",
    description: "Learn the correct techniques for performing CPR and using an AED on adult patients in emergency situations.",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    transcript: "In this module, we'll cover the proper techniques for performing CPR and using an AED on adult patients. The most recent guidelines emphasize the importance of early, high-quality chest compressions with minimal interruptions...",
    additionalNotes: [
      "Always check for responsiveness before beginning CPR.",
      "Proper hand positioning is crucial for effective chest compressions.",
      "AEDs are designed to be user-friendly—follow the voice prompts carefully."
    ]
  },
  {
    id: 3,
    title: "Child CPR and AED Modifications",
    description: "Understand the modifications needed when performing CPR and using an AED on children between 1 and 8 years of age.",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    transcript: "Child CPR requires several important modifications compared to adult CPR. In this module, we'll explore these differences and explain why they're necessary based on a child's anatomy and physiology...",
    additionalNotes: [
      "Use only one hand for chest compressions in children if necessary.",
      "Pediatric AED pads should be used for children when available.",
      "The compression depth for children is approximately one-third the depth of the chest."
    ]
  },
  {
    id: 4,
    title: "Infant CPR Techniques",
    description: "Learn the specific techniques for performing CPR on infants under 1 year of age.",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    transcript: "Infant CPR requires specialized techniques due to the significant anatomical differences between infants and adults. This module covers the proper procedures for performing CPR on infants under 1 year of age...",
    additionalNotes: [
      "Use two fingers or two thumbs for chest compressions in infants.",
      "Be especially gentle when opening the airway in infants.",
      "Cover both the mouth and nose when delivering rescue breaths to an infant."
    ]
  },
  {
    id: 5,
    title: "Choking Management",
    description: "Learn how to recognize and respond to choking emergencies in adults, children, and infants.",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    transcript: "Choking is a common emergency that can be life-threatening if not addressed promptly. In this module, we'll cover how to recognize signs of choking and the appropriate interventions for different age groups...",
    additionalNotes: [
      "The universal sign for choking is hands clutched to the throat.",
      "Abdominal thrusts (Heimlich maneuver) are used for adults and children.",
      "Back blows and chest thrusts are recommended for infants who are choking."
    ]
  }
];

// Mock exercise data
const exerciseData = [
  {
    moduleId: 1,
    questions: [
      {
        id: 1,
        question: "What is the primary goal of Basic Life Support (BLS)?",
        options: [
          "To administer medications",
          "To preserve life until advanced care arrives",
          "To diagnose medical conditions",
          "To provide long-term care"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which of the following is NOT part of the 'ABCs' of BLS?",
        options: [
          "Airway",
          "Breathing",
          "Circulation",
          "Diagnosis"
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: "Before providing care to a victim, what should you do first?",
        options: [
          "Start chest compressions immediately",
          "Call for an ambulance",
          "Ensure the scene is safe",
          "Check for a pulse"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    moduleId: 2,
    questions: [
      {
        id: 1,
        question: "At what rate should chest compressions be performed on an adult?",
        options: [
          "60-80 compressions per minute",
          "80-100 compressions per minute",
          "100-120 compressions per minute",
          "120-140 compressions per minute"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "How deep should chest compressions be on an adult?",
        options: [
          "At least 1 inch (2.5 cm)",
          "At least 2 inches (5 cm)",
          "At least 3 inches (7.5 cm)",
          "At least 4 inches (10 cm)"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "When using an AED, what should you do before delivering a shock?",
        options: [
          "Continue chest compressions",
          "Give two rescue breaths",
          "Make sure no one is touching the victim",
          "Check for a pulse"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    moduleId: 3,
    questions: [
      {
        id: 1,
        question: "How does child CPR differ from adult CPR?",
        options: [
          "It requires a different hand position",
          "It uses the same compression depth",
          "It should be performed at a slower rate",
          "It always requires two rescuers"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "When using an AED on a child between 1-8 years old, what should you use if available?",
        options: [
          "Standard adult pads",
          "Pediatric pads or a pediatric dose-attenuator system",
          "No AED should be used on children",
          "Multiple pads at once"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the recommended compression depth for a child?",
        options: [
          "At least 1 inch (2.5 cm)",
          "At least 2 inches (5 cm)",
          "At least 3 inches (7.5 cm)",
          "One-third the depth of the chest"
        ],
        correctAnswer: 3
      }
    ]
  },
  {
    moduleId: 4,
    questions: [
      {
        id: 1,
        question: "What technique should be used for chest compressions on an infant?",
        options: [
          "Two hands, one on top of the other",
          "One hand only",
          "Two fingers or two thumbs",
          "Palm of one hand"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "When giving rescue breaths to an infant, what should you cover?",
        options: [
          "Only the mouth",
          "Only the nose",
          "Both the mouth and nose",
          "Neither the mouth nor nose"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "How do you check for responsiveness in an infant?",
        options: [
          "Shout at the infant",
          "Gently tap the bottom of the foot",
          "Shake the infant vigorously",
          "Pinch the infant's arm"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    moduleId: 5,
    questions: [
      {
        id: 1,
        question: "What is the universal sign for choking?",
        options: [
          "Hands clasped around the throat",
          "Coughing loudly",
          "Pointing to the mouth",
          "Waving arms frantically"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What technique is used to assist a choking adult?",
        options: [
          "Back blows only",
          "Chest thrusts only",
          "Abdominal thrusts (Heimlich maneuver)",
          "Rescue breaths only"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is the recommended technique for a choking infant?",
        options: [
          "Abdominal thrusts only",
          "Back blows and chest thrusts",
          "Chest compressions only",
          "Rescue breaths only"
        ],
        correctAnswer: 1
      }
    ]
  }
];

const Video = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const showExercise = searchParams.get('exercise') === 'true';
  const videoId = parseInt(id || '1');
  
  const [activeTab, setActiveTab] = useState<'video' | 'notes' | 'transcript'>(showExercise ? 'notes' : 'video');
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  
  const currentVideo = videoLessons.find(video => video.id === videoId) || videoLessons[0];
  const prevVideo = videoId > 1 ? videoId - 1 : null;
  const nextVideo = videoId < videoLessons.length ? videoId + 1 : null;
  
  const handleExerciseComplete = (score: number, total: number) => {
    setExerciseCompleted(true);
    console.log(`Exercise completed with score: ${score}/${total}`);
    // Here you would typically update some user progress data
  };
  
  const handleVideoComplete = () => {
    console.log(`Video ${videoId} completed`);
    // Here you would typically update some user progress data
  };
  
  useEffect(() => {
    // Reset exercise completed state when video changes
    setExerciseCompleted(false);
    // Reset tab to video when navigating to a new video without exercise param
    if (!showExercise) {
      setActiveTab('video');
    } else {
      setActiveTab('notes');
    }
  }, [videoId, showExercise]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="pt-20 px-6 lg:px-8 flex-grow">
        <div className="max-w-5xl mx-auto py-8">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => navigate('/course')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Course
            </Button>
            
            <div className="flex space-x-2">
              {prevVideo && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-life-blue-700 border-life-blue-200 hover:bg-life-blue-50"
                  onClick={() => navigate(`/video/${prevVideo}${showExercise ? '?exercise=true' : ''}`)}
                >
                  <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              )}
              
              {nextVideo && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-life-blue-700 border-life-blue-200 hover:bg-life-blue-50"
                  onClick={() => navigate(`/video/${nextVideo}${showExercise ? '?exercise=true' : ''}`)}
                >
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
          {/* Title and description */}
          <div className="mb-6 animate-fade-in animation-delay-150">
            <h1 className="text-2xl font-bold mb-2">{currentVideo.title}</h1>
            <p className="text-muted-foreground">{currentVideo.description}</p>
          </div>
          
          {/* Content tabs */}
          <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="animate-fade-in animation-delay-300">
            <TabsList className="mb-6 bg-white border border-gray-200">
              <TabsTrigger 
                value="video" 
                className="data-[state=active]:bg-life-blue-50 data-[state=active]:text-life-blue-700 data-[state=active]:shadow-none"
                disabled={showExercise && !exerciseCompleted}
              >
                <Play className="h-4 w-4 mr-2" /> Video Lesson
              </TabsTrigger>
              <TabsTrigger 
                value="notes" 
                className="data-[state=active]:bg-life-blue-50 data-[state=active]:text-life-blue-700 data-[state=active]:shadow-none"
              >
                <Book className="h-4 w-4 mr-2" /> {showExercise ? "Exercise" : "Notes"}
              </TabsTrigger>
              <TabsTrigger 
                value="transcript" 
                className="data-[state=active]:bg-life-blue-50 data-[state=active]:text-life-blue-700 data-[state=active]:shadow-none"
                disabled={showExercise && !exerciseCompleted}
              >
                Transcript
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="video" className="mt-0 animate-fade-in">
              <VideoPlayer 
                videoId={videoId}
                title={currentVideo.title}
                videoUrl={currentVideo.videoUrl}
                poster={currentVideo.poster}
                onComplete={handleVideoComplete}
              />
            </TabsContent>
            
            <TabsContent value="notes" className="mt-0 animate-fade-in">
              {showExercise ? (
                <ExerciseCard 
                  moduleId={videoId}
                  questions={exerciseData.find(ex => ex.moduleId === videoId)?.questions || []}
                  onComplete={handleExerciseComplete}
                />
              ) : (
                <Card className="glass-card border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Key Points</h3>
                    <ul className="space-y-3">
                      {currentVideo.additionalNotes.map((note, index) => (
                        <li key={index} className="flex">
                          <span className="text-life-blue-600 mr-2">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="transcript" className="mt-0 animate-fade-in">
              <Card className="glass-card border-gray-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Video Transcript</h3>
                  <div className="text-muted-foreground whitespace-pre-line">
                    {currentVideo.transcript}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Video;
