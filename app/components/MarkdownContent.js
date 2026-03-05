export default function MarkdownContent({ html }) {
  return <section className="markdown" dangerouslySetInnerHTML={{ __html: html || '' }} />;
}
