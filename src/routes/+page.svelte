<script lang="ts">
  import Formulario from "../components/Formulario.svelte";
  import Title from "../components/Title.svelte";
  import UsuarioDados from "../components/Usuario-dados.svelte";
  import type IUsuario from "../interfaces/IUsuario";

  let usuario: IUsuario | null = null;
  function definirUsuario(evento: CustomEvent<IUsuario | null>) {
    usuario = evento.detail;
  }
</script>

<div class="container-app">
  <div class="container">
    <header>
      <Title />

      <div class="busca-usuario">
        <!-- neste caso é possivel utilizar o <Formulario bind:usuario/>
          mas utilizando o disapatch fornecemos uma certa semantica, ao codigo, 
          de que o componente filho realmente envie a informação ao componente pai e não o contrario-->
        <Formulario on:alterarUsuario={definirUsuario} />
      </div>

      {#if usuario}
        <UsuarioDados {usuario} />
      {/if}
    </header>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

  :global(body){
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  .container-app {
    display: flex;
    justify-content: center;
    align-items: center;
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

  .busca-usuario {
    justify-content: start;
    display: flex;
  }

  @media screen and (max-width: 768px) {
    .container{
      width: 100%;
      margin: 0px;
      padding-top: 0px;
      height: 280vw;
      border-radius: none;
    }
}
</style>
