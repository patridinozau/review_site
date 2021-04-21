<template>
    <v-main>
        <navbar />
        <br />
        <br />
        <br />
        <div>
            <v-progress-circular
                    :size="50"
                    color="primary"
                    indeterminate
                    v-if="loading"
            ></v-progress-circular>
            <v-container v-if="!loading">
                <v-row>
                    <v-col>
                        <v-card class="cat" v-for="categorie in categorii" :key="categorie.id" @click="goToCat(categorie.id)">
                            <img class="imagini" :src="categorie.img" alt="alt text" />
                            <div class="center"><h4 class="text1">{{categorie.description}}</h4></div>
                            <v-card-text>
                                <div>
                                    <h3 class="text">{{categorie.numeCategorie}}</h3>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-main>
</template>

<script>
    import Navbar from "./Navbar";
    export default {
        components: {
            'navbar': Navbar
        },
        data () {
            return {

            }
        },
        created() {
            this.$store.dispatch('loadCategorii')
        },
        computed: {
            categorii () {
                return this.$store.getters.categorii
            },
            loading () {
                return this.$store.getters.loading
            }
        },
        methods: {
            goToCat (key) {
                this.$router.push('/categorii/' + key)
            }
        }
    }
</script>

<style>
    .cat{
        margin: 23px;
        border: 1px solid #ccc;
        float: left;
        cursor: pointer;
    }
    .text{
        color: black;
        text-align: center;
        font-family:"Arial Black";
    }
    .text1{
        opacity: 1;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
      font-family: 'Lato', sans-serif;
      font-weight: bold;
    }
    .imagini{
        opacity: 1.0;
        display: block;
        height: auto;
        transition: 750ms ;
    }
    .center {
        transition: 500ms ease;
        opacity: 0;
        position: absolute;
        top: 42%;
        left: 50%;
        height: 83%;
        width: 100%;
        background-color: black;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%)
    }
    .cat:hover .imagini{
        opacity: 0.3;
        transform: rotateY(180deg);
    }
    .cat:hover .center{
        opacity:0.6;
    }
</style>
