<template>
    <div class="card col-3 m-1">
        <img src="https://previews.123rf.com/images/pavlostv/pavlostv1806/pavlostv180600511/102793693-movie-icon-%C3%A2%E2%82%AC%E2%80%9C-stock-vector.jpg" class="card-img-top" :alt="$props.movie.title">
        <div class="card-body">
            <h5 class="card-title">{{ $props.movie.Title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ $props.movie.Year}}</h6>
            <p class="card-text">{{ $props.movie.imdbID }}</p>
            <button  class="btn btn-danger" @click.prevent="$emit('onUnstar', $props.movie)">Unstar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['movie'],
}
</script>

<style scoped>

</style>
