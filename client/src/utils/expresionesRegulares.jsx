const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  nombreArea: /^[a-zA-Z0-9-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  precio: /^[0-9]+([.])?([0-9]+)?$/,
  numero: /[0-9]/,
  url: /https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  cadena: /\s*,\s*/,
};


export default expresiones;