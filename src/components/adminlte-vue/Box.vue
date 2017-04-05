<template>
    <div class="box"
         :class="[variantClass,solidClass]">
        <div class="box-header"
             :class="[borderClass]">
            <h3 class="box-title">{{header}}</h3>
    
            <div class="box-tools pull-right"
                 v-show="expandable">
                <button type="button"
                        class="btn btn-box-tool"
                        data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
            </div>
            <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
        <div class="box-body"
             style="display: block;">
            <slot></slot>
        </div>
        <!-- /.box-body -->
    </div>
</template>

<script>
export default {
    computed: {
        variantClass() {
            return 'box-' + this.variant
        },
        borderClass() {
            return this.border ? 'with-border' : ''
        },
        solidClass() {
            return this.solid ? 'box-solid' : ''
        },
        collapsedClass() {
            return this.collapsed ? 'collapsed-box' : ''
        }
    },
    props: {
        variant: {
            type: String,
            default: 'default'
        },
        header: {
            type: String,
            default: ''
        },
        border: {
            type: Boolean,
            default: true
        },
        expandable: {
            type: Boolean,
            default: false
        },
        closeable: {
            type: Boolean,
            default: false
        },
        solid: {
            type: Boolean,
            default: false
        }
    }
}
</script>