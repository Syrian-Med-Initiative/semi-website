"use client";
import { useRef, ReactNode } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  items: ReactNode[];
}

function Carousel({ items }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePrev = (ref: HTMLDivElement | null) => {
    if (ref) {
      const itemWidth =
        ref.firstElementChild?.getBoundingClientRect().width || 0;
      const gap = parseFloat(getComputedStyle(ref).gap) || 0;
      ref.scrollBy({ left: -(itemWidth + gap), behavior: "smooth" });
    }
  };

  const handleNext = (ref: HTMLDivElement | null) => {
    if (ref) {
      const itemWidth =
        ref.firstElementChild?.getBoundingClientRect().width || 0;
      const gap = parseFloat(getComputedStyle(ref).gap) || 0;
      ref.scrollBy({ left: itemWidth + gap, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.carouselButton} ${styles.prev}`}
        onClick={() => handlePrev(trackRef.current)}
      >
        &lt;
      </button>
      <div className={styles.carouselTrack} ref={trackRef}>
        {items.map((item, index) => (
          <div className={styles.carouselItem} key={index}>
            {item}
          </div>
        ))}
      </div>
      <button
        className={`${styles.carouselButton} ${styles.next}`}
        onClick={() => handleNext(trackRef.current)}
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
