const btn = document.getElementById("btn-theme-toggle");
const root = document.documentElement;

const isDark = localStorage.getItem("isdark");
root.setAttribute("data-isdark", isDark);

btn.addEventListener("click", () => {
  const isDark = root.getAttribute("data-isdark") === "true";
  root.setAttribute("data-isdark", !isDark);
  localStorage.setItem("isdark", !isDark);
});
