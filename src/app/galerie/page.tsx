import Heading from "@/components/Heading";
import Item from "./Item";

const images = [
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "Description for Image 1" },
];

const ImageGridSection = () => {
  return (
    <section >
      <Heading />
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="grid grid-cols-2 col-span-2 gap-6 lg:grid-cols-4">
          {images.map((image, index) => (
            <Item image={image} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGridSection;
