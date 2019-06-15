<template>
    <li class="page-item">
        <a class="page-link" href="#" @click.prevent="goToPage" ref="pageItem">{{ page }}</a>
    </li>
</template>

<script>
export default {
    props: ['page'],
    methods: {
        goToPage() {
            if(this.$props.page === 'Next') {
                this.$emit('goToPage', Number(this.$props.page)+1);
            }
            else {
                this.$emit('goToPage', this.$props.page)
            }
        }
    }
}
</script>

<style scoped>

</style>
