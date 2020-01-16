// Instantiate only once
let instance = null;

function User() {
    if (instance) return instance;

    instance = this;
    this.name = 'john';
    return instance;
}

module.exports = User;