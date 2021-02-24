const app = {
    data() {
        return {
            cats: [{
                    id: 0,
                    image: 'image/Britain-shorthair.jpg',
                    profile: 'image/Britain-shorthair.jpg',
                    name: 'บริติช ช็อตแฮร์ (British Shorthair)',
                    like: false
                },
                {
                    id: 1,
                    image: 'image/Exotic-shorthair.jpg',
                    profile: 'image/Exotic-shorthair.jpg',
                    name: 'เอ็กโซติก ช็อตแฮร์ (Exotic Shorthair)',
                    like: false
                },
                {
                    id: 2,
                    image: 'image/munchkin.jpg',
                    profile: 'image/munchkin.jpg',
                    name: 'มันช์กิ้น (Munchkin)',
                    like: false
                },
                {
                    id: 3,
                    image: 'image/persian.jpg',
                    profile: 'image/persian.jpg',
                    name: 'เปอร์เซีย (Persian)',
                    like: false
                },
                {
                    id: 4,
                    image: 'image/scottish-fold.jpg',
                    profile: 'image/scottish-fold.jpg',
                    name: 'สก็อตติช โฟลด์ (Scottish Fold)',
                    like: false
                },
                {
                    id: 5,
                    image: 'image/Siamese.jpg',
                    profile: 'image/Siamese.jpg',
                    name: 'วิเชียรมาศ (Siamese)',
                    like: false
                }
            ],
            search: false,
            searchCat: '',
            notFound: false,
            showImg: false,
            currentIndex: 0


        }
    },
    methods: {
        clickLike(index) {
            this.cats[index].like = !this.cats[index].like;
        },
        toggleSearch() {
            this.search = !this.search;
        },
        close() {
            this.showImg = false;
        },
        imgClicked(index) {
            this.showImg = true;
            this.currentIndex = index;
        }


    },

    computed: {
        countPhoto() {
            return this.cats.length
        },
        likeAmount() {
            return this.cats.filter(n => n.like).length;
        },

        inputSearch() {
            this.notFound = false;
            if (this.inputSearch == '') {
                return this.cats;
            } else {
                picCat = this.cats.filter(p => p.name.includes(this.searchCat.toLowerCase()));

                if (picCat == '') {
                    this.notFound = true;
                } else {
                    return picCat;
                }
            }

        }

    }

}

Vue.createApp(app).mount('#app');