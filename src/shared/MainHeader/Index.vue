<template>
    <header class="main-header">
        <Logo></Logo>
        <nav class="navbar navbar-static-top" role="navigation">
            <ToggleButton></ToggleButton>
            <!-- 导航栏最右边的菜单 -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- 消息下拉面板 -->
                    <MessagePanel></MessagePanel>
                    <!-- 通知下拉面板 -->
                    <NotificationPanel></NotificationPanel>
                    <!-- 用户帐号下拉面板 -->
                    <UserPanel></UserPanel>
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
import UserPanel from './UserPanel.vue'
import MessagePanel from './MessagePanel.vue'
import NotificationPanel from './NotificationPanel.vue'

export default {
    name: 'main-header',
    components:{
        Logo,
        ToggleButton,
        UserPanel,
        MessagePanel,
        NotificationPanel
    }
}
</script>