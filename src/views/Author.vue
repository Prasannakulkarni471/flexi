<template>
    <div>
        <v-row>
            <v-col cols="8" offset="2" md="10" offset-md="1">
                <app-header title="AUTHOR"></app-header>
                <v-list dense>
                    <v-list-item v-for="(item, i) in author" :key="i">
                        <v-list-item-content>
                            <v-list-item-title><h3>{{ item.name }}</h3></v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <div>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn v-bind="attrs" v-on="on" text>
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item>
                                            <v-icon>mdi-pencil</v-icon>
                                            <v-list-item-title>edit</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-icon>mdi-delete</v-icon>
                                            <v-list-item-title>delete</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                                
                            </div>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import authorlist from '@/data/authors.json'
import AppHeader from "@/components/AppHeader.vue";

export default {
    components: { AppHeader },
    data() {
        return {
            author : authorlist
        }
    }
}
</script>

<style lang="scss" scoped></style>