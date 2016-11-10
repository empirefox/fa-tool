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
    return stacked.sort();
  }

  frontStacked() {
    let {front, back, xfb} = this;
    let fa = xfb ? back : front;
    let stacked = fa.stacked;
    stacked.push('fa-stack-' + (xfb ? '2x' : '1x'));
    return stacked.sort();
  }

  stack() {
    return ['fa-stack', this.front.psize, this.front.ppull].filter(e => e).sort();
  }

  render() {
    if (!this.front) {
      return this.raw || '';
    }
    return this.back ?
      `<span class="${this.stack().join(' ')}">
  <i class="${this.backStacked().join(' ')}"></i>
  <i class="${this.frontStacked().join(' ')}"></i>
</span>`:
      `<i class="${this.front.pre.sort().join(' ')}"></i>`;
  }

  text() {
    if (!this.front) {
      return this.raw || '';
    }
    if (this.back) {
      let text = `${this.back.text(true)}---${this.front.text()}`;
      return this.xfb ? text + '---x' : text;
    }
    return this.front.text();
  }

}