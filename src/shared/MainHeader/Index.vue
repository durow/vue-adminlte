<template>
    <header class="main-header">
        <Logo></Logo>
        <nav class="navbar navbar-static-top"
             role="navigation">
            <ToggleButton></ToggleButton>
            <div class="collapse navbar-collapse"
                 id="navbar-collapse">
                <!-- 导航栏左对齐的菜单 -->
                <HeaderMenu></HeaderMenu>
                <!-- 导航栏的搜索面板 -->
                <HeaderSearch></HeaderSearch>
                <!-- 导航栏右对齐的菜单 -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- 消息下拉面板 -->
                        <MessageMenu></MessageMenu>
                        <!-- 通知下拉面板 -->
                        <NotificationMenu></NotificationMenu>
                        <!-- 任务下拉面板 -->
                        <TasksMenu></TasksMenu>
                        <!-- 用户帐号下拉面板 -->
                        <UserMenu></UserMenu>
                        <!-- 开关ControlSidebar的按钮 -->
                        <ControlToggle></ControlToggle>
                    </ul>
                </div>
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
import TasksMenu from './TasksMenu.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderSearch from './HeaderSearch.vue'
import ControlToggle from './ControlToggle.vue'

export default {
    name: 'main-header',
    components: {
        Logo,
        ToggleButton,
        UserMenu,
        MessageMenu,
        NotificationMenu,
        TasksMenu,
        HeaderMenu,
        HeaderSearch,
        ControlToggle
    }
}
</script>