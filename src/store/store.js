import{create} from 'zustand';


const useStore = create((set) => ({
    isLogin:false,
    login:()=> set((state) =>({isLogin:!state.isLogin}))
}))
export default useStore;


