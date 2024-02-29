<template>
    <div class="service-section-mini-desc-main-container">
        <div class="service-section-second-mini-desc-main-container">
            <div class="service-section-mini-desc-main-container-image-container">
                <img src="/Service-bhh222-100.jpg" class="service-section-mini-desc-main-container-image-container-img"/>
            </div>
            <div class="service-section-mini-desc-main-container-image-desc-container">
                <p class="service-section-mini-desc-main-container-image-desc-container-p">
                    A feasibility study in architecture<br>
                    evaluates a project's practicality <br>
                    considering design, cost, and use.
                </p>
                <div class="service-section-mini-desc-main-container-image-desc-container-list">
                    <p>
                        03 <span class="minus-icon"><i class='bx bx-minus'></i></span> <br> Feasibility Studies
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.service-section-mini-desc-main-container{
    display:flex;
    place-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    margin: auto 0;
}
.service-section-second-mini-desc-main-container{
    
}
.service-section-mini-desc-main-container, .service-section-mini-desc-main-container-image-container{
    width:100%;
    height:100%;
}
.service-section-mini-desc-main-container-image-container{
    box-shadow: 10px 10px 10px hsl(0, 0%, 0%);
    border: 1px inset hsla(0, 0%, 100%, 0.245);
}

.service-section-mini-desc-main-container-image-container-img{
    width:100%;
}

.service-section-mini-desc-main-container-image-desc-container{
    display:flex;
    margin: -90px 0 0 0;
}
.service-section-mini-desc-main-container-image-desc-container-p{
    background-color:#2a1503;
    color: hsl(0, 0%, 100%);
    padding:20px 40px;
    font-family: "Roboto Condensed", sans-serif;
}
.service-section-mini-desc-main-container-image-desc-container-list{
    background-color:#2a15036f;
    color: hsl(0, 0%, 100%);
    display:flex;
    place-items:center;
    justify-content: center;
    padding: 10px 20px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight:700;
}

@media screen and (max-width: 970px){
    .service-section-mini-desc-main-container{
        align-items: start;
        padding:2vh 0;
    }
    .service-section-mini-desc-main-container-image-container-img{
        height:100%;
    }
}
@media screen and (max-width: 820px) {
    .service-section-mini-desc-main-container-image-desc-container{
        margin: -68px 0 0 0;
        font-size:14px;
    }
    .service-section-mini-desc-main-container-image-desc-container-p{
        padding: 10px 20px;
    }
    .service-section-mini-desc-main-container-image-desc-container-list{
        padding:0 4px;
    }
}
@media screen and (max-width: 620px) {
    .service-section-mini-desc-main-container-image-desc-container{
        flex-direction: column-reverse;
        margin: -50px 0 0 0;
        font-size:14px;
        
    }
    .service-section-mini-desc-main-container-image-desc-container-p{
        text-align: center;
    }
    .service-section-mini-desc-main-container-image-desc-container-list{
        border-radius:30px 30px 0 0;
    }
    .service-section-mini-desc-main-container-image-desc-container-list{
        padding:4px;
    }

}
</style>