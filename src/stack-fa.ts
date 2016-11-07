import { Fa } from './fa';

export class StackFa {
  xfb: boolean;
  back: Fa;
  front: Fa;
  raw: string;

  backStacked() {
    let {front, back, xfb} = this;
    let fa = xfb ? front : back;
    let stacked = fa.stacked;
    stacked.push('fa-stack-' + (xfb ? '1x' : '2x'));
    return stacked;
  }

  frontStacked() {
    let {front, back, xfb} = this;
    let fa = xfb ? back : front;
    let stacked = fa.stacked;
    stacked.push('fa-stack-' + (xfb ? '2x' : '1x'));
    return stacked;
  }

  stack() {
    return ['fa-stack', this.front.psize].filter(e => e);
  }

  render(sort?: boolean) {
    if (!this.front) {
      return this.raw || '';
    }
    if (sort) {
      return this.back ?
        `<span class="${this.stack().sort().join(' ')}">
  <i class="${this.backStacked().sort().join(' ')}"></i>
  <i class="${this.frontStacked().sort().join(' ')}"></i>
</span>`:
        `<i class="${this.front.pre.sort().join(' ')}"></i>`;
    }
    return this.back ?
      `<span class="${this.stack().join(' ')}">
  <i class="${this.backStacked().join(' ')}"></i>
  <i class="${this.frontStacked().join(' ')}"></i>
</span>`:
      `<i class="${this.front.pre.join(' ')}"></i>`;
  }

  text(sort?: boolean) {
    if (!this.front) {
      return this.raw || '';
    }
    if (this.back) {
      let text = [this.back, this.front].map(fa => fa.text(sort));
      if (this.xfb) {
        text.push('x');
      }
      return text.join('---');
    }
    return this.front.text(sort);
  }

}