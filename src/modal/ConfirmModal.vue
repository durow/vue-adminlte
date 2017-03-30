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
                <div class="modal-header">
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
                            class="btn btn-success btn-md">
                        {{modal.confirmButton}}
                    </button>
                    <button type="button"
                            v-on:click="cancelClick"
                            data-dismiss="modal"
                            class="btn btn-primary btn-md">
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
        // title(){
        //     return this.$store.state.confirmModal.title
        // },
        // content(){
        //     return this.$store.state.confirmModal.content
        // },
        // confirmButton(){
        //     return this.$store.state.confirmModal.confirmButton            
        // },
        // cancelButton(){
        //     return this.$store.state.confirmModal.cancelButton            
        // }
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