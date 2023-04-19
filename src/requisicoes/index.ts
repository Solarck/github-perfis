function buscaUsuario(nomeUsuario: string) {
    return fetch(`https://api.github.com/users/${nomeUsuario}`)
}

function buscaRepositorio(nomeUsuario: string) {
    //no link do fetch teremos (/repos?sort=created$per_page=5`),
    //faz com que seja feita uma requisição dos repositórios,
    // e irá ordenar os repositórios do array por data de criação, trazendo 5 repositorios
    return fetch(`https://api.github.com/users/${nomeUsuario}/repos?sort=created&per_page=4`)
}

export { buscaUsuario, buscaRepositorio }