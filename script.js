const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

document.querySelectorAll(".year").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const hireForm = document.getElementById("hireForm");
const submitMessage = document.getElementById("submitMessage");
const mailToLink = document.getElementById("mailToLink");

if (hireForm && submitMessage) {
  hireForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(hireForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const roleType = formData.get("roleType") || "";
    const details = formData.get("details") || "";

    const subject = encodeURIComponent(`Opportunity from ${name} - ${roleType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRole Type: ${roleType}\n\nProject Details:\n${details}`
    );

    if (mailToLink) {
      mailToLink.href = `mailto:santoshtukaramfrds@gmail.com?subject=${subject}&body=${body}`;
    }

    submitMessage.classList.remove("hidden");
    submitMessage.setAttribute("tabindex", "-1");
    submitMessage.focus();
    hireForm.reset();
  });
}
