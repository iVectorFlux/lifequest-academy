
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoId: number;
  title: string;
  videoUrl: string; 
  poster?: string;
  onComplete?: () => void;
}

const VideoPlayer = ({ videoId, title, videoUrl, poster, onComplete }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
      
      // Check if video completed
      if (video.currentTime >= video.duration - 0.5) {
        if (onComplete) onComplete();
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete]);

  const hideControlsTimer = () => {
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }

    controlsTimeout.current = setTimeout(() => {
      if (isPlaying) {
        setIsControlsVisible(false);
      }
    }, 3000);
  };

  useEffect(() => {
    if (isPlaying) {
      hideControlsTimer();
    } else {
      setIsControlsVisible(true);
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
    }

    return () => {
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const seekTo = parseFloat(e.target.value);
    video.currentTime = (seekTo / 100) * video.duration;
    setProgress(seekTo);
    setCurrentTime(video.currentTime);
  };

  const handleVideoClick = () => {
    setIsControlsVisible(true);
    hideControlsTimer();
    togglePlay();
  };

  const handleMouseMove = () => {
    setIsControlsVisible(true);
    hideControlsTimer();
  };

  const enterFullscreen = () => {
    const videoContainer = videoRef.current?.parentElement;
    if (!videoContainer) return;

    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Card className="glass-panel w-full overflow-hidden mb-6 border-none">
      <CardContent className="p-0">
        <div 
          className="relative aspect-video bg-black" 
          onMouseMove={handleMouseMove}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            poster={poster}
            className="w-full h-full cursor-pointer"
            onClick={handleVideoClick}
            preload="metadata"
          />
          
          {/* Overlay controls */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300",
              isControlsVisible ? "opacity-100" : "opacity-0"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="p-4 bg-gradient-to-b from-black/60 to-transparent">
              <h3 className="text-white text-shadow-sm text-lg font-medium">{title}</h3>
            </div>

            {/* Center play button */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                  onClick={togglePlay}
                >
                  <Play className="h-10 w-10" />
                </Button>
              </div>
            )}

            {/* Bottom controls */}
            <div className="p-4 bg-gradient-to-t from-black/90 to-transparent space-y-2">
              {/* Progress bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full accent-life-blue-500 cursor-pointer h-1 bg-white/30 rounded-full appearance-none"
              />
              
              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-white/20"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-white/20"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                  
                  <span className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={enterFullscreen}
                >
                  <Maximize className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
