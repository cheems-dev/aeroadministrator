import React, {Fragment} from "react";
const IACourseCarge = ()=>{
    return(
        <Fragment>
            <p className="font-Nova-Eb text-[28px]">Instructor a cargo</p>
            <div className="flex gap-7">
                <div className="mt-5 w-3/12 bg-neutro-second4 h-64 rounded-xl"/>
                <div className="w-9/12 mt-6">
                    <p className="font-Nova-Sb text-[20px]">Nombre Apellido</p>
                    <p className="font-Nova-Sb text-gray-second2 -mt-1">Profesión</p>
                    <div className="flex">
                        <div className="w-1/2">
                            <ul className="mt-4">
                                <li className="flex items-center gap-3">
                                    <div className="bg-neutro-second3 rounded-full h-4 w-4"/>
                                    <p>Calificación del instructor: 4,6</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul className="mt-4">
                                <li className="flex items-center gap-3">
                                    <div className="bg-neutro-second3 rounded-full h-4 w-4"/>
                                    <p>5.666 reseñas</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <ul className="mt-4">
                                <li className="flex items-center gap-3">
                                    <div className="bg-neutro-second3 rounded-full h-4 w-4"/>
                                    <p>4 cursos</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul className="mt-4">
                                <li className="flex items-center gap-3">
                                    <div className="bg-neutro-second3 rounded-full h-4 w-4"/>
                                    <p>18.152 alumnos</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-[16px] pr-16">At vero eos et accusamus et iusto odio
                            dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi sint
                            occaecati cupiditate non provident.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default IACourseCarge