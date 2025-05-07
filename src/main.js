const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("a");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const options = {
  strings: [
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
  cursorChar: "|",
};

new Typed("#typed-output", options);

const translations = {
  en: {
    title: "Alisa Kuraieva",
    "intro-text": `Welcome to my portfolio! I'm a Front-end
                Developer with a passion for problem-solving and continuous learning. I'm eager to collaborate with a dynamic team to build impactful projects that make a difference.`,
    about: "About",
    technologies: "Technologies",
    portfolio: "Portfolio",
    contacts: "Contacts",
    "about-title": "About me",
    "about-text": `              I'm a motivated and detail-oriented frontend developer with a
              strong foundation in HTML, CSS, and JavaScript. I enjoy creating
              responsive, accessible, and visually engaging interfaces using
              modern technologies like React.

              In addition to React, I work extensively with Angular and
              TypeScript, building scalable applications with tools like NgRx
              for state management. I also have hands-on experience with
              full-stack technologies such as NestJS, PostgreSQL, and Docker,
              which helps me understand backend processes and collaborate more
              effectively across teams.

              I care deeply about code clarity, performance, and user
              experience. I'm a quick learner, a responsible team player, and
              someone who thrives on continuous improvement. Whether it's
              crafting clean UI components or architecting efficient flows, I
              focus on delivering thoughtful and reliable digital solutions.

              My goal is to build meaningful web experiences that are both
              beautiful and robust.`,
    "technologies-title": "Technologies",
    "technologies-text":
      "My tech stack includes modern tools and frameworks for building functional web applications.",
    "portfolio-title": "Portfolio",
    "contacts-title": "Contact Me",
    "contacts-text": "Feel free to reach out through any of these channels:",
  },
  uk: {
    title: "Аліса Кураєва",
    "intro-text": `
Ласкаво прошу до мого портфоліо! Я фронтенд-розробця з пристрастю до вирішення проблем і постійного навчання. Я хочу співпрацювати з динамічною командою, щоб створювати вражаючі проекти, які мають значення.`,
    about: "Про мене",
    technologies: "Технології",
    portfolio: "Портфоліо",
    contacts: "Контакти",
    "about-title": "Про мене",
    "about-text":
      "Я вмотивований і орієнтований на деталі фронтенд розробник із міцною основою HTML, CSS і JavaScript. Мені подобається створювати адаптивні, доступні та візуально привабливі інтерфейси за допомогою сучасних технологій, таких як React. Окрім React, я багато працюю з Angular і TypeScript, створюючи масштабовані програми за допомогою таких інструментів, як NgRx для управління станом. Я також маю практичний досвід роботи з технологіями повного стеку, такими як NestJS, PostgreSQL і Docker, які допомагають мені розуміти внутрішні процеси та ефективніше співпрацювати між командами. Мені дуже важлива чіткість коду, продуктивність і взаємодія з користувачем. Я швидко навчаюся, відповідальний командний гравець і той, хто прагне постійно вдосконалюватися. Незалежно від того, чи це створення чистих компонентів інтерфейсу користувача чи розробка ефективних потоків, я зосереджуюсь на продуманих і надійних цифрових рішеннях. Моя мета полягає в створенні значущого веб-досвіду, який буде одночасно красивим і надійним.",
    "technologies-title": "Технології",
    "technologies-text":
      "Мій стек технологій включає сучасні інструменти та фреймворки для створення функціональних вебдодатків.",
    "portfolio-title": "Портфоліо",
    "contacts-title": "Контакти",
    "contacts-text": "Ви можете зв’язатися зі мною будь-яким із цих каналів:",
  },
};

const switchLanguage = (lang) => {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // const aboutText = document.querySelector(".about-text");
  // if (aboutText) {
  //   aboutText.innerHTML = translations[lang]["about-text"];
  // }

  const technologiesText = document.querySelector(
    ".technologies-container > p"
  );
  if (technologiesText) {
    technologiesText.textContent = translations[lang]["technologies-text"];
  }
};

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    switchLanguage(lang);
  });
});
