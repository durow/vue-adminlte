<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <lte-box variant="primary"
                         expandable
                         header="default:">
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
                </lte-box>
                <lte-box variant="info"
                         expandable
                         header="size">
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
                </lte-box>
                <lte-box variant="warning"
                         expandable
                         header="icon:">
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
                </lte-box>
                <lte-box variant="danger"
                         expandable
                         header="app-btn">
                    <lte-app-btn>AppBtn</lte-app-btn>
                    <lte-app-btn icon="fa fa-map-o"
                                 badgeText=123>AppBtn</lte-app-btn>
                    <lte-app-btn icon="fa fa-language"
                                 badgeText=456
                                 badge-bg="yellow">AppBtn</lte-app-btn>
                    <lte-app-btn icon="fa fa-thumbs-o-up"
                                 badgeText="new"
                                 badge-bg="red">AppBtn</lte-app-btn>
                </lte-box>
                <lte-box variant="success"
                         expandable
                         header="vertical-btn-group">
                    <lte-btn-group vertical>
                        <lte-btn variant="primary">1</lte-btn>
                        <lte-btn variant="info">2</lte-btn>
                        <lte-btn variant="success">3</lte-btn>
                        <lte-btn variant="warning">4</lte-btn>
                        <lte-btn variant="danger">5</lte-btn>
                    </lte-btn-group>
                    <lte-btn-group vertical>
                        <lte-app-btn>AppBtn</lte-app-btn>
                        <lte-app-btn icon="fa fa-map-o">AppBtn</lte-app-btn>
                        <lte-app-btn icon="fa fa-language">AppBtn</lte-app-btn>
                        <lte-app-btn icon="fa fa-thumbs-o-up">AppBtn</lte-app-btn>
                    </lte-btn-group>
                </lte-box>
            </div>
            <div class="col-md-6">
                <lte-box variant="primary"
                         expandable
                         header="flat:">
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
                </lte-box>
                <lte-box variant="success"
                         expandable
                         header="disabled:">
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
                </lte-box>
                <lte-box variant="info"
                         expandable
                         header="block">
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
                </lte-box>
                <lte-box variant="warning"
                         expandable
                         header="btn-group">
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
                </lte-box>
                <lte-box variant="danger"
                         header="split-button:">
                    <lte-split-btn text="SplitButton"
                                   :menu="menu"
                                   icon="fa fa-link"
                                   variant="primary">
                        <lte-link-item icon="fa fa-link">link-item1</lte-link-item>
                        <lte-link-item icon="fa fa-hourglass-start">link-item2</lte-link-item>
                        <lte-router-item icon="fa fa-beer">router-item1</lte-router-item>
                        <lte-router-item icon="fa fa-registered">router-item2</lte-router-item>
                    </lte-split-btn>
                </lte-box>
            </div>
        </div>
    </div>
</template>

<script>
import LteBtn from '../../components/adminlte-vue/Button.vue'
import LteAppBtn from '../../components/adminlte-vue/AppButton.vue'
import LteBtnGroup from '../../components/adminlte-vue/ButtonGroup.vue'
import LteSplitBtn from '../../components/adminlte-vue/SplitButton.vue'
import LteBox from '../../components/adminlte-vue/Box.vue'
import LteLinkItem from '../../components/adminlte-vue/LinkItem.vue'
import LteRouterItem from '../../components/adminlte-vue/RouterItem.vue'

export default {
    data() {
        return {
            menu: [{
                href: '#',
                type: 'router',
                text: 'router-link1',
                icon:'fa fa-link'
            }, {
                href: '#',
                type: 'router',
                text: 'router-link2',
                icon:'fa fa-link'                
            }, {
                href: '#',
                type: 'router',
                text: 'router-link3',
                icon:'fa fa-link'                
            }, {
                href: '#',
                type: 'a',
                text: 'a-link1',
                icon:'fa fa-link'                
            }, {
                href: '#',
                type: 'a',
                text: 'a-link2',
                icon:'fa fa-link'                
            }]
        }
    },
    components: {
        LteBtn,
        LteAppBtn,
        LteBtnGroup,
        LteBox,
        LteSplitBtn,
        LteLinkItem,
        LteRouterItem
    }
}
</script>