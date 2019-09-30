export const state = () => ({
    name: "posts",
});
// state는 함수여야 한다.

export const mutations = {
    BYE(state) {
        state.name = "good posts";
    }
};
// mutations 는 함수가 아니어야 한다.