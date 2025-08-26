import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Sertification({ data }) {
    return (
        <div className="sertification">
            <Carousel
                className="carousel"
                autoPlay
                infiniteLoop
                centerMode
                interval={3000}
                showThumbs={false}
                showStatus={false}
            >
                {data.map((item) => (
                    <div key={item.id}>
                        <img
                            src={item.url}
                            alt={`${item.title} - ${item.description}`}
                        />
                        <p className="legend">{item.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
