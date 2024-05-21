import { create } from 'zustand'

export const userContext = create((set) => ({
  user: window.localStorage.getItem('user'),
  role: 'vendeure',
  //role: "client",
  //role:"admin",
  updateUsers: (newUser) => set((state) => ({ user : newUser , role : state.role})),
  updateRole: (newRole) => set((state) => ({ role : newRole , user : state.user})),
}))