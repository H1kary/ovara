let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
const sr = ScrollReveal({
  distance: "100px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".hero-text", { delay: 150, origin: "top" });
sr.reveal(".hero-img", { delay: 600, origin: "right" });
sr.reveal(".icons", { delay: 350, origin: "left" });

sr.reveal(".lastedit", {delay: 150, origin: "top"})
sr.reveal(".alledits", {delay: 150, origin: "bottom"})
sr.reveal(".grid-container", {delay: 150, origin: "bottom"})