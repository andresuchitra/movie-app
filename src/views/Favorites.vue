<template>
  <div class="p-3">
    <h1 class="mb-3">Favorites</h1>
    <div class="row">
      <MovieCard @onUnstar="unStar" :movie="movie" v-for="(movie, index) in favorites" :key="index" />
    </div>
  </div>
</template>
<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      favorites: [],
    }
  },
  mounted() {
    let ids = Object.keys(localStorage);
    ids.forEach(x => {
      if(x.includes('imdb-')) {
        this.favorites.push(JSON.parse(localStorage.getItem(x)));
      }
    })

    console.log(this.favorites);
  },
  methods: {
    unStar(movie) {
      localStorage.removeItem('imdb-'+movie.imdbID);
      swal.fire('Great', `Movie ${movie.Title} has been removed from favorites!`, 'success')
      
      console.log(movie);
      this.favorites = this.favorites.filter(x => x.imdbID.toString() !== movie.imdbID.toString());
      console.log(this.favorites);
    }
  }
}
</script>

