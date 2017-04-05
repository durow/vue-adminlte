<template>
    <div>
        <lte-callout header="This is header!"  variant="info">{{content}}</lte-callout>
        <lte-callout header="This is header!"  variant="success">{{content}}</lte-callout>
        <lte-callout header="This is header!"  variant="warning">{{content}}</lte-callout>
        <lte-callout header="This is header!"  variant="danger">{{content}}</lte-callout>
    </div>
</template>

<script>
import LteCallout from '../../components/adminlte-vue/Callout.vue'

export default {
    data(){
        return {
            content: `<lte-callout header="This is header!"  variant="warning">{{content}}</lte-callout>`
        }
    },
    components: {
        LteCallout
    }
}
</script>