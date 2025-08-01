export const Roles = {
  Admin: 1,
  Store: 2,
  Customer: 3,
} as const;

export type Roles = typeof Roles[keyof typeof Roles];

export const BankList = {
  Ziraat: {
    name: "Ziraat Bankası",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ziraat_Bankas%C4%B1_2025_Logo.svg/250px-Ziraat_Bankas%C4%B1_2025_Logo.svg.png"
  },
  IsBank: {
    name: "Türkiye İş Bankası",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/T%C3%BCrkiye_%C4%B0%C5%9F_Bankas%C4%B1_logo.svg/500px-T%C3%BCrkiye_%C4%B0%C5%9F_Bankas%C4%B1_logo.svg.png"
  },
  Garanti: {
    name: "Garanti BBVA",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Garanti_Bankas%C4%B1_Logo.svg/250px-Garanti_Bankas%C4%B1_Logo.svg.png"
  },
  Akbank: {
    name: "Akbank",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Akbank_logo.svg/250px-Akbank_logo.svg.png"
  },
  Halkbank: {
    name: "Halkbank",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Halkbank_logo.svg/250px-Halkbank_logo.svg.png"
  },
  Vakifbank: {
    name: "VakıfBank",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Vak%C4%B1fbank_logo.svg/250px-Vak%C4%B1fbank_logo.svg.png"
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

