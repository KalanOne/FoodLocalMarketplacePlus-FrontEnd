import { create } from "zustand";
export { useJwt};

interface IdentityState {
  token: string | null;
  setToken: (token: string) => void;
  reset: () => void;
}

const useJwt= create<IdentityState>((set) => ({
  token: null,
  setToken: (token) =>
    set((_state) => ({
      token: token,
    })),
  reset: () =>
    set((_state) => ({
      token: null,
    })),
}));
