// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", function() {
  const menuButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuButton && menu) {
    menuButton.addEventListener("click", function() {
      console.log("Menu button clicked"); // クリックが発生したか確認
      menu.classList.toggle("hidden");
      menuButton.classList.toggle("open");
    });
  }
});
