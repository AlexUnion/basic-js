module.exports = function createDreamTeam(members) {
  if (typeof members !== 'object' || members === null || !members.length) return false;
  const names = members.filter((item) => typeof item === 'string');
  if (!names.length) return false;
  const secretArr = [];
  names.forEach((item) => {
    const name = item.trim();
    const code = name.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      secretArr.push(String.fromCharCode(code - 32));
    } else if (code >= 65 && code <= 96) {
      secretArr.push(name[0]);
    }
  });
  return secretArr.sort().join('');
};
