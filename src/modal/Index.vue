<template>
    <div>
        <NotifyModal></NotifyModal>
        <ConfirmModal></ConfirmModal>
    </div>
</template>

<script>
import NotifyModal from './NotifyModal.vue'
import ConfirmModal from './ConfirmModal.vue'

export default {
    components: {
        NotifyModal,
        ConfirmModal
    }
}
</script>

<style>
.modal-dialog {
    box-shadow: 10px 10px 20px #000000;
}
</style>