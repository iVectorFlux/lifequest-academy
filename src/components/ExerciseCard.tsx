
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface ExerciseCardProps {
  moduleId: number;
  questions: Question[];
  onComplete: (score: number, total: number) => void;
}

const ExerciseCard = ({ moduleId, questions, onComplete }: ExerciseCardProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isExerciseComplete, setIsExerciseComplete] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const checkAnswer = () => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setIsAnswerChecked(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsExerciseComplete(true);
      onComplete(score + (isCorrect ? 1 : 0), questions.length);
    }
  };

  return (
    <Card className="glass-card w-full overflow-hidden border border-gray-100">
      <CardHeader className="bg-gradient-to-r from-life-blue-50 to-life-blue-100 border-b border-gray-100">
        <CardTitle className="text-lg font-medium flex justify-between items-center">
          <span>Exercise - Module {moduleId}</span>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-5">
        {!isExerciseComplete ? (
          <>
            <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
            
            <RadioGroup 
              value={selectedOption?.toString()} 
              onValueChange={(value) => setSelectedOption(parseInt(value))}
              className="space-y-3"
              disabled={isAnswerChecked}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className={cn(
                  "flex items-center space-x-2 border rounded-md p-3 transition-all",
                  isAnswerChecked && index === currentQuestion.correctAnswer 
                    ? "border-green-300 bg-green-50" 
                    : isAnswerChecked && index === selectedOption && selectedOption !== currentQuestion.correctAnswer
                      ? "border-red-300 bg-red-50"
                      : selectedOption === index
                        ? "border-life-blue-300 bg-life-blue-50"
                        : "border-gray-200 hover:border-life-blue-200 hover:bg-life-blue-50/50"
                )}>
                  <RadioGroupItem 
                    value={index.toString()} 
                    id={`option-${index}`} 
                    className={cn(
                      isAnswerChecked && index === currentQuestion.correctAnswer
                        ? "text-green-500 border-green-500" 
                        : isAnswerChecked && index === selectedOption && selectedOption !== currentQuestion.correctAnswer
                          ? "text-red-500 border-red-500"
                          : ""
                    )}
                  />
                  <Label 
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer"
                  >
                    {option}
                  </Label>
                  
                  {isAnswerChecked && index === currentQuestion.correctAnswer && (
                    <Check className="h-5 w-5 text-green-500" />
                  )}
                  {isAnswerChecked && index === selectedOption && selectedOption !== currentQuestion.correctAnswer && (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
              ))}
            </RadioGroup>
            
            {isAnswerChecked && (
              <div className={cn(
                "mt-4 p-3 rounded-md",
                isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
              )}>
                <p className={cn(
                  "font-medium",
                  isCorrect ? "text-green-700" : "text-red-700"
                )}>
                  {isCorrect 
                    ? "Correct! Well done." 
                    : `Incorrect. The correct answer is: ${currentQuestion.options[currentQuestion.correctAnswer]}`
                  }
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-xl font-semibold mb-2">Exercise Complete!</h3>
            <p className="text-muted-foreground mb-4">
              You scored {score} out of {questions.length}
            </p>
            <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center rounded-full bg-life-blue-50 border-4 border-life-blue-200">
              <span className="text-3xl font-bold text-life-blue-700">
                {Math.round((score / questions.length) * 100)}%
              </span>
            </div>
            {score === questions.length ? (
              <p className="text-green-600 font-medium">Perfect score! Excellent work!</p>
            ) : score >= questions.length * 0.7 ? (
              <p className="text-life-blue-600 font-medium">Good job! Keep practicing to improve.</p>
            ) : (
              <p className="text-amber-600 font-medium">You might need to review this module again.</p>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="bg-gray-50 border-t border-gray-100 p-4">
        {!isExerciseComplete ? (
          isAnswerChecked ? (
            <Button 
              onClick={nextQuestion} 
              className="ml-auto bg-life-blue-600 hover:bg-life-blue-700"
            >
              {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Exercise"}
            </Button>
          ) : (
            <Button 
              onClick={checkAnswer} 
              disabled={selectedOption === null}
              className="ml-auto bg-life-blue-600 hover:bg-life-blue-700 disabled:bg-gray-300"
            >
              Check Answer
            </Button>
          )
        ) : (
          <Button 
            onClick={() => window.location.href = '/course'} 
            className="mx-auto bg-life-blue-600 hover:bg-life-blue-700"
          >
            Return to Course
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
