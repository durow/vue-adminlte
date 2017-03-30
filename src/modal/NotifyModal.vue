<template>
    <!-- 通知对话框 -->
    <div class="modal modal fade"
         data-backdrop="false"
         id="notifyModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="notifyModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <button type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title"
                        id="notifyModalLabel">{{title}}</h4>
                </div>
                <div id='notifyModalContent'
                     class="modal-body">
                    {{content}}
                </div>
                <div class="modal-footer">
                    <button type="button"
                            data-dismiss="modal"
                            class="btn btn-primary btn-flat col-sm-2 col-sm-offset-10">
                        确认
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
    </div>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$store.state.notifyModal.title
        },
        content() {
            return this.$store.state.notifyModal.content
        }
    }
}
</script>