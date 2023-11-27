export type { Proveedor, ActualizarProveedor };

interface Proveedor {
  email: string;
  createdAt: string;
  updatedAt: string;
  nombre: string;
  password: string;
  tipo: string;
  idCategoria: number;
  telefono: string;
  direccion: string;
  codigoPostal: string;
  ciudad: string;
  estado: string;
  pais: string;
  profilePic: string;
  coordX: number;
  coordY: number;
}

interface ActualizarProveedor{
  nombre: string;
  telefono: string;
  direccion: string;
  codigoPostal: string;
  ciudad: string;
  estado: string;
  coordX: number;
  coordY: number;
}
