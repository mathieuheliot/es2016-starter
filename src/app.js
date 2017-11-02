
/**
 * Based on
 *  https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/
 *  https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783
 */

import './style.scss';
import people from './people';

const root = document.querySelector('#root');
root.innerHTML = `<p>` + people + `</p>`;
