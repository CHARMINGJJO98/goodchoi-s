// カードの展開・折りたたみアニメーション付きの制御
function toggleCard(header) {
  const cardContent = header.nextElementSibling;
  if (cardContent.style.maxHeight && cardContent.style.maxHeight !== "0px") {
    // 折りたたむ
    cardContent.style.maxHeight = "0px";
  } else {
    // 展開する（中身のスクロール高さを取得して設定）
    cardContent.style.maxHeight = cardContent.scrollHeight + "px";
  }
}

// チェックボックスの状態変化に合わせた視覚効果
document.querySelectorAll('.complete-checkbox').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const header = this.closest('.card-header');
    header.style.opacity = this.checked ? 0.6 : 1;
  });
});
