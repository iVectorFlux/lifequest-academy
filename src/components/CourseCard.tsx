
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Users } from 'lucide-react';

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  students: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
}

const CourseCard = ({
  id,
  title,
  description,
  duration,
  students,
  level,
  image
}: CourseCardProps) => {
  const levelColor = {
    Beginner: 'bg-green-100 text-green-800 hover:bg-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    Advanced: 'bg-red-100 text-red-800 hover:bg-red-200',
  }[level];

  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md border-transparent hover:border-life-blue-200 glass-card group">
      <CardHeader className="p-0 relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
        <div className="absolute bottom-3 left-4 flex items-center text-white">
          <PlayCircle className="w-5 h-5 mr-1.5" />
          <span className="text-sm font-medium">{duration}</span>
        </div>
        <Badge className={`absolute top-3 right-3 ${levelColor}`}>
          {level}
        </Badge>
      </CardHeader>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-balance">{title}</h3>
        <p className="text-muted-foreground line-clamp-3 mb-4 text-sm">{description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="w-4 h-4 mr-1" />
          <span>{students.toLocaleString()} students</span>
        </div>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0">
        <Button asChild className="w-full bg-life-blue-600 hover:bg-life-blue-700">
          <Link to={`/course`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
