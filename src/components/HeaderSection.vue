<script setup>''
import Header from "@/components/Header.vue";
import HeaderSectionMainText from "@/components/HeaderSectionMainText.vue"
</script>

<template>
    <div class="header-section-main-container">
        <Header class="head-nav"></Header>
        <div class="header-section-mini-main-container">
            <div class="header-section-main-container-video-container">
                <video autoplay muted loop src="/TEST RENDER VIDEO.mp4"></video>
            </div>
            <div class="header-section-main-container-text-nav-container">
                <div class="header-section-main-text">
                    <HeaderSectionMainText></HeaderSectionMainText>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.header-section-main-container{
    color:hsl(0, 100%, 100%);
    width:100%;
    height:100%;
}
.head-nav{
    width:100%;
}
.header-section-mini-main-container{
    display:flex;
    width:100%;
    height:100%;
    padding:0;
}
.header-section-main-container-video-container{
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.header-section-main-container-video-container video{
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.header-section-main-container-text-nav-container{
    background:transparent;
    display:flex;
    place-items:center;
    justify-content: flex-end;
    width:100%;
}
.header-section-main-text{
    width:100%;
}


@media screen and (max-width:700px) {
    .header-section-main-container-text-nav-container{
        align-items: start;
    }
}
</style>