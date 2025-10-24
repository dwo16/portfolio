// highlight the current page in the nav
(function () {
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const target = a.getAttribute("href");
    if ((here === "" && target.endsWith("index.html")) || here === target) {
      a.classList.add("active");
    }
  });
})();
