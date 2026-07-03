import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { AdsMockup } from './AdsMockup';
import { LpMockup } from './LpMockup';
import { LeadsMockup } from './LeadsMockup';
import { QualifyMockup } from './QualifyMockup';

interface ProcessVideoProps {
  src: string;
  fallbackType: 'ads' | 'lp' | 'leads' | 'qualify';
}

export function ProcessVideo({ src, fallbackType }: ProcessVideoProps) {
  const [viewMode, setViewMode] = useState<'mockup' | 'video'>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full group">
      {/* Top Toggle Bar */}
      <div className="absolute top-2 right-2 z-30 flex gap-1 bg-black/60 backdrop-blur-sm p-0.5 rounded-lg border border-white/10 text-[9px] font-bold">
        <button 
          onClick={() => setViewMode('video')}
          className={`px-2 py-1 rounded transition-colors ${viewMode === 'video' ? 'bg-[#E0BE6A] text-black' : 'text-white/70 hover:text-white'}`}
        >
          Demo Video
        </button>
        <button 
          onClick={() => setViewMode('mockup')}
          className={`px-2 py-1 rounded transition-colors ${viewMode === 'mockup' ? 'bg-[#E0BE6A] text-black' : 'text-white/70 hover:text-white'}`}
        >
          Interactive Mock
        </button>
      </div>

      {viewMode === 'video' ? (
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            src={src}
          />
          
          {/* Custom Video Overlay Controls */}
          <div className="absolute bottom-2 left-2 right-2 z-20 flex justify-between items-center bg-black/50 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={togglePlay}
              className="p-1 hover:bg-white/10 rounded text-white flex items-center gap-1 text-[10px]"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white text-transparent ml-0.5" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button 
              onClick={toggleMute}
              className="p-1 hover:bg-white/10 rounded text-white flex items-center gap-1 text-[10px]"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isMuted ? 'Muted' : 'Unmuted'}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          {fallbackType === 'ads' && <AdsMockup />}
          {fallbackType === 'lp' && <LpMockup />}
          {fallbackType === 'qualify' && <QualifyMockup />}
          {fallbackType === 'leads' && <LeadsMockup />}
        </div>
      )}
    </div>
  );
}
