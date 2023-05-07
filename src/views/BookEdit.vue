<template>
    <div>
        <h1>{{ books.title }}</h1>
        <v-form>
            <v-text-field  v-model="books.title"></v-text-field>
            
        </v-form>
        <v-img :src="books.img"></v-img>
    </div>
</template>

<script>
import booksList from '@/data/books.json'
    export default {
        data() {
            return {
                id: 0,
                books: {}
            }
        },
        mounted () {
            this.id= this.$route.params.id;
            if(this.id !=0){
                this.books = booksList.find(rec => rec._id == this.id)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>