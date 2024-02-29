<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <div class="head-section">
        <HeaderSection></HeaderSection>
    </div>
    <br>
    <div class="content-cont">
        <AboutSection class="about-section"></AboutSection>
        <hr class="hr-line"/>
        <ServiceSection class="service-section"></ServiceSection>
        <hr class="hr-line"/>
        <ContactSection></ContactSection>
    </div>
</template>
<style scoped>
.content-cont{
    background-color: hsl(0, 0%, 100%);
}
.hr-line{
    border:2px solid #2a1503;
    margin:0 3vw;
}
.head-section{
    width:100%;
    height:100vh;
}

.about-section{
    width:95%;
    height:100vh;
    margin:0 auto;
    
}
.service-section{
    width:100%;
    height:80vh;
}

@media screen and (max-width:700px) {
    .head-section{
        height:100vh;
    }
}

@media screen and (max-width: 620px) {
    .service-section{
        height:100vh;
    }
}
</style>