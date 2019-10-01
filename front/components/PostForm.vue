<template>
    <v-card>
        <v-container>
            <v-form ref="form" v-model="valid" @submit.prevent="obSubmitForm">
                <v-textarea 
                    outlined
                    auto-grow
                    clearable
                    v-model="content"
                    label="어떤 신기한 일이 있었나요?"
                    :hide-details="hideDetails"
                    :success-messages="successMessages"
                    :success="success"
                    :rules="[v => !!v.trim() || '내용을 입력하세요.']"
                    @input="onChangeTextarea"
                />
                
            </v-form>
            <v-btn color="green" type="submit" absolute right>짹짹</v-btn>
            <v-btn>이미지 업로드</v-btn>
        </v-container>
    </v-card>
</template>

<script>
import {mapState } from "vuex";

export default {
    data() {
        return{
            hideDetails: true,
            successMessages: '',
            success: false,
            content: '',
        }
    },
    computed: {
        ...mapState(["users/me"])
        // ...mapState("users", ['me']) 도 가능
    },
    methods: {
        onChangeTextarea() {
            this.hideDetails = true;
            this.success = false;
            this.successMessages = '';
        },
        onsubmitForm() {
            if(this.$refs.form.validate()) {
                this.$store.dispatch("posts/add", {
                    content: this.content,
                    Users: {
                        nickname: this.me.nickname,

                    },
                    Comments: [],
                    Images: [],
                    id: Date.now(),
                    createdAt: Date.now(),
                })
                .then(() => {
                    this.hideDetails = false;
                    this.success = true;
                    this.successMessages = "게시글 등록 성공!";
                })
                .catch( () => {

                });
            }
        }
    }
}
</script>