<template>
    <div>
        <h1>Header</h1>
        <input type="text" v-model="name" > 
        {{ name }}

        <br><br><br>
        <select v-model="pageCount">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        </select>
        {{ pageCount }}
    </div>
</template>
<script>
    export default {
        name: 'TheHeader',
        data(){
            return {
                name: 'Ruan',
                pageCount: 5
            }
        },
        watch:{
            name(newValue, oldValue){

                this.savaName(newValue, oldValue)
            },
            pageCount(){
                console.log('Ajax')
            }
        },
        methods:{
            savaName(newValue, oldValue){
                console.log(newValue, oldValue)
                console.log('teste')
            }
        },
        beforeCreate(){
            console.log('beforeCreate');
        },
        created() {
            console.log('Create');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
        },
        beforeUnmount() {
            console.log('beforeUnmount');
        },
        unmounted() {
            console.log('unmounted');
        },

    }


</script>

<style scoped>
body{
background-color: black;
}
</style>