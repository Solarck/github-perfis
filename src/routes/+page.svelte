<script>
  import FotoUsuario from "../components/Foto-usuario.svelte";
  import InputPesquisar from "../components/Input-pesquisar.svelte";
  import RepositoriosRecentes from "../components/Repositorios-recentes.svelte";
  import Title from "../components/Title.svelte";
  import UsuarioInfo from "../components/Usuario-info.svelte";

  let usuario = {};
</script>

<div class="container-app">
  <div class="container">
    <header>
      <Title />
      <InputPesquisar />

      <div class="container-usuario">
        <FotoUsuario />

        <div class="User-info">
          <UsuarioInfo />
        </div>

        <div class="User-info">
          <RepositoriosRecentes />
        </div>
      </div>
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

  .container-usuario {
    margin-top: 50px;
    width: 780px;
    height: 300px;
    background: #ffff;
    border-radius: 10px;
    display: flex;
  }

  .User-info {
    display: inline-block;
    flex-direction: column;
  }
</style>
