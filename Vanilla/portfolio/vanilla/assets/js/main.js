

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const delayEffect = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
delayEffect.reveal(".home__title", {});
delayEffect.reveal(".button", { delay: 200 });
delayEffect.reveal(".home__img", { delay: 400 });
delayEffect.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
delayEffect.reveal(".about__img", {});
delayEffect.reveal(".about__subtitle", { delay: 400 });
delayEffect.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
delayEffect.reveal(".skills__subtitle", {});
delayEffect.reveal(".skills__text", {});
delayEffect.reveal(".skills__data", { interval: 200 });
delayEffect.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
delayEffect.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
delayEffect.reveal(".contact__input", { interval: 200 });

const getApi = (url) => {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
};

const createDiv = (data) => {
  let div = document.createElement("div");
  div.classList.add("work__img");
  let link = document.createElement("a");
  link.target = "_blank";
  let image = document.createElement("img");

  link.href = data.url;
  image.src = data.image;

  link.appendChild(image);
  div.appendChild(link);

  return div;
};
/*DATA*/
const main = () => {
  let data = getApi("./assets/data/data.json");
  let projects = JSON.parse(data);

  let container = document.querySelector(".work__container");

  projects.forEach((element) => {
    let div = createDiv(element);
    container.appendChild(div);
  });
};

main();

function changeTheme() {
  const root = document.querySelector("body");
  const icons = document.querySelector("bxl-codepen");

  root.classList.toggle("dark");
  icons.classList.toggle("dark");
}
