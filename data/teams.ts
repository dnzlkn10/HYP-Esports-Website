import type { Team, Player } from "@/types";
const equipment = [
  { name: "Wraith W75", category: "Keyboard", image: "/api/product-image?url=https%3A%2F%2Fwraithesports.com%2Fproducts%2Fwraith-w75v2-he-klavye%3F_pos%3D11%26_ss%3Dr", productUrl:"https://wraithesports.com/products/wraith-w75v2-he-klavye?_pos=11&_ss=r" },
  { name: "Logitech G Pro X Superlight 2", category: "Mouse", image: "/api/product-image?url=https%3A%2F%2Fwww.logitechg.com%2Fen-us%2Fshop%2Fp%2Fpro-x2-superlight-wireless-mouse", productUrl:"https://www.logitechg.com/en-us/shop/p/pro-x2-superlight-wireless-mouse" },
  { name: "Wraith Spirit of Aim Pro", category: "Mousepad", image: "/api/product-image?url=https%3A%2F%2Fwraithesports.com%2Fproducts%2Fspirit-of-aim-pro-mousepad", productUrl:"https://wraithesports.com/products/spirit-of-aim-pro-mousepad" },
  { name: "Logitech G733", category: "Headset", image: "/api/product-image?url=https%3A%2F%2Fwww.logitechg.com%2Fen-us%2Fshop%2Fp%2Fg733-rgb-wireless-headset.981-000882", productUrl:"https://www.logitechg.com/en-us/shop/p/g733-rgb-wireless-headset.981-000882" },
];
const player = (nickname: string, index: number, game: string): Player => ({
  id: `${game}-${index}`,
  nickname,
  role: nickname === "TBA" ? "TO BE ANNOUNCED" : "Role to be announced",
  announced: nickname !== "TBA",
  nationality: nickname === "JINAZEE" ? "Türkiye" : undefined,
  birthDate: nickname === "JINAZEE" ? "8 Eylül 2010" : undefined,
  bio: nickname === "JINAZEE" ? "HYP Esports CS2 oyuncusu. Rekabetçi oyun, gelişim ve takım disiplini odaklı." : undefined,
  equipment: nickname === "JINAZEE" ? equipment : undefined,
});
export const teams: Team[] = [
  { slug:"cs2", game:"CS2", title:"COUNTER-STRIKE 2", status:"Roster in development", description:"Precision. Discipline. A shared ambition. Our Counter-Strike division is building a five-player roster for the next chapter of HYP.", players:["JINAZEE","Salwo","Script","TBA","TBA"].map((name,i)=>player(name,i,"cs2")) },
  { slug:"valorant", game:"VALORANT", title:"VALORANT", status:"Five-player roster", description:"Five players. One direction. Our VALORANT division brings a fearless approach to tactical competition, with teamwork at the heart of every round.", players:["JINAZEE","VYNOX","PHYONK","VASHI","turta"].map((name,i)=>player(name,i,"valorant")) },
];