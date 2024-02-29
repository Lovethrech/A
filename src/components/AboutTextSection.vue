<template>
    <div class="about-text-section-main-container">
        <h2 class="about-section-text-container-title">
            About
        </h2>
        <p class="about-section-text-container-description-first-child"> 
            My focus is on creating modern architectural designs
            that balance functionality with aesthetic beauty.
        </p>
        <p class="about-section-text-container-description-second-child">
            The body of work that I have amassed over the years is diverse and extensive,
            encompassing projects that range from individual residential properties to 
            large-scale commercial structures, and a myriad of other types in between.
            This broad spectrum of projects reflects my commitment to versatility and
            adaptability in my field.
            My work is not merely a profession, but a passion that fuels me. I pour my heart
            and soul into every design, aiming to achieve nothing less than perfection. Each
            client is unique...
        </p>  
        <!--, and I believe their designs should be too. I make it my mission
            to tailor each design to the specific needs and desires of the client, ensuring
            that the end result is a perfect reflection of their vision.
            
            As we embark on this journey together, I eagerly anticipate the opportunity to
            collaborate with you. Your vision serves as the guiding light for the design process,
            and I am excited to help bring it to fruition. I am confident that together, we can 
            create a design that not only meets your needs but also exceeds your expectations. I 
            look forward to the opportunity to transform your vision into a tangible reality. -->
        <div class="about-section-text-btn-container">
            <button>Read more </button>
            <div class="bx=ctn">
                <i class='bx bx-right-arrow-alt' ></i>
            </div>            
        </div>
    </div>
</template>
<style scoped>
.about-text-section-main-container{
    margin:20px 40px;
}
.about-section-text-container-title{
    text-align:center;
    text-transform:uppercase;
    color: #b5b4b4;
    font-size: 3.4rem;
    font-weight:800;
    font-family: "Roboto", sans-serif;
    font-style: normal;
}
.about-section-text-container-description-first-child, .about-section-text-container-description-second-child{
    margin:2vh 0;
    font-size: 14px;
    font-weight:400;
    font-family: "Roboto Condensed", sans-serif;
    text-align:justify;
    color: hsl(0, 0%, 100%);
}
.about-section-text-container-description-first-child{
    font-weight:700;
    text-transform: uppercase;
}
.about-section-text-btn-container{
    outline:0;
    display:flex;
}
.about-section-text-btn-container button{
    background:transparent;
    border:0;
    color:hsl(0, 0%, 100%);
    text-transform:uppercase;
    letter-spacing:2px;
}
.bx-ctn{
    display:flex;
    place-items:center;
}
.bx-right-arrow-alt{
    color:hsl(0, 0%, 100%);
    font-size: 22px;
}
.about-section-text-btn-container:hover{
    cursor:pointer;
    transform:scaleX(0.98);
    transition: all .4s;
}


@media screen and (max-width: 700px){
    .about-section-text-container-title{
        font-size:2.4rem;
    }
    .about-section-text-container-description-first-child, .about-section-text-container-description-second-child{
        font-size: 14px;
    }
}
</style>