<template>
    <div>
        <v-container>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>내 프로필</v-subheader>
                    <v-form>
                        <v-text-field 
                            label="닉네임"
                            required
                        />
                        <v-btn color="blue" type="submit">수정</v-btn>
                    </v-form>
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>팔로잉</v-subheader>
                    <follow-list />
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>팔로워</v-subheader>
                    <follow-list />
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import FollowList from "~/components/FollowList";
export default {
    components: {
        FollowList,
    },
    data() {
        return {
            name : "Nuxt.js",
        }
    },

    // head -> nuxt 편의기능. import같은거 필요X 페이지제목이 설정된다!
    // head태그 내부의 내용을 쉽게 바꿀수있다 (title, meta 등등)
    head() {
        return {
            title : "프로필",
        }
    }
}
</script>

<style>
    
</style>