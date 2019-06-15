<template>
    <div class="d-flex movie-item my-3 p-3  align-items-center">
        <div class="cell">{{ $props.movie.Title }}</div>
        <div class="cell">{{ $props.movie.Year }}</div>
        <div class="cell">{{ $props.movie.imdbID }}</div>
        <div class="cell align-items-center d-flex justify-content-center">
            <button class="btn btn-success my-2 itembtn" @click="addToFavorites">STAR</button>
        </div>
        <div class="cell align-items-center d-flex justify-content-center">
            <button class="btn btn-danger my-2 itembtn" @click="removeFromFavorites">UNSTAR</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieListItem',
    props: [ 'movie'],
    methods: {
        addToFavorites() {
            this.$emit('onAddFavorites', this.$props.movie)
        },
        removeFromFavorites() {
            this.$emit('onRemoveFavorites', this.$props.movie)
        }
    },
}
</script>

<style scoped>
.movie-item {
    min-height: 100px;
    border-bottom: 1px solid lightgrey;
}
.cell {
  width: 20%;
}
.itembtn {
    width: 60%;
}
</style>
