document.addEventListener("DOMContentLoaded", function () {
  const parallaxBanner = document.querySelector(".parallax-banner");
  const hero = document.querySelector(".hero");

  parallaxBanner.addEventListener("animationend", function () {
    parallaxBanner.style.animation = "none";
    parallaxBanner.style.opacity = 1;
  });

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const heroHeight = hero.offsetHeight;
    const heroTop = hero.offsetTop;
    const heroBottom = heroTop + heroHeight;
    const heroVisibleHeight =
      Math.min(heroBottom, scrollY + windowHeight) - Math.max(heroTop, scrollY);
    const heroVisiblePercent = heroVisibleHeight / heroHeight;

    const rotation = 30 - 30 * (1 - Math.max(0, heroVisiblePercent - 0.5) * 2);

    console.log(rotation);

    parallaxBanner.style.transform = `perspective(850px) translateY(52%) rotateX(${rotation}deg) scale(85%, 75%)`;
  });
});
