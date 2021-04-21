<template>
    <v-main>
        <div style="height:350px;width:2000px;position: absolute;top: 0px;z-index: 1;" class="grey lighten-3"></div>
        <navbar />
        <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
                v-if="loading"
        ></v-progress-circular>
        <br><br><br>
        <div v-if="!loading" style="z-index:999;position: relative;margin:auto;width:70%">
            <div>
                <v-container>
                    <v-row>
                        <v-col>
                            <div class="pa-7 mb-4 d-flex flex-no-wrap">
                                <div class="stangaDivProd">
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
                                    <v-btn href="https://www.google.com/" class="button text--black font-weight-bold" plain>
                                        Link Produs
                                    </v-btn>
                                    <!--                                    <a target="_blank">Vezi pe site</a>-->
                                </div>
                                <div><img class="imagDesc" :src="theProd[0].img" alt="alt text" /></div>
                            </div>
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
                                    <v-avatar style="float: left">
                                        <img src="../assets/darius.jpg" class="avatarr">
                                    </v-avatar>
                                    <v-card-title>{{review.name}}</v-card-title>
                                    <v-card-title class="texti">{{review.title}}</v-card-title>
                                    <v-card-text class="tex">{{review.text}}</v-card-text>
                                </div>
                                <div><img class="imag" :src="review.img" /></div>
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
    .divProd{
        z-index: 999;
    }
    .review{
        margin-bottom:15px;
    }
    .imagDesc{
        width:270px;
        float:left;
        padding-right: 10px;

    }
    .imag{
        width:220px;
        float: right;
        margin-left: 130px
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
        margin-top: 17px;
    }
    .rat{
        float: right;
        font-size: 20px;
        padding: 3px;
        margin-top: 13px;
    }
    .stangaDivProd{
        margin-right:7%;
    }
    .button {
        margin-bottom: 30px;
        text-align: center;
        background-color: hsl(47, 95%, 49%);
    }
    .avatarr{
        float:left;
        font-size:32px;
        height: 42px;
        width: 42px;
    }
</style>