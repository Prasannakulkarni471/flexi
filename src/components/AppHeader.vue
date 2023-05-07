<template>
    <div class="app">
        <v-row>
            <v-col cols="10">
                <h3>{{ title }}</h3>
            </v-col>
            <v-col cols="2" class="text-right">
                <v-btn text @click="$emit('add')"><v-icon>mdi-plus</v-icon></v-btn>
            </v-col>
        </v-row>
        <v-text-field label="Search" append-icon="mdi-magnify" @input="$emit('search',$event)"></v-text-field>
        <v-row>

        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
    },
}
</script>
.app{
    padding=1rem;
}
<style lang="scss" scoped></style>