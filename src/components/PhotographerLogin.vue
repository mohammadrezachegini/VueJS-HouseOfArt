<template>
    <div>
        <h4> photographer</h4>
        <form action="">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" v-model="PhotographerLoginRequest.photographerId" />
                
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Password" v-model="PhotographerLoginRequest.password" />
            </div>

            <div>
                <label for="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Password" v-model="PhotographerLoginRequest.password" />
            </div>
            
        </form>
        <div>
                <button type="submit" @click="login">Login</button>
            </div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import PhotographerLoginService from '../services/PhotographerLoginService';

    export default {
        name: "photographerLogin",
        data(){
            return {
                PhotographerLoginRequest: {
                    photographerId: "",
                    password: ""
                },
                message: ""
            }
        },

        methods: {
            login(){
                PhotographerLoginService.login(this.photographerLoginRequest)
                .then(
                    response => {
                        let photographer = response.data;
                        console.log(photographer);
                        // this.$router.push({name: "photographerLogin"})
                        this.message = response.message;
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