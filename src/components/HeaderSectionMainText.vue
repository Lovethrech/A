<template>
    <div class="header-section-main-text-main-container">
        <div class="header-section-main-text-main-container-text">
            <h1>The greatest<br> Architecture</h1><br>
            <p>Architects design spaces, shaping our <br>
                lives and communities sustainably.</p><br>
            <RouterLink to="">
                <button class="touch-btn">Get in touch</button>
            </RouterLink>
        </div>

        <div class="header-section-main-text-main-container-text-nav-container">
            <div class="header-section-main-text-main-container-text-nav-container-explore">
                <div class="header-section-main-text-main-container-text-nav-container-explore-container">
                    <div class="explore-icon">
                        <i class='bx bxs-chevron-down'></i>
                    </div>
                    <div class="explore-text">
                        <p style="font-weight:700;">Explore More</p>
                        <p>Scroll down</p>
                    </div>
                </div>
            </div>
            <div class="header-section-main-text-main-container-text-nav-container-nav">
                <div class="header-section-main-text-main-container-text-nav-container-nav-project-nav-main-container">
                    <div class="header-section-main-text-main-container-text-nav-container-nav-project-nav-main-container-empty"></div>
                    <div class="header-section-main-text-main-container-text-nav-container-nav-project-nav-main-container-project">
                        <p>Projects Completed</p>
                    </div>
                </div>
                <div class="header-section-main-text-main-container-text-nav-container-nav-customer-nav-main-container">
                    <div class="header-section-main-text-main-container-text-nav-container-nav-customer-nav-main-container-customer">
                        <p>Our customers</p>
                    </div>
                    <div class="header-section-main-text-main-container-text-nav-container-nav-customer-nav-main-container-about">
                        <p>About Us</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.header-section-main-text-main-container{
    width:100%;
}
.header-section-main-text-main-container-text{
    margin: 0 0 0 150px;
}
.header-section-main-text-main-container-text h1{
    font-size: 4rem;
    font-weight:800;
    font-family: "Roboto", sans-serif;
}
.header-section-main-text-main-container-text p, .touch-btn{
    margin:0 0 0 60px;
    font-family: "Roboto Condensed", sans-serif;
}
.touch-btn{
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    padding:10px 30px;
    font-weight:400;
}
.touch-btn:hover{
    cursor: pointer;
    transform:scaleX(1.05);
    transition: all .6s;
}

/* Text Nav */
.header-section-main-text-main-container-text-nav-container{
    display:flex;
    justify-content: space-between;
    width:100%;
}
/*Explore Icon*/
.header-section-main-text-main-container-text-nav-container-explore{
    display:flex;
    place-items:center;
    width:50%;
}
.header-section-main-text-main-container-text-nav-container-explore-container{
    display:flex;
    gap:10px;
    margin: 0 0 0 100px;
}
.explore-icon{
    display:flex;
    place-items:center;
    justify-content: center;
    height:100%;
    background-color: hsl(0, 0%, 0%);
    color:hsl(0, 0%, 100%);
    outline:0;
    padding: 2px;
    border-radius:20px;
}
.explore-icon i{
    font-size: 30px;
}
.explore-icon:hover{
    cursor:pointer;
    transform: scale(0.95);
    transition: all .4s;
}
.explore-text p{
    font-family: "Roboto", sans-serif;
}

/*Main Nav */
.header-section-main-text-main-container-text-nav-container-nav{
    display: flex;
    width:50%;
    background:transparent
}
.header-section-main-text-main-container-text-nav-container-nav-project-nav-main-container, .header-section-main-text-main-container-text-nav-container-nav-customer-nav-main-container{
    
    width:50%;
    height:20vh;
}
.header-section-main-text-main-container-text-nav-container-nav-project-nav-main-container-empty, .header-section-main-text-main-container-text-nav-container-nav-project-nav-main-container-project, .header-section-main-text-main-container-text-nav-container-nav-customer-nav-main-container-customer, .header-section-main-text-main-container-text-nav-container-nav-customer-nav-main-container-about{
    height:50%;
    width:100%;
    text-align:center;
    font-family: "Roboto Condensed", sans-serif;
    display:flex;
    place-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.251);
    border:3px outset  #ffffff34;
    box-shadow: 10px 5px 2px hsla(0, 0%, 100%, 0.278);
}
.header-section-main-text-main-container-text-nav-container-nav-project-nav-main-container-empty{
    background: transparent;
    border:0;
}

@media screen and (max-width:700px) {
    .header-section-main-text-main-container-text{
        margin: 0;
        text-align:center;
    }
    .header-section-main-text-main-container-text-nav-container{
        margin:20px 0 0 0;
    }
    .header-section-main-text-main-container-text h1{
        font-size:3rem;
    }
    .header-section-main-text-main-container-text p, .touch-btn{
        margin:0;
    }
    .header-section-main-text-main-container-text-nav-container{
        flex-direction: column-reverse;
    }
    .header-section-main-text-main-container-text-nav-container-nav{
        width:100%;
        margin:10px 0;
    }
    .header-section-main-text-main-container-text-nav-container-explore{
        width:100%;
        display: flex;
        justify-content: center;
    }
    .header-section-main-text-main-container-text-nav-container-explore-container{
        margin: 20px 0 0 0;
    }

}
</style>