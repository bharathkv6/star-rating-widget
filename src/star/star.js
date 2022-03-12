function Star(ratingValue, isHighted) {
  const span = document.createElement('span');
  span.classList.add(...['fa', 'fa-star-o']);
  span.dataset.ratingValue = ratingValue;
  if (isHighted) {
    span.classList.remove('fa-star-o');
    span.classList.add('fa-star');
  }
  return span;
}