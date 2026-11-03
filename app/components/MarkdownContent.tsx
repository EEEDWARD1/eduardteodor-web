import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="post-content mt-6 min-w-0">
      <Markdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        components={{
          table({ children }) {
            return (
              <div
                className="max-w-full overflow-x-auto"
                role="region"
                aria-label="Article table"
                tabIndex={0}
              >
                <table>{children}</table>
              </div>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
