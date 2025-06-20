import Picture1 from "./assets/homeslide1.png";
import Picture2 from "./assets/homeslide2.png";
import Picture3 from "./assets/homeslide3.png";
import Picture4 from "./assets/productslide4.png";
import Picture5 from "./assets/productslide5.png";
import Picture6 from "./assets/productslide6.png";

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

export type AllData = {
  heroCaroseul: CarouselData;
  productCarousel: CarouselData;
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
      desktop: "Vita Classic\nProduct",
    },
    text3: {
      mobile: "We know how large objects\nwill act, We know how are objects\nwill act, We know",
      desktop: "We know how large objects will act, We know\nhow are objects will act, We know",
    },
    button: "ADD TO CART",
  },
};


export default data;
