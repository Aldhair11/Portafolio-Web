import i18next from "i18next";


i18next.init({
    lng: "es",
    fallbackLng: "es",
    resources: {
        es: {
            translation: {
                home: "Inicio",
                projects: "Proyectos",
                about: "Sobre Mí",
                contact: "Contacto",
                name: "MI NOMBRE",
                job: "DESARROLLADOR WEB",
                email: "→ EMAIL",
                instagram: "→ INSTAGRAM"
            },
        },
        en: {
            translation: {
                home: "Home",
                projects: "Projects",
                about: "About Me",
                contact: "Contact",
                name: "MY NAME",
                job: "WEB DEVELOPER",
                email: "→ EMAIL",
                instagram: "→ INSTAGRAM"
            },
        },
    },
});

export default i18next;