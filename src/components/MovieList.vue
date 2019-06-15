<template>
  <div>
    <div class="d-flex px-3 header align-items-center">
      <div class="cell font-weight-bold text-uppercase">Title</div>
      <div class="cell font-weight-bold text-uppercase">Year</div>
      <div class="cell font-weight-bold text-uppercase">IMDB Title</div>
      <div class="cell font-weight-bold text-uppercase">Star</div>
      <div class="cell font-weight-bold text-uppercase">UnStar</div>
    </div>
    <MovieListItem @onAddFavorites="addFavorites" 
      @onRemoveFavorites="removeFavorites" 
      v-for="(movie, index) in $props.list" :key="index" :movie="movie" />
  </div>
</template>

<script>
import api from '@/api/api.js'
import MovieListItem from '@/components/MovieListItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieListItem,
  },
  props: ['list'],
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.$props.list)
  },
  methods: {
    addFavorites(movie) {
      localStorage.setItem('imdb-'+movie.imdbID, JSON.stringify(movie));
      swal.fire('Great', `Movie ${movie.Title} has been added to favorites!`, 'success')
      this.$router.push('/favorites');
    },
    removeFavorites(movie) {
      localStorage.removeItem('imdb-'+movie.imdbID);
      swal.fire('Great', `Movie ${movie.Title} has been removed from favorites!`, 'success')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #343A40;
  font-size: 1.2em;
  min-height: 50px;
  color: white;
}
.cell {
  width: 20%;
}
</style>
