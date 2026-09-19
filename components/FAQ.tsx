interface FAQItem {
  q: string;
  a: string;
}

export function FAQ({ items, title }: { items: FAQItem[]; title?: string }) {
  return (
    <section className="article-section faq-section">
      <h2>{title || "Pertanyaan yang Sering Diajukan (FAQ)"}</h2>
      <div className="faq-list">
        {items.map((item, idx) => (
          <details key={idx} className="faq-item">
            <summary className="faq-question">
              <span>{item.q}</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
