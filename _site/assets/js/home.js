/* ==========================================================
   home.js
   Premium Landing Page Animation
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       Reveal Animation
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .portfolio-card, .stat, .step, .about-left, .about-right, .section-title, .cta-content"
    );

    revealElements.forEach(el => {
        el.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:0.15

    });

    revealElements.forEach(el=>{

        revealObserver.observe(el);

    });




    /* =====================================
       Counter
    ===================================== */

    const counters=document.querySelectorAll(".counter");

    const counterObserver=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const counter=entry.target;

            const target=parseInt(counter.dataset.target);

            let current=0;

            const increment=Math.max(1,Math.ceil(target/120));

            function update(){

                current+=increment;

                if(current>target){

                    current=target;

                }

                if(target>=100){

                    counter.innerHTML=current.toLocaleString()+"+";

                }else{

                    counter.innerHTML=current+"%";

                }

                if(current<target){

                    requestAnimationFrame(update);

                }

            }

            update();

            counterObserver.unobserve(counter);

        });

    },{

        threshold:0.4

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });





    /* =====================================
       Hero Parallax
    ===================================== */

    const hero=document.querySelector(".hero");

    const heroImage=document.querySelector(".hero-bg img");

    const heroContent=document.querySelector(".hero-content");

    window.addEventListener("scroll",()=>{

        const y=window.pageYOffset;

        if(heroImage){

            heroImage.style.transform=
            `translateY(${y*0.25}px) scale(${1.05+y*0.0002})`;

        }

        if(heroContent){

            heroContent.style.opacity=1-y/700;

            heroContent.style.transform=
            `translateY(${y*0.4}px)`;

        }

    });






    /* =====================================
       Mouse Parallax
    ===================================== */

    // if(hero){

    //     hero.addEventListener("mousemove",(e)=>{

    //         const x=(e.clientX/window.innerWidth)-0.5;

    //         const y=(e.clientY/window.innerHeight)-0.5;

    //         heroContent.style.transform=
    //         `translate(${x*25}px,${y*25}px)`;

    //     });

    // }







    /* =====================================
       Service Hover Tilt
    ===================================== */

    const cards=document.querySelectorAll(".service-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateX=((y/rect.height)-0.5)*8;

            const rotateY=((x/rect.width)-0.5)*-8;

            card.style.transform=
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-12px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });






    /* =====================================
       Portfolio Zoom
    ===================================== */

    const portfolio=document.querySelectorAll(".portfolio-card");

    portfolio.forEach(item=>{

        item.addEventListener("mousemove",(e)=>{

            const img=item.querySelector("img");

            if(!img) return;

            const rect=item.getBoundingClientRect();

            const x=((e.clientX-rect.left)/rect.width)*100;

            const y=((e.clientY-rect.top)/rect.height)*100;

            img.style.transformOrigin=`${x}% ${y}%`;

        });

        item.addEventListener("mouseleave",()=>{

            const img=item.querySelector("img");

            if(img){

                img.style.transformOrigin="center";

            }

        });

    });







    /* =====================================
       Navbar Background
    ===================================== */

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(!header) return;

        if(window.scrollY>50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });







    /* =====================================
       Smooth Anchor
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",(e)=>{

            const target=document.querySelector(anchor.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });






    /* =====================================
       Hero Text Intro
    ===================================== */

    const heroTitle=document.querySelector(".hero h1");

    const heroSub=document.querySelector(".hero p");

    const heroButton=document.querySelector(".hero-buttons");

    setTimeout(()=>{

        if(heroTitle) heroTitle.classList.add("active");

    },200);

    setTimeout(()=>{

        if(heroSub) heroSub.classList.add("active");

    },500);

    setTimeout(()=>{

        if(heroButton) heroButton.classList.add("active");

    },800);





    /* =====================================
       Scroll Progress
    ===================================== */

    const progress=document.createElement("div");

    progress.className="scroll-progress";

    document.body.appendChild(progress);

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const percent=(window.scrollY/total)*100;

        progress.style.width=percent+"%";

    });

});