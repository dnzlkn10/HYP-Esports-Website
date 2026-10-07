import { NextRequest } from "next/server";
const allowed=["wraithesports.com","www.logitechg.com"];
export async function GET(req:NextRequest){
 const raw=req.nextUrl.searchParams.get("url"); if(!raw) return new Response("Missing URL",{status:400});
 const page=new URL(raw); if(!allowed.includes(page.hostname)) return new Response("Blocked",{status:403});
 const html=await fetch(page,{next:{revalidate:86400}}).then(r=>r.text());
 const match=html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)/i)||html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
 if(!match) return new Response("No image",{status:404});
 const imageUrl=match[1].replaceAll("&amp;","&"); const image=await fetch(imageUrl); if(!image.ok) return new Response("Image unavailable",{status:502});
 return new Response(image.body,{headers:{"Content-Type":image.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=86400"}});
}