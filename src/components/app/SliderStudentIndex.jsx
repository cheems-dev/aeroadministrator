import React, {Fragment} from "react";
import imgI from "../../assets/img/faker/imgI.png";

const SliderStudentIndex = (opinion)=>{
     return (
         <Fragment>
             <div>
                 <div className="flex bg-gradient-to-r from-grCustom1-c1 to-grCustom1-c2 rounded-md">
                     <div className='w-3/5 px-14 pt-10 pb-6 text-neon'>
                         <h4 className="font-Nova-Lt text-[24px] leading-8">
                             {opinion.comment}
                         </h4>
                         <hr className="mt-1 bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 h-[2px] w-20"/>
                         <h3 className="mt-3 font-Nova-Sb text-[26px]">{opinion.name}</h3>
                         <p className="-mt-2">{opinion.profesion}</p>
                     </div>
                     <div className='w-2/5'>
                         {opinion.photo === '' || null ?
                             <img src={imgI} alt=""/>
                             :
                             <img src={opinion.image} alt=""/>
                         }
                     </div>
                 </div>
             </div>
         </Fragment>
     )
}
export default SliderStudentIndex;