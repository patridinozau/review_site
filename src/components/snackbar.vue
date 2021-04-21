<template>
    <v-main>
        <v-snackbar v-model="snackbar" :timeout="4000" dark bottom color="grey--lighten-3" style="font-family: 'Lato', sans-serif;font-weight: bold;">
            <span>{{ error }}</span>
            <v-btn text temporary dark @click="snackbar = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-snackbar>
    </v-main>
</template>

<script>
    export default {
        name: "snackbar.vue",
        data () {
            return {
                snackbar: false
            }
        },
        watch: {
            error (value) {
                if(value !== null && value !== undefined)
                    this.snackbar = true
            }
        },
        computed: {
            error () {
                return this.$store.getters.error
            },
        }
    }
</script>

<style scoped>

</style>
