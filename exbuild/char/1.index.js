(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/char.js":
/*!*********************!*\
  !*** ./pkg/char.js ***!
  \*********************/
/*! exports provided: Counter, __wbg_log_f1673ba6891243ce, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Counter\", function() { return Counter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_f1673ba6891243ce\", function() { return __wbg_log_f1673ba6891243ce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./char_bg.wasm */ \"./pkg/char_bg.wasm\");\n\n\nfunction logError(e) {\n    let error = (function () {\n        try {\n            return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n/**\n*/\nclass Counter {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Counter.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_counter_free\"](ptr);\n    }\n    /**\n    * @returns {Counter}\n    */\n    static default() {\n        try {\n            const ret = _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"counter_default\"]();\n            return Counter.__wrap(ret);\n        } catch (e) {\n            logError(e)\n        }\n    }\n    /**\n    * @param {string} key\n    * @param {number} count\n    * @returns {Counter}\n    */\n    static new(key, count) {\n        _assertNum(count);\n        try {\n            const ret = _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"counter_new\"](key.codePointAt(0), count);\n            return Counter.__wrap(ret);\n        } catch (e) {\n            logError(e)\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    key() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        try {\n            const ret = _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"counter_key\"](this.ptr);\n            return String.fromCodePoint(ret);\n        } catch (e) {\n            logError(e)\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    count() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        try {\n            const ret = _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"counter_count\"](this.ptr);\n            return ret;\n        } catch (e) {\n            logError(e)\n        }\n    }\n    /**\n    */\n    increment() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        try {\n            _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"counter_increment\"](this.ptr);\n        } catch (e) {\n            logError(e)\n        }\n    }\n    /**\n    * @param {string} key\n    */\n    update_key(key) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        try {\n            _char_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"counter_update_key\"](this.ptr, key.codePointAt(0));\n        } catch (e) {\n            logError(e)\n        }\n    }\n}\n\nconst __wbg_log_f1673ba6891243ce = function(arg0, arg1) {\n    try {\n        console.log(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    try {\n        throw new Error(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./pkg/char.js?");

/***/ }),

/***/ "./pkg/char_bg.wasm":
/*!**************************!*\
  !*** ./pkg/char_bg.wasm ***!
  \**************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, __wbg_counter_free, counter_default, counter_new, counter_key, counter_count, counter_increment, counter_update_key */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./char.js */ \"./pkg/char.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/char_bg.wasm?");

/***/ })

}]);