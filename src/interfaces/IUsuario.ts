export default interface IUsuario {
  login: string;
  avatar_url: string;
  perfil_url: string;
  nome: string;
  repositorios_publicos: number;
  seguidores: number;
  localidade: string;
  bio: string;
}

// export const usuario: IUsuario = {
//   login: 'Solarck',
//   avatar_url: '',
//   perfil_url: 'https://github.com/Solarck',
//   nome: 'dolores',
//   repositorios_publicos: 50,
//   seguidores: 23,
//   localidade: 'São Paulo, BR',
//   bio: ' A pressa é inimiga da perfeição.'
// }