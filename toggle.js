const switchTheme = () => {
  const toggle = document.querySelector("input[name='theme']");
  toggle.addEventListener("change", function () {
    addTransition(this);
    let theme = "";
    if (this.checked) theme = "light";
    else theme = "dark";

    document.documentElement.setAttribute("data-theme", theme);
  });
};
const addTransition = (toggle) => {
  toggle.disabled = true;
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
    toggle.disabled = false;
  }, 400);
};
switchTheme();
