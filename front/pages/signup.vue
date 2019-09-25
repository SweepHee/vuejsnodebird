<template>
    <div>
        signup page
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
    head() {
        return {
            title : "회원가입",
        }
    }
}
</script>

<style>
    
</style>