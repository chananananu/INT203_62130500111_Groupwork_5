app.component('photo-view'{
    props: {
        cats: {
            type: Array,
            require: true
        },
        'show-images': Boolean
    },
    template:
    /*html*/
    `
    <div class="flex justify-center pt-3">
            <div class="card w-72 shadow-md py-2" v-if="showImg">
                <div class="pl-3 pb-2 text-lg inline-block" v-if="showImg"
                    style="font-family: 'K2D', sans-serif; font-size: 18px;">
                    {{cats[currentIndex].name }}
                </div>
                <button class="material-icons absolute ml-64" @click="close()">highlight_off</button>
                <img :src="cats[currentIndex].image">
            </div>
        </div>
    `,
    methods: {
        close() {
            this.$emit('close', this.showImages);
        }
    }
})