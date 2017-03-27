<template>
    <div class="content-wrapper">
        <ContentHeader></ContentHeader>
        <section class="content">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import ContentHeader from './ContentHeader.vue'

export default {
    name: 'main-content',
    components:{
        ContentHeader
    }
}
</script>>