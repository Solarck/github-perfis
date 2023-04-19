import type IRepositorio from "../interfaces/IRepositorio";
import type IUsuario from "../interfaces/IUsuario";

export default function montaUsuario(conexaoConvertida: any, dadosRepositorios: any): IUsuario {
  const repositorios_recentes = dadosRepositorios.map((repositorio: any) => {
    return {
      nome: repositorio.name,
      url: repositorio.html_url
    } as IRepositorio;
  });

  return {
    login: conexaoConvertida.login,
    avatar_url: conexaoConvertida.avatar_url,
    perfil_url: conexaoConvertida.url,
    nome: conexaoConvertida.name,
    repositorios_publicos: conexaoConvertida.public_repos,
    seguidores: conexaoConvertida.followers,
    localidade: conexaoConvertida.location,
    bio: conexaoConvertida.bio,
    repositorios_recentes
  }
}