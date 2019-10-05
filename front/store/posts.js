export const state = () => ({
    mainPosts: [],
    hasMorePost: true,
});
// state는 함수여야 한다.

const limit = 10;

export const mutations = {
    addMainPost(state, payload) {
        state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload) {
        const index = state.mainPosts.findIndex( v => v.id === payload.id);
        state.mainPosts.splice(index, 1);
    },
    addComment(state, payload) {
        const index = state.mainPosts.findIndex( v => v.id === payload.postId);
        state.mainPosts[index].Comments.unshift(payload);
    },
    loadPosts(state) {
        const fakePosts = Array(limit).fill().map(v => ({
            id: Math.random().toString(),
            User: {
                id: 1,
                nickname: "스윕"
            },
            content: `Hello infinite scrolling~ ${Math.random()}`,
            Comments: [],
            Images : [],
        }));
        state.mainPosts = state.mainPosts.concat(fakePosts);
        state.hasMorePost = fakePosts.length === limit;
    },
};
// mutations 는 함수가 아니어야 한다.

export const actions = {
    add({commit}, payload) {
        // 서버에 게시글 등록 요청 보냄.
        commit("addMainPost", payload);
        // commit("posts/addMainPost") 해당모듈일 경우 경로는 생략가능
    },
    remove({commit}, payload) {
        commit("removeMainPost", payload);
    },
    addComment({ commit }, payload) {
        commit("addComment", payload);
    },
    loadPosts({ commit, state }, payload) {
        if(state.hasMorePost) { // actions에서 state를 사용하려면 매개변수에 state를 추가해줘야한다 this로 안됨.
            commit("loadPosts");
        }
    }
}