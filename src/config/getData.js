import fetch from './fetch'

/**
 * 手机号登录
 */

export const sendLogin  = (code, mobile, validate_token) => fetch('/v1/login/app_mobile', {
	code,
	mobile,
	validate_token
}, 'POST');
export const accountLogin = (username, passwd) => fetch(`http://openapi.tencentyun.com/v3/user/get_info?
openid=B624064BA065E01CB73F835017FE96FA&openkey=5F154D7D2751AEDC8527269006F290F70297B7E54667536C&
appid=2&sig=VrN%2BTn5J%2Fg4IIo0egUdxq6%2B0otk%3D&
pf=qzone&
format=json&
userip=112.90.139.30`, {username, passwd}, 'POST');

export const userLogin = (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST');
export const getcaptchas = () => fetch('/v1/captchas', {},'POST');
