import { execa } from 'execa'

function runBuild() {
  execa("rollup", ["-c", "--environment",  [`SOURCE_MAP:true`].join(',')], {
    stdio: "inherit",
  });
}

runBuild();
