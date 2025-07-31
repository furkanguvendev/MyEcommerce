export const Roles = {
  Admin: 1,
  Store: 2,
  Customer: 3,
} as const;

export type Roles = typeof Roles[keyof typeof Roles];

export const BankList = {
  Ziraat: {
    name: "Ziraat Bankası",
    img: "https://www.resmievrak.com/wp-content/uploads/Ziraat-Bankasi-Emekliye-Faizsiz-Kredi-1-300x128.jpg"
  },
  IsBank: {
    name: "Türkiye İş Bankası",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/T%C3%BCrkiye_%C4%B0%C5%9F_Bankas%C4%B1_logo.svg/500px-T%C3%BCrkiye_%C4%B0%C5%9F_Bankas%C4%B1_logo.svg.png"
  },
  Garanti: {
    name: "Garanti BBVA",
    img: "https://www.harcamaitirazi.com/dosyalar/garanti-bankasi-logo.png"
  },
  Akbank: {
    name: "Akbank",
    img: "https://www.harcamaitirazi.com/dosyalar/garanti-bankasi-logo.png"
  },
  Halkbank: {
    name: "Halkbank",
    img: "https://www.halkbank.com.tr/content/dam/halkbank/tr/gorseller/bankam%C4%B1z/logolarimiz/halkbank-85yil-logo-disi-kullanim.jpg"
  },
  Vakifbank: {
    name: "VakıfBank",
    img: "https://cazip.com/public/storage/bank_image/GhEaFfYGSCpfT3sMyGwhZuuplYWUfCayKlIraVEk.png"
  },
  YapiKredi: {
    name: "Yapı Kredi",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Yap%C4%B1_Kredi_logo.svg/500px-Yap%C4%B1_Kredi_logo.svg.png"
  },
  QNB: {
    name: "QNB Finansbank",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Qatar_National_Bank_Logo_%28till_2012%29.svg/640px-Qatar_National_Bank_Logo_%28till_2012%29.svg.png"
  }
} as const;

export type BankKey = keyof typeof BankList;

export type BankInfo = typeof BankList[BankKey];

