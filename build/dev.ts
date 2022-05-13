

import { execa } from 'execa'

function runBuild() {
  execa("rollup", ["-cw", "--environment",  [`SOURCE_MAP:false`].join(',')], {
    stdio: "inherit",
  });
}

runBuild();
