<template>
    <v-main style="margin:auto;width:65%">
        <navbar />
        <br><br><br><br><br>
        <div class="d-flex flex-no-wrap">
            <div style="width:30%">
                <div class="zonaFiltre">
                    <div class="Filtre" style="padding:15px">
                        <H3 style="margin-bottom:8px">Cauta dupa stele</H3>
                        <div style="margin-top: 0px">
                            <v-checkbox class="stele" v-model="checkbox" :label="`1 stea`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`2 stele`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`3 stele`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`4 stele`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`5 stele`"></v-checkbox>
                        </div>
                    </div>
                    <div class="Filtre" style="padding:15px">
                        <H3 style="margin-bottom:8px">Categorii</H3>
                        <div style="margin-top: 0px">
                            <v-checkbox class="stele" v-model="checkbox" :label="`Frigider`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`Fier de calcat`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`Aragaz`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`Masina de spalat`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`Microunde`"></v-checkbox>
                            <v-checkbox class="stele" v-model="checkbox" :label="`Masina de spalat vase`"></v-checkbox>
                        </div>
                    </div>
                </div>
            </div>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card class="pa-7 mb-4" v-for="produs in produse" :key="produs.name">
                            <div><img class="imagini" :src="produs.imagine" alt="alt text" /></div>
                            <div>
                                <div class="rat" style="margin-top: 2px">
                                    ({{produs.rating}})</div>
                                <v-rating class="ste"
                                          background-color="warning lighten-1"
                                          color="warning"
                                          half-increments
                                          length="5"
                                          readonly
                                          size="25"
                                          :value=produs.rating
                                ></v-rating>
                                <v-card-title class="texti">{{ produs.name }}</v-card-title>
                                <v-card-subtitle class="tex">Reviews: {{ produs.reviews}}</v-card-subtitle>
                                <v-card-text class="tex">{{ produs.descriere }}</v-card-text>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-main>
</template>

<script>
    import Navbar from "../components/Navbar";
    export default {
        name: "categorie",
        components: {
            'navbar': Navbar
        },
        data () {
            return {
                produse:[
                    { name: 'Arctic AD54240M30W',reviews:'150',rating: 2,descriere:'Un frigider compact, cu doua usi si un volum net total de 223 litri. Rafturile ajustabile ofera un grad ridicat de ﬂexibilitate in organizarea frigiderului, ﬁind ideal pentru familiile ce cauta o solutie practica si avantajoasa.', imagine:require('../assets/electrocasnice.jpg')},
                    { name: 'Arctic AD54240M30W',reviews:'320',rating: 3.4,descriere:'Un frigider compact, cu doua usi si un volum net total de 223 litri. Rafturile ajustabile ofera un grad ridicat de ﬂexibilitate in organizarea frigiderului, ﬁind ideal pentru familiile ce cauta o solutie practica si avantajoasa.', imagine:require('../assets/electrocasnice.jpg')},

                ],
                checkbox: false
            }
        }
    }
</script>

<style scoped>
    .Filtre{
        border: 1px solid #ccc;
        margin: 7px;
    }
    .zonaFiltre{
        border: 2px solid #ccc;
        margin-right: 20px;
    }
    .stele{
        margin-top: 0px;
    }
    .imagini{
        width:220px;
        float:left;
        padding-right: 10px;
        cursor: pointer;
    }
    .texti{
        font-family:"Arial Black";
        padding:10px;
        cursor: pointer;

    }
    .tex{
        font-size:15px;
        padding:7px;

    }
    .ste{
        color: #ff9454;
        float: right;
    }
    .rat{
        float: right;
        font-size: 14px;
        padding: 3px;

    }
</style>