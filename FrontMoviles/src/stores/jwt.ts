import { create } from "zustand";
export { useJwt };

interface IdentityState {
  token: string | null;
  correo: string | null;
  setCorreo: (correo: string) => void;
  setToken: (token: string) => void;
  reset: () => void;
}

const useJwt = create<IdentityState>((set) => ({
  token: null,
  correo: null,
  setCorreo: (correo) => set((_state) => ({ correo: correo })),
  setToken: (token) =>
    set((_state) => ({
      token: token,
    })),
  reset: () =>
    set((_state) => ({
      token: null,
      correo: null,
    })),
}));
