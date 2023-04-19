import type IRepositorio from "./IRepositorio";

export default interface IUsuario {
  login: string;
  avatar_url: string;
  perfil_url: string;
  nome: string;
  repositorios_publicos: number;
  seguidores: number;
  localidade: string;
  bio: string;
  repositorios_recentes: IRepositorio[]
}