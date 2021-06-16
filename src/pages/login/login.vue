<template>
    <div class="loginContainer">
        <mu-form ref="form" :model="validateForm" class="mu-demo-form">
            <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
            <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码" prop="password" :rules="passwordRules">
                <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="验证码" prop="codeNumber" :rules="codeNumberRules" style="position: relative">
                <mu-text-field v-model="validateForm.codeNumber" prop="codeNumber"></mu-text-field>
                <div class="img_change_img" style="position: absolute;right: 0;bottom: 0.75rem;">
                    <img v-show="captchaCodeImg" :src="captchaCodeImg" @click="getCaptchaCode">
                </div>
            </mu-form-item>
            <mu-form-item prop="isAgree" :rules="argeeRules">
            <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
            </mu-form-item>
            <mu-form-item>
            <mu-button color="primary" @click="submit">提交</mu-button>
            <mu-button @click="clear">重置</mu-button>
            </mu-form-item>
        </mu-form>
        <!-- 登录成功提示 -->
        <mu-snackbar :position="normal.position" :open.sync="normal.open">
            {{normal.message}}
        </mu-snackbar>
    </div>
</template>

<script>
    import {userLogin,getcaptchas,test} from '../../service/getData' 
    export default {
        data(){
            return {
                userInfo : {} ,
                captchaCodeImg : null ,
                codeNumberRules :[
                    { validate: (val) => !!val, message: '必须填写验证码'},
                    { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
                ] ,
                usernameRules: [
                    { validate: (val) => !!val, message: '必须填写用户名'},
                    { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: '必须填写密码'},
                    { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
                ],
                argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
                validateForm: {
                    username: '',
                    password: '',
                    codeNumber :'',
                    isAgree: false
                },
                normal: {
                    position: 'top-end',
                    message: '登录成功 !',
                    open: false,
                    timeout: 3000
                }
            }
        },
        created(){
            // this.$store.commit('token',10)
            // console.log(this.$store.getters.getLogin)
            this.getCaptchaCode();
        },
        components: {

        },
        computed: {
            
        },
        methods: {
            //获取验证吗，线上环境使用固定的图片，生产环境使用真实的验证码
            async getCaptchaCode(){
                let res = await getcaptchas();
                this.captchaCodeImg = res.code;
            },
            async submit () {
                // console.log(this.validateForm)
                this.userInfo = await userLogin(this.validateForm.username, this.validateForm.password,this.validateForm.codeNumber);
                if(Object.keys(this.userInfo).length>0){
                    this.$store.commit('userInfo',this.userInfo);
                    this.$store.commit('isLogin',true)
                    // console.log(this.$store.getters.getToken)
                    if(this.$store.getters.getLogin){
                        if (this.normal.timer) clearTimeout(this.normal.timer);
                        this.normal.open = true;
                        this.normal.timer = setTimeout(() => {
                            this.normal.open = false;
                        }, this.normal.timeout);
                        this.$router.push('/user_table')
                    }
                }
                this.$refs.form.validate().then((result) => {
                    // console.log('form valid: ', result)
                });
            },
            clear () {
                this.$refs.form.clear();
                this.validateForm = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            }
            
        }
    }

</script>

<style lang="less" scoped>

    .loginContainer{
        width: 100%;
        height: 100%;
        background: #fff;
        padding-top: 1.95rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .mu-demo-form{
            width: 20%;
            height: 65%;
            padding: 1.25rem;
            border: 0.0625rem solid #424242;
        }
    }
    
</style>
