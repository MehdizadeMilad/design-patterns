var count = 0;

function getCount() {
    return count++;
}

module.exports.getCount = getCount;