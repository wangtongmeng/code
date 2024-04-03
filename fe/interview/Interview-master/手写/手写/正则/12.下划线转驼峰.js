const camel = (str) => {
  const reg = /[-_]+(.)?/g;
  const formatRes = str.replace(reg, (matchStr, s1) =>
    s1 ? s1.toUpperCase() : ""
  );
  return formatRes;
};

console.log(camel("foo-bar--")); // fooBar
console.log(camel("foo_bar__")); // fooBar
