function Stars(element, initialRating, totalRating, callback) {
  let active = 0;
  const el = document.querySelector(element);
  const elFragment = document.createDocumentFragment();
  for (let i = 1; i <= totalRating; i++) {
    const star = new Star(i, i <= initialRating);
    elFragment.appendChild(star);
  }
  el.appendChild(elFragment);
  el.addEventListener('mouseover', onMouseOver);
  el.addEventListener('mouseleave', onMouseLeave);
  el.addEventListener('click', onClick);

  function onMouseOver(e) {
    const ratingValue = Number(e.target.dataset.ratingValue);
    fill(ratingValue);
  }

  function onMouseLeave() {
    fill(active);
  }

  function onClick(e) {
    const ratingValue = e.target.dataset.ratingValue;
    active = ratingValue;
    callback(active);
  }

  function fill(ratingValue) {
    for (let i = 0; i < totalRating; i++) {
      if (i <= ratingValue - 1) {
        el.children[i].classList.remove('fa-star-o');
        el.children[i].classList.add(...['fa-star']);
      } else {
        el.children[i].classList.remove('fa-star');
        el.children[i].classList.remove('checked');
        el.children[i].classList.add('fa-star-o');
      }
    }
  }

  return el;
}
