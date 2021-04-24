<template>
    <v-main style="margin:auto;width:65%">
        <navbar />
        <br><br><br><br><br>
        <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
                v-if="loading"
        ></v-progress-circular>
        <div class="d-flex flex-no-wrap" v-if="!loading">
            <div style="width:30%">
                <div class="button" v-if="userIsAuthenticated">
                    <add-product :catKey="catKey" />
                </div>
                <div class="zonaFiltre">
                    <div class="Filtre" style="padding:15px; font-family: 'Lato', sans-serif; font-weight: bold;">
                        <H3 style="margin-bottom:8px">Cauta dupa stele</H3>
                        <div style="margin-top: 0px">
                            <v-checkbox  class="stele" v-model="stea" value="1" :label="`1 stea`"></v-checkbox>
                            <v-checkbox  class="stele" v-model="stea" value="2" :label="`2 stele`"></v-checkbox>
                            <v-checkbox  class="stele" v-model="stea" value="3" :label="`3 stele`"></v-checkbox>
                            <v-checkbox  class="stele" v-model="stea" value="4" :label="`4 stele`"></v-checkbox>
                            <v-checkbox  class="stele" v-model="stea" value="5" :label="`5 stele`"></v-checkbox>
                            <v-checkbox  class="stele" :label="`Selecteaza tot`"></v-checkbox>
                        </div>
                    </div>
                    <div class="Filtre" style="padding:15px">
                        <H3 style="margin-bottom:8px; padding:15px; font-family: 'Lato', sans-serif; font-weight: bold;">Nr. de review-uri</H3>
                        <div style="margin-top: 0px">
                            <v-checkbox  class="stele" v-model="nr" value="5" :label="`0-5`"></v-checkbox>
                            <v-checkbox  class="stele" v-model="nr" value="10" :label="`5-10`"></v-checkbox>
                            <v-checkbox  class="stele" v-model="nr" value="10000" :label="`10+`"></v-checkbox>
                            <v-checkbox  class="stele" :label="`Selecteaza tot`"></v-checkbox>
                        </div>
                    </div>
                </div>
            </div>
            <v-container>
                <v-row>
                    <v-col>
                        <div align="center" class="cattitle">

                        </div>
                        <v-card class="pa-7 mb-4" v-for="produs in produse" :key="produs.id">
                            <div><img @click="goToProduct(produs.id)" class="imagini" :src="produs.img" alt="alt text" /></div>
                            <div>
                                <div class="rat" style="margin-top: 2px; font-family: 'Lato', sans-serif;">
                                    ({{ (isNaN(produs.rating/produs.reviews)) ? 0 : (produs.rating/produs.reviews) | toFixed }})
                                </div>
                                <v-rating class="ste"
                                          background-color="warning lighten-1"
                                          color="warning"
                                          half-increments
                                          length="5"
                                          readonly
                                          size="25"
                                          :value=(produs.rating/produs.reviews)
                                ></v-rating>
                                <v-card-title @click="goToProduct(produs.id)" class="texti">{{ produs.name }}</v-card-title>
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
    import AddProdusPopup from "../components/AddProdusPopup";
    export default {
        name: "categorie",
        props: ['id'],
        components: {
            'navbar': Navbar,
            'add-product': AddProdusPopup
        },
        created () {
            this.$store.dispatch('loadProduse', this.id)
        },
        data () {
            return {
                stea:[],
                nr:[],
                allstea:false,
                allnr:false,
                catKey: this.id,
                // ratmin:0,
                // ratmax:5,
                // revmin:0,
                // revmax:10000
            }
        },
        computed: {
            produse () {
                return this.$store.getters.produse
            },
            loading () {
                return this.$store.getters.loading
            },
            // allStea: {
            //     set: function () {
            //         this.allstea=!this.allstea;
            //         if(this.allstea){
            //             var nr = ["1","2","3","4","5"];
            //             this.stea=nr;
            //         }
            //         else{
            //             this.stea=[];
            //         }
            //     }
            // },
            // allNr: {
            //     set: function () {
            //         this.allnr=!this.allnr;
            //         if(this.allnr){
            //             var nr = ["5","10","10000"];
            //             this.nr=nr;
            //         }
            //         else{
            //             this.nr=[];
            //         }
            //     }
            // },
            userIsAuthenticated () {
                return this.$store.getters.user !== null && this.$store.getters.user !== undefined
            },

        },
        methods: {
            goToProduct (id) {
                this.$router.push('/categorii/' + this.id + '/produs/' + id)
            },
            // filteredProd (value) {
            //     let tempProd = value
            //
            //     tempProd = tempProd.filter((produs) => {
            //         return (produs.rating <= this.ratmax && produs.rating >= this.ratmin)
            //     })
            //
            //     return tempProd;
            // },
            // updateFilter(){
            //     var mins=10,maxs=0,mine=100000,maxe=0;
            //     this.stea.sort(function(a, b){return a - b});
            //     this.nr.sort(function(a, b){return a - b});
            //     for(var i=0;i<this.stea.length;i++){
            //         if(this.stea[i]>maxs)maxs=this.stea[i];
            //         if(this.stea[i]<mins)mins=this.stea[i];
            //     }
            //     for(var i=0;i<this.nr.length;i++){
            //         if(this.nr[i]>maxe)maxe=this.nr[i];
            //         if(this.nr[i]<mine&&this.nr[i]<1000){mine=this.nr[i]}
            //         else if(this.nr[i]<mine)mine=15;
            //     }
            //     this.ratmin=mins-1;
            //     this.ratmax=maxs;
            //     this.revmin=mine-5;
            //     this.revmax=maxe;
            // },
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
        margin-top: 0;
      font-family: 'Lato', sans-serif;
      font-weight: bold;
    }
    .imagini{
        width: auto;
        height: 110px;
        float: left;
        cursor: pointer;
        margin: 20px;
    }
    .texti{
        font-family: 'Arial Black', sans-serif;
        padding:10px;
        cursor: pointer;

    }
    .tex{
        font-size: 16px;
        text-align: left;
        padding-top: 8px;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
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
    .button {
        margin-bottom: 30px;
        text-align: center;
    }
</style>
