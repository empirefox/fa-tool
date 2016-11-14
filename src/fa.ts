export interface FaUnit {
  name: string;
  size?: string;
  flip?: string;
  color?: string;
  pull?: string;
  dir?: number;

  border?: boolean;
  spin?: boolean;
  fw?: boolean;
  inverse?: boolean;
}

export const sizes = ['lg', '2x', '3x', '4x', '5x'];
export const colors = ['muted', 'primary', 'success', 'info', 'warning', 'danger'];
export const pulls = ['left', 'right'];
export const dirs = [90, 180, 270];
export const flips = { h: 'horizontal', v: 'vertical' };

export class Fa {
  name: string;
  size: string;
  color: string;
  pull: string;
  dir: number;
  flip: string;

  border: boolean;
  spin: boolean;
  fw: boolean; // fix width
  inverse: boolean;

  constructor(fa?: FaUnit) {
    Object.assign(this, fa);
  }

  get pname() { return `fa-${this.name}`; }
  get psize() { return this.size ? `fa-${this.size}` : ''; }
  get pcolor() { return this.color ? `text-${this.color}` : ''; }
  get ppull() { return this.pull ? `fa-pull-${this.pull}` : ''; }
  get pdir() { return this.dir ? `fa-rotate-${this.dir}` : ''; }
  get pflip() {
    let flip = flips[this.flip];
    return flip ? `fa-flip-${flip}` : '';
  }

  get pborder() { return this.border ? 'fa-border' : ''; }
  get pspin() { return this.spin ? 'fa-spin' : ''; }
  get pfw() { return this.fw ? 'fa-fw' : ''; }
  get pinverse() { return this.inverse ? 'fa-inverse' : ''; }

  get pre() {
    return ['fa', this.pname, this.psize, this.pflip, this.pdir, this.ppull, this.pcolor,
      this.pborder, this.pspin, this.pfw, this.pinverse].filter(e => e);
  }

  get stacked() {
    return ['fa', this.pname, this.pflip, this.pdir, this.pcolor,
      this.pborder, this.pspin, this.pfw, this.pinverse].filter(e => e);
  }

  export(): FaUnit {
    let { name, size, pull, flip, dir, color, border, spin, fw, inverse } = this;
    return { name, size, pull, flip, dir, color, border, spin, fw, inverse };
  }

  text(isStackBack?: boolean) {
    let { flip, dir, color } = this;
    let text = [flip, dir, color, ...['border', 'spin', 'fw', 'inverse'].filter(e => this[e])];
    if (!isStackBack) {
      text.push(this.size, this.pull);
    }
    text = text.filter(e => e).sort();
    text.unshift(this.name);
    return text.join('--');
  }

}
