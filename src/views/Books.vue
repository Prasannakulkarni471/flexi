<template>
    <div>
        <app-header title="चालू घडामोडी" @add="$router.push('/books/0')" @search="(serachList($event))"></app-header>
        <v-row align="center">
            <v-col align="center">
            <v-btn class="ma-2" :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">
                2022
            </v-btn>
            <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
                2023
                <template v-slot:loader>
                    <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                    </span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
                2024
                <template v-slot:loader>
                    <span>Loading...</span>
                </template>
            </v-btn>
        </v-col>
        </v-row>
        <v-row align="center">
            <v-col align="center">
            <v-btn class="ma-2" :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">
                JAN
            </v-btn>
            <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
                FEB
                <template v-slot:loader>
                    <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                    </span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
                MAR
                <template v-slot:loader>
                    <span>Loading...</span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">
                APR
            </v-btn>
            <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
                MAY
                <template v-slot:loader>
                    <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                    </span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
                JUN
                <template v-slot:loader>
                    <span>Loading...</span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">
                JUL
            </v-btn>
            <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
                AUG
                <template v-slot:loader>
                    <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                    </span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
                SEPT
                <template v-slot:loader>
                    <span>Loading...</span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">
                OCT
            </v-btn>
            <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
                NOV
                <template v-slot:loader>
                    <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                    </span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
                DEC
                <template v-slot:loader>
                    <span>Loading...</span>
                </template>
            </v-btn>
        </v-col>
        </v-row>
        <v-list dense>
            <v-list-item v-for="(item, i) in books" :key="i">
                <v-list-item-avatar tile>
                    <v-img :src="item.img"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title> 
                    <v-list-item-subtitle>Pages: {{ item.pages }}</v-list-item-subtitle>
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
                                    <v-list-item-title @click="$router.push('/books/'+item._id)">View </v-list-item-title>
                                    <v-icon>mdi-eye</v-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Download </v-list-item-title>
                                    <v-icon>mdi-download</v-icon>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <p>Status</p>
                    </div>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import booksList from "@/data/books.json";
import AppHeader from "@/components/AppHeader.vue";
export default {
    components: { AppHeader },
    data() {
        return {
            books: booksList,
            loader: null,
            loading: false,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false,
        };
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
    },
    methods: {
        serachList(text) {
            console.log(text)
            
        }
    },
};
</script>

<style lang="scss" scoped>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>