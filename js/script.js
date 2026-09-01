const menuMobile = document.getElementById("menuMobile");
const nav = document.querySelector(".nav");
const loginModal = document.getElementById("loginModal");
const contentModal = document.getElementById("contentModal");
const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const closeContent = document.getElementById("closeContent");
const contentTitle = document.getElementById("contentTitle");
const contentDescription = document.getElementById("contentDescription");
const contentPoints = document.getElementById("contentPoints");
const videoFrame = document.getElementById("videoFrame");
const contentVideo = document.getElementById("contentVideo");
const contentTag = document.getElementById("contentTag");
const completeLesson = document.getElementById("completeLesson");
const landingPage = document.getElementById("landingPage");
const studentArea = document.getElementById("studentArea");
const studentFirstName = document.getElementById("studentFirstName");
const progressCount = document.getElementById("progressCount");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const dashboardLogout = document.getElementById("dashboardLogout");
let activeStudentLesson = null;

const presentations = {
    musculacao: {
        title: "Musculação",
        description: "Uma introdução aos fundamentos que dão segurança e direção ao treino de força.",
        video: "https://www.youtube-nocookie.com/embed/7_UsPk-VF50?rel=0",
        points: ["Execução e segurança", "Volume, intensidade e descanso", "Organização para iniciantes"]
    },
    funcional: {
        title: "Treinamento funcional",
        description: "Entenda como movimentos integrados desenvolvem mobilidade, equilíbrio, força e coordenação.",
        video: "https://www.youtube-nocookie.com/embed/OoNgKjWst4s?rel=0",
        points: ["Padrões de movimento", "Condicionamento global", "Adaptação à rotina"]
    },
    performance: {
        title: "Preparação física",
        description: "Conheça os princípios usados para planejar evolução, resistência e desempenho.",
        video: "https://www.youtube-nocookie.com/embed/I6hQzk_ua-4?rel=0",
        points: ["Volume e intensidade", "Progressão planejada", "Recuperação e desempenho"]
    },
    curso: {
        title: "Curso Potência Training",
        description: "Veja uma prévia dos princípios que orientam a jornada do básico à evolução consistente.",
        video: "https://www.youtube-nocookie.com/embed/I6hQzk_ua-4?rel=0",
        points: ["Fundamentos do treinamento", "Rotina e progressão", "Adaptação para diferentes níveis", "Material de apoio"]
    }
};

const lessons = {
    fundamentos: {
        title: "Aula 01 — Fundamentos",
        description: "Você aprenderá frequência, intensidade, volume, descanso e execução para estruturar um treino consciente.",
        points: ["Princípios essenciais", "Escolha de exercícios", "Erros mais comuns"]
    },
    rotina: {
        title: "Aula 02 — Organização da rotina",
        description: "Aprenda a distribuir os treinos conforme sua disponibilidade, experiência e objetivo.",
        points: ["Divisão semanal", "Consistência", "Recuperação"]
    },
    progressao: {
        title: "Aula 04 — Progressão",
        description: "Entenda como aumentar o desafio gradualmente sem perder qualidade de movimento.",
        points: ["Progressão de carga", "Registro do treino", "Quando ajustar o plano"]
    },
    execucao: {
        title: "Aula 03 — Execução e controle",
        description: "A técnica é a base de um treino eficiente. Aprenda a usar postura, amplitude e controle para repetir movimentos com qualidade.",
        points: ["Posição inicial estável", "Amplitude adequada ao movimento", "Ritmo controlado em cada repetição"]
    },
    mobilidade: {
        title: "Aula 05 — Mobilidade para treinar",
        description: "Mobilidade é preparação para o movimento. Descubra como incluir movimentos simples antes do treino de acordo com sua necessidade.",
        points: ["Aquecimento específico", "Mobilidade de quadril e ombros", "Preparação sem excessos"]
    },
    recuperacao: {
        title: "Aula 06 — Recuperação e constância",
        description: "Evoluir também envolve respeitar o descanso. Organize sua semana para treinar com regularidade e ajustar o ritmo quando preciso.",
        points: ["Sinais de fadiga", "Sono e rotina", "Consistência acima da perfeição"]
    }
};

function openModal(modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const focusTarget = modal.querySelector("input, button");
    if (focusTarget) focusTarget.focus();
}

function stopVideo() {
    contentVideo.src = "";
    videoFrame.hidden = true;
}

function closeModal(modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (modal === contentModal) stopVideo();
}

function renderPoints(points = []) {
    contentPoints.innerHTML = points.map(point => `<li>${point}</li>`).join("");
}

function showPresentation(key) {
    const item = presentations[key];
    if (!item) return;
    contentTitle.textContent = item.title;
    contentDescription.textContent = item.description;
    renderPoints(item.points);
    contentTag.textContent = "PRÉVIA";
    completeLesson.hidden = true;
    activeStudentLesson = null;
    contentVideo.src = item.video;
    videoFrame.hidden = false;
    openModal(contentModal);
}

menuMobile.addEventListener("click", () => {
    const active = nav.classList.toggle("active");
    menuMobile.setAttribute("aria-expanded", String(active));
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuMobile.setAttribute("aria-expanded", "false");
    });
});

openLogin.addEventListener("click", () => {
    if (getCurrentUser()) {
        enterStudentArea();
        return;
    }
    renderAuthState();
    openModal(loginModal);
});
closeLogin.addEventListener("click", () => closeModal(loginModal));
closeContent.addEventListener("click", () => closeModal(contentModal));
completeLesson.addEventListener("click", completeActiveLesson);

document.querySelectorAll("[data-student-lesson]").forEach(button => {
    button.addEventListener("click", () => showStudentLesson(button.dataset.studentLesson));
});

document.querySelectorAll(".link-button").forEach(button => {
    button.addEventListener("click", () => showPresentation(button.dataset.content));
});

document.querySelectorAll(".video-trigger").forEach(button => {
    button.addEventListener("click", () => showPresentation(button.dataset.video));
});

document.querySelectorAll(".preview-button").forEach(button => {
    button.addEventListener("click", () => {
        const lesson = lessons[button.dataset.lesson];
        if (!lesson) return;
        contentTitle.textContent = lesson.title;
        contentDescription.textContent = lesson.description;
        renderPoints(lesson.points);
        contentTag.textContent = "PRÉVIA";
        completeLesson.hidden = true;
        activeStudentLesson = null;
        stopVideo();
        openModal(contentModal);
    });
});

document.querySelectorAll(".method-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".method-tab").forEach(item => item.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(item => item.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab)?.classList.add("active");
    });
});

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const authTabs = document.getElementById("authTabs");
const authHeading = document.getElementById("authHeading");
const authIntro = document.getElementById("authIntro");
const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");
const accountPanel = document.getElementById("accountPanel");
const accountName = document.getElementById("accountName");
const accountEmail = document.getElementById("accountEmail");
const accountAvatar = document.getElementById("accountAvatar");
const logoutButton = document.getElementById("logoutButton");
const AUTH_USERS_KEY = "potenciaUsers";
const AUTH_SESSION_KEY = "potenciaSession";
const STUDENT_PROGRESS_KEY = "potenciaLessonProgress";

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "[]");
    } catch {
        return [];
    }
}

function getCurrentUser() {
    const sessionId = localStorage.getItem(AUTH_SESSION_KEY);
    return getUsers().find(item => item.id === sessionId);
}

function getCompletedLessons() {
    const user = getCurrentUser();
    if (!user) return [];
    try {
        const progress = JSON.parse(localStorage.getItem(STUDENT_PROGRESS_KEY) || "{}");
        return Array.isArray(progress[user.id]) ? progress[user.id] : [];
    } catch {
        return [];
    }
}

function renderStudentProgress() {
    const completed = getCompletedLessons();
    const total = Object.keys(lessons).length;
    const percentage = total ? (completed.length / total) * 100 : 0;
    progressCount.textContent = `${completed.length} de ${total} aulas`;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = completed.length === total
        ? "Trilha concluída. Continue revisando e aplicando o que aprendeu."
        : completed.length
            ? "Ótimo ritmo. Escolha a próxima aula e mantenha a consistência."
            : "Comece pela primeira aula para construir uma base sólida.";
    document.querySelectorAll("[data-lesson-card]").forEach(card => {
        card.classList.toggle("is-complete", completed.includes(card.dataset.lessonCard));
    });
}

function enterStudentArea() {
    const user = getCurrentUser();
    if (!user) {
        renderAuthState();
        openModal(loginModal);
        return;
    }
    studentFirstName.textContent = user.name.trim().split(/\s+/)[0] || "Aluno";
    landingPage.hidden = true;
    studentArea.hidden = false;
    nav.classList.remove("active");
    menuMobile.setAttribute("aria-expanded", "false");
    closeModal(loginModal);
    renderStudentProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showStudentLesson(key) {
    const lesson = lessons[key];
    if (!lesson || !getCurrentUser()) return;
    activeStudentLesson = key;
    contentTag.textContent = "AULA DA TRILHA";
    contentTitle.textContent = lesson.title;
    contentDescription.textContent = lesson.description;
    renderPoints(lesson.points);
    stopVideo();
    completeLesson.textContent = getCompletedLessons().includes(key) ? "Aula concluída ✓" : "Marcar como concluída";
    completeLesson.hidden = false;
    openModal(contentModal);
}

function completeActiveLesson() {
    const user = getCurrentUser();
    if (!user || !activeStudentLesson) return;
    let progress;
    try {
        progress = JSON.parse(localStorage.getItem(STUDENT_PROGRESS_KEY) || "{}");
    } catch {
        progress = {};
    }
    const completed = Array.isArray(progress[user.id]) ? progress[user.id] : [];
    if (!completed.includes(activeStudentLesson)) {
        completed.push(activeStudentLesson);
        progress[user.id] = completed;
        localStorage.setItem(STUDENT_PROGRESS_KEY, JSON.stringify(progress));
    }
    completeLesson.textContent = "Aula concluída ✓";
    renderStudentProgress();
}

async function hashPassword(password, salt) {
    const bytes = new TextEncoder().encode(`${salt}:${password}`);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
}

function setAuthMessage(element, text, type) {
    element.textContent = text;
    element.className = `login-message ${type}`;
}

function setAuthMode(mode) {
    const isRegister = mode === "register";
    loginForm.hidden = isRegister;
    registerForm.hidden = !isRegister;
    accountPanel.hidden = true;
    authTabs.hidden = false;
    authHeading.textContent = isRegister ? "Crie sua conta" : "Bem-vindo de volta!";
    authIntro.textContent = isRegister
        ? "Cadastre-se para acompanhar conteúdos e novidades."
        : "Entre na sua conta para acessar seus conteúdos.";
    document.querySelectorAll("[data-auth-mode]").forEach(button => {
        const active = button.dataset.authMode === mode;
        button.classList.toggle("active", active);
        if (button.getAttribute("role") === "tab") {
            button.setAttribute("aria-selected", String(active));
        }
    });
    loginMessage.textContent = "";
    registerMessage.textContent = "";
    window.setTimeout(() => (isRegister ? registerForm : loginForm).querySelector("input")?.focus(), 0);
}

function renderAuthState() {
    const user = getCurrentUser();
    if (!user) {
        openLogin.textContent = "Entrar";
        setAuthMode("login");
        return;
    }
    authTabs.hidden = true;
    loginForm.hidden = true;
    registerForm.hidden = true;
    accountPanel.hidden = false;
    authHeading.textContent = "Sua conta";
    authIntro.textContent = "Você está conectado à Potência Training.";
    accountName.textContent = user.name;
    accountEmail.textContent = user.email;
    accountAvatar.textContent = user.name.trim().charAt(0).toUpperCase();
    openLogin.textContent = "Minha conta";
}

document.querySelectorAll("[data-auth-mode]").forEach(button => {
    button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

registerForm.addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim().toLowerCase();
    const password = form.elements.password.value;
    const confirmation = form.elements.confirmPassword.value;

    if (name.length < 2) {
        setAuthMessage(registerMessage, "Informe seu nome completo.", "error");
        return;
    }
    if (password.length < 6) {
        setAuthMessage(registerMessage, "A senha precisa ter pelo menos 6 caracteres.", "error");
        return;
    }
    if (password !== confirmation) {
        setAuthMessage(registerMessage, "As senhas não coincidem.", "error");
        return;
    }

    const users = getUsers();
    if (users.some(user => user.email === email)) {
        setAuthMessage(registerMessage, "Já existe uma conta com este e-mail.", "error");
        return;
    }

    const salt = crypto.randomUUID();
    const user = {
        id: crypto.randomUUID(),
        name,
        email,
        salt,
        passwordHash: await hashPassword(password, salt),
        createdAt: new Date().toISOString()
    };
    users.push(user);
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
    localStorage.setItem(AUTH_SESSION_KEY, user.id);
    form.reset();
    renderAuthState();
    enterStudentArea();
});

loginForm.addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value.trim().toLowerCase();
    const user = getUsers().find(item => item.email === email);

    if (!user) {
        setAuthMessage(loginMessage, "Conta não encontrada. Crie seu cadastro primeiro.", "error");
        return;
    }

    const passwordHash = await hashPassword(form.elements.password.value, user.salt);
    if (passwordHash !== user.passwordHash) {
        setAuthMessage(loginMessage, "Senha incorreta.", "error");
        return;
    }

    localStorage.setItem(AUTH_SESSION_KEY, user.id);
    form.reset();
    renderAuthState();
    enterStudentArea();
});

function logout() {
    localStorage.removeItem(AUTH_SESSION_KEY);
    studentArea.hidden = true;
    landingPage.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    renderAuthState();
}

logoutButton.addEventListener("click", logout);
dashboardLogout.addEventListener("click", logout);

renderAuthState();
if (getCurrentUser()) enterStudentArea();

document.getElementById("buyCourse").addEventListener("click", () => {
    document.getElementById("interestForm").scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("interestName").focus({ preventScroll: true });
});

document.getElementById("interestForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const signup = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        createdAt: new Date().toISOString()
    };
    const signups = JSON.parse(localStorage.getItem("potenciaInterest") || "[]");
    const alreadyExists = signups.some(item => item.email.toLowerCase() === signup.email.toLowerCase());
    const message = document.getElementById("interestMessage");
    if (alreadyExists) {
        message.textContent = "Este e-mail já está na lista. Avisaremos você!";
        return;
    }
    signups.push(signup);
    localStorage.setItem("potenciaInterest", JSON.stringify(signups));
    message.textContent = `Tudo certo, ${signup.name}! Seu interesse foi registrado neste dispositivo.`;
    form.reset();
});

function animateNavigation(link, target) {
    link.classList.remove("nav-click");
    void link.offsetWidth;
    link.classList.add("nav-click");
    document.body.classList.add("nav-moving");

    window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.remove("section-arrival");
        void target.offsetWidth;
        target.classList.add("section-arrival");
    }, 150);

    window.setTimeout(() => {
        document.body.classList.remove("nav-moving");
        link.classList.remove("nav-click");
        target.classList.remove("section-arrival");
    }, 850);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        animateNavigation(link, target);
    });
});

window.addEventListener("click", event => {
    if (event.target === loginModal) closeModal(loginModal);
    if (event.target === contentModal) closeModal(contentModal);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal(loginModal);
        closeModal(contentModal);
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".feature-card, .training-card, .preview-item, .contact-card").forEach(element => observer.observe(element));
