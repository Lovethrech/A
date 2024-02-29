<script setup>
import AboutTextSection from "./AboutTextSection.vue";
</script>

<template>
    <div class="about-section-main-container">
        <div class="about-section-main-container-mini-container">
            <div class="about-section-image-container">
                <video autoplay muted loop src="/3d Animation.mp4"></video>
                <!-- <img src="/bhh222Artboard 1 copy 4-100.jpg" alt="BHH222"/> -->
            </div>
            <div class="about-section-text-container">
                <AboutTextSection></AboutTextSection>
            </div>
            <!-- 
                background-color: #2A1503;
            -->
        </div>
    </div>
</template>
<style scoped>
.about-section-main-container{
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    place-items:center;
    justify-content:center;
    margin:0;
    padding:0;
}
.about-section-image-container{
    width:70%;
}
.about-section-image-container video{
    width:100%;
    height:100%;
}
.about-section-main-container-mini-container{
    background-color:#2a1503ae;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.393);
    border:10px inset  #ffffff34;

}

.about-section-text-container{
    background-color:#2a1503;
    width:70%;
    border-radius: 100px 0 0 0;
    margin: -180px 0 0 28.5vw;
}

@media screen and (max-width:700px){
    .about-section-image-container{
        width:100%;
    }
    .about-section-text-container{
        width:100%;
        margin:-70px 0 0 0;
    }
}
</style>