<script setup>
import ServiceSectionDesc from "@/components/ServiceSectionDesc.vue";
import ServiceSectionMiniDesc from "@/components/ServiceSectionMiniDesc.vue";

</script>

<template>
    <div class="service-section-main-container">
        <div class="service-section-mini-main-container">
            <ServiceSectionDesc class="service-section-desc"></ServiceSectionDesc>
            <ServiceSectionMiniDesc class="service-section-desc"></ServiceSectionMiniDesc>
        </div>
    </div>

</template>
<style scoped>
.service-section-main-container{
    width:100%;
    height:100%;
    padding: 2vh 3vw;
}
.service-section-mini-main-container{
    display:flex;
    width:100%;
    height:100%;
}
.service-section-desc{
    width:50%;
}

@media screen and (max-width: 970px){
    .service-section-mini-main-container{
        flex-direction:column;
        place-items:center;
        justify-content: center;
    }
    .service-section-desc:first-child{
        height:40%;
        width:100%;
        margin:10px 0;
    }
    .service-section-desc:last-child{
        width:60%;
        height:70%;
        margin:10px 0;
    }

}
@media screen and (max-width: 620px) {
    .service-section-desc:last-child{
        width:80%;
    }
}
/*
@media screen and (max-width:500px) {
    .service-section-desc:last-child{
        height:40%;
    }
}
*/
</style>