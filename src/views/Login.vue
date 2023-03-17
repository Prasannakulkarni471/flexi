<template>
    <div class="center">
        <v-row>
            <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4" >
                <v-avatar color="surface-variant" size="95">
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Username" variant="solo" v-model="username"></v-text-field>
                <v-text-field label="Password" variant="solo" type="password" v-model="password"></v-text-field>
                <v-btn class="base_inverted"  variant="tonal" @click="authenticate()">
                    Login
                </v-btn>
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
                alert("Logged in ")
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>