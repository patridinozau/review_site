<template>
    <v-dialog v-model="dialogadd" width="500">
        <template v-slot:activator="{ on }">
            <v-btn class="homebutton text--black font-weight-bold" plain v-on="on">Adauga un review nou</v-btn>
        </template>
        <v-card>
            <div class="main">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">

              <div>
                <form @submit.prevent="submitForm">
                  <div @click="dialogadd = !dialogadd"><v-icon class="closeIcon">mdi-close</v-icon></div>
                  <h1>Adauga un review!</h1>
                    <br />
                    <div align="center">
                        <p>Acorda o nota:</p>
                        <v-rating class="ste"
                                  background-color="warning lighten-1"
                                  color="warning"
                                  half-increments
                                  hover
                                  length="5"
                                  size="40"
                                  v-model="rating"
                                  required
                                  clearable
                        ></v-rating>
                        <hr />
                        <v-textarea
                                prepend-inner-icon="mdi-lead-pencil"
                                v-model="review"
                                label="Review"
                                auto-grow
                                no-resize
                                required
                                :error-messages="descriptionErrors"
                                clearable
                        ></v-textarea>
                        <v-textarea
                                prepend-inner-icon="mdi-format-title"
                                v-model="titluReview"
                                label="Descriere cu un cuvant"
                                rows="1"
                                no-resize
                                required
                                :error-messages="descriptionErrors"
                                clearable
                        ></v-textarea>
                        <div>
                            <v-file-input
                                    prepend-inner-icon="mdi-image"
                                    label="Adaugati o imagine (optional)"
                                    dense
                                    show-size
                                    prepend-icon=""
                                    v-model="picture"
                            ></v-file-input>
                            <img :src="this.imageUrl" class="imagePreview" v-if="this.picture">
                        </div>
                    </div>
                    <div align="center">
                        <br />
                        <v-btn class="mr-4 " type="submit" :loading="loading">trimite</v-btn>
                        <v-btn @click="clear">golește</v-btn>
                    </div>
                </form>
              </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, minLength } from 'vuelidate/lib/validators'
    export default {
        mixins: [validationMixin],
        validations: {
            name: { required, maxLength: maxLength(15), minLength: minLength(3) },
            description: {required, maxLength: maxLength(100)},
        },
        props: {
            catKey: {
                type: String
            }
        },
        data: () => ({
            review: '',
            titluReview:'',
            imageUrl: null,
            picture: null,
            loading: false,
            dialogadd: false,
            rating: null
        }),
        watch : {
            picture (value) {
                if(value != null && value != undefined)
                {
                    const reader = new FileReader();
                    const vm = this
                    reader.addEventListener("load", function () {
                        vm.imageUrl = this.result
                    })
                    reader.readAsDataURL(value)
                }
            }
        },
        computed: {
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('Numele produsului este obligatoriu')
                return errors
            },
            descriptionErrors () {
                const errors = []
                if(!this.$v.description.$dirty) return errors
                !this.$v.description.required && errors.push('Descrierea produsului este obligatorie')
                return errors
            },
            user () {
                return this.$store.getters.user
            }
        },
        methods: {
            submitForm () {

            },
            clear () {
                this.$v.$reset()
                this.review = ''
                this.loading = false
                this.imageUrl = null
                this.picture = null
                this.rating = 0
                this.titluReview = ''
            },
        }
    }
</script>

<style scoped>
    .homebutton{
        background-color: hsl(47, 95%, 49%);
        margin-bottom: 30px;
        margin-left:15px;
    }
    .main {
        background-color: ghostwhite;
        min-height: 60vh;
        min-width: 40vh;
        text-align: center;
        justify-content: center;
        align-content: center;
        display: flex;
        padding: 60px;
        font-family: 'Lato', sans-serif;
    }
    .closeIcon {
        align:right;
        float: right;
        padding: 0;
        margin: 0;
    }
    .closeIcon:hover {
        cursor:pointer;
        background-color: lightskyblue;
    }

    .imagePreview {
        width: 300px;
        min-height: 100px;
        padding: 5px;
        margin: 15px;
        align-items: center;
        justify-items: center;
        display: flex;
        color: #cccccc;
    }
</style>
