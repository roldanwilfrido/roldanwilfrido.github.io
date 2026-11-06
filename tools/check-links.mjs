import fs from 'node:fs';
import path from 'node:path';
const dist = path.resolve('dist');
if (!fs.existsSync(dist)) { console.error('Build the site first: npm run build'); process.exit(1); }
const pages = [];
function scan(folder){for(const name of fs.readdirSync(folder)){const file = path.join(folder,name);if(fs.statSync(file).isDirectory()) scan(file);else if(name.endsWith('.html')) pages.push(file);}}
scan(dist);
let failures = 0;
for(const file of pages){const html=fs.readFileSync(file,'utf8');for(const match of html.matchAll(/\bhref="(\/[^"]+)"/g)){let href=match[1].split('#')[0].split('?')[0];if(href==='/'||href.startsWith('/#')) continue;
const target=path.join(dist,decodeURI(href).slice(1));if(!fs.existsSync(target)&&!fs.existsSync(path.join(target,'index.html'))&&!fs.existsSync(target.replace(/\/$/,'')+'.html')){console.error('Broken internal link:',path.relative(dist,file),href);failures++;}}}
console.log(`Checked ${pages.length} pages; ${failures} broken internal links.`);
process.exit(failures?1:0);
