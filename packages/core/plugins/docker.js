import { DOCKER_FROM } from '@octolinker/helper-grammar-regex-collection';

export default {
  name: 'Docker',

  resolve({ target }) {
    let isOffical = true;
    const imageName = target.split(':')[0];

    if (target.includes('/')) {
      isOffical = false;
    }

    return [`https://hub.docker.com/${isOffical ? '_' : 'r'}/${imageName}`];
  },

  getPattern() {
    return {
      pathRegexes: [/Dockerfile$/],
      githubClasses: ['type-dockerfile', 'highlight-source-dockerfile'],
    };
  },

  getLinkRegexes() {
    return DOCKER_FROM;
  },
};
