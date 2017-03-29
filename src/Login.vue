<template>
    <div class="login-container">
        <div class="login-win">
            <p class="login-header">
                Warden-Web
            </p>
            <div class="login-line"></div>
            <form action="/api/login"
                  method="POST">
                <div class="login-main-form">
                    <div class="login-form">
                        <div class="login-span">用户名:</div>
                        <input type="text"
                               class="login-input" />
                    </div>
                    <div class="login-form">
                        <div class="login-span">密码:</div>
                        <input class="login-input"
                               type="password" />
                    </div>
                </div>
                <div class="login-buttons">
                    <button type="submit"
                            class="login-button">登录</button>
                    <router-link class="login-button"
                                 to="/register">注册</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.login-container {
    background: #21364c;
    color: white;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}

.login-win {
    width: 500px;
    height: 350px;
    z-index: 7;
    background: rgba(17, 29, 47, .4);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    align-items: center;
    box-shadow: 10px 10px 20px #000000;
}

.login-header {
    display: block;
    color: white;
    font-size: 24px;
    text-align: center;
    width: 100%;
}

.login-input {
    width: 15em;
    padding-left: 5px;
    border: 2px solid #3a667d;
    border-radius: 5px;
    background: rgba(17, 29, 47, .4);
    font-size: 18px;
    
}

.login-span {
    width: 65px;
    display: inline-block;
    text-align: right;
    font-size: 18px;
}

.login-form {
    margin: 20px;
}

.login-buttons {
    display: flex;
    margin-top: 30px;
    justify-content: flex-end;
}

.login-button {
    display: flex;
    color: white;
    background: transparent;
    width: 100px;
    height: 35px;
    border: 2px solid #3a667d;
    justify-content: center;
    align-items: center;
}

.login-button:hover {
    color: yellow;
}

.login-main-form{
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 2px solid #3a667d;
    border-bottom: 2px solid #3a667d;
}
</style>