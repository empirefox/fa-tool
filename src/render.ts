import { StackFa } from './stack-fa';
import { parse } from './parse';

export function render(str: string): string {
  return parse(str).render();
}

export function toMarkdown(stack: StackFa): string {
  return `:fa-${stack.text()}:`;
}
