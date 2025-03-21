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
    // PC用
    const toggleButtonPC = document.getElementById("toggle-button");
    const rankingListPC = document.getElementById("ranking-list");
  
    if (toggleButtonPC && rankingListPC) {
      toggleButtonPC.addEventListener("click", function () {
        console.log("PC toggle clicked");
        rankingListPC.style.display = rankingListPC.style.display === "none" || rankingListPC.style.display === ""
          ? "block"
          : "none";
      });
    }
  
    // スマホ用
    const toggleButtonSP = document.getElementById("toggle-button-sp");
    const rankingListSP = document.getElementById("ranking-list-sp");
  
    if (toggleButtonSP && rankingListSP) {
      toggleButtonSP.addEventListener("click", function () {
        console.log("SP toggle clicked");
        rankingListSP.style.display = rankingListSP.style.display === "none" || rankingListSP.style.display === ""
          ? "block"
          : "none";
      });
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


function adjustTalkRoomScroll() {
  const talkRoom = document.querySelector(".talk-room-content");
  const messages = document.querySelectorAll(".message-container"); // ✅ メッセージを取得

  if (talkRoom && messages.length > 0 && window.innerWidth <= 768) {
    setTimeout(() => {
      messages[Math.floor(messages.length / 2)].scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300); // ✅ 300ms 遅延で確実に適用
  }
}

// 初回ロード時
document.addEventListener("DOMContentLoaded", adjustTalkRoomScroll);

// Turbo Drive のページ遷移時
document.addEventListener("turbo:load", adjustTalkRoomScroll);


