import { ColorBW, ColorGreen, ColorOrange, ColorLight, ColorCoral, ColorPhoenix, ColorSea, ColorSpace, ColorStone, ColorCoal, ColorDawn, ColorMidnight, ColorSunset } from "../assets";
import { SpeedL, SpeedI, SpeedF, SpeedE, RangeL, RangeI, RangeF, RangeE, BoostL, BoostI, BoostF, BoostE, ChargeL, ChargeI, ChargeF, ChargeE } from "../assets";
import { GreenL, BlackWhiteL, LightL, OrangeL, GreenI, BlackWhiteI, LightI, OrangeI, SeaF, SpaceF, StoneF, CoralF, PhoenixF, CoalE, SunsetE, DawnE, MidnightE  } from '../assets'
import { featureL1, featureL2, featureL3, featureL4, featureL5, featureI1, featureI2, featureI3, featureI4, featureI5, featureF1, featureF2, featureF3, featureF4, featureF5, 
featureF6, featureF7,featureF8, featureE1, featureE2, featureE3, featureE4, featureE5, featureE6, featureE7, featureE8, featureE9, featureE10,featureE11 } from '../assets';

import { iconL1, iconL2, iconL3, iconL4, iconL5, iconL6, iconL7, iconL8, iconF1, iconF2, iconF3, iconF4, iconF5, iconF6, iconF7, iconF8, iconF9, iconF10, iconF11, iconF12, 
iconF13, iconF14, iconI1,iconI2, iconI3, iconI4, iconI5, iconI6, iconI7,iconI8, iconI9 ,iconI10, iconE1,iconE2, iconE3, iconE4, iconE5, iconE6, iconE7, iconE8, iconE9, iconE10, 
iconE11, iconE12, iconE13, iconE14, iconE15, iconE16, iconE17, iconE18, } from '../assets';

export const Products = [
    {   
        id: 0,
        url:"model-l",
        title: "MODEL-L",
        desc: "The ultimate electric bike experience! if you live to explore",
        tagline: "Affordable and Efficient",
        mainImage:GreenL,
        discountPrice: 25999,
        price: 27999,
        quantity: 0,
        design: {
            design1: "Minimalistic Design",
            design2: "Compact Battery (easy to Carry)",
            design3: "City Drive",
            design4: "Rigid shocker"
        },
        features: [
            {
                images: [
                    {
                        id: 1,
                        image: featureL1
                    },
                    {
                        id: 2,
                        image: featureL2
                    },
                    {
                        id: 3,
                        image: featureL3
                    },
                    {
                        id: 4,
                        image: featureL4
                    },
                    {
                        id: 5,
                        image: featureL5
                    },
                ],
                
                icons:[
                    {
                        id: 1,
                        image: iconL1
                    },
                    {
                        id: 2,
                        image: iconL2
                    },
                    {
                        id: 3,
                        image: iconL3
                    },
                    {
                        id: 4,
                        image: iconL4
                    },
                    {
                        id: 5,
                        image: iconL5
                    },
                    {
                        id: 6,
                        image: iconL6
                    },
                    {
                        id: 7,
                        image: iconL7
                    },
                    {
                        id: 8,
                        image: iconL8
                    }
                ]
                
            }
            
            
        ],
        experience: [
            {
                id: 1,
                title: 'Range',
                value: 35,
                image: RangeL
            },
            {
                id: 2,
                title: 'Charge Time',
                value: 2,
                image: ChargeL
            },
            {
                id: 3,
                title: 'Top Speed',
                value: 25,
                image: SpeedL
            },
            {
                id: 4,
                title: '0-25',
                value: 2.85,
                image: BoostL
            },
        ],
        colors: [
            {
                id: 1,
                title: "Luminous Green",
                image: ColorGreen,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: GreenL
                        },
                        {
                            id: 2,
                            image: GreenL
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Black And White",
                image: ColorBW,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: BlackWhiteL
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Davy Orange",
                image: ColorOrange,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: OrangeL
                        }
                    ]
                }
            },
            {
                id: 4,
                title: "Light",
                image: ColorLight,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: LightL
                        }
                    ]
                }
            }
        ],
        rangeUpgrade:[
            {
                name: "S2E Plus",
                desc: "40+",
                price: 2999
            },
            {
                name: "S2E Pro",
                desc: "60+",
                price: 4999
            }
        ],
        addOns:[
            {
                name:"Pedal Assist",
                price:499
            },
            {
                name:"Horn and Indicators",
                price:499
            },
            {
                name:"Dash App Access",
                price:1499
            },
            {
                name:"Boost Charger (50mins)",
                price:2999
            },
            {
                name:"Extra Battery Pack (30KM)",
                price:5299
            },
        ],
        inCart:{
            cartColor: 'Luminous Green',
            cartImage: GreenL,
            cartPrice: 0
        }
    },


    {
        id: 1,
        url:"model-i",
        title: "MODEL-I",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        tagline: "Flexible & Efficient",
        mainImage:BlackWhiteI,
        discountPrice: 27999,
        price: 29999,
        quantity: 0,
        design: {
            design1: "Minimalistic Design",
            design2: "Compact Battery (easy to Carry)",
            design3: "City Drive",
            design4: "Best in Class suspension"
        },
        features: [
            {
                images: [
                    {
                        id: 1,
                        image: featureI1
                    },
                    {
                        id: 2,
                        image: featureI2
                    },
                    {
                        id: 3,
                        image: featureI3
                    },
                    {
                        id: 4,
                        image: featureI4
                    },
                    {
                        id: 5,
                        image: featureI5
                    },
                ],
                
                icons:[
                    {
                        id: 1,
                        image: iconI1
                    },
                    {
                        id: 2,
                        image: iconI2
                    },
                    {
                        id: 3,
                        image: iconI3
                    },
                    {
                        id: 4,
                        image: iconI4
                    },
                    {
                        id: 5,
                        image: iconI5
                    },
                    {
                        id: 6,
                        image: iconI6
                    },
                    {
                        id: 7,
                        image: iconI7
                    },
                    {
                        id: 8,
                        image: iconI8
                    },
                    {
                        id: 9,
                        image: iconI9
                    },
                    {
                        id: 10,
                        image: iconI10
                    }
                ]
                
            }
            
            
        ],
        experience: [
            {
                id: 1,
                title: 'Range',
                value: 35,
                image: RangeI
            },
            {
                id: 2,
                title: 'Charge Time',
                value: 2,
                image: ChargeI
            },
            {
                id: 3,
                title: 'Top Speed',
                value: 25,
                image: SpeedI
            },
            {
                id: 4,
                title: '0-25',
                value: 2.85,
                image: BoostI
            },
        ], 
        colors: [
            {
                id: 1,
                title: "Luminous Green",
                image: ColorGreen,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: GreenI
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Black And White",
                image: ColorBW,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: BlackWhiteI
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Davy Orange",
                image: ColorOrange,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: OrangeI
                        }
                    ]
                }
            },
            {
                id: 4,
                title: "Light",
                image: ColorLight,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: LightI
                        }
                    ]
                }
            }
        ], 
        rangeUpgrade:[
            {
                name: "S2E Plus",
                desc: "40+",
                price: 2999
            },
            {
                name: "S2E Pro",
                desc: "60+",
                price: 4999
            }
        ],
        addOns:[
            {
                name:"Pedal Assist",
                price:499
            },
            {
                name:"Horn and Indicators",
                price:499
            },
            {
                name:"Dash App Access",
                price:1499
            },
            {
                name:"Boost Charger (50mins)",
                price:2999
            },
            {
                name:"Extra Battery Pack (30KM)",
                price:5299
            },
        ],
        inCart:{
            cartColor: 'Luminous Green',
            cartImage: GreenL,
            cartPrice: 0
        }
    },


    {
        id: 2,
        url:"model-f",
        title: "MODEL-F",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        tagline: "Power & Performance",
        mainImage:PhoenixF,
        discountPrice: 33999,
        price: 39999,
        quantity: 0,
        design: {
            design1: "Sturdy Handle bearings",
            design2: "Butter Bearing Pedal System",
            design3: "Telescopic Suspension",
            design4: "Best in Class suspension",
            design5: "Compact Battery",
            design6: "City Drive"
        },
        features: [
            {
                images: [
                    {
                        id: 1,
                        image: featureF1
                    },
                    {
                        id: 2,
                        image: featureF2
                    },
                    {
                        id: 3,
                        image: featureF3
                    },
                    {
                        id: 4,
                        image: featureF4
                    },
                    {
                        id: 5,
                        image: featureF5
                    },
                    {
                        id: 6,
                        image: featureF6
                    },
                    {
                        id: 7,
                        image: featureF7
                    },
                    {
                        id: 8,
                        image: featureF8
                    },
                ],
                
                icons:[
                    {
                        id: 1,
                        image: iconF1
                    },
                    {
                        id: 2,
                        image: iconF2
                    },
                    {
                        id: 3,
                        image: iconF3
                    },
                    {
                        id: 4,
                        image: iconF4
                    },
                    {
                        id: 5,
                        image: iconF5
                    },
                    {
                        id: 6,
                        image: iconF6
                    },
                    {
                        id: 7,
                        image: iconF7
                    },
                    {
                        id: 8,
                        image: iconF8
                    },
                    {
                        id: 9,
                        image: iconF9
                    },
                    {
                        id: 10,
                        image: iconF10
                    },
                    {
                        id: 11,
                        image: iconF11
                    },
                    {
                        id: 12,
                        image: iconF12
                    },
                    {
                        id: 13,
                        image: iconF13
                    },
                    {
                        id: 14,
                        image: iconF14
                    }
                ]
                
            }
            
            
        ],
        experience: [
            {
                id: 1,
                title: 'Range',
                value:  50,
                image: RangeF
            },
            {
                id: 2,
                title: 'Charge Time',
                value: 3,
                image: ChargeF
            },
            {
                id: 3,
                title: 'Top Speed',
                value: 30,
                image: SpeedF
            },
            {
                id: 4,
                title: '0-25',
                value: 2.85,
                image: BoostF
            },
        ],
        colors: [
            {
                id: 1,
                title: "Sea",
                image: ColorSea,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: SeaF
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Space",
                image: ColorSpace,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: SpaceF
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Stone",
                image: ColorStone,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: StoneF
                        }
                    ]
                }
            },
            {
                id: 4,
                title: "Phoenix",
                image: ColorPhoenix,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: PhoenixF
                        }
                    ]
                }
            },
            {
                id: 5,
                title: "Coral",
                image: ColorCoral,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: CoralF
                        }
                    ]
                }
            }
        ],
        rangeUpgrade:[
            {
                name: "S2E Plus",
                desc: "80+",
                price: 4999
            }
        ],
        addOns:[
            {
                name:"Horn and Indicators",
                price:499
            },
            {
                name:"Boost Charger (50mins)",
                price:2999
            },
            {
                name:"Extra Battery Pack (30KM)",
                price:5299
            },
        ],
        inCart:{
            cartColor: 'Luminous Green',
            cartImage: GreenL,
            cartPrice: 0
        }
    },

    {
        id: 3,
        url:"model-e",
        title: "MODEL-E",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        tagline: "Power & Performance",
        mainImage:CoalE,
        discountPrice: 37999,
        price: 45999,
        quantity: 0,
        design: {
            design1: "Sturdy Handle bearings",
            design2: "Butter Bearing Pedal System",
            design3: "Telescopic Suspension",
            design4: "Best in Class suspension",
            design5: "Compact Battery",
            design6: "City Drive"
        },
        features: [
            {
                images: [
                    {
                        id: 1,
                        image: featureE1
                    },
                    {
                        id: 2,
                        image: featureE2
                    },
                    {
                        id: 3,
                        image: featureE3
                    },
                    {
                        id: 4,
                        image: featureE4
                    },
                    {
                        id: 5,
                        image: featureE5
                    },
                    {
                        id: 6,
                        image: featureE6
                    },
                    {
                        id: 7,
                        image: featureE7
                    },
                    {
                        id: 8,
                        image: featureE8
                    },
                    {
                        id: 9,
                        image: featureE9
                    },
                    {
                        id: 10,
                        image: featureE10
                    },
                    {
                        id: 11,
                        image: featureE11
                    },
                ],
                
                icons:[
                    {
                        id: 1,
                        image: iconE1
                    },
                    {
                        id: 2,
                        image: iconE2
                    },
                    {
                        id: 3,
                        image: iconE3
                    },
                    {
                        id: 4,
                        image: iconE4
                    },
                    {
                        id: 5,
                        image: iconE5
                    },
                    {
                        id: 6,
                        image: iconE6
                    },
                    {
                        id: 7,
                        image: iconE7
                    },
                    {
                        id: 8,
                        image: iconE8
                    },
                    {
                        id: 9,
                        image: iconE9
                    },
                    {
                        id: 10,
                        image: iconE10
                    },
                    {
                        id: 11,
                        image: iconE11
                    },
                    {
                        id: 12,
                        image: iconE12
                    },
                    {
                        id: 13,
                        image: iconE13
                    },
                    {
                        id: 14,
                        image: iconE14
                    },
                    {
                        id: 15,
                        image: iconE15
                    },
                    {
                        id: 16,
                        image: iconE16
                    },
                    {
                        id: 17,
                        image: iconE17
                    },
                    {
                        id: 18,
                        image: iconE18
                    }
                ]
                
            }
            
            
        ],
        experience: [
            {
                id: 1,
                title: 'Range',
                value: 50,
                image: RangeE
            },
            {
                id: 2,
                title: 'Charge Time',
                value: 2,
                image: ChargeE
            },
            {
                id: 3,
                title: 'Top Speed',
                value: 30,
                image: SpeedE
            },
            {
                id: 4,
                title: '0-25',
                value: 2.85,
                image: BoostE
            },
        ],
        colors: [
            {
                id: 1,
                title: "Classy Coal",
                image: ColorCoal,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: CoalE
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Dawn",
                image: ColorDawn,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: DawnE
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Midnight Black",
                image: ColorMidnight,
                cycles:{
                    images:[
                        {
                            id: 1,
                            image: MidnightE
                        }
                    ]
                }
            },
        ],
        rangeUpgrade:[
            {
                name: "S2E Plus",
                desc: "80+",
                price: 4999
            }
        ],
        addOns:[
            {
                name:"Horn and Indicators",
                price:499
            },
            {
                name:"Boost Charger (50mins)",
                price:2999
            },
            {
                name:"Extra Battery Pack (30KM)",
                price:5299
            },
        ],
        inCart:{
            cartId: 0,
            cartColor: 'Luminous Green',
            cartImage: GreenL,
            cartPrice: 0
        }
    }
]