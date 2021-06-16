const getters={
    getToken(state){
        return state.userInfo.id
    },
    getLogin(state){
        return state.isLogin
    }
}
export default getters;