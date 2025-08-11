document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const regionFilter = document.getElementById('regionFilter');
    const cards = document.querySelectorAll('.card');
  
    function filterCards() {
      const selectedCategory = categoryFilter.value;
      const selectedRegion = regionFilter.value;
  
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardRegion = card.getAttribute('data-region');
  
        const matchCategory = selectedCategory === 'all' || cardCategory === selectedCategory;
        const matchRegion = selectedRegion === 'all' || cardRegion === selectedRegion;
  
        if (matchCategory && matchRegion) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }
  
    categoryFilter.addEventListener('change', filterCards);
    regionFilter.addEventListener('change', filterCards);
  });