"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/theme-provider";

export default function ClientRoute() {
  const settings = {
    dots: true,
  };
  const theme = useTheme()
  console.log (theme.colors.primary)
  return (
    <>
    <h1 style={{color: theme.colors.primary}}>Client router page</h1>
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://i.pinimg.com/736x/c1/e7/d5/c1e7d52f3b8d13e217e26314e6ef39f5.jpg" 
        className="h-180 w-100"/>
        </div>
        <div>
          <img src="https://i.pinimg.com/1200x/ac/4d/93/ac4d938a6b3f44bce75b38b15c06f367.jpg" 
          className="h-180 w-100"/>
        </div>
        <div>
          <img src="https://i.pinimg.com/1200x/3a/5b/8d/3a5b8df30d530681cae73b0ae8d14329.jpg" 
          className="h-180 w-100"/>
        </div>
        <div>
          <img src="https://i.pinimg.com/1200x/8e/22/70/8e22706a8d2933c8c5123679b06d8d66.jpg" 
          className="h-180 w-100"/>
        </div>
      </Slider>
      
    </div>
    </>
  );
}
