<template>
    <v-main style="margin:auto;width:70%">
        <navbar />
        <br><br><br><br><br>
        <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
                v-if="loading"
        ></v-progress-circular>
        <div v-if="!loading">
            <div>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card class="pa-7 mb-4 d-flex flex-no-wrap">
                                <div><img class="imagini" :src="theProd[0].img" alt="alt text" /></div>
                                <div>
                                    <div class="rat">
                                        ({{theProd[0].rating}})</div>
                                    <v-rating class="ste"
                                              background-color="warning lighten-1"
                                              color="warning"
                                              half-increments
                                              length="5"
                                              readonly
                                              size="25"
                                              :value=theProd[0].rating
                                    ></v-rating>
                                    <v-card-title class="texti">{{theProd[0].name}}</v-card-title>
                                    <v-card-subtitle class="tex">Rewiews: {{theProd[0].reviews}}</v-card-subtitle>
                                    <v-card-text class="tex">{{ theProd[0].descriere}}</v-card-text>
<!--                                    <a target="_blank">Vezi pe site</a>-->
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <div style="margin:auto;width:60%">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card class="pa-7 mb-4 d-flex flex-no-wrap" v-for="review in reviews" :key="review.id">
                                <div>
                                    <div class="rat">
                                        ({{review.rating}})</div>
                                    <v-rating class="ste"
                                              background-color="warning lighten-1"
                                              color="warning"
                                              half-increments
                                              length="5"
                                              readonly
                                              size="25"
                                              :value=review.rating
                                    ></v-rating>
                                    <v-card-title >{{review.name}}</v-card-title>
                                    <v-card-title class="texti">{{review.title}}</v-card-title>
                                    <v-card-text class="tex">{{review.text}}</v-card-text>
                                    <div><img class="imag" :src="review.img" /></div>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </v-main>
</template>

<script>
    import Navbar from "../components/Navbar";
    export default {
        name: "categorie",
        props: ['catId','prodId'],
        components: {
            'navbar': Navbar
        },
        created() {
            this.$store.dispatch('loadProd', {
                catId: this.catId,
                prodId: this.prodId
            })
            this.$store.dispatch('loadProductReviews', {
                catId: this.catId,
                prodId: this.prodId
            })

        },
        data () {
            return {

            }
        },
        computed: {
            reviews () {
                return this.$store.getters.reviews
            },
            loading () {
                return this.$store.getters.loading
            },
            theProd () {
                return this.$store.getters.theProd
            }

        }
    }
</script>
<style scoped>
    .review{
        margin-bottom:15px;
    }
    .imagini{
        width:220px;
        float:left;
        padding-right: 10px;

    }
    .imag{
        width:220px;
        float:left;
        padding-right: 10px;

    }
    .texti{
        font-family:"Arial Black";
        padding:10px;

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
        font-size: 20px;
        padding: 3px;

    }

</style>