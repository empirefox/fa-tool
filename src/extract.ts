// https://codepen.io/Arnique/pen/eNxeJy
export function extractNamesFromCss(text: string) {
  if (text) {
    let match = text.match(/\.fa-([\w-]+)(?=:before\s*{\s*content:\s*(["']\\\w+["']);*\s*})/gm);
    if (match) {
      return match.map(fa => fa.slice(4));
    }
  }
}

