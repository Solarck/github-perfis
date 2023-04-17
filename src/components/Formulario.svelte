<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type IUsuario from "../interfaces/IUsuario";

    let value = "";
    // adicionando rigidez ao dispatch com generics "<>"
    const dispatch = createEventDispatcher();

    async function aoSubmeter() {
        const conexaoApi = await fetch(`https://api.github.com/users/${value}`);
        const conexaoConvertida = await conexaoApi.json();

        // na variavel dispatch damos um nome do evento, personalizado
        //sendo assim "alterarUsuario" a personalização.
        //logo após a vírgula vem a informação que o evento irá carregar, funciona como um evento, que precisa ser "escutado"
        dispatch("alterarUsuario", {
            login: conexaoConvertida.login,
            avatar_url: conexaoConvertida.avatar_url,
            perfil_url: conexaoConvertida.url,
            nome: conexaoConvertida.name,
            repositorios_publicos: conexaoConvertida.public_repos,
            seguidores: conexaoConvertida.followers,
            localidade: conexaoConvertida.location,
            bio: conexaoConvertida.bio,
        });
    }
</script>

<form on:submit|preventDefault={aoSubmeter}>
    <input type="text" class="input" bind:value />
    <button type="submit" class="botao">Buscar</button>
</form>

<style>
    input {
        padding-left: 10px;
        width: 220px;
        height: 35px;
        font-size: 1rem;
        border-radius: 8px;
        border: 1.5px solid #2e80fa;
        border-right: 0px;
        box-shadow: 0px 10px 20px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .input::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        font-size: 19.5px;
        line-height: 26px;
        color: #6e8cba;
    }

    .botao {
        margin-left: -10px;
        padding: 7px 18px;
        border-radius: 8px;
        border: none;
        background: #2e80fa;
        box-shadow: 0px 10px 20px rgba(222, 231, 247, 0.4);
        color: #fff;
        font-size: 22px;
        cursor: pointer;
    }

    .botao:hover {
        background: #4590ff;
    }
</style>
