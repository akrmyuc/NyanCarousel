"use strict";

{
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const ul = document.querySelector("ul");
  // li要素を取得
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    // あとの条件に当てはまらないときは、クラスを外しておく
    prev.classList.remove("hidden");
    next.classList.remove("hidden");

    // 当てはまる場合はクラスをつける
    if (currentIndex === 0) {
      prev.classList.add("hidden");
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add("hidden");
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    // 画像の数だけボタンを生成する
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector("nav").appendChild(button);
    }
    // 0番目にcurrentクラスをつける
    dots[0].classList.add("current");
  }

  function updateDots() {
    dots.forEach((dot) => {
      dot.classList.remove("current");
    });
    // クリックされたボタンにだけcurrentクラスをつける
    dots[currentIndex].classList.add("current");
  }

  updateButtons();
  setupDots();

  next.addEventListener("click", () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener("click", () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });
}
