export interface FaUnit {
  name: string;
  size?: string;
  flip?: string;
  color?: string;
  dir?: string;

  border?: boolean;
  spin?: boolean;
  fw?: boolean;
  inverse?: boolean;
}

export const sizes = ['lg', '1x', '2x', '3x', '4x', '5x'];
export const colors = ['muted', 'primary', 'success', 'info', 'warning', 'danger'];
export const dirs = { right: 90, down: 180, left: 270 };
export const flips = { h: 'horizontal', v: 'vertical' };

export class Fa {
  btnType: string;
  tittleType: string;

  name: string;
  size: string;
  color: string;
  flip: string;
  dir: string;

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
  get pflip() {
    let flip = flips[this.flip];
    return flip ? `fa-flip-${flip}` : '';
  }
  get pdir() {
    let dir = dirs[this.dir];
    return dir ? `fa-rotate-${dir}` : '';
  }

  get pborder() { return this.border ? 'fa-border' : ''; }
  get pspin() { return this.spin ? 'fa-spin' : ''; }
  get pfw() { return this.fw ? 'fa-fw' : ''; }
  get pinverse() { return this.inverse ? 'fa-inverse' : ''; }

  get pre() {
    return ['fa', this.pname, this.psize, this.pflip, this.pdir, this.pcolor,
      this.pborder, this.pspin, this.pfw, this.pinverse].filter(e => e);
  }

  get stacked() {
    return ['fa', this.pname, this.pflip, this.pdir, this.pcolor,
      this.pborder, this.pspin, this.pfw, this.pinverse].filter(e => e);
  }

  export(): FaUnit {
    let { name, size, flip, dir, color, border, spin, fw, inverse } = this;
    return { name, size, flip, dir, color, border, spin, fw, inverse };
  }

  text(sort?: boolean) {
    let { name, size, flip, dir, color, border, spin, fw, inverse } = this;
    let text = [size, flip, dir, color, border, spin, fw, inverse].filter(e => e);
    if (sort) {
      text.sort();
    }
    text.unshift(name);
    return text.join('--');
  }

}
