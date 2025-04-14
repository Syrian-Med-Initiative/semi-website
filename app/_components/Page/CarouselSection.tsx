import { ReactNode } from "react";
import Carousel from "../Carousel/Carousel";

type CarouselSectionProps = {
  items: ReactNode[];
  header: string;
};

function CarouselSection({ items, header }: CarouselSectionProps) {
  return (
    <section>
      <div className="container">
        <h2 className="special-heading">{header}</h2>
        <Carousel items={items} />
      </div>
    </section>
  );
}

export default CarouselSection;
