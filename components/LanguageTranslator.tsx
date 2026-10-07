"use client";
import { useEffect } from "react";

const tr: Record<string,string> = {
  "HOME":"ANA SAYFA","NEWS":"HABERLER","MATCHES":"MAÇLAR","TOURNAMENTS":"TURNUVALAR","TEAMS":"TAKIMLAR","MEDIA":"MEDYA","SHOP":"MAĞAZA","ABOUT":"HAKKIMIZDA","CONTACTS":"İLETİŞİM",
  "THE NEXT GENERATION OF COMPETITION":"REKABETİN YENİ NESLİ","RISE. COMPETE.":"YÜKSEL. REKABET ET.","DOMINATE.":"HÜKMET.","Built on ambition. United by competition.":"Hırsla kuruldu. Rekabetle birleşti.","This is our game. This is our next chapter.":"Bu bizim oyunumuz. Bu bizim yeni bölümümüz.",
  "OUR COMPETITIVE DIVISIONS":"REKABETÇİ TAKIMLARIMIZ","TWO GAMES. ONE MINDSET.":"İKİ OYUN. TEK ZİHNİYET.","Explore our teams":"Takımlarımızı keşfet","EVERY ROUND MATTERS":"HER RAUNT ÖNEMLİ","MATCH CENTER":"MAÇ MERKEZİ","All matches":"Tüm maçlar",
  "THE ROAD AHEAD":"ÖNÜMÜZDEKİ YOL","UPCOMING TOURNAMENTS":"YAKLAŞAN TURNUVALAR","INSIDE HYP":"HYP'NİN İÇİNDEN","THE LATEST":"SON GELİŞMELER","All stories":"Tüm haberler","Full team profile":"Takım profilinin tamamı",
  "THE HYP COLLECTION":"HYP KOLEKSİYONU","WEAR THE":"TAŞI","AMBITION.":"HIRSI.","Explore the collection":"Koleksiyonu keşfet","CONCEPT PREVIEW · COMING SOON":"KONSEPT ÖN İZLEME · YAKINDA","MORE THAN A TAG.":"BİR ETİKETTEN FAZLASI.","A MINDSET.":"BİR ZİHNİYET.",
  "THE TEAMS":"TAKIMLAR","Different games. A shared standard. Meet the players carrying HYP into the next chapter.":"Farklı oyunlar. Ortak bir standart. HYP'yi yeni döneme taşıyan oyuncularla tanışın.",
  "MORE THAN A TAG":"BİR ETİKETTEN FAZLASI","THIS IS HYP":"BURASI HYP","An ambition shared. A standard upheld. A new generation ready to compete.":"Paylaşılan bir hırs. Korunan bir standart. Rekabete hazır yeni bir nesil.",
  "CONTACTS":"İLETİŞİM","STAY CONNECTED.":"BAĞLANTIDA KAL.","JOIN OUR":"TOPLULUĞUMUZA","DISCORD.":"DISCORD'DA KATIL.","STEAM GROUP.":"STEAM GRUBUNA KATIL.","JOIN DISCORD ↗":"DISCORD'A KATIL ↗","JOIN STEAM GROUP ↗":"STEAM GRUBUNA KATIL ↗",
  "INSIDE THE ORGANIZATION":"ORGANİZASYONUN İÇİNDEN","HYP STORIES":"HYP HABERLERİ","THE ROAD TO COMPETITION":"REKABET YOLU","BEHIND THE COMPETITION":"REKABETİN ARKASINDA","HYP IN FRAME":"KADRAJDA HYP","WEAR THE AMBITION":"HIRSI TAŞI",
  "PLAYER PROFILE":"OYUNCU PROFİLİ","PLAYER SETUP":"OYUNCU EKİPMANLARI","MY GEAR":"EKİPMANLARIM","DOĞUM TARİHİ":"DOĞUM TARİHİ","ÜLKE":"ÜLKE","COMING SOON":"YAKINDA","Upcoming":"Yaklaşan","Past":"Geçmiş","Finished":"Tamamlandı",
  "PRECISION":"HASSASİYET","DISCIPLINE":"DİSİPLİN","AMBITION":"HIRS","HYP COMPETITIVE DIVISION":"HYP REKABETÇİ TAKIMI","Roster in development":"Kadro geliştiriliyor","Five-player roster":"Beş oyunculu kadro",
  "Explore teams":"Takımları keşfet","Latest matches":"Son maçlar","Explore VALORANT":"VALORANT'ı keşfet","Explore CS2":"CS2'yi keşfet","ROSTER · 05 POSITIONS":"KADRO · 05 POZİSYON",
  "FROM THE SERVER":"SUNUCUDAN","OUR JOURNEY":"YOLCULUĞUMUZ","ACHIEVEMENTS":"BAŞARILAR","01 / THE BEGINNING":"01 / BAŞLANGIÇ","THE STORY IS STILL BEING WRITTEN.":"HİKÂYE HÂLÂ YAZILIYOR.",
  "Verified milestones and competition results will appear here. Every great journey starts with the first round.":"Doğrulanmış başarılar ve turnuva sonuçları burada yer alacak. Her büyük yolculuk ilk rauntta başlar.",
  "Fixtures, tournaments and editorial content are illustrative. Official schedules and results will be announced here.":"Fikstürler, turnuvalar ve içerikler örnek amaçlıdır. Resmî program ve sonuçlar burada duyurulacaktır.",
  "Sample events · participation and dates are not confirmed.":"Örnek etkinlikler · katılım ve tarihler kesinleşmemiştir.","UPCOMING":"YAKLAŞAN","RESULTS":"SONUÇLAR","ALL":"TÜMÜ","MATCH":"MAÇ","MATCHES":"MAÇ","TIMES IN TRT (UTC+3)":"SAATLER TRT (UTC+3)",
  "THE NEXT CHAPTER":"YENİ BÖLÜM","TO BE ANNOUNCED":"DUYURULACAK","Role to be announced":"Rol duyurulacak",
  "Official team jersey":"Resmî takım forması","COLLECTIONS · CONTENT COMING SOON":"KOLEKSİYON · İÇERİK YAKINDA","Explore collection":"Koleksiyonu keşfet",
  "EXPLORE HYP":"HYP'Yİ KEŞFET","STAY CONNECTED":"BAĞLANTIDA KAL","BUILT FOR THE NEXT GENERATION.":"YENİ NESİL İÇİN TASARLANDI.","All rights reserved.":"Tüm hakları saklıdır."
};

function translateText(root: HTMLElement, toTurkish: boolean) {
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes:Text[]=[]; let n;
  while(n=walker.nextNode()) nodes.push(n as Text);
  nodes.forEach(node=>{
    const raw=node.nodeValue||""; const value=raw.trim(); if(!value) return;
    const el=node.parentElement; if(!el || ["SCRIPT","STYLE"].includes(el.tagName)) return;
    const htmlEl = el as HTMLElement;
    if(!htmlEl.dataset.enText) htmlEl.dataset.enText=value;
    const en=htmlEl.dataset.enText ?? value;
    if(toTurkish) {
      let translated: string = tr[en] ?? "";
      if(!translated){
        translated=en
          .replace(/\bUPCOMING\b/g,"YAKLAŞAN")
          .replace(/\bFINISHED\b/g,"TAMAMLANDI")
          .replace(/\bTEAMS\b/g,"TAKIM")
          .replace(/\bCOMING SOON\b/g,"YAKINDA");
      }
      node.nodeValue=raw.replace(value, translated || en);
    }
    else if(!toTurkish && en) node.nodeValue=raw.replace(value,en);
  });
}

export function LanguageTranslator(){
  useEffect(()=>{
    const apply=()=>translateText(document.body,document.documentElement.dataset.language!=="en");
    apply();
    const observer=new MutationObserver(apply); observer.observe(document.body,{childList:true,subtree:true});
    const onStorage=()=>apply();
    window.addEventListener("hyp-language-change",onStorage);
    return()=>{observer.disconnect();window.removeEventListener("hyp-language-change",onStorage)};
  },[]);
  return null;
}
