app.component('photo-view', {
    props: {
        'search-cat': Array,
        'cat-id': Number,
        'show-img': Boolean
    },
    emits:[
        'close-image'
    ],
    template:
        /*html*/
        `                   
        <div class="flex justify-center pt-3">
            <div class="card w-72 shadow-md py-2" v-if="showImg">
                <div class="pl-3 pb-2 text-lg inline-block" v-if="showImg"
                    style="font-family: 'K2D', sans-serif; font-size: 18px;">
                    {{searchCat[catId].name}}
                </div>
                <button class="material-icons absolute ml-64" @click="closeImg">highlight_off</button>
                <img :src="searchCat[catId].image">
            </div>
        </div>
        `,
    methods: {
        closeImg(){
            this.$emit('close-image');
        }
       
    }

})