<template>
    <div>
        <h4>Login</h4>
        <form action="">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" v-model="customerLoginRequest.customerId" />
                
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Password" v-model="customerLoginRequest.password" />
            </div>
            
        </form>
        <div>
                <button type="submit" @click="login">Login</button>
            </div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import CustomerLoginService from '../services/CustomerLoginService';

    export default {
        name: "customerLogin",
        data(){
            return {
                customerLoginRequest: {
                    customerId: "",
                    password: ""
                },
                message: ""
            }
        },

        methods: {
            login(){
                CustomerLoginService.login(this.customerLoginRequest)
                .then(
                    response => {
                        let customer = response.data;
                        console.log(customer);
                        this.$router.push({name: "customerLogin"})
                        // this.message = response.message;
                    }
                )
                .catch(error => {
                    console.log(error);
                })
            }
        },

        mounted(){
            this.message = "";
        }
    }
</script>

<style>
</style>