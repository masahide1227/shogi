// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

function setupMenuToggle() {
  console.log("Setting up menu toggle"); // 確認用ログ
  const menuButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      console.log("Menu button clicked"); // クリックされたことを確認
      menu.classList.toggle("show"); // メニューの開閉
      menuButton.classList.toggle("open"); // 3本線を✖にする
    });
  } else {
    console.log("Menu button or menu not found!"); // 要素が見つからない場合のログ
  }
}

// **初回ページ読み込み時**
document.addEventListener("DOMContentLoaded", setupMenuToggle);

// **Turbo Drive のページ遷移時にも適用**
document.addEventListener("turbo:load", setupMenuToggle);


// **投稿の幅を調整する関数**
function adjustPostWidth() {
  console.log("adjustPostWidth() applied"); // デバッグ用ログ
  const posts = document.querySelectorAll('.drafts-page .post-content');
  posts.forEach(post => {
    post.style.maxWidth = '250px';
    post.style.marginLeft = '0';
  });
}

// **人気戦型ランキングを開閉する関数**
function setupRankingToggle() {
  console.log("Setting up ranking toggle"); // デバッグ用ログ
  const toggleButton = document.getElementById("toggle-button");
  const rankingList = document.getElementById("ranking-list");

  if (toggleButton && rankingList) {
    toggleButton.addEventListener("click", function () {
      console.log("Toggle button clicked"); // クリックが発生したか確認
      rankingList.style.display = rankingList.style.display === "none" ? "block" : "none";
    });
  } else {
    console.log("Toggle button or ranking list not found!"); // 要素が見つからない場合のログ
  }
}

// **初回ページ読み込み時**
document.addEventListener("DOMContentLoaded", function () {
  adjustPostWidth();
  setupRankingToggle();
});

// **Turbo Drive のページ遷移時にも適用**
document.addEventListener("turbo:load", function () {
  adjustPostWidth();
  setupRankingToggle();
});

// **Turbolinks（旧バージョン用）**
document.addEventListener("turbolinks:load", function () {
  adjustPostWidth();
  setupRankingToggle();
});