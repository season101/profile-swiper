import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { shortList } from './data';

const Carousel = () => {
  const [profiles, setProfiles] = useState(shortList);

  const prevSlide = () => {};
  const nextSlide = () => {};

  return (
    <section className="slider-container">
      {profiles.map(({ id, image, name, quote, title }) => {
        return (
          <article className="slide" key={id}>
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
