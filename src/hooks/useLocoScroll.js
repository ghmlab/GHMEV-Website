// import { useEffect } from 'react'
// import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
// import 'locomotive-scroll/src/locomotive-scroll.scss'


// export default function  useLocoScroll(start) {
//   gsap.registerPlugin(ScrollTrigger);
//   useEffect(() => {
//     if(start){
//       let locoScroll = null;

//       const scrollEl = document.querySelector("#smooth-scroll");

//       locoScroll = new LocomotiveScroll({
//         el: scrollEl,
//         smooth: true,
//         lerp: 0.075,
//         multiplier: 0.9
//       });
      
      
//       locoScroll.on("scroll", ScrollTrigger.update);

//       const lsUpdate = () => {
//         if (locoScroll) {
//           locoScroll.update();
//         }
//       };

//       gsap.utils.toArray('.section').forEach((section, i) => {
//         if(section.getAttribute('data-header-nav') !== null){
//           var colorClass = section.getAttribute('data-header-nav');
//           console.log(colorClass)
//         }
//         ScrollTrigger.create({
//           trigger: section,
//           start: 'top top',
//           scroller: '#smooth-scroll',
//           end: 'bottom top',
//           toggleClass: {
//             targets: '.navMain',
//             className: colorClass,
//           }
//         })
//       })

//       ScrollTrigger.addEventListener("refresh", lsUpdate);
//       ScrollTrigger.refresh();

//       return () => {
//         if (locoScroll) {
//           locoScroll.destroy();
//           locoScroll = null;
//           console.log("Kill", locoScroll);
//         }
//       };
//     }

//     return null;
//   },[]);
// }
