<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <!-- 用户面板 -->
            <UserPanel></UserPanel>
            <!-- 搜索面板 -->
            <SearchPanel></SearchPanel>
            <!-- 菜单面板 -->
            <SidebarMenu></SidebarMenu>
        </section>
    </aside>
</template>

<script>
import UserPanel from './UserPanel.vue'
import SearchPanel from './SearchPanel.vue'
import SidebarMenu from './SidebarMenu.vue'

export default {
    name: 'main-sidebar',
    components:{
        UserPanel,
        SearchPanel,
        SidebarMenu
    }
}
</script>