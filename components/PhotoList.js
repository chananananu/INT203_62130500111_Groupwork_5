app.component('photo-list', {
  props: {
    cats: {
      type: Array,
      require: true,
    },
    'not-found': Boolean,
    'search-cat': Array,
  },
  emits:[
    'click-like',
    'show-image',
    'show-img'
  ],
  template:
    /*html*/
    `
    <div class="flex justify-center gap-12 py-7 flex-wrap">
        <div v-for="cat in searchCat">
            <div class="card w-72 py-2 shadow-md">
                <div class="pl-3" style="font-family: 'K2D', sans-serif; font-size: 18px;">
                    <img :src="cat.profile" class="rounded-circle inline-block mr-2" width="35">{{cat.name}}
                </div>
                    <img :src="cat.image" class="relative flex py-2" @click="imgClicked(cat.id)"/>
                <div @click="clickLike(cat.id)" :class="{like: cat.like}">
                    <div class="pl-3">
                        <button class="material-icons">favorite</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <p v-if="notFound" class="flex justify-center">Oops! we couldn't find what are you looking for meow!...</p>
    </div>
    `,
    data(){
      return {
        currentIndex: 0,
        showImg: false
      }
    },
methods: {
      clickLike(index) {
          this.cats[index].like = !this.cats[index].like;
          this.$emit('click-like', index)
      },
    imgClicked(index) {
      this.currentIndex = index;
      this.showImg = true;
      this.$emit('show-image', this.currentIndex);
      this.$emit('show-img', this.showImg)
    }
    
  }
});
