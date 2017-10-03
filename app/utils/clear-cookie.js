export default function clearCookie() {
  var i, j, pathBits, pathCurrent, ref, ref1, results;
  pathBits = location.pathname.split('/');
  pathCurrent = ' path=';
  document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
  results = [];
  for (i = j = 0, ref = pathBits.length - 1; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    pathCurrent += ((ref1 = pathCurrent.substr(-1) !== '/') != null ? ref1 : {
        '/': ''
      }) + pathBits[i];
    results.push(document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';');
  }
  return results;
}
