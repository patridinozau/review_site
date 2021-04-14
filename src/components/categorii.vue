<template>
    <v-main>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
        <navbar />
        <br />
        <br />
        <br />
        <div>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card class="cat" v-for="categorie in categorii" :key="categorie.name">
                            <img class="imagini" :src="categorie.image" alt="alt text" />
                            <div class="center"><h4 class="text1">{{categorie.description}}</h4></div>
                            <v-card-text>
                                <div>
                                    <h3 class="text">{{categorie.name}}</h3>
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
                categorii:[
                    { name: 'Electrocasnice',description:'Electrocasnicele sunt aparate care funcționează cu energie electrică și se folosesc pentru ușurarea muncilor casnice.', image: require('../assets/electrocasnice.jpg') },
                    { name: 'Restaurante, baruri si terase',description:'Un restaurant este un stabiliment, local public unde se pot consuma pe loc mâncăruri și băuturi, contra cost.', image: require('../assets/restaurant2.jpg') },
                    { name: 'Masini, scootere, biciclete',description:'Automobilul sau mai familiar mașina, este un vehicul cu patru (rar, trei, șase) roți, acționat de un motor cu ardere internă.', image: require('../assets/car.jpg') },
                    { name: 'Mancare', description:'Mâncarea sau hrana reprezintă orice substanță, de obicei compusă din carbohidrați, grăsimi și proteine.',image: require('../assets/mancare.jpg') },
                    { name: 'Produse de igiena si makeup',description:'Cosmetica este arta și practica îngrijirii, păstrării și înfrumusețării corpului uman, în special a feței și a părului.', image: require('../assets/makeup.jpg') },
                    { name: 'Haine si incaltaminte',description:'Vestimentație este termenul care se referă la totalitatea articolelor de îmbrăcăminte, încălțăminte, accesorii și bijuterii.', image: require('../assets/haine2.jpg') },
                    { name: 'Servicii ale unei companii',description:'Sunt firme care presteaza anumite servicii in schimbul banilor.', image: require('../assets/servicii.jpg') },
                    { name: 'Filme si seriale',description:'Film este termenul utilizat pentru desemnarea, în accepțiune mai largă, a produsului final al artei și industriei cinematografice.', image: require('../assets/film.jpg') },
                    { name: 'Aplicatii si site-uri',description:'Aplicația software (app pe scurt) este un program sau un grup de programe concepute pentru utilizatorii finali. ', image: require('../assets/aplicatii.jpg') }
                ]
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