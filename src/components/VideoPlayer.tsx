/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, AlertCircle } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  classNameVideo?: string;
  fallbackText?: string;
  showOverlayControls?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  controls = true,
  classNameVideo = '',
  fallbackText = 'Your browser does not support the video tag.',
  showOverlayControls = false
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Force properties when source dynamic or component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setHasError(false);
    setIsLoading(true);

    // Apply strict attributes for mobile safari & Chrome webview compatibility
    video.muted = isMuted;
    video.defaultMuted = isMuted;
    
    if (playsInline) {
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
    }
    
    video.setAttribute('controlslist', 'nodownload');

    video.load();

    if (autoPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch((err) => {
            console.warn('Autoplay was prevented by browser strict rules. Interaction required:', err);
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    } else {
      setIsLoading(false);
    }
  }, [src, autoPlay, playsInline]);

  // Synchronize internal state with changes to muted prop from parent level or toggles
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handlePlayToggle = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error('Failed to trigger manual video playback:', err);
          // Auto fallback to muted play if unmuted play was rejected
          if (!video.muted) {
            video.muted = true;
            setIsMuted(true);
            video.play()
              .then(() => setIsPlaying(true))
              .catch(() => setHasError(true));
          } else {
            setHasError(true);
          }
        });
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  };

  const handleWaiting = () => {
    setIsLoading(true);
  };

  const handlePlaying = () => {
    setIsLoading(false);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden bg-brand-dark group ${className}`}>
      {/* Video element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        autoPlay={autoPlay}
        muted={isMuted}
        playsInline={playsInline}
        controls={controls}
        onWaiting={handleWaiting}
        onPlaying={handlePlaying}
        onPause={handlePause}
        onError={handleError}
        className={`w-full h-full object-cover select-none transition-opacity duration-300 ${
          isLoading ? 'opacity-85' : 'opacity-100'
        } ${classNameVideo}`}
      >
        {fallbackText}
      </video>

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] pointer-events-none z-10 transition-opacity duration-300">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
            <span className="font-mono text-[9px] text-white/80 tracking-widest uppercase">Loading Walkthrough...</span>
          </div>
        </div>
      )}

      {/* Error Viewport */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-dark/95 p-6 text-center z-15">
          <AlertCircle className="w-8 h-8 text-brand-accent mb-2" />
          <p className="font-serif text-sm font-bold text-white mb-1">Could not load video</p>
          <span className="font-sans text-xs text-[#8A8070] max-w-xs mb-3">
            The media codec might not be supported on this browser or internet is weak.
          </span>
          <button
            onClick={() => {
              setHasError(false);
              videoRef.current?.load();
            }}
            className="px-4 py-1.5 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-mono text-[10px] font-bold rounded-full transition-colors uppercase tracking-wider"
          >
            Retry Connection
          </button>
        </div>
      )}

      {/* Custom Overlay Controls - rendered optionally alongside native controls if custom controls requested */}
      {showOverlayControls && !hasError && (
        <>
          {/* Subtle vignette layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 opacity-50 pointer-events-none transition-opacity duration-300 group-hover:opacity-75 z-2" />

          {/* Click to play/pause on the core video background area */}
          <div 
            className="absolute inset-0 cursor-pointer z-3" 
            onClick={handlePlayToggle}
          />

          {/* Centered big play button when paused */}
          {!isPlaying && !isLoading && (
            <button
              onClick={handlePlayToggle}
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-dark/85 backdrop-blur-md border border-brand-accent/40 text-brand-accent hover:text-white hover:border-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-4 cursor-pointer"
            >
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </button>
          )}

          {/* Lower layout details panel & mini controllers bar */}
          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-4 pointer-events-none">
            <div className="flex items-center gap-2 pointer-events-auto">
              {/* Play Pause button */}
              <button
                onClick={handlePlayToggle}
                className="w-8 h-8 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 text-white hover:text-brand-accent hover:border-brand-accent/50 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />}
              </button>

              {/* Mute button */}
              <button
                onClick={handleMuteToggle}
                className="w-8 h-8 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 text-white hover:text-brand-accent hover:border-brand-accent/50 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Scale Fullscreen Controller */}
            <div className="pointer-events-auto">
              <button
                onClick={handleFullscreen}
                className="w-8 h-8 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 text-white hover:text-brand-accent hover:border-brand-accent/50 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                title="Fullscreen Mode"
              >
                <Maximize className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
