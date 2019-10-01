<template>
    <v-card style="margin-bottom: 20px">
        <v-image />
        <v-card-text>
            <div>
                <h3>{{post.User.nickname}}</h3>
                <div>{{post.content}}</div>
                <!-- postForm에서 submit하며 payload로 전달해준 객체 값 -->
                <!-- 쉽게말해 postForm -> index(post를전달) -> postCard로 받음  -->
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="orange">
                <v-icon>mdi-twitter-retweet</v-icon>
            </v-btn>
            <v-btn text color="orange">
                <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn text color="orange">
                <v-icon>mdi-comment-outline</v-icon>
            </v-btn>
            <v-menu offset-y open-on-hover>
                <template v-slot:activator="{ on }">
                    <v-btn text color="orange" v-on="on">
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                </template>
                <div style="background:white">
                    <v-btn dark color="red" @click="onRemovePost">삭제</v-btn>
                    <v-btn dark color="orange" @click="onEditPost">수정</v-btn>
                </div>
            </v-menu>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        post: { // index에서 post로 값을 전달받았다.
            type: Object,
            required: true, // 부모가 무조건 값을 주는 경우인지
        }
    },
    methods: {
        onRemovePost() {
            this.$store.dispatch("posts/remove", {
                id: this.post.id,
            });
        },
        onEditPost() {

        }
    }
}
</script>

<style>
    
</style>