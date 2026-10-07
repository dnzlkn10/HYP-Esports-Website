export type Game = "CS2" | "VALORANT";
export interface Equipment { name:string; category:string; image?:string; productUrl?:string; }
export interface Player { id:string; nickname:string; role:string; nationality?:string; image?:string; socials?:{label:string;url:string}[]; announced:boolean; equipment?:Equipment[]; }
export interface Team { slug:"cs2"|"valorant"; game:Game; title:string; description:string; status:string; players:Player[]; }
export interface Match { id:string; game:Game; opponent:string; opponentTag:string; tournament:string; date:string; format:"BO1"|"BO3"|"BO5"; status:"Upcoming"|"Finished"; score?:[number,number]; }
export interface Tournament { slug:string; name:string; game:Game; start:string; end:string; status:"Upcoming"|"Past"; participants:number; organizer:string; description:string; }
export type NewsCategory="ORGANIZATION"|"CS2"|"VALORANT"|"TOURNAMENT"|"ANNOUNCEMENT";
export interface Article { slug:string; title:string; category:NewsCategory; date:string; description:string; body:string[]; art:"arena"|"team"|"jersey"; }
export interface MediaItem { id:string; title:string; category:"Highlights"|"Photos"|"Clips"|"YouTube"; description:string; art:"arena"|"team"|"jersey"; }
export interface Product { slug:string; name:string; category:string; description:string; sizes:string[]; }