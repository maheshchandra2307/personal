function FaqSection({ title, items }) {
  if (!items?.length) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.q}>
            <h3 className="font-display text-lg font-semibold text-slate-900">
              {item.q}
            </h3>
            <p className="mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
