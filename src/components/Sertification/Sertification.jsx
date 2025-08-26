import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text, Image } from "@chakra-ui/react";

export default function Sertification({ data }) {
    return (
        <div className="Sertification">
            <Carousel
                className="carousel"
                autoPlay
                infiniteLoop
                centerMode
                interval={4000}
            >
                {data.map((item) => (
                    <div key={item.id}>
                        <Text
                            py="12"
                            pl={{ base: "2", md: "8", lg: "3" }}
                            alignSelf="flex-start"
                            fontSize={{ base: "sm", md: "md", lg: "xl" }}
                            fontFamily="Reem Kufi, sans-serif"
                        >
                            {item.title} <br />{item.description}
                        </Text>
                        <Image
                            src={item.url}
                            alt={`${item.title} - ${item.description}`}
                            mx={{ base: '2', md: '2', lg: '0' }}
                            maxW={{ base: "35%", md: "40%", lg: "40%" }}
                        />
                    </div>
                ))
                }
            </Carousel >
        </div >
    );
}
