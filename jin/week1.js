var numUniqueEmails = function (emails) {
    let set = new Set();
    for (let s of emails) {
        let domain = '@' + s.split("@")[1];
        let plusOmitted = s.split("+")[0];
        let dotLocal = plusOmitted.split(".");
        let dotOmitted = "";

        for (let str of dotLocal) {
            dotOmitted += str;
        }
        dotOmitted += domain;
        set.add(dotOmitted);
    }
    return set.size;
};