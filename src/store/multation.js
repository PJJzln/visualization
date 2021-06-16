const mutations={
    isLogin(state,v){
        state.isLogin=v;
        localStorage.setItem('isLogin', v);
    },
    token(state,token){
        state.token = token
    },
    userInfo(state,userInfo){
        state.userInfo = userInfo
    }
}
export default mutations;