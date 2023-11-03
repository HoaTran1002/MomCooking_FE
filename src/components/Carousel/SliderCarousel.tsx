import React, { Component } from "react";
import Slider from "react-slick";
import { PropsSlider } from "./carousel.interface";
export default class SliderCarousel extends Component<PropsSlider> {
    render() {
        const { children, ...sliderProps } = this.props;
        return (
            <div className="overflow-hidden">
                <Slider {...sliderProps}>
                    {children}
                </Slider>
            </div>
        );
    }
}
