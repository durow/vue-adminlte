<template>
    <div>
        <div class="row">
            <b-alert show>Default(Info) Alert</b-alert>
            <b-alert state="success" show>Success Alert</b-alert>
            <b-alert state="warning" show>Warning Alert</b-alert>
            <b-alert state="danger" show>Danger Alert</b-alert>
            <b-alert state="danger"
                     dismissible
                     :show="showDismissibleAlert"
                     @dismissed="showDismissibleAlert=false">
                Dismissible Alert!
            </b-alert>
    
            <b-alert :show="dismissCountDown"
                     dismissible
                     state="warning"
                     @dismiss-count-down="countDownChanged">
                This alert will dismiss after {{dismissCountDown}} seconds...
            </b-alert>
    
            <b-btn @click="showAlert"
                   variant="info"
                   class="m-1">Show alert with count-down timer</b-btn>
            <b-btn @click="showDismissibleAlert=true"
                   variant="info"
                   class="m-1">
                Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
            </b-btn>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dismissCountDown: null,
            showDismissibleAlert: false
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown;
        },
        showAlert() {
            this.dismissCountDown = 5;
        }
    }
}
</script>