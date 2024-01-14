'use strict';

class KeyboardSource extends InputSource {
    constructor(manager) {
        super(manager);
        this._listener = new window.keypress.Listener();
    }

    init() {
        for (let key in CONFIG.INPUT_KEYBOARD_MAPPING) {
            LOGGER.debug("mapping key " + key + " to " + CONFIG.INPUT_KEYBOARD_MAPPING[key]);
            this._listener.register_combo({
                "keys": CONFIG.INPUT_KEYBOARD_MAPPING[key],
                "on_keydown": () => {
                    this.getInputManager().inputOn(CONS.input[key], 1);
                },
                "on_keyup": () => {
                    this.getInputManager().inputOff(CONS.input[key])
                },
                prevent_repeat: true
            });
        }
    }

    getType() {
        return CONS.inputType.KEYBOARD;
    }
}
