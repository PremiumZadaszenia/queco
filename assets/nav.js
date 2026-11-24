(function () {
  var root = document.querySelector(".mob");
  var btn = document.querySelector(".nav-toggle");
  var panel = document.getElementById("menu-mobilne");
  if (!root || !btn || !panel) return;

  function setOpen(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Zamknij" : "Menu";
    panel.hidden = !open;
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  panel.querySelectorAll(".nav-close").forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      setOpen(false);
      btn.focus();
    });
  });

  document.addEventListener("click", function (event) {
    if (btn.getAttribute("aria-expanded") !== "true") return;
    if (root.contains(event.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      btn.focus();
    }
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });
})();
