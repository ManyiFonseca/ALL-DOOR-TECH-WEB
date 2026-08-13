// ======================================================
// CONFIGURACIÓN CENTRAL
// ======================================================
const EMAILJS_PUBLIC_KEY = "YeV2hn7sjNt9bgfv-"; 
const EMAILJS_SERVICE_ID = "service_xok36xu"; 
const EMAILJS_TEMPLATE_ID = "template_apv8d1c"; 
const RECAPTCHA_KEY = "6LeI5kosAAAAAGX6wmH8HSdaDwaLNZ1bJ7NDDVFH"; 

(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    } else {
        console.error("Librería EmailJS no encontrada.");
    }
})();

// ======================================================
// 1. CHAT WIDGET & UI GLOBAL
// ======================================================

window.toggleAdtChat = function() {
    const chat = document.getElementById('chatContainer');
    const iconBtn = document.getElementById('chatBtn');
    
    if (chat) {
        if (chat.style.display === 'none' || chat.style.display === '') {
            chat.style.display = 'block';
            if(iconBtn && iconBtn.querySelector('i')) iconBtn.querySelector('i').className = 'bi bi-x-lg';
        } else {
            chat.style.display = 'none';
            if(iconBtn && iconBtn.querySelector('i')) iconBtn.querySelector('i').className = 'bi bi-chat-fill';
        }
    }
};

document.addEventListener('click', (e) => {
    const chat = document.getElementById('chatContainer');
    const btn = document.getElementById('chatBtn');
    if (chat && chat.style.display === 'block' && !chat.contains(e.target) && !btn.contains(e.target)) {
        window.toggleAdtChat();
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // A. INYECCIÓN DEL CHAT (VERSIÓN BLINDADA Y OPTIMIZADA PARA MÓVIL)
    if (!document.getElementById('chatContainer')) {
        const chatHTML = `
        <style>
            /* Blindaje total contra Bootstrap y estilos globales */
            #chatContainer {
                display: none; 
                flex-direction: column;
                position: fixed; 
                bottom: 90px; 
                right: 20px; 
                width: 320px; 
                max-height: 85vh !important; /* Se ajusta a la pantalla sin romperse */
                background: white; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.3); 
                border-radius: 16px; 
                overflow: hidden; 
                z-index: 2147483647;
                font-family: "Segoe UI", Arial, sans-serif;
            }
            .adt-chat-header {
                background: #223248; 
                color: white; 
                padding: 12px 15px; 
                display: flex; 
                align-items: center; 
                gap: 12px;
                flex: 0 0 auto !important; /* El encabezado NO se achica */
            }
            #chatBody {
                flex: 1 1 auto !important; /* Crece y se adapta al espacio libre */
                background: #f0f2f5; 
                padding: 15px; 
                overflow-y: auto !important; /* Scroll interno solo si es necesario */
            }
            .chat-msg-bubble {
                background: white; 
                padding: 12px; 
                border-radius: 8px; 
                font-size: 13px; 
                box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
                color: #333;
                line-height: 1.4;
                margin: 0;
            }
            .adt-chat-form-wrapper {
                padding: 12px 15px; 
                background: white;
                flex: 0 0 auto !important; /* El formulario NO se achica */
                border-top: 1px solid #eee;
            }
            #chat-form {
                margin: 0 !important;
                padding: 0 !important;
                display: flex;
                flex-direction: column;
                gap: 7px;
            }
            /* Forzar estilos de inputs para ganarle a Bootstrap */
            #chat-form input, #chat-form textarea {
                width: 100% !important;
                margin: 0 !important; 
                padding: 8px 10px !important;
                border: 1px solid #ddd !important;
                border-radius: 6px !important;
                font-size: 14px !important; /* 14px evita zoom automático en iPhone */
                line-height: 1.4 !important;
                background: #fff !important;
                color: #333 !important;
                box-shadow: none !important;
                height: 38px !important;
                box-sizing: border-box !important;
            }
            #chat-form textarea {
                height: 52px !important;
                resize: none !important;
            }
            #chat-form button {
                width: 100% !important; 
                height: 40px !important; 
                background: #223248 !important; 
                color: #f9ae39 !important; 
                border: 2px solid #f9ae39 !important; 
                border-radius: 6px !important; 
                font-weight: bold !important; 
                cursor: pointer !important; 
                font-size: 13px !important; 
                margin-top: 2px !important;
                text-transform: uppercase !important;
            }
            
            /* Reglas específicas y seguras para teléfonos móviles */
            @media (max-width: 480px) {
                #chatContainer {
                    width: calc(100vw - 30px) !important;
                    right: 15px !important;
                    bottom: 85px !important;
                    max-height: 82vh !important;
                }
                #chat-form input { height: 35px !important; padding: 6px 10px !important; }
                #chat-form textarea { height: 46px !important; }
                .adt-chat-form-wrapper { padding: 10px 12px; }
                #chatBody { padding: 12px; }
            }
        </style>

        <div class="adt-chat-system" role="complementary" style="z-index: 2147483647;">
            <div id="chatContainer" role="dialog" aria-label="Chat support">
                
                <!-- Encabezado -->
                <div class="adt-chat-header">
                    <div style="position: relative; width:35px; height:35px; font-size:12px; background:#f9ae39; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#223248; font-weight:bold; flex-shrink:0;">
                        ADT<span style="position: absolute; bottom: 0px; right: 0px; width: 10px; height: 10px; background: #28a745; border: 2px solid #223248; border-radius: 50%;"></span>
                    </div>
                    <div style="flex-grow:1; text-align:left; line-height: 1.2;">
                        <p style="margin:0; font-weight:bold; font-size:14px; color:white;">All Door Tech</p>
                        <small style="color:#f9ae39; font-size:11px;">Online Now</small>
                    </div>
                    <button onclick="window.toggleAdtChat()" style="background:none; border:none; color:white; font-size:24px; cursor:pointer; line-height:1; padding:0;">&times;</button>
                </div>

                <!-- Cuerpo del Chat -->
                <div id="chatBody">
                    <div class="chat-msg-bubble">
                        Hi! We are All Door Tech. How can we help you with your door project today?
                    </div>
                </div>

                <!-- Formulario -->
                <div class="adt-chat-form-wrapper">
                    <form id="chat-form">
                        <input type="text" name="first_name" placeholder="Your Name" required>
                        <input type="email" name="email" placeholder="Email Address" required>
                        <input type="tel" name="phone" placeholder="Phone Number" required>
                        <textarea name="message" placeholder="How can we help?" required></textarea>
                        
                        <div id="recaptcha-chat" style="transform: scale(0.78); transform-origin: 0 0; margin-bottom: 2px;"></div>
                        
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <!-- Botón flotante -->
            <button class="adt-chat-trigger" onclick="window.toggleAdtChat()" id="chatBtn" style="position: fixed; bottom: 20px; right: 20px; width: 60px; height: 60px; background: #223248; color: #f9ae39; border: 2px solid #f9ae39; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; z-index: 2147483647; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                <i class="bi bi-chat-fill"></i>
            </button>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', chatHTML);

        setTimeout(() => {
            if (window.grecaptcha && window.grecaptcha.render) {
                try {
                    grecaptcha.render('recaptcha-chat', { 'sitekey': RECAPTCHA_KEY, 'hl': 'en' });
                } catch(e) { console.log("Captcha ya listo"); }
            }
        }, 1500);
    }

    // --- B, C, D, E Se mantienen ---
    const menuCheckbox = document.getElementById('menu-toggle');
    if (menuCheckbox) {
        const overlay = document.createElement('label');
        overlay.className = 'header__overlay';
        overlay.setAttribute('for', 'menu-toggle');
        overlay.setAttribute('aria-hidden', 'true');
        menuCheckbox.insertAdjacentElement('afterend', overlay);
        menuCheckbox.addEventListener('change', () => { document.body.style.overflow = menuCheckbox.checked ? 'hidden' : ''; });
        document.querySelectorAll('.header__nav a').forEach(link => {
            link.addEventListener('click', () => { if(menuCheckbox.checked) menuCheckbox.click(); });
        });
    }

    const yearSpan = document.querySelector('[itemprop="copyrightYear"]');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const slides = document.querySelectorAll('.hero__slide');
    const dots = document.querySelectorAll('.indicator');
    if (slides.length > 0 && dots.length > 0) {
        let currentSlide = 0;
        const nextSlide = () => {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };
        let timer = setInterval(nextSlide, 5000);
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                clearInterval(timer);
                slides[currentSlide].classList.remove('active');
                dots[currentSlide].classList.remove('active');
                currentSlide = idx;
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
                timer = setInterval(nextSlide, 5000);
            });
        });
    }

    const animateElements = document.querySelectorAll('.animate-up');
    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animateElements.forEach(el => observer.observe(el));
    }

    // ======================================================
    // F. LÓGICA DE ENVÍO - SOLUCIÓN PARA DOBLE CAPTCHA
    // ======================================================
    const forms = [
        { id: 'chat-form', label: 'Chat Support' },
        { id: 'estimate-form', label: 'Estimate Request' },
        { id: 'service-form', label: 'Service Request' },
        { id: 'contact-form', label: 'Contact Form' },
        { id: 'feedback-form', label: 'Customer Feedback' }
    ];

    // ✅ Función mágica para buscar el Token correcto
    const getAnyCaptchaToken = () => {
        if (!window.grecaptcha) return null;
        try {
            // Intenta obtener el token del primer widget (0)
            let token = grecaptcha.getResponse(0);
            // Si está vacío, intenta con el segundo (1) por si el usuario usó el otro
            if (!token) token = grecaptcha.getResponse(1);
            return token;
        } catch (e) {
            // Si falla (ej. solo hay 1 widget), intenta el método estándar
            try { return grecaptcha.getResponse(); } catch (err) { return null; }
        }
    };

    forms.forEach(item => {
        const formEl = document.getElementById(item.id);
        if (formEl) {
            formEl.addEventListener('submit', function(e) {
                e.preventDefault();

                // 1. Obtener Token INTELIGENTE
                const captchaToken = getAnyCaptchaToken();

                // 2. Validación: Solo detenemos si es CHAT y no hay token.
                // Para el formulario de contacto, dejamos pasar aunque falle la validación local
                // para que EmailJS decida (así evitamos el bloqueo falso).
                if (item.id === 'chat-form') {
                    if (!captchaToken || captchaToken.length === 0) {
                        alert("Please verify that you are not a robot.");
                        return;
                    }
                }

                const btn = formEl.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                btn.style.opacity = '0.7';
                btn.disabled = true;

                const formData = new FormData(this);
                const templateParams = {
                    form_type: item.label,
                    first_name: formData.get('first_name'),
                    last_name: formData.get('last_name') || '',
                    email: formData.get('email'),
                    phone: formData.get('phone') || 'Not provided',
                    company_name: formData.get('company') || '',
                    address: formData.get('address') || '',
                    city: formData.get('city') || '',
                    zip_code: formData.get('zip_code') || '',
                    subject: formData.get('subject') || '',
                    find_us: formData.get('source') || '',
                    message: formData.get('message') || formData.get('feedback') || '',
                    'g-recaptcha-response': captchaToken // Enviamos lo que encontramos
                };

                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
                    .then(() => {
                        if(item.id === 'chat-form') {
                            const chatBody = document.getElementById('chatBody');
                            chatBody.innerHTML += `<div style="background:#223248; color:white; padding:10px; border-radius:10px; font-size:13px; margin-bottom:10px; align-self:flex-end; text-align:right;">Message sent! We'll contact you soon.</div>`;
                            chatBody.scrollTop = chatBody.scrollHeight;
                            formEl.reset();
                            try { grecaptcha.reset(); } catch(e){}
                            btn.innerText = originalText;
                        } else {
                            btn.innerText = 'SENT!';
                            btn.style.backgroundColor = '#28a745';
                            btn.style.color = 'white';
                            formEl.reset();
                            try { grecaptcha.reset(); } catch(e){}
                            setTimeout(() => {
                                btn.innerText = originalText;
                                btn.style.backgroundColor = '';
                                btn.style.color = '';
                            }, 3000);
                        }
                        btn.style.opacity = '1';
                        btn.disabled = false;
                    })
                    .catch((err) => {
                        console.error('FAILED...', err);
                        alert("Error: " + (err.text || "Check console")); 
                        btn.innerText = originalText;
                        btn.style.opacity = '1';
                        btn.disabled = false;
                    });
            });
        }
    });
});

// G. LIGHTBOX (Galería)
const initLightbox = () => {
    if (document.getElementById('adt-lightbox')) return;
    const lb = document.createElement('div');
    lb.id = 'adt-lightbox';
    Object.assign(lb.style, {
        display: 'none', position: 'fixed', zIndex: '100000',
        top: '0', left: '0', width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.95)', justifyContent: 'center',
        alignItems: 'center', cursor: 'pointer'
    });
    lb.innerHTML = `
        <button id="lb-prev" style="position:absolute; left:20px; background:none; border:none; color:white; font-size:50px; cursor:pointer; z-index:100001;">&#10094;</button>
        <img id="adt-lightbox-img" src="" style="max-width:85%; max-height:80vh; border:3px solid #f9ae39; border-radius:12px; transition: transform 0.3s; cursor:default;">
        <button id="lb-next" style="position:absolute; right:20px; background:none; border:none; color:white; font-size:50px; cursor:pointer; z-index:100001;">&#10095;</button>
        <span style="position:absolute; top:20px; right:30px; color:white; font-size:40px; cursor:pointer;">&times;</span>
    `;
    document.body.appendChild(lb);
    const imgEl = document.getElementById('adt-lightbox-img');
    let images = [], currentIndex = 0;
    const updateImage = (idx) => {
        if (idx < 0) idx = images.length - 1;
        if (idx >= images.length) idx = 0;
        currentIndex = idx;
        imgEl.src = images[currentIndex];
    };
    document.addEventListener('click', (e) => {
        const clickedImg = e.target.closest('.adt-gallery-item img');
        if (clickedImg) {
            images = Array.from(document.querySelectorAll('.adt-gallery-item img')).map(img => img.src);
            currentIndex = images.indexOf(clickedImg.src);
            updateImage(currentIndex);
            lb.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
    document.getElementById('lb-prev').onclick = (e) => { e.stopPropagation(); updateImage(currentIndex - 1); };
    document.getElementById('lb-next').onclick = (e) => { e.stopPropagation(); updateImage(currentIndex + 1); };
    lb.onclick = () => { lb.style.display = 'none'; document.body.style.overflow = ''; };
    document.addEventListener('keydown', (e) => {
        if (lb.style.display === 'flex') {
            if (e.key === "ArrowRight") updateImage(currentIndex + 1);
            if (e.key === "ArrowLeft") updateImage(currentIndex - 1);
            if (e.key === "Escape") lb.click();
        }
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
} else {
    initLightbox();
}

// ======================================================
// LÓGICA DE BOTÓN "VIEW MORE" PARA LA GALERÍA
// ======================================================
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Busca todas las fotos que actualmente están ocultas
            const hiddenItems = document.querySelectorAll('.gallery-item.d-none');
            
            // Mostrar 8 fotos nuevas con cada clic
            const itemsToShow = 8;
            
            for (let i = 0; i < itemsToShow && i < hiddenItems.length; i++) {
                hiddenItems[i].classList.remove('d-none');
                // Efecto de aparición suave (opcional)
                hiddenItems[i].style.opacity = 0;
                setTimeout(() => {
                    hiddenItems[i].style.transition = "opacity 0.5s ease";
                    hiddenItems[i].style.opacity = 1;
                }, 50);
            }
            
            // Si ya no quedan fotos ocultas, esconder el botón
            const remainingHidden = document.querySelectorAll('.gallery-item.d-none').length;
            if (remainingHidden === 0) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
});

// --- SISTEMA AUTOMÁTICO DE COOKIES ---
document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        
        // --- 🎨 CONFIGURACIÓN DE COLORES ---
        const colorPrimario = "#F5B041"; // Tu amarillo/dorado
        const colorFondo = "#1a2533";
        const colorTextoBoton = "#1a2533"; 
        // -----------------------------------

        const banner = document.createElement('div');
        // Le cambiamos el ID general para que no choque con nada viejo
        banner.id = 'cookie-banner-dinamico'; 
        
        banner.style.cssText = `position: fixed; bottom: 20px; left: 20px; width: calc(100% - 40px); max-width: 450px; background: ${colorFondo}; color: white; padding: 18px 24px; border-radius: 8px; z-index: 9999; box-shadow: 0 4px 20px rgba(0,0,0,0.4); border: 1px solid ${colorPrimario}; display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: "Montserrat", sans-serif;`;
        
        // Usamos una CLASE en el botón en lugar de un ID
        banner.innerHTML = `
            <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: rgba(255,255,255,0.9);">
                We use cookies to ensure you get the best experience on our website. By continuing to browse, you agree to our use of cookies.
            </p>
            <button class="btn-accept-cookies" style="background: ${colorPrimario}; color: ${colorTextoBoton}; border: none; padding: 8px 18px; border-radius: 4px; cursor: pointer; font-weight: 700; font-size: 0.9rem; white-space: nowrap; transition: opacity 0.3s ease;">
                Accept
            </button>
        `;
        
        document.body.appendChild(banner);
        
        // Buscamos el botón ESTRICTAMENTE adentro del banner que acabamos de crear
        const btn = banner.querySelector('.btn-accept-cookies');
        
        // Efecto hover
        btn.addEventListener('mouseover', () => btn.style.opacity = '0.8');
        btn.addEventListener('mouseout', () => btn.style.opacity = '1');

        // Cerrar y guardar preferencia
        btn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            banner.remove(); 
        });
    }
});
