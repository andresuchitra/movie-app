<template>
  <div class="container py-3">
    <h1 class="mb-4">Movie List App</h1>
    <form class="form-inline my-2 mb-4" @submit.prevent="searchMovie">
      <input class="form-control mr-2" v-model="searchKey" type="search" placeholder="Search Movie" aria-label="Search">
      <button class="btn btn-outline-success my-2" type="submit">Search</button>
      <button class="btn btn-outline-danger ml-2 my-2" type="button" @click.prevent="clear">Reset Search</button>
    </form>
    <nav aria-label="Page navigation example my-4">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true" v-if="currentPage > 1">Previous</a>
        </li>
        <div v-if="totalPages <= 3" class="d-flex">
          <PageItem v-for="(page, id) in totalPages" :key="id" :page="page" @goToPage="goToPage" />
        </div>
        <div v-else class="d-flex">
          <PageItem v-for="(page, id) in 3" :key="id" :page="page" @goToPage="goToPage" />
          <PageItem v-if="totalPages > 3" :page="'Next'" />
        </div>
        
      </ul>
    </nav>
    <MovieList :list="list" />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from '@/components/MovieList.vue';
import PageItem from '@/components/PageItem.vue';
import api from '@/api/api'

export default {
  name: 'home',
  components: {
    MovieList,
    PageItem,
  },
  data() {
    return {
      searchKey: '',
      url: '',
      list: [],
      currentPage: 1,
      totalPages: 1,
    }
  },
  mounted() {
    this.getMovies()
  },
  methods: {
    goToPage(pageTo) {
      api.get(this.url + `&page=${pageTo}`)
        .then(({ data }) => {
          console.log(data);
          this.list = data.data;
          this.currentPage = data.page
          this.totalPages = data.total_pages
        })
        .catch(err => {
          swal.fire('Error', err.toString(), 'error')
        })
    },
    clear() {
      this.url = ''
      this.getMovies();
    },
    getMovies() {
      api.get()
        .then(({ data }) => {
          this.list = data.data;
          this.currentPage = data.page
          this.totalPages = data.total_pages
        })
        .catch(err => {
          swal.fire('Error', err.toString(), 'error')
        })
    },
    searchMovie() {
      this.url = `/?Title=${this.searchKey}`;
      api.get(this.url)
      .then(({ data }) => {
        console.log(data.data);
          this.list = data.data;
          this.currentPage = data.page
          this.totalPages = data.total_pages
        })
        .catch(err => {
          swal.fire('Error', err.toString(), 'error')
        })
    }
  }
};
</script>
