import { whatsappUrl } from "@/app/lib/data";

export function WhatsAppFloatButton() { return <a className="wa-float" href={whatsappUrl("Halo, saya ingin konsultasi layanan K3.")} aria-label="Konsultasi melalui WhatsApp">☏</a>; }