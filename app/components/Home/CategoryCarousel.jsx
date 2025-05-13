import { useEffect, useRef } from "react";

export default function CategoryCarousel() {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const dragTimeout = useRef(null);

  // Snap carousel to center on load and after user interaction ends
  const snapToCenter = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;
    // Animate scrollLeft to center
    const target = (scrollWidth - clientWidth) / 2;
    smoothScrollTo(carousel, target, 300);
  };

  // Smooth scroll helper
  function smoothScrollTo(element, target, duration) {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      element.scrollLeft = start + change * easeInOutQuad(progress);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
  }

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    snapToCenter();
    window.addEventListener("resize", snapToCenter);

    function onMouseDown(e) {
      isDragging.current = true;
      carousel.classList.add("active");
      startX.current = e.pageX - carousel.offsetLeft;
      scrollStart.current = carousel.scrollLeft;
      if (dragTimeout.current) {
        clearTimeout(dragTimeout.current);
        dragTimeout.current = null;
      }
    }

    function onMouseUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      carousel.classList.remove("active");
      // Snap to center after short delay to allow momentum scroll
      if (dragTimeout.current) clearTimeout(dragTimeout.current);
      dragTimeout.current = setTimeout(() => {
        snapToCenter();
        dragTimeout.current = null;
      }, 2000);
    }

    function onMouseLeave() {
      if (!isDragging.current) return;
      isDragging.current = false;
      carousel.classList.remove("active");
      if (dragTimeout.current) clearTimeout(dragTimeout.current);
      dragTimeout.current = setTimeout(() => {
        snapToCenter();
        dragTimeout.current = null;
      }, 2000);
    }

    function onMouseMove(e) {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX.current) * 2;
      carousel.scrollLeft = scrollStart.current - walk;
    }

    function onTouchStart(e) {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - carousel.offsetLeft;
      scrollStart.current = carousel.scrollLeft;
      if (dragTimeout.current) {
        clearTimeout(dragTimeout.current);
        dragTimeout.current = null;
      }
    }

    function onTouchEnd() {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (dragTimeout.current) clearTimeout(dragTimeout.current);
      dragTimeout.current = setTimeout(() => {
        snapToCenter();
        dragTimeout.current = null;
      }, 2000);
    }

    function onTouchMove(e) {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX.current) * 2;
      carousel.scrollLeft = scrollStart.current - walk;
    }

    carousel.addEventListener("mousedown", onMouseDown);
    carousel.addEventListener("mouseup", onMouseUp);
    carousel.addEventListener("mouseleave", onMouseLeave);
    carousel.addEventListener("mousemove", onMouseMove);
    carousel.addEventListener("touchstart", onTouchStart);
    carousel.addEventListener("touchend", onTouchEnd);
    carousel.addEventListener("touchcancel", onTouchEnd);
    carousel.addEventListener("touchmove", onTouchMove);

    return () => {
      window.removeEventListener("resize", snapToCenter);
      carousel.removeEventListener("mousedown", onMouseDown);
      carousel.removeEventListener("mouseup", onMouseUp);
      carousel.removeEventListener("mouseleave", onMouseLeave);
      carousel.removeEventListener("mousemove", onMouseMove);
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("touchend", onTouchEnd);
      carousel.removeEventListener("touchcancel", onTouchEnd);
      carousel.removeEventListener("touchmove", onTouchMove);
      if (dragTimeout.current) clearTimeout(dragTimeout.current);
    };
  }, []);

  return (
    <nav
      ref={carouselRef}
      tabIndex={0}
      className="flex space-x-4 overflow-x-auto text-white no-scrollbar scrollbar-hidden cursor-grab active:cursor-grabbing"
    >
      <a
        href="#"
        role="listitem"
        draggable={false}
        className="flex-shrink-0 w-63 h-92 bg-center bg-cover flex items-end justify-center hover:underline bg-gray-300 "
      >
        <span className="pb-4">FOR UNISEX</span>
      </a>
      <a
        href="#"
        role="listitem"
        draggable={false}
        className="flex-shrink-0 w-63 h-92 bg-center bg-cover flex items-end justify-center hover:underline bg-gray-300 "
      >
        <span className="pb-4">WOMEN'S</span>
      </a>
      <a
        href="#"
        role="listitem"
        draggable={false}
        className="flex-shrink-0 w-63 h-92 bg-center bg-cover flex items-end justify-center hover:underline bg-gray-300 "
      >
        <span className="pb-4">MEN'S</span>
      </a>
    </nav>
  );
}
