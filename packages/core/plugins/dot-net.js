import {
  NET_PACKAGE,
  NET_PROJ_PACKAGE,
} from '@octolinker/helper-grammar-regex-collection';
import nugetResolver from '../resolver/nuget';

export default {
  name: 'DotNet',

  resolve({ target }) {
    return nugetResolver({ target });
  },

  getPattern() {
    return {
      pathRegexes: [/packages\.config$/, /\.(cs|fs|vb)proj$/, /\.props$/],
      githubClasses: [],
    };
  },

  getLinkRegexes() {
    return [NET_PACKAGE, NET_PROJ_PACKAGE];
  },
};
