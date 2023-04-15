<script lang="ts">
  import Title from "../components/Title.svelte";
  import UsuarioDados from "../components/Usuario-dados.svelte";
  import type IUsuario from "../interfaces/IUsuario";

  let usuario: IUsuario | null = null;
  let value = '' 

  function aoSubmeter() {
    usuario = {
      login: "Solarck",
      avatar_url: "",
      perfil_url: "https://github.com/Solarck",
      nome: "dolores",
      repositorios_publicos: 50,
      seguidores: 23,
      localidade: "São Paulo, BR",
      bio: " A pressa é inimiga da perfeição.",
    };
  }
</script>

<div class="container-app">
  <div class="container">
    <header>
      <Title />

      <form class="busca-usuario" on:submit|preventDefault={aoSubmeter}>
        <input type="text" class="input" bind:value />
        <button type="submit" class="botao">Buscar</button>
      </form>

      {#if usuario}
        <UsuarioDados />
      {/if}

    </header>
  </div>
</div>

<style>
  .container-app {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
  }

  .container {
    margin-top: 20px;
    width: 90%;
    height: 590px;
    background: #272a37;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-weight: 500;
  }

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

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

  .busca-usuario {
    justify-content: start;
    display: flex;
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
