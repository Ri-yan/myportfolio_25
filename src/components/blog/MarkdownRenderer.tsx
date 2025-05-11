import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const processMarkdown = (markdown: string) => {
    // Process headings
    let html = markdown
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
      .replace(/^##### (.*$)/gm, '<h5>$1</h5>')
      .replace(/^###### (.*$)/gm, '<h6>$1</h6>');
    
    // Process paragraphs (basic)
    html = html.replace(/^(?!<h[1-6]>|\*\*|\*|`|```|>|\d+\.|\- )(.*$)/gm, '<p>$1</p>');
    
    // Process bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Process italic text
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Process code blocks with language
    html = html.replace(/```(\w+)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
    
    // Process code blocks without language
    html = html.replace(/```\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Process inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Process blockquotes
    html = html.replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>');
    
    // Process unordered lists
    let isInUnorderedList = false;
    const unorderedListLines = html.split('\n').map(line => {
      if (line.match(/^\- (.*$)/)) {
        const listItem = line.replace(/^\- (.*)$/, '<li>$1</li>');
        if (!isInUnorderedList) {
          isInUnorderedList = true;
          return '<ul>' + listItem;
        }
        return listItem;
      } else if (isInUnorderedList) {
        isInUnorderedList = false;
        return '</ul>' + line;
      }
      return line;
    });
    
    if (isInUnorderedList) {
      unorderedListLines.push('</ul>');
    }
    
    html = unorderedListLines.join('\n');
    
    // Process ordered lists
    let isInOrderedList = false;
    const orderedListLines = html.split('\n').map(line => {
      if (line.match(/^\d+\. (.*$)/)) {
        const listItem = line.replace(/^\d+\. (.*)$/, '<li>$1</li>');
        if (!isInOrderedList) {
          isInOrderedList = true;
          return '<ol>' + listItem;
        }
        return listItem;
      } else if (isInOrderedList) {
        isInOrderedList = false;
        return '</ol>' + line;
      }
      return line;
    });
    
    if (isInOrderedList) {
      orderedListLines.push('</ol>');
    }
    
    html = orderedListLines.join('\n');
    
    // Process horizontal rule
    html = html.replace(/^---$/gm, '<hr />');
    
    // Process links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return html;
  };

  return (
    <div 
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: processMarkdown(content) }}
    />
  );
};

export default MarkdownRenderer;