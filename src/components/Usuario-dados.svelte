<script>
  import { usuario } from "../interfaces/IUsuario";
</script>

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

<style>
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
