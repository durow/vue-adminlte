<template>
    <div>
        <lte-progress variant="primary"
                      active
                      striped
                      now-value=90></lte-progress>
        <lte-progress variant="danger"
                      nowValue=70></lte-progress>
        <lte-progress variant="green"
                      size='xs'
                      active
                      vertical
                      striped
                      nowValue=30></lte-progress>
        <lte-progress variant="yellow"
                      size='sm'
                      active
                      vertical
                      striped
                      nowValue=50></lte-progress>
    </div>
</template>

<script>
import LteProgress from '../../components/adminlte-vue/Progress.vue'

export default {
    components: {
        LteProgress
    }
}
</script>