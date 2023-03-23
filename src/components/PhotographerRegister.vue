<template>
    <div>
        <h4>photographer Register</h4>
        <form action="">
            <div>
                <label for="lastName">lastName</label>
                <input type="text" name="lastName" id="lastName" placeholder="lastName" v-model="photographerRegisterRequest.lastName" />
                
            </div>
            <div>
                <label for="firstName">firstName</label>
                <input type="text" name="firstName" id="firstName" placeholder="firstName" v-model="photographerRegisterRequest.firstName" />
            </div>

            <div>
                <label for="addressLine1">addressLine1</label>
                <input type="text" name="addressLine1" id="addressLine1" placeholder="addressLine1" v-model="photographerRegisterRequest.addressLine1" />
                
            </div>
            <div>
                <label for="addressLine2">addressLine2</label>
                <input type="text" name="addressLine2" id="addressLine2" placeholder="addressLine2" v-model="photographerRegisterRequest.addressLine2" />
            </div>
            <div>
                <label for="city">city</label>
                <input type="text" name="city" id="city" placeholder="city" v-model="photographerRegisterRequest.city" />
                
            </div>
            <div>
                <label for="province">province</label>
                <input type="text" name="province" id="province" placeholder="province" v-model="photographerRegisterRequest.province" />
            </div>
            <div>
                <label for="country">country</label>
                <input type="text" name="country" id="country" placeholder="country" v-model="photographerRegisterRequest.country" />
                
            </div>
            <div>
                <label for="postalCode">Postal code</label>
                <input type="text" name="postalCode" id="postalCode" placeholder="postalCode" v-model="photographerRegisterRequest.postalCode" />
            </div>
            
            <div>
                <label for="emailAddress">emailAddress</label>
                <input type="text" name="emailAddress" id="emailAddress" placeholder="emailAddress" v-model="photographerRegisterRequest.emailAddress" />
                
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Password" v-model="photographerRegisterRequest.password" />
            </div>
            <div>
                <label for="contactNumber">contactNumber</label>
                <input type="text" name="contactNumber" id="contactNumber" placeholder="contactNumber" v-model="photographerRegisterRequest.contactNumber" />
            </div>
            <div>
                <label for="bankCode">bankCode</label>
                <input type="text" name="bankCode" id="bankCode" placeholder="bankCode" v-model="photographerRegisterRequest.bankCode" />
                
            </div>
            <div>
                <label for="accountNo">accountNo</label>
                <input type="text" name="accountNo" id="accountNo" placeholder="accountNo" v-model="photographerRegisterRequest.accountNo" />
                
            </div>
            <div>
                <label for="paymentFrequency">paymentFrequency</label>
                <input type="text" name="paymentFrequency" id="paymentFrequency" placeholder="paymentFrequency" v-model="photographerRegisterRequest.paymentFrequency" />
                
            </div>
            <div>
                <label for="agreedShare">agreedShare</label>
                <input type="text" name="agreedShare" id="agreedShare" placeholder="agreedShare" v-model="photographerRegisterRequest.agreedShare" />
                
            </div>
            <div>
                <label for="photoDetils">photoDetils</label>
                <input type="text" name="photoDetils" id="photoDetils" placeholder="photoDetils" v-model="photographerRegisterRequest.photoDetils" />
                
            </div>
            
            
        </form>
        <div>
                <button type="submit" @click="register">Register</button>
            </div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import PhotographerRegisterService from '../services/PhotographerRegisterService';

    export default {
        name: "photographerRegister",
        data(){
            return {
                photographerRegisterRequest: {
                    lastName : "",
                    firstName: "",
                    addressLine1: "",
                    addressLine2: "",
                    city: "",
                    province: "",
                    country: "",
                    postalCode: "",
                    emailAddress: "",
                    password: "",
                    contactNumber: "",
                    bankCode: "",
                    accountNo: "",
                    paymentFrequency: "",
                    agreedShare: "",
                    photoDetils: "",
                },
                message: ""
            }
        },

        methods: {
            register(){
                PhotographerRegisterService.register(this.photographerRegisterRequest)
                .then(
                    response => {
                        let photographer = response.data;
                        console.log(photographer);
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