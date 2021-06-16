const state={
    userInfo: null,
    token : '',
    isLogin : localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false
}
export default state;