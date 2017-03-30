<template>
    <!-- 通知对话框 -->
    <div class="modal fade"
         data-backdrop="false"
         id="confirmModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="confirmModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title"
                        id="confirmModalLabel">{{modal.title}}</h4>
                </div>
                <div id='confirmModalContent'
                     class="modal-body">
                    {{modal.content}}
                </div>
                <div class="modal-footer">
                    <button type="button"
                            data-dismiss="modal"
                            v-on:click="confirmClick"
                            class="btn btn-success btn-flat col-sm-2 col-sm-push-8">
                        {{modal.confirmButton}}
                    </button>
                    <button type="button"
                            v-on:click="cancelClick"
                            data-dismiss="modal"
                            class="btn btn-primary btn-flat col-sm-2 col-sm-push-8">
                        {{modal.cancelButton}}
                    </button>
                    <div class="hidden"
                         id="confirmResult"></div>
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
        modal() {
            return this.$store.state.confirmModal
        },
    },
    methods: {
        confirmClick() {
            this.$store.commit('setConfirmResult', this.modal.confirmButton)
        },
        cancelClick() {
            this.$store.commit('setConfirmResult', this.modal.cancelButton)
        }
    }
}
</script>

<style>
.modal-dialog {
    box-shadow: 10px 10px 20px #000000;
}
</style>