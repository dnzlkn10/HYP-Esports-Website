import Image from "next/image";
import { notFound } from "next/navigation";
import { teams } from "@/data/teams";
import { PageHeading, SectionHeading } from "@/components/ui";
export default async function Page({params}:{params:Promise<{game:string;player:string}>}) {
 const {game,player}=await params; const team=teams.find(t=>t.slug===game); const p=team?.players.find(x=>x.nickname.toLowerCase()===decodeURIComponent(player).toLowerCase());
 if(!team||!p||!p.announced) notFound();
 return <><PageHeading label={`HYP ${team.game} PLAYER`} title={p.nickname} description={`${team.title} · HYP ESPORTS`}/>
 <section className="container section player-profile"><div className="profile-hero card"><div className="profile-mark">HYP<span>.</span></div><div><p className="eyebrow"><span/>PLAYER PROFILE</p><h2>{p.nickname}</h2><p>{team.title} · HYP ESPORTS</p><div className="profile-facts"><span><small>DOĞUM TARİHİ</small>{p.birthDate||"—"}</span><span><small>ÜLKE</small>{p.nationality||"—"}</span></div>{p.bio&&<p className="profile-bio">{p.bio}</p>}</div></div>
 <SectionHeading label="PLAYER SETUP" title="MY GEAR"/>
 <div className="equipment-grid">{p.equipment?.length?p.equipment.map(e=><article className="equipment-card card" key={e.name}><div className="equipment-art">{e.image&&<Image src={e.image} alt={e.name} fill unoptimized/>}</div><div className="equipment-copy"><p>{e.category}</p><h3>{e.name}</h3></div></article>):<p className="sample-note">Equipment details coming soon.</p>}</div></section></>;
}