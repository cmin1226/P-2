export default class{
    constructor(){
        document.title = "login";
    }
    async getHtml(){
        return `
            <form class="sign-form">
                <input
                    required
                    type="text"
                    placeholder="아이디를 입력해주세요."
                />
                <input type="submit" value="Log In" />
                <input
                    required
                    type="text"
                    placeholder="비밀번호를 입력해주세요."
                />
                <input type="submit" value="Password" />
            </form>
            <input type="submit" class="signup" value="회원가입" />

        `;
    }
}