(() => {
  const menuBtnRef = document.querySelector("[document-menu-button]");
  const mobileMenuRef = document.querySelector("[document-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });
})();
