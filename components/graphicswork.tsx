'use client'
import React, { useState, useEffect, useRef } from 'react';

// Define the type for our image objects
type ImageType = {
  id: number;
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

// Sample array of images with varying aspect ratios
const sampleImages: ImageType[] = [
    { id: 1, src: '/graphics/designadvert.jpg', alt: 'Poster', title: 'Advert Card', width: 800, height: 1200 },
    { id: 2, src: '/graphics/grad.jpg', alt: 'Poster', title: 'Graduation Card', width: 800, height: 800 },
    { id: 3, src: '/graphics/ICEM 1.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
    // { id: 31, src: '/graphics/ICEM 2.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
    { id: 32, src: '/graphics/ICEM 3.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
    { id: 33, src: '/graphics/ICEM F4.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
    { id: 34, src: '/graphics/ICEM 4.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
    // { id: 4, src: '/graphics/centric.jpg', alt: 'Advert Card', title: 'Advert Card', width: 800, height: 800 },
    { id: 41, src: '/graphics/JASTUTE.png', alt: 'Advert Card', title: 'Advert Card', width: 800, height: 800 },
    { id: 5, src: '/graphics/closetA.jpg', alt: 'Advert Card', title: 'Advert Card', width: 800, height: 1200 },
    { id: 6, src: '/graphics/mashujaa.jpg', alt: 'Poster', title: 'Mashujaa Card', width: 800, height: 800 },
    { id: 8, src: '/graphics/website.jpg', alt: 'poster', title: 'Advert Card', width: 800, height: 1000 },
    { id: 7, src:'/graphics/instagramdesign.jpg', alt: 'Design', title: 'Pictorial Design', width: 800, height: 600 },
    { id: 9, src: '/graphics/ypk.jpg', alt: 'Book Cover', title: 'Youth Power Kenya', width: 1000, height: 800 },
    { id: 10, src:'/graphics/jastutelogo.jpg', alt: 'Poster', title: 'JASTUTE Logo', width: 800, height: 600 },
    { id: 11, src:'/graphics/facebookcover.jpg', alt: 'Social Media barner', title: 'Advert Card', width: 800, height: 600 },
    { id: 12, src:'/graphics/engineeringDay.jpg', alt: 'Poster', title: 'Engineering day', width: 800, height: 600 },
    { id: 13, src:'/graphics/ypklogo.png', alt: 'Logo', title: 'YPK Logo', width: 800, height: 600 },
    { id: 14, src:'/graphics/yearbook.jpg', alt: 'Poster', title: 'Yearbook Cover', width: 800, height: 600 },
    { id: 15, src:'/graphics/centricloset.jpg', alt: 'Poster', title: 'Centri closet advent', width: 800, height: 600 },
    { id: 16, src: '/graphics/birthday.jpg', alt: 'Poster', title: 'Birthday Card', width: 800, height: 600 },
    // { id: 16, src:'/graphics/natalielogo.jpg', alt: 'Branding barner', title: 'Branding barner', width: 800, height: 600 },
    { id: 17, src: '/graphics/sunday.jpg', alt: 'Poster', title: 'Sermon Card', width: 800, height: 600 },
  ];
const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [columns, setColumns] = useState(4);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setImageRef = (el: HTMLDivElement | null, index: number): void => {
    imageRefs.current[index] = el;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   const initScrollReveal = async () => {
  //     if (typeof window !== 'undefined') {
  //       const ScrollReveal = (await import('scrollreveal')).default;
  //       const sr = ScrollReveal({
  //         origin: 'bottom',
  //         distance: '20px',
  //         duration: 1000,
  //         delay: 200,
  //         easing: 'cubic-bezier(0.5, 0, 0, 1)',
  //       });

  //       sr.reveal('.gallery-title', {
  //         origin: 'top',
  //         delay: 100,
  //       });

  //       imageRefs.current.forEach((ref, index) => {
  //         if (ref) {
  //           sr.reveal(ref, {
  //             delay: 200 + (index * 100),
  //             interval: 100,
  //           });
  //         }
  //       });
  //     }
  //   };

  //   initScrollReveal();
  // }, []);

  const distributeImages = (): ImageType[][] => {
    const cols: ImageType[][] = Array.from({ length: columns }, () => []);
    sampleImages.forEach((image, index) => {
      cols[index % columns].push(image);
    });
    return cols;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-center gallery-title">Graphic Design Portfolio</h1>
      <div className="flex flex-wrap -mx-2">
        {distributeImages().map((column, colIndex) => (
          <div key={colIndex} className="px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            {column.map((image: ImageType, imageIndex: number) => (
              <div
                key={image.id}
                // ref={(el) => setImageRef(el, colIndex * column.length + imageIndex)}
                className="mb-4 cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
              >
                <div 
                  className="relative overflow-hidden box-border bg-[#1F2235] rounded-lg my-3 shadow-[#00d0ff85] hover:shadow-[#00d0ff] transition ease-in-out duration-500 shadow-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl max-h-full p-4">
            <img
              src={sampleImages.find(img => img.id === selectedImage)?.src || ''}
              alt={sampleImages.find(img => img.id === selectedImage)?.alt || ''}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
