<template>
    <div class="editor-area">
        <lte-btn @click="onClick">
            GetEditor</lte-btn>
        <div>
            <script id="editor"
                    type="text/plain"
                    style="height:500px;"></script>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        this.ue = UE.getEditor('editor')
    },
    destroyed() {
        this.ue.destroy()
    },
    data() {
        return {
            ue: undefined
        }
    },
    methods: {
        onClick() {

        }
    }
}
</script>