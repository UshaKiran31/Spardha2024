class SplHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav>
            <img src="images/vvitacm_logo.png" alt="VVIT ACM logo">
            
           <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="navigation.html">Navigation</a></li>
                <li><a href="index.html#about">About Us</a></li>
                <li><a href="index.html#contactus">Contact Us</a></li>
            </ul>
            


            <div class="menu-icon" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>

        <div class="mobile-menu" id="mobile-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="navigation.html">Navigation</a></li>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="index.html#contactus">Contact Us</a></li>
        </div>`
    }
}

class SplFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
        `
            <div class="footer">
        <div class="footer-content">
            <img src="images/vvit_logo.png" alt="VVIT Logo"><br>

            <p><i class="fa fa-home" aria-hidden="true"></i>
                Vasireddy Venkatadri Institute of Technology<br>
            <div class="address">
                Nambur (V)<br> Peda Kakani (Md)<br> Guntur (Dt)<br> Andhra Pradesh<br> 522508.
            </div>

            </p>
            <a href="mailto:acm.vvit@gmail.com"> <i class="fa fa-envelope-o" aria-hidden="true"></i>
                acm.vvit@gmail.com</a><br>
            <a href="https://acm.vvitguntur.com/"><i class="fa fa-globe" aria-hidden="true"></i> acm.vvitguntur.com</a>
        </div>

        <div class="google-map">
            <h2>Google Map</h2>

            <iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15314.749074397958!2d80.52717539784877!3d16.338915888871266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f5ea7d8222ed%3A0x10a5e29cfb7acd0c!2sVasireddy+Venkatadri+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1531207072021" width="80%" height="350" frameborder="0" allowfullscreen="allowfullscreen" class=""></iframe>
        </div>   
    </div>

    <div class="sub-footer">
        <p>&copy; Copyright @ 2024 &nbsp; 
            <a href="https://www.facebook.com/vvitacm.1/" target="_blank"><i class="fa-brands fa-facebook"></i></a> &nbsp;
            <a href="https://www.instagram.com/acm_vvit/" target="_blank"><i class="fa-brands fa-instagram"></i></a> &nbsp; 
            <a href="https://www.linkedin.com/in/vvit-guntur-acm-student-chapter-1818961b2/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> &nbsp;
            <a href="https://www.youtube.com/channel/UC9ISck3zjhdRDnhQUUsETdg" target="_blank"><i class="fa-brands fa-youtube"></i></i></a>
        </p>
    </div>
        `
    }
}

customElements.define('my-header',SplHeader)
customElements.define('my-footer',SplFooter)

function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

window.onclick = function(event) {
    var menu = document.getElementById('mobile-menu');
    var icon = document.querySelector('.menu-icon');
    if (event.target !== menu && event.target !== icon && !icon.contains(event.target) && menu.style.display === 'block') {
        menu.style.display = 'none';
    }
}

window.onresize = function() {
    var menu = document.getElementById('mobile-menu');
    if (window.innerWidth > 768) {
        menu.style.display = 'none';
    }
}


function popRegisterButton() {
    var registerButtons = document.querySelectorAll('.register-button button');
    registerButtons.forEach(button => {
    button.classList.remove('pop-animation');
    void button.offsetWidth; // Trigger reflow to restart the animation
    button.classList.add('pop-animation');
    });
}

setInterval(popRegisterButton, 1000); // Adjust the interval time as needed


