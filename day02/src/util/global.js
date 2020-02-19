const getArgs = slicedBy => process.argv.slice(slicedBy);

const args = getArgs(2);

const getArgByKey = (args, key) => {
  let argObj = {};
  args.forEach(arg => {
    const splitedArg = arg.split("=");
    const argKey = splitedArg[0];
    const argVal = splitedArg[1];
    argObj[argKey] = argVal;
  });
  return argObj[key];
};

module.exports = {
  getArgs,
  args,
  getArgByKey
};
