<template>
    <div>
        Usuários Teste
        {{ $route.params.id }}

        <button @click="login()">
        Login
        </button>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route)
        console.log(this.$router)
        console.log(this.$store)
    },
    methods:{
        login(){
            console.log('login')
            this.$router.push('/')
        }
    },
    data(){
        return {

        }
    }    
}

</script>