import { whatsappUrl } from "@/app/lib/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppFloatButton() {
  return (
    <a
      className="wa-float"
      href={whatsappUrl("Halo, saya ingin konsultasi layanan K3.")}
      aria-label="Konsultasi melalui WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon size={28} fill="#ffffff" />
    </a>
  );
}