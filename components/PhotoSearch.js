app.component('photo-search', {
  props: {
    cats: {
      type: Array,
      require: true,
      }
    },
    emits:[
      'toggle-search',
      'search-text'
  ],
  template:
    /*html*/
    `                   
        <button class="material-icons" v-if="search==''" @click="toggleSearch">search</button>
            <div class="input-group" v-show="search">
                <input type="text" class="form-control" placeholder="Please enter text for searching photos"
                    v-model="inputSearch" @input="searchText">
                <button class="btn btn-outline-secondary" @click="toggleSearch">Cancle</button>
            </div>
        `,
  data() {
    return {
      search: false,
      inputSearch: '',
    };
  },
  methods: {
    toggleSearch() {
      this.search = !this.search;
      if (this.search == false) {
        this.inputSearch = '';
      }
      this.$emit('toggle-search');
    },
    searchText() {
      this.$emit('search-text', this.inputSearch);
    },
  },
});
