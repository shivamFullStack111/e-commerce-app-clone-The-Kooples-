import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const SwipeToSlide = () => {
  return (
    <div>
      <Carousel className="border-b-2 border-black" responsive={responsive}>
        <div className="flex flex-col border-r-2 border-black ">
          <img src="https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Sites-skp-master-catalog/default/dw2d49f13e/images/hi-res/HCCL28097KWHI01_A.jpg?sw=600&sh=741" />
          <p className="w-full pl-3 pr-3 text-[120%] font-semibold flex justify-between">
            <span>Mens Outfit</span>
            <span>17,000</span>
          </p>
        </div>
        <div className="flex flex-col border-r-2 border-black ">
          <img src="https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Sites-skp-master-catalog/default/dw2d49f13e/images/hi-res/HCCL28097KWHI01_A.jpg?sw=600&sh=741" />
          <p className="w-full pl-3 pr-3 text-[120%] font-semibold flex justify-between">
            <span>Mens Outfit</span>
            <span>17,000</span>
          </p>
        </div>
        <div className="flex flex-col border-r-2 border-black ">
          <img src="https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Sites-skp-master-catalog/default/dw2d49f13e/images/hi-res/HCCL28097KWHI01_A.jpg?sw=600&sh=741" />
          <p className="w-full pl-3 pr-3 text-[120%] font-semibold flex justify-between">
            <span>Mens Outfit</span>
            <span>17,000</span>
          </p>
        </div>
        <div className="flex flex-col border-r-2 border-black ">
          <img src="https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Sites-skp-master-catalog/default/dw2d49f13e/images/hi-res/HCCL28097KWHI01_A.jpg?sw=600&sh=741" />
          <p className="w-full pl-3 pr-3 text-[120%] font-semibold flex justify-between">
            <span>Mens Outfit</span>
            <span>17,000</span>
          </p>
        </div>
        <div className="flex flex-col border-r-2 border-black ">
          <img src="https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Sites-skp-master-catalog/default/dw2d49f13e/images/hi-res/HCCL28097KWHI01_A.jpg?sw=600&sh=741" />
          <p className="w-full pl-3 pr-3 text-[120%] font-semibold flex justify-between">
            <span>Mens Outfit</span>
            <span>17,000</span>
          </p>
        </div>
        <div className="flex flex-col border-r-2 border-black ">
          <img src="https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Sites-skp-master-catalog/default/dw2d49f13e/images/hi-res/HCCL28097KWHI01_A.jpg?sw=600&sh=741" />
          <p className="w-full pl-3 pr-3 text-[120%] font-semibold flex justify-between">
            <span>Mens Outfit</span>
            <span>17,000</span>
          </p>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default SwipeToSlide;
