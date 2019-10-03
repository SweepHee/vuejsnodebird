<template>
    <div>
        <v-container>
            <v-card>
                <v-subheader>회원가입</v-subheader>
                <v-container>
                <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                    <v-text-field
                        v-model="email"
                        label="이메일"
                        type="email"
                        :rules="emailRules"
                        required    
                     />
                     <v-text-field
                        v-model="password"
                        label="비밀번호"
                        type="password"
                        :rules="passwordRules"
                        required    
                     />
                     <v-text-field
                        v-model="passwordCheck"
                        label="비밀번호 확인"
                        type="password"
                        :rules="passwordCheckRules"
                        required    
                     />
                     <v-text-field
                        v-model="nickname"
                        label="닉네임"
                        type="nickname"
                        :rules="nicknameRules"
                        required    
                     />
                     <v-checkbox
                        v-model="terms"
                        required
                        :rules="[ v => !!v || '약관에 동의하셔야 합니다' ]"
                        label="동의합니다"
                      />
                      <v-btn color="color" type="submit">가입하기</v-btn>
                </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            passwordCheck: '',
            nickname: '',
            terms: false,
            emailRules: [
                v => !!v || "이메일은 필수입니다.",
                v => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
            ],
            nicknameRules: [
                v => !!v || "닉네임은 필수입니다.",
            ],
            passwordRules: [
                v => !!v || "비밀번호는 필수입니다.",
            ],
            passwordCheckRules: [
                v => !!v || "비밀번호 확인은 필수입니다.",
                v => v === this.password || "비밀번호가 일치하지 않습니다.",
            ],
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me
        }
    },
    watch : {
        me(value) {
            if(value) {
                this.$router.push({
                    path: "/",
                });
            }
        }
    },
    methods: {
        onSubmitForm() {
            if(this.$refs.form.validate()) {
                this.$store.dispatch("users/logIn", {
                    email: this.email,
                    nickname: "스위피",
                })
                .then(() => {
                    this.$router.push({
                        path: "/",
                    });
                })
                .catch(() => {
                    alert("로그인 실패");
                });
                // dispatch는 store의 actions를 실행
                // actions는 비동기이므로 순서가 꼬일 수 있음
                // dispatch는 자체적으로 promise이므로 then으로
                // 작업 우선순위를 정해줄 수 있음. 
                // catch도 반드시 적어줘야 한다.
            }
        },
    },

    // head -> nuxt 편의기능. import같은거 필요X 
    // head태그 내부의 내용을 쉽게 바꿀수있다 (title, meta 등등)
    head() {
        return {
            title : "회원가입",
        }
    },

    middleware : "anonymous",
}
</script>

<style>
    
</style>