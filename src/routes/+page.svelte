<script lang="ts">
  import Title from "../components/Title.svelte";
  import UsuarioDados from "../components/Usuario-dados.svelte";
  import type IUsuario from "../interfaces/IUsuario";

  let usuario: IUsuario | null = null;
  let value = '' 

  async function aoSubmeter() {
  const conexaoApi = await fetch(`https://api.github.com/users/${value}`)
  const conexaoConvertida = await conexaoApi.json()
  console.log()

    usuario = {
      login: conexaoConvertida.login,
      avatar_url: conexaoConvertida.avatar_url,
      perfil_url: conexaoConvertida.url,
      nome: conexaoConvertida.name,
      repositorios_publicos: conexaoConvertida.public_repos,
      seguidores: conexaoConvertida.followers,
      localidade: conexaoConvertida.location,
      bio: conexaoConvertida.bio,
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
      <div class="container-usuario">
        <div class="User-info">
          <div class="foto-container">
            <a href="">
              <div class="foto-usuario">
                <img src={usuario.avatar_url} alt="" />
              </div>
            </a>
          </div>
      
          <nav>
            <div class="usuario">
              <h1>Usuario: {usuario.nome}</h1>
              <h1>Nome: {usuario.login}</h1>
              <h1>Seguidores: {usuario.seguidores}</h1>
              <h1>Repositórios:{usuario.repositorios_publicos}</h1>
              <h1>localidade": {usuario.localidade}</h1>
            </div>
      
            <div class="usuario-repositorio">
              <h1 class="titulo">Repositorios recentes:</h1>
              <a href=""><h1>Curso-Svelte</h1></a>
              <a href=""><h1>calculadora</h1></a>
              <a href=""><h1>github</h1></a>
              <a href=""><h1>teste</h1></a>
            </div>
          </nav>
      
          <h1 class="bio">
            Bio: <p>{usuario.bio}</p>
          </h1>
        </div>
      </div>
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

  .container-usuario {
    margin-top: 50px;
    width: 780px;
    height: 300px;
    background: #ffff;
    border-radius: 10px;
    display: flex;
  }

  .foto-container {
    margin: 15px;
  }

  img {
    width: 10rem;
    height: 10rem;
    border: 4.56px solid #2e80fa;
    border-radius: 50%;
  }

  .bio {
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

  nav {
    display: flex;
    position: relative;
  }

  .usuario {
    margin-left: 200px;
    margin-top: -200px;
  }

  .usuario-repositorio {
    margin-left: 45px;
    margin-top: -200px;
  }

  h1 {
    display: flex;
    margin-left: 20px;
    margin-top: 25px;
    margin-bottom: -15px;
    font-size: 20px;
    color: #395278;
  }
</style>
