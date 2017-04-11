<template>
    <lte-header>
        <lte-logo logo="Admin-Vue"
                  icon="fa fa-get-pocket"></lte-logo>
        <lte-nav top>
            <lte-side-toggle></lte-side-toggle>
            <!-- 导航栏右对齐的菜单 -->
            <lte-menu>
                <!-- 消息下拉面板 -->
                <MessageMenu></MessageMenu>
                <!-- 通知下拉面板 -->
                <NotificationMenu></NotificationMenu>
                <!-- 任务下拉面板 -->
                <TasksMenu></TasksMenu>
                <!-- 用户帐号下拉面板 -->
                <UserMenu></UserMenu>
                <!-- 开关ControlSidebar的按钮 -->
                <li>
                    <lte-toggle data="control-sidebar"
                                icon="fa fa-gears"></lte-toggle>
                </li>
            </lte-menu>
        </lte-nav>
    </lte-header>
</template>

<script>
import UserMenu from './UserMenu.vue'
import MessageMenu from './MessageMenu.vue'
import NotificationMenu from './NotificationMenu.vue'
import TasksMenu from './TasksMenu.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderSearch from './HeaderSearch.vue'

import LteHeader from '../../components/adminlte-vue/Header.vue'
import LteLogo from '../../components/adminlte-vue/HeaderLogo.vue'
import LteNav from '../../components/adminlte-vue/Nav.vue'
import LteSideToggle from '../../components/adminlte-vue/SidebarToggle.vue'
import LteToggle from '../../components/adminlte-vue/ToggleButton.vue'
import LteMenu from '../../components/adminlte-vue/CustomMenu.vue'

export default {
    name: 'main-header',
    components: {
        UserMenu,
        MessageMenu,
        NotificationMenu,
        TasksMenu,
        LteHeader,
        LteLogo,
        LteNav,
        LteSideToggle,
        LteToggle,
        LteMenu
    }
}
</script>