<template>
    <div>
        <div>main page</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name : "Nuxt.js",
        }
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