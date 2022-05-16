import React, {Fragment} from "react";
import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer";
import {SearchIcon} from "@heroicons/react/outline";
import airport from "../../assets/img/faker/airport.png"
import Slider from "react-slick";
import CardContent from "../../components/app/CardContent";
import f1 from "../../assets/img/faker/f1.png";
import f2 from "../../assets/img/faker/f2.png";
import f3 from "../../assets/img/faker/f3.png";
import f4 from "../../assets/img/faker/f4.png";
import f5 from "../../assets/img/faker/f5.png";
import f6 from "../../assets/img/faker/f6.png";
import f7 from "../../assets/img/faker/f7.png";
import f8 from "../../assets/img/faker/f8.png";

const Content = () => {
    const settings = {
        dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 3, adaptiveHeight: true
    };

    return (
        <Fragment>
            <Header/>
            <div className="bg-neutro-second2 font-Nova-Rg text-neon">
                <div className="container mx-auto px-24 pt-20">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-Nova-Eb text-neon text-[28px]">Disfruta de nuestro contenido</p>
                        </div>
                        <div>
                            <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <SearchIcon className="h-6 w-6 fill-neutro-custom text-grSecond1-c2"/>
                            </span>
                                <input
                                    className="placeholder:text-gray-primary placeholder:font-Nova-Sb block bg-neutro-custom w-96 border border-gray-300 rounded py-1.5 pl-12 pr-3 shadow-sm focus:outline-none focus:border-primary"
                                    placeholder="¿Qué quieres aprender hoy?" type="text"/>
                            </label>
                        </div>
                    </div>
                    <div className="mt-10 flex bg-white p-12 rounded-lg gap-20">
                        <div className="w-7/12">
                            <img src={airport} alt=""/>
                        </div>
                        <div className="w-5/12">
                            <div className="mt-4">
                                <button
                                    className="items-center bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white text-[16px] px-10 py-2
                                    rounded-md font-Nova-Eb tracking-wide hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                                    Análisis
                                </button>
                                <div className="mt-8">
                                    <p className="font-Nova-Eb text-[30px] leading-8 pr-12">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh porttitor urna,
                                        interdum diam ac, feugiat.
                                    </p>
                                    <p className="mt-8 text-gray-default">30 Agosto del 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mb-20">
                        <p className="font-Nova-Eb text-[28px]">Análisis de Marcas</p>
                        <p className="text-[22px]">Aprende a crear y gestionar marcas con un valor rentable y duradero
                            en el
                            mercado.</p>
                        <Slider {...settings} className="mt-10">
                            <CardContent image={f4}/>
                            <CardContent image={f5}/>
                            <CardContent image={f6}/>
                            <CardContent image={f7}/>
                        </Slider>
                    </div>
                    <div className="mt-20 mb-20">
                        <p className="font-Nova-Eb text-[28px]">Branding</p>
                        <p className="text-[22px]">Aprende a crear y gestionar marcas con un valor rentable y duradero
                            en el
                            mercado.</p>
                        <Slider {...settings} className="mt-10">
                            <CardContent image={f1}/>
                            <CardContent image={f2}/>
                            <CardContent image={f3}/>
                            <CardContent image={f4}/>
                        </Slider>
                    </div>
                    <div className="mt-20 mb-20">
                        <p className="font-Nova-Eb text-[28px]">Branding</p>
                        <p className="text-[22px]">Aprende a crear y gestionar marcas con un valor rentable y duradero
                            en el
                            mercado.</p>
                        <Slider {...settings} className="mt-10">
                            <CardContent image={f7}/>
                            <CardContent image={f8}/>
                            <CardContent image={f3}/>
                            <CardContent image={f4}/>
                        </Slider>
                    </div>
                    <div>
                        <p className="font-Nova-Eb text-[28px] text-center">Suscríbete a nuestro contenido</p>
                        <p className="font-Nova-Sb text-[20px] text-center mt-2">Aprende a crear y gestionar marcas
                            con un valor rentable y duradero en el mercado.</p>
                        <div className="grid grid-cols-2 mt-10 gap-14">
                            <div>
                                <input
                                    className="block border-none bg-white text-14 appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="Nombres y apellidos*"/>
                            </div>
                            <div>
                                <input
                                    className="block border-none bg-white text-14 appearance-none border rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="Correo electrónico*"/>
                            </div>
                        </div>
                        <div className="mt-10 pb-40">
                            <ul>
                                <li className="flex justify-center gap-2 items-center">
                                    <input type="radio" className="h-4 w-4"/>
                                    <p>Acepto los términos y condiciones</p>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <button className="m-auto block bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-2 px-8
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                                    Subscribirme
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Content