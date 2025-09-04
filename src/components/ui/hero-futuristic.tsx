import React, { useState, useEffect } from 'react'
import { LavaLamp } from './fluid-blob'

export const Html = () => {
  const titleWords = 'Build Your Dreams'.split(' ')
  const subtitle = 'AI-powered creativity for the next generation.'
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Fluid blob background covering entire page */}
      <div className="fixed inset-0 z-0">
        <LavaLamp />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Main content */}
      <div className="h-screen uppercase items-center w-full absolute z-20 pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${
                  index < visibleWords 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  textShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(139, 92, 246, 0.6)',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold">
          <div 
            className={`transition-all duration-1000 ${
              subtitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              transitionDelay: '1200ms',
              textShadow: '0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(236, 72, 153, 0.5)',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Scroll button */}
      <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 text-white border border-white/50 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-black/60 transition-all duration-300 flex items-center space-x-2 pointer-events-auto group shadow-lg">
        <span className="font-medium" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>Scroll to explore</span>
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 22 22" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:translate-y-1 transition-transform duration-300"
        >
          <path d="M11 5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 12L11 17L16 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  )
}

export default Html