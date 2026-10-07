import type { Team, Player } from "@/types";
const equipment = [
  { name:"Wraith W75", category:"Keyboard", image:"/klavye.png" },
  { name:"Logitech G Pro X Superlight 2", category:"Mouse", image:"/mouse.png" },
  { name:"Wraith Spirit of Aim Pro", category:"Mousepad", image:"/mouse pad.png" },
  { name:"Logitech G733", category:"Headset", image:"/kulaklık.png" },
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