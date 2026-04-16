tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#8B1042', /* Darker Rose */
            secondary: '#1D0B24', /* Very Dark Purple */
            tertiary: '#FFFFFF',
            accent: '#B8155A' /* Brighter Rose for hover states and accents */
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['"Lexend"', 'sans-serif'],
          }
        }
      }
    }

const CONTENT = {
      pt: {
        code: "PT", label: "Português",
        nav: { about: "Agência", services: "Serviços", team: "Equipa", contacts: "Contactos", cta: "Contactar" },
        hero: { tag: "Tradução & Interpretação", static: "A sua voz em qualquer", word: "Idioma.", sub: "Precisão linguística para negócios sem fronteiras. A ponte entre Braga e o mundo.", cta1: "Pedir Orçamento", cta2: "Localização" },
        clients: "Marcas que confiam na Inovtrad",
        about: { over: "Sobre Nós", title: "Excelência em Braga para o Mundo.", desc: ["No setor B2B, a tradução é baseada 100% na confiança. Garantimos segurança jurídica e técnica."], s1: "Anos Exp.", s2: "Idiomas" },
        services: { over: "Soluções", title: "Áreas de Atuação", items: [
          {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"Tradução Técnica", d:"Manuais, especificações e documentação de software."},
          {img: "./images/photo-1614605844432-731c32334c49.avif", t:"Tradução Certificada", d:"Documentos oficiais e jurídicos com valor legal."},
          {img: "./images/photo-1562564055-71e051d33c19.avif", t:"Eventos e Formações", d:"Apoio linguístico para reuniões, conferências e eventos."}
        ] },
        team: { over: "Profissionais", title: "A Nossa Equipa", intro: "Especialistas focados em rigor e precisão.", members: [{n:"Andreia Cunha Silva",r:"Diretora Técnica"},{n:"Igor Pedro<br>Gil",r:"Gestor de Projetos"},{n:"Ana Carolina Gomes",r:"Tradução Jurídica"}] },
        contacts: { title: "Expandir fronteiras?", sub: "Orçamento em menos de 2 horas.", address: "Morada", email: "E-mail", phone: "Telefone", formTitle: "Contacte-nos", formSub: "Venha visitar o nosso escritório ou envie uma mensagem.", submitBtn: "Enviar Mensagem" },
        footer: "© 2026 Inovtrad. Todos os direitos reservados."
      },
      en: {
        code: "EN", label: "English",
        nav: { about: "Agency", services: "Services", team: "Team", contacts: "Contact", cta: "Contact" },
        hero: { tag: "Translation & Interpretation", static: "Your voice in any", word: "Language.", sub: "Linguistic precision for borderless business. Braga's bridge to the world.", cta1: "Get a Quote", cta2: "Location" },
        clients: "Brands that trust Inovtrad",
        about: { over: "About Us", title: "Excellence from Braga to the World.", desc: ["B2B translation is 100% about trust. We ensure legal and technical security."], s1: "Years Exp.", s2: "Languages" },
        services: { over: "Solutions", title: "Our Services", items: [
          {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"Technical Translation", d:"Manuals, specifications, and software documentation."},
          {img: "./images/photo-1614605844432-731c32334c49.avif", t:"Certified Translation", d:"Legal and official documents with validity."},
          {img: "./images/photo-1562564055-71e051d33c19.avif", t:"Events & Training", d:"Linguistic support for meetings and events."}
        ] },
        team: { over: "Professionals", title: "Our Team", intro: "Specialists focused on rigor and precision.", members: [{n:"Andreia Cunha Silva",r:"Technical Director"},{n:"Igor Pedro<br>Gil",r:"Project Manager"},{n:"Ana Carolina Gomes",r:"Legal Translation"}] },
        contacts: { title: "Expanding borders?", sub: "Quote in under 2 hours.", address: "Address", email: "Email", phone: "Phone", formTitle: "Contact Us", formSub: "Visit our office or send us a message.", submitBtn: "Send Message" },
        footer: "© 2026 Inovtrad. All rights reserved."
      },
      es: { code: "ES", label: "Español", nav: { about: "Agencia", services: "Servicios", team: "Equipo", contacts: "Contacto", cta: "Contacto" }, hero: { tag: "Traducción", static: "Tu voz en cualquier", word: "Idioma.", sub: "Precisión para negocios.", cta1: "Presupuesto", cta2: "Ubicación" }, clients: "Marcas de confianza", about: { over: "Nosotros", title: "Excelencia desde Braga.", desc: ["Traducción B2B basada en confianza."], s1: "Años Exp.", s2: "Idiomas" }, services: { over: "Soluciones", title: "Servicios", items: [
        {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"Traducción Técnica", d:"Manuales y especificaciones."},
        {img: "./images/photo-1614605844432-731c32334c49.avif", t:"Traducción Certificada", d:"Documentos legales y oficiales."},
        {img: "./images/photo-1562564055-71e051d33c19.avif", t:"Eventos y Formaciones", d:"Apoyo para reuniones y eventos."}
      ] }, team: { over: "Profesionales", title: "Nuestro Equipo", intro: "Especialistas en rigor.", members: [{n:"Andreia Cunha Silva",r:"Directora"},{n:"Igor Pedro<br>Gil",r:"Gestor"},{n:"Ana Carolina Gomes",r:"Traducción"}] }, contacts: { title: "¿Desea expandir?", sub: "Presupuesto en 2h.", address: "Dirección", email: "Email", phone: "Teléfono", formTitle: "Contáctenos", formSub: "Visítenos o envíe un mensaje.", submitBtn: "Enviar Mensaje" }, footer: "© 2026 Inovtrad." },
      fr: { code: "FR", label: "Français", nav: { about: "Agence", services: "Services", team: "Équipe", contacts: "Contact", cta: "Contact" }, hero: { tag: "Traduction", static: "Votre voix dans toute", word: "Langue.", sub: "Précision pour les affaires.", cta1: "Devis", cta2: "Emplacement" }, clients: "Marques de confiance", about: { over: "À Propos", title: "L'excellence de Braga.", desc: ["Traduction B2B basée sur la confiance."], s1: "Années Exp.", s2: "Langues" }, services: { over: "Solutions", title: "Services", items: [
        {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"Traduction Technique", d:"Manuels et spécifications."},
        {img: "./images/photo-1614605844432-731c32334c49.avif", t:"Traduction Assermentée", d:"Documents officiels et juridiques."},
        {img: "./images/photo-1562564055-71e051d33c19.avif", t:"Événements et Formations", d:"Soutien pour réunions et événements."}
      ] }, team: { over: "Professionnels", title: "Notre Équipe", intro: "Spécialistes rigoureux.", members: [{n:"Andreia Cunha Silva",r:"Directrice"},{n:"Igor Pedro<br>Gil",r:"Chef de Projet"},{n:"Ana Carolina Gomes",r:"Traduction"}] }, contacts: { title: "Prêt à croître?", sub: "Devis en 2h.", address: "Adresse", email: "Email", phone: "Téléphone", formTitle: "Contactez-nous", formSub: "Visitez-nous ou envoyez un message.", submitBtn: "Envoyer Message" }, footer: "© 2026 Inovtrad." },
      it: { code: "IT", label: "Italiano", nav: { about: "Agenzia", services: "Servizi", team: "Team", contacts: "Contatti", cta: "Contatto" }, hero: { tag: "Traduzione", static: "La tua voce in ogni", word: "Lingua.", sub: "Precisione linguistica.", cta1: "Preventivo", cta2: "Posizione" }, clients: "Marchi di fiducia", about: { over: "Chi Siamo", title: "Eccellenza da Braga.", desc: ["Traduzione B2B di fiducia."], s1: "Anni Esp.", s2: "Lingue" }, services: { over: "Soluzioni", title: "Servizi", items: [
        {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"Traduzione Tecnica", d:"Manuali e specifiche."},
        {img: "./images/photo-1614605844432-731c32334c49.avif", t:"Traduzione Giurata", d:"Documenti legali e ufficiali."},
        {img: "./images/photo-1562564055-71e051d33c19.avif", t:"Eventi e Formazioni", d:"Supporto per riunioni ed eventi."}
      ] }, team: { over: "Professionisti", title: "Il Nostro Team", intro: "Esperti in rigore.", members: [{n:"Andreia Cunha Silva",r:"Direttrice"},{n:"Igor Pedro<br>Gil",r:"Manager"},{n:"Ana Carolina Gomes",r:"Traduzione"}] }, contacts: { title: "Vuoi espanderti?", sub: "Preventivo in 2h.", address: "Indirizzo", email: "Email", phone: "Telefono", formTitle: "Contattaci", formSub: "Vieni a trovarci o invia un messaggio.", submitBtn: "Invia Messaggio" }, footer: "© 2026 Inovtrad." },
      de: { code: "DE", label: "Deutsch", nav: { about: "Agentur", services: "Dienste", team: "Team", contacts: "Kontakt", cta: "Kontakt" }, hero: { tag: "Übersetzung", static: "Ihre Stimme in jeder", word: "Sprache.", sub: "Sprachliche Präzision.", cta1: "Angebot", cta2: "Standort" }, clients: "Vertrauen Marken", about: { over: "Über Uns", title: "Exzellenz aus Braga.", desc: ["Vertrauenswürdige B2B-Übersetzung."], s1: "Jahre Erf.", s2: "Sprachen" }, services: { over: "Lösungen", title: "Dienste", items: [
        {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"Technische Übersetzung", d:"Handbücher und Spezifikationen."},
        {img: "./images/photo-1614605844432-731c32334c49.avif", t:"Beglaubigte Übersetzung", d:"Rechtliche und offizielle Dokumente."},
        {img: "./images/photo-1562564055-71e051d33c19.avif", t:"Events & Schulungen", d:"Unterstützung für Meetings und Events."}
      ] }, team: { over: "Profis", title: "Unser Team", intro: "Spezialisten für Präzision.", members: [{n:"Andreia Cunha Silva",r:"Direktorin"},{n:"Igor Pedro<br>Gil",r:"Manager"},{n:"Ana Carolina Gomes",r:"Übersetzung"}] }, contacts: { title: "Bereit zu wachsen?", sub: "Angebot in 2h.", address: "Adresse", email: "E-Mail", phone: "Telefon", formTitle: "Kontakt", formSub: "Besuchen Sie uns oder senden Sie eine Nachricht.", submitBtn: "Nachricht senden" }, footer: "© 2026 Inovtrad." },
      nl: { code: "NL", label: "Nederlands", nav: { about: "Bureau", services: "Diensten", team: "Team", contacts: "Contact", cta: "Contact" }, hero: { tag: "Vertaling", static: "Uw stem in elke", word: "Taal.", sub: "Taalkundige precisie.", cta1: "Offerte", cta2: "Locatie" }, clients: "Vertrouwde merken", about: { over: "Over Ons", title: "Uitmuntendheid in Braga.", desc: ["B2B vertaling op basis van vertrouwen."], s1: "Jaren Erv.", s2: "Talen" }, services: { over: "Expertise", title: "Diensten", items: [
        {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"Technische Vertaling", d:"Handleidingen en specificaties."},
        {img: "./images/photo-1614605844432-731c32334c49.avif", t:"Beëdigde Vertaling", d:"Juridische en officiële documenten."},
        {img: "./images/photo-1562564055-71e051d33c19.avif", t:"Evenementen & Training", d:"Ondersteuning voor vergaderingen en evenementen."}
      ] }, team: { over: "Professionals", title: "Ons Team", intro: "Specialisten in precisie.", members: [{n:"Andreia Cunha Silva",r:"Directeur"},{n:"Igor Pedro<br>Gil",r:"Manager"},{n:"Ana Carolina Gomes",r:"Vertaling"}] }, contacts: { title: "Klaar om te groeien?", sub: "Offerte in 2 uur.", address: "Adres", email: "E-mail", phone: "Telefoon", formTitle: "Neem Contact Op", formSub: "Bezoek ons kantoor of stuur een bericht.", submitBtn: "Verstuur Bericht" }, footer: "© 2026 Inovtrad." },
      ru: { code: "RU", label: "Русский", nav: { about: "Агентство", services: "Услуги", team: "Команда", contacts: "Контакты", cta: "Контакт" }, hero: { tag: "Перевод", static: "Ваш голос на любом", word: "Языке.", sub: "Языковая точность.", cta1: "Оценка", cta2: "Местоположение" }, clients: "Нам доверяют", about: { over: "О нас", title: "Мост в мир.", desc: ["Точный B2B перевод."], s1: "Лет Опыта", s2: "Языки" }, services: { over: "Услуги", title: "Направления", items: [
        {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"Технический перевод", d:"Руководства и спецификации."},
        {img: "./images/photo-1614605844432-731c32334c49.avif", t:"Заверенный перевод", d:"Юридические и официальные документы."},
        {img: "./images/photo-1562564055-71e051d33c19.avif", t:"Мероприятия и тренинги", d:"Поддержка встреч и мероприятий."}
      ] }, team: { over: "Команда", title: "Руководство", intro: "Профессионалы.", members: [{n:"Андрейя Кунья Сильва",r:"Директор"},{n:"Игорь Педро Гил",r:"Менеджер"},{n:"Ана Каролина Гомес",r:"Переводчик"}] }, contacts: { title: "Готовы к росту?", sub: "Оценка за 2ч.", address: "Адрес", email: "Email", phone: "Телефон", formTitle: "Свяжитесь с нами", formSub: "Посетите нас или отправьте сообщение.", submitBtn: "Отправить сообщение" }, footer: "© 2026 Inovtrad." },
      zh: { code: "ZH", label: "中文", nav: { about: "关于", services: "服务", team: "团队", contacts: "联系", cta: "联系" }, hero: { tag: "翻译与口译", static: "让您的声音传达任何", word: "语言.", sub: "精准语言服务.", cta1: "获取报价", cta2: "位置" }, clients: "信任品牌", about: { over: "关于我们", title: "通向世界的桥梁.", desc: ["精准B2B翻译."], s1: "年经验", s2: "语言" }, services: { over: "服务", title: "核心领域", items: [
        {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"技术翻译", d:"手册和规格."},
        {img: "./images/photo-1614605844432-731c32334c49.avif", t:"认证翻译", d:"法律和官方文件."},
        {img: "./images/photo-1562564055-71e051d33c19.avif", t:"活动与培训", d:"支持会议和活动."}
      ] }, team: { over: "团队", title: "领导层", intro: "专业人士.", members: [{n:"Andreia Cunha Silva",r:"技术总监"},{n:"Igor Pedro<br>Gil",r:"项目经理"},{n:"Ana Carolina Gomes",r:"法律翻译"}] }, contacts: { title: "准备扩展?", sub: "2小时内报价.", address: "地址", email: "邮箱", phone: "电话", formTitle: "联系我们", formSub: "访问我们的办公室或发送消息.", submitBtn: "发送消息" }, footer: "© 2026 Inovtrad." },
      ar: { code: "AR", label: "العربية", nav: { about: "وكالة", services: "خدمات", team: "فريق", contacts: "اتصال", cta: "اتصال" }, hero: { tag: "ترجمة", static: "صوتك بأي", word: "لغة.", sub: "دقة لغوية.", cta1: "تسعير", cta2: "موقع" }, clients: "شركاؤنا", about: { over: "معلومات عنا", title: "الجسر إلى العالم.", desc: ["ترجمة B2B دقيقة."], s1: "سنوات خبرة", s2: "لغات" }, services: { over: "خبراتنا", title: "خدماتنا", items: [
        {img: "./images/photo-1515378960530-7c0da6231fb1.avif", t:"ترجمة تقنية", d:"الكتيبات والمواصفات."},
        {img: "./images/photo-1614605844432-731c32334c49.avif", t:"ترجمة معتمدة", d:"المستندات القانونية والرسمية."},
        {img: "./images/photo-1562564055-71e051d33c19.avif", t:"الفعاليات والتدريب", d:"دعم الاجتماعات والفعاليات."}
      ] }, team: { over: "الفريق", title: "قيادتنا", intro: "محترفون متخصصون.", members: [{n:"Andreia Cunha Silva",r:"المديرة التقنية"},{n:"Igor Pedro<br>Gil",r:"مدير المشاريع"},{n:"Ana Carolina Gomes",r:"الترجمة القانونية"}] }, contacts: { title: "جاهز للتوسع؟", sub: "تسعير في ساعتين.", address: "عنوان", email: "بريد", phone: "هاتف", formTitle: "اتصل بنا", formSub: "قم بزيارة مكتبنا أو أرسل رسالة.", submitBtn: "إرسال رسالة" }, footer: "© 2026 Inovtrad." }
    };

    let currentLang = "pt";
    const CLIENT_LOGOS = [
      "./images/HUND-digital-agency-logo.png",
      "./images/investbraga.png",
      "./images/Chamberlain.png",
      "./images/Zippy_.png",
      "./images/AKI_.png"
    ];

    function updateLanguage(code) {
      currentLang = code;
      const d = CONTENT[code];
      document.body.dir = code === 'ar' ? 'rtl' : 'ltr';
      document.getElementById('active-lang').textContent = d.code;
      
      const navHtml = `
        <li><a href="#about" class="nav-link">${d.nav.about}</a></li>
        <li><a href="#services" class="nav-link">${d.nav.services}</a></li>
        <li><a href="#team-sec" class="nav-link">${d.nav.team}</a></li>
        <li><a href="#contacts" class="nav-link">${d.nav.contacts}</a></li>
      `;
      document.getElementById('nav-list').innerHTML = navHtml;
      document.getElementById('mobile-nav-list').innerHTML = navHtml;
      document.getElementById('cta-nav-text').textContent = d.nav.cta;
      document.getElementById('cta-mobile-text').textContent = d.nav.cta;

      document.getElementById('hero-tag').textContent = d.hero.tag;
      document.getElementById('hero-static').textContent = d.hero.static;
      document.getElementById('hero-sub').textContent = d.hero.sub;
      document.getElementById('hero-cta-1').textContent = d.hero.cta1;
      document.getElementById('hero-cta-2').textContent = d.hero.cta2;
      document.getElementById('clients-overline').textContent = d.clients;
      document.getElementById('about-mini').textContent = d.about.over;
      document.getElementById('about-intro').textContent = d.about.title;
      document.getElementById('about-desc').innerHTML = d.about.desc.map(p => `<p>${p}</p>`).join('');
      document.getElementById('stat-1-label').textContent = d.about.s1;
      document.getElementById('stat-2-label').textContent = d.about.s2;

      document.getElementById('services-overline').textContent = d.services.over;
      document.getElementById('services-title').textContent = d.services.title;
      
      document.getElementById('services-grid').innerHTML = d.services.items.map(s => `
        <div class="bg-white rounded-[var(--radius)] shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col overflow-hidden text-left">
          <img src="${s.img}" alt="${s.t}" class="w-full h-48 object-cover">
          <div class="p-8 flex flex-col items-start flex-grow">
            <h4 class="font-serif text-2xl font-bold text-primary mb-3">${s.t}</h4>
            <p class="font-sans text-secondary/70 text-sm leading-relaxed">${s.d}</p>
          </div>
        </div>
      `).join('');

      document.getElementById('team-overline').textContent = d.team.over;
      document.getElementById('team-title').textContent = d.team.title;
      document.getElementById('team-intro').textContent = d.team.intro;
      
      document.getElementById('team-grid').innerHTML = d.team.members.map(m => `
        <div class="p-8 border border-gray-100 rounded-[var(--radius)] bg-white shadow-sm text-center hover:bg-tertiary hover:shadow-xl transition-all duration-300">
          <h4 class="font-serif text-3xl font-bold text-primary mb-1">${m.n}</h4>
          <p class="text-xs uppercase tracking-widest text-accent font-bold mb-4">${m.r}</p>
          <div class="w-12 h-[2px] bg-gray-200 mx-auto mb-4"></div>
        </div>
      `).join('');

      document.getElementById('contact-title').textContent = d.contacts.title;
      document.getElementById('contact-sub').textContent = d.contacts.sub;
      document.getElementById('lbl-address').textContent = d.contacts.address;
      document.getElementById('lbl-email').textContent = d.contacts.email;
      document.getElementById('lbl-phone').textContent = d.contacts.phone;
      document.getElementById('form-title').textContent = d.contacts.formTitle;
      document.getElementById('form-sub').textContent = d.contacts.formSub;
      document.getElementById('btn-submit').textContent = d.contacts.submitBtn;
      document.getElementById('footer-copy').textContent = d.footer;
    }

    function initRotator() {
      const words = Object.keys(CONTENT).map(k => CONTENT[k].hero.word);
      const container = document.getElementById('title-rotator');
      container.innerHTML = words.map(w => `<span class="title-item">${w}</span>`).join('');
      const items = container.querySelectorAll('.title-item');
      let idx = 0; 
      gsap.set(items[0], { opacity: 1, y: 0 });
      setInterval(() => {
        const cur = items[idx]; 
        idx = (idx + 1) % items.length; 
        const nxt = items[idx];
        gsap.to(cur, { y: "-100%", opacity: 0, duration: 0.8, ease: "power4.inOut" });
        gsap.fromTo(nxt, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.8, ease: "power4.inOut" });
      }, 2500);
    }

    window.onload = () => {
      document.getElementById('lang-menu').innerHTML = Object.keys(CONTENT).map(k => `
        <button onclick="updateLanguage('${k}')" class="w-full text-left px-4 py-2 text-sm font-medium hover:bg-tertiary text-secondary transition-colors">
          ${CONTENT[k].label}
        </button>
      `).join('');

      document.getElementById('mobile-menu-btn').onclick = () => document.getElementById('mobile-menu').classList.toggle('active');
      document.getElementById('lang-btn').onclick = (e) => { e.stopPropagation(); document.getElementById('lang-menu').classList.toggle('hidden'); };
      document.addEventListener('click', () => document.getElementById('lang-menu').classList.add('hidden'));

      updateLanguage('pt');
      initRotator();

      const track = document.getElementById('clients-grid');
      track.innerHTML = [...CLIENT_LOGOS, ...CLIENT_LOGOS].map(url => `<img src="${url}" class="h-10 md:h-12 grayscale opacity-40">`).join('');

      gsap.to("#nav", { opacity: 1, y: 0, duration: 1, ease: "expo.out" });
      ScrollTrigger.batch(".reveal", { onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: 0.15 }) });

      // Scroll Indicator Logic
      window.addEventListener('scroll', () => {
        const indicator = document.getElementById('scroll-indicator');
        if(indicator) {
          if(window.scrollY > 50) {
            indicator.classList.add('opacity-0');
            indicator.classList.remove('opacity-60');
          } else {
            indicator.classList.remove('opacity-0');
            indicator.classList.add('opacity-60');
          }
        }
      });
    };