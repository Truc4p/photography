
import React from 'react';
import { Link } from 'react-router-dom';
import { Photographer } from '../types';

interface Props {
  photographer: Photographer;
}

const PhotographerCard: React.FC<Props> = ({ photographer }) => {
  return (
    <Link 
      to={`/photographer/${photographer.id}`}
      className="group block relative overflow-hidden"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={photographer.portfolio[0]} 
          alt={photographer.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
      </div>
      
      <div className="pt-6 text-center">
        <h3 className="text-2xl serif italic tracking-wide group-hover:opacity-60 transition-opacity">
          {photographer.name}
        </h3>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-2 mb-4">
          {photographer.city} &mdash; from ${photographer.startingPrice}
        </p>
        <div className="w-8 h-[1px] bg-black/10 mx-auto transition-all duration-700 group-hover:w-16" />
      </div>
    </Link>
  );
};

export default PhotographerCard;
