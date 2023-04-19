<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type IUsuario from "../interfaces/IUsuario";
    import UsuarioDados from "./Usuario-dados.svelte";
    import { buscaRepositorio, buscaUsuario } from "../requisicoes";
    import montaUsuario from "../utils/montausuario";

    let value = "";
    let statusErro: null | number;
    // adicionando rigidez ao dispatch com generics "<>"
    const dispatch = createEventDispatcher<{
        alterarUsuario: IUsuario | null;
    }>();

    async function aoSubmeter() {
        const conexaoApi = await buscaUsuario(value);
        const repositorioUsuario = await buscaRepositorio(value);

        if (conexaoApi.ok) {
            const conexaoConvertida = await conexaoApi.json();
            const dadosRepositorios = await repositorioUsuario.json();
            // na variavel dispatch damos um nome do evento, personalizado
            //sendo assim "alterarUsuario" a personalização.
            //logo após a vírgula vem a informação que o evento irá carregar, funciona como um evento, que precisa ser "escutado"
            dispatch(
                "alterarUsuario",
                montaUsuario(conexaoConvertida, dadosRepositorios)
            );
            statusErro = null;
        } else {
            statusErro = conexaoApi.status;
            dispatch("alterarUsuario", null);
        }
    }
</script>

<form on:submit|preventDefault={aoSubmeter}>
    <input
        type="text"
        class="input"
        bind:value
        class:erro-input={statusErro === 404}
    />
    <!-- a diretiva class a cima adiciona uma classe caso o usuario não seja encontrado -->
    <button type="submit" class="botao" class:erro-input={statusErro === 404}
        >Buscar</button
    >
    {#if statusErro === 404}
        <span class="erro">Usuário não encontrado!</span>
    {/if}
</form>

<style>
    input {
        padding-left: 10px;
        width: 220px;
        height: 36px;
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
        margin-left: -18px;
        padding-bottom: 5px;
        width: 110px;
        height: 40px;
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

    .erro {
        display: flex;
        justify-content: center;
        margin-top: 25px;
        font-size: 20px;
        font-weight: 600;
        color: rgba(255, 0, 0, 0.712);
    }

    .erro-input {
        border: 1px solid rgba(255, 0, 0, 0.418);
        box-shadow: 0px 10px 20px rgba(255, 0, 0, 0.274);
    }
</style>
