import React from 'react';

// Renders inline **bold** inside a string as <strong>.
function renderBold(text) {
  if (!text.includes('**')) return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function renderSections(sections, localePath) {
  return sections.map((s, i) => {
    switch (s.type) {
      case 'h2':
        return <h2 key={i}>{s.text}</h2>;
      case 'h3':
        return <h3 key={i}>{s.text}</h3>;
      case 'p':
        return <p key={i}>{renderBold(s.text)}</p>;
      case 'img':
        return <img key={i} src={s.src} alt={s.alt} loading="lazy" />;
      case 'ul':
        return (
          <ul key={i}>
            {s.items.map((it, j) => (
              <li key={j}>{renderBold(it)}</li>
            ))}
          </ul>
        );
      case 'link-p':
        return (
          <p key={i}>
            {s.before}
            <a href={localePath(s.linkHref)}>{s.linkText}</a>
            {s.after}
          </p>
        );
      case 'link2-p':
        return (
          <p key={i}>
            {s.before}
            <a href={localePath(s.link1Href)}>{s.link1Text}</a>
            {s.middle}
            <a href={localePath(s.link2Href)}>{s.link2Text}</a>
            {s.after}
          </p>
        );
      case 'link3-p':
        return (
          <p key={i}>
            {s.before}
            <a href={localePath(s.link1Href)}>{s.link1Text}</a>
            {s.middle1}
            <a href={localePath(s.link2Href)}>{s.link2Text}</a>
            {s.middle2}
            <a href={localePath(s.link3Href)}>{s.link3Text}</a>
            {s.after}
          </p>
        );
      case 'route-info':
        return (
          <div key={i} className="route-info">
            <h3>{s.title}</h3>
            <div className="route-info__grid">
              {s.items.map((it, j) => (
                <div key={j} className="route-info__item">
                  <strong>{it.label}</strong>
                  {it.value}
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  });
}
