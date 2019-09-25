<template>
    <div>
        <nav>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/profile">Profile</nuxt-link>
            <nuxt-link to="/signup">Signup</nuxt-link>
            <nuxt-link to="/admin">Admin</nuxt-link>
        </nav>
        <nuxt />
    </div>
</template>

<script>
export default {
    // 페이지에 head가 없다면 아래의 head가 적용된다.
    head() {
        return {
            title: 'NodeBird',
        }
    }
}
</script>

<style>
    
</style>