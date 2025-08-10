// HTMLの読み込みが完了してから実行
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // ボタンのアクティブ状態を切り替え
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      cards.forEach(card => {
        if(filter === 'all' || card.getAttribute('data-category') === filter){
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
