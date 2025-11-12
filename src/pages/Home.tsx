import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Mission from '../components/home/Mission';
import FeaturedProduct from '../components/home/FeaturedProduct';
import PillarsPreview from '../components/home/PillarsPreview';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Stats />
      <Mission />
      <FeaturedProduct />
      <PillarsPreview />
    </div>
  );
};

export default Home;
