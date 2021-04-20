<template>
    <v-dialog width="500">
        <template v-slot:activator="{ on }">
            <v-btn class="homebutton text--black font-weight-bold" plain v-on="on">Adauga un produs nou</v-btn>
        </template>

        <v-card>
            <div class="main">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">

                <section class="formdesign">
                    <form>
                        <h1>Lasa si tu o recenzie!</h1>
                        <br />
                        <div align="center">

                            <v-text-field
                                    v-model="nume"
                                    label="Nume"
                                    :error-messages="nameErrors"
                                    required
                                    clearable
                            ></v-text-field>

                            <v-text-field
                                    v-model="description"
                                    label="Descriere"
                                    :error-messages="descriptionErrors"
                                    required
                                    clearable
                            ></v-text-field>
                            <div>
<!--                                file input aici-->
                            </div>

                        </div>
                        <div align="center">
                            <br />
                            <hr />
                            <br />
                            <v-btn class="mr-4 " type="submit" :loading="loading">trimite</v-btn>
                            <v-btn @click="clear">golește</v-btn>
                        </div>
                    </form>
                </section>
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
        data: () => ({
            nume: '',
            description: '',
            imageData: null,
            picture: null,
            loading: false,
            uploadValue: 0
        }),
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
            }
        },
        methods: {
            submitForm () {
                this.loading = true;
            },
            clear () {
                this.$v.$reset()
                this.nume = ''
                this.description = ''
                this.loading = false
            },
        }
    }


</script>

<style>

    .main {
        background: rgb(0,204,255);
        background: linear-gradient(180deg, rgba(0,204,255,0.1) 0%, rgba(0,204,255,0.3) 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .formdesign {
        text-align: center;
        justify-content: center;
        align-content: center;
        padding: 60px;
        font-family: 'Lato', sans-serif;
        background: white;
        min-height: 800px;
        width: 40%;
        background: linear-gradient(
                to right bottom,
                rgba(255, 255, 255, 0.7),
                rgba(255, 255, 255, 0.3)
        );
        border-radius: 2rem;
        z-index: 2;
        backdrop-filter: blur(2rem);
        display: flex;
    }
    .homebutton{
        background-color: hsl(47, 95%, 49%);
    }

</style>
