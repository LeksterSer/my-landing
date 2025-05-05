document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Дякуємо! Ми з вами зв'яжемось найближчим часом.");
  this.reset();
});
