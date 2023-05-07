<template>
    <div class="center">
        <v-row>
            <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4" >
                <v-avatar color="surface-variant" size="250">
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="ईमेल" variant="solo" v-model="username"></v-text-field>
                <v-text-field label="पासवर्ड" variant="solo" type="password" v-model="password"></v-text-field>
                <router-link to="/MainPage"><v-btn class="base_inverted"  variant="tonal" large >
                    लॉगिन करा
                </v-btn></router-link>
                <h3>__</h3>
                <h6> खाते नाही ?<br/> इथे क्लिक करा </h6>
                <h3>__</h3>
                <router-link to="/SignUp"><v-btn color="grey"  >
                    साइन अप करा
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
                alert("Logged in ")
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>