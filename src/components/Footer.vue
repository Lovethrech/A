<script setup>
import HeaderLogoFooter from "./HeaderLogoFooter.vue";
</script>

<template>
    <hr class="hr-line">
    <br>
    <div class="footer-main-container">
        <div class="footer-brand-name">
            <HeaderLogoFooter></HeaderLogoFooter>
        </div>
        <div class="footer-social-media-nav-container">
            <div class="footer-social-media-nav"><a href="https://www.instagram.com/bigaabas/" target="_blank" class="footer-social-media-nav-link"><i class='bx bxl-instagram'></i></a></div>
            <div class="footer-social-media-nav"><a href="https://www.linkedin.com/in/rachael-olaonipekun-aa535b22b/" class="footer-social-media-nav-link" target="_blank"><i class='bx bxl-linkedin' ></i></a></div>
            <div class="footer-social-media-nav"><a href="https://wa.me/+2348094922351" class="footer-social-media-nav-link" target="_blank"><i class='bx bxl-whatsapp' ></i></a></div>
            <div class="footer-social-media-nav"><a href="https://github.com/Lovethrech" class="footer-social-media-nav-link" target="_blank"><i class='bx bxl-github' ></i></a></div>
            <div class="footer-social-media-nav"><a href="mailto:rachealdolapo45@gmail.com" class="footer-social-media-nav-link" target="_blank"><i class='bx bx-envelope' ></i></a></div>
        </div>
    </div>
</template>
<style scoped>
.hr-line{
    border:1px solid #ffffff;
    margin:0 3vw;
}
.footer-social-media-nav-link{
    text-decoration: none;
    color:hsl(0, 0%, 100%);
}

.footer-main-container{
    background-color: #2A1503;
    display:flex;
    justify-content: space-between;
    padding:1vh 5vw;
}
.footer-social-media-nav{
    border:2px solid hsl(0, 0%, 100%);
    border-radius:20px;
    padding:4px;
    color:hsl(0, 0%, 100%);
    font-size:24px;

}
.footer-social-media-nav:hover{
    cursor:pointer;
    transform:scale(1.1);
    transition: all .5s;
}
.footer-social-media-nav-container{
    display:flex;
    justify-content: space-between;
    gap:10px;
    margin:auto 0;
}

@media screen and (max-width: 950px) {
    .footer-main-container{
        flex-direction: column;

    }
    .footer-brand-name{
        display:flex;
        justify-content:center;
    }
    .footer-social-media-nav-container{
        margin:20px 0 0 0;
    }
    .footer-social-media-nav-container{
        display:flex;
        justify-content:space-around;
        gap:1px;
    }
}
</style>