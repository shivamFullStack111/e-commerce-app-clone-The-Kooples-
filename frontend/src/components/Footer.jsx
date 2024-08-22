import { useState } from "react"
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";

const Footer = () => {
  const [subscription,setsubscription]=useState('')

  return (
   <>
      <div className="flex flex-col  h-[38vh] text-[65%] 800px:text-[75%]  1000px:h-[55vh] 1000px:text-[100%] items-center border-b-2 border-black">
       <p className="text-[130%] font-bold mt-5">LET’S STAY CONNECTED</p>
       <p className="text-[120%] font-semibold mt-4 1000px:mt-8">Immerse yourself into The Kooples’ World</p>
       <p className="border-b-2 mt-4  1000px:mt-8 border-black flex">
        <input type="text" placeholder="YOUR EMAIL ADDRESS" className="outline-none placeholder:text-black text-[130%] font-semibold" />
        <p className="text-[130%] font-bold">OK</p>
       </p>
       <p className="text-[120%] font-semibold mt-4  1000px:mt-8">Choose Your Subscription</p>
       <div className="flex mt-6  1000px:mt-8 items-center gap-7  1000px:gap-14">
         <div className="flex items-center">
           <p onClick={()=>setsubscription('WOMEN')} className={`w-8 h-8 border-2 border-black cursor-pointer ${subscription==='WOMEN' && 'bg-black'} rounded-full mr-2`}></p> <p className="text-[120%] font-semibold">WOMEN</p>
         </div>
         <div className="flex items-center">
           <p onClick={()=>setsubscription('MEN')} className={`w-8 h-8 border-2 border-black cursor-pointer ${subscription==='MEN' && 'bg-black'} rounded-full mr-2`}></p> <p className="text-[120%] font-semibold">MEN</p>
         </div>
         <div className="flex items-center">
           <p onClick={()=>setsubscription('NEUTRAL')} className={`w-8 h-8 border-2 border-black cursor-pointer ${subscription==='NEUTRAL' && 'bg-black'} rounded-full mr-2`}></p> <p className="text-[120%] font-semibold">NEUTRAL</p>
         </div>
       </div>
       <p className="text-[120%] font-semibold mt-6  1000px:mt-12 text-center ">
       By registering, you agree to receive all news and special offers from <br />The Kooples in accordance with our privacy policy
       </p>    
    </div>

    <div className="w-full text-[50%] h-[15vh] 1400px:text-[100%] 1400px:h-[20vh]  border-b-2 border-black grid grid-cols-4 ">
       <div className="flex flex-col justify-center items-center text-[120%] font-bold">
         <CiDeliveryTruck size={50}/>
        <p>FREE DELIVERY</p>
       </div>
       <div className="flex flex-col justify-center items-center text-[120%] font-bold">
         <GiReturnArrow size={50}/>
        <p>FREE RETURNS</p>
       </div>
       <div className="flex flex-col justify-center items-center text-[120%] font-bold">
         <RiCustomerService2Line size={50}/>
        <p>CUSTOMER SERVICE</p>
       </div>
       <div className="flex flex-col justify-center items-center text-[120%] font-bold">
         <RiSecurePaymentLine size={50}/>
        <p>SECURE PAYMENTS</p>
       </div>
    </div>
   </>
  )
}

export default Footer
