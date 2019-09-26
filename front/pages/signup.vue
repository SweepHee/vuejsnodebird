<template>
    <div>
        <v-container>
            <v-card>
                <v-subheader>회원가입</v-subheader>
                <v-container>
                <v-form>
                    <v-text-field
                        label="이메일"
                        type="email"
                        required    
                     />
                     <v-text-field
                        label="비밀번호"
                        type="password"
                        required    
                     />
                     <v-text-field
                        label="비밀번호 확인"
                        type="password"
                        required    
                     />
                     <v-text-field
                        label="닉네임"
                        type="nickname"
                        required    
                     />
                     <v-checkbox
                        required
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
            name : "Nuxt.js",
        }
    },

    // head -> nuxt 편의기능. import같은거 필요X 
    // head태그 내부의 내용을 쉽게 바꿀수있다 (title, meta 등등)
    head() {
        return {
            title : "회원가입",
        }
    }
}
</script>

<style>
    
</style>