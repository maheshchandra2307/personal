function Table({ head, rows, note }) {
  return (
    <div className="mt-5">
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead className="bg-slate-50">
            <tr>
              {head.map((cell) => (
                <th
                  key={cell}
                  scope="col"
                  className="border-b border-slate-200 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-slate-100 last:border-b-0"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={
                      cellIndex === 0
                        ? 'px-3.5 py-2.5 align-top font-medium text-slate-800'
                        : 'px-3.5 py-2.5 align-top text-slate-600'
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? (
        <p className="mt-2 text-[12px] leading-relaxed text-slate-400">
          {note}
        </p>
      ) : null}
    </div>
  );
}

function Callout({ title, text }) {
  return (
    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/70 px-5 py-4">
      <p className="font-display text-[13px] font-semibold uppercase tracking-wide text-amber-800">
        {title}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-amber-900">
        {text}
      </p>
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="mt-4">{block.text}</p>;

    case 'h3':
      return (
        <h3 className="font-display mt-8 text-[17px] font-semibold text-slate-900">
          {block.text}
        </h3>
      );

    case 'ul':
      return (
        <ul className="mt-4 list-disc space-y-2.5 pl-5">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="mt-4 list-decimal space-y-2.5 pl-5">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );

    case 'table':
      return <Table head={block.head} rows={block.rows} note={block.note} />;

    case 'callout':
      return <Callout title={block.title} text={block.text} />;

    default:
      return null;
  }
}

/** Renders a list of structured content sections. */
function ContentBlocks({ sections }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="font-display mt-12 text-2xl font-bold tracking-tight text-slate-900 first:mt-0">
            {section.heading}
          </h2>
          {section.blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </section>
      ))}
    </>
  );
}

export default ContentBlocks;
