import React from 'react';

const photos = [
  {
    id: 1,
    url: "/pics/cyvawg-6.jpg", // ✅ Corrected path
    //caption: ""
  },
  {
    id: 2,
    url: "/pics/cyvawg-12.jpg",
    //caption: ""
  },
  {
    id: 3,
    url: "/pics/cyvawg-43.jpg",
    //caption: ""
  },
  {
    id: 4,
    url: "/pics/cyvawg-44.jpg",
    //caption: ""
  },
  {
    id: 5,
    url: "/pics/cyvawg-45.jpg",
    //caption: ""
  },
  {
    id: 6,
    url: "/pics/cyvawg-46.jpg",
    //caption: "Team Collaboration"
  }
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">Photo Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="w-full">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-800 font-medium text-center">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
