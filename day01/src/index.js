process.env.NODE_ENV = "prod";

const getArgs = slicedBy => process.argv.slice(slicedBy);
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

console.log(process.argv);

const args = getArgs(2);
console.log("getArgs", args);
console.log("getArgByKey", getArgByKey(args, "name"));
