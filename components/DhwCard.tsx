import React from 'react';
import Image from 'next/image';

export function DhwCard({ imageUrl, alt, ctaText, highlightColor }: { imageUrl: string; alt: string; highlightColor: string; ctaText: string; }) {
  return (

    <div className=" rounded shadow-md overflow-hidden">
      <div>
        <Image src={imageUrl} alt={alt}
          layout="responsive" width={5000} height={4000} />
      </div>
      <div className="h-3 bg-gradient-to-tr from-tertiary to-secondary"
      >&nbsp;</div>
      <div className="h4 text-center pt-4 text-xl text-gray-600">
        For Individuals
        </div>
      <div className="text-center pt-3">
        If you're an individual looking for a vaccine, use our quick registration form to add your name to the list.
        </div>
      <div className="flex justify-center my-5">

        <div className={`bg-${highlightColor} text-white font-bold rounded-full text-center px-8 py-2 text-lg`}>{ctaText}</div>
      </div>
    </div>
  );
}
