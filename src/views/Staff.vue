<template>
    <div>
        <v-row>
            <v-col cols="8" offset="2" md="10" offset-md="1">
                <app-header title="STAFF"></app-header>
                <v-list dense>
                    <v-list-item v-for="(item, i) in employees" :key="i">
                        <v-list-item-avatar tile>
                            <v-img :src="item.img"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.firstName + item.middleName + item.lastName }}</v-list-item-title>
                            <v-list-item-subtitle>
                                <h3>{{item.id}}</h3>
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                <h3>date of joining</h3>
                            </v-list-item-subtitle>
                        </v-list-item-content>

                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import employeeslist from '@/data/employees.json'
import AppHeader from "@/components/AppHeader.vue";
export default {
    components: { AppHeader },
    data() {
        return {
            employees: employeeslist
        }
    }
}
</script>

<style lang="scss" scoped></style>