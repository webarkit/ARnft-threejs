(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else if(typeof exports === 'object')
		exports["ARnftThreejs"] = factory(require("three"));
	else
		root["ARnftThreejs"] = factory(root["THREE"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_three__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SceneRendererTJS.ts":
/*!*********************************!*\
  !*** ./src/SceneRendererTJS.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneRendererTJS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");





var SceneRendererTJS = /*#__PURE__*/function () {
  function SceneRendererTJS(configData, canvasDraw, uuid, cameraBool) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SceneRendererTJS);

    this.configData = configData;
    this.uuid = uuid;
    this.target = window || __webpack_require__.g;
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
      canvas: canvasDraw,
      context: configData.renderer.context,
      alpha: configData.renderer.alpha,
      premultipliedAlpha: configData.renderer.premultipliedAlpha,
      antialias: configData.renderer.antialias,
      stencil: configData.renderer.stencil,
      precision: configData.renderer.precision,
      depth: configData.renderer.depth,
      logarithmicDepthBuffer: configData.renderer.logarithmicDepthBuffer
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
    SceneRendererTJS.globalScene = this.scene;

    if (cameraBool === true) {
      this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(configData.camera.fov, configData.camera.ratio, configData.camera.near, configData.camera.far);
    } else {
      this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.Camera();
    }

    this.version = "0.4.5";
    console.log("ARnftThreejs version: ", this.version);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SceneRendererTJS, [{
    key: "initRenderer",
    value: function initRenderer() {
      var _this = this;

      this.camera.matrixAutoUpdate = false;
      this.target.addEventListener("getProjectionMatrix", function (ev) {
        _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.setMatrix(_this.camera.projectionMatrix, ev.detail.proj);
      });
      this.scene.add(this.camera);
      var light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0xffffff);
      this.scene.add(light);
      this.target.addEventListener("getWindowSize", function (_ev) {
        _this.renderer.setSize(_ev.detail.sw, _ev.detail.sh);
      });
      var setInitRendererEvent = new CustomEvent("onInitThreejsRendering", {
        detail: {
          renderer: this.renderer,
          scene: this.scene,
          camera: this.camera
        }
      });
      this.target.dispatchEvent(setInitRendererEvent);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "getRenderer",
    value: function getRenderer() {
      return this.renderer;
    }
  }, {
    key: "getScene",
    value: function getScene() {
      return this.scene;
    }
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
  }, {
    key: "setRenderer",
    value: function setRenderer(renderer) {
      this.renderer = renderer;
    }
  }, {
    key: "setScene",
    value: function setScene(scene) {
      this.scene = scene;
    }
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
    }
  }], [{
    key: "getGlobalScene",
    value: function getGlobalScene() {
      return SceneRendererTJS.globalScene;
    }
  }]);

  return SceneRendererTJS;
}();



/***/ }),

/***/ "./src/filters/ARnftFilter.ts":
/*!************************************!*\
  !*** ./src/filters/ARnftFilter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARnftFilter": () => (/* binding */ ARnftFilter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _OneEuroFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OneEuroFilter */ "./src/filters/OneEuroFilter.ts");
/* harmony import */ var _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DelayableSignalFilter */ "./src/filters/DelayableSignalFilter.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_4__);





var ARnftFilter = /*#__PURE__*/function () {
  function ARnftFilter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ARnftFilter);

    this._hasFound = false;
    this._frameDrops = 0;
    this._deltaAccuracy = 10;
    this.filterFrequency = 30.0;
    this.filterMinCutoff = 1.0;
    this.filterBeta = 0.0;
    this.filterDcutoff = 1.0;
    this.delayEnterCheck = new _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_3__.DelayableSignalFilter(2);
    this.delayExitCheck = new _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_3__.DelayableSignalFilter(0);
    this._positionFilter = new _OneEuroFilter__WEBPACK_IMPORTED_MODULE_2__.OneEuroFilterVector3(this.filterFrequency);
    this._rotationFilter = new _OneEuroFilter__WEBPACK_IMPORTED_MODULE_2__.OneEuroFilterVector3(this.filterFrequency * 2);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ARnftFilter, [{
    key: "update",
    value: function update(world) {
      var pos = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
      var rotationVec = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
      var scale = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();

      if (!world) {
        this._hasFound = false;
        this._frameDrops = 0;
      } else {
        var matrixW = new three__WEBPACK_IMPORTED_MODULE_4__.Matrix4();
        var worldMatrix = matrixW.fromArray(this.getArrayMatrix(world));

        if (!this._hasFound) {
          this._hasFound = true;
          var vecTrans = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
          this._lastTranslation = vecTrans.setFromMatrixPosition(worldMatrix);
        } else {
          var _vecTrans = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();

          var _currentTranslation = _vecTrans.setFromMatrixPosition(worldMatrix);

          if (Math.abs(_currentTranslation.distanceTo(this._lastTranslation)) > this._deltaAccuracy) {
            this._frameDrops += 1;

            if (this._frameDrops > 3) {
              this._lastTranslation = _currentTranslation;
            }

            return [pos, rotationVec, scale];
          }

          this._frameDrops = 0;
          this._lastTranslation = _currentTranslation;
        }

        this._positionFilter.UpdateParams(this.filterFrequency, this.filterMinCutoff, this.filterBeta, this.filterDcutoff);

        this._rotationFilter.UpdateParams(this.filterFrequency * 2, this.filterMinCutoff, this.filterBeta, this.filterDcutoff);

        var matrix = new three__WEBPACK_IMPORTED_MODULE_4__.Matrix4();
        matrix = worldMatrix;
        var rotation = new three__WEBPACK_IMPORTED_MODULE_4__.Quaternion();
        var eulerRot = new three__WEBPACK_IMPORTED_MODULE_4__.Euler();
        var position = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0);
        worldMatrix.decompose(position, rotation, scale);
        var eRot = eulerRot.setFromQuaternion(rotation);
        rotationVec = this._rotationFilter.Filter(eRot.toVector3());
        pos = this._positionFilter.Filter(position);
      }

      return [pos, rotationVec, scale];
    }
  }, {
    key: "getArrayMatrix",
    value: function getArrayMatrix(value) {
      var array = [];

      for (var key in value) {
        array[key] = value[key];
      }

      return array;
    }
  }]);

  return ARnftFilter;
}();

/***/ }),

/***/ "./src/filters/DelayableSignalFilter.ts":
/*!**********************************************!*\
  !*** ./src/filters/DelayableSignalFilter.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelayableSignalFilter": () => (/* binding */ DelayableSignalFilter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");



var DelayableSignalFilter = /*#__PURE__*/function () {
  function DelayableSignalFilter(timeOut) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DelayableSignalFilter);

    this._timeOut = timeOut;
    this._inDelay = false;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DelayableSignalFilter, [{
    key: "Update",
    value: function Update(tick) {
      var time = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_2__.getTime)();

      if (!this._inDelay) {
        this._prevTime = time;
        this._totalTime = 0;
      }

      this._totalTime += time - this._prevTime;

      if (this._inDelay && this._totalTime > this._timeOut) {
        this._inDelay = false;
        return true;
      }

      if (tick) {
        this._inDelay = true;
        return false;
      }

      this._inDelay = false;
      return false;
    }
  }]);

  return DelayableSignalFilter;
}();

/***/ }),

/***/ "./src/filters/OneEuroFilter.ts":
/*!**************************************!*\
  !*** ./src/filters/OneEuroFilter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OneEuroFilter),
/* harmony export */   "OneEuroFilterVector3": () => (/* binding */ OneEuroFilterVector3)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);




var LowPassFilter = /*#__PURE__*/function () {
  function LowPassFilter(alpha) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LowPassFilter);

    this.alpha = 0;
    this.setAlpha(alpha);
    this.y = null;
    this.s = null;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LowPassFilter, [{
    key: "setAlpha",
    value: function setAlpha(alpha) {
      if (alpha <= 0 || alpha > 1.0) {
        throw new Error();
      }

      this.alpha = alpha;
    }
  }, {
    key: "filter",
    value: function filter(value, timestamp, alpha) {
      if (alpha) {
        this.setAlpha(alpha);
      }

      var s;

      if (!this.y) {
        s = value;
      } else {
        s = this.alpha * value + (1.0 - this.alpha) * this.s;
      }

      this.y = value;
      this.s = s;
      return s;
    }
  }, {
    key: "lastValue",
    value: function lastValue() {
      return this.y;
    }
  }]);

  return LowPassFilter;
}();

var OneEuroFilter = /*#__PURE__*/function () {
  function OneEuroFilter(freq) {
    var minCutOff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
    var beta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;
    var dCutOff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneEuroFilter);

    if (freq <= 0 || minCutOff <= 0 || dCutOff <= 0) {
      throw new Error();
    }

    this.freq = freq;
    this.minCutOff = minCutOff;
    this.beta = beta;
    this.dCutOff = dCutOff;
    this.x = new LowPassFilter(this.alpha(this.minCutOff));
    this.dx = new LowPassFilter(this.alpha(this.dCutOff));
    this.lasttime = null;
    this.currValue = 0.0;
    this.prevValue = this.currValue;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneEuroFilter, [{
    key: "alpha",
    value: function alpha(cutOff) {
      var te = 1.0 / this.freq;
      var tau = 1.0 / (2 * Math.PI * cutOff);
      return 1.0 / (1.0 + tau / te);
    }
  }, {
    key: "UpdateParams",
    value: function UpdateParams(_freq) {
      var _mincutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;

      var _beta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var _dcutoff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      this.freq = _freq;
      this.minCutOff = _mincutoff;
      this.beta = _beta;
      this.dCutOff = _dcutoff;
      this.x.setAlpha(this.alpha(this.minCutOff));
      this.dx.setAlpha(this.alpha(this.dCutOff));
    }
  }, {
    key: "Filter",
    value: function Filter(x) {
      var timestamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.prevValue = this.currValue;

      if (this.lasttime && timestamp) {
        this.freq = 1.0 / (timestamp - this.lasttime);
      }

      this.lasttime = timestamp;
      var prevX = this.x.lastValue();
      var dx = !prevX ? 0.0 : (x - prevX) * this.freq;
      var edx = this.dx.filter(dx, timestamp, this.alpha(this.dCutOff));
      var cutOff = this.minCutOff + this.beta * Math.abs(edx);
      return this.currValue = this.x.filter(x, timestamp, this.alpha(cutOff));
    }
  }]);

  return OneEuroFilter;
}();


var OneEuroFilterVector3 = /*#__PURE__*/function () {
  function OneEuroFilterVector3(_freq) {
    var _mincutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var _beta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var _dcutoff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneEuroFilterVector3);

    this.currValue = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
    this.prevValue = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
    this._freq = _freq;
    this._mincutoff = _mincutoff;
    this._beta = _beta;
    this._dcutoff = _dcutoff;
    this.oneEuroFilters = [];
    this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
    this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
    this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneEuroFilterVector3, [{
    key: "freq",
    get: function get() {
      return this._freq;
    }
  }, {
    key: "beta",
    get: function get() {
      return this._beta;
    }
  }, {
    key: "dcutoff",
    get: function get() {
      return this._dcutoff;
    }
  }, {
    key: "mincutoff_1",
    get: function get() {
      return this._mincutoff;
    }
  }, {
    key: "UpdateParams",
    value: function UpdateParams(_freq) {
      var _mincutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;

      var _beta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var _dcutoff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      this._freq = _freq;
      this._mincutoff = _mincutoff;
      this._beta = _beta;
      this._dcutoff = _dcutoff;

      for (var i = 0; i < this.oneEuroFilters.length; i++) {
        this.oneEuroFilters[i].UpdateParams(this._freq, this._mincutoff, this._beta, this._dcutoff);
      }
    }
  }, {
    key: "Filter",
    value: function Filter(_value) {
      var timestamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1.0;
      this.prevValue = this.currValue;
      var out = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
      var output = out.toArray();

      var input = _value.toArray();

      this.oneEuroFilters.forEach(function (filters, idx) {
        output[idx] = filters.Filter(input[idx], timestamp);
      });
      var arr = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
      return this.currValue = arr.fromArray(output);
    }
  }]);

  return OneEuroFilterVector3;
}();

/***/ }),

/***/ "./src/markermedia/NFTaddTJS.ts":
/*!**************************************!*\
  !*** ./src/markermedia/NFTaddTJS.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NFTaddTJS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _filters_ARnftFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filters/ARnftFilter */ "./src/filters/ARnftFilter.ts");
/* harmony import */ var _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SceneRendererTJS */ "./src/SceneRendererTJS.ts");








var NFTaddTJS = /*#__PURE__*/function () {
  function NFTaddTJS(uuid) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NFTaddTJS);

    this.entities = [];
    this.scene = _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_6__["default"].getGlobalScene();
    this.target = window || __webpack_require__.g;
    this.uuid = uuid;
    this.names = [];
    this._filter = new _filters_ARnftFilter__WEBPACK_IMPORTED_MODULE_5__.ARnftFilter();
    this._oef = false;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NFTaddTJS, [{
    key: "add",
    value: function add(mesh, name, objVisibility) {
      var _this = this;

      this.target.addEventListener("getNFTData-" + this.uuid + "-" + name, function (ev) {
        var msg = ev.detail;
        mesh.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        mesh.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      root.add(mesh);
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        mesh.visible = true;

        if (_this._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
          filter = _this._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        mesh.visible = objVisibility;
      });
      this.names.push(name);
      this.entities.push({
        name: name
      });
    }
  }, {
    key: "addModel",
    value: function addModel(url, name, scale, objVisibility) {
      var _this2 = this;

      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;
        model.scale.set(scale, scale, scale);
        model.rotation.x = Math.PI / 2;

        _this2.target.addEventListener("getNFTData-" + _this2.uuid + "-" + name, function (ev) {
          var msg = ev.detail;
          model.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
          model.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
        });

        root.add(model);
      });
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        model.visible = true;

        if (_this2._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
          filter = _this2._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        model.visible = objVisibility;
      });
      this.names.push(name);
    }
  }, {
    key: "addModelWithCallback",
    value: function addModelWithCallback(url, name, callback, objVisibility) {
      var _this3 = this;

      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;

        _this3.target.addEventListener("getNFTData-" + _this3.uuid + "-" + name, function (ev) {
          var msg = ev.detail;
          model.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
          model.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
        });

        callback(gltf);
        root.add(model);
      });
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        model.visible = true;

        if (_this3._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
          filter = _this3._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        model.visible = objVisibility;
      });
      this.names.push(name);
    }
  }, {
    key: "addImage",
    value: function addImage(imageUrl, name, color, scale, configs, objVisibility) {
      var _this4 = this;

      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var planeGeom = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(configs.w, configs.h, configs.ws, configs.hs);
      var texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load(imageUrl);
      var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial({
        color: color,
        map: texture
      });
      var plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeom, material);
      plane.scale.set(scale, scale, scale);
      this.target.addEventListener("getNFTData-" + this.uuid + "-" + name, function (ev) {
        var msg = ev.detail;
        plane.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        plane.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      root.add(plane);
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        plane.visible = true;

        if (_this4._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
          filter = _this4._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        plane.visible = objVisibility;
      });
      this.names.push(name);
    }
  }, {
    key: "addVideo",
    value: function addVideo(id, name, scale, configs, objVisibility) {
      var _this5 = this;

      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var ARVideo = document.getElementById(id);
      var texture = new three__WEBPACK_IMPORTED_MODULE_2__.VideoTexture(ARVideo);
      var mat = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial({
        color: 0xbbbbff,
        map: texture
      });
      var planeGeom = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(configs.w, configs.h, configs.ws, configs.hs);
      var plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeom, mat);
      plane.scale.set(scale, scale, scale);
      this.target.addEventListener("getNFTData-" + this.uuid + "-" + name, function (ev) {
        var msg = ev.detail;
        plane.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        plane.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      root.add(plane);
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        ARVideo.play();
        root.visible = true;
        plane.visible = true;

        if (_this5._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
          filter = _this5._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        plane.visible = objVisibility;
        ARVideo.pause();
      });
      this.names.push(name);
    }
  }, {
    key: "getNames",
    value: function getNames() {
      return this.names;
    }
  }, {
    key: "oef",
    get: function get() {
      return this._oef;
    },
    set: function set(enable) {
      this._oef = enable;
    }
  }]);

  return NFTaddTJS;
}();



/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


function getTime() {
  return Math.floor(Date.now() / 1000);
}
var Utils = /*#__PURE__*/function () {
  function Utils() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Utils);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Utils, null, [{
    key: "interpolate",
    value: function interpolate(world) {
      var interpolationFactor = 24;

      for (var i = 0; i < 16; i++) {
        this.trackedMatrix.delta[i] = world[i] - this.trackedMatrix.interpolated[i];
        this.trackedMatrix.interpolated[i] = this.trackedMatrix.interpolated[i] + this.trackedMatrix.delta[i] / interpolationFactor;
      }

      return this.trackedMatrix.interpolated;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent);
    }
  }, {
    key: "setMatrix",
    value: function setMatrix(matrix, value) {
      var array = [];

      for (var key in value) {
        array[key] = value[key];
      }

      if (typeof matrix.elements.set === "function") {
        matrix.elements.set(array);
      } else {
        matrix.elements = [].slice.call(array);
      }
    }
  }]);

  return Utils;
}();
Utils.trackedMatrix = {
  delta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  interpolated: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

/***/ }),

/***/ "three":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","amd":"three","root":"THREE"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_three__;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js":
/*!***************************************************************!*\
  !*** ./node_modules/three/examples/jsm/loaders/GLTFLoader.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTFLoader": () => (/* binding */ GLTFLoader)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");


class GLTFLoader extends three__WEBPACK_IMPORTED_MODULE_0__.Loader {

	constructor( manager ) {

		super( manager );

		this.dracoLoader = null;
		this.ktx2Loader = null;
		this.meshoptDecoder = null;

		this.pluginCallbacks = [];

		this.register( function ( parser ) {

			return new GLTFMaterialsClearcoatExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFTextureBasisUExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFTextureWebPExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsSheenExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsTransmissionExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsVolumeExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsIorExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsSpecularExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFLightsExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMeshoptCompression( parser );

		} );

	}

	load( url, onLoad, onProgress, onError ) {

		const scope = this;

		let resourcePath;

		if ( this.resourcePath !== '' ) {

			resourcePath = this.resourcePath;

		} else if ( this.path !== '' ) {

			resourcePath = this.path;

		} else {

			resourcePath = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.extractUrlBase( url );

		}

		// Tells the LoadingManager to track an extra item, which resolves after
		// the model is fully loaded. This means the count of items loaded will
		// be incorrect, but ensures manager.onLoad() does not fire early.
		this.manager.itemStart( url );

		const _onError = function ( e ) {

			if ( onError ) {

				onError( e );

			} else {

				console.error( e );

			}

			scope.manager.itemError( url );
			scope.manager.itemEnd( url );

		};

		const loader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( this.manager );

		loader.setPath( this.path );
		loader.setResponseType( 'arraybuffer' );
		loader.setRequestHeader( this.requestHeader );
		loader.setWithCredentials( this.withCredentials );

		loader.load( url, function ( data ) {

			try {

				scope.parse( data, resourcePath, function ( gltf ) {

					onLoad( gltf );

					scope.manager.itemEnd( url );

				}, _onError );

			} catch ( e ) {

				_onError( e );

			}

		}, onProgress, _onError );

	}

	setDRACOLoader( dracoLoader ) {

		this.dracoLoader = dracoLoader;
		return this;

	}

	setDDSLoader() {

		throw new Error(

			'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'

		);

	}

	setKTX2Loader( ktx2Loader ) {

		this.ktx2Loader = ktx2Loader;
		return this;

	}

	setMeshoptDecoder( meshoptDecoder ) {

		this.meshoptDecoder = meshoptDecoder;
		return this;

	}

	register( callback ) {

		if ( this.pluginCallbacks.indexOf( callback ) === - 1 ) {

			this.pluginCallbacks.push( callback );

		}

		return this;

	}

	unregister( callback ) {

		if ( this.pluginCallbacks.indexOf( callback ) !== - 1 ) {

			this.pluginCallbacks.splice( this.pluginCallbacks.indexOf( callback ), 1 );

		}

		return this;

	}

	parse( data, path, onLoad, onError ) {

		let content;
		const extensions = {};
		const plugins = {};

		if ( typeof data === 'string' ) {

			content = data;

		} else {

			const magic = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

			if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

				try {

					extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

				} catch ( error ) {

					if ( onError ) onError( error );
					return;

				}

				content = extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content;

			} else {

				content = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( new Uint8Array( data ) );

			}

		}

		const json = JSON.parse( content );

		if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

			if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
			return;

		}

		const parser = new GLTFParser( json, {

			path: path || this.resourcePath || '',
			crossOrigin: this.crossOrigin,
			requestHeader: this.requestHeader,
			manager: this.manager,
			ktx2Loader: this.ktx2Loader,
			meshoptDecoder: this.meshoptDecoder

		} );

		parser.fileLoader.setRequestHeader( this.requestHeader );

		for ( let i = 0; i < this.pluginCallbacks.length; i ++ ) {

			const plugin = this.pluginCallbacks[ i ]( parser );
			plugins[ plugin.name ] = plugin;

			// Workaround to avoid determining as unknown extension
			// in addUnknownExtensionsToUserData().
			// Remove this workaround if we move all the existing
			// extension handlers to plugin system
			extensions[ plugin.name ] = true;

		}

		if ( json.extensionsUsed ) {

			for ( let i = 0; i < json.extensionsUsed.length; ++ i ) {

				const extensionName = json.extensionsUsed[ i ];
				const extensionsRequired = json.extensionsRequired || [];

				switch ( extensionName ) {

					case EXTENSIONS.KHR_MATERIALS_UNLIT:
						extensions[ extensionName ] = new GLTFMaterialsUnlitExtension();
						break;

					case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
						extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension();
						break;

					case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
						extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
						break;

					case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
						extensions[ extensionName ] = new GLTFTextureTransformExtension();
						break;

					case EXTENSIONS.KHR_MESH_QUANTIZATION:
						extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
						break;

					default:

						if ( extensionsRequired.indexOf( extensionName ) >= 0 && plugins[ extensionName ] === undefined ) {

							console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

						}

				}

			}

		}

		parser.setExtensions( extensions );
		parser.setPlugins( plugins );
		parser.parse( onLoad, onError );

	}

}

/* GLTFREGISTRY */

function GLTFRegistry() {

	let objects = {};

	return	{

		get: function ( key ) {

			return objects[ key ];

		},

		add: function ( key, object ) {

			objects[ key ] = object;

		},

		remove: function ( key ) {

			delete objects[ key ];

		},

		removeAll: function () {

			objects = {};

		}

	};

}

/*********************************/
/********** EXTENSIONS ***********/
/*********************************/

const EXTENSIONS = {
	KHR_BINARY_GLTF: 'KHR_binary_glTF',
	KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
	KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
	KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
	KHR_MATERIALS_IOR: 'KHR_materials_ior',
	KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
	KHR_MATERIALS_SHEEN: 'KHR_materials_sheen',
	KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
	KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
	KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
	KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
	KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
	KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
	KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
	EXT_TEXTURE_WEBP: 'EXT_texture_webp',
	EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression'
};

/**
 * Punctual Lights Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
 */
class GLTFLightsExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

		// Object3D instance caches
		this.cache = { refs: {}, uses: {} };

	}

	_markDefs() {

		const parser = this.parser;
		const nodeDefs = this.parser.json.nodes || [];

		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

			const nodeDef = nodeDefs[ nodeIndex ];

			if ( nodeDef.extensions
					&& nodeDef.extensions[ this.name ]
					&& nodeDef.extensions[ this.name ].light !== undefined ) {

				parser._addNodeRef( this.cache, nodeDef.extensions[ this.name ].light );

			}

		}

	}

	_loadLight( lightIndex ) {

		const parser = this.parser;
		const cacheKey = 'light:' + lightIndex;
		let dependency = parser.cache.get( cacheKey );

		if ( dependency ) return dependency;

		const json = parser.json;
		const extensions = ( json.extensions && json.extensions[ this.name ] ) || {};
		const lightDefs = extensions.lights || [];
		const lightDef = lightDefs[ lightIndex ];
		let lightNode;

		const color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 0xffffff );

		if ( lightDef.color !== undefined ) color.fromArray( lightDef.color );

		const range = lightDef.range !== undefined ? lightDef.range : 0;

		switch ( lightDef.type ) {

			case 'directional':
				lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( color );
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			case 'point':
				lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight( color );
				lightNode.distance = range;
				break;

			case 'spot':
				lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight( color );
				lightNode.distance = range;
				// Handle spotlight properties.
				lightDef.spot = lightDef.spot || {};
				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
				lightNode.angle = lightDef.spot.outerConeAngle;
				lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			default:
				throw new Error( 'THREE.GLTFLoader: Unexpected light type: ' + lightDef.type );

		}

		// Some lights (e.g. spot) default to a position other than the origin. Reset the position
		// here, because node-level parsing will only override position if explicitly specified.
		lightNode.position.set( 0, 0, 0 );

		lightNode.decay = 2;

		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

		lightNode.name = parser.createUniqueName( lightDef.name || ( 'light_' + lightIndex ) );

		dependency = Promise.resolve( lightNode );

		parser.cache.add( cacheKey, dependency );

		return dependency;

	}

	createNodeAttachment( nodeIndex ) {

		const self = this;
		const parser = this.parser;
		const json = parser.json;
		const nodeDef = json.nodes[ nodeIndex ];
		const lightDef = ( nodeDef.extensions && nodeDef.extensions[ this.name ] ) || {};
		const lightIndex = lightDef.light;

		if ( lightIndex === undefined ) return null;

		return this._loadLight( lightIndex ).then( function ( light ) {

			return parser._getNodeRef( self.cache, lightIndex, light );

		} );

	}

}

/**
 * Unlit Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
 */
class GLTFMaterialsUnlitExtension {

	constructor() {

		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

	}

	getMaterialType() {

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial;

	}

	extendParams( materialParams, materialDef, parser ) {

		const pending = [];

		materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 1.0, 1.0, 1.0 );
		materialParams.opacity = 1.0;

		const metallicRoughness = materialDef.pbrMetallicRoughness;

		if ( metallicRoughness ) {

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				const array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

		}

		return Promise.all( pending );

	}

}

/**
 * Clearcoat Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
 */
class GLTFMaterialsClearcoatExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		if ( extension.clearcoatFactor !== undefined ) {

			materialParams.clearcoat = extension.clearcoatFactor;

		}

		if ( extension.clearcoatTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatMap', extension.clearcoatTexture ) );

		}

		if ( extension.clearcoatRoughnessFactor !== undefined ) {

			materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;

		}

		if ( extension.clearcoatRoughnessTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture ) );

		}

		if ( extension.clearcoatNormalTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture ) );

			if ( extension.clearcoatNormalTexture.scale !== undefined ) {

				const scale = extension.clearcoatNormalTexture.scale;

				materialParams.clearcoatNormalScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2( scale, scale );

			}

		}

		return Promise.all( pending );

	}

}

/**
 * Sheen Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
 */
class GLTFMaterialsSheenExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		materialParams.sheenColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 0, 0, 0 );
		materialParams.sheenRoughness = 0;
		materialParams.sheen = 1;

		const extension = materialDef.extensions[ this.name ];

		if ( extension.sheenColorFactor !== undefined ) {

			materialParams.sheenColor.fromArray( extension.sheenColorFactor );

		}

		if ( extension.sheenRoughnessFactor !== undefined ) {

			materialParams.sheenRoughness = extension.sheenRoughnessFactor;

		}

		if ( extension.sheenColorTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'sheenColorMap', extension.sheenColorTexture ) );

		}

		if ( extension.sheenRoughnessTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'sheenRoughnessMap', extension.sheenRoughnessTexture ) );

		}

		return Promise.all( pending );

	}

}

/**
 * Transmission Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
 */
class GLTFMaterialsTransmissionExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		if ( extension.transmissionFactor !== undefined ) {

			materialParams.transmission = extension.transmissionFactor;

		}

		if ( extension.transmissionTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'transmissionMap', extension.transmissionTexture ) );

		}

		return Promise.all( pending );

	}

}

/**
 * Materials Volume Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
 */
class GLTFMaterialsVolumeExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;

		if ( extension.thicknessTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'thicknessMap', extension.thicknessTexture ) );

		}

		materialParams.attenuationDistance = extension.attenuationDistance || 0;

		const colorArray = extension.attenuationColor || [ 1, 1, 1 ];
		materialParams.attenuationColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ] );

		return Promise.all( pending );

	}

}

/**
 * Materials ior Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
 */
class GLTFMaterialsIorExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_IOR;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const extension = materialDef.extensions[ this.name ];

		materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;

		return Promise.resolve();

	}

}

/**
 * Materials specular Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
 */
class GLTFMaterialsSpecularExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1.0;

		if ( extension.specularTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'specularIntensityMap', extension.specularTexture ) );

		}

		const colorArray = extension.specularColorFactor || [ 1, 1, 1 ];
		materialParams.specularColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ] );

		if ( extension.specularColorTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'specularColorMap', extension.specularColorTexture ).then( function ( texture ) {

				texture.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;

			} ) );

		}

		return Promise.all( pending );

	}

}

/**
 * BasisU Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
 */
class GLTFTextureBasisUExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_TEXTURE_BASISU;

	}

	loadTexture( textureIndex ) {

		const parser = this.parser;
		const json = parser.json;

		const textureDef = json.textures[ textureIndex ];

		if ( ! textureDef.extensions || ! textureDef.extensions[ this.name ] ) {

			return null;

		}

		const extension = textureDef.extensions[ this.name ];
		const source = json.images[ extension.source ];
		const loader = parser.options.ktx2Loader;

		if ( ! loader ) {

			if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

				throw new Error( 'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures' );

			} else {

				// Assumes that the extension is optional and that a fallback texture is present
				return null;

			}

		}

		return parser.loadTextureImage( textureIndex, source, loader );

	}

}

/**
 * WebP Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
 */
class GLTFTextureWebPExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
		this.isSupported = null;

	}

	loadTexture( textureIndex ) {

		const name = this.name;
		const parser = this.parser;
		const json = parser.json;

		const textureDef = json.textures[ textureIndex ];

		if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

			return null;

		}

		const extension = textureDef.extensions[ name ];
		const source = json.images[ extension.source ];

		let loader = parser.textureLoader;
		if ( source.uri ) {

			const handler = parser.options.manager.getHandler( source.uri );
			if ( handler !== null ) loader = handler;

		}

		return this.detectSupport().then( function ( isSupported ) {

			if ( isSupported ) return parser.loadTextureImage( textureIndex, source, loader );

			if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

				throw new Error( 'THREE.GLTFLoader: WebP required by asset but unsupported.' );

			}

			// Fall back to PNG or JPEG.
			return parser.loadTexture( textureIndex );

		} );

	}

	detectSupport() {

		if ( ! this.isSupported ) {

			this.isSupported = new Promise( function ( resolve ) {

				const image = new Image();

				// Lossy test image. Support for lossy images doesn't guarantee support for all
				// WebP images, unfortunately.
				image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

				image.onload = image.onerror = function () {

					resolve( image.height === 1 );

				};

			} );

		}

		return this.isSupported;

	}

}

/**
 * meshopt BufferView Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
 */
class GLTFMeshoptCompression {

	constructor( parser ) {

		this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
		this.parser = parser;

	}

	loadBufferView( index ) {

		const json = this.parser.json;
		const bufferView = json.bufferViews[ index ];

		if ( bufferView.extensions && bufferView.extensions[ this.name ] ) {

			const extensionDef = bufferView.extensions[ this.name ];

			const buffer = this.parser.getDependency( 'buffer', extensionDef.buffer );
			const decoder = this.parser.options.meshoptDecoder;

			if ( ! decoder || ! decoder.supported ) {

				if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

					throw new Error( 'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files' );

				} else {

					// Assumes that the extension is optional and that fallback buffer data is present
					return null;

				}

			}

			return Promise.all( [ buffer, decoder.ready ] ).then( function ( res ) {

				const byteOffset = extensionDef.byteOffset || 0;
				const byteLength = extensionDef.byteLength || 0;

				const count = extensionDef.count;
				const stride = extensionDef.byteStride;

				const result = new ArrayBuffer( count * stride );
				const source = new Uint8Array( res[ 0 ], byteOffset, byteLength );

				decoder.decodeGltfBuffer( new Uint8Array( result ), count, stride, source, extensionDef.mode, extensionDef.filter );
				return result;

			} );

		} else {

			return null;

		}

	}

}

/* BINARY EXTENSION */
const BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
const BINARY_EXTENSION_HEADER_LENGTH = 12;
const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

class GLTFBinaryExtension {

	constructor( data ) {

		this.name = EXTENSIONS.KHR_BINARY_GLTF;
		this.content = null;
		this.body = null;

		const headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );

		this.header = {
			magic: three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
			version: headerView.getUint32( 4, true ),
			length: headerView.getUint32( 8, true )
		};

		if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

			throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

		} else if ( this.header.version < 2.0 ) {

			throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

		}

		const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
		const chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
		let chunkIndex = 0;

		while ( chunkIndex < chunkContentsLength ) {

			const chunkLength = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			const chunkType = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

				const contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
				this.content = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( contentArray );

			} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

				const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
				this.body = data.slice( byteOffset, byteOffset + chunkLength );

			}

			// Clients must ignore chunks with unknown types.

			chunkIndex += chunkLength;

		}

		if ( this.content === null ) {

			throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

		}

	}

}

/**
 * DRACO Mesh Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
 */
class GLTFDracoMeshCompressionExtension {

	constructor( json, dracoLoader ) {

		if ( ! dracoLoader ) {

			throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

		}

		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
		this.json = json;
		this.dracoLoader = dracoLoader;
		this.dracoLoader.preload();

	}

	decodePrimitive( primitive, parser ) {

		const json = this.json;
		const dracoLoader = this.dracoLoader;
		const bufferViewIndex = primitive.extensions[ this.name ].bufferView;
		const gltfAttributeMap = primitive.extensions[ this.name ].attributes;
		const threeAttributeMap = {};
		const attributeNormalizedMap = {};
		const attributeTypeMap = {};

		for ( const attributeName in gltfAttributeMap ) {

			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

		}

		for ( const attributeName in primitive.attributes ) {

			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			if ( gltfAttributeMap[ attributeName ] !== undefined ) {

				const accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
				const componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

				attributeTypeMap[ threeAttributeName ] = componentType;
				attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

			}

		}

		return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

			return new Promise( function ( resolve ) {

				dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

					for ( const attributeName in geometry.attributes ) {

						const attribute = geometry.attributes[ attributeName ];
						const normalized = attributeNormalizedMap[ attributeName ];

						if ( normalized !== undefined ) attribute.normalized = normalized;

					}

					resolve( geometry );

				}, threeAttributeMap, attributeTypeMap );

			} );

		} );

	}

}

/**
 * Texture Transform Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
 */
class GLTFTextureTransformExtension {

	constructor() {

		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

	}

	extendTexture( texture, transform ) {

		if ( transform.texCoord !== undefined ) {

			console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

		}

		if ( transform.offset === undefined && transform.rotation === undefined && transform.scale === undefined ) {

			// See https://github.com/mrdoob/three.js/issues/21819.
			return texture;

		}

		texture = texture.clone();

		if ( transform.offset !== undefined ) {

			texture.offset.fromArray( transform.offset );

		}

		if ( transform.rotation !== undefined ) {

			texture.rotation = transform.rotation;

		}

		if ( transform.scale !== undefined ) {

			texture.repeat.fromArray( transform.scale );

		}

		texture.needsUpdate = true;

		return texture;

	}

}

/**
 * Specular-Glossiness Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
 */

/**
 * A sub class of StandardMaterial with some of the functionality
 * changed via the `onBeforeCompile` callback
 * @pailhead
 */
class GLTFMeshStandardSGMaterial extends three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial {

	constructor( params ) {

		super();

		this.isGLTFSpecularGlossinessMaterial = true;

		//various chunks that need replacing
		const specularMapParsFragmentChunk = [
			'#ifdef USE_SPECULARMAP',
			'	uniform sampler2D specularMap;',
			'#endif'
		].join( '\n' );

		const glossinessMapParsFragmentChunk = [
			'#ifdef USE_GLOSSINESSMAP',
			'	uniform sampler2D glossinessMap;',
			'#endif'
		].join( '\n' );

		const specularMapFragmentChunk = [
			'vec3 specularFactor = specular;',
			'#ifdef USE_SPECULARMAP',
			'	vec4 texelSpecular = texture2D( specularMap, vUv );',
			'	texelSpecular = sRGBToLinear( texelSpecular );',
			'	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
			'	specularFactor *= texelSpecular.rgb;',
			'#endif'
		].join( '\n' );

		const glossinessMapFragmentChunk = [
			'float glossinessFactor = glossiness;',
			'#ifdef USE_GLOSSINESSMAP',
			'	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
			'	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
			'	glossinessFactor *= texelGlossiness.a;',
			'#endif'
		].join( '\n' );

		const lightPhysicalFragmentChunk = [
			'PhysicalMaterial material;',
			'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );',
			'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
			'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
			'material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
			'material.roughness += geometryRoughness;',
			'material.roughness = min( material.roughness, 1.0 );',
			'material.specularColor = specularFactor;',
		].join( '\n' );

		const uniforms = {
			specular: { value: new three__WEBPACK_IMPORTED_MODULE_0__.Color().setHex( 0xffffff ) },
			glossiness: { value: 1 },
			specularMap: { value: null },
			glossinessMap: { value: null }
		};

		this._extraUniforms = uniforms;

		this.onBeforeCompile = function ( shader ) {

			for ( const uniformName in uniforms ) {

				shader.uniforms[ uniformName ] = uniforms[ uniformName ];

			}

			shader.fragmentShader = shader.fragmentShader
				.replace( 'uniform float roughness;', 'uniform vec3 specular;' )
				.replace( 'uniform float metalness;', 'uniform float glossiness;' )
				.replace( '#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk )
				.replace( '#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk )
				.replace( '#include <roughnessmap_fragment>', specularMapFragmentChunk )
				.replace( '#include <metalnessmap_fragment>', glossinessMapFragmentChunk )
				.replace( '#include <lights_physical_fragment>', lightPhysicalFragmentChunk );

		};

		Object.defineProperties( this, {

			specular: {
				get: function () {

					return uniforms.specular.value;

				},
				set: function ( v ) {

					uniforms.specular.value = v;

				}
			},

			specularMap: {
				get: function () {

					return uniforms.specularMap.value;

				},
				set: function ( v ) {

					uniforms.specularMap.value = v;

					if ( v ) {

						this.defines.USE_SPECULARMAP = ''; // USE_UV is set by the renderer for specular maps

					} else {

						delete this.defines.USE_SPECULARMAP;

					}

				}
			},

			glossiness: {
				get: function () {

					return uniforms.glossiness.value;

				},
				set: function ( v ) {

					uniforms.glossiness.value = v;

				}
			},

			glossinessMap: {
				get: function () {

					return uniforms.glossinessMap.value;

				},
				set: function ( v ) {

					uniforms.glossinessMap.value = v;

					if ( v ) {

						this.defines.USE_GLOSSINESSMAP = '';
						this.defines.USE_UV = '';

					} else {

						delete this.defines.USE_GLOSSINESSMAP;
						delete this.defines.USE_UV;

					}

				}
			}

		} );

		delete this.metalness;
		delete this.roughness;
		delete this.metalnessMap;
		delete this.roughnessMap;

		this.setValues( params );

	}

	copy( source ) {

		super.copy( source );

		this.specularMap = source.specularMap;
		this.specular.copy( source.specular );
		this.glossinessMap = source.glossinessMap;
		this.glossiness = source.glossiness;
		delete this.metalness;
		delete this.roughness;
		delete this.metalnessMap;
		delete this.roughnessMap;
		return this;

	}

}


class GLTFMaterialsPbrSpecularGlossinessExtension {

	constructor() {

		this.name = EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS;

		this.specularGlossinessParams = [
			'color',
			'map',
			'lightMap',
			'lightMapIntensity',
			'aoMap',
			'aoMapIntensity',
			'emissive',
			'emissiveIntensity',
			'emissiveMap',
			'bumpMap',
			'bumpScale',
			'normalMap',
			'normalMapType',
			'displacementMap',
			'displacementScale',
			'displacementBias',
			'specularMap',
			'specular',
			'glossinessMap',
			'glossiness',
			'alphaMap',
			'envMap',
			'envMapIntensity',
			'refractionRatio',
		];

	}

	getMaterialType() {

		return GLTFMeshStandardSGMaterial;

	}

	extendParams( materialParams, materialDef, parser ) {

		const pbrSpecularGlossiness = materialDef.extensions[ this.name ];

		materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 1.0, 1.0, 1.0 );
		materialParams.opacity = 1.0;

		const pending = [];

		if ( Array.isArray( pbrSpecularGlossiness.diffuseFactor ) ) {

			const array = pbrSpecularGlossiness.diffuseFactor;

			materialParams.color.fromArray( array );
			materialParams.opacity = array[ 3 ];

		}

		if ( pbrSpecularGlossiness.diffuseTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'map', pbrSpecularGlossiness.diffuseTexture ) );

		}

		materialParams.emissive = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 0.0, 0.0, 0.0 );
		materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
		materialParams.specular = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 1.0, 1.0, 1.0 );

		if ( Array.isArray( pbrSpecularGlossiness.specularFactor ) ) {

			materialParams.specular.fromArray( pbrSpecularGlossiness.specularFactor );

		}

		if ( pbrSpecularGlossiness.specularGlossinessTexture !== undefined ) {

			const specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
			pending.push( parser.assignTexture( materialParams, 'glossinessMap', specGlossMapDef ) );
			pending.push( parser.assignTexture( materialParams, 'specularMap', specGlossMapDef ) );

		}

		return Promise.all( pending );

	}

	createMaterial( materialParams ) {

		const material = new GLTFMeshStandardSGMaterial( materialParams );
		material.fog = true;

		material.color = materialParams.color;

		material.map = materialParams.map === undefined ? null : materialParams.map;

		material.lightMap = null;
		material.lightMapIntensity = 1.0;

		material.aoMap = materialParams.aoMap === undefined ? null : materialParams.aoMap;
		material.aoMapIntensity = 1.0;

		material.emissive = materialParams.emissive;
		material.emissiveIntensity = 1.0;
		material.emissiveMap = materialParams.emissiveMap === undefined ? null : materialParams.emissiveMap;

		material.bumpMap = materialParams.bumpMap === undefined ? null : materialParams.bumpMap;
		material.bumpScale = 1;

		material.normalMap = materialParams.normalMap === undefined ? null : materialParams.normalMap;
		material.normalMapType = three__WEBPACK_IMPORTED_MODULE_0__.TangentSpaceNormalMap;

		if ( materialParams.normalScale ) material.normalScale = materialParams.normalScale;

		material.displacementMap = null;
		material.displacementScale = 1;
		material.displacementBias = 0;

		material.specularMap = materialParams.specularMap === undefined ? null : materialParams.specularMap;
		material.specular = materialParams.specular;

		material.glossinessMap = materialParams.glossinessMap === undefined ? null : materialParams.glossinessMap;
		material.glossiness = materialParams.glossiness;

		material.alphaMap = null;

		material.envMap = materialParams.envMap === undefined ? null : materialParams.envMap;
		material.envMapIntensity = 1.0;

		material.refractionRatio = 0.98;

		return material;

	}

}

/**
 * Mesh Quantization Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
 */
class GLTFMeshQuantizationExtension {

	constructor() {

		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

	}

}

/*********************************/
/********** INTERPOLATION ********/
/*********************************/

// Spline Interpolation
// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
class GLTFCubicSplineInterpolant extends three__WEBPACK_IMPORTED_MODULE_0__.Interpolant {

	constructor( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

		super( parameterPositions, sampleValues, sampleSize, resultBuffer );

	}

	copySampleValue_( index ) {

		// Copies a sample value to the result buffer. See description of glTF
		// CUBICSPLINE values layout in interpolate_() function below.

		const result = this.resultBuffer,
			values = this.sampleValues,
			valueSize = this.valueSize,
			offset = index * valueSize * 3 + valueSize;

		for ( let i = 0; i !== valueSize; i ++ ) {

			result[ i ] = values[ offset + i ];

		}

		return result;

	}

}

GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

GLTFCubicSplineInterpolant.prototype.interpolate_ = function ( i1, t0, t, t1 ) {

	const result = this.resultBuffer;
	const values = this.sampleValues;
	const stride = this.valueSize;

	const stride2 = stride * 2;
	const stride3 = stride * 3;

	const td = t1 - t0;

	const p = ( t - t0 ) / td;
	const pp = p * p;
	const ppp = pp * p;

	const offset1 = i1 * stride3;
	const offset0 = offset1 - stride3;

	const s2 = - 2 * ppp + 3 * pp;
	const s3 = ppp - pp;
	const s0 = 1 - s2;
	const s1 = s3 - pp + p;

	// Layout of keyframe output values for CUBICSPLINE animations:
	//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
	for ( let i = 0; i !== stride; i ++ ) {

		const p0 = values[ offset0 + i + stride ]; // splineVertex_k
		const m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
		const p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
		const m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

		result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

	}

	return result;

};

const _q = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();

class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {

	interpolate_( i1, t0, t, t1 ) {

		const result = super.interpolate_( i1, t0, t, t1 );

		_q.fromArray( result ).normalize().toArray( result );

		return result;

	}

}


/*********************************/
/********** INTERNALS ************/
/*********************************/

/* CONSTANTS */

const WEBGL_CONSTANTS = {
	FLOAT: 5126,
	//FLOAT_MAT2: 35674,
	FLOAT_MAT3: 35675,
	FLOAT_MAT4: 35676,
	FLOAT_VEC2: 35664,
	FLOAT_VEC3: 35665,
	FLOAT_VEC4: 35666,
	LINEAR: 9729,
	REPEAT: 10497,
	SAMPLER_2D: 35678,
	POINTS: 0,
	LINES: 1,
	LINE_LOOP: 2,
	LINE_STRIP: 3,
	TRIANGLES: 4,
	TRIANGLE_STRIP: 5,
	TRIANGLE_FAN: 6,
	UNSIGNED_BYTE: 5121,
	UNSIGNED_SHORT: 5123
};

const WEBGL_COMPONENT_TYPES = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array
};

const WEBGL_FILTERS = {
	9728: three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter,
	9729: three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter,
	9984: three__WEBPACK_IMPORTED_MODULE_0__.NearestMipmapNearestFilter,
	9985: three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapNearestFilter,
	9986: three__WEBPACK_IMPORTED_MODULE_0__.NearestMipmapLinearFilter,
	9987: three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter
};

const WEBGL_WRAPPINGS = {
	33071: three__WEBPACK_IMPORTED_MODULE_0__.ClampToEdgeWrapping,
	33648: three__WEBPACK_IMPORTED_MODULE_0__.MirroredRepeatWrapping,
	10497: three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping
};

const WEBGL_TYPE_SIZES = {
	'SCALAR': 1,
	'VEC2': 2,
	'VEC3': 3,
	'VEC4': 4,
	'MAT2': 4,
	'MAT3': 9,
	'MAT4': 16
};

const ATTRIBUTES = {
	POSITION: 'position',
	NORMAL: 'normal',
	TANGENT: 'tangent',
	TEXCOORD_0: 'uv',
	TEXCOORD_1: 'uv2',
	COLOR_0: 'color',
	WEIGHTS_0: 'skinWeight',
	JOINTS_0: 'skinIndex',
};

const PATH_PROPERTIES = {
	scale: 'scale',
	translation: 'position',
	rotation: 'quaternion',
	weights: 'morphTargetInfluences'
};

const INTERPOLATION = {
	CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
		                        // keyframe track will be initialized with a default interpolation type, then modified.
	LINEAR: three__WEBPACK_IMPORTED_MODULE_0__.InterpolateLinear,
	STEP: three__WEBPACK_IMPORTED_MODULE_0__.InterpolateDiscrete
};

const ALPHA_MODES = {
	OPAQUE: 'OPAQUE',
	MASK: 'MASK',
	BLEND: 'BLEND'
};

/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
 */
function createDefaultMaterial( cache ) {

	if ( cache[ 'DefaultMaterial' ] === undefined ) {

		cache[ 'DefaultMaterial' ] = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial( {
			color: 0xFFFFFF,
			emissive: 0x000000,
			metalness: 1,
			roughness: 1,
			transparent: false,
			depthTest: true,
			side: three__WEBPACK_IMPORTED_MODULE_0__.FrontSide
		} );

	}

	return cache[ 'DefaultMaterial' ];

}

function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

	// Add unknown glTF extensions to an object's userData.

	for ( const name in objectDef.extensions ) {

		if ( knownExtensions[ name ] === undefined ) {

			object.userData.gltfExtensions = object.userData.gltfExtensions || {};
			object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

		}

	}

}

/**
 * @param {Object3D|Material|BufferGeometry} object
 * @param {GLTF.definition} gltfDef
 */
function assignExtrasToUserData( object, gltfDef ) {

	if ( gltfDef.extras !== undefined ) {

		if ( typeof gltfDef.extras === 'object' ) {

			Object.assign( object.userData, gltfDef.extras );

		} else {

			console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

		}

	}

}

/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
 *
 * @param {BufferGeometry} geometry
 * @param {Array<GLTF.Target>} targets
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */
function addMorphTargets( geometry, targets, parser ) {

	let hasMorphPosition = false;
	let hasMorphNormal = false;

	for ( let i = 0, il = targets.length; i < il; i ++ ) {

		const target = targets[ i ];

		if ( target.POSITION !== undefined ) hasMorphPosition = true;
		if ( target.NORMAL !== undefined ) hasMorphNormal = true;

		if ( hasMorphPosition && hasMorphNormal ) break;

	}

	if ( ! hasMorphPosition && ! hasMorphNormal ) return Promise.resolve( geometry );

	const pendingPositionAccessors = [];
	const pendingNormalAccessors = [];

	for ( let i = 0, il = targets.length; i < il; i ++ ) {

		const target = targets[ i ];

		if ( hasMorphPosition ) {

			const pendingAccessor = target.POSITION !== undefined
				? parser.getDependency( 'accessor', target.POSITION )
				: geometry.attributes.position;

			pendingPositionAccessors.push( pendingAccessor );

		}

		if ( hasMorphNormal ) {

			const pendingAccessor = target.NORMAL !== undefined
				? parser.getDependency( 'accessor', target.NORMAL )
				: geometry.attributes.normal;

			pendingNormalAccessors.push( pendingAccessor );

		}

	}

	return Promise.all( [
		Promise.all( pendingPositionAccessors ),
		Promise.all( pendingNormalAccessors )
	] ).then( function ( accessors ) {

		const morphPositions = accessors[ 0 ];
		const morphNormals = accessors[ 1 ];

		if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
		if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
		geometry.morphTargetsRelative = true;

		return geometry;

	} );

}

/**
 * @param {Mesh} mesh
 * @param {GLTF.Mesh} meshDef
 */
function updateMorphTargets( mesh, meshDef ) {

	mesh.updateMorphTargets();

	if ( meshDef.weights !== undefined ) {

		for ( let i = 0, il = meshDef.weights.length; i < il; i ++ ) {

			mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

		}

	}

	// .extras has user-defined data, so check that .extras.targetNames is an array.
	if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

		const targetNames = meshDef.extras.targetNames;

		if ( mesh.morphTargetInfluences.length === targetNames.length ) {

			mesh.morphTargetDictionary = {};

			for ( let i = 0, il = targetNames.length; i < il; i ++ ) {

				mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

			}

		} else {

			console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

		}

	}

}

function createPrimitiveKey( primitiveDef ) {

	const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];
	let geometryKey;

	if ( dracoExtension ) {

		geometryKey = 'draco:' + dracoExtension.bufferView
				+ ':' + dracoExtension.indices
				+ ':' + createAttributesKey( dracoExtension.attributes );

	} else {

		geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

	}

	return geometryKey;

}

function createAttributesKey( attributes ) {

	let attributesKey = '';

	const keys = Object.keys( attributes ).sort();

	for ( let i = 0, il = keys.length; i < il; i ++ ) {

		attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

	}

	return attributesKey;

}

function getNormalizedComponentScale( constructor ) {

	// Reference:
	// https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data

	switch ( constructor ) {

		case Int8Array:
			return 1 / 127;

		case Uint8Array:
			return 1 / 255;

		case Int16Array:
			return 1 / 32767;

		case Uint16Array:
			return 1 / 65535;

		default:
			throw new Error( 'THREE.GLTFLoader: Unsupported normalized accessor component type.' );

	}

}

/* GLTF PARSER */

class GLTFParser {

	constructor( json = {}, options = {} ) {

		this.json = json;
		this.extensions = {};
		this.plugins = {};
		this.options = options;

		// loader object cache
		this.cache = new GLTFRegistry();

		// associations between Three.js objects and glTF elements
		this.associations = new Map();

		// BufferGeometry caching
		this.primitiveCache = {};

		// Object3D instance caches
		this.meshCache = { refs: {}, uses: {} };
		this.cameraCache = { refs: {}, uses: {} };
		this.lightCache = { refs: {}, uses: {} };

		this.textureCache = {};

		// Track node names, to ensure no duplicates
		this.nodeNamesUsed = {};

		// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
		// expensive work of uploading a texture to the GPU off the main thread.
		if ( typeof createImageBitmap !== 'undefined' && /Firefox/.test( navigator.userAgent ) === false ) {

			this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.ImageBitmapLoader( this.options.manager );

		} else {

			this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader( this.options.manager );

		}

		this.textureLoader.setCrossOrigin( this.options.crossOrigin );
		this.textureLoader.setRequestHeader( this.options.requestHeader );

		this.fileLoader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( this.options.manager );
		this.fileLoader.setResponseType( 'arraybuffer' );

		if ( this.options.crossOrigin === 'use-credentials' ) {

			this.fileLoader.setWithCredentials( true );

		}

	}

	setExtensions( extensions ) {

		this.extensions = extensions;

	}

	setPlugins( plugins ) {

		this.plugins = plugins;

	}

	parse( onLoad, onError ) {

		const parser = this;
		const json = this.json;
		const extensions = this.extensions;

		// Clear the loader cache
		this.cache.removeAll();

		// Mark the special nodes/meshes in json for efficient parse
		this._invokeAll( function ( ext ) {

			return ext._markDefs && ext._markDefs();

		} );

		Promise.all( this._invokeAll( function ( ext ) {

			return ext.beforeRoot && ext.beforeRoot();

		} ) ).then( function () {

			return Promise.all( [

				parser.getDependencies( 'scene' ),
				parser.getDependencies( 'animation' ),
				parser.getDependencies( 'camera' ),

			] );

		} ).then( function ( dependencies ) {

			const result = {
				scene: dependencies[ 0 ][ json.scene || 0 ],
				scenes: dependencies[ 0 ],
				animations: dependencies[ 1 ],
				cameras: dependencies[ 2 ],
				asset: json.asset,
				parser: parser,
				userData: {}
			};

			addUnknownExtensionsToUserData( extensions, result, json );

			assignExtrasToUserData( result, json );

			Promise.all( parser._invokeAll( function ( ext ) {

				return ext.afterRoot && ext.afterRoot( result );

			} ) ).then( function () {

				onLoad( result );

			} );

		} ).catch( onError );

	}

	/**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */
	_markDefs() {

		const nodeDefs = this.json.nodes || [];
		const skinDefs = this.json.skins || [];
		const meshDefs = this.json.meshes || [];

		// Nothing in the node definition indicates whether it is a Bone or an
		// Object3D. Use the skins' joint references to mark bones.
		for ( let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

			const joints = skinDefs[ skinIndex ].joints;

			for ( let i = 0, il = joints.length; i < il; i ++ ) {

				nodeDefs[ joints[ i ] ].isBone = true;

			}

		}

		// Iterate over all nodes, marking references to shared resources,
		// as well as skeleton joints.
		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

			const nodeDef = nodeDefs[ nodeIndex ];

			if ( nodeDef.mesh !== undefined ) {

				this._addNodeRef( this.meshCache, nodeDef.mesh );

				// Nothing in the mesh definition indicates whether it is
				// a SkinnedMesh or Mesh. Use the node's mesh reference
				// to mark SkinnedMesh if node has skin.
				if ( nodeDef.skin !== undefined ) {

					meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

				}

			}

			if ( nodeDef.camera !== undefined ) {

				this._addNodeRef( this.cameraCache, nodeDef.camera );

			}

		}

	}

	/**
	 * Counts references to shared node / Object3D resources. These resources
	 * can be reused, or "instantiated", at multiple nodes in the scene
	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
	 * Textures) can be reused directly and are not marked here.
	 *
	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	 */
	_addNodeRef( cache, index ) {

		if ( index === undefined ) return;

		if ( cache.refs[ index ] === undefined ) {

			cache.refs[ index ] = cache.uses[ index ] = 0;

		}

		cache.refs[ index ] ++;

	}

	/** Returns a reference to a shared resource, cloning it if necessary. */
	_getNodeRef( cache, index, object ) {

		if ( cache.refs[ index ] <= 1 ) return object;

		const ref = object.clone();

		// Propagates mappings to the cloned object, prevents mappings on the
		// original object from being lost.
		const updateMappings = ( original, clone ) => {

			const mappings = this.associations.get( original );
			if ( mappings != null ) {

				this.associations.set( clone, mappings );

			}

			for ( const [ i, child ] of original.children.entries() ) {

				updateMappings( child, clone.children[ i ] );

			}

		};

		updateMappings( object, ref );

		ref.name += '_instance_' + ( cache.uses[ index ] ++ );

		return ref;

	}

	_invokeOne( func ) {

		const extensions = Object.values( this.plugins );
		extensions.push( this );

		for ( let i = 0; i < extensions.length; i ++ ) {

			const result = func( extensions[ i ] );

			if ( result ) return result;

		}

		return null;

	}

	_invokeAll( func ) {

		const extensions = Object.values( this.plugins );
		extensions.unshift( this );

		const pending = [];

		for ( let i = 0; i < extensions.length; i ++ ) {

			const result = func( extensions[ i ] );

			if ( result ) pending.push( result );

		}

		return pending;

	}

	/**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
	 */
	getDependency( type, index ) {

		const cacheKey = type + ':' + index;
		let dependency = this.cache.get( cacheKey );

		if ( ! dependency ) {

			switch ( type ) {

				case 'scene':
					dependency = this.loadScene( index );
					break;

				case 'node':
					dependency = this.loadNode( index );
					break;

				case 'mesh':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadMesh && ext.loadMesh( index );

					} );
					break;

				case 'accessor':
					dependency = this.loadAccessor( index );
					break;

				case 'bufferView':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadBufferView && ext.loadBufferView( index );

					} );
					break;

				case 'buffer':
					dependency = this.loadBuffer( index );
					break;

				case 'material':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadMaterial && ext.loadMaterial( index );

					} );
					break;

				case 'texture':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadTexture && ext.loadTexture( index );

					} );
					break;

				case 'skin':
					dependency = this.loadSkin( index );
					break;

				case 'animation':
					dependency = this.loadAnimation( index );
					break;

				case 'camera':
					dependency = this.loadCamera( index );
					break;

				default:
					throw new Error( 'Unknown type: ' + type );

			}

			this.cache.add( cacheKey, dependency );

		}

		return dependency;

	}

	/**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */
	getDependencies( type ) {

		let dependencies = this.cache.get( type );

		if ( ! dependencies ) {

			const parser = this;
			const defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

			dependencies = Promise.all( defs.map( function ( def, index ) {

				return parser.getDependency( type, index );

			} ) );

			this.cache.add( type, dependencies );

		}

		return dependencies;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	loadBuffer( bufferIndex ) {

		const bufferDef = this.json.buffers[ bufferIndex ];
		const loader = this.fileLoader;

		if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

			throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

		}

		// If present, GLB container is required to be the first buffer.
		if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

			return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

		}

		const options = this.options;

		return new Promise( function ( resolve, reject ) {

			loader.load( three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

				reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

			} );

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	loadBufferView( bufferViewIndex ) {

		const bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

		return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

			const byteLength = bufferViewDef.byteLength || 0;
			const byteOffset = bufferViewDef.byteOffset || 0;
			return buffer.slice( byteOffset, byteOffset + byteLength );

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
	 */
	loadAccessor( accessorIndex ) {

		const parser = this;
		const json = this.json;

		const accessorDef = this.json.accessors[ accessorIndex ];

		if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

			// Ignore empty accessors, which may be used to declare runtime
			// information about attributes coming from another source (e.g. Draco
			// compression extension).
			return Promise.resolve( null );

		}

		const pendingBufferViews = [];

		if ( accessorDef.bufferView !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

		} else {

			pendingBufferViews.push( null );

		}

		if ( accessorDef.sparse !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

		}

		return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

			const bufferView = bufferViews[ 0 ];

			const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
			const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
			const elementBytes = TypedArray.BYTES_PER_ELEMENT;
			const itemBytes = elementBytes * itemSize;
			const byteOffset = accessorDef.byteOffset || 0;
			const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
			const normalized = accessorDef.normalized === true;
			let array, bufferAttribute;

			// The buffer is not interleaved if the stride is the item size in bytes.
			if ( byteStride && byteStride !== itemBytes ) {

				// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
				// This makes sure that IBA.count reflects accessor.count properly
				const ibSlice = Math.floor( byteOffset / byteStride );
				const ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
				let ib = parser.cache.get( ibCacheKey );

				if ( ! ib ) {

					array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

					// Integer parameters to IB/IBA are in array elements, not bytes.
					ib = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBuffer( array, byteStride / elementBytes );

					parser.cache.add( ibCacheKey, ib );

				}

				bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

			} else {

				if ( bufferView === null ) {

					array = new TypedArray( accessorDef.count * itemSize );

				} else {

					array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

				}

				bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( array, itemSize, normalized );

			}

			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
			if ( accessorDef.sparse !== undefined ) {

				const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
				const TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

				const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
				const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

				const sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
				const sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

				if ( bufferView !== null ) {

					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
					bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

				}

				for ( let i = 0, il = sparseIndices.length; i < il; i ++ ) {

					const index = sparseIndices[ i ];

					bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
					if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
					if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
					if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
					if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

				}

			}

			return bufferAttribute;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture>}
	 */
	loadTexture( textureIndex ) {

		const json = this.json;
		const options = this.options;
		const textureDef = json.textures[ textureIndex ];
		const source = json.images[ textureDef.source ];

		let loader = this.textureLoader;

		if ( source.uri ) {

			const handler = options.manager.getHandler( source.uri );
			if ( handler !== null ) loader = handler;

		}

		return this.loadTextureImage( textureIndex, source, loader );

	}

	loadTextureImage( textureIndex, source, loader ) {

		const parser = this;
		const json = this.json;
		const options = this.options;

		const textureDef = json.textures[ textureIndex ];

		const cacheKey = ( source.uri || source.bufferView ) + ':' + textureDef.sampler;

		if ( this.textureCache[ cacheKey ] ) {

			// See https://github.com/mrdoob/three.js/issues/21559.
			return this.textureCache[ cacheKey ];

		}

		const URL = self.URL || self.webkitURL;

		let sourceURI = source.uri || '';
		let isObjectURL = false;

		if ( source.bufferView !== undefined ) {

			// Load binary image data from bufferView, if provided.

			sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

				isObjectURL = true;
				const blob = new Blob( [ bufferView ], { type: source.mimeType } );
				sourceURI = URL.createObjectURL( blob );
				return sourceURI;

			} );

		} else if ( source.uri === undefined ) {

			throw new Error( 'THREE.GLTFLoader: Image ' + textureIndex + ' is missing URI and bufferView' );

		}

		const promise = Promise.resolve( sourceURI ).then( function ( sourceURI ) {

			return new Promise( function ( resolve, reject ) {

				let onLoad = resolve;

				if ( loader.isImageBitmapLoader === true ) {

					onLoad = function ( imageBitmap ) {

						const texture = new three__WEBPACK_IMPORTED_MODULE_0__.Texture( imageBitmap );
						texture.needsUpdate = true;

						resolve( texture );

					};

				}

				loader.load( three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.resolveURL( sourceURI, options.path ), onLoad, undefined, reject );

			} );

		} ).then( function ( texture ) {

			// Clean up resources and configure Texture.

			if ( isObjectURL === true ) {

				URL.revokeObjectURL( sourceURI );

			}

			texture.flipY = false;

			if ( textureDef.name ) texture.name = textureDef.name;

			const samplers = json.samplers || {};
			const sampler = samplers[ textureDef.sampler ] || {};

			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter;
			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter;
			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;
			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;

			parser.associations.set( texture, { textures: textureIndex } );

			return texture;

		} ).catch( function () {

			console.error( 'THREE.GLTFLoader: Couldn\'t load texture', sourceURI );
			return null;

		} );

		this.textureCache[ cacheKey ] = promise;

		return promise;

	}

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise<Texture>}
	 */
	assignTexture( materialParams, mapName, mapDef ) {

		const parser = this;

		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

			// Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
			// However, we will copy UV set 0 to UV set 1 on demand for aoMap
			if ( mapDef.texCoord !== undefined && mapDef.texCoord != 0 && ! ( mapName === 'aoMap' && mapDef.texCoord == 1 ) ) {

				console.warn( 'THREE.GLTFLoader: Custom UV set ' + mapDef.texCoord + ' for texture ' + mapName + ' not yet supported.' );

			}

			if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

				const transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

				if ( transform ) {

					const gltfReference = parser.associations.get( texture );
					texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );
					parser.associations.set( texture, gltfReference );

				}

			}

			materialParams[ mapName ] = texture;

			return texture;

		} );

	}

	/**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accommodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
	 */
	assignFinalMaterial( mesh ) {

		const geometry = mesh.geometry;
		let material = mesh.material;

		const useDerivativeTangents = geometry.attributes.tangent === undefined;
		const useVertexColors = geometry.attributes.color !== undefined;
		const useFlatShading = geometry.attributes.normal === undefined;

		if ( mesh.isPoints ) {

			const cacheKey = 'PointsMaterial:' + material.uuid;

			let pointsMaterial = this.cache.get( cacheKey );

			if ( ! pointsMaterial ) {

				pointsMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial();
				three__WEBPACK_IMPORTED_MODULE_0__.Material.prototype.copy.call( pointsMaterial, material );
				pointsMaterial.color.copy( material.color );
				pointsMaterial.map = material.map;
				pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

				this.cache.add( cacheKey, pointsMaterial );

			}

			material = pointsMaterial;

		} else if ( mesh.isLine ) {

			const cacheKey = 'LineBasicMaterial:' + material.uuid;

			let lineMaterial = this.cache.get( cacheKey );

			if ( ! lineMaterial ) {

				lineMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial();
				three__WEBPACK_IMPORTED_MODULE_0__.Material.prototype.copy.call( lineMaterial, material );
				lineMaterial.color.copy( material.color );

				this.cache.add( cacheKey, lineMaterial );

			}

			material = lineMaterial;

		}

		// Clone the material if it will be modified
		if ( useDerivativeTangents || useVertexColors || useFlatShading ) {

			let cacheKey = 'ClonedMaterial:' + material.uuid + ':';

			if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
			if ( useDerivativeTangents ) cacheKey += 'derivative-tangents:';
			if ( useVertexColors ) cacheKey += 'vertex-colors:';
			if ( useFlatShading ) cacheKey += 'flat-shading:';

			let cachedMaterial = this.cache.get( cacheKey );

			if ( ! cachedMaterial ) {

				cachedMaterial = material.clone();

				if ( useVertexColors ) cachedMaterial.vertexColors = true;
				if ( useFlatShading ) cachedMaterial.flatShading = true;

				if ( useDerivativeTangents ) {

					// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
					if ( cachedMaterial.normalScale ) cachedMaterial.normalScale.y *= - 1;
					if ( cachedMaterial.clearcoatNormalScale ) cachedMaterial.clearcoatNormalScale.y *= - 1;

				}

				this.cache.add( cacheKey, cachedMaterial );

				this.associations.set( cachedMaterial, this.associations.get( material ) );

			}

			material = cachedMaterial;

		}

		// workarounds for mesh and geometry

		if ( material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined ) {

			geometry.setAttribute( 'uv2', geometry.attributes.uv );

		}

		mesh.material = material;

	}

	getMaterialType( /* materialIndex */ ) {

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<Material>}
	 */
	loadMaterial( materialIndex ) {

		const parser = this;
		const json = this.json;
		const extensions = this.extensions;
		const materialDef = json.materials[ materialIndex ];

		let materialType;
		const materialParams = {};
		const materialExtensions = materialDef.extensions || {};

		const pending = [];

		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

			const sgExtension = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
			materialType = sgExtension.getMaterialType();
			pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

		} else if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

			const kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
			materialType = kmuExtension.getMaterialType();
			pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

		} else {

			// Specification:
			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

			const metallicRoughness = materialDef.pbrMetallicRoughness || {};

			materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 1.0, 1.0, 1.0 );
			materialParams.opacity = 1.0;

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				const array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

			if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
				pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

			}

			materialType = this._invokeOne( function ( ext ) {

				return ext.getMaterialType && ext.getMaterialType( materialIndex );

			} );

			pending.push( Promise.all( this._invokeAll( function ( ext ) {

				return ext.extendMaterialParams && ext.extendMaterialParams( materialIndex, materialParams );

			} ) ) );

		}

		if ( materialDef.doubleSided === true ) {

			materialParams.side = three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide;

		}

		const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

		if ( alphaMode === ALPHA_MODES.BLEND ) {

			materialParams.transparent = true;

			// See: https://github.com/mrdoob/three.js/issues/17706
			materialParams.depthWrite = false;

		} else {

			materialParams.format = three__WEBPACK_IMPORTED_MODULE_0__.RGBFormat;
			materialParams.transparent = false;

			if ( alphaMode === ALPHA_MODES.MASK ) {

				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

			}

		}

		if ( materialDef.normalTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

			materialParams.normalScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2( 1, 1 );

			if ( materialDef.normalTexture.scale !== undefined ) {

				const scale = materialDef.normalTexture.scale;

				materialParams.normalScale.set( scale, scale );

			}

		}

		if ( materialDef.occlusionTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

			if ( materialDef.occlusionTexture.strength !== undefined ) {

				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

			}

		}

		if ( materialDef.emissiveFactor !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			materialParams.emissive = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( materialDef.emissiveFactor );

		}

		if ( materialDef.emissiveTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

		}

		return Promise.all( pending ).then( function () {

			let material;

			if ( materialType === GLTFMeshStandardSGMaterial ) {

				material = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

			} else {

				material = new materialType( materialParams );

			}

			if ( materialDef.name ) material.name = materialDef.name;

			// baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
			if ( material.map ) material.map.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;
			if ( material.emissiveMap ) material.emissiveMap.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;

			assignExtrasToUserData( material, materialDef );

			parser.associations.set( material, { materials: materialIndex } );

			if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

			return material;

		} );

	}

	/** When Object3D instances are targeted by animation, they need unique names. */
	createUniqueName( originalName ) {

		const sanitizedName = three__WEBPACK_IMPORTED_MODULE_0__.PropertyBinding.sanitizeNodeName( originalName || '' );

		let name = sanitizedName;

		for ( let i = 1; this.nodeNamesUsed[ name ]; ++ i ) {

			name = sanitizedName + '_' + i;

		}

		this.nodeNamesUsed[ name ] = true;

		return name;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<BufferGeometry>>}
	 */
	loadGeometries( primitives ) {

		const parser = this;
		const extensions = this.extensions;
		const cache = this.primitiveCache;

		function createDracoPrimitive( primitive ) {

			return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
				.decodePrimitive( primitive, parser )
				.then( function ( geometry ) {

					return addPrimitiveAttributes( geometry, primitive, parser );

				} );

		}

		const pending = [];

		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

			const primitive = primitives[ i ];
			const cacheKey = createPrimitiveKey( primitive );

			// See if we've already created this geometry
			const cached = cache[ cacheKey ];

			if ( cached ) {

				// Use the cached geometry if it exists
				pending.push( cached.promise );

			} else {

				let geometryPromise;

				if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

					// Use DRACO geometry if available
					geometryPromise = createDracoPrimitive( primitive );

				} else {

					// Otherwise create a new geometry
					geometryPromise = addPrimitiveAttributes( new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry(), primitive, parser );

				}

				// Cache this geometry
				cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

				pending.push( geometryPromise );

			}

		}

		return Promise.all( pending );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<Group|Mesh|SkinnedMesh>}
	 */
	loadMesh( meshIndex ) {

		const parser = this;
		const json = this.json;
		const extensions = this.extensions;

		const meshDef = json.meshes[ meshIndex ];
		const primitives = meshDef.primitives;

		const pending = [];

		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

			const material = primitives[ i ].material === undefined
				? createDefaultMaterial( this.cache )
				: this.getDependency( 'material', primitives[ i ].material );

			pending.push( material );

		}

		pending.push( parser.loadGeometries( primitives ) );

		return Promise.all( pending ).then( function ( results ) {

			const materials = results.slice( 0, results.length - 1 );
			const geometries = results[ results.length - 1 ];

			const meshes = [];

			for ( let i = 0, il = geometries.length; i < il; i ++ ) {

				const geometry = geometries[ i ];
				const primitive = primitives[ i ];

				// 1. create Mesh

				let mesh;

				const material = materials[ i ];

				if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
						primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
						primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
						primitive.mode === undefined ) {

					// .isSkinnedMesh isn't in glTF spec. See ._markDefs()
					mesh = meshDef.isSkinnedMesh === true
						? new three__WEBPACK_IMPORTED_MODULE_0__.SkinnedMesh( geometry, material )
						: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );

					if ( mesh.isSkinnedMesh === true && ! mesh.geometry.attributes.skinWeight.normalized ) {

						// we normalize floating point skin weight array to fix malformed assets (see #15319)
						// it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
						mesh.normalizeSkinWeights();

					}

					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, three__WEBPACK_IMPORTED_MODULE_0__.TriangleStripDrawMode );

					} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode );

					}

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

					mesh = new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

					mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Line( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

					mesh = new three__WEBPACK_IMPORTED_MODULE_0__.LineLoop( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

					mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Points( geometry, material );

				} else {

					throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

				}

				if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

					updateMorphTargets( mesh, meshDef );

				}

				mesh.name = parser.createUniqueName( meshDef.name || ( 'mesh_' + meshIndex ) );

				assignExtrasToUserData( mesh, meshDef );

				if ( primitive.extensions ) addUnknownExtensionsToUserData( extensions, mesh, primitive );

				parser.assignFinalMaterial( mesh );

				meshes.push( mesh );

			}

			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

				parser.associations.set( meshes[ i ], {
					meshes: meshIndex,
					primitives: i
				} );

			}

			if ( meshes.length === 1 ) {

				return meshes[ 0 ];

			}

			const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();

			parser.associations.set( group, { meshes: meshIndex } );

			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

				group.add( meshes[ i ] );

			}

			return group;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */
	loadCamera( cameraIndex ) {

		let camera;
		const cameraDef = this.json.cameras[ cameraIndex ];
		const params = cameraDef[ cameraDef.type ];

		if ( ! params ) {

			console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
			return;

		}

		if ( cameraDef.type === 'perspective' ) {

			camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

		} else if ( cameraDef.type === 'orthographic' ) {

			camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera( - params.xmag, params.xmag, params.ymag, - params.ymag, params.znear, params.zfar );

		}

		if ( cameraDef.name ) camera.name = this.createUniqueName( cameraDef.name );

		assignExtrasToUserData( camera, cameraDef );

		return Promise.resolve( camera );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Object>}
	 */
	loadSkin( skinIndex ) {

		const skinDef = this.json.skins[ skinIndex ];

		const skinEntry = { joints: skinDef.joints };

		if ( skinDef.inverseBindMatrices === undefined ) {

			return Promise.resolve( skinEntry );

		}

		return this.getDependency( 'accessor', skinDef.inverseBindMatrices ).then( function ( accessor ) {

			skinEntry.inverseBindMatrices = accessor;

			return skinEntry;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<AnimationClip>}
	 */
	loadAnimation( animationIndex ) {

		const json = this.json;

		const animationDef = json.animations[ animationIndex ];

		const pendingNodes = [];
		const pendingInputAccessors = [];
		const pendingOutputAccessors = [];
		const pendingSamplers = [];
		const pendingTargets = [];

		for ( let i = 0, il = animationDef.channels.length; i < il; i ++ ) {

			const channel = animationDef.channels[ i ];
			const sampler = animationDef.samplers[ channel.sampler ];
			const target = channel.target;
			const name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
			const input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
			const output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

			pendingNodes.push( this.getDependency( 'node', name ) );
			pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
			pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
			pendingSamplers.push( sampler );
			pendingTargets.push( target );

		}

		return Promise.all( [

			Promise.all( pendingNodes ),
			Promise.all( pendingInputAccessors ),
			Promise.all( pendingOutputAccessors ),
			Promise.all( pendingSamplers ),
			Promise.all( pendingTargets )

		] ).then( function ( dependencies ) {

			const nodes = dependencies[ 0 ];
			const inputAccessors = dependencies[ 1 ];
			const outputAccessors = dependencies[ 2 ];
			const samplers = dependencies[ 3 ];
			const targets = dependencies[ 4 ];

			const tracks = [];

			for ( let i = 0, il = nodes.length; i < il; i ++ ) {

				const node = nodes[ i ];
				const inputAccessor = inputAccessors[ i ];
				const outputAccessor = outputAccessors[ i ];
				const sampler = samplers[ i ];
				const target = targets[ i ];

				if ( node === undefined ) continue;

				node.updateMatrix();
				node.matrixAutoUpdate = true;

				let TypedKeyframeTrack;

				switch ( PATH_PROPERTIES[ target.path ] ) {

					case PATH_PROPERTIES.weights:

						TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.NumberKeyframeTrack;
						break;

					case PATH_PROPERTIES.rotation:

						TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.QuaternionKeyframeTrack;
						break;

					case PATH_PROPERTIES.position:
					case PATH_PROPERTIES.scale:
					default:

						TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.VectorKeyframeTrack;
						break;

				}

				const targetName = node.name ? node.name : node.uuid;

				const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : three__WEBPACK_IMPORTED_MODULE_0__.InterpolateLinear;

				const targetNames = [];

				if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

					// Node may be a Group (glTF mesh with several primitives) or a Mesh.
					node.traverse( function ( object ) {

						if ( object.isMesh === true && object.morphTargetInfluences ) {

							targetNames.push( object.name ? object.name : object.uuid );

						}

					} );

				} else {

					targetNames.push( targetName );

				}

				let outputArray = outputAccessor.array;

				if ( outputAccessor.normalized ) {

					const scale = getNormalizedComponentScale( outputArray.constructor );
					const scaled = new Float32Array( outputArray.length );

					for ( let j = 0, jl = outputArray.length; j < jl; j ++ ) {

						scaled[ j ] = outputArray[ j ] * scale;

					}

					outputArray = scaled;

				}

				for ( let j = 0, jl = targetNames.length; j < jl; j ++ ) {

					const track = new TypedKeyframeTrack(
						targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
						inputAccessor.array,
						outputArray,
						interpolation
					);

					// Override interpolation with custom factory method.
					if ( sampler.interpolation === 'CUBICSPLINE' ) {

						track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

							// A CUBICSPLINE keyframe in glTF has three output values for each input value,
							// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
							// must be divided by three to get the interpolant's sampleSize argument.

							const interpolantType = ( this instanceof three__WEBPACK_IMPORTED_MODULE_0__.QuaternionKeyframeTrack ) ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;

							return new interpolantType( this.times, this.values, this.getValueSize() / 3, result );

						};

						// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
						track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

					}

					tracks.push( track );

				}

			}

			const name = animationDef.name ? animationDef.name : 'animation_' + animationIndex;

			return new three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip( name, undefined, tracks );

		} );

	}

	createNodeMesh( nodeIndex ) {

		const json = this.json;
		const parser = this;
		const nodeDef = json.nodes[ nodeIndex ];

		if ( nodeDef.mesh === undefined ) return null;

		return parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

			const node = parser._getNodeRef( parser.meshCache, nodeDef.mesh, mesh );

			// if weights are provided on the node, override weights on the mesh.
			if ( nodeDef.weights !== undefined ) {

				node.traverse( function ( o ) {

					if ( ! o.isMesh ) return;

					for ( let i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

						o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

					}

				} );

			}

			return node;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<Object3D>}
	 */
	loadNode( nodeIndex ) {

		const json = this.json;
		const extensions = this.extensions;
		const parser = this;

		const nodeDef = json.nodes[ nodeIndex ];

		// reserve node's name before its dependencies, so the root has the intended name.
		const nodeName = nodeDef.name ? parser.createUniqueName( nodeDef.name ) : '';

		return ( function () {

			const pending = [];

			const meshPromise = parser._invokeOne( function ( ext ) {

				return ext.createNodeMesh && ext.createNodeMesh( nodeIndex );

			} );

			if ( meshPromise ) {

				pending.push( meshPromise );

			}

			if ( nodeDef.camera !== undefined ) {

				pending.push( parser.getDependency( 'camera', nodeDef.camera ).then( function ( camera ) {

					return parser._getNodeRef( parser.cameraCache, nodeDef.camera, camera );

				} ) );

			}

			parser._invokeAll( function ( ext ) {

				return ext.createNodeAttachment && ext.createNodeAttachment( nodeIndex );

			} ).forEach( function ( promise ) {

				pending.push( promise );

			} );

			return Promise.all( pending );

		}() ).then( function ( objects ) {

			let node;

			// .isBone isn't in glTF spec. See ._markDefs
			if ( nodeDef.isBone === true ) {

				node = new three__WEBPACK_IMPORTED_MODULE_0__.Bone();

			} else if ( objects.length > 1 ) {

				node = new three__WEBPACK_IMPORTED_MODULE_0__.Group();

			} else if ( objects.length === 1 ) {

				node = objects[ 0 ];

			} else {

				node = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();

			}

			if ( node !== objects[ 0 ] ) {

				for ( let i = 0, il = objects.length; i < il; i ++ ) {

					node.add( objects[ i ] );

				}

			}

			if ( nodeDef.name ) {

				node.userData.name = nodeDef.name;
				node.name = nodeName;

			}

			assignExtrasToUserData( node, nodeDef );

			if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

			if ( nodeDef.matrix !== undefined ) {

				const matrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
				matrix.fromArray( nodeDef.matrix );
				node.applyMatrix4( matrix );

			} else {

				if ( nodeDef.translation !== undefined ) {

					node.position.fromArray( nodeDef.translation );

				}

				if ( nodeDef.rotation !== undefined ) {

					node.quaternion.fromArray( nodeDef.rotation );

				}

				if ( nodeDef.scale !== undefined ) {

					node.scale.fromArray( nodeDef.scale );

				}

			}

			if ( ! parser.associations.has( node ) ) {

				parser.associations.set( node, {} );

			}

			parser.associations.get( node ).nodes = nodeIndex;

			return node;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<Group>}
	 */
	loadScene( sceneIndex ) {

		const json = this.json;
		const extensions = this.extensions;
		const sceneDef = this.json.scenes[ sceneIndex ];
		const parser = this;

		// Loader returns Group, not Scene.
		// See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
		const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
		if ( sceneDef.name ) scene.name = parser.createUniqueName( sceneDef.name );

		assignExtrasToUserData( scene, sceneDef );

		if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

		const nodeIds = sceneDef.nodes || [];

		const pending = [];

		for ( let i = 0, il = nodeIds.length; i < il; i ++ ) {

			pending.push( buildNodeHierarchy( nodeIds[ i ], scene, json, parser ) );

		}

		return Promise.all( pending ).then( function () {

			// Removes dangling associations, associations that reference a node that
			// didn't make it into the scene.
			const reduceAssociations = ( node ) => {

				const reducedAssociations = new Map();

				for ( const [ key, value ] of parser.associations ) {

					if ( key instanceof three__WEBPACK_IMPORTED_MODULE_0__.Material || key instanceof three__WEBPACK_IMPORTED_MODULE_0__.Texture ) {

						reducedAssociations.set( key, value );

					}

				}

				node.traverse( ( node ) => {

					const mappings = parser.associations.get( node );

					if ( mappings != null ) {

						reducedAssociations.set( node, mappings );

					}

				} );

				return reducedAssociations;

			};

			parser.associations = reduceAssociations( scene );

			return scene;

		} );

	}

}

function buildNodeHierarchy( nodeId, parentObject, json, parser ) {

	const nodeDef = json.nodes[ nodeId ];

	return parser.getDependency( 'node', nodeId ).then( function ( node ) {

		if ( nodeDef.skin === undefined ) return node;

		// build skeleton here as well

		let skinEntry;

		return parser.getDependency( 'skin', nodeDef.skin ).then( function ( skin ) {

			skinEntry = skin;

			const pendingJoints = [];

			for ( let i = 0, il = skinEntry.joints.length; i < il; i ++ ) {

				pendingJoints.push( parser.getDependency( 'node', skinEntry.joints[ i ] ) );

			}

			return Promise.all( pendingJoints );

		} ).then( function ( jointNodes ) {

			node.traverse( function ( mesh ) {

				if ( ! mesh.isMesh ) return;

				const bones = [];
				const boneInverses = [];

				for ( let j = 0, jl = jointNodes.length; j < jl; j ++ ) {

					const jointNode = jointNodes[ j ];

					if ( jointNode ) {

						bones.push( jointNode );

						const mat = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

						if ( skinEntry.inverseBindMatrices !== undefined ) {

							mat.fromArray( skinEntry.inverseBindMatrices.array, j * 16 );

						}

						boneInverses.push( mat );

					} else {

						console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[ j ] );

					}

				}

				mesh.bind( new three__WEBPACK_IMPORTED_MODULE_0__.Skeleton( bones, boneInverses ), mesh.matrixWorld );

			} );

			return node;

		} );

	} ).then( function ( node ) {

		// build node hierachy

		parentObject.add( node );

		const pending = [];

		if ( nodeDef.children ) {

			const children = nodeDef.children;

			for ( let i = 0, il = children.length; i < il; i ++ ) {

				const child = children[ i ];
				pending.push( buildNodeHierarchy( child, node, json, parser ) );

			}

		}

		return Promise.all( pending );

	} );

}

/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 */
function computeBounds( geometry, primitiveDef, parser ) {

	const attributes = primitiveDef.attributes;

	const box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();

	if ( attributes.POSITION !== undefined ) {

		const accessor = parser.json.accessors[ attributes.POSITION ];

		const min = accessor.min;
		const max = accessor.max;

		// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

		if ( min !== undefined && max !== undefined ) {

			box.set(
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( min[ 0 ], min[ 1 ], min[ 2 ] ),
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( max[ 0 ], max[ 1 ], max[ 2 ] )
			);

			if ( accessor.normalized ) {

				const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
				box.min.multiplyScalar( boxScale );
				box.max.multiplyScalar( boxScale );

			}

		} else {

			console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

			return;

		}

	} else {

		return;

	}

	const targets = primitiveDef.targets;

	if ( targets !== undefined ) {

		const maxDisplacement = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		const vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

		for ( let i = 0, il = targets.length; i < il; i ++ ) {

			const target = targets[ i ];

			if ( target.POSITION !== undefined ) {

				const accessor = parser.json.accessors[ target.POSITION ];
				const min = accessor.min;
				const max = accessor.max;

				// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

				if ( min !== undefined && max !== undefined ) {

					// we need to get max of absolute components because target weight is [-1,1]
					vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
					vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
					vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );


					if ( accessor.normalized ) {

						const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
						vector.multiplyScalar( boxScale );

					}

					// Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
					// to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
					// are used to implement key-frame animations and as such only two are active at a time - this results in very large
					// boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
					maxDisplacement.max( vector );

				} else {

					console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

				}

			}

		}

		// As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
		box.expandByVector( maxDisplacement );

	}

	geometry.boundingBox = box;

	const sphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere();

	box.getCenter( sphere.center );
	sphere.radius = box.min.distanceTo( box.max ) / 2;

	geometry.boundingSphere = sphere;

}

/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */
function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

	const attributes = primitiveDef.attributes;

	const pending = [];

	function assignAttributeAccessor( accessorIndex, attributeName ) {

		return parser.getDependency( 'accessor', accessorIndex )
			.then( function ( accessor ) {

				geometry.setAttribute( attributeName, accessor );

			} );

	}

	for ( const gltfAttributeName in attributes ) {

		const threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

		// Skip attributes already provided by e.g. Draco extension.
		if ( threeAttributeName in geometry.attributes ) continue;

		pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

	}

	if ( primitiveDef.indices !== undefined && ! geometry.index ) {

		const accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

			geometry.setIndex( accessor );

		} );

		pending.push( accessor );

	}

	assignExtrasToUserData( geometry, primitiveDef );

	computeBounds( geometry, primitiveDef, parser );

	return Promise.all( pending ).then( function () {

		return primitiveDef.targets !== undefined
			? addMorphTargets( geometry, primitiveDef.targets, parser )
			: geometry;

	} );

}

/**
 * @param {BufferGeometry} geometry
 * @param {Number} drawMode
 * @return {BufferGeometry}
 */
function toTrianglesDrawMode( geometry, drawMode ) {

	let index = geometry.getIndex();

	// generate index if not present

	if ( index === null ) {

		const indices = [];

		const position = geometry.getAttribute( 'position' );

		if ( position !== undefined ) {

			for ( let i = 0; i < position.count; i ++ ) {

				indices.push( i );

			}

			geometry.setIndex( indices );
			index = geometry.getIndex();

		} else {

			console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
			return geometry;

		}

	}

	//

	const numberOfTriangles = index.count - 2;
	const newIndices = [];

	if ( drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode ) {

		// gl.TRIANGLE_FAN

		for ( let i = 1; i <= numberOfTriangles; i ++ ) {

			newIndices.push( index.getX( 0 ) );
			newIndices.push( index.getX( i ) );
			newIndices.push( index.getX( i + 1 ) );

		}

	} else {

		// gl.TRIANGLE_STRIP

		for ( let i = 0; i < numberOfTriangles; i ++ ) {

			if ( i % 2 === 0 ) {

				newIndices.push( index.getX( i ) );
				newIndices.push( index.getX( i + 1 ) );
				newIndices.push( index.getX( i + 2 ) );


			} else {

				newIndices.push( index.getX( i + 2 ) );
				newIndices.push( index.getX( i + 1 ) );
				newIndices.push( index.getX( i ) );

			}

		}

	}

	if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

		console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

	}

	// build final geometry

	const newGeometry = geometry.clone();
	newGeometry.setIndex( newIndices );

	return newGeometry;

}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneRendererTJS */ "./src/SceneRendererTJS.ts");
/* harmony import */ var _markermedia_NFTaddTJS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markermedia/NFTaddTJS */ "./src/markermedia/NFTaddTJS.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  SceneRendererTJS: _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_0__["default"],
  NFTaddTJS: _markermedia_NFTaddTJS__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw4Q0FBOEMsMENBQU87O0FBRXJEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsa0NBQWtDLHdDQUFLO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBd0Msd0NBQUs7O0FBRTdDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyx3Q0FBSzs7QUFFMUM7O0FBRUE7O0FBRUEsdUJBQXVCLCtDQUFZOztBQUVuQyxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTCxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBVSx5REFBc0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQix5REFBc0I7O0FBRXpDLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFF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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSxpRUFBZTtBQUFFLGtCQUFnQixFQUFoQix5REFBRjtBQUFvQixXQUFTLEVBQVQsOERBQVM7QUFBN0IsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvU2NlbmVSZW5kZXJlclRKUy50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvZmlsdGVycy9BUm5mdEZpbHRlci50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvZmlsdGVycy9EZWxheWFibGVTaWduYWxGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL2ZpbHRlcnMvT25lRXVyb0ZpbHRlci50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvbWFya2VybWVkaWEvTkZUYWRkVEpTLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy91dGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvZXh0ZXJuYWwgdW1kIHtcImNvbW1vbmpzXCI6XCJ0aHJlZVwiLFwiY29tbW9uanMyXCI6XCJ0aHJlZVwiLFwiYW1kXCI6XCJ0aHJlZVwiLFwicm9vdFwiOlwiVEhSRUVcIn0iLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInRocmVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFSbmZ0VGhyZWVqc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBUm5mdFRocmVlanNcIl0gPSBmYWN0b3J5KHJvb3RbXCJUSFJFRVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RocmVlX18pIHtcbnJldHVybiAiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvVXRpbHNcIjtcblxuaW50ZXJmYWNlIENvbmZpZ0RhdGEge1xuICAgIGNhbWVyYToge1xuICAgICAgICBmYXI6IG51bWJlcjtcbiAgICAgICAgZm92OiBudW1iZXI7XG4gICAgICAgIG1hdHJpeEF1dG9VcGRhdGU6IGJvb2xlYW47XG4gICAgICAgIG5lYXI6IG51bWJlcjtcbiAgICAgICAgcmF0aW86IG51bWJlcjtcbiAgICB9O1xuICAgIHJlbmRlcmVyOiB7XG4gICAgICAgIGFscGhhOiBib29sZWFuO1xuICAgICAgICBhbnRpYWxpYXM6IGJvb2xlYW47XG4gICAgICAgIGNvbnRleHQ6IGFueTtcbiAgICAgICAgZGVwdGg6IGJvb2xlYW47XG4gICAgICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXI6IGJvb2xlYW47XG4gICAgICAgIHByZWNpc2lvbjogc3RyaW5nO1xuICAgICAgICBzdGVuY2lsOiBib29sZWFuO1xuICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGJvb2xlYW47XG4gICAgICAgIG9ialZpc2liaWxpdHk6IGJvb2xlYW47XG4gICAgfTtcbn1cblxuaW50ZXJmYWNlIFJvb3QgZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG4gICAgLy9tYXRyaXg6IG9iamVjdFxufVxuXG5pbnRlcmZhY2UgUmVuZGVyZXIge1xuICAgIHJlbmRlcjogKHNjZW5lOiBUSFJFRS5TY2VuZSwgY2FtZXJhOiBUSFJFRS5DYW1lcmEpID0+IHZvaWQ7XG4gICAgc2V0UGl4ZWxSYXRpbzogKHBpeGVsUmF0aW86IG51bWJlcikgPT4gdm9pZDtcbiAgICBzZXRTaXplOiAodzogbnVtYmVyLCBoOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDYW1lcmEgZXh0ZW5kcyBUSFJFRS5DYW1lcmEge1xuICAgIG1hdHJpeEF1dG9VcGRhdGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTY2VuZSBleHRlbmRzIFRIUkVFLlNjZW5lIHtcbiAgICBhZGQ6IChub2RlOiBUSFJFRS5PYmplY3QzRCkgPT4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVSZW5kZXJlclRKUyB7XG4gICAgcHVibGljIGNhbnZhc19kcmF3OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhO1xuICAgIHByaXZhdGUgY29uZmlnRGF0YTogQ29uZmlnRGF0YTtcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyO1xuICAgIHByaXZhdGUgdXVpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcm9vdDogUm9vdDtcbiAgICBwcml2YXRlIHRhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgcHJpdmF0ZSBzY2VuZTogU2NlbmU7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2xvYmFsU2NlbmU6IFNjZW5lO1xuICAgIHByaXZhdGUgdmVyc2lvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnRGF0YTogQ29uZmlnRGF0YSwgY2FudmFzRHJhdzogSFRNTENhbnZhc0VsZW1lbnQsIHV1aWQ6IHN0cmluZywgY2FtZXJhQm9vbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNvbmZpZ0RhdGEgPSBjb25maWdEYXRhO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHdpbmRvdyB8fCBnbG9iYWw7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBjYW52YXM6IGNhbnZhc0RyYXcsXG4gICAgICAgICAgICBjb250ZXh0OiBjb25maWdEYXRhLnJlbmRlcmVyLmNvbnRleHQsXG4gICAgICAgICAgICBhbHBoYTogY29uZmlnRGF0YS5yZW5kZXJlci5hbHBoYSxcbiAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogY29uZmlnRGF0YS5yZW5kZXJlci5wcmVtdWx0aXBsaWVkQWxwaGEsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IGNvbmZpZ0RhdGEucmVuZGVyZXIuYW50aWFsaWFzLFxuICAgICAgICAgICAgc3RlbmNpbDogY29uZmlnRGF0YS5yZW5kZXJlci5zdGVuY2lsLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBjb25maWdEYXRhLnJlbmRlcmVyLnByZWNpc2lvbixcbiAgICAgICAgICAgIGRlcHRoOiBjb25maWdEYXRhLnJlbmRlcmVyLmRlcHRoLFxuICAgICAgICAgICAgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogY29uZmlnRGF0YS5yZW5kZXJlci5sb2dhcml0aG1pY0RlcHRoQnVmZmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICBTY2VuZVJlbmRlcmVyVEpTLmdsb2JhbFNjZW5lID0gdGhpcy5zY2VuZTtcbiAgICAgICAgaWYgKGNhbWVyYUJvb2wgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLmZvdixcbiAgICAgICAgICAgICAgICBjb25maWdEYXRhLmNhbWVyYS5yYXRpbyxcbiAgICAgICAgICAgICAgICBjb25maWdEYXRhLmNhbWVyYS5uZWFyLFxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLmZhclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLkNhbWVyYSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFwiMC40LjVcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJBUm5mdFRocmVlanMgdmVyc2lvbjogXCIsIHRoaXMudmVyc2lvbik7XG4gICAgfVxuXG4gICAgaW5pdFJlbmRlcmVyKCkge1xuICAgICAgICB0aGlzLmNhbWVyYS5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRQcm9qZWN0aW9uTWF0cml4XCIsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgodGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCwgZXYuZGV0YWlsLnByb2opO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jYW1lcmEpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGxpZ2h0KTtcblxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0V2luZG93U2l6ZVwiLCAoX2V2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZShfZXYuZGV0YWlsLnN3LCBfZXYuZGV0YWlsLnNoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2V0SW5pdFJlbmRlcmVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJvbkluaXRUaHJlZWpzUmVuZGVyaW5nXCIsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICAgICAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuZGlzcGF0Y2hFdmVudChzZXRJbml0UmVuZGVyZXJFdmVudCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgIH1cblxuICAgIC8vIGdldHRlcnNcblxuICAgIGdldFJlbmRlcmVyKCk6IFJlbmRlcmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXI7XG4gICAgfVxuXG4gICAgZ2V0U2NlbmUoKTogU2NlbmUge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcbiAgICB9XG5cbiAgICBnZXRDYW1lcmEoKTogQ2FtZXJhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRHbG9iYWxTY2VuZSgpOiBTY2VuZSB7XG4gICAgICAgIHJldHVybiBTY2VuZVJlbmRlcmVyVEpTLmdsb2JhbFNjZW5lO1xuICAgIH1cblxuICAgIC8vIHNldHRlcnNcblxuICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgc2V0U2NlbmUoc2NlbmU6IFNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB9XG5cbiAgICBzZXRDYW1lcmEoY2FtZXJhOiBDYW1lcmEpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgfVxuXG4gICAgLy8gdGljayB0byBiZSBpbXBsZW1lbnRlZFxuICAgIC8qIHRpY2sgKCkge1xuICAgIHRoaXMuZHJhdygpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2spXG4gIH0qL1xufVxuIiwiaW1wb3J0IHsgT25lRXVyb0ZpbHRlclZlY3RvcjMgfSBmcm9tIFwiLi9PbmVFdXJvRmlsdGVyXCI7XG5pbXBvcnQgeyBEZWxheWFibGVTaWduYWxGaWx0ZXIgfSBmcm9tIFwiLi9EZWxheWFibGVTaWduYWxGaWx0ZXJcIjtcbmltcG9ydCB7IEV1bGVyLCBNYXRyaXg0LCBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5cbmV4cG9ydCBjbGFzcyBBUm5mdEZpbHRlciB7XG4gICAgcHJpdmF0ZSBkZWxheUV4aXRDaGVjazogRGVsYXlhYmxlU2lnbmFsRmlsdGVyO1xuXG4gICAgcHJpdmF0ZSBkZWxheUVudGVyQ2hlY2s6IERlbGF5YWJsZVNpZ25hbEZpbHRlcjtcblxuICAgIHByaXZhdGUgX2hhc0ZvdW5kOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBwcml2YXRlIF9pbnRlcnBvbGF0aW9uRmFjdG9yOiBudW1iZXIgPSAxNTtcblxuICAgIHByaXZhdGUgX2xhc3RUcmFuc2xhdGlvbjogVmVjdG9yMztcblxuICAgIHByaXZhdGUgX2ZyYW1lRHJvcHM6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9kZWx0YUFjY3VyYWN5OiBudW1iZXIgPSAxMDtcblxuICAgIHByaXZhdGUgX3Bvc2l0aW9uRmlsdGVyOiBPbmVFdXJvRmlsdGVyVmVjdG9yMztcblxuICAgIHByaXZhdGUgX3JvdGF0aW9uRmlsdGVyOiBPbmVFdXJvRmlsdGVyVmVjdG9yMztcblxuICAgIHB1YmxpYyBmaWx0ZXJGcmVxdWVuY3k6IG51bWJlciA9IDMwLjA7XG4gICAgcHVibGljIGZpbHRlck1pbkN1dG9mZjogbnVtYmVyID0gMS4wO1xuICAgIHB1YmxpYyBmaWx0ZXJCZXRhOiBudW1iZXIgPSAwLjA7XG4gICAgcHVibGljIGZpbHRlckRjdXRvZmY6IG51bWJlciA9IDEuMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlbGF5RW50ZXJDaGVjayA9IG5ldyBEZWxheWFibGVTaWduYWxGaWx0ZXIoMik7XG4gICAgICAgIHRoaXMuZGVsYXlFeGl0Q2hlY2sgPSBuZXcgRGVsYXlhYmxlU2lnbmFsRmlsdGVyKDApO1xuXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uRmlsdGVyID0gbmV3IE9uZUV1cm9GaWx0ZXJWZWN0b3IzKHRoaXMuZmlsdGVyRnJlcXVlbmN5KTtcbiAgICAgICAgdGhpcy5fcm90YXRpb25GaWx0ZXIgPSBuZXcgT25lRXVyb0ZpbHRlclZlY3RvcjModGhpcy5maWx0ZXJGcmVxdWVuY3kgKiAyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKHdvcmxkOiBhbnkpOiBWZWN0b3IzW10ge1xuICAgICAgICBsZXQgcG9zOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgbGV0IHJvdGF0aW9uVmVjOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgbGV0IHNjYWxlOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgaWYgKCF3b3JsZCkge1xuICAgICAgICAgICAgdGhpcy5faGFzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lRHJvcHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1hdHJpeFc6IE1hdHJpeDQgPSBuZXcgTWF0cml4NCgpO1xuICAgICAgICAgICAgbGV0IHdvcmxkTWF0cml4OiBNYXRyaXg0ID0gbWF0cml4Vy5mcm9tQXJyYXkodGhpcy5nZXRBcnJheU1hdHJpeCh3b3JsZCkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9oYXNGb3VuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdmVjVHJhbnM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RUcmFuc2xhdGlvbiA9IHZlY1RyYW5zLnNldEZyb21NYXRyaXhQb3NpdGlvbih3b3JsZE1hdHJpeCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB2ZWNUcmFuczogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgICAgICAgICAgbGV0IF9jdXJyZW50VHJhbnNsYXRpb246IFZlY3RvcjMgPSB2ZWNUcmFucy5zZXRGcm9tTWF0cml4UG9zaXRpb24od29ybGRNYXRyaXgpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhfY3VycmVudFRyYW5zbGF0aW9uLmRpc3RhbmNlVG8odGhpcy5fbGFzdFRyYW5zbGF0aW9uKSkgPiB0aGlzLl9kZWx0YUFjY3VyYWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lRHJvcHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ZyYW1lRHJvcHMgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0VHJhbnNsYXRpb24gPSBfY3VycmVudFRyYW5zbGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbcG9zLCByb3RhdGlvblZlYywgc2NhbGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZURyb3BzID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0VHJhbnNsYXRpb24gPSBfY3VycmVudFRyYW5zbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25GaWx0ZXIuVXBkYXRlUGFyYW1zKFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRnJlcXVlbmN5LFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTWluQ3V0b2ZmLFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmV0YSxcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRjdXRvZmZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbkZpbHRlci5VcGRhdGVQYXJhbXMoXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJGcmVxdWVuY3kgKiAyLFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTWluQ3V0b2ZmLFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmV0YSxcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRjdXRvZmZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgbWF0cml4OiBNYXRyaXg0ID0gbmV3IE1hdHJpeDQoKTtcblxuICAgICAgICAgICAgbWF0cml4ID0gd29ybGRNYXRyaXg7XG5cbiAgICAgICAgICAgIGxldCByb3RhdGlvbjogUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgICAgICBsZXQgZXVsZXJSb3Q6IEV1bGVyID0gbmV3IEV1bGVyKCk7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb246IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcblxuICAgICAgICAgICAgLy8gb3IgZXZlbiBzaW1wbGUgZGVjb21wb3NlIHRoZSB3b3JsZE1hdHJpeCBpbnRvIHBvc2l0aW9uLCBxdWF0ZXJuaW9uIGFuZCBzY2FsZSB3aXRoIGRlY29tcG9zZVxuICAgICAgICAgICAgd29ybGRNYXRyaXguZGVjb21wb3NlKHBvc2l0aW9uLCByb3RhdGlvbiwgc2NhbGUpO1xuICAgICAgICAgICAgbGV0IGVSb3QgPSBldWxlclJvdC5zZXRGcm9tUXVhdGVybmlvbihyb3RhdGlvbik7XG4gICAgICAgICAgICByb3RhdGlvblZlYyA9IHRoaXMuX3JvdGF0aW9uRmlsdGVyLkZpbHRlcihlUm90LnRvVmVjdG9yMygpKTtcblxuICAgICAgICAgICAgcG9zID0gdGhpcy5fcG9zaXRpb25GaWx0ZXIuRmlsdGVyKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3Bvcywgcm90YXRpb25WZWMsIHNjYWxlXTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEFycmF5TWF0cml4KHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICB2YXIgYXJyYXk6IGFueSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIGFycmF5W2tleV0gPSB2YWx1ZVtrZXldOyAvLy50b0ZpeGVkKDQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBnZXRUaW1lIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWxheWFibGVTaWduYWxGaWx0ZXIge1xuICAgIHByaXZhdGUgX2luRGVsYXk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfdG90YWxUaW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJldlRpbWU6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX3RpbWVPdXQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHRpbWVPdXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl90aW1lT3V0ID0gdGltZU91dDtcbiAgICAgICAgdGhpcy5faW5EZWxheSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGUodGljazogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5faW5EZWxheSkge1xuICAgICAgICAgICAgdGhpcy5fcHJldlRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy5fdG90YWxUaW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RvdGFsVGltZSArPSB0aW1lIC0gdGhpcy5fcHJldlRpbWU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2luRGVsYXkgJiYgdGhpcy5fdG90YWxUaW1lID4gdGhpcy5fdGltZU91dCkge1xuICAgICAgICAgICAgdGhpcy5faW5EZWxheSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGljaykge1xuICAgICAgICAgICAgdGhpcy5faW5EZWxheSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5EZWxheSA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5cbi8vaHR0cHM6Ly9naXRodWIuY29tL0RhcmlvTWF6emFudGkvT25lRXVyb0ZpbHRlclVuaXR5L2Jsb2IvbWFzdGVyL0Fzc2V0cy9TY3JpcHRzL09uZUV1cm9GaWx0ZXIuY3Ncbi8vaHR0cHM6Ly9naXRodWIuY29tL0RhcmlvTWF6emFudGkvT25lRXVyb0ZpbHRlclVuaXR5L2Jsb2IvbWFzdGVyL0Fzc2V0cy9TY3JpcHRzL0ZpbHRlclRlc3RWZWN0b3IzLmNzXG4vL2h0dHBzOi8vZ2lzdC5naXRodWIuY29tL1Rob3JzdGVuQnV4LzMyMzE4M2JiMGJjMmNjYjkyZmYyM2ViZGYzZGU2NDA4XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG5jbGFzcyBMb3dQYXNzRmlsdGVyIHtcbiAgICB5OiBudW1iZXIgfCBudWxsO1xuXG4gICAgczogbnVtYmVyIHwgbnVsbDtcblxuICAgIGFscGhhID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGFscGhhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRBbHBoYShhbHBoYSk7XG4gICAgICAgIHRoaXMueSA9IG51bGw7XG4gICAgICAgIHRoaXMucyA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0QWxwaGEoYWxwaGE6IG51bWJlcikge1xuICAgICAgICBpZiAoYWxwaGEgPD0gMCB8fCBhbHBoYSA+IDEuMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbHBoYSA9IGFscGhhO1xuICAgIH1cblxuICAgIGZpbHRlcih2YWx1ZTogbnVtYmVyLCB0aW1lc3RhbXA6IG51bWJlciwgYWxwaGE6IG51bWJlcikge1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWxwaGEoYWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzO1xuICAgICAgICBpZiAoIXRoaXMueSkge1xuICAgICAgICAgICAgcyA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IHRoaXMuYWxwaGEgKiB2YWx1ZSArICgxLjAgLSB0aGlzLmFscGhhKSAqIHRoaXMucyE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XG4gICAgICAgIHRoaXMucyA9IHM7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cblxuICAgIGxhc3RWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZUV1cm9GaWx0ZXIge1xuICAgIGZyZXE6IG51bWJlcjtcblxuICAgIG1pbkN1dE9mZjogbnVtYmVyO1xuXG4gICAgYmV0YTogbnVtYmVyO1xuXG4gICAgZEN1dE9mZjogbnVtYmVyO1xuXG4gICAgeDogTG93UGFzc0ZpbHRlcjtcblxuICAgIGR4OiBMb3dQYXNzRmlsdGVyO1xuXG4gICAgbGFzdHRpbWU6IG51bWJlciB8IG51bGw7XG5cbiAgICBwdWJsaWMgY3VyclZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIHByZXZWYWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZnJlcTogbnVtYmVyLCBtaW5DdXRPZmYgPSAxLjAsIGJldGEgPSAwLjAsIGRDdXRPZmYgPSAxLjApIHtcbiAgICAgICAgaWYgKGZyZXEgPD0gMCB8fCBtaW5DdXRPZmYgPD0gMCB8fCBkQ3V0T2ZmIDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnJlcSA9IGZyZXE7XG4gICAgICAgIHRoaXMubWluQ3V0T2ZmID0gbWluQ3V0T2ZmO1xuICAgICAgICB0aGlzLmJldGEgPSBiZXRhO1xuICAgICAgICB0aGlzLmRDdXRPZmYgPSBkQ3V0T2ZmO1xuICAgICAgICB0aGlzLnggPSBuZXcgTG93UGFzc0ZpbHRlcih0aGlzLmFscGhhKHRoaXMubWluQ3V0T2ZmKSk7XG4gICAgICAgIHRoaXMuZHggPSBuZXcgTG93UGFzc0ZpbHRlcih0aGlzLmFscGhhKHRoaXMuZEN1dE9mZikpO1xuICAgICAgICB0aGlzLmxhc3R0aW1lID0gbnVsbDtcblxuICAgICAgICB0aGlzLmN1cnJWYWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB0aGlzLmN1cnJWYWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWxwaGEoY3V0T2ZmOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGUgPSAxLjAgLyB0aGlzLmZyZXE7XG4gICAgICAgIGNvbnN0IHRhdSA9IDEuMCAvICgyICogTWF0aC5QSSAqIGN1dE9mZik7XG4gICAgICAgIHJldHVybiAxLjAgLyAoMS4wICsgdGF1IC8gdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGVQYXJhbXMoX2ZyZXE6IG51bWJlciwgX21pbmN1dG9mZjogbnVtYmVyID0gMS4wLCBfYmV0YTogbnVtYmVyID0gMCwgX2RjdXRvZmY6IG51bWJlciA9IDEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mcmVxID0gX2ZyZXE7XG4gICAgICAgIHRoaXMubWluQ3V0T2ZmID0gX21pbmN1dG9mZjtcbiAgICAgICAgdGhpcy5iZXRhID0gX2JldGE7XG4gICAgICAgIHRoaXMuZEN1dE9mZiA9IF9kY3V0b2ZmO1xuICAgICAgICB0aGlzLnguc2V0QWxwaGEodGhpcy5hbHBoYSh0aGlzLm1pbkN1dE9mZikpO1xuICAgICAgICB0aGlzLmR4LnNldEFscGhhKHRoaXMuYWxwaGEodGhpcy5kQ3V0T2ZmKSk7XG4gICAgfVxuXG4gICAgcHVibGljIEZpbHRlcih4OiBudW1iZXIsIHRpbWVzdGFtcDogbnVtYmVyIHwgbnVsbCA9IG51bGwpOiBudW1iZXIge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHRoaXMuY3VyclZhbHVlO1xuICAgICAgICBpZiAodGhpcy5sYXN0dGltZSAmJiB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHRoaXMuZnJlcSA9IDEuMCAvICh0aW1lc3RhbXAgLSB0aGlzLmxhc3R0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3R0aW1lID0gdGltZXN0YW1wO1xuICAgICAgICBjb25zdCBwcmV2WCA9IHRoaXMueC5sYXN0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZHggPSAhcHJldlggPyAwLjAgOiAoeCAtIHByZXZYKSAqIHRoaXMuZnJlcTtcbiAgICAgICAgY29uc3QgZWR4ID0gdGhpcy5keC5maWx0ZXIoZHgsIHRpbWVzdGFtcCEsIHRoaXMuYWxwaGEodGhpcy5kQ3V0T2ZmKSk7XG4gICAgICAgIGNvbnN0IGN1dE9mZiA9IHRoaXMubWluQ3V0T2ZmICsgdGhpcy5iZXRhICogTWF0aC5hYnMoZWR4KTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJWYWx1ZSA9IHRoaXMueC5maWx0ZXIoeCwgdGltZXN0YW1wISwgdGhpcy5hbHBoYShjdXRPZmYpKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT25lRXVyb0ZpbHRlclZlY3RvcjMge1xuICAgIC8vIGNvbnRhaW5zdCB0aGUgdHlwZSBvZiBUXG4gICAgLy8gdGhlIGFycmF5IG9mIGZpbHRlcnNcbiAgICBwcml2YXRlIG9uZUV1cm9GaWx0ZXJzOiBBcnJheTxPbmVFdXJvRmlsdGVyPjtcblxuICAgIHByaXZhdGUgX2ZyZXE6IG51bWJlcjtcbiAgICBwdWJsaWMgZ2V0IGZyZXEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZyZXE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYmV0YTogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgYmV0YSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmV0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kY3V0b2ZmOiBudW1iZXI7XG4gICAgcHVibGljIGdldCBkY3V0b2ZmKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kY3V0b2ZmO1xuICAgIH1cbiAgICBwcml2YXRlIF9taW5jdXRvZmY6IG51bWJlcjtcbiAgICBwdWJsaWMgZ2V0IG1pbmN1dG9mZl8xKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5jdXRvZmY7XG4gICAgfVxuXG4gICAgLy8gY3VyclZhbHVlIGNvbnRhaW5zIHRoZSBsYXRlc3QgdmFsdWUgd2hpY2ggaGF2ZSBiZWVuIHN1Y2Nlc2Z1bGx5IGZpbHRlcmVkXG4gICAgLy8gcHJldlZhbHVlIGNvbnRhaW5zIHRoZSBwcmV2aW91cyBmaWx0ZXJlZCB2YWx1ZVxuXG4gICAgcHJpdmF0ZSBjdXJyVmFsdWU6IFZlY3RvcjM7XG4gICAgcHJpdmF0ZSBwcmV2VmFsdWU6IFZlY3RvcjM7XG5cbiAgICAvLyBpbml0aWFsaXphdGlvbiBvZiBvdXIgZmlsdGVyKHMpXG4gICAgY29uc3RydWN0b3IoX2ZyZXE6IG51bWJlciwgX21pbmN1dG9mZjogbnVtYmVyID0gMSwgX2JldGE6IG51bWJlciA9IDAsIF9kY3V0b2ZmOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHRoaXMuY3VyclZhbHVlID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSBuZXcgVmVjdG9yMygpO1xuXG4gICAgICAgIHRoaXMuX2ZyZXEgPSBfZnJlcTtcbiAgICAgICAgdGhpcy5fbWluY3V0b2ZmID0gX21pbmN1dG9mZjtcbiAgICAgICAgdGhpcy5fYmV0YSA9IF9iZXRhO1xuICAgICAgICB0aGlzLl9kY3V0b2ZmID0gX2RjdXRvZmY7XG5cbiAgICAgICAgdGhpcy5vbmVFdXJvRmlsdGVycyA9IFtdO1xuICAgICAgICB0aGlzLm9uZUV1cm9GaWx0ZXJzLnB1c2gobmV3IE9uZUV1cm9GaWx0ZXIoX2ZyZXEsIF9taW5jdXRvZmYsIF9iZXRhLCBfZGN1dG9mZikpO1xuICAgICAgICB0aGlzLm9uZUV1cm9GaWx0ZXJzLnB1c2gobmV3IE9uZUV1cm9GaWx0ZXIoX2ZyZXEsIF9taW5jdXRvZmYsIF9iZXRhLCBfZGN1dG9mZikpO1xuICAgICAgICB0aGlzLm9uZUV1cm9GaWx0ZXJzLnB1c2gobmV3IE9uZUV1cm9GaWx0ZXIoX2ZyZXEsIF9taW5jdXRvZmYsIF9iZXRhLCBfZGN1dG9mZikpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZXMgdGhlIGZpbHRlciBwYXJhbWV0ZXJzXG4gICAgcHVibGljIFVwZGF0ZVBhcmFtcyhfZnJlcTogbnVtYmVyLCBfbWluY3V0b2ZmOiBudW1iZXIgPSAxLjAsIF9iZXRhOiBudW1iZXIgPSAwLCBfZGN1dG9mZjogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9mcmVxID0gX2ZyZXE7XG4gICAgICAgIHRoaXMuX21pbmN1dG9mZiA9IF9taW5jdXRvZmY7XG4gICAgICAgIHRoaXMuX2JldGEgPSBfYmV0YTtcbiAgICAgICAgdGhpcy5fZGN1dG9mZiA9IF9kY3V0b2ZmO1xuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm9uZUV1cm9GaWx0ZXJzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5vbmVFdXJvRmlsdGVyc1tpXS5VcGRhdGVQYXJhbXModGhpcy5fZnJlcSwgdGhpcy5fbWluY3V0b2ZmLCB0aGlzLl9iZXRhLCB0aGlzLl9kY3V0b2ZmKTtcbiAgICB9XG5cbiAgICAvLyBmaWx0ZXJzIHRoZSBwcm92aWRlZCBfdmFsdWUgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAgICAvLyBOb3RlOiBhIHRpbWVzdGFtcCBjYW4gYWxzbyBiZSBwcm92aWRlZCAtIHdpbGwgb3ZlcnJpZGUgZmlsdGVyIGZyZXF1ZW5jeS5cbiAgICBwdWJsaWMgRmlsdGVyKF92YWx1ZTogVmVjdG9yMywgdGltZXN0YW1wOiBudW1iZXIgPSAtMS4wKTogVmVjdG9yMyB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdGhpcy5jdXJyVmFsdWU7XG5cbiAgICAgICAgLy9sZXQgb3V0cHV0OiBudW1iZXJbXSA9IFZlY3RvcjMuWmVyb1JlYWRPbmx5LmFzQXJyYXkoKTsgLy8gQmFieWxvbiBjb2RlLi4uXG4gICAgICAgIGxldCBvdXQ6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBsZXQgb3V0cHV0OiBudW1iZXJbXSA9IG91dC50b0FycmF5KCk7XG5cbiAgICAgICAgLy9sZXQgaW5wdXQ6IG51bWJlcltdID0gX3ZhbHVlLmFzQXJyYXkoKTsgLy8gQmFieWxvbiBjb2RlXG4gICAgICAgIGxldCBpbnB1dDogbnVtYmVyW10gPSBfdmFsdWUudG9BcnJheSgpO1xuXG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMuZm9yRWFjaCgoZmlsdGVycywgaWR4KSA9PiB7XG4gICAgICAgICAgICBvdXRwdXRbaWR4XSA9IGZpbHRlcnMuRmlsdGVyKGlucHV0W2lkeF0sIHRpbWVzdGFtcCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhcnI6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyVmFsdWUgPSBhcnIuZnJvbUFycmF5KG91dHB1dCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgT2JqZWN0M0QsXG4gICAgUGxhbmVHZW9tZXRyeSxcbiAgICBTY2VuZSxcbiAgICBUZXh0dXJlTG9hZGVyLFxuICAgIFZpZGVvVGV4dHVyZSxcbiAgICBNZXNoLFxuICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuICAgIFZlY3RvcjMsXG59IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHsgQVJuZnRGaWx0ZXIgfSBmcm9tIFwiLi4vZmlsdGVycy9BUm5mdEZpbHRlclwiO1xuaW1wb3J0IFNjZW5lUmVuZGVyZXJUSlMgZnJvbSBcIi4uL1NjZW5lUmVuZGVyZXJUSlNcIjtcblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gZGVmaW5lIHRoZSBBUlZpZGVvIG9iamVjdCB1c2VkIGluIGFkZFZpZGVvLlxuICogQHBhcmFtIHBsYXkgcGxheSBhIHZpZGVvLlxuICovXG5pbnRlcmZhY2UgQVJ2aWRlbyB7XG4gICAgcGxheTogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gZGVmaW5lIGFuIEVudGl0eS5cbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBFbnRpdHlcbiAqL1xuaW50ZXJmYWNlIEVudGl0eSB7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSB0byBkZWZpbmUgdGhlIFBsYW5lR2VvbWV0cnkgdXNlZCBpbiB0aGUgYWRkSW1hZ2UgYW5kIGFkZFZpZGVvIGZ1bmN0aW9ucy5cbiAqIEBwYXJhbSB3ICB3aWR0aCBvZiB0aGUgUGxhbmVHZW9tZXRyeS5cbiAqIEBwYXJhbSBoIGhlaWdodCBvZiB0aGUgUGxhbmVHZW9tZXRyeS5cbiAqIEBwYXJhbSB3cyB3aWR0aCBudW1iZXIgb2Ygc2VnbWVudHMgb2YgdGhlIFBsYW5lR2VvbWV0cnkuXG4gKiBAcGFyYW0gaHMgaGVpZ2h0IG51bWJlciBvZiBzZWdtZW50cyBvZiB0aGUgUGxhbmVHZW9tZXRyeS5cbiAqL1xuaW50ZXJmYWNlIElQbGFuZUNvbmZpZyB7XG4gICAgdzogbnVtYmVyO1xuICAgIGg6IG51bWJlcjtcbiAgICB3czogbnVtYmVyO1xuICAgIGhzOiBudW1iZXI7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zYWJsZSB0byBhdHRhY2ggVGhyZWVqcyBvYmplY3QgdG8gdGhlIHJlbmRlcmluZyByb290IGFuZCBwYXNzIG1hdHJpeCBkYXRhIHRvIGl0LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBORlRhZGRUSlMge1xuICAgIHByaXZhdGUgZW50aXRpZXM6IEVudGl0eVtdID0gW107XG4gICAgcHJpdmF0ZSBuYW1lczogQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIHNjZW5lOiBTY2VuZTtcbiAgICBwcml2YXRlIHRhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgcHJpdmF0ZSB1dWlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmlsdGVyOiBBUm5mdEZpbHRlcjtcbiAgICBwcml2YXRlIF9vZWY6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgTkZUYWRkVEpTIGNvbnN0dWN0b3IsIHlvdSBuZWVkIHRvIHBhc3MgdGhlIHV1aWQgZnJvbSB0aGUgQVJuZnQgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHV1aWQgdGhlIHV1aWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXVpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBTY2VuZVJlbmRlcmVyVEpTLmdldEdsb2JhbFNjZW5lKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gd2luZG93IHx8IGdsb2JhbDtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy5uYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLl9maWx0ZXIgPSBuZXcgQVJuZnRGaWx0ZXIoKTtcbiAgICAgICAgdGhpcy5fb2VmID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFkZCBmdW5jdGlvbiB3aWxsIGFkZCBhIG1lc2ggdG8gdGhlIFJlbmRlcmVyIHJvb3QuIFlvdSBuZWVkIHRvIGFzc29jaWF0ZSBhIG5hbWUgb2YgdGhlIEVudGl0eS5cbiAgICAgKiBAcGFyYW0gbWVzaCBUaGUgbWVzaCB0byBhZGRcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgRW50aXR5IGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIG9ialZpc2liaWxpdHkgc2V0IHRydWUgb3IgZmFsc2UgaWYgdGhlIG1lc2ggd2xsIHN0YXkgdmlzaWJsZSBvciBub3QgYWZ0ZXIgdHJhY2tpbmcuXG4gICAgICovXG4gICAgcHVibGljIGFkZChtZXNoOiBPYmplY3QzRCwgbmFtZTogc3RyaW5nLCBvYmpWaXNpYmlsaXR5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRORlREYXRhLVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbDtcbiAgICAgICAgICAgIG1lc2gucG9zaXRpb24ueSA9ICgobXNnLmhlaWdodCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgICAgIG1lc2gucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSBcInJvb3QtXCIgKyBuYW1lO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgcm9vdC5hZGQobWVzaCk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRNYXRyaXhHTF9SSC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBtZXNoLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29lZiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBbbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKV07XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5fZmlsdGVyLnVwZGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WChmaWx0ZXJbMF0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRZKGZpbHRlclswXS55KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFooZmlsdGVyWzBdLnopO1xuICAgICAgICAgICAgICAgIHJvb3Qucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmlsdGVyWzFdKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFgoZmlsdGVyWzJdLngpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WShmaWx0ZXJbMl0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRaKGZpbHRlclsyXS56KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIG1lc2gudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaCh7IG5hbWUgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFkZE1vZGVsIGZ1bmN0aW9uIHdpbGwgYWRkIGEgbW9kZWwgdG8gdGhlIFJlbmRlcmVyIHJvb3QuIFlvdSBuZWVkIHRvIGFzc29jaWF0ZSBhIG5hbWUgb2YgdGhlIEVudGl0eS5cbiAgICAgKiBAcGFyYW0gdXJsIHVybCBvZiB0aGUgbW9kZWwuXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBzY2FsZSBzY2FsZSBvZiB0aGUgbW9kZWwuXG4gICAgICogQHBhcmFtIG9ialZpc2liaWxpdHkgc2V0IHRydWUgb3IgZmFsc2UgaWYgdGhlIG1lc2ggd2xsIHN0YXkgdmlzaWJsZSBvciBub3QgYWZ0ZXIgdHJhY2tpbmcuXG4gICAgICovXG4gICAgcHVibGljIGFkZE1vZGVsKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIsIG9ialZpc2liaWxpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSBcInJvb3QtXCIgKyBuYW1lO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgbGV0IG1vZGVsOiBhbnk7XG4gICAgICAgIC8qIExvYWQgTW9kZWwgKi9cbiAgICAgICAgY29uc3QgdGhyZWVHTFRGTG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcbiAgICAgICAgdGhyZWVHTFRGTG9hZGVyLmxvYWQodXJsLCAoZ2x0ZikgPT4ge1xuICAgICAgICAgICAgbW9kZWwgPSBnbHRmLnNjZW5lO1xuICAgICAgICAgICAgbW9kZWwuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuICAgICAgICAgICAgbW9kZWwucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE5GVERhdGEtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbDtcbiAgICAgICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnggPSAoKG1zZy53aWR0aCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcm9vdC5hZGQobW9kZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE1hdHJpeEdMX1JILVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29lZiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBbbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKV07XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5fZmlsdGVyLnVwZGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WChmaWx0ZXJbMF0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRZKGZpbHRlclswXS55KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFooZmlsdGVyWzBdLnopO1xuICAgICAgICAgICAgICAgIHJvb3Qucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmlsdGVyWzFdKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFgoZmlsdGVyWzJdLngpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WShmaWx0ZXJbMl0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRaKGZpbHRlclsyXS56KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGRNb2RlbFdpdGhDYWxsYmFjayBmdW5jdGlvbiB3aWxsIGFkZCBhIG1vZGVsIHRvIHRoZSBSZW5kZXJlciByb290LiBZb3UgbmVlZCB0byBhc3NvY2lhdGUgYSBuYW1lIG9mIHRoZSBFbnRpdHkuXG4gICAgICogWW91IGNhbiBtb2RpZnkgdGhlIG1vZGVsIHJvdGF0aW9uLCBzY2FsZSBhbmQgb3RoZXIgcHJvcGVydGllcyB3aXRoIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0gdXJsIHVybCBvZiB0aGUgbW9kZWwuXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBtb2RpZnkgdGhlIG1vZGVsIGluIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTW9kZWxXaXRoQ2FsbGJhY2sodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChnbHRmOiBhbnkpID0+IHt9LCBvYmpWaXNpYmlsaXR5OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gXCJyb290LVwiICsgbmFtZTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocm9vdCk7XG4gICAgICAgIGxldCBtb2RlbDogYW55O1xuICAgICAgICAvKiBMb2FkIE1vZGVsICovXG4gICAgICAgIGNvbnN0IHRocmVlR0xURkxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG4gICAgICAgIHRocmVlR0xURkxvYWRlci5sb2FkKHVybCwgKGdsdGYpID0+IHtcbiAgICAgICAgICAgIG1vZGVsID0gZ2x0Zi5zY2VuZTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRORlREYXRhLVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueSA9ICgobXNnLmhlaWdodCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi54ID0gKChtc2cud2lkdGggLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGdsdGYpO1xuICAgICAgICAgICAgcm9vdC5hZGQobW9kZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE1hdHJpeEdMX1JILVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29lZiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBbbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKV07XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5fZmlsdGVyLnVwZGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WChmaWx0ZXJbMF0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRZKGZpbHRlclswXS55KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFooZmlsdGVyWzBdLnopO1xuICAgICAgICAgICAgICAgIHJvb3Qucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmlsdGVyWzFdKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFgoZmlsdGVyWzJdLngpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WShmaWx0ZXJbMl0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRaKGZpbHRlclsyXS56KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGRJbWFnZSBmdW5jdGlvbiB3aWxsIGFkZCBhbiBpbWFnZSB0byB0aGUgUmVuZGVyZXIgcm9vdC4gWW91IG5lZWQgdG8gYXNzb2NpYXRlIGEgbmFtZSBvZiB0aGUgRW50aXR5LlxuICAgICAqIEBwYXJhbSBpbWFnZVVybCB1cmwgb2YgdGhlIGltYWdlLlxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBFbnRpdHkgYXNzb2NpYXRlZC5cbiAgICAgKiBAcGFyYW0gY29sb3IgY29sb3Igb2YgdGhlIGJhY2tncm91bmQgcGxhbmUuXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIG9mIHRoZSBwbGFuZS5cbiAgICAgKiBAcGFyYW0gY29uZmlncyBzZWUgSVBsYW5lQ29uZmlnLlxuICAgICAqIEBwYXJhbSBvYmpWaXNpYmlsaXR5IHNldCB0cnVlIG9yIGZhbHNlIGlmIHRoZSBtZXNoIHdsbCBzdGF5IHZpc2libGUgb3Igbm90IGFmdGVyIHRyYWNraW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRJbWFnZShcbiAgICAgICAgaW1hZ2VVcmw6IHN0cmluZyxcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBjb2xvcjogc3RyaW5nLFxuICAgICAgICBzY2FsZTogbnVtYmVyLFxuICAgICAgICBjb25maWdzOiBJUGxhbmVDb25maWcsXG4gICAgICAgIG9ialZpc2liaWxpdHk6IGJvb2xlYW5cbiAgICApIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSBcInJvb3QtXCIgKyBuYW1lO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tID0gbmV3IFBsYW5lR2VvbWV0cnkoY29uZmlncy53LCBjb25maWdzLmgsIGNvbmZpZ3Mud3MsIGNvbmZpZ3MuaHMpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmVMb2FkZXIoKS5sb2FkKGltYWdlVXJsKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogY29sb3IsIG1hcDogdGV4dHVyZSB9KTtcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb20sIG1hdGVyaWFsKTtcbiAgICAgICAgcGxhbmUuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vdC5hZGQocGxhbmUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcGxhbmUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2VmID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlciA9IFtuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApXTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLl9maWx0ZXIudXBkYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRYKGZpbHRlclswXS54KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFkoZmlsdGVyWzBdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WihmaWx0ZXJbMF0ueik7XG4gICAgICAgICAgICAgICAgcm9vdC5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmaWx0ZXJbMV0pO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WChmaWx0ZXJbMl0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRZKGZpbHRlclsyXS55KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFooZmlsdGVyWzJdLnopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJuZnRUcmFja2luZ0xvc3QtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgcGxhbmUudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFkZFZpZGVvIGZ1bmN0aW9uIHdpbGwgYWRkIGEgdmlkZW8gdG8gdGhlIFJlbmRlcmVyIHJvb3QuIFlvdSBuZWVkIHRvIGFzc29jaWF0ZSBhIG5hbWUgb2YgdGhlIEVudGl0eS5cbiAgICAgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBodG1sIHZpZGVvIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBzY2FsZSBzY2FsZSBvZiB0aGUgcGxhbmUuXG4gICAgICogQHBhcmFtIGNvbmZpZ3Mgc2VlIElQbGFuZUNvbmZpZy5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkVmlkZW8oaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBzY2FsZTogbnVtYmVyLCBjb25maWdzOiBJUGxhbmVDb25maWcsIG9ialZpc2liaWxpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSBcInJvb3QtXCIgKyBuYW1lO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgY29uc3QgQVJWaWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MVmlkZW9FbGVtZW50O1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFZpZGVvVGV4dHVyZShBUlZpZGVvIGFzIEhUTUxWaWRlb0VsZW1lbnQpO1xuICAgICAgICBjb25zdCBtYXQgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhiYmJiZmYsIG1hcDogdGV4dHVyZSB9KTtcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tID0gbmV3IFBsYW5lR2VvbWV0cnkoY29uZmlncy53LCBjb25maWdzLmgsIGNvbmZpZ3Mud3MsIGNvbmZpZ3MuaHMpO1xuICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbSwgbWF0KTtcbiAgICAgICAgcGxhbmUuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vdC5hZGQocGxhbmUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICBBUlZpZGVvLnBsYXkoKVxuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBsYW5lLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29lZiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBbbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKV07XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5fZmlsdGVyLnVwZGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WChmaWx0ZXJbMF0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRZKGZpbHRlclswXS55KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFooZmlsdGVyWzBdLnopO1xuICAgICAgICAgICAgICAgIHJvb3Qucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmlsdGVyWzFdKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFgoZmlsdGVyWzJdLngpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WShmaWx0ZXJbMl0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRaKGZpbHRlclsyXS56KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIHBsYW5lLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgQVJWaWRlby5wYXVzZSgpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogWW91IGNhbiBnZXQgdGhlIG5hbWVzIG9mIHRoZSBlbnRpdGllcyB1c2VkIGluIHlvdXIgcHJvamVjdC5cbiAgICAgKiBAcmV0dXJucyB0aGUgbmFtZXMgb2YgdGhlIGVudGl0aWVzXG4gICAgICovXG4gICAgcHVibGljIGdldE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgb3Igbm90IHRoZSBPbmVFdXJvRmlsdGVyIHJvdXRpbmUuXG4gICAgICovXG4gICAgcHVibGljIHNldCBvZWYoZW5hYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX29lZiA9IGVuYWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBPbmVFdXJvRmlsdGVyIGlzIGVuYWJsZWQgb3Igbm90LlxuICAgICAqIEByZXR1cm5zIChib29sZWFuKSB0cnVlIG9yIGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGdldCBvZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vZWY7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG59XG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICAgIHByaXZhdGUgc3RhdGljIHRyYWNrZWRNYXRyaXg6IGFueSA9IHtcbiAgICAgICAgLy8gZm9yIGludGVycG9sYXRpb25cbiAgICAgICAgZGVsdGE6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgaW50ZXJwb2xhdGVkOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgfTtcbiAgICAvL3ByaXZhdGUgc3RhdGljIGludGVycG9sYXRpb25GYWN0b3I6IG51bWJlciA9IDI0XG4gICAgc3RhdGljIGludGVycG9sYXRlKHdvcmxkOiBhbnkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbkZhY3RvciA9IDI0O1xuXG4gICAgICAgIC8vIGludGVycG9sYXRlIG1hdHJpeFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tlZE1hdHJpeC5kZWx0YVtpXSA9IHdvcmxkW2ldIC0gdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFtpXTtcbiAgICAgICAgICAgIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWRbaV0gPVxuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWRbaV0gKyB0aGlzLnRyYWNrZWRNYXRyaXguZGVsdGFbaV0gLyBpbnRlcnBvbGF0aW9uRmFjdG9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc01vYmlsZSgpIHtcbiAgICAgICAgcmV0dXJuIC9BbmRyb2lkfG1vYmlsZXxpUGFkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldE1hdHJpeChtYXRyaXg6IGFueSwgdmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCBhcnJheTogYW55ID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICBhcnJheVtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1hdHJpeC5lbGVtZW50cy5zZXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbWF0cml4LmVsZW1lbnRzLnNldChhcnJheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRyaXguZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGFycmF5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90aHJlZV9fOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCB7XG5cdEFuaW1hdGlvbkNsaXAsXG5cdEJvbmUsXG5cdEJveDMsXG5cdEJ1ZmZlckF0dHJpYnV0ZSxcblx0QnVmZmVyR2VvbWV0cnksXG5cdENsYW1wVG9FZGdlV3JhcHBpbmcsXG5cdENvbG9yLFxuXHREaXJlY3Rpb25hbExpZ2h0LFxuXHREb3VibGVTaWRlLFxuXHRGaWxlTG9hZGVyLFxuXHRGcm9udFNpZGUsXG5cdEdyb3VwLFxuXHRJbWFnZUJpdG1hcExvYWRlcixcblx0SW50ZXJsZWF2ZWRCdWZmZXIsXG5cdEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlLFxuXHRJbnRlcnBvbGFudCxcblx0SW50ZXJwb2xhdGVEaXNjcmV0ZSxcblx0SW50ZXJwb2xhdGVMaW5lYXIsXG5cdExpbmUsXG5cdExpbmVCYXNpY01hdGVyaWFsLFxuXHRMaW5lTG9vcCxcblx0TGluZVNlZ21lbnRzLFxuXHRMaW5lYXJGaWx0ZXIsXG5cdExpbmVhck1pcG1hcExpbmVhckZpbHRlcixcblx0TGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlcixcblx0TG9hZGVyLFxuXHRMb2FkZXJVdGlscyxcblx0TWF0ZXJpYWwsXG5cdE1hdGhVdGlscyxcblx0TWF0cml4NCxcblx0TWVzaCxcblx0TWVzaEJhc2ljTWF0ZXJpYWwsXG5cdE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxuXHRNZXNoU3RhbmRhcmRNYXRlcmlhbCxcblx0TWlycm9yZWRSZXBlYXRXcmFwcGluZyxcblx0TmVhcmVzdEZpbHRlcixcblx0TmVhcmVzdE1pcG1hcExpbmVhckZpbHRlcixcblx0TmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdE51bWJlcktleWZyYW1lVHJhY2ssXG5cdE9iamVjdDNELFxuXHRPcnRob2dyYXBoaWNDYW1lcmEsXG5cdFBlcnNwZWN0aXZlQ2FtZXJhLFxuXHRQb2ludExpZ2h0LFxuXHRQb2ludHMsXG5cdFBvaW50c01hdGVyaWFsLFxuXHRQcm9wZXJ0eUJpbmRpbmcsXG5cdFF1YXRlcm5pb24sXG5cdFF1YXRlcm5pb25LZXlmcmFtZVRyYWNrLFxuXHRSR0JGb3JtYXQsXG5cdFJlcGVhdFdyYXBwaW5nLFxuXHRTa2VsZXRvbixcblx0U2tpbm5lZE1lc2gsXG5cdFNwaGVyZSxcblx0U3BvdExpZ2h0LFxuXHRUYW5nZW50U3BhY2VOb3JtYWxNYXAsXG5cdFRleHR1cmUsXG5cdFRleHR1cmVMb2FkZXIsXG5cdFRyaWFuZ2xlRmFuRHJhd01vZGUsXG5cdFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSxcblx0VmVjdG9yMixcblx0VmVjdG9yMyxcblx0VmVjdG9yS2V5ZnJhbWVUcmFjayxcblx0c1JHQkVuY29kaW5nXG59IGZyb20gJ3RocmVlJztcblxuY2xhc3MgR0xURkxvYWRlciBleHRlbmRzIExvYWRlciB7XG5cblx0Y29uc3RydWN0b3IoIG1hbmFnZXIgKSB7XG5cblx0XHRzdXBlciggbWFuYWdlciApO1xuXG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IG51bGw7XG5cdFx0dGhpcy5rdHgyTG9hZGVyID0gbnVsbDtcblx0XHR0aGlzLm1lc2hvcHREZWNvZGVyID0gbnVsbDtcblxuXHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzID0gW107XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZUZXh0dXJlQmFzaXNVRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzU2hlZW5FeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzVm9sdW1lRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNJb3JFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1NwZWN1bGFyRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZMaWdodHNFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1lc2hvcHRDb21wcmVzc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGxvYWQoIHVybCwgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yICkge1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0bGV0IHJlc291cmNlUGF0aDtcblxuXHRcdGlmICggdGhpcy5yZXNvdXJjZVBhdGggIT09ICcnICkge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnJlc291cmNlUGF0aDtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMucGF0aCAhPT0gJycgKSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IHRoaXMucGF0aDtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IExvYWRlclV0aWxzLmV4dHJhY3RVcmxCYXNlKCB1cmwgKTtcblxuXHRcdH1cblxuXHRcdC8vIFRlbGxzIHRoZSBMb2FkaW5nTWFuYWdlciB0byB0cmFjayBhbiBleHRyYSBpdGVtLCB3aGljaCByZXNvbHZlcyBhZnRlclxuXHRcdC8vIHRoZSBtb2RlbCBpcyBmdWxseSBsb2FkZWQuIFRoaXMgbWVhbnMgdGhlIGNvdW50IG9mIGl0ZW1zIGxvYWRlZCB3aWxsXG5cdFx0Ly8gYmUgaW5jb3JyZWN0LCBidXQgZW5zdXJlcyBtYW5hZ2VyLm9uTG9hZCgpIGRvZXMgbm90IGZpcmUgZWFybHkuXG5cdFx0dGhpcy5tYW5hZ2VyLml0ZW1TdGFydCggdXJsICk7XG5cblx0XHRjb25zdCBfb25FcnJvciA9IGZ1bmN0aW9uICggZSApIHtcblxuXHRcdFx0aWYgKCBvbkVycm9yICkge1xuXG5cdFx0XHRcdG9uRXJyb3IoIGUgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRXJyb3IoIHVybCApO1xuXHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcblxuXHRcdH07XG5cblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5tYW5hZ2VyICk7XG5cblx0XHRsb2FkZXIuc2V0UGF0aCggdGhpcy5wYXRoICk7XG5cdFx0bG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xuXHRcdGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblx0XHRsb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0aGlzLndpdGhDcmVkZW50aWFscyApO1xuXG5cdFx0bG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBkYXRhICkge1xuXG5cdFx0XHR0cnkge1xuXG5cdFx0XHRcdHNjb3BlLnBhcnNlKCBkYXRhLCByZXNvdXJjZVBhdGgsIGZ1bmN0aW9uICggZ2x0ZiApIHtcblxuXHRcdFx0XHRcdG9uTG9hZCggZ2x0ZiApO1xuXG5cdFx0XHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcblxuXHRcdFx0XHR9LCBfb25FcnJvciApO1xuXG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRfb25FcnJvciggZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9LCBvblByb2dyZXNzLCBfb25FcnJvciApO1xuXG5cdH1cblxuXHRzZXREUkFDT0xvYWRlciggZHJhY29Mb2FkZXIgKSB7XG5cblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHNldEREU0xvYWRlcigpIHtcblxuXHRcdHRocm93IG5ldyBFcnJvcihcblxuXHRcdFx0J1RIUkVFLkdMVEZMb2FkZXI6IFwiTVNGVF90ZXh0dXJlX2Rkc1wiIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFBsZWFzZSB1cGRhdGUgdG8gXCJLSFJfdGV4dHVyZV9iYXNpc3VcIi4nXG5cblx0XHQpO1xuXG5cdH1cblxuXHRzZXRLVFgyTG9hZGVyKCBrdHgyTG9hZGVyICkge1xuXG5cdFx0dGhpcy5rdHgyTG9hZGVyID0ga3R4MkxvYWRlcjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0c2V0TWVzaG9wdERlY29kZXIoIG1lc2hvcHREZWNvZGVyICkge1xuXG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG1lc2hvcHREZWNvZGVyO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRyZWdpc3RlciggY2FsbGJhY2sgKSB7XG5cblx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgPT09IC0gMSApIHtcblxuXHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3MucHVzaCggY2FsbGJhY2sgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHR1bnJlZ2lzdGVyKCBjYWxsYmFjayApIHtcblxuXHRcdGlmICggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSAhPT0gLSAxICkge1xuXG5cdFx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcy5zcGxpY2UoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICksIDEgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRwYXJzZSggZGF0YSwgcGF0aCwgb25Mb2FkLCBvbkVycm9yICkge1xuXG5cdFx0bGV0IGNvbnRlbnQ7XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHt9O1xuXHRcdGNvbnN0IHBsdWdpbnMgPSB7fTtcblxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICkge1xuXG5cdFx0XHRjb250ZW50ID0gZGF0YTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnN0IG1hZ2ljID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEsIDAsIDQgKSApO1xuXG5cdFx0XHRpZiAoIG1hZ2ljID09PSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyApIHtcblxuXHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXSA9IG5ldyBHTFRGQmluYXJ5RXh0ZW5zaW9uKCBkYXRhICk7XG5cblx0XHRcdFx0fSBjYXRjaCAoIGVycm9yICkge1xuXG5cdFx0XHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggZXJyb3IgKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnRlbnQgPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdLmNvbnRlbnQ7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29udGVudCA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoIGNvbnRlbnQgKTtcblxuXHRcdGlmICgganNvbi5hc3NldCA9PT0gdW5kZWZpbmVkIHx8IGpzb24uYXNzZXQudmVyc2lvblsgMCBdIDwgMiApIHtcblxuXHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgYXNzZXQuIGdsVEYgdmVyc2lvbnMgPj0yLjAgYXJlIHN1cHBvcnRlZC4nICkgKTtcblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBhcnNlciA9IG5ldyBHTFRGUGFyc2VyKCBqc29uLCB7XG5cblx0XHRcdHBhdGg6IHBhdGggfHwgdGhpcy5yZXNvdXJjZVBhdGggfHwgJycsXG5cdFx0XHRjcm9zc09yaWdpbjogdGhpcy5jcm9zc09yaWdpbixcblx0XHRcdHJlcXVlc3RIZWFkZXI6IHRoaXMucmVxdWVzdEhlYWRlcixcblx0XHRcdG1hbmFnZXI6IHRoaXMubWFuYWdlcixcblx0XHRcdGt0eDJMb2FkZXI6IHRoaXMua3R4MkxvYWRlcixcblx0XHRcdG1lc2hvcHREZWNvZGVyOiB0aGlzLm1lc2hvcHREZWNvZGVyXG5cblx0XHR9ICk7XG5cblx0XHRwYXJzZXIuZmlsZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luQ2FsbGJhY2tzLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW5DYWxsYmFja3NbIGkgXSggcGFyc2VyICk7XG5cdFx0XHRwbHVnaW5zWyBwbHVnaW4ubmFtZSBdID0gcGx1Z2luO1xuXG5cdFx0XHQvLyBXb3JrYXJvdW5kIHRvIGF2b2lkIGRldGVybWluaW5nIGFzIHVua25vd24gZXh0ZW5zaW9uXG5cdFx0XHQvLyBpbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoKS5cblx0XHRcdC8vIFJlbW92ZSB0aGlzIHdvcmthcm91bmQgaWYgd2UgbW92ZSBhbGwgdGhlIGV4aXN0aW5nXG5cdFx0XHQvLyBleHRlbnNpb24gaGFuZGxlcnMgdG8gcGx1Z2luIHN5c3RlbVxuXHRcdFx0ZXh0ZW5zaW9uc1sgcGx1Z2luLm5hbWUgXSA9IHRydWU7XG5cblx0XHR9XG5cblx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1VzZWQgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGpzb24uZXh0ZW5zaW9uc1VzZWQubGVuZ3RoOyArKyBpICkge1xuXG5cdFx0XHRcdGNvbnN0IGV4dGVuc2lvbk5hbWUgPSBqc29uLmV4dGVuc2lvbnNVc2VkWyBpIF07XG5cdFx0XHRcdGNvbnN0IGV4dGVuc2lvbnNSZXF1aXJlZCA9IGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkIHx8IFtdO1xuXG5cdFx0XHRcdHN3aXRjaCAoIGV4dGVuc2lvbk5hbWUgKSB7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M6XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uKCBqc29uLCB0aGlzLmRyYWNvTG9hZGVyICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk06XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NRVNIX1FVQU5USVpBVElPTjpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWVzaFF1YW50aXphdGlvbkV4dGVuc2lvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRpZiAoIGV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCBleHRlbnNpb25OYW1lICkgPj0gMCAmJiBwbHVnaW5zWyBleHRlbnNpb25OYW1lIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBVbmtub3duIGV4dGVuc2lvbiBcIicgKyBleHRlbnNpb25OYW1lICsgJ1wiLicgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cGFyc2VyLnNldEV4dGVuc2lvbnMoIGV4dGVuc2lvbnMgKTtcblx0XHRwYXJzZXIuc2V0UGx1Z2lucyggcGx1Z2lucyApO1xuXHRcdHBhcnNlci5wYXJzZSggb25Mb2FkLCBvbkVycm9yICk7XG5cblx0fVxuXG59XG5cbi8qIEdMVEZSRUdJU1RSWSAqL1xuXG5mdW5jdGlvbiBHTFRGUmVnaXN0cnkoKSB7XG5cblx0bGV0IG9iamVjdHMgPSB7fTtcblxuXHRyZXR1cm5cdHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRcdHJldHVybiBvYmplY3RzWyBrZXkgXTtcblxuXHRcdH0sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uICgga2V5LCBvYmplY3QgKSB7XG5cblx0XHRcdG9iamVjdHNbIGtleSBdID0gb2JqZWN0O1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZTogZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRcdGRlbGV0ZSBvYmplY3RzWyBrZXkgXTtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0b2JqZWN0cyA9IHt9O1xuXG5cdFx0fVxuXG5cdH07XG5cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIEVYVEVOU0lPTlMgKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBFWFRFTlNJT05TID0ge1xuXHRLSFJfQklOQVJZX0dMVEY6ICdLSFJfYmluYXJ5X2dsVEYnLFxuXHRLSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTjogJ0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uJyxcblx0S0hSX0xJR0hUU19QVU5DVFVBTDogJ0tIUl9saWdodHNfcHVuY3R1YWwnLFxuXHRLSFJfTUFURVJJQUxTX0NMRUFSQ09BVDogJ0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0Jyxcblx0S0hSX01BVEVSSUFMU19JT1I6ICdLSFJfbWF0ZXJpYWxzX2lvcicsXG5cdEtIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M6ICdLSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcycsXG5cdEtIUl9NQVRFUklBTFNfU0hFRU46ICdLSFJfbWF0ZXJpYWxzX3NoZWVuJyxcblx0S0hSX01BVEVSSUFMU19TUEVDVUxBUjogJ0tIUl9tYXRlcmlhbHNfc3BlY3VsYXInLFxuXHRLSFJfTUFURVJJQUxTX1RSQU5TTUlTU0lPTjogJ0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uJyxcblx0S0hSX01BVEVSSUFMU19VTkxJVDogJ0tIUl9tYXRlcmlhbHNfdW5saXQnLFxuXHRLSFJfTUFURVJJQUxTX1ZPTFVNRTogJ0tIUl9tYXRlcmlhbHNfdm9sdW1lJyxcblx0S0hSX1RFWFRVUkVfQkFTSVNVOiAnS0hSX3RleHR1cmVfYmFzaXN1Jyxcblx0S0hSX1RFWFRVUkVfVFJBTlNGT1JNOiAnS0hSX3RleHR1cmVfdHJhbnNmb3JtJyxcblx0S0hSX01FU0hfUVVBTlRJWkFUSU9OOiAnS0hSX21lc2hfcXVhbnRpemF0aW9uJyxcblx0RVhUX1RFWFRVUkVfV0VCUDogJ0VYVF90ZXh0dXJlX3dlYnAnLFxuXHRFWFRfTUVTSE9QVF9DT01QUkVTU0lPTjogJ0VYVF9tZXNob3B0X2NvbXByZXNzaW9uJ1xufTtcblxuLyoqXG4gKiBQdW5jdHVhbCBMaWdodHMgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2xpZ2h0c19wdW5jdHVhbFxuICovXG5jbGFzcyBHTFRGTGlnaHRzRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTElHSFRTX1BVTkNUVUFMO1xuXG5cdFx0Ly8gT2JqZWN0M0QgaW5zdGFuY2UgY2FjaGVzXG5cdFx0dGhpcy5jYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cblx0fVxuXG5cdF9tYXJrRGVmcygpIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG5vZGVEZWZzID0gdGhpcy5wYXJzZXIuanNvbi5ub2RlcyB8fCBbXTtcblxuXHRcdGZvciAoIGxldCBub2RlSW5kZXggPSAwLCBub2RlTGVuZ3RoID0gbm9kZURlZnMubGVuZ3RoOyBub2RlSW5kZXggPCBub2RlTGVuZ3RoOyBub2RlSW5kZXggKysgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVEZWYgPSBub2RlRGVmc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdGlmICggbm9kZURlZi5leHRlbnNpb25zXG5cdFx0XHRcdFx0JiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXVxuXHRcdFx0XHRcdCYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0ubGlnaHQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwYXJzZXIuX2FkZE5vZGVSZWYoIHRoaXMuY2FjaGUsIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0ubGlnaHQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRfbG9hZExpZ2h0KCBsaWdodEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgY2FjaGVLZXkgPSAnbGlnaHQ6JyArIGxpZ2h0SW5kZXg7XG5cdFx0bGV0IGRlcGVuZGVuY3kgPSBwYXJzZXIuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0aWYgKCBkZXBlbmRlbmN5ICkgcmV0dXJuIGRlcGVuZGVuY3k7XG5cblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9ICgganNvbi5leHRlbnNpb25zICYmIGpzb24uZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB8fCB7fTtcblx0XHRjb25zdCBsaWdodERlZnMgPSBleHRlbnNpb25zLmxpZ2h0cyB8fCBbXTtcblx0XHRjb25zdCBsaWdodERlZiA9IGxpZ2h0RGVmc1sgbGlnaHRJbmRleCBdO1xuXHRcdGxldCBsaWdodE5vZGU7XG5cblx0XHRjb25zdCBjb2xvciA9IG5ldyBDb2xvciggMHhmZmZmZmYgKTtcblxuXHRcdGlmICggbGlnaHREZWYuY29sb3IgIT09IHVuZGVmaW5lZCApIGNvbG9yLmZyb21BcnJheSggbGlnaHREZWYuY29sb3IgKTtcblxuXHRcdGNvbnN0IHJhbmdlID0gbGlnaHREZWYucmFuZ2UgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnJhbmdlIDogMDtcblxuXHRcdHN3aXRjaCAoIGxpZ2h0RGVmLnR5cGUgKSB7XG5cblx0XHRcdGNhc2UgJ2RpcmVjdGlvbmFsJzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAtIDEgKTtcblx0XHRcdFx0bGlnaHROb2RlLmFkZCggbGlnaHROb2RlLnRhcmdldCApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAncG9pbnQnOlxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgUG9pbnRMaWdodCggY29sb3IgKTtcblx0XHRcdFx0bGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdzcG90Jzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IFNwb3RMaWdodCggY29sb3IgKTtcblx0XHRcdFx0bGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XG5cdFx0XHRcdC8vIEhhbmRsZSBzcG90bGlnaHQgcHJvcGVydGllcy5cblx0XHRcdFx0bGlnaHREZWYuc3BvdCA9IGxpZ2h0RGVmLnNwb3QgfHwge307XG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgPSBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlIDogMDtcblx0XHRcdFx0bGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSA9IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgOiBNYXRoLlBJIC8gNC4wO1xuXHRcdFx0XHRsaWdodE5vZGUuYW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xuXHRcdFx0XHRsaWdodE5vZGUucGVudW1icmEgPSAxLjAgLSBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlIC8gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZTtcblx0XHRcdFx0bGlnaHROb2RlLnRhcmdldC5wb3NpdGlvbi5zZXQoIDAsIDAsIC0gMSApO1xuXHRcdFx0XHRsaWdodE5vZGUuYWRkKCBsaWdodE5vZGUudGFyZ2V0ICk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbmV4cGVjdGVkIGxpZ2h0IHR5cGU6ICcgKyBsaWdodERlZi50eXBlICk7XG5cblx0XHR9XG5cblx0XHQvLyBTb21lIGxpZ2h0cyAoZS5nLiBzcG90KSBkZWZhdWx0IHRvIGEgcG9zaXRpb24gb3RoZXIgdGhhbiB0aGUgb3JpZ2luLiBSZXNldCB0aGUgcG9zaXRpb25cblx0XHQvLyBoZXJlLCBiZWNhdXNlIG5vZGUtbGV2ZWwgcGFyc2luZyB3aWxsIG9ubHkgb3ZlcnJpZGUgcG9zaXRpb24gaWYgZXhwbGljaXRseSBzcGVjaWZpZWQuXG5cdFx0bGlnaHROb2RlLnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xuXG5cdFx0bGlnaHROb2RlLmRlY2F5ID0gMjtcblxuXHRcdGlmICggbGlnaHREZWYuaW50ZW5zaXR5ICE9PSB1bmRlZmluZWQgKSBsaWdodE5vZGUuaW50ZW5zaXR5ID0gbGlnaHREZWYuaW50ZW5zaXR5O1xuXG5cdFx0bGlnaHROb2RlLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbGlnaHREZWYubmFtZSB8fCAoICdsaWdodF8nICsgbGlnaHRJbmRleCApICk7XG5cblx0XHRkZXBlbmRlbmN5ID0gUHJvbWlzZS5yZXNvbHZlKCBsaWdodE5vZGUgKTtcblxuXHRcdHBhcnNlci5jYWNoZS5hZGQoIGNhY2hlS2V5LCBkZXBlbmRlbmN5ICk7XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jeTtcblxuXHR9XG5cblx0Y3JlYXRlTm9kZUF0dGFjaG1lbnQoIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cdFx0Y29uc3QgbGlnaHREZWYgPSAoIG5vZGVEZWYuZXh0ZW5zaW9ucyAmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgfHwge307XG5cdFx0Y29uc3QgbGlnaHRJbmRleCA9IGxpZ2h0RGVmLmxpZ2h0O1xuXG5cdFx0aWYgKCBsaWdodEluZGV4ID09PSB1bmRlZmluZWQgKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiB0aGlzLl9sb2FkTGlnaHQoIGxpZ2h0SW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIGxpZ2h0ICkge1xuXG5cdFx0XHRyZXR1cm4gcGFyc2VyLl9nZXROb2RlUmVmKCBzZWxmLmNhY2hlLCBsaWdodEluZGV4LCBsaWdodCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIFVubGl0IE1hdGVyaWFscyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3VubGl0XG4gKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQ7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSgpIHtcblxuXHRcdHJldHVybiBNZXNoQmFzaWNNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApIHtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcblxuXHRcdGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3M7XG5cblx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzICkge1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciApICkge1xuXG5cdFx0XHRcdGNvbnN0IGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogQ2xlYXJjb2F0IE1hdGVyaWFscyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX0NMRUFSQ09BVDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdCA9IGV4dGVuc2lvbi5jbGVhcmNvYXRGYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0TWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdFRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdFJvdWdobmVzcyA9IGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0Um91Z2huZXNzTWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdE5vcm1hbE1hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlICkgKTtcblxuXHRcdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGU7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgPSBuZXcgVmVjdG9yMiggc2NhbGUsIHNjYWxlICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIFNoZWVuIE1hdGVyaWFscyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zaGVlblxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzU2hlZW5FeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfU0hFRU47XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5zaGVlbkNvbG9yID0gbmV3IENvbG9yKCAwLCAwLCAwICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMuc2hlZW5Sb3VnaG5lc3MgPSAwO1xuXHRcdG1hdGVyaWFsUGFyYW1zLnNoZWVuID0gMTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0aWYgKCBleHRlbnNpb24uc2hlZW5Db2xvckZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5zaGVlbkNvbG9yLmZyb21BcnJheSggZXh0ZW5zaW9uLnNoZWVuQ29sb3JGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLnNoZWVuUm91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnNoZWVuUm91Z2huZXNzID0gZXh0ZW5zaW9uLnNoZWVuUm91Z2huZXNzRmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uc2hlZW5Db2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzaGVlbkNvbG9yTWFwJywgZXh0ZW5zaW9uLnNoZWVuQ29sb3JUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLnNoZWVuUm91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3NoZWVuUm91Z2huZXNzTWFwJywgZXh0ZW5zaW9uLnNoZWVuUm91Z2huZXNzVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBUcmFuc21pc3Npb24gTWF0ZXJpYWxzIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXG4gKiBEcmFmdDogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMTY5OFxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1RSQU5TTUlTU0lPTjtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zbWlzc2lvbiA9IGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAndHJhbnNtaXNzaW9uTWFwJywgZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogTWF0ZXJpYWxzIFZvbHVtZSBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3ZvbHVtZVxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzVm9sdW1lRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1ZPTFVNRTtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMudGhpY2tuZXNzID0gZXh0ZW5zaW9uLnRoaWNrbmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gZXh0ZW5zaW9uLnRoaWNrbmVzc0ZhY3RvciA6IDA7XG5cblx0XHRpZiAoIGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAndGhpY2tuZXNzTWFwJywgZXh0ZW5zaW9uLnRoaWNrbmVzc1RleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuYXR0ZW51YXRpb25EaXN0YW5jZSA9IGV4dGVuc2lvbi5hdHRlbnVhdGlvbkRpc3RhbmNlIHx8IDA7XG5cblx0XHRjb25zdCBjb2xvckFycmF5ID0gZXh0ZW5zaW9uLmF0dGVudWF0aW9uQ29sb3IgfHwgWyAxLCAxLCAxIF07XG5cdFx0bWF0ZXJpYWxQYXJhbXMuYXR0ZW51YXRpb25Db2xvciA9IG5ldyBDb2xvciggY29sb3JBcnJheVsgMCBdLCBjb2xvckFycmF5WyAxIF0sIGNvbG9yQXJyYXlbIDIgXSApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogTWF0ZXJpYWxzIGlvciBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2lvclxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzSW9yRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX0lPUjtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuaW9yID0gZXh0ZW5zaW9uLmlvciAhPT0gdW5kZWZpbmVkID8gZXh0ZW5zaW9uLmlvciA6IDEuNTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBNYXRlcmlhbHMgc3BlY3VsYXIgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zcGVjdWxhclxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzU3BlY3VsYXJFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfU1BFQ1VMQVI7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFySW50ZW5zaXR5ID0gZXh0ZW5zaW9uLnNwZWN1bGFyRmFjdG9yICE9PSB1bmRlZmluZWQgPyBleHRlbnNpb24uc3BlY3VsYXJGYWN0b3IgOiAxLjA7XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zcGVjdWxhclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhckludGVuc2l0eU1hcCcsIGV4dGVuc2lvbi5zcGVjdWxhclRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY29sb3JBcnJheSA9IGV4dGVuc2lvbi5zcGVjdWxhckNvbG9yRmFjdG9yIHx8IFsgMSwgMSwgMSBdO1xuXHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyQ29sb3IgPSBuZXcgQ29sb3IoIGNvbG9yQXJyYXlbIDAgXSwgY29sb3JBcnJheVsgMSBdLCBjb2xvckFycmF5WyAyIF0gKTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLnNwZWN1bGFyQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnc3BlY3VsYXJDb2xvck1hcCcsIGV4dGVuc2lvbi5zcGVjdWxhckNvbG9yVGV4dHVyZSApLnRoZW4oIGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuXHRcdFx0XHR0ZXh0dXJlLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xuXG5cdFx0XHR9ICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIEJhc2lzVSBUZXh0dXJlIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX2Jhc2lzdVxuICovXG5jbGFzcyBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfQkFTSVNVO1xuXG5cdH1cblxuXHRsb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXG5cdFx0aWYgKCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gdGV4dHVyZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xuXHRcdGNvbnN0IGxvYWRlciA9IHBhcnNlci5vcHRpb25zLmt0eDJMb2FkZXI7XG5cblx0XHRpZiAoICEgbG9hZGVyICkge1xuXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0S1RYMkxvYWRlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBLVFgyIHRleHR1cmVzJyApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEFzc3VtZXMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsIGFuZCB0aGF0IGEgZmFsbGJhY2sgdGV4dHVyZSBpcyBwcmVzZW50XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBXZWJQIFRleHR1cmUgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfdGV4dHVyZV93ZWJwXG4gKi9cbmNsYXNzIEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuRVhUX1RFWFRVUkVfV0VCUDtcblx0XHR0aGlzLmlzU3VwcG9ydGVkID0gbnVsbDtcblxuXHR9XG5cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXG5cdFx0aWYgKCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgbmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgbmFtZSBdO1xuXHRcdGNvbnN0IHNvdXJjZSA9IGpzb24uaW1hZ2VzWyBleHRlbnNpb24uc291cmNlIF07XG5cblx0XHRsZXQgbG9hZGVyID0gcGFyc2VyLnRleHR1cmVMb2FkZXI7XG5cdFx0aWYgKCBzb3VyY2UudXJpICkge1xuXG5cdFx0XHRjb25zdCBoYW5kbGVyID0gcGFyc2VyLm9wdGlvbnMubWFuYWdlci5nZXRIYW5kbGVyKCBzb3VyY2UudXJpICk7XG5cdFx0XHRpZiAoIGhhbmRsZXIgIT09IG51bGwgKSBsb2FkZXIgPSBoYW5kbGVyO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZGV0ZWN0U3VwcG9ydCgpLnRoZW4oIGZ1bmN0aW9uICggaXNTdXBwb3J0ZWQgKSB7XG5cblx0XHRcdGlmICggaXNTdXBwb3J0ZWQgKSByZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcblxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCBuYW1lICkgPj0gMCApIHtcblxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBXZWJQIHJlcXVpcmVkIGJ5IGFzc2V0IGJ1dCB1bnN1cHBvcnRlZC4nICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIFBORyBvciBKUEVHLlxuXHRcdFx0cmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGRldGVjdFN1cHBvcnQoKSB7XG5cblx0XHRpZiAoICEgdGhpcy5pc1N1cHBvcnRlZCApIHtcblxuXHRcdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUgKSB7XG5cblx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0XHQvLyBMb3NzeSB0ZXN0IGltYWdlLiBTdXBwb3J0IGZvciBsb3NzeSBpbWFnZXMgZG9lc24ndCBndWFyYW50ZWUgc3VwcG9ydCBmb3IgYWxsXG5cdFx0XHRcdC8vIFdlYlAgaW1hZ2VzLCB1bmZvcnR1bmF0ZWx5LlxuXHRcdFx0XHRpbWFnZS5zcmMgPSAnZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmlJQUFBQlhSVUpRVmxBNElCWUFBQUF3QVFDZEFTb0JBQUVBRHNEK0phUUFBM0FBQUFBQSc7XG5cblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJlc29sdmUoIGltYWdlLmhlaWdodCA9PT0gMSApO1xuXG5cdFx0XHRcdH07XG5cblx0XHRcdH0gKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmlzU3VwcG9ydGVkO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIG1lc2hvcHQgQnVmZmVyVmlldyBDb21wcmVzc2lvbiBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF9tZXNob3B0X2NvbXByZXNzaW9uXG4gKi9cbmNsYXNzIEdMVEZNZXNob3B0Q29tcHJlc3Npb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OO1xuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG5cdH1cblxuXHRsb2FkQnVmZmVyVmlldyggaW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbjtcblx0XHRjb25zdCBidWZmZXJWaWV3ID0ganNvbi5idWZmZXJWaWV3c1sgaW5kZXggXTtcblxuXHRcdGlmICggYnVmZmVyVmlldy5leHRlbnNpb25zICYmIGJ1ZmZlclZpZXcuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdGNvbnN0IGV4dGVuc2lvbkRlZiA9IGJ1ZmZlclZpZXcuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRcdGNvbnN0IGJ1ZmZlciA9IHRoaXMucGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXInLCBleHRlbnNpb25EZWYuYnVmZmVyICk7XG5cdFx0XHRjb25zdCBkZWNvZGVyID0gdGhpcy5wYXJzZXIub3B0aW9ucy5tZXNob3B0RGVjb2RlcjtcblxuXHRcdFx0aWYgKCAhIGRlY29kZXIgfHwgISBkZWNvZGVyLnN1cHBvcnRlZCApIHtcblxuXHRcdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBzZXRNZXNob3B0RGVjb2RlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBjb21wcmVzc2VkIGZpbGVzJyApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBBc3N1bWVzIHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBvcHRpb25hbCBhbmQgdGhhdCBmYWxsYmFjayBidWZmZXIgZGF0YSBpcyBwcmVzZW50XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggWyBidWZmZXIsIGRlY29kZXIucmVhZHkgXSApLnRoZW4oIGZ1bmN0aW9uICggcmVzICkge1xuXG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBleHRlbnNpb25EZWYuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0XHRjb25zdCBieXRlTGVuZ3RoID0gZXh0ZW5zaW9uRGVmLmJ5dGVMZW5ndGggfHwgMDtcblxuXHRcdFx0XHRjb25zdCBjb3VudCA9IGV4dGVuc2lvbkRlZi5jb3VudDtcblx0XHRcdFx0Y29uc3Qgc3RyaWRlID0gZXh0ZW5zaW9uRGVmLmJ5dGVTdHJpZGU7XG5cblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKCBjb3VudCAqIHN0cmlkZSApO1xuXHRcdFx0XHRjb25zdCBzb3VyY2UgPSBuZXcgVWludDhBcnJheSggcmVzWyAwIF0sIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGggKTtcblxuXHRcdFx0XHRkZWNvZGVyLmRlY29kZUdsdGZCdWZmZXIoIG5ldyBVaW50OEFycmF5KCByZXN1bHQgKSwgY291bnQsIHN0cmlkZSwgc291cmNlLCBleHRlbnNpb25EZWYubW9kZSwgZXh0ZW5zaW9uRGVmLmZpbHRlciApO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyogQklOQVJZIEVYVEVOU0lPTiAqL1xuY29uc3QgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgPSAnZ2xURic7XG5jb25zdCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggPSAxMjtcbmNvbnN0IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMgPSB7IEpTT046IDB4NEU0RjUzNEEsIEJJTjogMHgwMDRFNDk0MiB9O1xuXG5jbGFzcyBHTFRGQmluYXJ5RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggZGF0YSApIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdFx0dGhpcy5ib2R5ID0gbnVsbDtcblxuXHRcdGNvbnN0IGhlYWRlclZpZXcgPSBuZXcgRGF0YVZpZXcoIGRhdGEsIDAsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCApO1xuXG5cdFx0dGhpcy5oZWFkZXIgPSB7XG5cdFx0XHRtYWdpYzogTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEuc2xpY2UoIDAsIDQgKSApICksXG5cdFx0XHR2ZXJzaW9uOiBoZWFkZXJWaWV3LmdldFVpbnQzMiggNCwgdHJ1ZSApLFxuXHRcdFx0bGVuZ3RoOiBoZWFkZXJWaWV3LmdldFVpbnQzMiggOCwgdHJ1ZSApXG5cdFx0fTtcblxuXHRcdGlmICggdGhpcy5oZWFkZXIubWFnaWMgIT09IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBnbFRGLUJpbmFyeSBoZWFkZXIuJyApO1xuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5oZWFkZXIudmVyc2lvbiA8IDIuMCApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogTGVnYWN5IGJpbmFyeSBmaWxlIGRldGVjdGVkLicgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGNodW5rQ29udGVudHNMZW5ndGggPSB0aGlzLmhlYWRlci5sZW5ndGggLSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEg7XG5cdFx0Y29uc3QgY2h1bmtWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcblx0XHRsZXQgY2h1bmtJbmRleCA9IDA7XG5cblx0XHR3aGlsZSAoIGNodW5rSW5kZXggPCBjaHVua0NvbnRlbnRzTGVuZ3RoICkge1xuXG5cdFx0XHRjb25zdCBjaHVua0xlbmd0aCA9IGNodW5rVmlldy5nZXRVaW50MzIoIGNodW5rSW5kZXgsIHRydWUgKTtcblx0XHRcdGNodW5rSW5kZXggKz0gNDtcblxuXHRcdFx0Y29uc3QgY2h1bmtUeXBlID0gY2h1bmtWaWV3LmdldFVpbnQzMiggY2h1bmtJbmRleCwgdHJ1ZSApO1xuXHRcdFx0Y2h1bmtJbmRleCArPSA0O1xuXG5cdFx0XHRpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5KU09OICkge1xuXG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KCBkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKyBjaHVua0luZGV4LCBjaHVua0xlbmd0aCApO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBjb250ZW50QXJyYXkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggY2h1bmtUeXBlID09PSBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTLkJJTiApIHtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICsgY2h1bmtJbmRleDtcblx0XHRcdFx0dGhpcy5ib2R5ID0gZGF0YS5zbGljZSggYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xpZW50cyBtdXN0IGlnbm9yZSBjaHVua3Mgd2l0aCB1bmtub3duIHR5cGVzLlxuXG5cdFx0XHRjaHVua0luZGV4ICs9IGNodW5rTGVuZ3RoO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmNvbnRlbnQgPT09IG51bGwgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEpTT04gY29udGVudCBub3QgZm91bmQuJyApO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcbiAqIERSQUNPIE1lc2ggQ29tcHJlc3Npb24gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb25cbiAqL1xuY2xhc3MgR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigganNvbiwgZHJhY29Mb2FkZXIgKSB7XG5cblx0XHRpZiAoICEgZHJhY29Mb2FkZXIgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IE5vIERSQUNPTG9hZGVyIGluc3RhbmNlIHByb3ZpZGVkLicgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT047XG5cdFx0dGhpcy5qc29uID0ganNvbjtcblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XG5cdFx0dGhpcy5kcmFjb0xvYWRlci5wcmVsb2FkKCk7XG5cblx0fVxuXG5cdGRlY29kZVByaW1pdGl2ZSggcHJpbWl0aXZlLCBwYXJzZXIgKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGRyYWNvTG9hZGVyID0gdGhpcy5kcmFjb0xvYWRlcjtcblx0XHRjb25zdCBidWZmZXJWaWV3SW5kZXggPSBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0uYnVmZmVyVmlldztcblx0XHRjb25zdCBnbHRmQXR0cmlidXRlTWFwID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmF0dHJpYnV0ZXM7XG5cdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVNYXAgPSB7fTtcblx0XHRjb25zdCBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwID0ge307XG5cdFx0Y29uc3QgYXR0cmlidXRlVHlwZU1hcCA9IHt9O1xuXG5cdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBnbHRmQXR0cmlidXRlTWFwICkge1xuXG5cdFx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBhdHRyaWJ1dGVOYW1lIF0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHR0aHJlZUF0dHJpYnV0ZU1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF07XG5cblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIHByaW1pdGl2ZS5hdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBhdHRyaWJ1dGVOYW1lIF0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIGdsdGZBdHRyaWJ1dGVNYXBbIGF0dHJpYnV0ZU5hbWUgXSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGFjY2Vzc29yRGVmID0ganNvbi5hY2Nlc3NvcnNbIHByaW1pdGl2ZS5hdHRyaWJ1dGVzWyBhdHRyaWJ1dGVOYW1lIF0gXTtcblx0XHRcdFx0Y29uc3QgY29tcG9uZW50VHlwZSA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHRcdGF0dHJpYnV0ZVR5cGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gY29tcG9uZW50VHlwZTtcblx0XHRcdFx0YXR0cmlidXRlTm9ybWFsaXplZE1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYnVmZmVyVmlld0luZGV4ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblxuXHRcdFx0XHRkcmFjb0xvYWRlci5kZWNvZGVEcmFjb0ZpbGUoIGJ1ZmZlclZpZXcsIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XG5cblx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXNbIGF0dHJpYnV0ZU5hbWUgXTtcblx0XHRcdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwWyBhdHRyaWJ1dGVOYW1lIF07XG5cblx0XHRcdFx0XHRcdGlmICggbm9ybWFsaXplZCAhPT0gdW5kZWZpbmVkICkgYXR0cmlidXRlLm5vcm1hbGl6ZWQgPSBub3JtYWxpemVkO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVzb2x2ZSggZ2VvbWV0cnkgKTtcblxuXHRcdFx0XHR9LCB0aHJlZUF0dHJpYnV0ZU1hcCwgYXR0cmlidXRlVHlwZU1hcCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogVGV4dHVyZSBUcmFuc2Zvcm0gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtXG4gKi9cbmNsYXNzIEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNO1xuXG5cdH1cblxuXHRleHRlbmRUZXh0dXJlKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKSB7XG5cblx0XHRpZiAoIHRyYW5zZm9ybS50ZXhDb29yZCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0cyBpbiBcIicgKyB0aGlzLm5hbWUgKyAnXCIgZXh0ZW5zaW9uIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcblxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNmb3JtLm9mZnNldCA9PT0gdW5kZWZpbmVkICYmIHRyYW5zZm9ybS5yb3RhdGlvbiA9PT0gdW5kZWZpbmVkICYmIHRyYW5zZm9ybS5zY2FsZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMjE4MTkuXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHRcdH1cblxuXHRcdHRleHR1cmUgPSB0ZXh0dXJlLmNsb25lKCk7XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5vZmZzZXQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5vZmZzZXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0ub2Zmc2V0ICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0ZXh0dXJlLnJvdGF0aW9uID0gdHJhbnNmb3JtLnJvdGF0aW9uO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm0uc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5yZXBlYXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0uc2NhbGUgKTtcblxuXHRcdH1cblxuXHRcdHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG5cdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0fVxuXG59XG5cbi8qKlxuICogU3BlY3VsYXItR2xvc3NpbmVzcyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzc1xuICovXG5cbi8qKlxuICogQSBzdWIgY2xhc3Mgb2YgU3RhbmRhcmRNYXRlcmlhbCB3aXRoIHNvbWUgb2YgdGhlIGZ1bmN0aW9uYWxpdHlcbiAqIGNoYW5nZWQgdmlhIHRoZSBgb25CZWZvcmVDb21waWxlYCBjYWxsYmFja1xuICogQHBhaWxoZWFkXG4gKi9cbmNsYXNzIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsIGV4dGVuZHMgTWVzaFN0YW5kYXJkTWF0ZXJpYWwge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJhbXMgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCA9IHRydWU7XG5cblx0XHQvL3ZhcmlvdXMgY2h1bmtzIHRoYXQgbmVlZCByZXBsYWNpbmdcblx0XHRjb25zdCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rID0gW1xuXHRcdFx0JyNpZmRlZiBVU0VfU1BFQ1VMQVJNQVAnLFxuXHRcdFx0J1x0dW5pZm9ybSBzYW1wbGVyMkQgc3BlY3VsYXJNYXA7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rID0gW1xuXHRcdFx0JyNpZmRlZiBVU0VfR0xPU1NJTkVTU01BUCcsXG5cdFx0XHQnXHR1bmlmb3JtIHNhbXBsZXIyRCBnbG9zc2luZXNzTWFwOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCd2ZWMzIHNwZWN1bGFyRmFjdG9yID0gc3BlY3VsYXI7Jyxcblx0XHRcdCcjaWZkZWYgVVNFX1NQRUNVTEFSTUFQJyxcblx0XHRcdCdcdHZlYzQgdGV4ZWxTcGVjdWxhciA9IHRleHR1cmUyRCggc3BlY3VsYXJNYXAsIHZVdiApOycsXG5cdFx0XHQnXHR0ZXhlbFNwZWN1bGFyID0gc1JHQlRvTGluZWFyKCB0ZXhlbFNwZWN1bGFyICk7Jyxcblx0XHRcdCdcdC8vIHJlYWRzIGNoYW5uZWwgUkdCLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxuXHRcdFx0J1x0c3BlY3VsYXJGYWN0b3IgKj0gdGV4ZWxTcGVjdWxhci5yZ2I7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgZ2xvc3NpbmVzc01hcEZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQnZmxvYXQgZ2xvc3NpbmVzc0ZhY3RvciA9IGdsb3NzaW5lc3M7Jyxcblx0XHRcdCcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxuXHRcdFx0J1x0dmVjNCB0ZXhlbEdsb3NzaW5lc3MgPSB0ZXh0dXJlMkQoIGdsb3NzaW5lc3NNYXAsIHZVdiApOycsXG5cdFx0XHQnXHQvLyByZWFkcyBjaGFubmVsIEEsIGNvbXBhdGlibGUgd2l0aCBhIGdsVEYgU3BlY3VsYXItR2xvc3NpbmVzcyAoUkdCQSkgdGV4dHVyZScsXG5cdFx0XHQnXHRnbG9zc2luZXNzRmFjdG9yICo9IHRleGVsR2xvc3NpbmVzcy5hOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IGxpZ2h0UGh5c2ljYWxGcmFnbWVudENodW5rID0gW1xuXHRcdFx0J1BoeXNpY2FsTWF0ZXJpYWwgbWF0ZXJpYWw7Jyxcblx0XHRcdCdtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBkaWZmdXNlQ29sb3IucmdiICogKCAxLiAtIG1heCggc3BlY3VsYXJGYWN0b3IuciwgbWF4KCBzcGVjdWxhckZhY3Rvci5nLCBzcGVjdWxhckZhY3Rvci5iICkgKSApOycsXG5cdFx0XHQndmVjMyBkeHkgPSBtYXgoIGFicyggZEZkeCggZ2VvbWV0cnlOb3JtYWwgKSApLCBhYnMoIGRGZHkoIGdlb21ldHJ5Tm9ybWFsICkgKSApOycsXG5cdFx0XHQnZmxvYXQgZ2VvbWV0cnlSb3VnaG5lc3MgPSBtYXgoIG1heCggZHh5LngsIGR4eS55ICksIGR4eS56ICk7Jyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgPSBtYXgoIDEuMCAtIGdsb3NzaW5lc3NGYWN0b3IsIDAuMDUyNSApOyAvLyAwLjA1MjUgY29ycmVzcG9uZHMgdG8gdGhlIGJhc2UgbWlwIG9mIGEgMjU2IGN1YmVtYXAuJyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgKz0gZ2VvbWV0cnlSb3VnaG5lc3M7Jyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgPSBtaW4oIG1hdGVyaWFsLnJvdWdobmVzcywgMS4wICk7Jyxcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gc3BlY3VsYXJGYWN0b3I7Jyxcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCB1bmlmb3JtcyA9IHtcblx0XHRcdHNwZWN1bGFyOiB7IHZhbHVlOiBuZXcgQ29sb3IoKS5zZXRIZXgoIDB4ZmZmZmZmICkgfSxcblx0XHRcdGdsb3NzaW5lc3M6IHsgdmFsdWU6IDEgfSxcblx0XHRcdHNwZWN1bGFyTWFwOiB7IHZhbHVlOiBudWxsIH0sXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7IHZhbHVlOiBudWxsIH1cblx0XHR9O1xuXG5cdFx0dGhpcy5fZXh0cmFVbmlmb3JtcyA9IHVuaWZvcm1zO1xuXG5cdFx0dGhpcy5vbkJlZm9yZUNvbXBpbGUgPSBmdW5jdGlvbiAoIHNoYWRlciApIHtcblxuXHRcdFx0Zm9yICggY29uc3QgdW5pZm9ybU5hbWUgaW4gdW5pZm9ybXMgKSB7XG5cblx0XHRcdFx0c2hhZGVyLnVuaWZvcm1zWyB1bmlmb3JtTmFtZSBdID0gdW5pZm9ybXNbIHVuaWZvcm1OYW1lIF07XG5cblx0XHRcdH1cblxuXHRcdFx0c2hhZGVyLmZyYWdtZW50U2hhZGVyID0gc2hhZGVyLmZyYWdtZW50U2hhZGVyXG5cdFx0XHRcdC5yZXBsYWNlKCAndW5pZm9ybSBmbG9hdCByb3VnaG5lc3M7JywgJ3VuaWZvcm0gdmVjMyBzcGVjdWxhcjsnIClcblx0XHRcdFx0LnJlcGxhY2UoICd1bmlmb3JtIGZsb2F0IG1ldGFsbmVzczsnLCAndW5pZm9ybSBmbG9hdCBnbG9zc2luZXNzOycgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxyb3VnaG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bWV0YWxuZXNzbWFwX3BhcnNfZnJhZ21lbnQ+JywgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8cm91Z2huZXNzbWFwX2ZyYWdtZW50PicsIHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9mcmFnbWVudD4nLCBnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPGxpZ2h0c19waHlzaWNhbF9mcmFnbWVudD4nLCBsaWdodFBoeXNpY2FsRnJhZ21lbnRDaHVuayApO1xuXG5cdFx0fTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCB0aGlzLCB7XG5cblx0XHRcdHNwZWN1bGFyOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXIudmFsdWUgPSB2O1xuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNwZWN1bGFyTWFwOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXJNYXAudmFsdWUgPSB2O1xuXG5cdFx0XHRcdFx0aWYgKCB2ICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1NQRUNVTEFSTUFQID0gJyc7IC8vIFVTRV9VViBpcyBzZXQgYnkgdGhlIHJlbmRlcmVyIGZvciBzcGVjdWxhciBtYXBzXG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9TUEVDVUxBUk1BUDtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnbG9zc2luZXNzOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3MudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzLnZhbHVlID0gdjtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3NNYXAudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlID0gdjtcblxuXHRcdFx0XHRcdGlmICggdiApIHtcblxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQID0gJyc7XG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1VWID0gJyc7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfVVY7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSApO1xuXG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3NNYXA7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xuXG5cdFx0dGhpcy5zZXRWYWx1ZXMoIHBhcmFtcyApO1xuXG5cdH1cblxuXHRjb3B5KCBzb3VyY2UgKSB7XG5cblx0XHRzdXBlci5jb3B5KCBzb3VyY2UgKTtcblxuXHRcdHRoaXMuc3BlY3VsYXJNYXAgPSBzb3VyY2Uuc3BlY3VsYXJNYXA7XG5cdFx0dGhpcy5zcGVjdWxhci5jb3B5KCBzb3VyY2Uuc3BlY3VsYXIgKTtcblx0XHR0aGlzLmdsb3NzaW5lc3NNYXAgPSBzb3VyY2UuZ2xvc3NpbmVzc01hcDtcblx0XHR0aGlzLmdsb3NzaW5lc3MgPSBzb3VyY2UuZ2xvc3NpbmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzc01hcDtcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3NNYXA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG59XG5cblxuY2xhc3MgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M7XG5cblx0XHR0aGlzLnNwZWN1bGFyR2xvc3NpbmVzc1BhcmFtcyA9IFtcblx0XHRcdCdjb2xvcicsXG5cdFx0XHQnbWFwJyxcblx0XHRcdCdsaWdodE1hcCcsXG5cdFx0XHQnbGlnaHRNYXBJbnRlbnNpdHknLFxuXHRcdFx0J2FvTWFwJyxcblx0XHRcdCdhb01hcEludGVuc2l0eScsXG5cdFx0XHQnZW1pc3NpdmUnLFxuXHRcdFx0J2VtaXNzaXZlSW50ZW5zaXR5Jyxcblx0XHRcdCdlbWlzc2l2ZU1hcCcsXG5cdFx0XHQnYnVtcE1hcCcsXG5cdFx0XHQnYnVtcFNjYWxlJyxcblx0XHRcdCdub3JtYWxNYXAnLFxuXHRcdFx0J25vcm1hbE1hcFR5cGUnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudE1hcCcsXG5cdFx0XHQnZGlzcGxhY2VtZW50U2NhbGUnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudEJpYXMnLFxuXHRcdFx0J3NwZWN1bGFyTWFwJyxcblx0XHRcdCdzcGVjdWxhcicsXG5cdFx0XHQnZ2xvc3NpbmVzc01hcCcsXG5cdFx0XHQnZ2xvc3NpbmVzcycsXG5cdFx0XHQnYWxwaGFNYXAnLFxuXHRcdFx0J2Vudk1hcCcsXG5cdFx0XHQnZW52TWFwSW50ZW5zaXR5Jyxcblx0XHRcdCdyZWZyYWN0aW9uUmF0aW8nLFxuXHRcdF07XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSgpIHtcblxuXHRcdHJldHVybiBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApIHtcblxuXHRcdGNvbnN0IHBiclNwZWN1bGFyR2xvc3NpbmVzcyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvciApICkge1xuXG5cdFx0XHRjb25zdCBhcnJheSA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlRmFjdG9yO1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdH1cblxuXHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCAwLjAsIDAuMCwgMC4wICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcyA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgPyBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciA6IDEuMDtcblx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKSApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIuZnJvbUFycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc3Qgc3BlY0dsb3NzTWFwRGVmID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmU7XG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2dsb3NzaW5lc3NNYXAnLCBzcGVjR2xvc3NNYXBEZWYgKSApO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhck1hcCcsIHNwZWNHbG9zc01hcERlZiApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cblx0Y3JlYXRlTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XG5cdFx0bWF0ZXJpYWwuZm9nID0gdHJ1ZTtcblxuXHRcdG1hdGVyaWFsLmNvbG9yID0gbWF0ZXJpYWxQYXJhbXMuY29sb3I7XG5cblx0XHRtYXRlcmlhbC5tYXAgPSBtYXRlcmlhbFBhcmFtcy5tYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5tYXA7XG5cblx0XHRtYXRlcmlhbC5saWdodE1hcCA9IG51bGw7XG5cdFx0bWF0ZXJpYWwubGlnaHRNYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5hb01hcCA9IG1hdGVyaWFsUGFyYW1zLmFvTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYW9NYXA7XG5cdFx0bWF0ZXJpYWwuYW9NYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5lbWlzc2l2ZSA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlO1xuXHRcdG1hdGVyaWFsLmVtaXNzaXZlSW50ZW5zaXR5ID0gMS4wO1xuXHRcdG1hdGVyaWFsLmVtaXNzaXZlTWFwID0gbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZU1hcDtcblxuXHRcdG1hdGVyaWFsLmJ1bXBNYXAgPSBtYXRlcmlhbFBhcmFtcy5idW1wTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcDtcblx0XHRtYXRlcmlhbC5idW1wU2NhbGUgPSAxO1xuXG5cdFx0bWF0ZXJpYWwubm9ybWFsTWFwID0gbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwO1xuXHRcdG1hdGVyaWFsLm5vcm1hbE1hcFR5cGUgPSBUYW5nZW50U3BhY2VOb3JtYWxNYXA7XG5cblx0XHRpZiAoIG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlICkgbWF0ZXJpYWwubm9ybWFsU2NhbGUgPSBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZTtcblxuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudE1hcCA9IG51bGw7XG5cdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50U2NhbGUgPSAxO1xuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudEJpYXMgPSAwO1xuXG5cdFx0bWF0ZXJpYWwuc3BlY3VsYXJNYXAgPSBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhck1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyTWFwO1xuXHRcdG1hdGVyaWFsLnNwZWN1bGFyID0gbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXI7XG5cblx0XHRtYXRlcmlhbC5nbG9zc2luZXNzTWFwID0gbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzc01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3NNYXA7XG5cdFx0bWF0ZXJpYWwuZ2xvc3NpbmVzcyA9IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3M7XG5cblx0XHRtYXRlcmlhbC5hbHBoYU1hcCA9IG51bGw7XG5cblx0XHRtYXRlcmlhbC5lbnZNYXAgPSBtYXRlcmlhbFBhcmFtcy5lbnZNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbnZNYXA7XG5cdFx0bWF0ZXJpYWwuZW52TWFwSW50ZW5zaXR5ID0gMS4wO1xuXG5cdFx0bWF0ZXJpYWwucmVmcmFjdGlvblJhdGlvID0gMC45ODtcblxuXHRcdHJldHVybiBtYXRlcmlhbDtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBNZXNoIFF1YW50aXphdGlvbiBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWVzaF9xdWFudGl6YXRpb25cbiAqL1xuY2xhc3MgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT047XG5cblx0fVxuXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBJTlRFUlBPTEFUSU9OICoqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gU3BsaW5lIEludGVycG9sYXRpb25cbi8vIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYXBwZW5kaXgtYy1zcGxpbmUtaW50ZXJwb2xhdGlvblxuY2xhc3MgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQgZXh0ZW5kcyBJbnRlcnBvbGFudCB7XG5cblx0Y29uc3RydWN0b3IoIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKSB7XG5cblx0XHRzdXBlciggcGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlciApO1xuXG5cdH1cblxuXHRjb3B5U2FtcGxlVmFsdWVfKCBpbmRleCApIHtcblxuXHRcdC8vIENvcGllcyBhIHNhbXBsZSB2YWx1ZSB0byB0aGUgcmVzdWx0IGJ1ZmZlci4gU2VlIGRlc2NyaXB0aW9uIG9mIGdsVEZcblx0XHQvLyBDVUJJQ1NQTElORSB2YWx1ZXMgbGF5b3V0IGluIGludGVycG9sYXRlXygpIGZ1bmN0aW9uIGJlbG93LlxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXIsXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLnNhbXBsZVZhbHVlcyxcblx0XHRcdHZhbHVlU2l6ZSA9IHRoaXMudmFsdWVTaXplLFxuXHRcdFx0b2Zmc2V0ID0gaW5kZXggKiB2YWx1ZVNpemUgKiAzICsgdmFsdWVTaXplO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpICE9PSB2YWx1ZVNpemU7IGkgKysgKSB7XG5cblx0XHRcdHJlc3VsdFsgaSBdID0gdmFsdWVzWyBvZmZzZXQgKyBpIF07XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1cblxufVxuXG5HTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuYmVmb3JlU3RhcnRfID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV87XG5cbkdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5hZnRlckVuZF8gPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcblxuR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmludGVycG9sYXRlXyA9IGZ1bmN0aW9uICggaTEsIHQwLCB0LCB0MSApIHtcblxuXHRjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdEJ1ZmZlcjtcblx0Y29uc3QgdmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXM7XG5cdGNvbnN0IHN0cmlkZSA9IHRoaXMudmFsdWVTaXplO1xuXG5cdGNvbnN0IHN0cmlkZTIgPSBzdHJpZGUgKiAyO1xuXHRjb25zdCBzdHJpZGUzID0gc3RyaWRlICogMztcblxuXHRjb25zdCB0ZCA9IHQxIC0gdDA7XG5cblx0Y29uc3QgcCA9ICggdCAtIHQwICkgLyB0ZDtcblx0Y29uc3QgcHAgPSBwICogcDtcblx0Y29uc3QgcHBwID0gcHAgKiBwO1xuXG5cdGNvbnN0IG9mZnNldDEgPSBpMSAqIHN0cmlkZTM7XG5cdGNvbnN0IG9mZnNldDAgPSBvZmZzZXQxIC0gc3RyaWRlMztcblxuXHRjb25zdCBzMiA9IC0gMiAqIHBwcCArIDMgKiBwcDtcblx0Y29uc3QgczMgPSBwcHAgLSBwcDtcblx0Y29uc3QgczAgPSAxIC0gczI7XG5cdGNvbnN0IHMxID0gczMgLSBwcCArIHA7XG5cblx0Ly8gTGF5b3V0IG9mIGtleWZyYW1lIG91dHB1dCB2YWx1ZXMgZm9yIENVQklDU1BMSU5FIGFuaW1hdGlvbnM6XG5cdC8vICAgWyBpblRhbmdlbnRfMSwgc3BsaW5lVmVydGV4XzEsIG91dFRhbmdlbnRfMSwgaW5UYW5nZW50XzIsIHNwbGluZVZlcnRleF8yLCAuLi4gXVxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgIT09IHN0cmlkZTsgaSArKyApIHtcblxuXHRcdGNvbnN0IHAwID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZSBdOyAvLyBzcGxpbmVWZXJ0ZXhfa1xuXHRcdGNvbnN0IG0wID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZTIgXSAqIHRkOyAvLyBvdXRUYW5nZW50X2sgKiAodF9rKzEgLSB0X2spXG5cdFx0Y29uc3QgcDEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpICsgc3RyaWRlIF07IC8vIHNwbGluZVZlcnRleF9rKzFcblx0XHRjb25zdCBtMSA9IHZhbHVlc1sgb2Zmc2V0MSArIGkgXSAqIHRkOyAvLyBpblRhbmdlbnRfaysxICogKHRfaysxIC0gdF9rKVxuXG5cdFx0cmVzdWx0WyBpIF0gPSBzMCAqIHAwICsgczEgKiBtMCArIHMyICogcDEgKyBzMyAqIG0xO1xuXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59O1xuXG5jb25zdCBfcSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cbmNsYXNzIEdMVEZDdWJpY1NwbGluZVF1YXRlcm5pb25JbnRlcnBvbGFudCBleHRlbmRzIEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50IHtcblxuXHRpbnRlcnBvbGF0ZV8oIGkxLCB0MCwgdCwgdDEgKSB7XG5cblx0XHRjb25zdCByZXN1bHQgPSBzdXBlci5pbnRlcnBvbGF0ZV8oIGkxLCB0MCwgdCwgdDEgKTtcblxuXHRcdF9xLmZyb21BcnJheSggcmVzdWx0ICkubm9ybWFsaXplKCkudG9BcnJheSggcmVzdWx0ICk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1cblxufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBJTlRFUk5BTFMgKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogQ09OU1RBTlRTICovXG5cbmNvbnN0IFdFQkdMX0NPTlNUQU5UUyA9IHtcblx0RkxPQVQ6IDUxMjYsXG5cdC8vRkxPQVRfTUFUMjogMzU2NzQsXG5cdEZMT0FUX01BVDM6IDM1Njc1LFxuXHRGTE9BVF9NQVQ0OiAzNTY3Nixcblx0RkxPQVRfVkVDMjogMzU2NjQsXG5cdEZMT0FUX1ZFQzM6IDM1NjY1LFxuXHRGTE9BVF9WRUM0OiAzNTY2Nixcblx0TElORUFSOiA5NzI5LFxuXHRSRVBFQVQ6IDEwNDk3LFxuXHRTQU1QTEVSXzJEOiAzNTY3OCxcblx0UE9JTlRTOiAwLFxuXHRMSU5FUzogMSxcblx0TElORV9MT09QOiAyLFxuXHRMSU5FX1NUUklQOiAzLFxuXHRUUklBTkdMRVM6IDQsXG5cdFRSSUFOR0xFX1NUUklQOiA1LFxuXHRUUklBTkdMRV9GQU46IDYsXG5cdFVOU0lHTkVEX0JZVEU6IDUxMjEsXG5cdFVOU0lHTkVEX1NIT1JUOiA1MTIzXG59O1xuXG5jb25zdCBXRUJHTF9DT01QT05FTlRfVFlQRVMgPSB7XG5cdDUxMjA6IEludDhBcnJheSxcblx0NTEyMTogVWludDhBcnJheSxcblx0NTEyMjogSW50MTZBcnJheSxcblx0NTEyMzogVWludDE2QXJyYXksXG5cdDUxMjU6IFVpbnQzMkFycmF5LFxuXHQ1MTI2OiBGbG9hdDMyQXJyYXlcbn07XG5cbmNvbnN0IFdFQkdMX0ZJTFRFUlMgPSB7XG5cdDk3Mjg6IE5lYXJlc3RGaWx0ZXIsXG5cdDk3Mjk6IExpbmVhckZpbHRlcixcblx0OTk4NDogTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdDk5ODU6IExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdDk5ODY6IE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdDk5ODc6IExpbmVhck1pcG1hcExpbmVhckZpbHRlclxufTtcblxuY29uc3QgV0VCR0xfV1JBUFBJTkdTID0ge1xuXHQzMzA3MTogQ2xhbXBUb0VkZ2VXcmFwcGluZyxcblx0MzM2NDg6IE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXG5cdDEwNDk3OiBSZXBlYXRXcmFwcGluZ1xufTtcblxuY29uc3QgV0VCR0xfVFlQRV9TSVpFUyA9IHtcblx0J1NDQUxBUic6IDEsXG5cdCdWRUMyJzogMixcblx0J1ZFQzMnOiAzLFxuXHQnVkVDNCc6IDQsXG5cdCdNQVQyJzogNCxcblx0J01BVDMnOiA5LFxuXHQnTUFUNCc6IDE2XG59O1xuXG5jb25zdCBBVFRSSUJVVEVTID0ge1xuXHRQT1NJVElPTjogJ3Bvc2l0aW9uJyxcblx0Tk9STUFMOiAnbm9ybWFsJyxcblx0VEFOR0VOVDogJ3RhbmdlbnQnLFxuXHRURVhDT09SRF8wOiAndXYnLFxuXHRURVhDT09SRF8xOiAndXYyJyxcblx0Q09MT1JfMDogJ2NvbG9yJyxcblx0V0VJR0hUU18wOiAnc2tpbldlaWdodCcsXG5cdEpPSU5UU18wOiAnc2tpbkluZGV4Jyxcbn07XG5cbmNvbnN0IFBBVEhfUFJPUEVSVElFUyA9IHtcblx0c2NhbGU6ICdzY2FsZScsXG5cdHRyYW5zbGF0aW9uOiAncG9zaXRpb24nLFxuXHRyb3RhdGlvbjogJ3F1YXRlcm5pb24nLFxuXHR3ZWlnaHRzOiAnbW9ycGhUYXJnZXRJbmZsdWVuY2VzJ1xufTtcblxuY29uc3QgSU5URVJQT0xBVElPTiA9IHtcblx0Q1VCSUNTUExJTkU6IHVuZGVmaW5lZCwgLy8gV2UgdXNlIGEgY3VzdG9tIGludGVycG9sYW50IChHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGF0aW9uKSBmb3IgQ1VCSUNTUExJTkUgdHJhY2tzLiBFYWNoXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2V5ZnJhbWUgdHJhY2sgd2lsbCBiZSBpbml0aWFsaXplZCB3aXRoIGEgZGVmYXVsdCBpbnRlcnBvbGF0aW9uIHR5cGUsIHRoZW4gbW9kaWZpZWQuXG5cdExJTkVBUjogSW50ZXJwb2xhdGVMaW5lYXIsXG5cdFNURVA6IEludGVycG9sYXRlRGlzY3JldGVcbn07XG5cbmNvbnN0IEFMUEhBX01PREVTID0ge1xuXHRPUEFRVUU6ICdPUEFRVUUnLFxuXHRNQVNLOiAnTUFTSycsXG5cdEJMRU5EOiAnQkxFTkQnXG59O1xuXG4vKipcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjZGVmYXVsdC1tYXRlcmlhbFxuICovXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoIGNhY2hlICkge1xuXG5cdGlmICggY2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKCB7XG5cdFx0XHRjb2xvcjogMHhGRkZGRkYsXG5cdFx0XHRlbWlzc2l2ZTogMHgwMDAwMDAsXG5cdFx0XHRtZXRhbG5lc3M6IDEsXG5cdFx0XHRyb3VnaG5lc3M6IDEsXG5cdFx0XHR0cmFuc3BhcmVudDogZmFsc2UsXG5cdFx0XHRkZXB0aFRlc3Q6IHRydWUsXG5cdFx0XHRzaWRlOiBGcm9udFNpZGVcblx0XHR9ICk7XG5cblx0fVxuXG5cdHJldHVybiBjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXTtcblxufVxuXG5mdW5jdGlvbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGtub3duRXh0ZW5zaW9ucywgb2JqZWN0LCBvYmplY3REZWYgKSB7XG5cblx0Ly8gQWRkIHVua25vd24gZ2xURiBleHRlbnNpb25zIHRvIGFuIG9iamVjdCdzIHVzZXJEYXRhLlxuXG5cdGZvciAoIGNvbnN0IG5hbWUgaW4gb2JqZWN0RGVmLmV4dGVuc2lvbnMgKSB7XG5cblx0XHRpZiAoIGtub3duRXh0ZW5zaW9uc1sgbmFtZSBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9ucyA9IG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9ucyB8fCB7fTtcblx0XHRcdG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9uc1sgbmFtZSBdID0gb2JqZWN0RGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdDNEfE1hdGVyaWFsfEJ1ZmZlckdlb21ldHJ5fSBvYmplY3RcbiAqIEBwYXJhbSB7R0xURi5kZWZpbml0aW9ufSBnbHRmRGVmXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG9iamVjdCwgZ2x0ZkRlZiApIHtcblxuXHRpZiAoIGdsdGZEZWYuZXh0cmFzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBnbHRmRGVmLmV4dHJhcyA9PT0gJ29iamVjdCcgKSB7XG5cblx0XHRcdE9iamVjdC5hc3NpZ24oIG9iamVjdC51c2VyRGF0YSwgZ2x0ZkRlZi5leHRyYXMgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IElnbm9yaW5nIHByaW1pdGl2ZSB0eXBlIC5leHRyYXMsICcgKyBnbHRmRGVmLmV4dHJhcyApO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbW9ycGgtdGFyZ2V0c1xuICpcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge0FycmF5PEdMVEYuVGFyZ2V0Pn0gdGFyZ2V0c1xuICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxuICovXG5mdW5jdGlvbiBhZGRNb3JwaFRhcmdldHMoIGdlb21ldHJ5LCB0YXJnZXRzLCBwYXJzZXIgKSB7XG5cblx0bGV0IGhhc01vcnBoUG9zaXRpb24gPSBmYWxzZTtcblx0bGV0IGhhc01vcnBoTm9ybWFsID0gZmFsc2U7XG5cblx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRpZiAoIHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkgaGFzTW9ycGhQb3NpdGlvbiA9IHRydWU7XG5cdFx0aWYgKCB0YXJnZXQuTk9STUFMICE9PSB1bmRlZmluZWQgKSBoYXNNb3JwaE5vcm1hbCA9IHRydWU7XG5cblx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gJiYgaGFzTW9ycGhOb3JtYWwgKSBicmVhaztcblxuXHR9XG5cblx0aWYgKCAhIGhhc01vcnBoUG9zaXRpb24gJiYgISBoYXNNb3JwaE5vcm1hbCApIHJldHVybiBQcm9taXNlLnJlc29sdmUoIGdlb21ldHJ5ICk7XG5cblx0Y29uc3QgcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzID0gW107XG5cdGNvbnN0IHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgPSBbXTtcblxuXHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiApIHtcblxuXHRcdFx0Y29uc3QgcGVuZGluZ0FjY2Vzc29yID0gdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWRcblx0XHRcdFx0PyBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgdGFyZ2V0LlBPU0lUSU9OIClcblx0XHRcdFx0OiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuXG5cdFx0XHRwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMucHVzaCggcGVuZGluZ0FjY2Vzc29yICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGhhc01vcnBoTm9ybWFsICkge1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nQWNjZXNzb3IgPSB0YXJnZXQuTk9STUFMICE9PSB1bmRlZmluZWRcblx0XHRcdFx0PyBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgdGFyZ2V0Lk5PUk1BTCApXG5cdFx0XHRcdDogZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWw7XG5cblx0XHRcdHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMucHVzaCggcGVuZGluZ0FjY2Vzc29yICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBQcm9taXNlLmFsbCggW1xuXHRcdFByb21pc2UuYWxsKCBwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMgKSxcblx0XHRQcm9taXNlLmFsbCggcGVuZGluZ05vcm1hbEFjY2Vzc29ycyApXG5cdF0gKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29ycyApIHtcblxuXHRcdGNvbnN0IG1vcnBoUG9zaXRpb25zID0gYWNjZXNzb3JzWyAwIF07XG5cdFx0Y29uc3QgbW9ycGhOb3JtYWxzID0gYWNjZXNzb3JzWyAxIF07XG5cblx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb24gPSBtb3JwaFBvc2l0aW9ucztcblx0XHRpZiAoIGhhc01vcnBoTm9ybWFsICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLm5vcm1hbCA9IG1vcnBoTm9ybWFscztcblx0XHRnZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZSA9IHRydWU7XG5cblx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0fSApO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtNZXNofSBtZXNoXG4gKiBAcGFyYW0ge0dMVEYuTWVzaH0gbWVzaERlZlxuICovXG5mdW5jdGlvbiB1cGRhdGVNb3JwaFRhcmdldHMoIG1lc2gsIG1lc2hEZWYgKSB7XG5cblx0bWVzaC51cGRhdGVNb3JwaFRhcmdldHMoKTtcblxuXHRpZiAoIG1lc2hEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG1lc2hEZWYud2VpZ2h0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0bWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbIGkgXSA9IG1lc2hEZWYud2VpZ2h0c1sgaSBdO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvLyAuZXh0cmFzIGhhcyB1c2VyLWRlZmluZWQgZGF0YSwgc28gY2hlY2sgdGhhdCAuZXh0cmFzLnRhcmdldE5hbWVzIGlzIGFuIGFycmF5LlxuXHRpZiAoIG1lc2hEZWYuZXh0cmFzICYmIEFycmF5LmlzQXJyYXkoIG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzICkgKSB7XG5cblx0XHRjb25zdCB0YXJnZXROYW1lcyA9IG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzO1xuXG5cdFx0aWYgKCBtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcy5sZW5ndGggPT09IHRhcmdldE5hbWVzLmxlbmd0aCApIHtcblxuXHRcdFx0bWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnkgPSB7fTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldE5hbWVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdG1lc2gubW9ycGhUYXJnZXREaWN0aW9uYXJ5WyB0YXJnZXROYW1lc1sgaSBdIF0gPSBpO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBJbnZhbGlkIGV4dHJhcy50YXJnZXROYW1lcyBsZW5ndGguIElnbm9yaW5nIG5hbWVzLicgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlS2V5KCBwcmltaXRpdmVEZWYgKSB7XG5cblx0Y29uc3QgZHJhY29FeHRlbnNpb24gPSBwcmltaXRpdmVEZWYuZXh0ZW5zaW9ucyAmJiBwcmltaXRpdmVEZWYuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdO1xuXHRsZXQgZ2VvbWV0cnlLZXk7XG5cblx0aWYgKCBkcmFjb0V4dGVuc2lvbiApIHtcblxuXHRcdGdlb21ldHJ5S2V5ID0gJ2RyYWNvOicgKyBkcmFjb0V4dGVuc2lvbi5idWZmZXJWaWV3XG5cdFx0XHRcdCsgJzonICsgZHJhY29FeHRlbnNpb24uaW5kaWNlc1xuXHRcdFx0XHQrICc6JyArIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIGRyYWNvRXh0ZW5zaW9uLmF0dHJpYnV0ZXMgKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Z2VvbWV0cnlLZXkgPSBwcmltaXRpdmVEZWYuaW5kaWNlcyArICc6JyArIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzICkgKyAnOicgKyBwcmltaXRpdmVEZWYubW9kZTtcblxuXHR9XG5cblx0cmV0dXJuIGdlb21ldHJ5S2V5O1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIGF0dHJpYnV0ZXMgKSB7XG5cblx0bGV0IGF0dHJpYnV0ZXNLZXkgPSAnJztcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoIGF0dHJpYnV0ZXMgKS5zb3J0KCk7XG5cblx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRhdHRyaWJ1dGVzS2V5ICs9IGtleXNbIGkgXSArICc6JyArIGF0dHJpYnV0ZXNbIGtleXNbIGkgXSBdICsgJzsnO1xuXG5cdH1cblxuXHRyZXR1cm4gYXR0cmlidXRlc0tleTtcblxufVxuXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIGNvbnN0cnVjdG9yICkge1xuXG5cdC8vIFJlZmVyZW5jZTpcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21lc2hfcXVhbnRpemF0aW9uI2VuY29kaW5nLXF1YW50aXplZC1kYXRhXG5cblx0c3dpdGNoICggY29uc3RydWN0b3IgKSB7XG5cblx0XHRjYXNlIEludDhBcnJheTpcblx0XHRcdHJldHVybiAxIC8gMTI3O1xuXG5cdFx0Y2FzZSBVaW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyAyNTU7XG5cblx0XHRjYXNlIEludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDMyNzY3O1xuXG5cdFx0Y2FzZSBVaW50MTZBcnJheTpcblx0XHRcdHJldHVybiAxIC8gNjU1MzU7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgbm9ybWFsaXplZCBhY2Nlc3NvciBjb21wb25lbnQgdHlwZS4nICk7XG5cblx0fVxuXG59XG5cbi8qIEdMVEYgUEFSU0VSICovXG5cbmNsYXNzIEdMVEZQYXJzZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBqc29uID0ge30sIG9wdGlvbnMgPSB7fSApIHtcblxuXHRcdHRoaXMuanNvbiA9IGpzb247XG5cdFx0dGhpcy5leHRlbnNpb25zID0ge307XG5cdFx0dGhpcy5wbHVnaW5zID0ge307XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuXHRcdC8vIGxvYWRlciBvYmplY3QgY2FjaGVcblx0XHR0aGlzLmNhY2hlID0gbmV3IEdMVEZSZWdpc3RyeSgpO1xuXG5cdFx0Ly8gYXNzb2NpYXRpb25zIGJldHdlZW4gVGhyZWUuanMgb2JqZWN0cyBhbmQgZ2xURiBlbGVtZW50c1xuXHRcdHRoaXMuYXNzb2NpYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0Ly8gQnVmZmVyR2VvbWV0cnkgY2FjaGluZ1xuXHRcdHRoaXMucHJpbWl0aXZlQ2FjaGUgPSB7fTtcblxuXHRcdC8vIE9iamVjdDNEIGluc3RhbmNlIGNhY2hlc1xuXHRcdHRoaXMubWVzaENhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblx0XHR0aGlzLmNhbWVyYUNhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblx0XHR0aGlzLmxpZ2h0Q2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXG5cdFx0dGhpcy50ZXh0dXJlQ2FjaGUgPSB7fTtcblxuXHRcdC8vIFRyYWNrIG5vZGUgbmFtZXMsIHRvIGVuc3VyZSBubyBkdXBsaWNhdGVzXG5cdFx0dGhpcy5ub2RlTmFtZXNVc2VkID0ge307XG5cblx0XHQvLyBVc2UgYW4gSW1hZ2VCaXRtYXBMb2FkZXIgaWYgaW1hZ2VCaXRtYXBzIGFyZSBzdXBwb3J0ZWQuIE1vdmVzIG11Y2ggb2YgdGhlXG5cdFx0Ly8gZXhwZW5zaXZlIHdvcmsgb2YgdXBsb2FkaW5nIGEgdGV4dHVyZSB0byB0aGUgR1BVIG9mZiB0aGUgbWFpbiB0aHJlYWQuXG5cdFx0aWYgKCB0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnICYmIC9GaXJlZm94Ly50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHR0aGlzLnRleHR1cmVMb2FkZXIgPSBuZXcgSW1hZ2VCaXRtYXBMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLnRleHR1cmVMb2FkZXIgPSBuZXcgVGV4dHVyZUxvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMudGV4dHVyZUxvYWRlci5zZXRDcm9zc09yaWdpbiggdGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luICk7XG5cdFx0dGhpcy50ZXh0dXJlTG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMub3B0aW9ucy5yZXF1ZXN0SGVhZGVyICk7XG5cblx0XHR0aGlzLmZpbGVMb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcblx0XHR0aGlzLmZpbGVMb2FkZXIuc2V0UmVzcG9uc2VUeXBlKCAnYXJyYXlidWZmZXInICk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5jcm9zc09yaWdpbiA9PT0gJ3VzZS1jcmVkZW50aWFscycgKSB7XG5cblx0XHRcdHRoaXMuZmlsZUxvYWRlci5zZXRXaXRoQ3JlZGVudGlhbHMoIHRydWUgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0c2V0RXh0ZW5zaW9ucyggZXh0ZW5zaW9ucyApIHtcblxuXHRcdHRoaXMuZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XG5cblx0fVxuXG5cdHNldFBsdWdpbnMoIHBsdWdpbnMgKSB7XG5cblx0XHR0aGlzLnBsdWdpbnMgPSBwbHVnaW5zO1xuXG5cdH1cblxuXHRwYXJzZSggb25Mb2FkLCBvbkVycm9yICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cblx0XHQvLyBDbGVhciB0aGUgbG9hZGVyIGNhY2hlXG5cdFx0dGhpcy5jYWNoZS5yZW1vdmVBbGwoKTtcblxuXHRcdC8vIE1hcmsgdGhlIHNwZWNpYWwgbm9kZXMvbWVzaGVzIGluIGpzb24gZm9yIGVmZmljaWVudCBwYXJzZVxuXHRcdHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdHJldHVybiBleHQuX21hcmtEZWZzICYmIGV4dC5fbWFya0RlZnMoKTtcblxuXHRcdH0gKTtcblxuXHRcdFByb21pc2UuYWxsKCB0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRyZXR1cm4gZXh0LmJlZm9yZVJvb3QgJiYgZXh0LmJlZm9yZVJvb3QoKTtcblxuXHRcdH0gKSApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbXG5cblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ3NjZW5lJyApLFxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnYW5pbWF0aW9uJyApLFxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnY2FtZXJhJyApLFxuXG5cdFx0XHRdICk7XG5cblx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCBkZXBlbmRlbmNpZXMgKSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdFx0c2NlbmU6IGRlcGVuZGVuY2llc1sgMCBdWyBqc29uLnNjZW5lIHx8IDAgXSxcblx0XHRcdFx0c2NlbmVzOiBkZXBlbmRlbmNpZXNbIDAgXSxcblx0XHRcdFx0YW5pbWF0aW9uczogZGVwZW5kZW5jaWVzWyAxIF0sXG5cdFx0XHRcdGNhbWVyYXM6IGRlcGVuZGVuY2llc1sgMiBdLFxuXHRcdFx0XHRhc3NldDoganNvbi5hc3NldCxcblx0XHRcdFx0cGFyc2VyOiBwYXJzZXIsXG5cdFx0XHRcdHVzZXJEYXRhOiB7fVxuXHRcdFx0fTtcblxuXHRcdFx0YWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCByZXN1bHQsIGpzb24gKTtcblxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggcmVzdWx0LCBqc29uICk7XG5cblx0XHRcdFByb21pc2UuYWxsKCBwYXJzZXIuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5hZnRlclJvb3QgJiYgZXh0LmFmdGVyUm9vdCggcmVzdWx0ICk7XG5cblx0XHRcdH0gKSApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRvbkxvYWQoIHJlc3VsdCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICkuY2F0Y2goIG9uRXJyb3IgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE1hcmtzIHRoZSBzcGVjaWFsIG5vZGVzL21lc2hlcyBpbiBqc29uIGZvciBlZmZpY2llbnQgcGFyc2UuXG5cdCAqL1xuXHRfbWFya0RlZnMoKSB7XG5cblx0XHRjb25zdCBub2RlRGVmcyA9IHRoaXMuanNvbi5ub2RlcyB8fCBbXTtcblx0XHRjb25zdCBza2luRGVmcyA9IHRoaXMuanNvbi5za2lucyB8fCBbXTtcblx0XHRjb25zdCBtZXNoRGVmcyA9IHRoaXMuanNvbi5tZXNoZXMgfHwgW107XG5cblx0XHQvLyBOb3RoaW5nIGluIHRoZSBub2RlIGRlZmluaXRpb24gaW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgYSBCb25lIG9yIGFuXG5cdFx0Ly8gT2JqZWN0M0QuIFVzZSB0aGUgc2tpbnMnIGpvaW50IHJlZmVyZW5jZXMgdG8gbWFyayBib25lcy5cblx0XHRmb3IgKCBsZXQgc2tpbkluZGV4ID0gMCwgc2tpbkxlbmd0aCA9IHNraW5EZWZzLmxlbmd0aDsgc2tpbkluZGV4IDwgc2tpbkxlbmd0aDsgc2tpbkluZGV4ICsrICkge1xuXG5cdFx0XHRjb25zdCBqb2ludHMgPSBza2luRGVmc1sgc2tpbkluZGV4IF0uam9pbnRzO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gam9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdG5vZGVEZWZzWyBqb2ludHNbIGkgXSBdLmlzQm9uZSA9IHRydWU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIEl0ZXJhdGUgb3ZlciBhbGwgbm9kZXMsIG1hcmtpbmcgcmVmZXJlbmNlcyB0byBzaGFyZWQgcmVzb3VyY2VzLFxuXHRcdC8vIGFzIHdlbGwgYXMgc2tlbGV0b24gam9pbnRzLlxuXHRcdGZvciAoIGxldCBub2RlSW5kZXggPSAwLCBub2RlTGVuZ3RoID0gbm9kZURlZnMubGVuZ3RoOyBub2RlSW5kZXggPCBub2RlTGVuZ3RoOyBub2RlSW5kZXggKysgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVEZWYgPSBub2RlRGVmc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdGlmICggbm9kZURlZi5tZXNoICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0dGhpcy5fYWRkTm9kZVJlZiggdGhpcy5tZXNoQ2FjaGUsIG5vZGVEZWYubWVzaCApO1xuXG5cdFx0XHRcdC8vIE5vdGhpbmcgaW4gdGhlIG1lc2ggZGVmaW5pdGlvbiBpbmRpY2F0ZXMgd2hldGhlciBpdCBpc1xuXHRcdFx0XHQvLyBhIFNraW5uZWRNZXNoIG9yIE1lc2guIFVzZSB0aGUgbm9kZSdzIG1lc2ggcmVmZXJlbmNlXG5cdFx0XHRcdC8vIHRvIG1hcmsgU2tpbm5lZE1lc2ggaWYgbm9kZSBoYXMgc2tpbi5cblx0XHRcdFx0aWYgKCBub2RlRGVmLnNraW4gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG1lc2hEZWZzWyBub2RlRGVmLm1lc2ggXS5pc1NraW5uZWRNZXNoID0gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBub2RlRGVmLmNhbWVyYSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHRoaXMuX2FkZE5vZGVSZWYoIHRoaXMuY2FtZXJhQ2FjaGUsIG5vZGVEZWYuY2FtZXJhICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENvdW50cyByZWZlcmVuY2VzIHRvIHNoYXJlZCBub2RlIC8gT2JqZWN0M0QgcmVzb3VyY2VzLiBUaGVzZSByZXNvdXJjZXNcblx0ICogY2FuIGJlIHJldXNlZCwgb3IgXCJpbnN0YW50aWF0ZWRcIiwgYXQgbXVsdGlwbGUgbm9kZXMgaW4gdGhlIHNjZW5lXG5cdCAqIGhpZXJhcmNoeS4gTWVzaCwgQ2FtZXJhLCBhbmQgTGlnaHQgaW5zdGFuY2VzIGFyZSBpbnN0YW50aWF0ZWQgYW5kIG11c3Rcblx0ICogYmUgbWFya2VkLiBOb24tc2NlbmVncmFwaCByZXNvdXJjZXMgKGxpa2UgTWF0ZXJpYWxzLCBHZW9tZXRyaWVzLCBhbmRcblx0ICogVGV4dHVyZXMpIGNhbiBiZSByZXVzZWQgZGlyZWN0bHkgYW5kIGFyZSBub3QgbWFya2VkIGhlcmUuXG5cdCAqXG5cdCAqIEV4YW1wbGU6IENlc2l1bU1pbGtUcnVjayBzYW1wbGUgbW9kZWwgcmV1c2VzIFwiV2hlZWxcIiBtZXNoZXMuXG5cdCAqL1xuXHRfYWRkTm9kZVJlZiggY2FjaGUsIGluZGV4ICkge1xuXG5cdFx0aWYgKCBpbmRleCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuO1xuXG5cdFx0aWYgKCBjYWNoZS5yZWZzWyBpbmRleCBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNhY2hlLnJlZnNbIGluZGV4IF0gPSBjYWNoZS51c2VzWyBpbmRleCBdID0gMDtcblxuXHRcdH1cblxuXHRcdGNhY2hlLnJlZnNbIGluZGV4IF0gKys7XG5cblx0fVxuXG5cdC8qKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIGEgc2hhcmVkIHJlc291cmNlLCBjbG9uaW5nIGl0IGlmIG5lY2Vzc2FyeS4gKi9cblx0X2dldE5vZGVSZWYoIGNhY2hlLCBpbmRleCwgb2JqZWN0ICkge1xuXG5cdFx0aWYgKCBjYWNoZS5yZWZzWyBpbmRleCBdIDw9IDEgKSByZXR1cm4gb2JqZWN0O1xuXG5cdFx0Y29uc3QgcmVmID0gb2JqZWN0LmNsb25lKCk7XG5cblx0XHQvLyBQcm9wYWdhdGVzIG1hcHBpbmdzIHRvIHRoZSBjbG9uZWQgb2JqZWN0LCBwcmV2ZW50cyBtYXBwaW5ncyBvbiB0aGVcblx0XHQvLyBvcmlnaW5hbCBvYmplY3QgZnJvbSBiZWluZyBsb3N0LlxuXHRcdGNvbnN0IHVwZGF0ZU1hcHBpbmdzID0gKCBvcmlnaW5hbCwgY2xvbmUgKSA9PiB7XG5cblx0XHRcdGNvbnN0IG1hcHBpbmdzID0gdGhpcy5hc3NvY2lhdGlvbnMuZ2V0KCBvcmlnaW5hbCApO1xuXHRcdFx0aWYgKCBtYXBwaW5ncyAhPSBudWxsICkge1xuXG5cdFx0XHRcdHRoaXMuYXNzb2NpYXRpb25zLnNldCggY2xvbmUsIG1hcHBpbmdzICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Zm9yICggY29uc3QgWyBpLCBjaGlsZCBdIG9mIG9yaWdpbmFsLmNoaWxkcmVuLmVudHJpZXMoKSApIHtcblxuXHRcdFx0XHR1cGRhdGVNYXBwaW5ncyggY2hpbGQsIGNsb25lLmNoaWxkcmVuWyBpIF0gKTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHRcdHVwZGF0ZU1hcHBpbmdzKCBvYmplY3QsIHJlZiApO1xuXG5cdFx0cmVmLm5hbWUgKz0gJ19pbnN0YW5jZV8nICsgKCBjYWNoZS51c2VzWyBpbmRleCBdICsrICk7XG5cblx0XHRyZXR1cm4gcmVmO1xuXG5cdH1cblxuXHRfaW52b2tlT25lKCBmdW5jICkge1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IE9iamVjdC52YWx1ZXMoIHRoaXMucGx1Z2lucyApO1xuXHRcdGV4dGVuc2lvbnMucHVzaCggdGhpcyApO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGZ1bmMoIGV4dGVuc2lvbnNbIGkgXSApO1xuXG5cdFx0XHRpZiAoIHJlc3VsdCApIHJldHVybiByZXN1bHQ7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblxuXHR9XG5cblx0X2ludm9rZUFsbCggZnVuYyApIHtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSBPYmplY3QudmFsdWVzKCB0aGlzLnBsdWdpbnMgKTtcblx0XHRleHRlbnNpb25zLnVuc2hpZnQoIHRoaXMgKTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBmdW5jKCBleHRlbnNpb25zWyBpIF0gKTtcblxuXHRcdFx0aWYgKCByZXN1bHQgKSBwZW5kaW5nLnB1c2goIHJlc3VsdCApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBlbmRpbmc7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0cyB0aGUgc3BlY2lmaWVkIGRlcGVuZGVuY3kgYXN5bmNocm9ub3VzbHksIHdpdGggY2FjaGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0M0R8TWF0ZXJpYWx8VEhSRUUuVGV4dHVyZXxBbmltYXRpb25DbGlwfEFycmF5QnVmZmVyfE9iamVjdD59XG5cdCAqL1xuXHRnZXREZXBlbmRlbmN5KCB0eXBlLCBpbmRleCApIHtcblxuXHRcdGNvbnN0IGNhY2hlS2V5ID0gdHlwZSArICc6JyArIGluZGV4O1xuXHRcdGxldCBkZXBlbmRlbmN5ID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRpZiAoICEgZGVwZW5kZW5jeSApIHtcblxuXHRcdFx0c3dpdGNoICggdHlwZSApIHtcblxuXHRcdFx0XHRjYXNlICdzY2VuZSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZFNjZW5lKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ25vZGUnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWROb2RlKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ21lc2gnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRNZXNoICYmIGV4dC5sb2FkTWVzaCggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdhY2Nlc3Nvcic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEFjY2Vzc29yKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2J1ZmZlclZpZXcnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRCdWZmZXJWaWV3ICYmIGV4dC5sb2FkQnVmZmVyVmlldyggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdidWZmZXInOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRCdWZmZXIoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRNYXRlcmlhbCAmJiBleHQubG9hZE1hdGVyaWFsKCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3RleHR1cmUnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRUZXh0dXJlICYmIGV4dC5sb2FkVGV4dHVyZSggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdza2luJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2tpbiggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdhbmltYXRpb24nOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBbmltYXRpb24oIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnY2FtZXJhJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQ2FtZXJhKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVW5rbm93biB0eXBlOiAnICsgdHlwZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgZGVwZW5kZW5jeSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY3k7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0cyBhbGwgZGVwZW5kZW5jaWVzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBhc3luY2hyb25vdXNseSwgd2l0aCBjYWNoaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PE9iamVjdD4+fVxuXHQgKi9cblx0Z2V0RGVwZW5kZW5jaWVzKCB0eXBlICkge1xuXG5cdFx0bGV0IGRlcGVuZGVuY2llcyA9IHRoaXMuY2FjaGUuZ2V0KCB0eXBlICk7XG5cblx0XHRpZiAoICEgZGVwZW5kZW5jaWVzICkge1xuXG5cdFx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdFx0Y29uc3QgZGVmcyA9IHRoaXMuanNvblsgdHlwZSArICggdHlwZSA9PT0gJ21lc2gnID8gJ2VzJyA6ICdzJyApIF0gfHwgW107XG5cblx0XHRcdGRlcGVuZGVuY2llcyA9IFByb21pc2UuYWxsKCBkZWZzLm1hcCggZnVuY3Rpb24gKCBkZWYsIGluZGV4ICkge1xuXG5cdFx0XHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggdHlwZSwgaW5kZXggKTtcblxuXHRcdFx0fSApICk7XG5cblx0XHRcdHRoaXMuY2FjaGUuYWRkKCB0eXBlLCBkZXBlbmRlbmNpZXMgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBkZXBlbmRlbmNpZXM7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2J1ZmZlcnMtYW5kLWJ1ZmZlci12aWV3c1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYnVmZmVySW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59XG5cdCAqL1xuXHRsb2FkQnVmZmVyKCBidWZmZXJJbmRleCApIHtcblxuXHRcdGNvbnN0IGJ1ZmZlckRlZiA9IHRoaXMuanNvbi5idWZmZXJzWyBidWZmZXJJbmRleCBdO1xuXHRcdGNvbnN0IGxvYWRlciA9IHRoaXMuZmlsZUxvYWRlcjtcblxuXHRcdGlmICggYnVmZmVyRGVmLnR5cGUgJiYgYnVmZmVyRGVmLnR5cGUgIT09ICdhcnJheWJ1ZmZlcicgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6ICcgKyBidWZmZXJEZWYudHlwZSArICcgYnVmZmVyIHR5cGUgaXMgbm90IHN1cHBvcnRlZC4nICk7XG5cblx0XHR9XG5cblx0XHQvLyBJZiBwcmVzZW50LCBHTEIgY29udGFpbmVyIGlzIHJlcXVpcmVkIHRvIGJlIHRoZSBmaXJzdCBidWZmZXIuXG5cdFx0aWYgKCBidWZmZXJEZWYudXJpID09PSB1bmRlZmluZWQgJiYgYnVmZmVySW5kZXggPT09IDAgKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHRoaXMuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXS5ib2R5ICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcblxuXHRcdFx0bG9hZGVyLmxvYWQoIExvYWRlclV0aWxzLnJlc29sdmVVUkwoIGJ1ZmZlckRlZi51cmksIG9wdGlvbnMucGF0aCApLCByZXNvbHZlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRyZWplY3QoIG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEZhaWxlZCB0byBsb2FkIGJ1ZmZlciBcIicgKyBidWZmZXJEZWYudXJpICsgJ1wiLicgKSApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2J1ZmZlcnMtYW5kLWJ1ZmZlci12aWV3c1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYnVmZmVyVmlld0luZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxuXHQgKi9cblx0bG9hZEJ1ZmZlclZpZXcoIGJ1ZmZlclZpZXdJbmRleCApIHtcblxuXHRcdGNvbnN0IGJ1ZmZlclZpZXdEZWYgPSB0aGlzLmpzb24uYnVmZmVyVmlld3NbIGJ1ZmZlclZpZXdJbmRleCBdO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlcicsIGJ1ZmZlclZpZXdEZWYuYnVmZmVyICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXIgKSB7XG5cblx0XHRcdGNvbnN0IGJ5dGVMZW5ndGggPSBidWZmZXJWaWV3RGVmLmJ5dGVMZW5ndGggfHwgMDtcblx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBidWZmZXJWaWV3RGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdHJldHVybiBidWZmZXIuc2xpY2UoIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2FjY2Vzc29yc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYWNjZXNzb3JJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckF0dHJpYnV0ZXxJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZT59XG5cdCAqL1xuXHRsb2FkQWNjZXNzb3IoIGFjY2Vzc29ySW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cblx0XHRjb25zdCBhY2Nlc3NvckRlZiA9IHRoaXMuanNvbi5hY2Nlc3NvcnNbIGFjY2Vzc29ySW5kZXggXTtcblxuXHRcdGlmICggYWNjZXNzb3JEZWYuYnVmZmVyVmlldyA9PT0gdW5kZWZpbmVkICYmIGFjY2Vzc29yRGVmLnNwYXJzZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBJZ25vcmUgZW1wdHkgYWNjZXNzb3JzLCB3aGljaCBtYXkgYmUgdXNlZCB0byBkZWNsYXJlIHJ1bnRpbWVcblx0XHRcdC8vIGluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgY29taW5nIGZyb20gYW5vdGhlciBzb3VyY2UgKGUuZy4gRHJhY29cblx0XHRcdC8vIGNvbXByZXNzaW9uIGV4dGVuc2lvbikuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBudWxsICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nQnVmZmVyVmlld3MgPSBbXTtcblxuXHRcdGlmICggYWNjZXNzb3JEZWYuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgKSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIG51bGwgKTtcblxuXHRcdH1cblxuXHRcdGlmICggYWNjZXNzb3JEZWYuc3BhcnNlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuYnVmZmVyVmlldyApICk7XG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS52YWx1ZXMuYnVmZmVyVmlldyApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmdCdWZmZXJWaWV3cyApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlld3MgKSB7XG5cblx0XHRcdGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJWaWV3c1sgMCBdO1xuXG5cdFx0XHRjb25zdCBpdGVtU2l6ZSA9IFdFQkdMX1RZUEVfU0laRVNbIGFjY2Vzc29yRGVmLnR5cGUgXTtcblx0XHRcdGNvbnN0IFR5cGVkQXJyYXkgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgXTtcblxuXHRcdFx0Ly8gRm9yIFZFQzM6IGl0ZW1TaXplIGlzIDMsIGVsZW1lbnRCeXRlcyBpcyA0LCBpdGVtQnl0ZXMgaXMgMTIuXG5cdFx0XHRjb25zdCBlbGVtZW50Qnl0ZXMgPSBUeXBlZEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xuXHRcdFx0Y29uc3QgaXRlbUJ5dGVzID0gZWxlbWVudEJ5dGVzICogaXRlbVNpemU7XG5cdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gYWNjZXNzb3JEZWYuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0Y29uc3QgYnl0ZVN0cmlkZSA9IGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCA/IGpzb24uYnVmZmVyVmlld3NbIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgXS5ieXRlU3RyaWRlIDogdW5kZWZpbmVkO1xuXHRcdFx0Y29uc3Qgbm9ybWFsaXplZCA9IGFjY2Vzc29yRGVmLm5vcm1hbGl6ZWQgPT09IHRydWU7XG5cdFx0XHRsZXQgYXJyYXksIGJ1ZmZlckF0dHJpYnV0ZTtcblxuXHRcdFx0Ly8gVGhlIGJ1ZmZlciBpcyBub3QgaW50ZXJsZWF2ZWQgaWYgdGhlIHN0cmlkZSBpcyB0aGUgaXRlbSBzaXplIGluIGJ5dGVzLlxuXHRcdFx0aWYgKCBieXRlU3RyaWRlICYmIGJ5dGVTdHJpZGUgIT09IGl0ZW1CeXRlcyApIHtcblxuXHRcdFx0XHQvLyBFYWNoIFwic2xpY2VcIiBvZiB0aGUgYnVmZmVyLCBhcyBkZWZpbmVkIGJ5ICdjb3VudCcgZWxlbWVudHMgb2YgJ2J5dGVTdHJpZGUnIGJ5dGVzLCBnZXRzIGl0cyBvd24gSW50ZXJsZWF2ZWRCdWZmZXJcblx0XHRcdFx0Ly8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgSUJBLmNvdW50IHJlZmxlY3RzIGFjY2Vzc29yLmNvdW50IHByb3Blcmx5XG5cdFx0XHRcdGNvbnN0IGliU2xpY2UgPSBNYXRoLmZsb29yKCBieXRlT2Zmc2V0IC8gYnl0ZVN0cmlkZSApO1xuXHRcdFx0XHRjb25zdCBpYkNhY2hlS2V5ID0gJ0ludGVybGVhdmVkQnVmZmVyOicgKyBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICsgJzonICsgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSArICc6JyArIGliU2xpY2UgKyAnOicgKyBhY2Nlc3NvckRlZi5jb3VudDtcblx0XHRcdFx0bGV0IGliID0gcGFyc2VyLmNhY2hlLmdldCggaWJDYWNoZUtleSApO1xuXG5cdFx0XHRcdGlmICggISBpYiApIHtcblxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXcsIGliU2xpY2UgKiBieXRlU3RyaWRlLCBhY2Nlc3NvckRlZi5jb3VudCAqIGJ5dGVTdHJpZGUgLyBlbGVtZW50Qnl0ZXMgKTtcblxuXHRcdFx0XHRcdC8vIEludGVnZXIgcGFyYW1ldGVycyB0byBJQi9JQkEgYXJlIGluIGFycmF5IGVsZW1lbnRzLCBub3QgYnl0ZXMuXG5cdFx0XHRcdFx0aWIgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXIoIGFycmF5LCBieXRlU3RyaWRlIC8gZWxlbWVudEJ5dGVzICk7XG5cblx0XHRcdFx0XHRwYXJzZXIuY2FjaGUuYWRkKCBpYkNhY2hlS2V5LCBpYiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUoIGliLCBpdGVtU2l6ZSwgKCBieXRlT2Zmc2V0ICUgYnl0ZVN0cmlkZSApIC8gZWxlbWVudEJ5dGVzLCBub3JtYWxpemVkICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKCBidWZmZXJWaWV3ID09PSBudWxsICkge1xuXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYWNjZXNzb3JEZWYuY291bnQgKiBpdGVtU2l6ZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3LCBieXRlT2Zmc2V0LCBhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGFycmF5LCBpdGVtU2l6ZSwgbm9ybWFsaXplZCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjc3BhcnNlLWFjY2Vzc29yc1xuXHRcdFx0aWYgKCBhY2Nlc3NvckRlZi5zcGFyc2UgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBpdGVtU2l6ZUluZGljZXMgPSBXRUJHTF9UWVBFX1NJWkVTLlNDQUxBUjtcblx0XHRcdFx0Y29uc3QgVHlwZWRBcnJheUluZGljZXMgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmNvbXBvbmVudFR5cGUgXTtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0SW5kaWNlcyA9IGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldFZhbHVlcyA9IGFjY2Vzc29yRGVmLnNwYXJzZS52YWx1ZXMuYnl0ZU9mZnNldCB8fCAwO1xuXG5cdFx0XHRcdGNvbnN0IHNwYXJzZUluZGljZXMgPSBuZXcgVHlwZWRBcnJheUluZGljZXMoIGJ1ZmZlclZpZXdzWyAxIF0sIGJ5dGVPZmZzZXRJbmRpY2VzLCBhY2Nlc3NvckRlZi5zcGFyc2UuY291bnQgKiBpdGVtU2l6ZUluZGljZXMgKTtcblx0XHRcdFx0Y29uc3Qgc3BhcnNlVmFsdWVzID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXdzWyAyIF0sIGJ5dGVPZmZzZXRWYWx1ZXMsIGFjY2Vzc29yRGVmLnNwYXJzZS5jb3VudCAqIGl0ZW1TaXplICk7XG5cblx0XHRcdFx0aWYgKCBidWZmZXJWaWV3ICE9PSBudWxsICkge1xuXG5cdFx0XHRcdFx0Ly8gQXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBBcnJheUJ1ZmZlciwgaWYgdGhlIGJ1ZmZlclZpZXcgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggemVyb2VzLlxuXHRcdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGJ1ZmZlckF0dHJpYnV0ZS5hcnJheS5zbGljZSgpLCBidWZmZXJBdHRyaWJ1dGUuaXRlbVNpemUsIGJ1ZmZlckF0dHJpYnV0ZS5ub3JtYWxpemVkICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBzcGFyc2VJbmRpY2VzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSBzcGFyc2VJbmRpY2VzWyBpIF07XG5cblx0XHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUuc2V0WCggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDIgKSBidWZmZXJBdHRyaWJ1dGUuc2V0WSggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMSBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSAzICkgYnVmZmVyQXR0cmlidXRlLnNldFooIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDIgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gNCApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRXKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAzIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDUgKSB0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBpdGVtU2l6ZSBpbiBzcGFyc2UgQnVmZmVyQXR0cmlidXRlLicgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ1ZmZlckF0dHJpYnV0ZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCN0ZXh0dXJlc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gdGV4dHVyZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VEhSRUUuVGV4dHVyZT59XG5cdCAqL1xuXHRsb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgdGV4dHVyZURlZi5zb3VyY2UgXTtcblxuXHRcdGxldCBsb2FkZXIgPSB0aGlzLnRleHR1cmVMb2FkZXI7XG5cblx0XHRpZiAoIHNvdXJjZS51cmkgKSB7XG5cblx0XHRcdGNvbnN0IGhhbmRsZXIgPSBvcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlLnVyaSApO1xuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcblxuXHR9XG5cblx0bG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXG5cdFx0Y29uc3QgY2FjaGVLZXkgPSAoIHNvdXJjZS51cmkgfHwgc291cmNlLmJ1ZmZlclZpZXcgKSArICc6JyArIHRleHR1cmVEZWYuc2FtcGxlcjtcblxuXHRcdGlmICggdGhpcy50ZXh0dXJlQ2FjaGVbIGNhY2hlS2V5IF0gKSB7XG5cblx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8yMTU1OS5cblx0XHRcdHJldHVybiB0aGlzLnRleHR1cmVDYWNoZVsgY2FjaGVLZXkgXTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IFVSTCA9IHNlbGYuVVJMIHx8IHNlbGYud2Via2l0VVJMO1xuXG5cdFx0bGV0IHNvdXJjZVVSSSA9IHNvdXJjZS51cmkgfHwgJyc7XG5cdFx0bGV0IGlzT2JqZWN0VVJMID0gZmFsc2U7XG5cblx0XHRpZiAoIHNvdXJjZS5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIExvYWQgYmluYXJ5IGltYWdlIGRhdGEgZnJvbSBidWZmZXJWaWV3LCBpZiBwcm92aWRlZC5cblxuXHRcdFx0c291cmNlVVJJID0gcGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3Jywgc291cmNlLmJ1ZmZlclZpZXcgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXcgKSB7XG5cblx0XHRcdFx0aXNPYmplY3RVUkwgPSB0cnVlO1xuXHRcdFx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoIFsgYnVmZmVyVmlldyBdLCB7IHR5cGU6IHNvdXJjZS5taW1lVHlwZSB9ICk7XG5cdFx0XHRcdHNvdXJjZVVSSSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcblx0XHRcdFx0cmV0dXJuIHNvdXJjZVVSSTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSBlbHNlIGlmICggc291cmNlLnVyaSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBJbWFnZSAnICsgdGV4dHVyZUluZGV4ICsgJyBpcyBtaXNzaW5nIFVSSSBhbmQgYnVmZmVyVmlldycgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoIHNvdXJjZVVSSSApLnRoZW4oIGZ1bmN0aW9uICggc291cmNlVVJJICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSwgcmVqZWN0ICkge1xuXG5cdFx0XHRcdGxldCBvbkxvYWQgPSByZXNvbHZlO1xuXG5cdFx0XHRcdGlmICggbG9hZGVyLmlzSW1hZ2VCaXRtYXBMb2FkZXIgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHRvbkxvYWQgPSBmdW5jdGlvbiAoIGltYWdlQml0bWFwICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUoIGltYWdlQml0bWFwICk7XG5cdFx0XHRcdFx0XHR0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0cmVzb2x2ZSggdGV4dHVyZSApO1xuXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bG9hZGVyLmxvYWQoIExvYWRlclV0aWxzLnJlc29sdmVVUkwoIHNvdXJjZVVSSSwgb3B0aW9ucy5wYXRoICksIG9uTG9hZCwgdW5kZWZpbmVkLCByZWplY3QgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuXHRcdFx0Ly8gQ2xlYW4gdXAgcmVzb3VyY2VzIGFuZCBjb25maWd1cmUgVGV4dHVyZS5cblxuXHRcdFx0aWYgKCBpc09iamVjdFVSTCA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKCBzb3VyY2VVUkkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0ZXh0dXJlLmZsaXBZID0gZmFsc2U7XG5cblx0XHRcdGlmICggdGV4dHVyZURlZi5uYW1lICkgdGV4dHVyZS5uYW1lID0gdGV4dHVyZURlZi5uYW1lO1xuXG5cdFx0XHRjb25zdCBzYW1wbGVycyA9IGpzb24uc2FtcGxlcnMgfHwge307XG5cdFx0XHRjb25zdCBzYW1wbGVyID0gc2FtcGxlcnNbIHRleHR1cmVEZWYuc2FtcGxlciBdIHx8IHt9O1xuXG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFdFQkdMX0ZJTFRFUlNbIHNhbXBsZXIubWFnRmlsdGVyIF0gfHwgTGluZWFyRmlsdGVyO1xuXHRcdFx0dGV4dHVyZS5taW5GaWx0ZXIgPSBXRUJHTF9GSUxURVJTWyBzYW1wbGVyLm1pbkZpbHRlciBdIHx8IExpbmVhck1pcG1hcExpbmVhckZpbHRlcjtcblx0XHRcdHRleHR1cmUud3JhcFMgPSBXRUJHTF9XUkFQUElOR1NbIHNhbXBsZXIud3JhcFMgXSB8fCBSZXBlYXRXcmFwcGluZztcblx0XHRcdHRleHR1cmUud3JhcFQgPSBXRUJHTF9XUkFQUElOR1NbIHNhbXBsZXIud3JhcFQgXSB8fCBSZXBlYXRXcmFwcGluZztcblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIHRleHR1cmUsIHsgdGV4dHVyZXM6IHRleHR1cmVJbmRleCB9ICk7XG5cblx0XHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdFx0fSApLmNhdGNoKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBDb3VsZG5cXCd0IGxvYWQgdGV4dHVyZScsIHNvdXJjZVVSSSApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnRleHR1cmVDYWNoZVsgY2FjaGVLZXkgXSA9IHByb21pc2U7XG5cblx0XHRyZXR1cm4gcHJvbWlzZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFzeW5jaHJvbm91c2x5IGFzc2lnbnMgYSB0ZXh0dXJlIHRvIHRoZSBnaXZlbiBtYXRlcmlhbCBwYXJhbWV0ZXJzLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gbWF0ZXJpYWxQYXJhbXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1hcE5hbWVcblx0ICogQHBhcmFtIHtPYmplY3R9IG1hcERlZlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRleHR1cmU+fVxuXHQgKi9cblx0YXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsIG1hcE5hbWUsIG1hcERlZiApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAndGV4dHVyZScsIG1hcERlZi5pbmRleCApLnRoZW4oIGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuXHRcdFx0Ly8gTWF0ZXJpYWxzIHNhbXBsZSBhb01hcCBmcm9tIFVWIHNldCAxIGFuZCBvdGhlciBtYXBzIGZyb20gVVYgc2V0IDAgLSB0aGlzIGNhbid0IGJlIGNvbmZpZ3VyZWRcblx0XHRcdC8vIEhvd2V2ZXIsIHdlIHdpbGwgY29weSBVViBzZXQgMCB0byBVViBzZXQgMSBvbiBkZW1hbmQgZm9yIGFvTWFwXG5cdFx0XHRpZiAoIG1hcERlZi50ZXhDb29yZCAhPT0gdW5kZWZpbmVkICYmIG1hcERlZi50ZXhDb29yZCAhPSAwICYmICEgKCBtYXBOYW1lID09PSAnYW9NYXAnICYmIG1hcERlZi50ZXhDb29yZCA9PSAxICkgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogQ3VzdG9tIFVWIHNldCAnICsgbWFwRGVmLnRleENvb3JkICsgJyBmb3IgdGV4dHVyZSAnICsgbWFwTmFtZSArICcgbm90IHlldCBzdXBwb3J0ZWQuJyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggcGFyc2VyLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0gKSB7XG5cblx0XHRcdFx0Y29uc3QgdHJhbnNmb3JtID0gbWFwRGVmLmV4dGVuc2lvbnMgIT09IHVuZGVmaW5lZCA/IG1hcERlZi5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdIDogdW5kZWZpbmVkO1xuXG5cdFx0XHRcdGlmICggdHJhbnNmb3JtICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgZ2x0ZlJlZmVyZW5jZSA9IHBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KCB0ZXh0dXJlICk7XG5cdFx0XHRcdFx0dGV4dHVyZSA9IHBhcnNlci5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdLmV4dGVuZFRleHR1cmUoIHRleHR1cmUsIHRyYW5zZm9ybSApO1xuXHRcdFx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCB0ZXh0dXJlLCBnbHRmUmVmZXJlbmNlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zWyBtYXBOYW1lIF0gPSB0ZXh0dXJlO1xuXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2lnbnMgZmluYWwgbWF0ZXJpYWwgdG8gYSBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuIFRoZSBpbnN0YW5jZVxuXHQgKiBhbHJlYWR5IGhhcyBhIG1hdGVyaWFsIChnZW5lcmF0ZWQgZnJvbSB0aGUgZ2xURiBtYXRlcmlhbCBvcHRpb25zIGFsb25lKVxuXHQgKiBidXQgcmV1c2Ugb2YgdGhlIHNhbWUgZ2xURiBtYXRlcmlhbCBtYXkgcmVxdWlyZSBtdWx0aXBsZSB0aHJlZWpzIG1hdGVyaWFsc1xuXHQgKiB0byBhY2NvbW1vZGF0ZSBkaWZmZXJlbnQgcHJpbWl0aXZlIHR5cGVzLCBkZWZpbmVzLCBldGMuIE5ldyBtYXRlcmlhbHMgd2lsbFxuXHQgKiBiZSBjcmVhdGVkIGlmIG5lY2Vzc2FyeSwgYW5kIHJldXNlZCBmcm9tIGEgY2FjaGUuXG5cdCAqIEBwYXJhbSAge09iamVjdDNEfSBtZXNoIE1lc2gsIExpbmUsIG9yIFBvaW50cyBpbnN0YW5jZS5cblx0ICovXG5cdGFzc2lnbkZpbmFsTWF0ZXJpYWwoIG1lc2ggKSB7XG5cblx0XHRjb25zdCBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7XG5cdFx0bGV0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbDtcblxuXHRcdGNvbnN0IHVzZURlcml2YXRpdmVUYW5nZW50cyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMudGFuZ2VudCA9PT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHVzZVZlcnRleENvbG9ycyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMuY29sb3IgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCB1c2VGbGF0U2hhZGluZyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsID09PSB1bmRlZmluZWQ7XG5cblx0XHRpZiAoIG1lc2guaXNQb2ludHMgKSB7XG5cblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0gJ1BvaW50c01hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkO1xuXG5cdFx0XHRsZXQgcG9pbnRzTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdFx0aWYgKCAhIHBvaW50c01hdGVyaWFsICkge1xuXG5cdFx0XHRcdHBvaW50c01hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKCk7XG5cdFx0XHRcdE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwoIHBvaW50c01hdGVyaWFsLCBtYXRlcmlhbCApO1xuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5jb2xvci5jb3B5KCBtYXRlcmlhbC5jb2xvciApO1xuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5tYXAgPSBtYXRlcmlhbC5tYXA7XG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLnNpemVBdHRlbnVhdGlvbiA9IGZhbHNlOyAvLyBnbFRGIHNwZWMgc2F5cyBwb2ludHMgc2hvdWxkIGJlIDFweFxuXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgcG9pbnRzTWF0ZXJpYWwgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbCA9IHBvaW50c01hdGVyaWFsO1xuXG5cdFx0fSBlbHNlIGlmICggbWVzaC5pc0xpbmUgKSB7XG5cblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0gJ0xpbmVCYXNpY01hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkO1xuXG5cdFx0XHRsZXQgbGluZU1hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRcdGlmICggISBsaW5lTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0bGluZU1hdGVyaWFsID0gbmV3IExpbmVCYXNpY01hdGVyaWFsKCk7XG5cdFx0XHRcdE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwoIGxpbmVNYXRlcmlhbCwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0bGluZU1hdGVyaWFsLmNvbG9yLmNvcHkoIG1hdGVyaWFsLmNvbG9yICk7XG5cblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBsaW5lTWF0ZXJpYWwgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbCA9IGxpbmVNYXRlcmlhbDtcblxuXHRcdH1cblxuXHRcdC8vIENsb25lIHRoZSBtYXRlcmlhbCBpZiBpdCB3aWxsIGJlIG1vZGlmaWVkXG5cdFx0aWYgKCB1c2VEZXJpdmF0aXZlVGFuZ2VudHMgfHwgdXNlVmVydGV4Q29sb3JzIHx8IHVzZUZsYXRTaGFkaW5nICkge1xuXG5cdFx0XHRsZXQgY2FjaGVLZXkgPSAnQ2xvbmVkTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQgKyAnOic7XG5cblx0XHRcdGlmICggbWF0ZXJpYWwuaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwgKSBjYWNoZUtleSArPSAnc3BlY3VsYXItZ2xvc3NpbmVzczonO1xuXHRcdFx0aWYgKCB1c2VEZXJpdmF0aXZlVGFuZ2VudHMgKSBjYWNoZUtleSArPSAnZGVyaXZhdGl2ZS10YW5nZW50czonO1xuXHRcdFx0aWYgKCB1c2VWZXJ0ZXhDb2xvcnMgKSBjYWNoZUtleSArPSAndmVydGV4LWNvbG9yczonO1xuXHRcdFx0aWYgKCB1c2VGbGF0U2hhZGluZyApIGNhY2hlS2V5ICs9ICdmbGF0LXNoYWRpbmc6JztcblxuXHRcdFx0bGV0IGNhY2hlZE1hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRcdGlmICggISBjYWNoZWRNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRjYWNoZWRNYXRlcmlhbCA9IG1hdGVyaWFsLmNsb25lKCk7XG5cblx0XHRcdFx0aWYgKCB1c2VWZXJ0ZXhDb2xvcnMgKSBjYWNoZWRNYXRlcmlhbC52ZXJ0ZXhDb2xvcnMgPSB0cnVlO1xuXHRcdFx0XHRpZiAoIHVzZUZsYXRTaGFkaW5nICkgY2FjaGVkTWF0ZXJpYWwuZmxhdFNoYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdGlmICggdXNlRGVyaXZhdGl2ZVRhbmdlbnRzICkge1xuXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTE0MzgjaXNzdWVjb21tZW50LTUwNzAwMzk5NVxuXHRcdFx0XHRcdGlmICggY2FjaGVkTWF0ZXJpYWwubm9ybWFsU2NhbGUgKSBjYWNoZWRNYXRlcmlhbC5ub3JtYWxTY2FsZS55ICo9IC0gMTtcblx0XHRcdFx0XHRpZiAoIGNhY2hlZE1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlICkgY2FjaGVkTWF0ZXJpYWwuY2xlYXJjb2F0Tm9ybWFsU2NhbGUueSAqPSAtIDE7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgY2FjaGVkTWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR0aGlzLmFzc29jaWF0aW9ucy5zZXQoIGNhY2hlZE1hdGVyaWFsLCB0aGlzLmFzc29jaWF0aW9ucy5nZXQoIG1hdGVyaWFsICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbCA9IGNhY2hlZE1hdGVyaWFsO1xuXG5cdFx0fVxuXG5cdFx0Ly8gd29ya2Fyb3VuZHMgZm9yIG1lc2ggYW5kIGdlb21ldHJ5XG5cblx0XHRpZiAoIG1hdGVyaWFsLmFvTWFwICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYyID09PSB1bmRlZmluZWQgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcy51diAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICd1djInLCBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2ICk7XG5cblx0XHR9XG5cblx0XHRtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggLyogbWF0ZXJpYWxJbmRleCAqLyApIHtcblxuXHRcdHJldHVybiBNZXNoU3RhbmRhcmRNYXRlcmlhbDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWF0ZXJpYWxzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXRlcmlhbEluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWF0ZXJpYWw+fVxuXHQgKi9cblx0bG9hZE1hdGVyaWFsKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBqc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0bGV0IG1hdGVyaWFsVHlwZTtcblx0XHRjb25zdCBtYXRlcmlhbFBhcmFtcyA9IHt9O1xuXHRcdGNvbnN0IG1hdGVyaWFsRXh0ZW5zaW9ucyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwge307XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRpZiAoIG1hdGVyaWFsRXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF0gKSB7XG5cblx0XHRcdGNvbnN0IHNnRXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF07XG5cdFx0XHRtYXRlcmlhbFR5cGUgPSBzZ0V4dGVuc2lvbi5nZXRNYXRlcmlhbFR5cGUoKTtcblx0XHRcdHBlbmRpbmcucHVzaCggc2dFeHRlbnNpb24uZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApICk7XG5cblx0XHR9IGVsc2UgaWYgKCBtYXRlcmlhbEV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVCBdICkge1xuXG5cdFx0XHRjb25zdCBrbXVFeHRlbnNpb24gPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQgXTtcblx0XHRcdG1hdGVyaWFsVHlwZSA9IGttdUV4dGVuc2lvbi5nZXRNYXRlcmlhbFR5cGUoKTtcblx0XHRcdHBlbmRpbmcucHVzaCgga211RXh0ZW5zaW9uLmV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gU3BlY2lmaWNhdGlvbjpcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNtZXRhbGxpYy1yb3VnaG5lc3MtbWF0ZXJpYWxcblxuXHRcdFx0Y29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSBtYXRlcmlhbERlZi5wYnJNZXRhbGxpY1JvdWdobmVzcyB8fCB7fTtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYXJyYXkgPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3I7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLm1ldGFsbmVzcyA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciA6IDEuMDtcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnJvdWdobmVzcyA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yIDogMS4wO1xuXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWV0YWxuZXNzTWFwJywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICkgKTtcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdyb3VnaG5lc3NNYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsVHlwZSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5nZXRNYXRlcmlhbFR5cGUgJiYgZXh0LmdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggUHJvbWlzZS5hbGwoIHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5leHRlbmRNYXRlcmlhbFBhcmFtcyAmJiBleHQuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdH0gKSApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLmRvdWJsZVNpZGVkID09PSB0cnVlICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5zaWRlID0gRG91YmxlU2lkZTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGFscGhhTW9kZSA9IG1hdGVyaWFsRGVmLmFscGhhTW9kZSB8fCBBTFBIQV9NT0RFUy5PUEFRVUU7XG5cblx0XHRpZiAoIGFscGhhTW9kZSA9PT0gQUxQSEFfTU9ERVMuQkxFTkQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gdHJ1ZTtcblxuXHRcdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xNzcwNlxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuZGVwdGhXcml0ZSA9IGZhbHNlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuZm9ybWF0ID0gUkdCRm9ybWF0O1xuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNwYXJlbnQgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCBhbHBoYU1vZGUgPT09IEFMUEhBX01PREVTLk1BU0sgKSB7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuYWxwaGFUZXN0ID0gbWF0ZXJpYWxEZWYuYWxwaGFDdXRvZmYgIT09IHVuZGVmaW5lZCA/IG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmIDogMC41O1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ25vcm1hbE1hcCcsIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUgKSApO1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSA9IG5ldyBWZWN0b3IyKCAxLCAxICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZTtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZS5zZXQoIHNjYWxlLCBzY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2FvTWFwJywgbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZSApICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmFvTWFwSW50ZW5zaXR5ID0gbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5lbWlzc2l2ZUZhY3RvciAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCkuZnJvbUFycmF5KCBtYXRlcmlhbERlZi5lbWlzc2l2ZUZhY3RvciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5lbWlzc2l2ZVRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2VtaXNzaXZlTWFwJywgbWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0bGV0IG1hdGVyaWFsO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsVHlwZSA9PT0gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0bWF0ZXJpYWwgPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXS5jcmVhdGVNYXRlcmlhbCggbWF0ZXJpYWxQYXJhbXMgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRtYXRlcmlhbCA9IG5ldyBtYXRlcmlhbFR5cGUoIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5uYW1lICkgbWF0ZXJpYWwubmFtZSA9IG1hdGVyaWFsRGVmLm5hbWU7XG5cblx0XHRcdC8vIGJhc2VDb2xvclRleHR1cmUsIGVtaXNzaXZlVGV4dHVyZSwgYW5kIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgdXNlIHNSR0IgZW5jb2RpbmcuXG5cdFx0XHRpZiAoIG1hdGVyaWFsLm1hcCApIG1hdGVyaWFsLm1hcC5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcblx0XHRcdGlmICggbWF0ZXJpYWwuZW1pc3NpdmVNYXAgKSBtYXRlcmlhbC5lbWlzc2l2ZU1hcC5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcblxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbWF0ZXJpYWwsIG1hdGVyaWFsRGVmICk7XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBtYXRlcmlhbCwgeyBtYXRlcmlhbHM6IG1hdGVyaWFsSW5kZXggfSApO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG1hdGVyaWFsLCBtYXRlcmlhbERlZiApO1xuXG5cdFx0XHRyZXR1cm4gbWF0ZXJpYWw7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKiBXaGVuIE9iamVjdDNEIGluc3RhbmNlcyBhcmUgdGFyZ2V0ZWQgYnkgYW5pbWF0aW9uLCB0aGV5IG5lZWQgdW5pcXVlIG5hbWVzLiAqL1xuXHRjcmVhdGVVbmlxdWVOYW1lKCBvcmlnaW5hbE5hbWUgKSB7XG5cblx0XHRjb25zdCBzYW5pdGl6ZWROYW1lID0gUHJvcGVydHlCaW5kaW5nLnNhbml0aXplTm9kZU5hbWUoIG9yaWdpbmFsTmFtZSB8fCAnJyApO1xuXG5cdFx0bGV0IG5hbWUgPSBzYW5pdGl6ZWROYW1lO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAxOyB0aGlzLm5vZGVOYW1lc1VzZWRbIG5hbWUgXTsgKysgaSApIHtcblxuXHRcdFx0bmFtZSA9IHNhbml0aXplZE5hbWUgKyAnXycgKyBpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5ub2RlTmFtZXNVc2VkWyBuYW1lIF0gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIG5hbWU7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2dlb21ldHJ5XG5cdCAqXG5cdCAqIENyZWF0ZXMgQnVmZmVyR2VvbWV0cmllcyBmcm9tIHByaW1pdGl2ZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXk8R0xURi5QcmltaXRpdmU+fSBwcmltaXRpdmVzXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8QnVmZmVyR2VvbWV0cnk+Pn1cblx0ICovXG5cdGxvYWRHZW9tZXRyaWVzKCBwcmltaXRpdmVzICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IGNhY2hlID0gdGhpcy5wcmltaXRpdmVDYWNoZTtcblxuXHRcdGZ1bmN0aW9uIGNyZWF0ZURyYWNvUHJpbWl0aXZlKCBwcmltaXRpdmUgKSB7XG5cblx0XHRcdHJldHVybiBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF1cblx0XHRcdFx0LmRlY29kZVByaW1pdGl2ZSggcHJpbWl0aXZlLCBwYXJzZXIgKVxuXHRcdFx0XHQudGhlbiggZnVuY3Rpb24gKCBnZW9tZXRyeSApIHtcblxuXHRcdFx0XHRcdHJldHVybiBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBnZW9tZXRyeSwgcHJpbWl0aXZlLCBwYXJzZXIgKTtcblxuXHRcdFx0XHR9ICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gcHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcHJpbWl0aXZlID0gcHJpbWl0aXZlc1sgaSBdO1xuXHRcdFx0Y29uc3QgY2FjaGVLZXkgPSBjcmVhdGVQcmltaXRpdmVLZXkoIHByaW1pdGl2ZSApO1xuXG5cdFx0XHQvLyBTZWUgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIHRoaXMgZ2VvbWV0cnlcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlWyBjYWNoZUtleSBdO1xuXG5cdFx0XHRpZiAoIGNhY2hlZCApIHtcblxuXHRcdFx0XHQvLyBVc2UgdGhlIGNhY2hlZCBnZW9tZXRyeSBpZiBpdCBleGlzdHNcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBjYWNoZWQucHJvbWlzZSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGxldCBnZW9tZXRyeVByb21pc2U7XG5cblx0XHRcdFx0aWYgKCBwcmltaXRpdmUuZXh0ZW5zaW9ucyAmJiBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdICkge1xuXG5cdFx0XHRcdFx0Ly8gVXNlIERSQUNPIGdlb21ldHJ5IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdGdlb21ldHJ5UHJvbWlzZSA9IGNyZWF0ZURyYWNvUHJpbWl0aXZlKCBwcmltaXRpdmUgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBnZW9tZXRyeVxuXHRcdFx0XHRcdGdlb21ldHJ5UHJvbWlzZSA9IGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIG5ldyBCdWZmZXJHZW9tZXRyeSgpLCBwcmltaXRpdmUsIHBhcnNlciApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWNoZSB0aGlzIGdlb21ldHJ5XG5cdFx0XHRcdGNhY2hlWyBjYWNoZUtleSBdID0geyBwcmltaXRpdmU6IHByaW1pdGl2ZSwgcHJvbWlzZTogZ2VvbWV0cnlQcm9taXNlIH07XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBnZW9tZXRyeVByb21pc2UgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21lc2hlc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gbWVzaEluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8R3JvdXB8TWVzaHxTa2lubmVkTWVzaD59XG5cdCAqL1xuXHRsb2FkTWVzaCggbWVzaEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cblx0XHRjb25zdCBtZXNoRGVmID0ganNvbi5tZXNoZXNbIG1lc2hJbmRleCBdO1xuXHRcdGNvbnN0IHByaW1pdGl2ZXMgPSBtZXNoRGVmLnByaW1pdGl2ZXM7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gcHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgbWF0ZXJpYWwgPSBwcmltaXRpdmVzWyBpIF0ubWF0ZXJpYWwgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNyZWF0ZURlZmF1bHRNYXRlcmlhbCggdGhpcy5jYWNoZSApXG5cdFx0XHRcdDogdGhpcy5nZXREZXBlbmRlbmN5KCAnbWF0ZXJpYWwnLCBwcmltaXRpdmVzWyBpIF0ubWF0ZXJpYWwgKTtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBtYXRlcmlhbCApO1xuXG5cdFx0fVxuXG5cdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIubG9hZEdlb21ldHJpZXMoIHByaW1pdGl2ZXMgKSApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCByZXN1bHRzICkge1xuXG5cdFx0XHRjb25zdCBtYXRlcmlhbHMgPSByZXN1bHRzLnNsaWNlKCAwLCByZXN1bHRzLmxlbmd0aCAtIDEgKTtcblx0XHRcdGNvbnN0IGdlb21ldHJpZXMgPSByZXN1bHRzWyByZXN1bHRzLmxlbmd0aCAtIDEgXTtcblxuXHRcdFx0Y29uc3QgbWVzaGVzID0gW107XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBnZW9tZXRyaWVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBwcmltaXRpdmUgPSBwcmltaXRpdmVzWyBpIF07XG5cblx0XHRcdFx0Ly8gMS4gY3JlYXRlIE1lc2hcblxuXHRcdFx0XHRsZXQgbWVzaDtcblxuXHRcdFx0XHRjb25zdCBtYXRlcmlhbCA9IG1hdGVyaWFsc1sgaSBdO1xuXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRVMgfHxcblx0XHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVAgfHxcblx0XHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfRkFOIHx8XG5cdFx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0Ly8gLmlzU2tpbm5lZE1lc2ggaXNuJ3QgaW4gZ2xURiBzcGVjLiBTZWUgLl9tYXJrRGVmcygpXG5cdFx0XHRcdFx0bWVzaCA9IG1lc2hEZWYuaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZVxuXHRcdFx0XHRcdFx0PyBuZXcgU2tpbm5lZE1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApXG5cdFx0XHRcdFx0XHQ6IG5ldyBNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHRcdGlmICggbWVzaC5pc1NraW5uZWRNZXNoID09PSB0cnVlICYmICEgbWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNraW5XZWlnaHQubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdFx0Ly8gd2Ugbm9ybWFsaXplIGZsb2F0aW5nIHBvaW50IHNraW4gd2VpZ2h0IGFycmF5IHRvIGZpeCBtYWxmb3JtZWQgYXNzZXRzIChzZWUgIzE1MzE5KVxuXHRcdFx0XHRcdFx0Ly8gaXQncyBpbXBvcnRhbnQgdG8gc2tpcCB0aGlzIGZvciBub24tZmxvYXQzMiBkYXRhIHNpbmNlIG5vcm1hbGl6ZVNraW5XZWlnaHRzIGFzc3VtZXMgbm9uLW5vcm1hbGl6ZWQgaW5wdXRzXG5cdFx0XHRcdFx0XHRtZXNoLm5vcm1hbGl6ZVNraW5XZWlnaHRzKCk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVAgKSB7XG5cblx0XHRcdFx0XHRcdG1lc2guZ2VvbWV0cnkgPSB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBtZXNoLmdlb21ldHJ5LCBUcmlhbmdsZVN0cmlwRHJhd01vZGUgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfRkFOICkge1xuXG5cdFx0XHRcdFx0XHRtZXNoLmdlb21ldHJ5ID0gdG9UcmlhbmdsZXNEcmF3TW9kZSggbWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVGYW5EcmF3TW9kZSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORVMgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVTZWdtZW50cyggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FX1NUUklQICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVfTE9PUCApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZUxvb3AoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuUE9JTlRTICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBQb2ludHMoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBQcmltaXRpdmUgbW9kZSB1bnN1cHBvcnRlZDogJyArIHByaW1pdGl2ZS5tb2RlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggT2JqZWN0LmtleXMoIG1lc2guZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzICkubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHRcdHVwZGF0ZU1vcnBoVGFyZ2V0cyggbWVzaCwgbWVzaERlZiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZXNoLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbWVzaERlZi5uYW1lIHx8ICggJ21lc2hfJyArIG1lc2hJbmRleCApICk7XG5cblx0XHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbWVzaCwgbWVzaERlZiApO1xuXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG1lc2gsIHByaW1pdGl2ZSApO1xuXG5cdFx0XHRcdHBhcnNlci5hc3NpZ25GaW5hbE1hdGVyaWFsKCBtZXNoICk7XG5cblx0XHRcdFx0bWVzaGVzLnB1c2goIG1lc2ggKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbWVzaGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBtZXNoZXNbIGkgXSwge1xuXHRcdFx0XHRcdG1lc2hlczogbWVzaEluZGV4LFxuXHRcdFx0XHRcdHByaW1pdGl2ZXM6IGlcblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWVzaGVzLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdFx0XHRyZXR1cm4gbWVzaGVzWyAwIF07XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIGdyb3VwLCB7IG1lc2hlczogbWVzaEluZGV4IH0gKTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG1lc2hlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRncm91cC5hZGQoIG1lc2hlc1sgaSBdICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGdyb3VwO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2NhbWVyYXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VEhSRUUuQ2FtZXJhPn1cblx0ICovXG5cdGxvYWRDYW1lcmEoIGNhbWVyYUluZGV4ICkge1xuXG5cdFx0bGV0IGNhbWVyYTtcblx0XHRjb25zdCBjYW1lcmFEZWYgPSB0aGlzLmpzb24uY2FtZXJhc1sgY2FtZXJhSW5kZXggXTtcblx0XHRjb25zdCBwYXJhbXMgPSBjYW1lcmFEZWZbIGNhbWVyYURlZi50eXBlIF07XG5cblx0XHRpZiAoICEgcGFyYW1zICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIGNhbWVyYSBwYXJhbWV0ZXJzLicgKTtcblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHRcdGlmICggY2FtZXJhRGVmLnR5cGUgPT09ICdwZXJzcGVjdGl2ZScgKSB7XG5cblx0XHRcdGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSggTWF0aFV0aWxzLnJhZFRvRGVnKCBwYXJhbXMueWZvdiApLCBwYXJhbXMuYXNwZWN0UmF0aW8gfHwgMSwgcGFyYW1zLnpuZWFyIHx8IDEsIHBhcmFtcy56ZmFyIHx8IDJlNiApO1xuXG5cdFx0fSBlbHNlIGlmICggY2FtZXJhRGVmLnR5cGUgPT09ICdvcnRob2dyYXBoaWMnICkge1xuXG5cdFx0XHRjYW1lcmEgPSBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhKCAtIHBhcmFtcy54bWFnLCBwYXJhbXMueG1hZywgcGFyYW1zLnltYWcsIC0gcGFyYW1zLnltYWcsIHBhcmFtcy56bmVhciwgcGFyYW1zLnpmYXIgKTtcblxuXHRcdH1cblxuXHRcdGlmICggY2FtZXJhRGVmLm5hbWUgKSBjYW1lcmEubmFtZSA9IHRoaXMuY3JlYXRlVW5pcXVlTmFtZSggY2FtZXJhRGVmLm5hbWUgKTtcblxuXHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIGNhbWVyYSwgY2FtZXJhRGVmICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBjYW1lcmEgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNza2luc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gc2tpbkluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cblx0ICovXG5cdGxvYWRTa2luKCBza2luSW5kZXggKSB7XG5cblx0XHRjb25zdCBza2luRGVmID0gdGhpcy5qc29uLnNraW5zWyBza2luSW5kZXggXTtcblxuXHRcdGNvbnN0IHNraW5FbnRyeSA9IHsgam9pbnRzOiBza2luRGVmLmpvaW50cyB9O1xuXG5cdFx0aWYgKCBza2luRGVmLmludmVyc2VCaW5kTWF0cmljZXMgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggc2tpbkVudHJ5ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBza2luRGVmLmludmVyc2VCaW5kTWF0cmljZXMgKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xuXG5cdFx0XHRza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcyA9IGFjY2Vzc29yO1xuXG5cdFx0XHRyZXR1cm4gc2tpbkVudHJ5O1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2FuaW1hdGlvbnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFuaW1hdGlvbkluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QW5pbWF0aW9uQ2xpcD59XG5cdCAqL1xuXHRsb2FkQW5pbWF0aW9uKCBhbmltYXRpb25JbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cblx0XHRjb25zdCBhbmltYXRpb25EZWYgPSBqc29uLmFuaW1hdGlvbnNbIGFuaW1hdGlvbkluZGV4IF07XG5cblx0XHRjb25zdCBwZW5kaW5nTm9kZXMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nSW5wdXRBY2Nlc3NvcnMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nT3V0cHV0QWNjZXNzb3JzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ1NhbXBsZXJzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ1RhcmdldHMgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IGNoYW5uZWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHNbIGkgXTtcblx0XHRcdGNvbnN0IHNhbXBsZXIgPSBhbmltYXRpb25EZWYuc2FtcGxlcnNbIGNoYW5uZWwuc2FtcGxlciBdO1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gY2hhbm5lbC50YXJnZXQ7XG5cdFx0XHRjb25zdCBuYW1lID0gdGFyZ2V0Lm5vZGUgIT09IHVuZGVmaW5lZCA/IHRhcmdldC5ub2RlIDogdGFyZ2V0LmlkOyAvLyBOT1RFOiB0YXJnZXQuaWQgaXMgZGVwcmVjYXRlZC5cblx0XHRcdGNvbnN0IGlucHV0ID0gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnMgIT09IHVuZGVmaW5lZCA/IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzWyBzYW1wbGVyLmlucHV0IF0gOiBzYW1wbGVyLmlucHV0O1xuXHRcdFx0Y29uc3Qgb3V0cHV0ID0gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnMgIT09IHVuZGVmaW5lZCA/IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzWyBzYW1wbGVyLm91dHB1dCBdIDogc2FtcGxlci5vdXRwdXQ7XG5cblx0XHRcdHBlbmRpbmdOb2Rlcy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdub2RlJywgbmFtZSApICk7XG5cdFx0XHRwZW5kaW5nSW5wdXRBY2Nlc3NvcnMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBpbnB1dCApICk7XG5cdFx0XHRwZW5kaW5nT3V0cHV0QWNjZXNzb3JzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgb3V0cHV0ICkgKTtcblx0XHRcdHBlbmRpbmdTYW1wbGVycy5wdXNoKCBzYW1wbGVyICk7XG5cdFx0XHRwZW5kaW5nVGFyZ2V0cy5wdXNoKCB0YXJnZXQgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggW1xuXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ05vZGVzICksXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ0lucHV0QWNjZXNzb3JzICksXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ091dHB1dEFjY2Vzc29ycyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdTYW1wbGVycyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdUYXJnZXRzIClcblxuXHRcdF0gKS50aGVuKCBmdW5jdGlvbiAoIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZXMgPSBkZXBlbmRlbmNpZXNbIDAgXTtcblx0XHRcdGNvbnN0IGlucHV0QWNjZXNzb3JzID0gZGVwZW5kZW5jaWVzWyAxIF07XG5cdFx0XHRjb25zdCBvdXRwdXRBY2Nlc3NvcnMgPSBkZXBlbmRlbmNpZXNbIDIgXTtcblx0XHRcdGNvbnN0IHNhbXBsZXJzID0gZGVwZW5kZW5jaWVzWyAzIF07XG5cdFx0XHRjb25zdCB0YXJnZXRzID0gZGVwZW5kZW5jaWVzWyA0IF07XG5cblx0XHRcdGNvbnN0IHRyYWNrcyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbm9kZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3Qgbm9kZSA9IG5vZGVzWyBpIF07XG5cdFx0XHRcdGNvbnN0IGlucHV0QWNjZXNzb3IgPSBpbnB1dEFjY2Vzc29yc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBvdXRwdXRBY2Nlc3NvciA9IG91dHB1dEFjY2Vzc29yc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBzYW1wbGVyID0gc2FtcGxlcnNbIGkgXTtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0XHRcdGlmICggbm9kZSA9PT0gdW5kZWZpbmVkICkgY29udGludWU7XG5cblx0XHRcdFx0bm9kZS51cGRhdGVNYXRyaXgoKTtcblx0XHRcdFx0bm9kZS5tYXRyaXhBdXRvVXBkYXRlID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgVHlwZWRLZXlmcmFtZVRyYWNrO1xuXG5cdFx0XHRcdHN3aXRjaCAoIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSApIHtcblxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLndlaWdodHM6XG5cblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IE51bWJlcktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnJvdGF0aW9uOlxuXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjaztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMucG9zaXRpb246XG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMuc2NhbGU6XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gVmVjdG9yS2V5ZnJhbWVUcmFjaztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCB0YXJnZXROYW1lID0gbm9kZS5uYW1lID8gbm9kZS5uYW1lIDogbm9kZS51dWlkO1xuXG5cdFx0XHRcdGNvbnN0IGludGVycG9sYXRpb24gPSBzYW1wbGVyLmludGVycG9sYXRpb24gIT09IHVuZGVmaW5lZCA/IElOVEVSUE9MQVRJT05bIHNhbXBsZXIuaW50ZXJwb2xhdGlvbiBdIDogSW50ZXJwb2xhdGVMaW5lYXI7XG5cblx0XHRcdFx0Y29uc3QgdGFyZ2V0TmFtZXMgPSBbXTtcblxuXHRcdFx0XHRpZiAoIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSA9PT0gUEFUSF9QUk9QRVJUSUVTLndlaWdodHMgKSB7XG5cblx0XHRcdFx0XHQvLyBOb2RlIG1heSBiZSBhIEdyb3VwIChnbFRGIG1lc2ggd2l0aCBzZXZlcmFsIHByaW1pdGl2ZXMpIG9yIGEgTWVzaC5cblx0XHRcdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBvYmplY3QuaXNNZXNoID09PSB0cnVlICYmIG9iamVjdC5tb3JwaFRhcmdldEluZmx1ZW5jZXMgKSB7XG5cblx0XHRcdFx0XHRcdFx0dGFyZ2V0TmFtZXMucHVzaCggb2JqZWN0Lm5hbWUgPyBvYmplY3QubmFtZSA6IG9iamVjdC51dWlkICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0dGFyZ2V0TmFtZXMucHVzaCggdGFyZ2V0TmFtZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgb3V0cHV0QXJyYXkgPSBvdXRwdXRBY2Nlc3Nvci5hcnJheTtcblxuXHRcdFx0XHRpZiAoIG91dHB1dEFjY2Vzc29yLm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0XHRjb25zdCBzY2FsZSA9IGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggb3V0cHV0QXJyYXkuY29uc3RydWN0b3IgKTtcblx0XHRcdFx0XHRjb25zdCBzY2FsZWQgPSBuZXcgRmxvYXQzMkFycmF5KCBvdXRwdXRBcnJheS5sZW5ndGggKTtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBqID0gMCwgamwgPSBvdXRwdXRBcnJheS5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcblxuXHRcdFx0XHRcdFx0c2NhbGVkWyBqIF0gPSBvdXRwdXRBcnJheVsgaiBdICogc2NhbGU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXRBcnJheSA9IHNjYWxlZDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IHRhcmdldE5hbWVzLmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgdHJhY2sgPSBuZXcgVHlwZWRLZXlmcmFtZVRyYWNrKFxuXHRcdFx0XHRcdFx0dGFyZ2V0TmFtZXNbIGogXSArICcuJyArIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSxcblx0XHRcdFx0XHRcdGlucHV0QWNjZXNzb3IuYXJyYXksXG5cdFx0XHRcdFx0XHRvdXRwdXRBcnJheSxcblx0XHRcdFx0XHRcdGludGVycG9sYXRpb25cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0Ly8gT3ZlcnJpZGUgaW50ZXJwb2xhdGlvbiB3aXRoIGN1c3RvbSBmYWN0b3J5IG1ldGhvZC5cblx0XHRcdFx0XHRpZiAoIHNhbXBsZXIuaW50ZXJwb2xhdGlvbiA9PT0gJ0NVQklDU1BMSU5FJyApIHtcblxuXHRcdFx0XHRcdFx0dHJhY2suY3JlYXRlSW50ZXJwb2xhbnQgPSBmdW5jdGlvbiBJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUoIHJlc3VsdCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBIENVQklDU1BMSU5FIGtleWZyYW1lIGluIGdsVEYgaGFzIHRocmVlIG91dHB1dCB2YWx1ZXMgZm9yIGVhY2ggaW5wdXQgdmFsdWUsXG5cdFx0XHRcdFx0XHRcdC8vIHJlcHJlc2VudGluZyBpblRhbmdlbnQsIHNwbGluZVZlcnRleCwgYW5kIG91dFRhbmdlbnQuIEFzIGEgcmVzdWx0LCB0cmFjay5nZXRWYWx1ZVNpemUoKVxuXHRcdFx0XHRcdFx0XHQvLyBtdXN0IGJlIGRpdmlkZWQgYnkgdGhyZWUgdG8gZ2V0IHRoZSBpbnRlcnBvbGFudCdzIHNhbXBsZVNpemUgYXJndW1lbnQuXG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgaW50ZXJwb2xhbnRUeXBlID0gKCB0aGlzIGluc3RhbmNlb2YgUXVhdGVybmlvbktleWZyYW1lVHJhY2sgKSA/IEdMVEZDdWJpY1NwbGluZVF1YXRlcm5pb25JbnRlcnBvbGFudCA6IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50O1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBuZXcgaW50ZXJwb2xhbnRUeXBlKCB0aGlzLnRpbWVzLCB0aGlzLnZhbHVlcywgdGhpcy5nZXRWYWx1ZVNpemUoKSAvIDMsIHJlc3VsdCApO1xuXG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHQvLyBNYXJrIGFzIENVQklDU1BMSU5FLiBgdHJhY2suZ2V0SW50ZXJwb2xhdGlvbigpYCBkb2Vzbid0IHN1cHBvcnQgY3VzdG9tIGludGVycG9sYW50cy5cblx0XHRcdFx0XHRcdHRyYWNrLmNyZWF0ZUludGVycG9sYW50LmlzSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lID0gdHJ1ZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRyYWNrcy5wdXNoKCB0cmFjayApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBuYW1lID0gYW5pbWF0aW9uRGVmLm5hbWUgPyBhbmltYXRpb25EZWYubmFtZSA6ICdhbmltYXRpb25fJyArIGFuaW1hdGlvbkluZGV4O1xuXG5cdFx0XHRyZXR1cm4gbmV3IEFuaW1hdGlvbkNsaXAoIG5hbWUsIHVuZGVmaW5lZCwgdHJhY2tzICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGNyZWF0ZU5vZGVNZXNoKCBub2RlSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0aWYgKCBub2RlRGVmLm1lc2ggPT09IHVuZGVmaW5lZCApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbWVzaCcsIG5vZGVEZWYubWVzaCApLnRoZW4oIGZ1bmN0aW9uICggbWVzaCApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZSA9IHBhcnNlci5fZ2V0Tm9kZVJlZiggcGFyc2VyLm1lc2hDYWNoZSwgbm9kZURlZi5tZXNoLCBtZXNoICk7XG5cblx0XHRcdC8vIGlmIHdlaWdodHMgYXJlIHByb3ZpZGVkIG9uIHRoZSBub2RlLCBvdmVycmlkZSB3ZWlnaHRzIG9uIHRoZSBtZXNoLlxuXHRcdFx0aWYgKCBub2RlRGVmLndlaWdodHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG8gKSB7XG5cblx0XHRcdFx0XHRpZiAoICEgby5pc01lc2ggKSByZXR1cm47XG5cblx0XHRcdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbm9kZURlZi53ZWlnaHRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdFx0XHRvLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1sgaSBdID0gbm9kZURlZi53ZWlnaHRzWyBpIF07XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI25vZGVzLWFuZC1oaWVyYXJjaHlcblx0ICogQHBhcmFtIHtudW1iZXJ9IG5vZGVJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEPn1cblx0ICovXG5cdGxvYWROb2RlKCBub2RlSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblxuXHRcdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdC8vIHJlc2VydmUgbm9kZSdzIG5hbWUgYmVmb3JlIGl0cyBkZXBlbmRlbmNpZXMsIHNvIHRoZSByb290IGhhcyB0aGUgaW50ZW5kZWQgbmFtZS5cblx0XHRjb25zdCBub2RlTmFtZSA9IG5vZGVEZWYubmFtZSA/IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBub2RlRGVmLm5hbWUgKSA6ICcnO1xuXG5cdFx0cmV0dXJuICggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRcdGNvbnN0IG1lc2hQcm9taXNlID0gcGFyc2VyLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuY3JlYXRlTm9kZU1lc2ggJiYgZXh0LmNyZWF0ZU5vZGVNZXNoKCBub2RlSW5kZXggKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRpZiAoIG1lc2hQcm9taXNlICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggbWVzaFByb21pc2UgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYuY2FtZXJhICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2NhbWVyYScsIG5vZGVEZWYuY2FtZXJhICkudGhlbiggZnVuY3Rpb24gKCBjYW1lcmEgKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VyLl9nZXROb2RlUmVmKCBwYXJzZXIuY2FtZXJhQ2FjaGUsIG5vZGVEZWYuY2FtZXJhLCBjYW1lcmEgKTtcblxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZXIuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5jcmVhdGVOb2RlQXR0YWNobWVudCAmJiBleHQuY3JlYXRlTm9kZUF0dGFjaG1lbnQoIG5vZGVJbmRleCApO1xuXG5cdFx0XHR9ICkuZm9yRWFjaCggZnVuY3Rpb24gKCBwcm9taXNlICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcHJvbWlzZSApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdFx0fSgpICkudGhlbiggZnVuY3Rpb24gKCBvYmplY3RzICkge1xuXG5cdFx0XHRsZXQgbm9kZTtcblxuXHRcdFx0Ly8gLmlzQm9uZSBpc24ndCBpbiBnbFRGIHNwZWMuIFNlZSAuX21hcmtEZWZzXG5cdFx0XHRpZiAoIG5vZGVEZWYuaXNCb25lID09PSB0cnVlICkge1xuXG5cdFx0XHRcdG5vZGUgPSBuZXcgQm9uZSgpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBvYmplY3RzLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBHcm91cCgpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBvYmplY3RzLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdFx0XHRub2RlID0gb2JqZWN0c1sgMCBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdG5vZGUgPSBuZXcgT2JqZWN0M0QoKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGUgIT09IG9iamVjdHNbIDAgXSApIHtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gb2JqZWN0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRcdG5vZGUuYWRkKCBvYmplY3RzWyBpIF0gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBub2RlRGVmLm5hbWUgKSB7XG5cblx0XHRcdFx0bm9kZS51c2VyRGF0YS5uYW1lID0gbm9kZURlZi5uYW1lO1xuXHRcdFx0XHRub2RlLm5hbWUgPSBub2RlTmFtZTtcblxuXHRcdFx0fVxuXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBub2RlLCBub2RlRGVmICk7XG5cblx0XHRcdGlmICggbm9kZURlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBub2RlLCBub2RlRGVmICk7XG5cblx0XHRcdGlmICggbm9kZURlZi5tYXRyaXggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBtYXRyaXggPSBuZXcgTWF0cml4NCgpO1xuXHRcdFx0XHRtYXRyaXguZnJvbUFycmF5KCBub2RlRGVmLm1hdHJpeCApO1xuXHRcdFx0XHRub2RlLmFwcGx5TWF0cml4NCggbWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKCBub2RlRGVmLnRyYW5zbGF0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRub2RlLnBvc2l0aW9uLmZyb21BcnJheSggbm9kZURlZi50cmFuc2xhdGlvbiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYucm90YXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUucXVhdGVybmlvbi5mcm9tQXJyYXkoIG5vZGVEZWYucm90YXRpb24gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBub2RlRGVmLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRub2RlLnNjYWxlLmZyb21BcnJheSggbm9kZURlZi5zY2FsZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEgcGFyc2VyLmFzc29jaWF0aW9ucy5oYXMoIG5vZGUgKSApIHtcblxuXHRcdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbm9kZSwge30gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLmdldCggbm9kZSApLm5vZGVzID0gbm9kZUluZGV4O1xuXG5cdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNzY2VuZXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNjZW5lSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxHcm91cD59XG5cdCAqL1xuXHRsb2FkU2NlbmUoIHNjZW5lSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3Qgc2NlbmVEZWYgPSB0aGlzLmpzb24uc2NlbmVzWyBzY2VuZUluZGV4IF07XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblxuXHRcdC8vIExvYWRlciByZXR1cm5zIEdyb3VwLCBub3QgU2NlbmUuXG5cdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xODM0MiNpc3N1ZWNvbW1lbnQtNTc4OTgxMTcyXG5cdFx0Y29uc3Qgc2NlbmUgPSBuZXcgR3JvdXAoKTtcblx0XHRpZiAoIHNjZW5lRGVmLm5hbWUgKSBzY2VuZS5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIHNjZW5lRGVmLm5hbWUgKTtcblxuXHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIHNjZW5lLCBzY2VuZURlZiApO1xuXG5cdFx0aWYgKCBzY2VuZURlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBzY2VuZSwgc2NlbmVEZWYgKTtcblxuXHRcdGNvbnN0IG5vZGVJZHMgPSBzY2VuZURlZi5ub2RlcyB8fCBbXTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2RlSWRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIGJ1aWxkTm9kZUhpZXJhcmNoeSggbm9kZUlkc1sgaSBdLCBzY2VuZSwganNvbiwgcGFyc2VyICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Ly8gUmVtb3ZlcyBkYW5nbGluZyBhc3NvY2lhdGlvbnMsIGFzc29jaWF0aW9ucyB0aGF0IHJlZmVyZW5jZSBhIG5vZGUgdGhhdFxuXHRcdFx0Ly8gZGlkbid0IG1ha2UgaXQgaW50byB0aGUgc2NlbmUuXG5cdFx0XHRjb25zdCByZWR1Y2VBc3NvY2lhdGlvbnMgPSAoIG5vZGUgKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgcmVkdWNlZEFzc29jaWF0aW9ucyA9IG5ldyBNYXAoKTtcblxuXHRcdFx0XHRmb3IgKCBjb25zdCBbIGtleSwgdmFsdWUgXSBvZiBwYXJzZXIuYXNzb2NpYXRpb25zICkge1xuXG5cdFx0XHRcdFx0aWYgKCBrZXkgaW5zdGFuY2VvZiBNYXRlcmlhbCB8fCBrZXkgaW5zdGFuY2VvZiBUZXh0dXJlICkge1xuXG5cdFx0XHRcdFx0XHRyZWR1Y2VkQXNzb2NpYXRpb25zLnNldCgga2V5LCB2YWx1ZSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRub2RlLnRyYXZlcnNlKCAoIG5vZGUgKSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBtYXBwaW5ncyA9IHBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KCBub2RlICk7XG5cblx0XHRcdFx0XHRpZiAoIG1hcHBpbmdzICE9IG51bGwgKSB7XG5cblx0XHRcdFx0XHRcdHJlZHVjZWRBc3NvY2lhdGlvbnMuc2V0KCBub2RlLCBtYXBwaW5ncyApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gcmVkdWNlZEFzc29jaWF0aW9ucztcblxuXHRcdFx0fTtcblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucyA9IHJlZHVjZUFzc29jaWF0aW9ucyggc2NlbmUgKTtcblxuXHRcdFx0cmV0dXJuIHNjZW5lO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG5mdW5jdGlvbiBidWlsZE5vZGVIaWVyYXJjaHkoIG5vZGVJZCwgcGFyZW50T2JqZWN0LCBqc29uLCBwYXJzZXIgKSB7XG5cblx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJZCBdO1xuXG5cdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBub2RlSWQgKS50aGVuKCBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cblx0XHRpZiAoIG5vZGVEZWYuc2tpbiA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG5vZGU7XG5cblx0XHQvLyBidWlsZCBza2VsZXRvbiBoZXJlIGFzIHdlbGxcblxuXHRcdGxldCBza2luRW50cnk7XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdza2luJywgbm9kZURlZi5za2luICkudGhlbiggZnVuY3Rpb24gKCBza2luICkge1xuXG5cdFx0XHRza2luRW50cnkgPSBza2luO1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nSm9pbnRzID0gW107XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBza2luRW50cnkuam9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdHBlbmRpbmdKb2ludHMucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdub2RlJywgc2tpbkVudHJ5LmpvaW50c1sgaSBdICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmdKb2ludHMgKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIGpvaW50Tm9kZXMgKSB7XG5cblx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbWVzaCApIHtcblxuXHRcdFx0XHRpZiAoICEgbWVzaC5pc01lc2ggKSByZXR1cm47XG5cblx0XHRcdFx0Y29uc3QgYm9uZXMgPSBbXTtcblx0XHRcdFx0Y29uc3QgYm9uZUludmVyc2VzID0gW107XG5cblx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IGpvaW50Tm9kZXMubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCBqb2ludE5vZGUgPSBqb2ludE5vZGVzWyBqIF07XG5cblx0XHRcdFx0XHRpZiAoIGpvaW50Tm9kZSApIHtcblxuXHRcdFx0XHRcdFx0Ym9uZXMucHVzaCggam9pbnROb2RlICk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IG1hdCA9IG5ldyBNYXRyaXg0KCk7XG5cblx0XHRcdFx0XHRcdGlmICggc2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdFx0XHRtYXQuZnJvbUFycmF5KCBza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcy5hcnJheSwgaiAqIDE2ICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ym9uZUludmVyc2VzLnB1c2goIG1hdCApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSm9pbnQgXCIlc1wiIGNvdWxkIG5vdCBiZSBmb3VuZC4nLCBza2luRW50cnkuam9pbnRzWyBqIF0gKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVzaC5iaW5kKCBuZXcgU2tlbGV0b24oIGJvbmVzLCBib25lSW52ZXJzZXMgKSwgbWVzaC5tYXRyaXhXb3JsZCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0fSApO1xuXG5cdH0gKS50aGVuKCBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cblx0XHQvLyBidWlsZCBub2RlIGhpZXJhY2h5XG5cblx0XHRwYXJlbnRPYmplY3QuYWRkKCBub2RlICk7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRpZiAoIG5vZGVEZWYuY2hpbGRyZW4gKSB7XG5cblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gbm9kZURlZi5jaGlsZHJlbjtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bIGkgXTtcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBidWlsZE5vZGVIaWVyYXJjaHkoIGNoaWxkLCBub2RlLCBqc29uLCBwYXJzZXIgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtHTFRGLlByaW1pdGl2ZX0gcHJpbWl0aXZlRGVmXG4gKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxuICovXG5mdW5jdGlvbiBjb21wdXRlQm91bmRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKSB7XG5cblx0Y29uc3QgYXR0cmlidXRlcyA9IHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IGJveCA9IG5ldyBCb3gzKCk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRjb25zdCBhY2Nlc3NvciA9IHBhcnNlci5qc29uLmFjY2Vzc29yc1sgYXR0cmlidXRlcy5QT1NJVElPTiBdO1xuXG5cdFx0Y29uc3QgbWluID0gYWNjZXNzb3IubWluO1xuXHRcdGNvbnN0IG1heCA9IGFjY2Vzc29yLm1heDtcblxuXHRcdC8vIGdsVEYgcmVxdWlyZXMgJ21pbicgYW5kICdtYXgnLCBidXQgVlJNICh3aGljaCBleHRlbmRzIGdsVEYpIGN1cnJlbnRseSBpZ25vcmVzIHRoYXQgcmVxdWlyZW1lbnQuXG5cblx0XHRpZiAoIG1pbiAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRib3guc2V0KFxuXHRcdFx0XHRuZXcgVmVjdG9yMyggbWluWyAwIF0sIG1pblsgMSBdLCBtaW5bIDIgXSApLFxuXHRcdFx0XHRuZXcgVmVjdG9yMyggbWF4WyAwIF0sIG1heFsgMSBdLCBtYXhbIDIgXSApXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIGFjY2Vzc29yLm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgYm94U2NhbGUgPSBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3IuY29tcG9uZW50VHlwZSBdICk7XG5cdFx0XHRcdGJveC5taW4ubXVsdGlwbHlTY2FsYXIoIGJveFNjYWxlICk7XG5cdFx0XHRcdGJveC5tYXgubXVsdGlwbHlTY2FsYXIoIGJveFNjYWxlICk7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgbWluL21heCBwcm9wZXJ0aWVzIGZvciBhY2Nlc3NvciBQT1NJVElPTi4nICk7XG5cblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCB0YXJnZXRzID0gcHJpbWl0aXZlRGVmLnRhcmdldHM7XG5cblx0aWYgKCB0YXJnZXRzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRjb25zdCBtYXhEaXNwbGFjZW1lbnQgPSBuZXcgVmVjdG9yMygpO1xuXHRcdGNvbnN0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0XHRpZiAoIHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGFjY2Vzc29yID0gcGFyc2VyLmpzb24uYWNjZXNzb3JzWyB0YXJnZXQuUE9TSVRJT04gXTtcblx0XHRcdFx0Y29uc3QgbWluID0gYWNjZXNzb3IubWluO1xuXHRcdFx0XHRjb25zdCBtYXggPSBhY2Nlc3Nvci5tYXg7XG5cblx0XHRcdFx0Ly8gZ2xURiByZXF1aXJlcyAnbWluJyBhbmQgJ21heCcsIGJ1dCBWUk0gKHdoaWNoIGV4dGVuZHMgZ2xURikgY3VycmVudGx5IGlnbm9yZXMgdGhhdCByZXF1aXJlbWVudC5cblxuXHRcdFx0XHRpZiAoIG1pbiAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0Ly8gd2UgbmVlZCB0byBnZXQgbWF4IG9mIGFic29sdXRlIGNvbXBvbmVudHMgYmVjYXVzZSB0YXJnZXQgd2VpZ2h0IGlzIFstMSwxXVxuXHRcdFx0XHRcdHZlY3Rvci5zZXRYKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMCBdICksIE1hdGguYWJzKCBtYXhbIDAgXSApICkgKTtcblx0XHRcdFx0XHR2ZWN0b3Iuc2V0WSggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDEgXSApLCBNYXRoLmFicyggbWF4WyAxIF0gKSApICk7XG5cdFx0XHRcdFx0dmVjdG9yLnNldFooIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAyIF0gKSwgTWF0aC5hYnMoIG1heFsgMiBdICkgKSApO1xuXG5cblx0XHRcdFx0XHRpZiAoIGFjY2Vzc29yLm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGJveFNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgXSApO1xuXHRcdFx0XHRcdFx0dmVjdG9yLm11bHRpcGx5U2NhbGFyKCBib3hTY2FsZSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTm90ZTogdGhpcyBhc3N1bWVzIHRoYXQgdGhlIHN1bSBvZiBhbGwgd2VpZ2h0cyBpcyBhdCBtb3N0IDEuIFRoaXMgaXNuJ3QgcXVpdGUgY29ycmVjdCAtIGl0J3MgbW9yZSBjb25zZXJ2YXRpdmVcblx0XHRcdFx0XHQvLyB0byBhc3N1bWUgdGhhdCBlYWNoIHRhcmdldCBjYW4gaGF2ZSBhIG1heCB3ZWlnaHQgb2YgMS4gSG93ZXZlciwgZm9yIHNvbWUgdXNlIGNhc2VzIC0gbm90YWJseSwgd2hlbiBtb3JwaCB0YXJnZXRzXG5cdFx0XHRcdFx0Ly8gYXJlIHVzZWQgdG8gaW1wbGVtZW50IGtleS1mcmFtZSBhbmltYXRpb25zIGFuZCBhcyBzdWNoIG9ubHkgdHdvIGFyZSBhY3RpdmUgYXQgYSB0aW1lIC0gdGhpcyByZXN1bHRzIGluIHZlcnkgbGFyZ2Vcblx0XHRcdFx0XHQvLyBib3hlcy4gU28gZm9yIG5vdyB3ZSBtYWtlIGEgYm94IHRoYXQncyBzb21ldGltZXMgYSB0b3VjaCB0b28gc21hbGwgYnV0IGlzIGhvcGVmdWxseSBtb3N0bHkgb2YgcmVhc29uYWJsZSBzaXplLlxuXHRcdFx0XHRcdG1heERpc3BsYWNlbWVudC5tYXgoIHZlY3RvciApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIG1pbi9tYXggcHJvcGVydGllcyBmb3IgYWNjZXNzb3IgUE9TSVRJT04uJyApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gQXMgcGVyIGNvbW1lbnQgYWJvdmUgdGhpcyBib3ggaXNuJ3QgY29uc2VydmF0aXZlLCBidXQgaGFzIGEgcmVhc29uYWJsZSBzaXplIGZvciBhIHZlcnkgbGFyZ2UgbnVtYmVyIG9mIG1vcnBoIHRhcmdldHMuXG5cdFx0Ym94LmV4cGFuZEJ5VmVjdG9yKCBtYXhEaXNwbGFjZW1lbnQgKTtcblxuXHR9XG5cblx0Z2VvbWV0cnkuYm91bmRpbmdCb3ggPSBib3g7XG5cblx0Y29uc3Qgc3BoZXJlID0gbmV3IFNwaGVyZSgpO1xuXG5cdGJveC5nZXRDZW50ZXIoIHNwaGVyZS5jZW50ZXIgKTtcblx0c3BoZXJlLnJhZGl1cyA9IGJveC5taW4uZGlzdGFuY2VUbyggYm94Lm1heCApIC8gMjtcblxuXHRnZW9tZXRyeS5ib3VuZGluZ1NwaGVyZSA9IHNwaGVyZTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge0dMVEYuUHJpbWl0aXZlfSBwcmltaXRpdmVEZWZcbiAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckdlb21ldHJ5Pn1cbiAqL1xuZnVuY3Rpb24gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICkge1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmVEZWYuYXR0cmlidXRlcztcblxuXHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0ZnVuY3Rpb24gYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoIGFjY2Vzc29ySW5kZXgsIGF0dHJpYnV0ZU5hbWUgKSB7XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIGFjY2Vzc29ySW5kZXggKVxuXHRcdFx0LnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XG5cblx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKCBhdHRyaWJ1dGVOYW1lLCBhY2Nlc3NvciApO1xuXG5cdFx0XHR9ICk7XG5cblx0fVxuXG5cdGZvciAoIGNvbnN0IGdsdGZBdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMgKSB7XG5cblx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBnbHRmQXR0cmlidXRlTmFtZSBdIHx8IGdsdGZBdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHQvLyBTa2lwIGF0dHJpYnV0ZXMgYWxyZWFkeSBwcm92aWRlZCBieSBlLmcuIERyYWNvIGV4dGVuc2lvbi5cblx0XHRpZiAoIHRocmVlQXR0cmlidXRlTmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkgY29udGludWU7XG5cblx0XHRwZW5kaW5nLnB1c2goIGFzc2lnbkF0dHJpYnV0ZUFjY2Vzc29yKCBhdHRyaWJ1dGVzWyBnbHRmQXR0cmlidXRlTmFtZSBdLCB0aHJlZUF0dHJpYnV0ZU5hbWUgKSApO1xuXG5cdH1cblxuXHRpZiAoIHByaW1pdGl2ZURlZi5pbmRpY2VzICE9PSB1bmRlZmluZWQgJiYgISBnZW9tZXRyeS5pbmRleCApIHtcblxuXHRcdGNvbnN0IGFjY2Vzc29yID0gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHByaW1pdGl2ZURlZi5pbmRpY2VzICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcblxuXHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGFjY2Vzc29yICk7XG5cblx0XHR9ICk7XG5cblx0XHRwZW5kaW5nLnB1c2goIGFjY2Vzc29yICk7XG5cblx0fVxuXG5cdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYgKTtcblxuXHRjb21wdXRlQm91bmRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gcHJpbWl0aXZlRGVmLnRhcmdldHMgIT09IHVuZGVmaW5lZFxuXHRcdFx0PyBhZGRNb3JwaFRhcmdldHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYudGFyZ2V0cywgcGFyc2VyIClcblx0XHRcdDogZ2VvbWV0cnk7XG5cblx0fSApO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7TnVtYmVyfSBkcmF3TW9kZVxuICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XG4gKi9cbmZ1bmN0aW9uIHRvVHJpYW5nbGVzRHJhd01vZGUoIGdlb21ldHJ5LCBkcmF3TW9kZSApIHtcblxuXHRsZXQgaW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuXG5cdC8vIGdlbmVyYXRlIGluZGV4IGlmIG5vdCBwcmVzZW50XG5cblx0aWYgKCBpbmRleCA9PT0gbnVsbCApIHtcblxuXHRcdGNvbnN0IGluZGljZXMgPSBbXTtcblxuXHRcdGNvbnN0IHBvc2l0aW9uID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCAncG9zaXRpb24nICk7XG5cblx0XHRpZiAoIHBvc2l0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHBvc2l0aW9uLmNvdW50OyBpICsrICkge1xuXG5cdFx0XHRcdGluZGljZXMucHVzaCggaSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGdlb21ldHJ5LnNldEluZGV4KCBpbmRpY2VzICk7XG5cdFx0XHRpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlci50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuZGVmaW5lZCBwb3NpdGlvbiBhdHRyaWJ1dGUuIFByb2Nlc3Npbmcgbm90IHBvc3NpYmxlLicgKTtcblx0XHRcdHJldHVybiBnZW9tZXRyeTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly9cblxuXHRjb25zdCBudW1iZXJPZlRyaWFuZ2xlcyA9IGluZGV4LmNvdW50IC0gMjtcblx0Y29uc3QgbmV3SW5kaWNlcyA9IFtdO1xuXG5cdGlmICggZHJhd01vZGUgPT09IFRyaWFuZ2xlRmFuRHJhd01vZGUgKSB7XG5cblx0XHQvLyBnbC5UUklBTkdMRV9GQU5cblxuXHRcdGZvciAoIGxldCBpID0gMTsgaSA8PSBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcblxuXHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCAwICkgKTtcblx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcblxuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gZ2wuVFJJQU5HTEVfU1RSSVBcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xuXG5cdFx0XHRpZiAoIGkgJSAyID09PSAwICkge1xuXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcblxuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRpZiAoICggbmV3SW5kaWNlcy5sZW5ndGggLyAzICkgIT09IG51bWJlck9mVHJpYW5nbGVzICkge1xuXG5cdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkdMVEZMb2FkZXIudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmFibGUgdG8gZ2VuZXJhdGUgY29ycmVjdCBhbW91bnQgb2YgdHJpYW5nbGVzLicgKTtcblxuXHR9XG5cblx0Ly8gYnVpbGQgZmluYWwgZ2VvbWV0cnlcblxuXHRjb25zdCBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5LmNsb25lKCk7XG5cdG5ld0dlb21ldHJ5LnNldEluZGV4KCBuZXdJbmRpY2VzICk7XG5cblx0cmV0dXJuIG5ld0dlb21ldHJ5O1xuXG59XG5cbmV4cG9ydCB7IEdMVEZMb2FkZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTY2VuZVJlbmRlcmVyVEpTIGZyb20gXCIuL1NjZW5lUmVuZGVyZXJUSlNcIjtcbmltcG9ydCBORlRhZGRUSlMgZnJvbSBcIi4vbWFya2VybWVkaWEvTkZUYWRkVEpTXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHsgU2NlbmVSZW5kZXJlclRKUywgTkZUYWRkVEpTIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=