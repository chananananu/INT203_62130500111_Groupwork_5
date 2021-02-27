const app = Vue.createApp({
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
            inputSearch: '',
            notFound: false,
            currentIndex: 0,
            showImagesStatus: false

        }
    },
    methods: {
        // clickLike(index) {
        //     this.cats[index].like = !this.cats[index].like;
        // },
        // toggleSearch() {
        //     this.search = !this.search;
        // },

        imgClicked(index) {
            this.currentIndex = index;
        },
        showImages(showImg){
            this.showImagesStatus = showImg;
        },
        close() {
            this.showImagesStatus = false;
        },
        searchText(searchText) {
            this.inputSearch = searchText;
        },

    },

    computed: {
        countPhoto() {
            return this.cats.length
        },
        likeAmount() {
            return this.cats.filter(n => n.like).length;
        },

        searchCat() {
            this.notFound = false;
            if (this.inputSearch == '') {
                return this.cats;
            } else {
                picCat = this.cats.filter(p => p.name.includes(this.inputSearch.toLowerCase()));

                if (picCat == '') {
                    this.notFound = true;
                } else {
                    return picCat;
                }
            }

        }

    }

})