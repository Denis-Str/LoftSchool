import Vue from "vue"

const tags = {
    template: "#slider-tags",
    props: ["tags"],

};

const previews = {
    template: "#slider-preview",
    props: ["works", "currentWork",  "currentIndex"],
    data() {
        return {
            translate: 0,
            itemHeight: 0,
            listHeight: 0,
        }
    },
    watch: {
        currentIndex(newValue) {
            this.itemHeight = this.$refs.item[0].offsetHeight;
            this.listHeight = this.$refs.list.offsetHeight;
            const newlistHeight = this.itemHeight * (this.works.length - newValue);
            const thumbsInList = Math.round(this.listHeight / this.itemHeight);
            if (newlistHeight > this.listHeight) {
                this.translate = -this.itemHeight * (this.works.length - newValue - thumbsInList);
            } else if (newValue = (this.works.length - 1)) {
                this.translate = 0;
            }
        }
    }
};

const btns = {
    template: "#slider-btns",
};

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ')
        }
    }
};

const display = {
    template: "#slider-display",
    components: {
        info, btns, previews
    },
    props: ["works", "currentWork", "currentIndex"],
    computed: {
        reversePrev () {
            return [...this.works].reverse()
        }
    }
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
        },
        makeLookSlider(value) {
            const worksAmount = this.works.length - 1;
            if (value > worksAmount) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmount;

        }
    },
    watch: {
        currentIndex(value) {
            this.makeLookSlider(value)
        }
    },
    created() {
        const data = require("../data/works");
        this.works = this.makeArrImg(data);
    }
});