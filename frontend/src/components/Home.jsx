import HeaderPage from "./HeaderPage";
import video from './videoplayback.webm'
import SwipeToSlide from "./SwipeToSlide";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden ">
      <HeaderPage/>
      {/* video  */}
      <div className="w-full flex justify-center border-b-2 border-black">
        <video className="w-[70%] max-1200px:w-[100%] " autoPlay loop muted controls={false}>
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* 2 products  */}
      <div className="w-full  h-[120vh] h-[30vh] 500px:h-[35vh] 650px:h-[45vh] 800px:h-[55vh] 950px:h-[65vh] 1500px:h-[80vh] 1750px:h-[92vh] flex">
        <div className="h-full bg-[#f2efef] w-full mix-blend-color-burn border-r-2 border-black flex justify-center items-end" style={{backgroundImage:`URL('https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Library-Sites-TKooplesSharedLibrary/default/dw8aa09b5e/2024/SS24/LP Ceremonie/Gondole/20240419_SS24_E1_CEREMONY_CHAPEL_HP_IMAGE1_DESK.jpg')`,backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
            <button className="w-[60%] mb-4 h-10 text-[80%] font-bold bg-white   border-2 hover:bg-black hover:text-white transition-all duration-300">WOMEN CEREMONY</button>
        </div> 
        <div className="h-full bg-[#f2efef] w-full border-r-2 border-black flex justify-center items-end" style={{backgroundImage:`URL('https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Library-Sites-TKooplesSharedLibrary/default/dw8aa09b5e/2024/SS24/LP Ceremonie/Gondole/20240419_SS24_E1_CEREMONY_CHAPEL_HP_IMAGE1_DESK.jpg')`,backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
          <button className="w-[60%] mb-4 h-10 text-[80%] font-bold bg-white   border-2 hover:bg-black hover:text-white transition-all duration-300">WOMEN CEREMONY</button>
        </div>
      </div>
      {/* big product  */}
      <div  className=" h-[40vh] 650px:h-[50vh] 800px:h-[60vh] 1000px:h-[80vh] bg-[#f2efef] border-t-2 border-b-2 w-[100%]  flex pb-10 gap-8 justify-center items-end   border-black" style={{backgroundImage:`URL('https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Library-Sites-TKooplesSharedLibrary/default/dw2c47b047/2024/Opé Co/Last chance /Bannières /EN/202401_SOLDES_WEBSITE_LASTCHANCE_M_DESK_1DM_EN.jpg')`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
        <button className=" w-28 h-10 text-[80%] font-bold shadow-2xl bg-white  border-2 hover:bg-black hover:text-white transition-all duration-300">WOMEN</button>
        <button className="w-28 h-10 text-[80%] font-bold shadow-2xl bg-white   border-2 hover:bg-black hover:text-white transition-all duration-300">MEN</button>
      </div>
      {/* big product in which 5 girl suits */}
      <div className="h-[40vh] 800px:h-[50vh] 1000px:h-[70vh] bg-[#f2efef] border-b-2 border-black flex justify-center items-end pb-10 gap-8" style={{backgroundImage:`url('https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Library-Sites-TKooplesSharedLibrary/default/dw5abc0ab7/2024/SS24/Colorama/240418_BANNER_COLORAMA_DESK.jpg')`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'top',}}>
      <button className=" w-28 h-10 text-[80%] font-bold shadow-2xl bg-white  border-2 hover:bg-black hover:text-white transition-all duration-300">WOMEN</button>
        <button className="w-28 h-10 text-[80%] font-bold shadow-2xl bg-white   border-2 hover:bg-black hover:text-white transition-all duration-300">MEN</button>
      </div>


      {/* multiple product carousal */}
      <SwipeToSlide />
      <Footer />
    </div>
  );
};

export default Home;

