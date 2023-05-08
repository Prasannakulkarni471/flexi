<template>
    <div>
        <v-col>
            <v-img src="@/assets/dp.png" height="50" width="50"></v-img>
            <h1>परत स्वागत आहे <br /> प्रथमेश !</h1>
        </v-col>
        <v-col>
            <v-text-field label="येथे नवीन ज्ञान शोधा -->" prepend-inner-icon="mdi-magnify"></v-text-field>

        </v-col>
        <v-row>
            <v-img src="@/assets/1.jpg" height="150" width="70"></v-img>
            <v-img src="@/assets/2.jpg" height="150" width="120"></v-img>
            <v-img src="@/assets/3.jpg" height="150" width="120"></v-img>
        </v-row>
        <h3 style="text-align:center">__________________________</h3>
        <h4>Options</h4>
        <div class="text-center">
            <v-btn class="ma-2" :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">
                Current Affairs
            </v-btn>
            <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
                Prev. Questions
                <template v-slot:loader>
                    <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                    </span>
                </template>
            </v-btn>
            <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
                Inspiral Stories
                <template v-slot:loader>
                    <span>Loading...</span>
                </template>
            </v-btn>
            <v-btn :loading="loading3" :disabled="loading3" color="blue-grey" class="ma-2 white--text"
                @click="loader = 'loading3'">
                Future Advertisement
                <v-icon right dark>
                    mdi-cloud-upload
                </v-icon>
            </v-btn>

            <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
                Quize
                <template v-slot:loader>
                    <span>Loading...</span>
                </template>
            </v-btn>

            <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
                Study Material
                <template v-slot:loader>
                    <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                    </span>
                </template>
            </v-btn>

            <v-btn :loading="loading5" :disabled="loading5" color="blue-grey" class="ma-2 white--text" fab
                @click="loader = 'loading5'">
                <v-icon dark>
                    mdi-cloud-upload
                </v-icon>
            </v-btn>
            <h3 style="text-align:center">__________________________</h3>
        </div>
        <v-card max-width="95%" class="mx-auto">
            <v-toolbar color="indigo" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>वैशिष्ट्ये</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title">
                    <v-list-item-icon>
                        <v-icon v-if="item.icon" color="pink">
                            mdi-star
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.stitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar>
                        <v-img src="@/assets/dp.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>
            </v-list>
        </v-card>
        <BottomNavbar />
    </div>
</template>

<script>
import BottomNavbar from '@/components/BottomNavbar.vue';
export default {
    components: {
        BottomNavbar,
    },
    data() {
        return {
            items: [
                { icon: true, title: 'Sketch', stitle: '10 hours, 19 Lessons' },
                { title: 'XD Prototyping', stitle: '10 hours, 19 Lessons' },
                { title: 'Pre Sketch', stitle: '10 hours, 19 Lessons' },
                { title: 'XD Prototyping', stitle: '10 hours, 19 Lessons' },
            ],
            loader: null,
            loading: false,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false,
        }
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
    },
}
</script>

<style lang="scss" scoped>
.all-buttons {

    // border: 2px solid red;
    height: 30em;
    width: 73em;
    position: relative;
    left: 10%;
    margin-top: 40px;

}

.desc {
    // border: 2px solid yellow;
    width: 18em;
    height: 3em;


}

.h3desc {
    position: relative;
    top: 1px;
    left: 25%;
}

.icn {
    // border: 2px solid red;
    height: 19%;
    width: 41%;
    position: relative;
    left: 28%;
}

img.icn-logo {
    width: 33px;
    height: 32px;
}

.cards {

    // border: 2px solid black;
    width: 19em;
    height: 8em;
    position: relative;
    left: 3%;
    background: rgb(236, 245, 255);
    border-radius: 35px;
    cursor: pointer;
    height: 10em;

}

.cards:hover {

    box-shadow: 3px 3px 10px black;
}

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
}</style>