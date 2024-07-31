import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./swiperSlide.css";
import { connect } from "react-redux";

import { FreeMode, Pagination } from "swiper/modules";
import { setActiveslide } from "../../../store/action";
import ProjectCard from "./ProjectCard";

const ActiveSlider = (props) => {
  
  const handleSlideChange = (swiper) => {
    props.setActiveslide(props.allProjects[swiper.activeIndex].Id);
  };

  
  return (
    <div className="flex items-center justify-center flex-col mt-8">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
          700: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        rewind={true}
        navigation={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[100%] lg:max-w-[80%]"
        onSlideChange={handleSlideChange}
      >
        {props.allProjects.map((item) => (
          <SwiperSlide key={item.Id}>
            <ProjectCard project={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allProjects: state.allProjects,
});

const mapDispatchToProps = {
  setActiveslide
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSlider);