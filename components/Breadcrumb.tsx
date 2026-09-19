import Link from "next/link";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) { return <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Beranda</Link>{items.map((item) => <span key={item.label}> / {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav>; }