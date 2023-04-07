<template>
    <div>
        <h1>{{ id!=0 ? "Edit" : "Add" }} Book</h1>
        <v-form>
            <v-text-field label="Title" v-model="books.title"></v-text-field>
            <v-textarea label="Description" v-model="books.description"></v-textarea>
        </v-form>
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