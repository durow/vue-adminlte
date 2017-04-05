<template>
    <div>
        <div class="col-md-4">
            <lte-box header="This is Header"
                     variant="primary"
                     expandable
                     solid>This is content</lte-box>
        </div>
    </div>
</template>

<script>
import LteBox from '../../components/adminlte-vue/Box.vue'

export default {
    components: {
        LteBox
    }
}
</script>