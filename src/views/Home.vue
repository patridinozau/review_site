<template>
    <v-main class="main">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet">

        <Navbar />

        <div class="first_content">
            <div class="content">
                <div class="content-col content-text">
                    <p>Doresti si tu sa lasi un review unui produs? Creeaza-ti un cont chiar acum</p>
                    <br />
                    <Signup />
                </div>
                <div class="content-col mr-15">
                    <img src="../assets/rating.png" class="img" />
                </div>
            </div>
            <div class="subcontent">
                <div class="content-col subcontent-text">
                    <p>Ai deja un cont? Conecteaza-te la el aici</p>
                    <br />
                    <Login />
                </div>
            </div>
        </div>

        <br />
        <div style="padding:20px" class="separator"><v-icon>mdi-chevron-triple-left</v-icon></div>
        <br />
        <div style="align-items: center; justify-items: center; align-content: center; justify-content: center; display:flex"><h1 style="margin-left: 40px">Ce este HonestReviews?</h1></div>
        <br />
        <div style="align-items: center; justify-items: center; align-content: center; justify-content: center; display:flex">
            <br />
            <div class="columntext">
                <h3 class="paragraph">
                    HonestReviews este un website prin intermediul caruia utilizatorii pot lasa review-uri, adica pareri, oricarui produs pe care l-au achizitionat.
                    Un asa-zis "review" consta in exprimarea propriei opinii in legatura cu produsul ales.
                    De asemenea, sunt mentionate sursa de unde a fost achizitionat produsul, numele intreg al acestuia, pretul si alte informatii utile.
                </h3>
            </div>
            <div class="columnimg">
                <!--          <img src="../assets/desk.png" class="image" />-->
            </div>
        </div>
        <br />
        <div style="padding:20px" class="separator"><v-icon>mdi-chevron-triple-right</v-icon></div>
        <br />

        <div class="poly1">

        </div>

        <div style="align-items: center; justify-items: center; align-content: center; justify-content: center; display:flex">
            <h1 style="margin-left: 40px">De ce HonestReviews?</h1></div>
        <br />
        <div style="align-items: center; justify-items: center; align-content: center; justify-content: center; display:flex">
            <br />
            <div class="columntext">
                <h3 class="paragraph">
                    Site-ul nostru va ofera o modalitate usoara de a scrie sau de a cauta impresii ale altor utilizatori despre orice fel ce produs.
                    De la frigidere la computere, de la masini la biciclete, de la resorturi turistice la restaurante, aici puteti gasi un review pentru orice categorie imaginabila.
                    Datorita interfatei construita sa fie usor de folosit, oricine poate beneficia de acest site.
                    In plus, autentificarea se poate realiza prin intermediul E-Mailului, al contului de Google sau al contului de Facebook, asigurand, astfel, un proces rapid de logare.
                </h3>
            </div>

        </div>
    </v-main>
</template>

<script>

    import Signup from "../components/Signup";
    import Login from "../components/Login";
    import Navbar from "../components/Navbar";

    export default {
        components: {
            Signup,
            Login,
            Navbar
        }
    }
</script>

<style>

    .main {
        font-family: 'Lato', sans-serif;
    }

    .first_content{
        background-image: linear-gradient(to bottom right,rgba(245, 250, 228,0.4),rgba(245, 250, 228,0.4)),
        url("../assets/tori-1976609_1920.jpg");
        background-position: center;
        background-size: cover;
    }

    .content-text{
        font-size: 34px;
        font-weight: 800;
        padding: 25px 15px;
    }

    .subcontent-text {
        font-size: 34px;
        font-weight: 800;
        margin-bottom: 50px;
    }

    .content {
        padding: 50px 50px 0px 50px;
        margin: 50px 50px 0px 50px;
        text-align: center;
        justify-content: space-between;
        display: flex;
    }

    .subcontent{
        padding-left: 50px;
        margin-left: 50px;
        display: flex;
        text-align: center;
        justify-content: space-between;
    }

    .content-col {
        flex-basis: 31%;
    }



    .columntext {
        align-items: center;
        justify-items: center;
        align-content: center;
        justify-content: center;
        display: flex;
        float: left;
        width: 40%;
        column-gap: 50px;
        padding-left: 40px;
    }

    .columnimg {
        align-items: center;
        justify-items: center;
        align-content: center;
        justify-content: center;
        display: flex;
        float: left;
        width: 40%;
        column-gap: 50px;
        padding-left: 70px;
    }

    .img {
        width: 100%;
        height: 100%;
    }

    .buttons {
        font-family: 'Lato', sans-serif;
        font-weight: bold;

    }

    .separator {
        display: flex;
        align-items: center;
        text-align: center;
        font-family: 'Arvo', serif;
    }
    .separator::before,
    .separator::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #e0eaf5;
    }
    .separator:not(:empty)::before {
        margin-right: .25em;
    }
    .separator:not(:empty)::after {
        margin-left: .25em;
    }

    .poly1 {
        clip-path: polygon(35% 68%, 100% 68%, 75% 100%, 0% 100%);
        background-color: #ee82ee;
        position: absolute;
        width:100%;
        height: 100%;
        z-index: -1;
    }


</style>