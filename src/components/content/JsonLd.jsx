/**
 * Emits structured data. Rendered in the body so it survives both client-side
 * navigation and the prerender pass without head manipulation.
 */
function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default JsonLd;
