/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const map = {};
  for (let i = 0; i < emails.length; i += 1) {
      const [localName, domainName] = emails[i].split('@');
      const index = localName.indexOf('+');
      let localNameWithoutPlus;
      if (index === -1) {
          localNameWithoutPlus = localName
      } else {
          localNameWithoutPlus = localName.slice(0, index);
      }
      const localNameWithoutDot = localNameWithoutPlus.split('.').join('');
      const finalLocalName = `${localNameWithoutDot}@${domainName}`
      map[finalLocalName] = true;
  }
  return Object.keys(map).length;
};