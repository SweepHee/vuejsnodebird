<template>
    <v-container v-if="!me">
        <v-card>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-container>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="이메일"
                        type="email"
                        required
                     />
                     <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="비밀번호"
                        type="password"
                        required
                      />
                      <v-btn color="green" type="submit" :disabled="!valid">로그인</v-btn>
                      <v-btn nuxt to="/signup">회원가입</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
    <v-container v-else>
        <v-card>
            <v-cantainer>
                {{ me.nickname }}님이 로그인되었습니다
                <v-btn @click="onLogOut">로그아웃</v-btn>
            </v-cantainer>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            email: "",
            password: "",
            nickname: "",
            emailRules: [
                v => !!v || "이메일은 필수값입니다.",
                v => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
            ],
            passwordRules: [
                v => !!v || "비밀번호는 필수값입니다.",
            ],
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        },
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
                    alert("회원가입 실패");
                });
                // dispatch는 store의 actions를 실행
                // actions는 비동기이므로 순서가 꼬일 수 있음
                // dispatch는 자체적으로 promise이므로 then으로
                // 작업 우선순위를 정해줄 수 있음. 
                // catch도 반드시 적어줘야 한다.
            }
        },
        onLogOut() {
            this.$store.dispatch("users/logOut");
        },
    }
}
</script>

<style>
    
</style>