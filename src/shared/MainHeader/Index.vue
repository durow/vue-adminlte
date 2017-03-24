<template>
    <header class="main-header">
        <Logo></Logo>
        <nav class="navbar navbar-static-top" role="navigation">
            <ToggleButton></ToggleButton>
            <!-- 导航栏最右边的菜单 -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- 消息下拉面板 -->
                    <MessageMenu></MessageMenu>
                    <!-- 通知下拉面板 -->
                    <NotificationMenu></NotificationMenu>
                    <!-- 用户帐号下拉面板 -->
                    <UserMenu></UserMenu>
                    <!-- 开关ControlSidebar的按钮 -->
                    <li>
                        <a href="#"
                           data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import Logo from './Logo.vue'
import ToggleButton from './ToggleButton.vue'
import UserMenu from './UserMenu.vue'
import MessageMenu from './MessageMenu.vue'
import NotificationMenu from './NotificationMenu.vue'

export default {
    name: 'main-header',
    components:{
        Logo,
        ToggleButton,
        UserMenu,
        MessageMenu,
        NotificationMenu
    }
}
</script>