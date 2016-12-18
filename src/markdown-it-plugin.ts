import { render } from './render';
const Plugin = require('markdown-it-regexp');

const markdownItPlugin: any = Plugin(/\:fa-([\w\-]+)\:/, match => render(match[1]));
export = markdownItPlugin;
