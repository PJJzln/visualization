import fetch from '../config/fetch'

/**
 * 手机号登录
 */

export const sendLogin  = (code, mobile, validate_token) => fetch('http://localhost:8001/v1/login/app_mobile', {
	code,
	mobile,
	validate_token
}, 'POST');
export const userLogin = (username, password, captcha_code) => fetch('http://localhost:8001/v2/login', {username, password, captcha_code}, 'POST');
export const getcaptchas = () => fetch('http://localhost:8001/v1/captchas', {},'POST');

export const test = ()=>fetch('https://www.lilnong.top/cors/1010000022879873', {},'POST')
.then(response => response.json())
.then(data => console.log('zhanglina', data))
.catch(error => console.log('zhanglina', error));