const User = (function () {
    let instance = null;

    function init() {
        this.name = 'john';
        return {
            getName: function () {
                return this.name;
            }.bind(this)
        }

        // Or use arrow function
        // return {
        //     getName: () => {
        //         return this.name;
        //     }
        // }
    }

    return {
        getInstance: function () {
            if (!instance) instance = init();
            return instance;
        }
    }
})();

module.exports = User;