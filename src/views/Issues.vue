<template>
    <div>
        <v-row>
            <v-col cols="8" offset="2" md="10" offset-md="1">
                <app-header title="ISSUES"></app-header>
                <v-row>
                    <v-col class="right" cols="2">
                        <v-btn class="base-inverted" block @click="authentication()">ISSUED</v-btn>
                    </v-col>
                    <v-col class="right" cols="2" offset="4">
                        <v-btn class="base-inverted" block @click="authentication()">REQUESTED</v-btn>
                    </v-col>
                </v-row>

                <v-list dense>
                    <v-list-item v-for="(item, i) in issue" :key="i">

                        <v-row>
                            <v-col>
                                <v-list-item-title>{{ item.returnDate }}</v-list-item-title>
                            </v-col>
                            <v-col>
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.book.title }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.member.name }}</v-list-item-subtitle>
                                    <v-list-item-subtitle>{{ item.issueDate }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-col>
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
                                            <v-list-item>
                                                <v-icon>mdi-pencil</v-icon>
                                                <v-list-item-title>issue</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-icon>mdi-pencil</v-icon>
                                                <v-list-item-title>return</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </v-list-item-icon>
                        </v-row>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import issuelist from '@/data/issues.json'
import AppHeader from "@/components/AppHeader.vue";
export default {
    components: { AppHeader },
    data() {
        return {
            issue: issuelist
        }
    },
    methods:
    {
        authentication() {
            alert("divert to particular page")
        }
    }
}
</script>

<style lang="scss" scoped>
// .bright{

//   border: none;
//   padding: 0% 25%;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;

// }
</style>