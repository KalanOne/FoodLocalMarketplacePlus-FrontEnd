export type { RegisterData };

interface RegisterData {
  email: string;
  nombre: string;
  tipo: string;
  idCategoria: number;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  estado: string;
  pais: string;
  coordY: number; //latitud
  coordX: number; //longitud
  password: string;
  profilePic: string;
}
