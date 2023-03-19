<template>
    <div>
        TesteBAse
        <div :class="baseClass">
        {{ text }}
        </div>

        <button @click="onClick">
        x
        </button>


    </div>
</template>
<script>
export default {
    name: 'BaseAlert',
    props:['variant', 'text'],
    computed:{
        baseClass(){
            return [
                'alert',
                this.variant ? `alert-${this.variant}`: ''
            ]
        }
    },
    methods:{
        onClick(){
            this.$emit('close')
            console.log("clicou");
        }
    }
        
}


</script>
<style scoped>
.alert {
    padding: 5px;
    border-radius: 6px;
    color:gray;
    background-color: #ddd;
}
.alert-sucess {
    padding: 5px;
    border-radius: 6px;
    color:gray;
    background-color:red;
}
.alert-danger {
    padding: 5px;
    border-radius: 6px;
    color:gray;
    background-color: purple;
}


</style>