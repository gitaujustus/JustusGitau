// 'use client'
// import React, { useState, useEffect, useRef } from 'react';

// // Define the type for our image objects
// type ImageType = {
//   id: number;
//   src: string;
//   alt: string;
//   title: string;
//   width: number;
//   height: number;
// };

// // Sample array of images with varying aspect ratios
// const sampleImages: ImageType[] = [
//     { id: 1, src: '/graphics/designadvert.jpg', alt: 'Poster', title: 'Advert Card', width: 800, height: 1200 },
//     { id: 2, src: '/graphics/grad.jpg', alt: 'Poster', title: 'Graduation Card', width: 800, height: 800 },
//     { id: 3, src: '/graphics/ICEM 1.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
//     // { id: 31, src: '/graphics/ICEM 2.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
//     { id: 32, src: '/graphics/ICEM 3.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
//     { id: 33, src: '/graphics/ICEM F4.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
//     { id: 34, src: '/graphics/ICEM 4.jpg', alt: 'Logo', title: 'ICEM', width: 800, height: 800 },
//     // { id: 4, src: '/graphics/centric.jpg', alt: 'Advert Card', title: 'Advert Card', width: 800, height: 800 },
//     { id: 41, src: '/graphics/JASTUTE.png', alt: 'Advert Card', title: 'Advert Card', width: 800, height: 800 },
//     { id: 5, src: '/graphics/closetA.jpg', alt: 'Advert Card', title: 'Advert Card', width: 800, height: 1200 },
//     { id: 6, src: '/graphics/mashujaa.jpg', alt: 'Poster', title: 'Mashujaa Card', width: 800, height: 800 },
//     { id: 8, src: '/graphics/website.jpg', alt: 'poster', title: 'Advert Card', width: 800, height: 1000 },
//     { id: 7, src:'/graphics/instagramdesign.jpg', alt: 'Design', title: 'Pictorial Design', width: 800, height: 600 },
//     { id: 9, src: '/graphics/ypk.jpg', alt: 'Book Cover', title: 'Youth Power Kenya', width: 1000, height: 800 },
//     { id: 10, src:'/graphics/jastutelogo.jpg', alt: 'Poster', title: 'JASTUTE Logo', width: 800, height: 600 },
//     { id: 11, src:'/graphics/facebookcover.jpg', alt: 'Social Media barner', title: 'Advert Card', width: 800, height: 600 },
//     { id: 12, src:'/graphics/engineeringDay.jpg', alt: 'Poster', title: 'Engineering day', width: 800, height: 600 },
//     { id: 13, src:'/graphics/ypklogo.png', alt: 'Logo', title: 'YPK Logo', width: 800, height: 600 },
//     { id: 14, src:'/graphics/yearbook.jpg', alt: 'Poster', title: 'Yearbook Cover', width: 800, height: 600 },
//     { id: 15, src:'/graphics/centricloset.jpg', alt: 'Poster', title: 'Centri closet advent', width: 800, height: 600 },
//     { id: 16, src: '/graphics/birthday.jpg', alt: 'Poster', title: 'Birthday Card', width: 800, height: 600 },
//     { id: 16, src:'/graphics/chicks-advert2.jpg', alt: 'Promotion', title: 'Advert Card', width: 1000, height: 500 },
//     { id: 17, src: '/graphics/chicks-advert.jpg', alt: 'Poster', title: 'Advert Card 2', width: 1920, height: 700 },
//     { id: 18, src: '/graphics/sunday.jpg', alt: 'Poster', title: 'Sermon Card', width: 800, height: 600 },
//   ];
// const Gallery: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [columns, setColumns] = useState(4);
//   const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const setImageRef = (el: HTMLDivElement | null, index: number): void => {
//     imageRefs.current[index] = el;
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setColumns(1);
//       else if (window.innerWidth < 768) setColumns(2);
//       else if (window.innerWidth < 1024) setColumns(3);
//       else setColumns(4);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);


//   const distributeImages = (): ImageType[][] => {
//     const cols: ImageType[][] = Array.from({ length: columns }, () => []);
//     sampleImages.forEach((image, index) => {
//       cols[index % columns].push(image);
//     });
//     return cols;
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 bg-white dark:bg-[#24273D]">
//       <h1 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-8 text-center gallery-title text-gray-900 dark:text-white">Graphic Design Portfolio</h1>
//       <div className="flex flex-wrap -mx-2">
//         {distributeImages().map((column, colIndex) => (
//           <div key={colIndex} className="px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//             {column.map((image: ImageType, imageIndex: number) => (
//               <div
//                 key={image.id}
//                 // ref={(el) => setImageRef(el, colIndex * column.length + imageIndex)}
//                 className="mb-4 cursor-pointer group"
//                 onClick={() => setSelectedImage(image.id)}
//               >
//                 <div 
//                   className="relative overflow-hidden box-border bg-gray-100 dark:bg-[#1F2235] rounded-lg my-3 shadow-[#00d0ff85] hover:shadow-[#00d0ff] transition ease-in-out duration-500 shadow-lg"
//                 >
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
//                     <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {image.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
//           <div className="max-w-4xl max-h-full p-4">
//             <img
//               src={sampleImages.find(img => img.id === selectedImage)?.src || ''}
//               alt={sampleImages.find(img => img.id === selectedImage)?.alt || ''}
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
// // https://job-boards.greenhouse.io/remotecom/jobs/6093853003
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import graphicsSamples from '@/lib/graphicsSamples.json';
import { FaChevronRight, FaChevronLeft, FaX } from 'react-icons/fa6';

type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type GalleryItem = {
  id: number;
  title: string;
  images: ImageItem[];
};

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [columns, setColumns] = useState(4);
  const [localIndexes, setLocalIndexes] = useState<Record<number, number>>({});

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

  const distributeItems = (): GalleryItem[][] => {
    const cols: GalleryItem[][] = Array.from({ length: columns }, () => []);
    (graphicsSamples as GalleryItem[]).forEach((item, index) => {
      cols[index % columns].push(item);
    });
    return cols;
  };

  const openItem = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    setCurrentIndex((prev) => (prev + 1) % selectedItem.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedItem.images.length - 1 : prev - 1
    );
  };

  const nextLocal = (itemId: number, total: number) => {
    setLocalIndexes((prev) => ({
      ...prev,
      [itemId]: ((prev[itemId] ?? 0) + 1) % total,
    }));
  };

  const prevLocal = (itemId: number, total: number) => {
    setLocalIndexes((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] ?? 0) === 0 ? total - 1 : (prev[itemId] ?? 0) - 1,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-[#24273D]">
      <h1 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-8 text-center gallery-title text-gray-900 dark:text-white">
        Graphic Design Portfolio
      </h1>

      <div className="flex flex-wrap -mx-2">
        {distributeItems().map((column, colIndex) => (
          <div key={colIndex} className="px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            {column.map((item: GalleryItem) => {
              const activeIndex = localIndexes[item.id] ?? 0;
              return (
                <div
                  key={item.id}
                  className="mb-4 cursor-pointer group relative"
                >
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-[#1F2235] rounded-lg my-3 shadow-lg shadow-[#00d0ff85] hover:shadow-[#00d0ff] transition ease-in-out duration-500">
                    <Image
                      src={item.images[activeIndex].src}
                      alt={item.images[activeIndex].alt}
                      width={item.images[activeIndex].width}
                      height={item.images[activeIndex].height}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105 rounded-lg"
                      onClick={() => openItem(item, activeIndex)}
                    />

                    {item.images.length > 1 && (
                      <>
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1 rounded-full hover:bg-black/80"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevLocal(item.id, item.images.length);
                          }}
                        >
                          <FaChevronLeft size={18} />
                        </button>
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1 rounded-full hover:bg-black/80"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextLocal(item.id, item.images.length);
                          }}
                        >
                          <FaChevronRight size={18} />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                          {item.images.map((_, idx) => (
                            <span
                              key={idx}
                              className={`w-2 h-2 rounded-full ${
                                idx === activeIndex ? 'bg-white' : 'bg-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setSelectedItem(null)}
          >
            <FaX size={30} />
          </button>
          <button
            className="absolute left-6 text-white p-2 rounded-full hover:bg-black/50"
            onClick={prevImage}
          >
            <FaChevronLeft size={40} />
          </button>
          <div className="max-w-4xl max-h-[90vh] p-4">
            <Image
              src={selectedItem.images[currentIndex].src}
              alt={selectedItem.images[currentIndex].alt}
              width={selectedItem.images[currentIndex].width}
              height={selectedItem.images[currentIndex].height}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
          <button
            className="absolute right-6 text-white p-2 rounded-full hover:bg-black/50"
            onClick={nextImage}
          >
            <FaChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

