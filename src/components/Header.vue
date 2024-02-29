<script setup>
import { ref } from "vue";
import logo from "../components/HeaderLogo.vue";

const menuIcon = ref("<i class='bx bxs-category bx-rotate-90' ></i>");

const menuListPosition = ref("none");

const hideMenu = () => {
    if (menuIcon.value == "<i class='bx bxs-category bx-rotate-90' ></i>") {
        menuListPosition.value = "block";
        menuIcon.value = "<i class='bx bxs-category-alt bx-rotate-180' ></i>";
    }
    else if (menuIcon.value == "<i class='bx bxs-category-alt bx-rotate-180' ></i>")  {
        menuListPosition.value = "none";
        menuIcon.value = "<i class='bx bxs-category bx-rotate-90' ></i>";
    }
    else {
        menuListPosition.value = "block";
        menuIcon.value = "<i class='bx bxs-category-alt bx-rotate-180' ></i>";
    }
}
</script>
<template>
    <div class="header-main-container">
        <div class="header-main-mini-container">
            <div class="logo"><logo class="logo"></logo></div>
            <div class="nav-main-container">
                <ul class="head-nav">
                    <li class="head-nav-list">main</li>
                    <li class="head-nav-list">gallery</li>
                    <li class="head-nav-list">projects</li>
                    <li class="head-nav-list">certifications</li>
                    <li class="head-nav-list">contact</li>
                </ul>
            </div>
            <div class="header-main-mini-container-nav-menu-icon-container" v-html="menuIcon" @click="hideMenu">
            </div>
            <div :style="{ display: menuListPosition }" class="nav-menu-icon-list-container">
                <ul class="nav-menu-icon-list">
                    <a class="nav-menu-icon-link">
                        <li class="nav-menu-icon-description-nav">main</li>
                    </a>
                    <a class="nav-menu-icon-link">
                        <li class="nav-menu-icon-description-nav">gallery</li>
                    </a>
                    <a class="nav-menu-icon-link">
                        <li class="nav-menu-icon-description-nav">projects</li>
                    </a>
                    <a class="nav-menu-icon-link">
                        <li class="nav-menu-icon-description-nav">certifications</li>
                    </a>
                    <a class="nav-menu-icon-link">
                        <li class="nav-menu-icon-description-nav">contact</li>
                    </a>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.header-main-container{
    background-color:rgba(255, 255, 255, 0.288);
    display:flex;
    place-items:center;
    justify-content: center;
    padding:6px 0;
}
.header-main-mini-container{
    width:100%;
    padding:1vh 3vw 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.nav-main-container{
    margin:auto 0;
}
.head-nav{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap:3vw;
}
.head-nav-list{
    list-style: none;
    text-transform: uppercase;
    font-size:0.9em;
    font-family: "Roboto Condensed", sans-serif;
    color:hsl(0, 0%, 100%);
    margin:auto 0;
}
.head-nav-list:hover{
    cursor:pointer;
}
.head-nav-list:first-child{
    border-width:2px 0;
    border-style:solid;
    border-color:hsl(0, 0%, 100%);
    color: hsl(0, 0%, 100%);
    padding:6px 0;
    font-size:0.95em;
}
.head-nav-list:first-child:hover{
    
    transform:scale(1.1);
    transition: all .6s;
}
.header-main-mini-container-nav-menu-icon-container{
    display:none;
}

.nav-menu-icon-list-container{
    height: 100vh;
    display:none;
}

.nav-menu-icon-link {
    outline: none;
    text-decoration: none;
}



.nav-menu-icon-description-nav:hover {
    cursor: pointer;
    color: #b1aba685;
    transform: scaleX(0.97);
    transition: all .6s;
}

.nav-menu-icon-list {
    background-color: hsla(120, 100%, 7%, 0.148);
    list-style: none;
    padding: 1vh 3vw;
    margin: 0;
    height: 100vh;
}

.nav-menu-icon-description-nav{
    margin: 5vh 0;
    color: hsl(0, 0%, 100%);
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
}
.side-bar-icon-description-nav:active {
    color: #b1aba685;
    transition: all .7s;
}

@media screen and (max-width:850px) {
    .head-nav-list{
        display: none;
    }
    .header-main-mini-container-nav-menu-icon-container{
        display:block;
        place-items:center;
        justify-content: center;
        font-size: 30px;
        padding:10px 0;
    }
    .nav-menu-icon-list-container{
        position:absolute;
        top:60px;
        right:0;
        width:50%;
        height:100vh;
    }
    .nav-menu-icon-list{
        background-color: #2a1503;
        text-transform:uppercase;
        
        
    }
} 
</style>
