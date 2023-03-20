<template>
    <div>
        Usuários Teste
        {{ $route.params.id }}

        {{ $store.state.user.first_name }}
        {{ $store.state.user.last_name }}

        <button @click="login()">
        Login
        </button>

        <button @click="updateUser()">
        UpdateUser
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
        },
        updateUser(){
            const newUser = {
        first_name: 'Ruan',
        last_name: 'Felipe',
        email: 'jon@snow.com.br'
    }
    this.$store.commit('storeUser', newUser)
        }
    },
    data(){
        return {
            user: {
        first_name: 'Jon',
        last_name: 'Snow',
        email: 'jon@snow.com.br'
    }
        }
    }    
}

</script>