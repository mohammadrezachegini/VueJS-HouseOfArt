<template>
    <div>
        <h4>customer Register</h4>
        <form action="">
            <div>
                <label for="city">City</label>
                <input type="text" name="city" id="city" placeholder="city" v-model="customerRegisterRequest.city" />
                
            </div>
            <div>
                <label for="contactNumber">Contact number</label>
                <input type="text" name="contactNumber" id="contactNumber" placeholder="contactNumber" v-model="customerRegisterRequest.contactNumber" />
            </div>

            <div>
                <label for="customerType">Customer type</label>
                <input type="text" name="customerType" id="customerType" placeholder="customerType" v-model="customerRegisterRequest.customerType" />
                
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="email" v-model="customerRegisterRequest.email" />
            </div>
            <div>
                <label for="firstName">First name</label>
                <input type="text" name="firstName" id="firstName" placeholder="firstName" v-model="customerRegisterRequest.firstName" />
                
            </div>
            <div>
                <label for="lastName">Last name</label>
                <input type="text" name="lastName" id="lastName" placeholder="lastName" v-model="customerRegisterRequest.lastName" />
            </div>
            <div>
                <label for="country">country</label>
                <input type="text" name="country" id="country" placeholder="country" v-model="customerRegisterRequest.country" />
                
            </div>
            <div>
                <label for="postalCode">Postal code</label>
                <input type="text" name="postalCode" id="postalCode" placeholder="postalCode" v-model="customerRegisterRequest.postalCode" />
            </div>
            <div>
                <label for="state">State</label>
                <input type="text" name="state" id="state" placeholder="state" v-model="customerRegisterRequest.state" />
                
            </div>
            <div>
                <label for="street">Street</label>
                <input type="text" name="street" id="street" placeholder="street" v-model="customerRegisterRequest.street" />
            </div>
            <div>
                <label for="streetNo">Street no</label>
                <input type="text" name="streetNo" id="streetNo" placeholder="streetNo" v-model="customerRegisterRequest.streetNo" />
                
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Password" v-model="customerRegisterRequest.password" />
            </div>
            
        </form>
        <div>
                <button type="submit" @click="register">Register</button>
            </div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import CustomerRegisterService from '../services/CustomerRegisterService';

    export default {
        name: "customerRegister",
        data(){
            return {
                customerRegisterRequest: {
                    city : "",
                    contactNumber: "",
                    customerType: "",
                    email: "",
                    firstName: "",
                    lastName: "",
                    country: "",
                    postalCode: "",
                    state: "",
                    street: "",
                    streetNo: "",
                    password: ""
                },
                message: ""
            }
        },

        methods: {
            register(){
                CustomerRegisterService.register(this.customerRegisterRequest)
                .then(
                    response => {
                        let customer = response.data;
                        console.log(customer);
                        // this.$router.push({name: "customer"})
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