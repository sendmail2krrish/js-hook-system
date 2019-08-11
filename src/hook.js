/**
 * Hooks System
 * @author Krishna Paul
 * @version 0.1
 */
var Hook = {
    hooks: [],
    result: '',
    /**
     * To register/apply hoocks
     * @param {string} name 
     * @param {mixed} callback 
     */
    register: function (name, callback) {
        if ('undefined' == typeof (Hook.hooks[name]))
            Hook.hooks[name] = []
        Hook.hooks[name].push(callback)
    },
    /**
     * To get all result of the hooks
     * @param {string} name 
     * @param {mixed} param 
     */
    call: function (name, param) {
        this.result = param;
        /**
         * Check is hooks is registed
         */
        if ('undefined' != typeof (Hook.hooks[name])) {
            /**
             * Start loop to get all hooks result
             */
            for (i = 0; i < Hook.hooks[name].length; ++i) {
                if ('undefined' == typeof (Hook.hooks[name][i](this.result))) {
                    break; 
                } else {
                    this.result = Hook.hooks[name][i](this.result);
                }
            }
        }
        return this.result;
    }
}