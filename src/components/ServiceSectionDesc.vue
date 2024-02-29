<script setup>
import { ref } from "vue";

const containerWidth = ref("");
const archIconLeft = ref("");
const archIconRight = ref("<i class='bx bx-chevrons-right' ></i>");
const projectIconLeft = ref("<i class='bx bx-chevrons-left' ></i>");
const projectIconRight = ref("<i class='bx bx-chevrons-right' ></i>");
const feasIconLeft = ref("<i class='bx bx-chevrons-left' ></i>");
const feasIconRight = ref("<i class='bx bx-chevrons-right' ></i>");
const planIconLeft = ref("<i class='bx bx-chevrons-left' ></i>");
const planIconRight = ref("<i class='bx bx-chevrons-right' ></i>");
const constructIconLeft = ref("<i class='bx bx-chevrons-left' ></i>");
const constructIconRight = ref("<i class='bx bx-chevrons-right' ></i>");
const serviceBrownLineWidth = ref("20%");


const archIconRightClick = () => {
    containerWidth.value = "0 0 0 -100vw";
    serviceBrownLineWidth.value = "40%";
}
const projectIconLeftClick = () => {
    containerWidth.value = "0";
    serviceBrownLineWidth.value = "20%";
}
const projectIconRightClick = () => {
    containerWidth.value = "0 0 0 -200vw";
    serviceBrownLineWidth.value = "60%";
}
const feasIconLeftClick = () => {
    containerWidth.value = "0 0 0 -100vw";
    serviceBrownLineWidth.value = "40%";
}
const feasIconRightClick = () => {
    containerWidth.value = "0 0 0 -300vw";
    serviceBrownLineWidth.value = "80%";
}
const planIconLeftClick = () => {
    containerWidth.value = "0 0 0 -200vw";
    serviceBrownLineWidth.value = "60%";
}
const planIconRightClick = () => {
    containerWidth.value = "0 0 0 -400vw";
    constructIconRight.value = "<p></p>";
    serviceBrownLineWidth.value = "100%";
}
const constructIconLeftClick = () => {
    containerWidth.value = "0 0 0 -300vw";
    serviceBrownLineWidth.value = "80%";
}

// <i class='bx bx-chevrons-left' ></i>
// <i class='bx bx-chevrons-right' ></i>
</script>

<template>
    <div class="service-section-desc-main-container">
        <div class="service-section-desc-mini-main-container">
            <h2>Services</h2><br>
            <p>
                In the realm of architecture, I provide services that are<br>
                unparalleled in terms of quality and excellence.
            </p><br>
            <div class="service-section-desc-mini-main-container-list-container">
                <hr class="hr-line"/><br>
                <div class="service-section-desc-mini-main-container-list-order-container" :style="{margin:containerWidth}">
                    <div class="service-list-content">
                        <div class="left-icon-container" v-html="archIconLeft"></div>
                        <div class="service-section-desc-mini-main-container-list">
                            <span class="service-section-desc-mini-main-container-list-span-no">01</span>
                            <span class="service-section-desc-mini-main-container-list-span-desc">Architectural Design</span>
                        </div>
                        <div class="right-icon-container" v-html="archIconRight" @click="archIconRightClick"></div>
                    </div>
                    <br>
                    <div class="service-list-content">
                        <div class="left-icon-container" v-html="projectIconLeft" @click="projectIconLeftClick"></div>
                        <div class="service-section-desc-mini-main-container-list">
                            <span class="service-section-desc-mini-main-container-list-span-no">02</span>
                            <span class="service-section-desc-mini-main-container-list-span-desc">Project Management</span>
                        </div>
                        <div class="right-icon-container" v-html="projectIconRight" @click="projectIconRightClick"></div>
                    </div>
                    <br>
                    <div class="service-list-content">
                        <div class="left-icon-container" v-html="feasIconLeft" @click="feasIconLeftClick"></div>
                        <div class="service-section-desc-mini-main-container-list">
                            <span class="service-section-desc-mini-main-container-list-span-no">03</span>
                            <span class="service-section-desc-mini-main-container-list-span-desc">Feasibility Studies</span>
                        </div>
                        <div class="right-icon-container" v-html="feasIconRight" @click="feasIconRightClick"></div>
                    </div>
                    <br>
                    <div class="service-list-content">
                        <div class="left-icon-container" v-html="planIconLeft" @click="planIconLeftClick"></div>
                        <div class="service-section-desc-mini-main-container-list">
                            <span  class="service-section-desc-mini-main-container-list-span-no">04</span>
                            <span class="service-section-desc-mini-main-container-list-span-desc">Planning Permission Applications</span>
                        </div>
                        <div class="right-icon-container" v-html="planIconRight" @click="planIconRightClick"></div>
                    </div>
                    <br>
                    <div class="service-list-content">
                        <div class="left-icon-container" v-html="constructIconLeft" @click="constructIconLeftClick"></div>
                        <div class="service-section-desc-mini-main-container-list">
                            <span class="service-section-desc-mini-main-container-list-span-no">05</span>
                            <span class="service-section-desc-mini-main-container-list-span-desc">Construction Documentation</span>
                        </div>
                        <div class="right-icon-container" v-html="constructIconRight" @click="constructIconRightClick"></div>
                    </div>
                </div>
                
                <div class="service-shift-line">
                    <div class="service-shift-brown-line" :style="{width: serviceBrownLineWidth}"></div>
                </div>
            </div>
            
                
        </div>
    </div>
</template>
<style scoped>
.service-section-desc-main-container{
    width: 100%;
    height:100%;
    overflow: hidden;
}
.service-section-desc-mini-main-container h2{
    font-size: 3.4rem;
    font-weight:800;
    font-family: "Roboto", sans-serif;
    font-style: normal;
}
.service-section-desc-mini-main-container p{
    font-size: 22px;
    font-family: "Roboto Condensed", sans-serif;
}
.hr-line{
    border:1px solid #2a1503;
    margin:0 3vw;
}
.service-section-desc-mini-main-container-list-container{
    display:flex;
}
.service-section-desc-mini-main-container-list-order-container{
    list-style:none;
}
.left-icon-container, .right-icon-container{
    margin: 0 10px;
    font-size:20px;
    display: flex;
    place-items:center;
    justify-content: center;
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
}
.service-list-content{
    display:flex;
}
.left-icon-container, .right-icon-container, .service-shift-line{
    display:none;
}
.service-section-desc-mini-main-container-list{
    font-size: 20px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight:600;
    margin:0;
}
.service-section-desc-mini-main-container-list-span-no{
    color:rgb(115, 114, 114);
}
.service-section-desc-mini-main-container-list-span-desc{
    margin:2px 10px;
}

@media screen and (max-width: 970px){
    .service-section-desc-mini-main-container h2, .service-section-desc-mini-main-container p{
        text-align:center;
    }
    .service-section-desc-mini-main-container-list-container{
        display:block;
    }
    .service-section-desc-mini-main-container-list-order-container{
        display: flex;
        flex-direction: row;
        width:500vw;
    }
    .left-icon-container, .right-icon-container, .service-shift-line{
        display:block;
    }
    .service-shift-line{
        background-color:rgba(128, 128, 128, 0.438);
        margin: 0 auto;
        width:30%;
        height:1vh;
        border-radius:10px;
    }
    .service-shift-brown-line{
        background-color: #2A1503;;
        height:1vh;
        border-radius:10px;
        
    }
    .service-list-content{
        width:99vw;
        place-items: center;
        justify-content: center;
        

    }
    .service-section-desc-mini-main-container-list{
        width:70%;
        text-align:center;
        
    }

}

@media screen and (max-width: 620px) {
    .service-section-desc-mini-main-container p{
        font-size:1rem;
    }

}
</style>