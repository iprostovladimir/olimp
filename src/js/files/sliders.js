/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
  Navigation,
  Thumbs,
  Pagination,
  EffectFade,
  A11y,
} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add("swiper");
      slider.classList.add("swiper-wrapper");
      for (const slide of slider.children) {
        slide.classList.add("swiper-slide");
      }
    });
  }
}
// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();
  // Перечень слайдеров
  if (document.querySelector(".swiper")) {
    const previewSliderThumbs = new Swiper(".js-preview-thumbs", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Thumbs, A11y],
      // effect: "fade",
      // autoplay: {
      // 	delay: 3000,
      // 	disableOnInteraction: false,
      // },
      observer: true,
      observeParents: true,
      // slidesPerView: "auto",
      spaceBetween: 32,
      // autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".thumbs-preview__arrow-next",
        prevEl: ".thumbs-preview__arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 4,
          spaceBetween: 20,
          autoHeight: true,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
      on: {},
    });
    const previewSlider = new Swiper(".js-preview-slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Thumbs, A11y],
      effect: "fade",
      // autoplay: {
      // 	delay: 3000,
      // 	disableOnInteraction: false,
      // },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      // autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      // navigation: {
      //   nextEl: ".about__more .more__item_next",
      //   prevEl: ".about__more .more__item_prev",
      // },
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/

      thumbs: {
        swiper: {
          el: ".js-preview-thumbs",
          spaceBetween: 32,

          breakpoints: {
            320: {
              slidesPerView: 4,
              spaceBetween: 20,
              autoHeight: true,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1268: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          },
        },
      },
      on: {},
    });
    const textureSlider = new Swiper(".js-texture-slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      // effect: "fade",
      // autoplay: {
      // 	delay: 3000,
      // 	disableOnInteraction: false,
      // },
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 40,
      // autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: ".texture-product__progressbar",
        type: "progressbar",
      },
      // Arrows
      navigation: {
        nextEl: ".texture-product__arrow-next",
        prevEl: ".texture-product__arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 18,
          autoHeight: true,
        },
        480: {
          spaceBetween: 18,
        },
        768: {
          spaceBetween: 30,
        },
        992: {
          spaceBetween: 40,
        },
        1268: {
          spaceBetween: 40,
        },
      },

      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});

window.initSliders = initSliders();
