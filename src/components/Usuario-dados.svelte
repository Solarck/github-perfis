<script lang="ts">
  import type IUsuario from "../interfaces/IUsuario";
  export let usuario: IUsuario;
</script>

<div class="container-usuario">
  <div class="user-info">
    <div class="foto-container">
      <div class="foto-usuario">
        <img src={usuario.avatar_url} alt="" />
      </div>
    </div>

    <nav>
      <div class="usuario color-blue">
        <h1 class="color-blue">Usuario: <p class="p">{usuario.login}</p></h1>
        <h1 class="color-blue">Nome: <p class="p">{usuario.nome}</p></h1>
        <h1 class="color-blue">Seguidores: <p class="p">{usuario.seguidores}</p></h1>
        <h1 class="color-blue">Repositórios: <p class="p">{usuario.repositorios_publicos}</p></h1>
        <h1 class="color-blue">localidade: <p class="p">{usuario.localidade}</p></h1>
      </div>

      <div class="usuario-repositorio">
        <h1 class="titulo color-blue">Repositorios recentes:</h1>
        <ul>
          {#each usuario.repositorios_recentes as repositorio}
            <li class="repositorios-recentes">
              <a
                rel="noopener"
                target="_blank"
                href={repositorio.url}
                class="repositorio"><h1>{repositorio.nome}</h1></a
              >
            </li>
          {/each}
        </ul>
      </div>
    </nav>

    <h1 class="bio color-blue">
      Bio: <p>{usuario.bio}</p>
    </h1>
  </div>
</div>

<style>
  .container-usuario {
    margin-top: 50px;
    width: 800px;
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
    margin-top: 40px, 0px;
  }

  p {
    display: inline-block;
    color: #395278;
  }

  .p {
    margin: 0;
    margin-left: 5px;
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

  ul {
    list-style: none;
  }

  .repositorios-recentes {
    margin-left: -40px;
  }

  .color-blue {
    color: #2e80fa;
  }

  @media screen and (max-width: 768px) {
    .container-usuario {
      display: flex;
      width: 90%;
      height: 730px;
      justify-content: start;
      align-items: center;
    }

    .foto-container {
      display: flex;
      justify-content: center;
      margin-top: -150px;
      margin-left: 45px;
    }

    .usuario {
      margin-top: 0px;
      margin-left: 0px;
      width: 300px;
    }

    h1{
      font-size: 18px;
    }

    .usuario-repositorio {
      margin-left: -300px;
      margin-top: 180px;
      width: 280px;
    }

    .bio {
      display: inline-block;
      font-size: 18px;
      margin-left: 20px;
      width: 280px;
    }

    p {
      margin-top: 5px;
    }
  }
</style>
