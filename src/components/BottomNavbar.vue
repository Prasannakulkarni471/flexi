<template>
    <v-bottom-navigation v-model="value" app>
        <v-btn value="recent" @click="$router.push('/Books')">
            <span>Books</span>

            <v-icon>mdi-bookshelf</v-icon>
        </v-btn>

        <v-btn value="favorites">
            <span>Authors</span>

            <v-icon>mdi-person</v-icon>
        </v-btn>

        <v-btn value="nearby">
            <span>Members</span>

            <v-icon>mdi-ballot</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>