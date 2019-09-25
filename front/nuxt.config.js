module.exports = {
    head : {
        title : "nodebird",
    },

    // 모든 페이지에 module을 import 시키는 건 비효율적
    // 때문에 config파일에서 선언해줄 수 있다.
    modules: [
        '@nuxtjs/axios',
    ],
    devModules: [
        '@nuxtjs/vuetify',        
    ],
    plugins: [],
    vuetify: {},
};