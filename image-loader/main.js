// 窗口加载后开始加载图片
window.addEventListener('load', loadImage);
function loadImage() {
  imageList.forEach(element => {
    const proImage = new ImageLoader(element);
    proImage.initial();
  });
}

const app = document.querySelector('#app');
const imageList = [
  {
    smallSrc: 'http://h1.ioliu.cn/bing/CommonPipistrelle_EN-AU7421359791_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/CommonPipistrelle_EN-AU7421359791_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/PumpkinPatch_EN-AU15054547949_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/PumpkinPatch_EN-AU15054547949_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/VersaillesGhosts_EN-AU13230111547_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/VersaillesGhosts_EN-AU13230111547_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/CornMaze_EN-AU12455937800_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/CornMaze_EN-AU12455937800_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/CapeBretonSunset_EN-AU10231293487_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/CapeBretonSunset_EN-AU10231293487_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/ChateauGaillard_EN-AU11027430397_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/ChateauGaillard_EN-AU11027430397_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/DovesPiazza_EN-AU11041089534_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/DovesPiazza_EN-AU11041089534_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/LiquidNitrogen_ZH-CN9276021591_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/LiquidNitrogen_ZH-CN9276021591_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/PointLesueur_EN-AU7674211601_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/PointLesueur_EN-AU7674211601_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/CommonPipistrelle_EN-AU7421359791_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/FICPlanets_EN-AU11696191570_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/VallettaMalta_ZH-CN11321825930_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/VallettaMalta_ZH-CN11321825930_800x480.jpg'
  },
  {
    smallSrc: 'http://h1.ioliu.cn/bing/WorkingHarbor_ZH-CN10722095387_400x240.jpg',
    largeSrc: 'http://h1.ioliu.cn/bing/WorkingHarbor_ZH-CN10722095387_800x480.jpg'
  }
];

class ImageLoader {
  constructor({smallSrc, largeSrc}) {
    this.smallSrc = smallSrc;
    this.largeSrc = largeSrc;
  }

  initial() {
    // 创建image container,防止reflow
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'image-container');
    const placeholder = document.createElement('div');
    placeholder.setAttribute('class', 'placeholder');
    imageContainer.appendChild(placeholder);
    app.appendChild(imageContainer);

    // 加载小图片
    const smallImage = new Image();
    smallImage.setAttribute('src', this.smallSrc);
    smallImage.setAttribute('class', 'small-image');
    smallImage.addEventListener('load', () => {
      smallImage.classList.add('loaded');
      imageContainer.appendChild(smallImage);
    });

    // 加载大图片
    const largeImage = new Image();
    largeImage.setAttribute('src', this.largeImage);
    largeImage.setAttribute('class', 'large-image');
    largeImage.addEventListener('load', () => {
      largeImage.classList.add('loaded');
      imageContainer.appendChild(largeImage);
    });
  }
}
