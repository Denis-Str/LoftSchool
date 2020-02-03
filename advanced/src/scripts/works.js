import Vue from "vue"

const tags = {
    template: "#slider-tags",
    props: ["tags"],

};

const previews = {
    template: "#slider-preview",
    props: ["works"]
};

const btns = {
    template: "#slider-btns",
};

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: ["currentWork"]
};

const display = {
    template: "#slider-display",
    components: {
        info, btns, previews
    },
    props: ["works", "currentWork"],
};

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display
    },
    data() {
      return {
          works: [],
          currentIndex: 0
      }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    methods: {
        makeArrImg (data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/worksPreview/${item.photo}`);
                item.photo = requiredPic;
                return item
            })
        },
        handleSlide(direction) {
            switch (direction) {
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
            console.log(direction)
        }
    },
    created() {
        const data = require("../data/works");
        this.works = this.makeArrImg(data);
    }
});