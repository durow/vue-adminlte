<template>
    <div>
        <label>default:</label>
        <div>
            <lte-btn>Button</lte-btn>
            <lte-btn variant="success">Button</lte-btn>
            <lte-btn variant="info">Button</lte-btn>
            <lte-btn variant="warning">Button</lte-btn>
            <lte-btn variant="danger">Button</lte-btn>
            <lte-btn variant="primary">Button</lte-btn>
            <lte-btn bg="gray">Button</lte-btn>
            <lte-btn bg="navy">Button</lte-btn>
            <lte-btn bg="purple">Button</lte-btn>
        </div>
        <br>
        <label>size:</label>
        <div>
            <lte-btn size="xs">Button</lte-btn>
            <lte-btn size="xs"
                     variant="success">Button</lte-btn>
            <lte-btn size="sm"
                     variant="info">Button</lte-btn>
            <lte-btn size="sm"
                     variant="warning">Button</lte-btn>
            <lte-btn variant="danger">Button</lte-btn>
            <lte-btn variant="primary">Button</lte-btn>
            <lte-btn size="lg"
                     bg="gray">Button</lte-btn>
            <lte-btn size="lg"
                     bg="navy">Button</lte-btn>
            <lte-btn size="lg"
                     bg="purple">Button</lte-btn>
        </div>
        <br>
        <label>flat:</label>
        <div>
            <lte-btn flat>Button</lte-btn>
            <lte-btn variant="success"
                     flat>Button</lte-btn>
            <lte-btn variant="info"
                     flat>Button</lte-btn>
            <lte-btn variant="warning"
                     flat>Button</lte-btn>
            <lte-btn variant="danger"
                     flat>Button</lte-btn>
            <lte-btn variant="primary"
                     flat>Button</lte-btn>
            <lte-btn bg="gray"
                     flat>Button</lte-btn>
            <lte-btn bg="navy"
                     flat>Button</lte-btn>
            <lte-btn bg="purple"
                     flat>Button</lte-btn>
        </div>
        <br>
        <label>disabled:</label>
        <div>
            <lte-btn disabled>Button</lte-btn>
            <lte-btn variant="success"
                     disabled>Button</lte-btn>
            <lte-btn variant="info"
                     disabled>Button</lte-btn>
            <lte-btn variant="warning"
                     disabled>Button</lte-btn>
            <lte-btn variant="danger"
                     disabled>Button</lte-btn>
            <lte-btn variant="primary"
                     disabled>Button</lte-btn>
            <lte-btn bg="gray"
                     disabled>Button</lte-btn>
            <lte-btn bg="navy"
                     disabled>Button</lte-btn>
            <lte-btn bg="purple"
                     disabled>Button</lte-btn>
        </div>
        <br>
        <label>icon:</label>
        <div>
            <lte-btn icon="fa fa-adjust">Button</lte-btn>
            <lte-btn variant="success"
                     icon="fa fa-at">Button</lte-btn>
            <lte-btn variant="info"
                     icon="fa fa-bolt">Button</lte-btn>
            <lte-btn variant="warning"
                     icon="fa fa-camera">Button</lte-btn>
            <lte-btn variant="danger"
                     icon="fa fa-clock-o">Button</lte-btn>
            <lte-btn variant="primary"
                     icon="fa fa-coffee">Button</lte-btn>
            <lte-btn bg="gray"
                     icon="fa fa-comments-o">Button</lte-btn>
            <lte-btn bg="navy"
                     icon="fa fa-edit">Button</lte-btn>
            <lte-btn bg="purple"
                     icon="fa fa-envelope-o"            
                     disabled>Button</lte-btn>
        </div>
        <br>
        <label>block:</label>
        <div>
            <div class="col-md-3">
                <lte-btn variant="success"
                         block>Button</lte-btn>
            </div>
            <div class="col-md-3">
                <lte-btn variant="info"
                         block
                         flat>Button</lte-btn>
            </div>
            <div class="col-md-3">
                <lte-btn variant="primary"
                         block
                         flat>Button</lte-btn>
            </div>
            <div class="col-md-3">
                <lte-btn variant="warning"
                         block
                         disabled>Button</lte-btn>
            </div>
        </div>
        <hr>
        <label>app-btn:</label>
        <div>
            <lte-app-btn>AppBtn</lte-app-btn>
            <lte-app-btn icon="fa fa-map-o"
                         badgeText=123>AppBtn</lte-app-btn>
            <lte-app-btn icon="fa fa-language"
                         badgeText=456
                         badge-bg="yellow">AppBtn</lte-app-btn>
            <lte-app-btn icon="fa fa-thumbs-o-up"
                         badgeText="new"
                         badge-bg="red">AppBtn</lte-app-btn>
        </div>
        <br>
        <label>btn-group:</label>
        <div>
            <lte-btn-group>
                <lte-btn>left</lte-btn>
                <lte-btn>middle</lte-btn>
                <lte-btn>right</lte-btn>
            </lte-btn-group>
            <lte-btn-group>
                <lte-btn variant="primary">1</lte-btn>
                <lte-btn variant="info">2</lte-btn>
                <lte-btn variant="success">3</lte-btn>
                <lte-btn variant="warning">4</lte-btn>
                <lte-btn variant="danger">5</lte-btn>
            </lte-btn-group>
            <lte-btn-group>
                <lte-app-btn>AppBtn</lte-app-btn>
                <lte-app-btn icon="fa fa-map-o">AppBtn</lte-app-btn>
                <lte-app-btn icon="fa fa-language">AppBtn</lte-app-btn>
                <lte-app-btn icon="fa fa-thumbs-o-up">AppBtn</lte-app-btn>
            </lte-btn-group>
            <lte-btn-group>
                <lte-btn icon="fa fa-align-left"
                         variant="primary"></lte-btn>
                <lte-btn icon="fa fa-align-center"
                         variant="primary"></lte-btn>
                <lte-btn icon="fa fa-align-right"
                         variant="primary"></lte-btn>
            </lte-btn-group>
        </div>
    </div>
</template>

<script>
import LteBtn from '../../components/adminlte-vue/Button.vue'
import LteAppBtn from '../../components/adminlte-vue/AppButton.vue'
import LteBtnGroup from '../../components/adminlte-vue/ButtonGroup.vue'

export default {
    components: {
        LteBtn,
        LteAppBtn,
        LteBtnGroup
    }
}
</script>