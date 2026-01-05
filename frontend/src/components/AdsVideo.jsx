import React, { useRef, useState, useEffect } from 'react'
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaVolumeMute, FaExpand, FaCompress, FaVideo } from 'react-icons/fa'

const AdsVideo = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check video source
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [])

  // Handle video error
  const handleVideoError = () => {
    console.error('Error loading video:', videoRef.current?.error)
    setVideoError(true)
    setIsLoading(false)
  }

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(err => {
          console.error('Error playing video:', err)
          setVideoError(true)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle forward/backward
  const skipTime = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  // Handle time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  // Handle loaded metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
      setIsLoading(false)
      setVideoError(false)
    }
  }

  // Handle seek
  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime
      setCurrentTime(seekTime)
    }
  }

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      if (newMutedState) {
        setVolume(0)
      } else {
        setVolume(1)
        videoRef.current.volume = 1
      }
    }
  }

  // Toggle fullscreen
  const toggleFullscreen = () => {
    const videoContainer = videoRef.current.parentElement
    
    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Format time
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch <span className="text-[#D4AF37]">Coach Olivia</span> Explain
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how AI writing can transform your income in this exclusive video
          </p>
        </div>

        {/* Video Container */}
        <div className="relative bg-black rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl">
          {/* Video Element */}
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              src="/myvideo.mp4"
              className="w-full h-full object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onError={handleVideoError}
              onClick={togglePlay}
              preload="metadata"
              crossOrigin="anonymous"
              playsInline
              webkit-playsinline="true"
            >
              <source src="/myvideo.mp4" type="video/mp4" />
              <source src="/myvideo.mp4" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
            
            {/* Loading State */}
            {isLoading && !videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-300">Loading video...</p>
                </div>
              </div>
            )}
            
            {/* Error State */}
            {videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="text-center p-8">
                  <FaVideo className="text-6xl text-red-500 mx-auto mb-4" />
                  <p className="text-xl text-gray-300 mb-2">Video failed to load</p>
                  <p className="text-gray-400 mb-4">Check if ads.MOV exists in public folder</p>
                  <button 
                    onClick={() => {
                      setIsLoading(true)
                      setVideoError(false)
                      if (videoRef.current) {
                        videoRef.current.load()
                      }
                    }}
                    className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg hover:bg-[#B8860B] transition-colors"
                  >
                    Retry Loading
                  </button>
                </div>
              </div>
            )}
            
            {/* Play/Pause Overlay */}
            {!isPlaying && !isLoading && !videoError && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40"
                onClick={togglePlay}
              >
                <div className="bg-black/70 rounded-full p-6 hover:bg-black/80 transition-all duration-300 hover:scale-110">
                  <FaPlay className="text-5xl text-[#D4AF37]" />
                </div>
              </div>
            )}
            
            {/* Video Title */}
            <div className="absolute top-4 left-4 bg-black/70 px-4 py-2 rounded-lg">
              <p className="text-sm font-semibold text-[#D4AF37]">AI Writing Masterclass Preview</p>
            </div>
            
            {/* Play Indicator */}
            {isPlaying && (
              <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-lg">
                <span className="text-sm text-gray-300">▶ Now Playing</span>
              </div>
            )}
          </div>

          {/* Custom Video Controls */}
          <div className="bg-gradient-to-t from-black to-gray-900/90 p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4AF37]"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50"
                  disabled={videoError}
                >
                  {isPlaying ? (
                    <FaPause className="text-xl text-[#D4AF37]" />
                  ) : (
                    <FaPlay className="text-xl text-[#D4AF37]" />
                  )}
                </button>

                {/* Skip Backward */}
                <button
                  onClick={() => skipTime(-10)}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50"
                  disabled={videoError}
                  title="Skip back 10s"
                >
                  <FaBackward className="text-xl text-[#D4AF37]" />
                </button>

                {/* Skip Forward */}
                <button
                  onClick={() => skipTime(10)}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50"
                  disabled={videoError}
                  title="Skip forward 10s"
                >
                  <FaForward className="text-xl text-[#D4AF37]" />
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <FaVolumeMute className="text-lg text-gray-300" />
                    ) : (
                      <FaVolumeUp className="text-lg text-gray-300" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-4">
                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                >
                  {isFullscreen ? (
                    <FaCompress className="text-xl text-gray-300" />
                  ) : (
                    <FaExpand className="text-xl text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting Tips */}
        {videoError && (
          <div className="mt-6 p-6 bg-red-900/20 border border-red-700/50 rounded-xl">
            <h4 className="text-lg font-bold text-red-400 mb-2">Troubleshooting Tips:</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Make sure <code className="bg-black/50 px-2 py-1 rounded">ads.MOV</code> is in your public folder</li>
              <li>• Try converting the video to MP4 format (MOV might have compatibility issues)</li>
              <li>• Check browser console for specific error messages (F12 → Console)</li>
              <li>• Try using a different video format like MP4 or WebM</li>
            </ul>
          </div>
        )}

        {/* Video Description */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <span className="text-sm">Learn AI Writing</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <span className="text-sm">Earn Legit Income</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <span className="text-sm">Step-by-Step Guide</span>
            </div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            In this video, Coach Olivia explains how absolute beginners can start earning consistent income 
            through AI writing, even with no prior experience.
          </p>
          
          <button 
            onClick={togglePlay}
            className="mt-6 bg-[#D4AF37] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#B8860B] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={videoError}
          >
            {isPlaying ? 'Pause Video' : 'Play Video'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default AdsVideo