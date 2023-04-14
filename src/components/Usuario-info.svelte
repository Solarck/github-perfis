<script>
    import { usuario } from "../interfaces/IUsuario";
</script>

<h1>Usuario: {usuario.nome}</h1>
<h1>Nome: {usuario.login}</h1>
<h1>Seguidores: {usuario.seguidores}</h1>
<h1>Repositórios:{usuario.repositorios_publicos}</h1>
<h1>localidade": {usuario.localidade}</h1>

<style>
    h1 {
        margin-left: 20px;
        margin-top: 25px;
        margin-bottom: -15px;
        font-size: 20px;
        color: #395278;
    }
</style>
