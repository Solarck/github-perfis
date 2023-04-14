<script>
    import { usuario } from "../interfaces/IUsuario";
</script>

<div class="foto-container">
    <a href="">
        <div class="foto-usuario">
            <img src={usuario.avatar_url} alt="" />
        </div>
    </a>
    <h1>
        Bio: <p>{usuario.bio}</p>
    </h1>
</div>

<style>
    .foto-container {
        margin: 15px;
    }

    img {
        width: 10rem;
        height: 10rem;
        border: 4.56px solid #2e80fa;
        border-radius: 50%;
    }

    h1 {
        position: absolute;
        display: inline-block;
        font-size: 25px;
        color: #2e80fa;
        margin-top: 40px, 0px;
    }

    p {
        display: inline-block;
        color: #395278;
    }
</style>
