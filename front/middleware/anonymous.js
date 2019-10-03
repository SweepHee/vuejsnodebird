// 로그인 안한 사용자인지 확인
export default function({ store, redirect }) {
    if(store.state.users.me) {
        redirect("/");
    }
}