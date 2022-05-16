import React, {Fragment} from "react";
const CardContent = ({image})=>{
        return(
            <Fragment>
                <div className="bg-white px-8 pt-8 pb-10 rounded-lg">
                    <img src={image} alt=""/>
                    <div className="mt-8">
                        <span className="bg-neon2 text-neutro-custom2 py-1.5 px-7 rounded-lg text-[14px]">Análisis</span>
                        <p className="mt-5 text-neon font-Nova-Eb text-[24px]">Branding: Paleta de colores,
                            cromática de marca
                        </p>
                        <p className="text-gray-second1 mt-4">30 Agosto del 2020</p>
                    </div>
                </div>
            </Fragment>
        )
}
export default CardContent;