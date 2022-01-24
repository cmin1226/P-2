export default class{
    constructor(){
        document.title = "login";
    }
    async getHtml(){
        return `
            <form class="sign-form">
                <div>
                <input
                    required
                    type="text"
                    placeholder="아이디를 입력해주세요."
                />
                <input type="submit" value="Log In" />
                </div>
                <div>
                <input
                    required
                    type="text"
                    placeholder="비밀번호를 입력해주세요."
                />
                <input type="submit" value="Password" />
                </div>
            </form>
            <input type="submit" class="signup" value="회원가입" />

        `;
    }
}