import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  id: number;
  src: string;
  alt: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // Start with the second slide
  const totalSlides = slides.length;

  // Clone first and last slides for infinite effect with unique keys
  const extendedSlides = [
    { ...slides[slides.length - 1], keyId: 'last-clone' },
    ...slides.map((slide, index) => ({ ...slide, keyId: `original-${index}` })),
    { ...slides[0], keyId: 'first-clone' },
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      if (nextIndex === totalSlides + 1) {
        // Loop back to the first slide
        setTimeout(() => setCurrentIndex(1), 100); // Delay for seamless transition
        return 0;
      }
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      const prevIndexCalc = prevIndex - 1;
      if (prevIndexCalc === 0) {
        // Loop to the last slide
        setTimeout(() => setCurrentIndex(totalSlides), 100); // Delay for seamless transition
        return totalSlides + 1;
      }
      return prevIndexCalc;
    });
  };

  return (
    <div className="relative w-full h-[300px] mx-auto mt-10 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out"
      >
        {extendedSlides.map(slide => (
          <div key={slide.keyId} className="flex-shrink-0 w-full h-full">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded lg:left-8"
        onClick={handlePrev}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded lg:right-8"
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
