export const state = () => ({
    me: null,
    // 여기서 me는 객체가 될 수 있다. ex) me.nickname, me.name 등등
});
// state를 불러낼땐 users.me 식으로 .으로 불러낸다 
// ex) this.$store.state.users.me  ->  null 소환

// 동기작업. mutations에선 비동기 사용불가 ex) ajax, axios, xhr 등
export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    }
};

// 비동기작업. mutations에서 못하는 비동기처리를 해주는게 acitions
// actions에서는 mutations에서 하는 모든 작업이 가능하다.
// mutations보다 고차원개념이라고 생각하면 쉽다.
export const actions = {
    // 파라미터의 context안에는 원본) signUp(context, payload)
    // { commit, dispatch, state, rootState, getter, rootGetters }
    signUp({commit, state}, payload) {
        // 서버에 회원가입 요청을 보내는 부분
        commit("setMe", payload);
        // 위의 코드는 state.me = payload 와 같다.
        // 하지만 state.me는 동기적처리기때문에 mutations에서 처리하는게 좋다.
    },
    logIn({commit}, payload) {
        commit("setMe", payload)
    },
    logOut({commit}, payload) {
        commit("setMe", null);
    },
};

// mutations, actions를 불러낼땐 ("users/signUp") 과 같이
// 괄호안에 문자열을 적는 것 처럼 불러낸다.