// let svgScroll = (function () {
//     let svg = document.querySelector('.stack__svg '),
//         svgPath = document.querySelector('.stack__svg stack__circle-upper'),
//         windowMargin = window.innerHeight / 3,
//         svgRect = svg.getBoundingClientRect(),
//         svgPos = svgRect.top;
//
//     return {
//         grow: function (wScroll) {
//             let startAnim = wScroll - svgPos + windowMargin,
//                 pixelsElapsed = svgPos - wScroll,
//                 percentsElapsed = 100 - Math.ceil(pixelsElapsed / windowMargin * 100),
//                 percentsDraw = 252 / 100 * percentsElapsed;
//
//             if (startAnim >=0)  {
//                 let DrawAmount = svg.strokeDashoffset - percentsDraw;
//             }
//
//             // console.log(svg)
//         }
//     }
// })();
// window.onscroll = function () {
//     let wScroll = window.pageYOffset;
//     svgScroll.grow(wScroll);
// };

import Vue from 'vue';


const skill = {
    template: '#skill',
    props: ['skillName', 'skillPercent'],
    methods: {
      drawColorCircle() {
          const circle = this.$refs["color-circle"];
          const dashArray = parseInt(
              getComputedStyle(circle).getPropertyValue('stroke-dasharray')
          );
          const percent = (dashArray / 100) * (100 - this.skillPercent);
          circle.style.strokeDashoffset = percent;
      }
    },
    mounted() {
        this.drawColorCircle()
    }
};

const skillsRow = {
    template: '#skills-row',
    components: {
        skill
    },
    props: ['skill']
};

new Vue({
    el: '#skills-block',
    template: '#stack',
    data() {
        return {
            skills: []
        }
    },
    components: {
        skillsRow
    },
    created() {
        this.skills = require('../data/skills');
    }
});