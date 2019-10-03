// 로그인 했는지 확인
export default function({ store, redirect }) {
    if(!store.state.users.me) {
        redirect("/");
    }
}