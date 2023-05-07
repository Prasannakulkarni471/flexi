<template>
    <div>
        <h1>परत स्वागत आहे <br /> प्रथमेश !</h1>
        <v-col>
            <v-text-field label="येथे नवीन ज्ञान शोधा -->" prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-col>

        <v-row>
            <v-col col="2">
                <v-img src="@/assets/categories.png" height="300" width="350"></v-img>
            </v-col>
            <v-spacer> </v-spacer>
            <v-col col="2">
                <v-img src="@/assets/categories.png" height="300" width="350"></v-img>
            </v-col>
            <v-spacer> </v-spacer>
            <v-col col="2">
                <v-img src="@/assets/categories.png" height="300" width="350"></v-img>
            </v-col>
            <v-spacer> </v-spacer>
            <v-col col="2">
                <v-img src="@/assets/categories.png" height="300" width="350"></v-img>
            </v-col>

        </v-row>
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
        <BottomNavbar/>
    </div>
    
</template>

<script>
import BottomNavbar from '@/components/BottomNavbar.vue';
export default {
    components: {
        BottomNavbar,
    },
    data () {
      return {
        items: [
          { icon: true, title: 'Sketch', stitle: '10 hours, 19 Lessons' },
          { title: 'XD Prototyping', stitle: '10 hours, 19 Lessons' },
          { title: 'Pre Sketch', stitle: '10 hours, 19 Lessons' },
          { title: 'XD Prototyping', stitle: '10 hours, 19 Lessons' },
        ],
      }
    },
}
</script>

<style lang="scss" scoped></style>