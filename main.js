const siteData = {
    nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Service" },
    { href: "/contact", label: "Contact" }
    ],
    faqs: [
        { q: "Which platform is best for my business website?", a: "Webflow is best for modern marketing websites, WordPress is strong for content-heavy websites, Shopify is ideal for eCommerce, Wix works well for simple business sites, and custom development is best for advanced functionality." },
        { q: "Can you handle both design and development?", a: "Yes. We handle strategy, UI/UX, development, testing, analytics setup, launch, and post-launch support." },
        { q: "Do you set up analytics and tracking?", a: "Yes. We configure GA4, Google Tag Manager, event tracking, form tracking, button clicks, and conversion goals." },
        { q: "Can you redesign my existing website?", a: "Yes. We improve design, user experience, speed, mobile responsiveness, conversion flow, and technical structure." }
    ],
    footer: {
        industries: ["Fintech", "e-Commerce", "Pharma", "Education", "Telecom", "Retail", "Real Estate", "Automotive", "Software/ITES", "Startup"],
        company: [
            { href: "/about", label: "About Us" },
            { href: "/projects", label: "Case Studies" },
            { href: "/team", label: "Team" },
            { href: "/contact", label: "Contact" },
            { href: "/terms", label: "Terms" }
        ],
        resources: [
            { href: "/", label: "Certifications & Awards" },
            { href: "/", label: "Partners" },
            { href: "/", label: "Enterprise-Grade Security" },
            { href: "/", label: "Sustainability" },
            { href: "/privacy", label: "Privacy Policy"}
        ]
    }
};

function currentPage() {
    const page = window.location.pathname.split("/").pop();
    return page || "index.html";
}

function isActive(href) {
    return currentPage() === href ? "active" : "";
}

function renderNavbar() {
    document.querySelectorAll('[data-component="navbar"]').forEach((mount) => {
        const desktopLinks = siteData.nav.map(item => `<a class="${isActive(item.href)}" href="${item.href}">${item.label}</a>`).join("");
        const mobileLinks = [...siteData.nav, { href: "/terms", label: "Terms & Conditions" }, { href: "/privacy", label: "Privacy Policy" }]
            .map(item => `<a class="${isActive(item.href)}" href="${item.href}">${item.label}</a>`).join("");

        mount.innerHTML = `
      <header class="navbar">
        <div class="container">
          <div class="nav-inner">
            <a class="nav-logo" href="/" aria-label="webfliq home">
                <img src="assets/webfiq-logo2-01.png" alt="webfliq logo icon">
            </a>
            <nav class="nav-links" aria-label="Main navigation">${desktopLinks}</nav>
            <div class="nav-actions">
              <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle light and dark mode">☀</button>
              <a class="btn btn-primary" href="/contact">Start Project <img class="btn-icon" src="assets/next-arrow-light.svg" alt=""></a>
              <button class="menu-btn" type="button" data-menu-btn aria-label="Toggle menu">☰</button>
            </div>
          </div>
          <nav class="mobile-menu" data-mobile-menu aria-label="Mobile navigation">${mobileLinks}</nav>
        </div>
      </header>`;
    });
}

function renderFooter() {
    document.querySelectorAll('[data-component="footer"]').forEach((mount) => {
        const industries = siteData.footer.industries.map(item => `<a href="#">${item}</a>`).join("");
        const company = siteData.footer.company.map(item => `<a class="${isActive(item.href)}" href="${item.href}">${item.label}</a>`).join("");
        const resources = siteData.footer.resources.map(item => `<a class="${isActive(item.href)}" href="${item.href}">${item.label}</a>`).join("");

        mount.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a class="nav-logo" href="/" aria-label="webfliq home">
                <img src="assets/webfiq-logo2-01.png" alt="webfliq logo icon">
            </a>
              <p>Premium web agency specializing in modern websites, eCommerce, UI/UX, analytics, and scalable web development for startups and growing brands.</p>
              <div class="footer-socials">
                <a class="footer-social" href="#"><img src="assets/facebook-light.png" alt="Facebook"></a>
                <a class="footer-social" href="#"><img src="assets/linkedin-white.png" alt="LinkedIn"></a>
                <a class="footer-social" href="#"><img src="assets/youtube.png" alt="YouTube"></a>
              </div>
            </div>
            <div><div class="footer-title">Industries</div><div class="footer-links">${industries}</div></div>
            <div><div class="footer-title">Company</div><div class="footer-col-links">${company}</div></div>
            <div><div class="footer-title">Resources</div><div class="footer-col-links">${resources}</div></div>
          </div>
          <div class="footer-bottom">© 2026 webfliq. All rights reserved.</div>
        </div>
      </footer>`;
    });
}

function renderFaq() {
    document.querySelectorAll('[data-component="faq"]').forEach((mount) => {
        const items = siteData.faqs.map(item => `
      <div class="faq-item">
        <button class="faq-question" type="button">${item.q}<span class="faq-toggle">+</span></button>
        <div class="faq-answer"><div class="faq-answer-inner"><p>${item.a}</p></div></div>
      </div>`).join("");

        mount.innerHTML = `
      <section class="section-gradient">
        <div class="container faq-layout" data-faq>
          <div class="reveal reveal-left">
            <span class="eyebrow">FAQ</span>
            <h2>Answers before we start.</h2>
            <p>Only one question opens at a time, with smooth open and close animation.</p>
          </div>
          <div class="faq-list reveal reveal-right">${items}</div>
        </div>
      </section>`;
    });
}

function initTheme() {

    const html = document.documentElement;

    const savedTheme =
        localStorage.getItem("theme") || "dark";

    html.setAttribute("data-theme", savedTheme);

    document
        .querySelectorAll("[data-theme-toggle]")
        .forEach(button => {

            // INITIAL ICON
            button.innerHTML =
                savedTheme === "dark"
                    ? `
                    <img
                      src="assets/moon.png"
                      alt="Light mode icon"
                    >
                    `
                    : `
                    <img
                      src="assets/sun.png"
                      alt="Dark mode icon"
                    >
                    `;

            button.addEventListener("click", () => {

                const nextTheme =
                    html.getAttribute("data-theme") === "dark"
                        ? "light"
                        : "dark";

                html.setAttribute("data-theme", nextTheme);

                localStorage.setItem(
                    "theme",
                    nextTheme
                );

                // UPDATE ICON
                document
                    .querySelectorAll("[data-theme-toggle]")
                    .forEach(btn => {

                        btn.innerHTML =
                            nextTheme === "dark"
                                ? `
                                <img
                                  src="assets/moon.png"
                                  alt="Light mode icon"
                                >
                                `
                                : `
                                <img
                                  src="assets/sun.png"
                                  alt="Dark mode icon"
                                >
                                `;
                    });
            });
        });
}


function initMenu() {
    const menuBtn = document.querySelector("[data-menu-btn]");
    const mobileMenu = document.querySelector("[data-mobile-menu]");
    if (!menuBtn || !mobileMenu) return;
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
        menuBtn.textContent = mobileMenu.classList.contains("show") ? "×" : "☰";
    });
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("show");
            menuBtn.textContent = "☰";
        });
    });
}

function initReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("active");
        });
    }, { threshold: 0.14 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function initCounters() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || entry.target.dataset.counted === "true") return;
            const el = entry.target;
            const target = Number(el.dataset.count);
            const suffix = el.dataset.suffix || "";
            const duration = 1500;
            const startTime = performance.now();
            el.dataset.counted = "true";
            function update(now) {
                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * eased) + suffix;
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-count]").forEach(counter => observer.observe(counter));
}

function initProcessLoop() {
    const section = document.querySelector("[data-process-section]");
    if (!section) return;
    let timer = null;
    let index = 0;
    function stop() {
        clearInterval(timer);
        timer = null;
        document.querySelectorAll(".process-number").forEach(item => item.classList.remove("active"));
    }
    function start() {
        const numbers = document.querySelectorAll(".process-number");
        if (!numbers.length || timer) return;
        section.classList.add("in-view");
        function highlight() {
            numbers.forEach(item => item.classList.remove("active"));
            numbers[index].classList.add("active");
            index = (index + 1) % numbers.length;
        }
        highlight();
        timer = setInterval(highlight, 1300);
    }
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) start();
            else { section.classList.remove("in-view"); stop(); }
        });
    }, { threshold: 0.35 }).observe(section);
}

function initFaq() {
    document.querySelectorAll("[data-faq]").forEach(root => {
        const items = root.querySelectorAll(".faq-item");
        items.forEach((item, index) => {
            const question = item.querySelector(".faq-question");
            const answer = item.querySelector(".faq-answer");
            if (index === 0) {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                items.forEach(other => {
                    other.classList.remove("active");
                    other.querySelector(".faq-answer").style.maxHeight = null;
                });
                if (!isActive) {
                    item.classList.add("active");
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    });
}

function initProjects() {
    const root = document.querySelector("[data-project-root]");
    if (!root) return;
    const filterButtons = root.querySelectorAll("[data-filter]");
    const cards = Array.from(root.querySelectorAll(".project-card"));
    const pagination = root.querySelector("[data-pagination]");
    const prevBtn = root.querySelector("[data-prev]");
    const nextBtn = root.querySelector("[data-next]");
    const pageNumbers = root.querySelector("[data-page-numbers]");
    const perPage = Number(root.dataset.perPage || 8);
    let currentFilter = "All";
    let currentPage = 1;

    function filteredCards() {
        return cards.filter(card => currentFilter === "All" || card.dataset.category === currentFilter);
    }
    function render() {
        const filtered = filteredCards();
        const totalPages = Math.ceil(filtered.length / perPage) || 1;
        currentPage = Math.min(currentPage, totalPages);
        cards.forEach(card => card.style.display = "none");
        filtered.slice((currentPage - 1) * perPage, currentPage * perPage).forEach(card => card.style.display = "block");
        pagination.classList.toggle("show", filtered.length > perPage);
        prevBtn.classList.toggle("disabled", currentPage === 1);
        nextBtn.classList.toggle("disabled", currentPage === totalPages);
        pageNumbers.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "page-number" + (i === currentPage ? " active" : "");
            btn.textContent = i;
            btn.addEventListener("click", () => { currentPage = i; render(); });
            pageNumbers.appendChild(btn);
        }
    }
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentFilter = button.dataset.filter;
            currentPage = 1;
            filterButtons.forEach(item => item.classList.remove("active"));
            button.classList.add("active");
            render();
        });
    });
    prevBtn.addEventListener("click", () => { if (currentPage > 1) { currentPage--; render(); } });
    nextBtn.addEventListener("click", () => { if (currentPage < Math.ceil(filteredCards().length / perPage)) { currentPage++; render(); } });
    render();
}

function initForms() {
    document.querySelectorAll("[data-contact-form]").forEach(form => {
        form.addEventListener("submit", async event => {
            event.preventDefault();

            const fields = {
                name: form.querySelector("[name='name']"),
                email: form.querySelector("[name='email']"),
                phone: form.querySelector("[name='phone']"),
                budget: form.querySelector("[name='budget']"),
                service: form.querySelector("[name='service']"),
                message: form.querySelector("[name='message']")
            };

            const emailPattern = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
            const phonePattern = new RegExp("^\\+?[0-9\\s-]{7,18}$");
            const budgetPattern = new RegExp("^[0-9\\s$€£৳,.-]{1,30}$");
            let valid = true;
            const success = form.querySelector("[data-success]");

            form.querySelectorAll(".error").forEach(item => item.textContent = "");
            if (success) success.classList.remove("show");

            function error(field, text) {
                valid = false;
                const errorEl = form.querySelector(`[data-error='${field.name}']`);
                if (errorEl) errorEl.textContent = text;
            }

            if (!fields.name.value.trim()) error(fields.name, "Please enter your name.");
            if (!emailPattern.test(fields.email.value.trim())) error(fields.email, "Please enter a valid email address.");
            if (!phonePattern.test(fields.phone.value.trim())) error(fields.phone, "Please enter a valid phone number.");
            if (!budgetPattern.test(fields.budget.value.trim())) error(fields.budget, "Budget must contain numbers only, like 500 or 500-1500.");
            if (!fields.service.value.trim()) error(fields.service, "Please select a service.");
            if (fields.message.value.trim().length < 12) error(fields.message, "Please share at least 12 characters.");
            if (!valid) return;

            try {
                const formData = new FormData(form);
                const encodedData = new URLSearchParams(formData).toString();

                const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encodedData
                });

                if (response.ok) {
                    form.reset();
                    if (success) {
                        success.textContent = "Thanks! Your message has been saved successfully.";
                        success.classList.add("show");
                    }
                } else {
                    throw new Error("Netlify form submission failed");
                }
            } catch (err) {
                if (success) {
                    success.textContent = "Submission failed. Please try again or email us directly.";
                    success.classList.add("show");
                }
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();
    renderFaq();
    initTheme();
    initMenu();
    initReveal();
    initCounters();
    initProcessLoop();
    initFaq();
    initProjects();
});