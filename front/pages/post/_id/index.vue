<template>
    <v-container v-if="post">
        <post-card :post="post" />
    </v-container>
    <div v-else>
        해당 아이디의 게시글이 존재하지 않습니다.
    </div>
</template>

<script>

// _id.vue 에서 '_' 는 바뀔 아이디값을 의미. 즉, 주소가 post/123 일 때 123은 글의 번호
// _id폴더 / index.vue 와 _id.vue 의 차이는 /post에 접근이 가능하냐의 차이. 폴더로하면 /post에 접근이 불가능. /post/:id 에만 접근가능

import PostCard from "~/components/PostCard"

export default {
    components: {
        PostCard,
    },
    computed: {
        post() {
            return this.$store.state.posts.mainPosts.find(v => v.id === parseInt(this.$route.params.id, 10));
        }
    }
}
</script>

<style lang="">
    
</style>