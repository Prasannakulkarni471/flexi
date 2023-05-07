<template>
    <v-bottom-navigation v-model="value" app>
        <v-btn value="recent" color="indigo" @click="$router.push('/')" >
            <span>
मुख्यपृष्ठ</span>

            <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn value="favorites" @click="$router.push('/Books')">
            <span>चालू घडामोडी</span>

            <v-icon>mdi-bookshelf</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn value="nearby" @click="$router.push('/')">
            <span>खाते</span>

            <v-icon>mdi-ballot</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn value="nearby" @click="$router.push('/')">
            <span>माझे डाउनलोड</span>

            <v-icon>mdi-ballot</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>