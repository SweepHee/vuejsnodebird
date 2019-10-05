<template>
    <v-container>
        <post-form v-if="me" />
        <div>
            <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
            <!-- :post가 props. post-card에 p값을 전달할 수 있다. -->
        </div>
    </v-container>
</template>

<script>
import PostCard from "~/components/PostCard";
import PostForm from "~/components/PostForm";


export default {
    components: {
        PostCard,
        PostForm,
    },
    data() {
        return {
            name : "Nuxt.js",
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me
        },
        mainPosts() {
            return this.$store.state.posts.mainPosts
        }
    },
    fetch( {store}) {
        store.dispatch("posts/loadPosts");
    },

    // head -> nuxt 편의기능. import같은거 필요X 페이지제목이 설정된다!
    // head태그 내부의 내용을 쉽게 바꿀수있다 (title, meta 등등)
    head() {
        return {
            title : "메인페이지",
        }
    }
}
</script>

<style>
    
</style>