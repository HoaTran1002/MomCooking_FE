export interface PropsSlider {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    autoplay?:boolean;
    autoplaySpeed?:number;
    children: JSX.Element[];
}