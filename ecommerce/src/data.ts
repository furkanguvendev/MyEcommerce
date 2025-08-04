import Picture1 from "./assets/homeslide1.png";
import Picture2 from "./assets/homeslide2.png";
import Picture3 from "./assets/homeslide3.png";
import Picture4 from "./assets/productslide4.png";
import Picture5 from "./assets/productslide5.png";
import Picture6 from "./assets/productslide6.png";
import Picture7 from "./assets/blogpic1.png";
import Picture8 from "./assets/blogpic2.png";
import Picture9 from "./assets/blogpic3.png";
import Filter1 from "./assets/shopfilter1.jpg";
import Filter2 from "./assets/shopfilter2.jpeg";
import Filter3 from "./assets/shopfilter3.jpg";
import Filter4 from "./assets/shopfilter4.jpg";
import Filter5 from "./assets/shopfilter5.jpeg";
import Product1 from "./assets/productcard1.png";
import Product2 from "./assets/productcard2.png";
import Product3 from "./assets/productcard3.png";
import Product4 from "./assets/productcard4.png";
import Product5 from "./assets/productcard5.png";
import Product6 from "./assets/productcard6.png";
import Product7 from "./assets/productcard7.png";
import Product8 from "./assets/productcard8.png";
import Product9 from "./assets/productcard9.png";
import Product10 from "./assets/productcard10.png";
import Product11 from "./assets/productcard11.png";
import Product12 from "./assets/productcard12.png";
import Details1 from "./assets/detailsCard1.jpg";
import Details2 from "./assets/detailsCard2.jpg";
import DetailsMini1 from "./assets/detailsCardMini1.jpg";
import DetailsMini2 from "./assets/detailsCardMini2.jpg";
import DescripPic from "./assets/DescriptionPic.png";
import DetailPic1 from "./assets/detailproduct1.png";
import DetailPic2 from "./assets/detailproduct2.png";
import DetailPic3 from "./assets/detailproduct3.png";
import DetailPic4 from "./assets/detailproduct4.png";
import DetailPic5 from "./assets/detailproduct5.png";
import DetailPic6 from "./assets/detailproduct6.png";
import DetailPic7 from "./assets/detailproduct7.png";
import DetailPic8 from "./assets/detailproduct8.png";


export type CarouselData = {
pictures: {
  picture1: {
    img: string;
    price: string;
  };
  picture2: {
    img: string;
    price: string;
  };
  picture3: {
    img: string;
    price: string;
  };
}
  text1: string;
  text2: {
    mobile: string,
    desktop: string,
  };
  text3: {
    mobile: string,
    desktop: string,
  };
  button: string;
}

export type BlogCard = {
  picture: string;
  text1: string;
  text2: string;
  time: string;
  interaction: string;
}

export type ShopFilter = {
  url: string,
  text: string,
  description: string,
  path: string,
}

export type BlogData = BlogCard[];

export type Reviews = {
  description: string;
  raiting: number;
}

export type Descriptions = {
  heading : string;
  description: string;
  descriptions: {
    picture: string;
    section1:{
      heading: string;
      descriptions: string[];
    };
    section2: {
      heading: string;
      descriptions: string[];
    };
    section3: {
      heading: string;
      descriptions: string[];
    };
  };
}

export type ProductDetail = {
  pictures: string[];
  miniPictures: string[];
  reviews: Reviews[];
  price: string;
  avalibility: string;
  content: Descriptions;
}

export type DetailProduct = {
  picture: string;
  heading: string;
  text: string;
  price: string;
  discount: string;
}

export type AllData = {
  heroCaroseul: CarouselData;
  productCarousel: CarouselData;
  blogCard: BlogData;
  shopFilter: ShopFilter[];
  productCard: string[];
  productDetails: ProductDetail;
  detailproducts: DetailProduct[];
}

const data: AllData = {
  heroCaroseul: {
    pictures: {
      picture1: {
        img: Picture1,
        price: "",
      },
      picture2: {
        img: Picture2,
        price: "",
      },
      picture3: {
        img: Picture3,
        price: "",
      },
    },
    text1: "SUMMER 2025",
    text2: {
      mobile: "NEW\nCOLLECTION",
      desktop: "NEW COLLECTION",
    },
    text3: {
            mobile: "We know how large object\nwill act, but things on a\nsmall scale.",
            desktop: "We know how large object will act,\nbut things on a small scale.",
          },
    button: "SHOP NOW",
  },
  productCarousel: {
    pictures: {
      picture1: {
        img: Picture4,
        price: "$16.48",
      },
      picture2: {
        img: Picture5,
        price: "$16.48",
      },
      picture3: {
        img: Picture6,
        price: "$16.48",
      },
    },
    text1: "SUMMER 2025",
    text2: {
      mobile: "Vita Classic\nProduct",
      desktop: "Vita Classic Product",
    },
    text3: {
      mobile: "We know how large objects\nwill act, We know how are objects\nwill act, We know",
      desktop: "We know how large objects will act, We know\nhow are objects will act, We know",
    },
    button: "ADD TO CART",
  },
  blogCard : [
    {
      picture: Picture7,
      text1: "Loudest à la Madison #1\n(L'integral)",
      text2: "We focus on ergonomics and meeting\nyou where you work. It's only a\nkeystroke away.",
      time: "12 May 2025",
      interaction: "95",
    },
    {
      picture: Picture8,
      text1: "Loudest à la Madison #1\n(L'integral)",
      text2: "We focus on ergonomics and meeting\nyou where you work. It's only a\nkeystroke away.",
      time: "26 March 2024",
      interaction: "222",
    },
    {
      picture: Picture9,
      text1: "Loudest à la Madison #1\n(L'integral)",
      text2: "We focus on ergonomics and meeting\nyou where you work. It's only a\nkeystroke away.",
      time: "8 April 2023",
      interaction: "125",
    },
  ],
  shopFilter: [
  { url: Filter1, text: "TiŞORT", description: "Günlük Rahatlık", path: "/shop/k/tisort/1" },
  { url: Filter2, text: "AYAKKABI", description: "Her Adımda", path: "/shop/k/ayakkabı/2" },
  { url: Filter3, text: "CEKET", description: "Şıklık Kat", path: "/shop/k/ceket/3" },
  { url: Filter4, text: "ELBİSE", description: "Zarif Dokunuş", path: "/shop/k/elbise/4" },
  { url: Filter5, text: "GÖMLEK", description: "Klasik Tarz", path: "/shop/k/gomlek/5" }
],
  productCard: [Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Product10, Product11, Product12],
  productDetails: {
      pictures: [Details1, Details2],
      miniPictures: [DetailsMini1, DetailsMini2],
      content: {
          heading : "Floating Phone",
          description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
          descriptions: {
            picture: DescripPic,
            section1:{
              heading: "the quick fox jumps over",
              descriptions: [
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
              ],
            },
            section2: {
              heading: "the quick fox jumps over",
              descriptions: [
                "the quick fox jumps over the lazy dog",
                "the quick fox jumps over the lazy dog",
                "the quick fox jumps over the lazy dog",
                "the quick fox jumps over the lazy dog",
              ],
            },
            section3: {
              heading: "the quick fox jumps over",
              descriptions: [
                "the quick fox jumps over the lazy dog",
                "the quick fox jumps over the lazy dog",
                "the quick fox jumps over the lazy dog",
              ],
            },
          },
      },
      reviews: [
        {
          description: "",
          raiting: 4,
        }
      ],
      price: "1,139.33",
      avalibility: "in Stock",
    },
    detailproducts: [
      {
        picture: DetailPic1,
        heading:"Graphic Desing",
        text:"English Department",
        price:"16.48",
        discount:"6.48",
      },
      {
        picture: DetailPic2,
        heading:"Graphic Desing",
        text:"English Department",
        price:"16.48",
        discount:"6.48",
      },
      {
        picture: DetailPic3,
        heading:"Graphic Desing",
        text:"English Department",
        price:"16.48",
        discount:"6.48",
      },
      {
        picture: DetailPic4,
        heading:"Graphic Desing",
        text:"English Department",
        price:"16.48",
        discount:"6.48",
      },
      {
        picture: DetailPic5,
        heading:"Graphic Desing",
        text:"English Department",
        price:"16.48",
        discount:"6.48",
      },
      {
        picture: DetailPic6,
        heading:"Graphic Desing",
        text:"English Department",
        price:"16.48",
        discount:"6.48",
      },
      {
        picture: DetailPic7,
        heading:"Graphic Desing",
        text:"English Department",
        price:"16.48",
        discount:"6.48",
      },
      {
        picture: DetailPic8,
        heading:"Graphic Desing",
        text:"English Department",
        price:"16.48",
        discount:"6.48",
      }
    ]
};


export default data;
