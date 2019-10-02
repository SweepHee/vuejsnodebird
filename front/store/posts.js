export const state = () => ({
    mainPosts: [],
});
// state는 함수여야 한다.

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
    }
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
    }
}