import { whatsappUrl } from "@/app/lib/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ContactCTA({ label = "Bicarakan kebutuhan K3 Anda" }: { label?: string }) {
  return (
    <section className="contact-cta" id="kontak">
      <div>
        <span className="eyebrow">Siap mulai?</span>
        <h2>{label}</h2>
        <p>
          Ceritakan kebutuhan tim atau organisasi Anda. Kami bantu memilih format, peserta, dan
          jadwal yang paling masuk akal.
        </p>
      </div>
      <a
        className="button button-light"
        href={whatsappUrl("Halo, saya ingin konsultasi kebutuhan K3.")}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon size={18} fill="currentColor" /> Chat WhatsApp <span>↗</span>
      </a>
    </section>
  );
}