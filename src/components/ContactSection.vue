<script setup>
import { ref } from 'vue';
import { supabase } from "@/clients/supabase";
import Footer from "@/components/Footer.vue";

const name=ref("");
const email=ref("");
const message = ref("");

const onSubmit = async () => {
    const { data, error } = await supabase
        .from('abayomi_contacts')
        .insert([
            {
                name: name.value,
                email: email.value,
                message: message.value
            },
        ])
        .select()

    if (error) {
        console.error(error)
    }
    name.value = "";
    email.value = "";
    message.value = "";
}

</script>

<template>
    <section class="contact-section">
        <div class="contact-section-main-container">
            <div class="contact-section-main-container-text-container">
                <h2 class="contact-section-main-container-text-container-h2">Contact</h2>
                <p class="contact-section-main-container-text-container-p">
                    I would love to hear about your projects and how I could help. <br>
                    Please fill in the form, and I'll get back to you
                    as soon as possible.
                </p>
            </div>
            <div class="contact-section-main-container-form-container">
                <form action="" @submit.prevent="onSubmit">
                    <div class="input-container">
                        <label class="label" for="name">Name</label><br>
                        <input type="text" name="name" class="input-value" v-model="name" required/>
                    </div><br>
                    <div class="input-container">
                        <label class="label" for="email">Email</label><br>
                        <input type="email" name="email" class="input-value" v-model="email"  required/>
                    </div><br>
                    <div class="input-container">
                        <label class="label" for="Message">Message</label><br>
                        <textarea name="message" id="message" cols="30" rows="10" v-model="message" class="input-value"></textarea>
                    </div>
                    <br><br>

                    <button class="input-container-submit-btn" type="submit">Send Message</button>
                </form>
            </div>
        </div>
        
        <Footer></Footer>
    </section>
        
</template>
<style scoped>
.contact-section{
    background-color:#2A1503;
}
.input-container-submit-btn{
    margin:0 auto;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding:10px 30px;
    font-size:16px;
    background-color: #2A1503;
    color:hsl(0, 0%, 100%);
    border: 2px solid hsl(0, 0%, 100%);
}

.input-container-submit-btn:hover{
    cursor:pointer;
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
    transform:scaleX(0.98);
    transition: all .5s;
}
.contact-section-main-container{
    
    color:hsl(0, 0%, 100%);
    margin:1vh 0 0;
    padding:10vh 4vw;
    display:flex;
    justify-content: space-between;
}
.contact-section-main-container-text-container-h2{
    text-transform: uppercase;
    font-size: 60px;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: normal;
}.contact-section-main-container-text-container-p{
    color:hsl(0, 0%, 79%);
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.input-container {
    display: flex;
    color:hsl(0, 0%, 79%);
    flex-direction: column;
    font-size: 2vh;
    border-radius: 0;
    width:100%;
}
.label {
    font-size: 2vh;
    font-weight: 400;
}
.input-value {
    color:hsl(0,0%, 100%);
    background: transparent;
    margin-right: 0;
    width: 100%;
    height: 100%;
    outline: 0;
    border: 0;
    border-bottom:2px solid hsl(0, 0%, 100%);
    font-size: 2vh;
    padding: 1vh 3vw 1vh 1vw;
}
.contact-section-main-container-form-container{
    margin-right:10vw 
}


@media screen and (max-width:950px) {
    .contact-section-main-container{
        flex-direction: column;
    }
    .contact-section-main-container-text-container-h2{
        font-size: 40px;
    }
}
</style>