import {appendFileSync} from 'fs';

appendFileSync(process.env.GITHUB_ENV, `
WIREIT_CACHE=github
ACTIONS_CACHE_URL=${process.env.ACTIONS_CACHE_URL}
ACTIONS_RUNTIME_TOKEN=${process.env.ACTIONS_RUNTIME_TOKEN}
`);
