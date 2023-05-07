<template>
    <div class="center">
        <v-row>
            <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4" >
                <v-avatar color="surface-variant" size="250">
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Name" variant="solo" v-model="username"></v-text-field>
                <v-text-field label="Password" variant="solo" type="password" v-model="password"></v-text-field>
                <v-text-field label="Confirm Password" variant="solo" type="password"></v-text-field>
                <v-text-field label="Email" variant="solo" type="email"></v-text-field>
                <router-link to="/MainPage"><v-btn class="base_inverted"  variant="tonal" @click="authenticate()">
                    Sign Up
                </v-btn></router-link>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
            }
        },
        methods: {
            authenticate() {
                alert("Signed in ")
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>