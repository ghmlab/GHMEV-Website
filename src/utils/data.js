import ModelL from '../assets/L1.png';
import ModelI from '../assets/I2.png';
import ModelF from '../assets/F8.png';
import ModelE from '../assets/E0.png';

import { ColorBW, ColorGreen, ColorOrange, ColorLight } from "../assets";

import FeatureImg1 from '../assets/image1.jpg';
import FeatureImg2 from '../assets/image2.jpg'
import FeatureImg3 from '../assets/image3.jpg'

export const models = [
    {
        id: 1,
        name: "Model L",
        price:"24,999",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image:ModelL

    },

    {
        id: 2,
        name: "Model I",
        price:"24,999",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image:ModelI

    },

    {
        id: 3,
        name: "Model F",
        price:"24,999",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image:ModelF

    },

    {
        id: 4,
        name: "Model E",
        price:"24,999",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image:ModelE

    }
]

export const features = [
    {
        id: 1,
        title: 'Tech Marvel',
        desc: 'While we develop the next smart tech of the world we also understand how intelligent a vehicle can get. With our integrated systems we comprehend the vehicle performance and diagnosis on the go',
        image: FeatureImg1
    },

    {
        id: 2,
        title: 'Indeginous',
        desc: 'Unlike any other EV company out there we develop in house components & design with very less dependence on Imports , Hence we have a lot of control and understanding about the products we make.',
        image: FeatureImg2
    },

    {
        id: 2,
        title: 'Indeginous',
        desc: 'Unlike any other EV company out there we develop in house components & design with very less dependence on Imports , Hence we have a lot of control and understanding about the products we make.',
        image: FeatureImg2
    }
]


export const BikeComponent = [
    {
        id: 1,
        mainClass: "tyres-hover",
        classNames : "bottom-[120px] right-[60px]",
        heading: "RALSON HI-TRACTION TIRES",
        desc: "Ralson strong boy tires which are 26x4.0 wide which gives the rider a better grip on any road with punture-resistant ability."
    },
    {
        id: 2,
        mainClass: "suspension-hover",
        classNames : "bottom-[120px] left-[70px]",
        heading: "Suspension Fork",
        desc: "It works excellent for bumpy roads and mild-off roading, giving a jerk-free riding experience."
    },
    {
        id: 3,
        mainClass: "free-wheels-hover",
        classNames : "bottom-[75px] right-[90px]",
        heading: "7 Speed Free Wheels",
        desc: "Helps to reduce the effort on pedal as well as  increases the motion of e-bike."
    },
    {
        id: 4,
        mainClass: "disk-brakes-hover",
        classNames : "bottom-[75px] left-[90px]",
        heading: "Mechinacal Disk Brakes",
        desc: "Model-E comes with dual disk brakes with 160mm rotor disk, this provides the e-bike an extra braking power for quick and skid-free braking in all weather conditions."
    },
    {
        id: 5,
        mainClass: "alloy-crank-hover",
        classNames : "bottom-[70px] right-[20px]",
        heading: "Ghm Alloy Crank",
        desc: "It is lighter & stronger, providing a smooth riding experience over various terrains such as up hills and downhills."
    }
]