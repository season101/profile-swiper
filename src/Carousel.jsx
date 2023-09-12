import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { longList } from './data';

const Carousel = () => {
  const [profiles, setProfiles] = useState(longList);
  const [currentProfile, setCurrentProfile] = useState(1);

  const prevSlide = () => {
    setCurrentProfile(() => {
      return (currentProfile - 1 + profiles.length) % profiles.length;
    });
  };
  const nextSlide = () => {
    setCurrentProfile(() => {
      return (currentProfile + 1) % profiles.length;
    });
  };

  return (
    <section className="slider-container">
      {profiles.map(({ id, image, name, quote, title }, index) => {
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentProfile)}%)`,
              opacity: index === currentProfile ? 1 : 0,
              visibility: index === currentProfile ? 'visible' : 'invisible',
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
