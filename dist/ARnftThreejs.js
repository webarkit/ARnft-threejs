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

    this.version = "0.4.0";
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
      ARVideo.play();
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
		materialParams.attenuationTint = new three__WEBPACK_IMPORTED_MODULE_0__.Color( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ] );

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
		materialParams.specularTint = new three__WEBPACK_IMPORTED_MODULE_0__.Color( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ] );

		if ( extension.specularColorTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'specularTintMap', extension.specularColorTexture ).then( function ( texture ) {

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

/* UTILITY FUNCTIONS */

function resolveURL( url, path ) {

	// Invalid URL
	if ( typeof url !== 'string' || url === '' ) return '';

	// Host Relative URL
	if ( /^https?:\/\//i.test( path ) && /^\//.test( url ) ) {

		path = path.replace( /(^https?:\/\/[^\/]+).*/i, '$1' );

	}

	// Absolute URL http://,https://,//
	if ( /^(https?:)?\/\//i.test( url ) ) return url;

	// Data URI
	if ( /^data:.*,.*$/i.test( url ) ) return url;

	// Blob URL
	if ( /^blob:.*$/i.test( url ) ) return url;

	// Relative URL
	return path + url;

}

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

			loader.load( resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

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

				loader.load( resolveURL( sourceURI, options.path ), onLoad, undefined, reject );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw4Q0FBOEMsMENBQU87O0FBRXJEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDLHdDQUFLOztBQUU1Qzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxvQ0FBb0Msd0NBQUs7O0FBRXpDOztBQUVBOztBQUVBLHVCQUF1QiwrQ0FBWTs7QUFFbkMsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU07O0FBRU47QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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Olsid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL1NjZW5lUmVuZGVyZXJUSlMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL2ZpbHRlcnMvQVJuZnRGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL2ZpbHRlcnMvRGVsYXlhYmxlU2lnbmFsRmlsdGVyLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9maWx0ZXJzL09uZUV1cm9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL21hcmtlcm1lZGlhL05GVGFkZFRKUy50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL2V4dGVybmFsIHVtZCB7XCJjb21tb25qc1wiOlwidGhyZWVcIixcImNvbW1vbmpzMlwiOlwidGhyZWVcIixcImFtZFwiOlwidGhyZWVcIixcInJvb3RcIjpcIlRIUkVFXCJ9Iiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ0aHJlZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBUm5mdFRocmVlanNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQVJuZnRUaHJlZWpzXCJdID0gZmFjdG9yeShyb290W1wiVEhSRUVcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90aHJlZV9fKSB7XG5yZXR1cm4gIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XG5cbmludGVyZmFjZSBDb25maWdEYXRhIHtcbiAgICBjYW1lcmE6IHtcbiAgICAgICAgZmFyOiBudW1iZXI7XG4gICAgICAgIGZvdjogbnVtYmVyO1xuICAgICAgICBtYXRyaXhBdXRvVXBkYXRlOiBib29sZWFuO1xuICAgICAgICBuZWFyOiBudW1iZXI7XG4gICAgICAgIHJhdGlvOiBudW1iZXI7XG4gICAgfTtcbiAgICByZW5kZXJlcjoge1xuICAgICAgICBhbHBoYTogYm9vbGVhbjtcbiAgICAgICAgYW50aWFsaWFzOiBib29sZWFuO1xuICAgICAgICBjb250ZXh0OiBhbnk7XG4gICAgICAgIGRlcHRoOiBib29sZWFuO1xuICAgICAgICBsb2dhcml0aG1pY0RlcHRoQnVmZmVyOiBib29sZWFuO1xuICAgICAgICBwcmVjaXNpb246IHN0cmluZztcbiAgICAgICAgc3RlbmNpbDogYm9vbGVhbjtcbiAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuO1xuICAgICAgICBvYmpWaXNpYmlsaXR5OiBib29sZWFuO1xuICAgIH07XG59XG5cbmludGVyZmFjZSBSb290IGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuICAgIC8vbWF0cml4OiBvYmplY3Rcbn1cblxuaW50ZXJmYWNlIFJlbmRlcmVyIHtcbiAgICByZW5kZXI6IChzY2VuZTogVEhSRUUuU2NlbmUsIGNhbWVyYTogVEhSRUUuQ2FtZXJhKSA9PiB2b2lkO1xuICAgIHNldFBpeGVsUmF0aW86IChwaXhlbFJhdGlvOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgc2V0U2l6ZTogKHc6IG51bWJlciwgaDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2FtZXJhIGV4dGVuZHMgVEhSRUUuQ2FtZXJhIHtcbiAgICBtYXRyaXhBdXRvVXBkYXRlOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU2NlbmUgZXh0ZW5kcyBUSFJFRS5TY2VuZSB7XG4gICAgYWRkOiAobm9kZTogVEhSRUUuT2JqZWN0M0QpID0+IHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lUmVuZGVyZXJUSlMge1xuICAgIHB1YmxpYyBjYW52YXNfZHJhdzogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjYW1lcmE6IENhbWVyYTtcbiAgICBwcml2YXRlIGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGE7XG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjtcbiAgICBwcml2YXRlIHV1aWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHJvb3Q6IFJvb3Q7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xuICAgIHByaXZhdGUgc2NlbmU6IFNjZW5lO1xuICAgIHByaXZhdGUgc3RhdGljIGdsb2JhbFNjZW5lOiBTY2VuZTtcbiAgICBwcml2YXRlIHZlcnNpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEsIGNhbnZhc0RyYXc6IEhUTUxDYW52YXNFbGVtZW50LCB1dWlkOiBzdHJpbmcsIGNhbWVyYUJvb2w6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jb25maWdEYXRhID0gY29uZmlnRGF0YTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB3aW5kb3cgfHwgZ2xvYmFsO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgY2FudmFzOiBjYW52YXNEcmF3LFxuICAgICAgICAgICAgY29udGV4dDogY29uZmlnRGF0YS5yZW5kZXJlci5jb250ZXh0LFxuICAgICAgICAgICAgYWxwaGE6IGNvbmZpZ0RhdGEucmVuZGVyZXIuYWxwaGEsXG4gICAgICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGNvbmZpZ0RhdGEucmVuZGVyZXIucHJlbXVsdGlwbGllZEFscGhhLFxuICAgICAgICAgICAgYW50aWFsaWFzOiBjb25maWdEYXRhLnJlbmRlcmVyLmFudGlhbGlhcyxcbiAgICAgICAgICAgIHN0ZW5jaWw6IGNvbmZpZ0RhdGEucmVuZGVyZXIuc3RlbmNpbCxcbiAgICAgICAgICAgIHByZWNpc2lvbjogY29uZmlnRGF0YS5yZW5kZXJlci5wcmVjaXNpb24sXG4gICAgICAgICAgICBkZXB0aDogY29uZmlnRGF0YS5yZW5kZXJlci5kZXB0aCxcbiAgICAgICAgICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXI6IGNvbmZpZ0RhdGEucmVuZGVyZXIubG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgU2NlbmVSZW5kZXJlclRKUy5nbG9iYWxTY2VuZSA9IHRoaXMuc2NlbmU7XG4gICAgICAgIGlmIChjYW1lcmFCb29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgICAgICAgICBjb25maWdEYXRhLmNhbWVyYS5mb3YsXG4gICAgICAgICAgICAgICAgY29uZmlnRGF0YS5jYW1lcmEucmF0aW8sXG4gICAgICAgICAgICAgICAgY29uZmlnRGF0YS5jYW1lcmEubmVhcixcbiAgICAgICAgICAgICAgICBjb25maWdEYXRhLmNhbWVyYS5mYXJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5DYW1lcmEoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuNC4wXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVJuZnRUaHJlZWpzIHZlcnNpb246IFwiLCB0aGlzLnZlcnNpb24pO1xuICAgIH1cblxuICAgIGluaXRSZW5kZXJlcigpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0UHJvamVjdGlvbk1hdHJpeFwiLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHRoaXMuY2FtZXJhLnByb2plY3Rpb25NYXRyaXgsIGV2LmRldGFpbC5wcm9qKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcblxuICAgICAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChsaWdodCk7XG5cbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldFdpbmRvd1NpemVcIiwgKF9ldjogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoX2V2LmRldGFpbC5zdywgX2V2LmRldGFpbC5zaCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNldEluaXRSZW5kZXJlckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwib25Jbml0VGhyZWVqc1JlbmRlcmluZ1wiLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgICAgICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoc2V0SW5pdFJlbmRlcmVyRXZlbnQpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBnZXRSZW5kZXJlcigpOiBSZW5kZXJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyO1xuICAgIH1cblxuICAgIGdldFNjZW5lKCk6IFNjZW5lIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmU7XG4gICAgfVxuXG4gICAgZ2V0Q2FtZXJhKCk6IENhbWVyYSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbWVyYTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0R2xvYmFsU2NlbmUoKTogU2NlbmUge1xuICAgICAgICByZXR1cm4gU2NlbmVSZW5kZXJlclRKUy5nbG9iYWxTY2VuZTtcbiAgICB9XG5cbiAgICAvLyBzZXR0ZXJzXG5cbiAgICBzZXRSZW5kZXJlcihyZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIH1cblxuICAgIHNldFNjZW5lKHNjZW5lOiBTY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuXG4gICAgc2V0Q2FtZXJhKGNhbWVyYTogQ2FtZXJhKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIH1cblxuICAgIC8vIHRpY2sgdG8gYmUgaW1wbGVtZW50ZWRcbiAgICAvKiB0aWNrICgpIHtcbiAgICB0aGlzLmRyYXcoKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrKVxuICB9Ki9cbn1cbiIsImltcG9ydCB7IE9uZUV1cm9GaWx0ZXJWZWN0b3IzIH0gZnJvbSBcIi4vT25lRXVyb0ZpbHRlclwiO1xuaW1wb3J0IHsgRGVsYXlhYmxlU2lnbmFsRmlsdGVyIH0gZnJvbSBcIi4vRGVsYXlhYmxlU2lnbmFsRmlsdGVyXCI7XG5pbXBvcnQgeyBFdWxlciwgTWF0cml4NCwgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuXG5leHBvcnQgY2xhc3MgQVJuZnRGaWx0ZXIge1xuICAgIHByaXZhdGUgZGVsYXlFeGl0Q2hlY2s6IERlbGF5YWJsZVNpZ25hbEZpbHRlcjtcblxuICAgIHByaXZhdGUgZGVsYXlFbnRlckNoZWNrOiBEZWxheWFibGVTaWduYWxGaWx0ZXI7XG5cbiAgICBwcml2YXRlIF9oYXNGb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gcHJpdmF0ZSBfaW50ZXJwb2xhdGlvbkZhY3RvcjogbnVtYmVyID0gMTU7XG5cbiAgICBwcml2YXRlIF9sYXN0VHJhbnNsYXRpb246IFZlY3RvcjM7XG5cbiAgICBwcml2YXRlIF9mcmFtZURyb3BzOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBfZGVsdGFBY2N1cmFjeTogbnVtYmVyID0gMTA7XG5cbiAgICBwcml2YXRlIF9wb3NpdGlvbkZpbHRlcjogT25lRXVyb0ZpbHRlclZlY3RvcjM7XG5cbiAgICBwcml2YXRlIF9yb3RhdGlvbkZpbHRlcjogT25lRXVyb0ZpbHRlclZlY3RvcjM7XG5cbiAgICBwdWJsaWMgZmlsdGVyRnJlcXVlbmN5OiBudW1iZXIgPSAzMC4wO1xuICAgIHB1YmxpYyBmaWx0ZXJNaW5DdXRvZmY6IG51bWJlciA9IDEuMDtcbiAgICBwdWJsaWMgZmlsdGVyQmV0YTogbnVtYmVyID0gMC4wO1xuICAgIHB1YmxpYyBmaWx0ZXJEY3V0b2ZmOiBudW1iZXIgPSAxLjA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWxheUVudGVyQ2hlY2sgPSBuZXcgRGVsYXlhYmxlU2lnbmFsRmlsdGVyKDIpO1xuICAgICAgICB0aGlzLmRlbGF5RXhpdENoZWNrID0gbmV3IERlbGF5YWJsZVNpZ25hbEZpbHRlcigwKTtcblxuICAgICAgICB0aGlzLl9wb3NpdGlvbkZpbHRlciA9IG5ldyBPbmVFdXJvRmlsdGVyVmVjdG9yMyh0aGlzLmZpbHRlckZyZXF1ZW5jeSk7XG4gICAgICAgIHRoaXMuX3JvdGF0aW9uRmlsdGVyID0gbmV3IE9uZUV1cm9GaWx0ZXJWZWN0b3IzKHRoaXMuZmlsdGVyRnJlcXVlbmN5ICogMik7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSh3b3JsZDogYW55KTogVmVjdG9yM1tdIHtcbiAgICAgICAgbGV0IHBvczogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgIGxldCByb3RhdGlvblZlYzogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgIGxldCBzY2FsZTogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7ICBcbiAgICAgICAgaWYgKCF3b3JsZCkge1xuICAgICAgICAgICAgdGhpcy5faGFzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lRHJvcHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1hdHJpeFc6IE1hdHJpeDQgPSBuZXcgTWF0cml4NCgpO1xuICAgICAgICAgICAgbGV0IHdvcmxkTWF0cml4OiBNYXRyaXg0ID0gbWF0cml4Vy5mcm9tQXJyYXkodGhpcy5nZXRBcnJheU1hdHJpeCh3b3JsZCkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9oYXNGb3VuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdmVjVHJhbnM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFRyYW5zbGF0aW9uID0gdmVjVHJhbnMuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHdvcmxkTWF0cml4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZlY1RyYW5zOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKVxuICAgICAgICAgICAgICAgIGxldCBfY3VycmVudFRyYW5zbGF0aW9uOiBWZWN0b3IzID0gdmVjVHJhbnMuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHdvcmxkTWF0cml4KVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhfY3VycmVudFRyYW5zbGF0aW9uLmRpc3RhbmNlVG8odGhpcy5fbGFzdFRyYW5zbGF0aW9uKSkgPiB0aGlzLl9kZWx0YUFjY3VyYWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lRHJvcHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ZyYW1lRHJvcHMgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0VHJhbnNsYXRpb24gPSBfY3VycmVudFRyYW5zbGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbcG9zLCByb3RhdGlvblZlYywgc2NhbGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZURyb3BzID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0VHJhbnNsYXRpb24gPSBfY3VycmVudFRyYW5zbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25GaWx0ZXIuVXBkYXRlUGFyYW1zKHRoaXMuZmlsdGVyRnJlcXVlbmN5LCB0aGlzLmZpbHRlck1pbkN1dG9mZiwgdGhpcy5maWx0ZXJCZXRhLCB0aGlzLmZpbHRlckRjdXRvZmYpO1xuICAgICAgICAgICAgdGhpcy5fcm90YXRpb25GaWx0ZXIuVXBkYXRlUGFyYW1zKHRoaXMuZmlsdGVyRnJlcXVlbmN5ICogMiwgdGhpcy5maWx0ZXJNaW5DdXRvZmYsIHRoaXMuZmlsdGVyQmV0YSwgdGhpcy5maWx0ZXJEY3V0b2ZmKTtcbiAgICAgICAgICAgIGxldCBtYXRyaXg6IE1hdHJpeDQgPSBuZXcgTWF0cml4NCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYXRyaXggPSB3b3JsZE1hdHJpeDtcblxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uOiBRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKVxuICAgICAgICAgICAgbGV0IGV1bGVyUm90OiBFdWxlciA9IG5ldyBFdWxlcigpO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIC8vIG9yIGV2ZW4gc2ltcGxlIGRlY29tcG9zZSB0aGUgd29ybGRNYXRyaXggaW50byBwb3NpdGlvbiwgcXVhdGVybmlvbiBhbmQgc2NhbGUgd2l0aCBkZWNvbXBvc2UgICBcbiAgICAgICAgICAgIHdvcmxkTWF0cml4LmRlY29tcG9zZShwb3NpdGlvbiwgcm90YXRpb24sIHNjYWxlKVxuICAgICAgICAgICAgbGV0IGVSb3QgPSBldWxlclJvdC5zZXRGcm9tUXVhdGVybmlvbihyb3RhdGlvbilcbiAgICAgICAgICAgIHJvdGF0aW9uVmVjID0gdGhpcy5fcm90YXRpb25GaWx0ZXIuRmlsdGVyKGVSb3QudG9WZWN0b3IzKCkpO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwb3MgaXM6ICcsIHBvcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuX3Bvc2l0aW9uRmlsdGVyLkZpbHRlcihwb3NpdGlvbilcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3Bvc2l0aW9uIGlzOicsIHBvcyk7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3Bvcywgcm90YXRpb25WZWMsIHNjYWxlXVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0QXJyYXlNYXRyaXgodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIHZhciBhcnJheTogYW55ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgYXJyYXlba2V5XSA9IHZhbHVlW2tleV07IC8vLnRvRml4ZWQoNCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBnZXRUaW1lIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWxheWFibGVTaWduYWxGaWx0ZXIge1xuXG4gICAgcHJpdmF0ZSBfaW5EZWxheTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF90b3RhbFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9wcmV2VGltZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfdGltZU91dDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodGltZU91dDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RpbWVPdXQgPSB0aW1lT3V0O1xuICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZSh0aWNrOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBnZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pbkRlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2VGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLl90b3RhbFRpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG90YWxUaW1lICs9IHRpbWUgLSB0aGlzLl9wcmV2VGltZTtcblxuICAgICAgICBpZiAodGhpcy5faW5EZWxheSAmJiB0aGlzLl90b3RhbFRpbWUgPiB0aGlzLl90aW1lT3V0KSB7XG4gICAgICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9pbkRlbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufSIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcblxuLy9odHRwczovL2dpdGh1Yi5jb20vRGFyaW9NYXp6YW50aS9PbmVFdXJvRmlsdGVyVW5pdHkvYmxvYi9tYXN0ZXIvQXNzZXRzL1NjcmlwdHMvT25lRXVyb0ZpbHRlci5jc1xuLy9odHRwczovL2dpdGh1Yi5jb20vRGFyaW9NYXp6YW50aS9PbmVFdXJvRmlsdGVyVW5pdHkvYmxvYi9tYXN0ZXIvQXNzZXRzL1NjcmlwdHMvRmlsdGVyVGVzdFZlY3RvcjMuY3Ncbi8vaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vVGhvcnN0ZW5CdXgvMzIzMTgzYmIwYmMyY2NiOTJmZjIzZWJkZjNkZTY0MDhcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmNsYXNzIExvd1Bhc3NGaWx0ZXIge1xuICAgIHk6IG51bWJlciB8IG51bGw7XG5cbiAgICBzOiBudW1iZXIgfCBudWxsO1xuXG4gICAgYWxwaGEgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoYWxwaGE6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNldEFscGhhKGFscGhhKTtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhbHBoYSA8PSAwIHx8IGFscGhhID4gMS4wKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGE7XG4gICAgfVxuXG4gICAgZmlsdGVyKHZhbHVlOiBudW1iZXIsIHRpbWVzdGFtcDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBbHBoYShhbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHM7XG4gICAgICAgIGlmICghdGhpcy55KSB7XG4gICAgICAgICAgICBzID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gdGhpcy5hbHBoYSAqIHZhbHVlICsgKDEuMCAtIHRoaXMuYWxwaGEpICogdGhpcy5zITtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnkgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zID0gcztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgbGFzdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lRXVyb0ZpbHRlciB7XG4gICAgZnJlcTogbnVtYmVyO1xuXG4gICAgbWluQ3V0T2ZmOiBudW1iZXI7XG5cbiAgICBiZXRhOiBudW1iZXI7XG5cbiAgICBkQ3V0T2ZmOiBudW1iZXI7XG5cbiAgICB4OiBMb3dQYXNzRmlsdGVyO1xuXG4gICAgZHg6IExvd1Bhc3NGaWx0ZXI7XG5cbiAgICBsYXN0dGltZTogbnVtYmVyIHwgbnVsbDtcblxuICAgIHB1YmxpYyBjdXJyVmFsdWU6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJldlZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihmcmVxOiBudW1iZXIsIG1pbkN1dE9mZiA9IDEuMCwgYmV0YSA9IDAuMCwgZEN1dE9mZiA9IDEuMCkge1xuICAgICAgICBpZiAoZnJlcSA8PSAwIHx8IG1pbkN1dE9mZiA8PSAwIHx8IGRDdXRPZmYgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mcmVxID0gZnJlcTtcbiAgICAgICAgdGhpcy5taW5DdXRPZmYgPSBtaW5DdXRPZmY7XG4gICAgICAgIHRoaXMuYmV0YSA9IGJldGE7XG4gICAgICAgIHRoaXMuZEN1dE9mZiA9IGRDdXRPZmY7XG4gICAgICAgIHRoaXMueCA9IG5ldyBMb3dQYXNzRmlsdGVyKHRoaXMuYWxwaGEodGhpcy5taW5DdXRPZmYpKTtcbiAgICAgICAgdGhpcy5keCA9IG5ldyBMb3dQYXNzRmlsdGVyKHRoaXMuYWxwaGEodGhpcy5kQ3V0T2ZmKSk7XG4gICAgICAgIHRoaXMubGFzdHRpbWUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY3VyclZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHRoaXMuY3VyclZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbHBoYShjdXRPZmY6IG51bWJlcikge1xuICAgICAgICBjb25zdCB0ZSA9IDEuMCAvIHRoaXMuZnJlcTtcbiAgICAgICAgY29uc3QgdGF1ID0gMS4wIC8gKDIgKiBNYXRoLlBJICogY3V0T2ZmKTtcbiAgICAgICAgcmV0dXJuIDEuMCAvICgxLjAgKyB0YXUgLyB0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZVBhcmFtcyhfZnJlcTogbnVtYmVyLCBfbWluY3V0b2ZmOiBudW1iZXIgPSAxLjAsIF9iZXRhOiBudW1iZXIgPSAwLCBfZGN1dG9mZjogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZyZXEgPSBfZnJlcTtcbiAgICAgICAgdGhpcy5taW5DdXRPZmYgPSBfbWluY3V0b2ZmO1xuICAgICAgICB0aGlzLmJldGEgPSBfYmV0YTtcbiAgICAgICAgdGhpcy5kQ3V0T2ZmID0gX2RjdXRvZmY7XG4gICAgICAgIHRoaXMueC5zZXRBbHBoYSh0aGlzLmFscGhhKHRoaXMubWluQ3V0T2ZmKSk7XG4gICAgICAgIHRoaXMuZHguc2V0QWxwaGEodGhpcy5hbHBoYSh0aGlzLmRDdXRPZmYpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmlsdGVyKHg6IG51bWJlciwgdGltZXN0YW1wOiBudW1iZXIgfCBudWxsID0gbnVsbCk6IG51bWJlciB7XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB0aGlzLmN1cnJWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMubGFzdHRpbWUgJiYgdGltZXN0YW1wKSB7XG4gICAgICAgICAgICB0aGlzLmZyZXEgPSAxLjAgLyAodGltZXN0YW1wIC0gdGhpcy5sYXN0dGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0dGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgY29uc3QgcHJldlggPSB0aGlzLngubGFzdFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGR4ID0gIXByZXZYID8gMC4wIDogKHggLSBwcmV2WCkgKiB0aGlzLmZyZXE7XG4gICAgICAgIGNvbnN0IGVkeCA9IHRoaXMuZHguZmlsdGVyKGR4LCB0aW1lc3RhbXAhLCB0aGlzLmFscGhhKHRoaXMuZEN1dE9mZikpO1xuICAgICAgICBjb25zdCBjdXRPZmYgPSB0aGlzLm1pbkN1dE9mZiArIHRoaXMuYmV0YSAqIE1hdGguYWJzKGVkeCk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJWYWx1ZSA9IHRoaXMueC5maWx0ZXIoeCwgdGltZXN0YW1wISwgdGhpcy5hbHBoYShjdXRPZmYpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPbmVFdXJvRmlsdGVyVmVjdG9yMyB7XG5cbiAgICAvLyBjb250YWluc3QgdGhlIHR5cGUgb2YgVFxuICAgIC8vIHRoZSBhcnJheSBvZiBmaWx0ZXJzXG4gICAgcHJpdmF0ZSBvbmVFdXJvRmlsdGVyczogQXJyYXk8T25lRXVyb0ZpbHRlcj47XG5cbiAgICBwcml2YXRlIF9mcmVxOiBudW1iZXI7XG4gICAgcHVibGljIGdldCBmcmVxKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mcmVxO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2JldGE6IG51bWJlcjtcbiAgICBwdWJsaWMgZ2V0IGJldGEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JldGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGN1dG9mZjogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgZGN1dG9mZigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGN1dG9mZjtcbiAgICB9XG4gICAgcHJpdmF0ZSBfbWluY3V0b2ZmOiBudW1iZXI7XG4gICAgcHVibGljIGdldCBtaW5jdXRvZmZfMSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWluY3V0b2ZmO1xuICAgIH1cblxuXG4gICAgLy8gY3VyclZhbHVlIGNvbnRhaW5zIHRoZSBsYXRlc3QgdmFsdWUgd2hpY2ggaGF2ZSBiZWVuIHN1Y2Nlc2Z1bGx5IGZpbHRlcmVkXG4gICAgLy8gcHJldlZhbHVlIGNvbnRhaW5zIHRoZSBwcmV2aW91cyBmaWx0ZXJlZCB2YWx1ZVxuXG4gICAgcHJpdmF0ZSBjdXJyVmFsdWU6IFZlY3RvcjM7XG4gICAgcHJpdmF0ZSBwcmV2VmFsdWU6IFZlY3RvcjM7XG5cbiAgICAvLyBpbml0aWFsaXphdGlvbiBvZiBvdXIgZmlsdGVyKHMpXG4gICAgY29uc3RydWN0b3IoX2ZyZXE6IG51bWJlciwgX21pbmN1dG9mZjogbnVtYmVyID0gMSwgX2JldGE6IG51bWJlciA9IDAsIF9kY3V0b2ZmOiBudW1iZXIgPSAxKSB7XG5cblxuICAgICAgICB0aGlzLmN1cnJWYWx1ZSA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gbmV3IFZlY3RvcjMoKTtcblxuICAgICAgICB0aGlzLl9mcmVxID0gX2ZyZXE7XG4gICAgICAgIHRoaXMuX21pbmN1dG9mZiA9IF9taW5jdXRvZmY7XG4gICAgICAgIHRoaXMuX2JldGEgPSBfYmV0YTtcbiAgICAgICAgdGhpcy5fZGN1dG9mZiA9IF9kY3V0b2ZmO1xuXG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vbmVFdXJvRmlsdGVycy5wdXNoKG5ldyBPbmVFdXJvRmlsdGVyKF9mcmVxLCBfbWluY3V0b2ZmLCBfYmV0YSwgX2RjdXRvZmYpKVxuICAgICAgICB0aGlzLm9uZUV1cm9GaWx0ZXJzLnB1c2gobmV3IE9uZUV1cm9GaWx0ZXIoX2ZyZXEsIF9taW5jdXRvZmYsIF9iZXRhLCBfZGN1dG9mZikpXG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMucHVzaChuZXcgT25lRXVyb0ZpbHRlcihfZnJlcSwgX21pbmN1dG9mZiwgX2JldGEsIF9kY3V0b2ZmKSlcbiAgICB9XG5cbiAgICAvLyB1cGRhdGVzIHRoZSBmaWx0ZXIgcGFyYW1ldGVyc1xuICAgIHB1YmxpYyBVcGRhdGVQYXJhbXMoX2ZyZXE6IG51bWJlciwgX21pbmN1dG9mZjogbnVtYmVyID0gMS4wLCBfYmV0YTogbnVtYmVyID0gMCwgX2RjdXRvZmY6IG51bWJlciA9IDEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZnJlcSA9IF9mcmVxO1xuICAgICAgICB0aGlzLl9taW5jdXRvZmYgPSBfbWluY3V0b2ZmO1xuICAgICAgICB0aGlzLl9iZXRhID0gX2JldGE7XG4gICAgICAgIHRoaXMuX2RjdXRvZmYgPSBfZGN1dG9mZjtcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5vbmVFdXJvRmlsdGVycy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnNbaV0uVXBkYXRlUGFyYW1zKHRoaXMuX2ZyZXEsIHRoaXMuX21pbmN1dG9mZiwgdGhpcy5fYmV0YSwgdGhpcy5fZGN1dG9mZik7XG4gICAgfVxuXG5cbiAgICAvLyBmaWx0ZXJzIHRoZSBwcm92aWRlZCBfdmFsdWUgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAgICAvLyBOb3RlOiBhIHRpbWVzdGFtcCBjYW4gYWxzbyBiZSBwcm92aWRlZCAtIHdpbGwgb3ZlcnJpZGUgZmlsdGVyIGZyZXF1ZW5jeS5cbiAgICBwdWJsaWMgRmlsdGVyKF92YWx1ZTogVmVjdG9yMywgdGltZXN0YW1wOiBudW1iZXIgPSAtMS4wKTogVmVjdG9yMyB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdGhpcy5jdXJyVmFsdWU7XG5cbiAgICAgICAgLy9sZXQgb3V0cHV0OiBudW1iZXJbXSA9IFZlY3RvcjMuWmVyb1JlYWRPbmx5LmFzQXJyYXkoKTsgLy8gQmFieWxvbiBjb2RlLi4uXG4gICAgICAgIGxldCBvdXQ6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBsZXQgb3V0cHV0OiBudW1iZXJbXSA9IG91dC50b0FycmF5KCk7XG5cbiAgICAgICAgLy9sZXQgaW5wdXQ6IG51bWJlcltdID0gX3ZhbHVlLmFzQXJyYXkoKTsgLy8gQmFieWxvbiBjb2RlXG4gICAgICAgIGxldCBpbnB1dDogbnVtYmVyW10gPSBfdmFsdWUudG9BcnJheSgpO1xuXG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMuZm9yRWFjaCgoZmlsdGVycywgaWR4KSA9PiB7XG4gICAgICAgICAgICBvdXRwdXRbaWR4XSA9IGZpbHRlcnMuRmlsdGVyKGlucHV0W2lkeF0sIHRpbWVzdGFtcCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGFycjogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyclZhbHVlID0gYXJyLmZyb21BcnJheShvdXRwdXQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYmplY3QzRCwgUGxhbmVHZW9tZXRyeSwgU2NlbmUsIFRleHR1cmVMb2FkZXIsIFZpZGVvVGV4dHVyZSwgTWVzaCwgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7IEFSbmZ0RmlsdGVyIH0gZnJvbSAnLi4vZmlsdGVycy9BUm5mdEZpbHRlcidcbmltcG9ydCBTY2VuZVJlbmRlcmVyVEpTIGZyb20gXCIuLi9TY2VuZVJlbmRlcmVyVEpTXCI7XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIGRlZmluZSB0aGUgQVJWaWRlbyBvYmplY3QgdXNlZCBpbiBhZGRWaWRlby5cbiAqIEBwYXJhbSBwbGF5IHBsYXkgYSB2aWRlby5cbiAqL1xuaW50ZXJmYWNlIEFSdmlkZW8ge1xuICAgIHBsYXk6ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIGRlZmluZSBhbiBFbnRpdHkuXG4gKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgRW50aXR5XG4gKi9cbmludGVyZmFjZSBFbnRpdHkge1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gZGVmaW5lIHRoZSBQbGFuZUdlb21ldHJ5IHVzZWQgaW4gdGhlIGFkZEltYWdlIGFuZCBhZGRWaWRlbyBmdW5jdGlvbnMuXG4gKiBAcGFyYW0gdyAgd2lkdGggb2YgdGhlIFBsYW5lR2VvbWV0cnkuXG4gKiBAcGFyYW0gaCBoZWlnaHQgb2YgdGhlIFBsYW5lR2VvbWV0cnkuXG4gKiBAcGFyYW0gd3Mgd2lkdGggbnVtYmVyIG9mIHNlZ21lbnRzIG9mIHRoZSBQbGFuZUdlb21ldHJ5LlxuICogQHBhcmFtIGhzIGhlaWdodCBudW1iZXIgb2Ygc2VnbWVudHMgb2YgdGhlIFBsYW5lR2VvbWV0cnkuXG4gKi9cbmludGVyZmFjZSBJUGxhbmVDb25maWcge1xuICAgIHc6IG51bWJlcjtcbiAgICBoOiBudW1iZXI7XG4gICAgd3M6IG51bWJlcjtcbiAgICBoczogbnVtYmVyO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgcmVzcG9uc2FibGUgdG8gYXR0YWNoIFRocmVlanMgb2JqZWN0IHRvIHRoZSByZW5kZXJpbmcgcm9vdCBhbmQgcGFzcyBtYXRyaXggZGF0YSB0byBpdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkZUYWRkVEpTIHtcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdO1xuICAgIHByaXZhdGUgbmFtZXM6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBzY2VuZTogU2NlbmU7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xuICAgIHByaXZhdGUgdXVpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ZpbHRlcjogQVJuZnRGaWx0ZXI7XG4gICAgcHJpdmF0ZSBfb2VmOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIE5GVGFkZFRKUyBjb25zdHVjdG9yLCB5b3UgbmVlZCB0byBwYXNzIHRoZSB1dWlkIGZyb20gdGhlIEFSbmZ0IGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB1dWlkIHRoZSB1dWlkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHV1aWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNjZW5lID0gU2NlbmVSZW5kZXJlclRKUy5nZXRHbG9iYWxTY2VuZSgpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHdpbmRvdyB8fCBnbG9iYWw7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMubmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fZmlsdGVyID0gbmV3IEFSbmZ0RmlsdGVyKCk7XG4gICAgICAgIHRoaXMuX29lZiA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGQgZnVuY3Rpb24gd2lsbCBhZGQgYSBtZXNoIHRvIHRoZSBSZW5kZXJlciByb290LiBZb3UgbmVlZCB0byBhc3NvY2lhdGUgYSBuYW1lIG9mIHRoZSBFbnRpdHkuXG4gICAgICogQHBhcmFtIG1lc2ggVGhlIG1lc2ggdG8gYWRkXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBvYmpWaXNpYmlsaXR5IHNldCB0cnVlIG9yIGZhbHNlIGlmIHRoZSBtZXNoIHdsbCBzdGF5IHZpc2libGUgb3Igbm90IGFmdGVyIHRyYWNraW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGQobWVzaDogT2JqZWN0M0QsIG5hbWU6IHN0cmluZywgb2JqVmlzaWJpbGl0eTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnkgPSAoKG1zZy5oZWlnaHQgLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnggPSAoKG1zZy53aWR0aCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gXCJyb290LVwiICsgbmFtZTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocm9vdCk7XG4gICAgICAgIHJvb3QuYWRkKG1lc2gpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgbWVzaC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKHRoaXMuX29lZiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBbbmV3IFZlY3RvcjMoMCwwLDApLCBuZXcgVmVjdG9yMygwLDAsMCksIG5ldyBWZWN0b3IzKDAsMCwwKV07XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5fZmlsdGVyLnVwZGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpICAgICAgIFxuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WCgoZmlsdGVyWzBdLngpKTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFkoKGZpbHRlclswXS55KSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRaKChmaWx0ZXJbMF0ueikpO1xuICAgICAgICAgICAgICAgIHJvb3Qucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmlsdGVyWzFdKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFgoKGZpbHRlclsyXS54KSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRZKChmaWx0ZXJbMl0ueSkpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WigoZmlsdGVyWzJdLnopKTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlOyAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJuZnRUcmFja2luZ0xvc3QtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgbWVzaC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKHsgbmFtZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWRkTW9kZWwgZnVuY3Rpb24gd2lsbCBhZGQgYSBtb2RlbCB0byB0aGUgUmVuZGVyZXIgcm9vdC4gWW91IG5lZWQgdG8gYXNzb2NpYXRlIGEgbmFtZSBvZiB0aGUgRW50aXR5LlxuICAgICAqIEBwYXJhbSB1cmwgdXJsIG9mIHRoZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgRW50aXR5IGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIG9mIHRoZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTW9kZWwodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgc2NhbGU6IG51bWJlciwgb2JqVmlzaWJpbGl0eTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBsZXQgbW9kZWw6IGFueTtcbiAgICAgICAgLyogTG9hZCBNb2RlbCAqL1xuICAgICAgICBjb25zdCB0aHJlZUdMVEZMb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgICAgICB0aHJlZUdMVEZMb2FkZXIubG9hZCh1cmwsIChnbHRmKSA9PiB7XG4gICAgICAgICAgICBtb2RlbCA9IGdsdGYuc2NlbmU7XG4gICAgICAgICAgICBtb2RlbC5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgICAgICBtb2RlbC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnkgPSAoKG1zZy5oZWlnaHQgLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb290LmFkZChtb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgbW9kZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBpZih0aGlzLl9vZWYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gW25ldyBWZWN0b3IzKDAsMCwwKSwgbmV3IFZlY3RvcjMoMCwwLDApLCBuZXcgVmVjdG9yMygwLDAsMCldO1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuX2ZpbHRlci51cGRhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKSAgICBcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFgoKGZpbHRlclswXS54KSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRZKChmaWx0ZXJbMF0ueSkpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WigoZmlsdGVyWzBdLnopKTtcbiAgICAgICAgICAgICAgICByb290LnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZpbHRlclsxXSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRYKChmaWx0ZXJbMl0ueCkpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WSgoZmlsdGVyWzJdLnkpKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFooKGZpbHRlclsyXS56KSk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTsgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGRNb2RlbFdpdGhDYWxsYmFjayBmdW5jdGlvbiB3aWxsIGFkZCBhIG1vZGVsIHRvIHRoZSBSZW5kZXJlciByb290LiBZb3UgbmVlZCB0byBhc3NvY2lhdGUgYSBuYW1lIG9mIHRoZSBFbnRpdHkuXG4gICAgICogWW91IGNhbiBtb2RpZnkgdGhlIG1vZGVsIHJvdGF0aW9uLCBzY2FsZSBhbmQgb3RoZXIgcHJvcGVydGllcyB3aXRoIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0gdXJsIHVybCBvZiB0aGUgbW9kZWwuXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBtb2RpZnkgdGhlIG1vZGVsIGluIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICAgcHVibGljIGFkZE1vZGVsV2l0aENhbGxiYWNrKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZ2x0ZjogYW55KSA9Pnt9ICwgb2JqVmlzaWJpbGl0eTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBsZXQgbW9kZWw6IGFueTtcbiAgICAgICAgLyogTG9hZCBNb2RlbCAqL1xuICAgICAgICBjb25zdCB0aHJlZUdMVEZMb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgICAgICB0aHJlZUdMVEZMb2FkZXIubG9hZCh1cmwsIChnbHRmKSA9PiB7XG4gICAgICAgICAgICBtb2RlbCA9IGdsdGYuc2NlbmU7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnkgPSAoKG1zZy5oZWlnaHQgLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxsYmFjayhnbHRmKTtcbiAgICAgICAgICAgIHJvb3QuYWRkKG1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRNYXRyaXhHTF9SSC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBtb2RlbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKHRoaXMuX29lZiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBbbmV3IFZlY3RvcjMoMCwwLDApLCBuZXcgVmVjdG9yMygwLDAsMCksIG5ldyBWZWN0b3IzKDAsMCwwKV07XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5fZmlsdGVyLnVwZGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpICBcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFgoKGZpbHRlclswXS54KSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRZKChmaWx0ZXJbMF0ueSkpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WigoZmlsdGVyWzBdLnopKTtcbiAgICAgICAgICAgICAgICByb290LnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZpbHRlclsxXSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRYKChmaWx0ZXJbMl0ueCkpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WSgoZmlsdGVyWzJdLnkpKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFooKGZpbHRlclsyXS56KSk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTsgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGRJbWFnZSBmdW5jdGlvbiB3aWxsIGFkZCBhbiBpbWFnZSB0byB0aGUgUmVuZGVyZXIgcm9vdC4gWW91IG5lZWQgdG8gYXNzb2NpYXRlIGEgbmFtZSBvZiB0aGUgRW50aXR5LlxuICAgICAqIEBwYXJhbSBpbWFnZVVybCB1cmwgb2YgdGhlIGltYWdlLlxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBFbnRpdHkgYXNzb2NpYXRlZC5cbiAgICAgKiBAcGFyYW0gY29sb3IgY29sb3Igb2YgdGhlIGJhY2tncm91bmQgcGxhbmUuXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIG9mIHRoZSBwbGFuZS5cbiAgICAgKiBAcGFyYW0gY29uZmlncyBzZWUgSVBsYW5lQ29uZmlnLlxuICAgICAqIEBwYXJhbSBvYmpWaXNpYmlsaXR5IHNldCB0cnVlIG9yIGZhbHNlIGlmIHRoZSBtZXNoIHdsbCBzdGF5IHZpc2libGUgb3Igbm90IGFmdGVyIHRyYWNraW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRJbWFnZShcbiAgICAgICAgaW1hZ2VVcmw6IHN0cmluZyxcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBjb2xvcjogc3RyaW5nLFxuICAgICAgICBzY2FsZTogbnVtYmVyLFxuICAgICAgICBjb25maWdzOiBJUGxhbmVDb25maWcsXG4gICAgICAgIG9ialZpc2liaWxpdHk6IGJvb2xlYW5cbiAgICApIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSBcInJvb3QtXCIgKyBuYW1lO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tID0gbmV3IFBsYW5lR2VvbWV0cnkoY29uZmlncy53LCBjb25maWdzLmgsIGNvbmZpZ3Mud3MsIGNvbmZpZ3MuaHMpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmVMb2FkZXIoKS5sb2FkKGltYWdlVXJsKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogY29sb3IsIG1hcDogdGV4dHVyZSB9KTtcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb20sIG1hdGVyaWFsKTtcbiAgICAgICAgcGxhbmUuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vdC5hZGQocGxhbmUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcGxhbmUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBpZih0aGlzLl9vZWYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gW25ldyBWZWN0b3IzKDAsMCwwKSwgbmV3IFZlY3RvcjMoMCwwLDApLCBuZXcgVmVjdG9yMygwLDAsMCldO1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuX2ZpbHRlci51cGRhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKVxuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WCgoZmlsdGVyWzBdLngpKTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFkoKGZpbHRlclswXS55KSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRaKChmaWx0ZXJbMF0ueikpO1xuICAgICAgICAgICAgICAgIHJvb3Qucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmlsdGVyWzFdKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFgoKGZpbHRlclsyXS54KSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRZKChmaWx0ZXJbMl0ueSkpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WigoZmlsdGVyWzJdLnopKTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlOyAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJuZnRUcmFja2luZ0xvc3QtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgcGxhbmUudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFkZFZpZGVvIGZ1bmN0aW9uIHdpbGwgYWRkIGEgdmlkZW8gdG8gdGhlIFJlbmRlcmVyIHJvb3QuIFlvdSBuZWVkIHRvIGFzc29jaWF0ZSBhIG5hbWUgb2YgdGhlIEVudGl0eS5cbiAgICAgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBodG1sIHZpZGVvIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBzY2FsZSBzY2FsZSBvZiB0aGUgcGxhbmUuXG4gICAgICogQHBhcmFtIGNvbmZpZ3Mgc2VlIElQbGFuZUNvbmZpZy5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkVmlkZW8oaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBzY2FsZTogbnVtYmVyLCBjb25maWdzOiBJUGxhbmVDb25maWcsIG9ialZpc2liaWxpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSBcInJvb3QtXCIgKyBuYW1lO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgY29uc3QgQVJWaWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MVmlkZW9FbGVtZW50O1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFZpZGVvVGV4dHVyZShBUlZpZGVvIGFzIEhUTUxWaWRlb0VsZW1lbnQpO1xuICAgICAgICBjb25zdCBtYXQgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhiYmJiZmYsIG1hcDogdGV4dHVyZSB9KTtcbiAgICAgICAgQVJWaWRlby5wbGF5KCk7XG4gICAgICAgIGNvbnN0IHBsYW5lR2VvbSA9IG5ldyBQbGFuZUdlb21ldHJ5KGNvbmZpZ3MudywgY29uZmlncy5oLCBjb25maWdzLndzLCBjb25maWdzLmhzKTtcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb20sIG1hdCk7XG4gICAgICAgIHBsYW5lLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE5GVERhdGEtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgbXNnID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueSA9ICgobXNnLmhlaWdodCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnggPSAoKG1zZy53aWR0aCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvb3QuYWRkKHBsYW5lKTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE1hdHJpeEdMX1JILVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBsYW5lLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYodGhpcy5fb2VmID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlciA9IFtuZXcgVmVjdG9yMygwLDAsMCksIG5ldyBWZWN0b3IzKDAsMCwwKSwgbmV3IFZlY3RvcjMoMCwwLDApXTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLl9maWx0ZXIudXBkYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCkgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRYKChmaWx0ZXJbMF0ueCkpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WSgoZmlsdGVyWzBdLnkpKTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFooKGZpbHRlclswXS56KSk7XG4gICAgICAgICAgICAgICAgcm9vdC5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmaWx0ZXJbMV0pO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WCgoZmlsdGVyWzJdLngpKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFkoKGZpbHRlclsyXS55KSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRaKChmaWx0ZXJbMl0ueikpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7ICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm5mdFRyYWNraW5nTG9zdC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIGdldCB0aGUgbmFtZXMgb2YgdGhlIGVudGl0aWVzIHVzZWQgaW4geW91ciBwcm9qZWN0LlxuICAgICAqIEByZXR1cm5zIHRoZSBuYW1lcyBvZiB0aGUgZW50aXRpZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVzO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBFbmFibGUgb3Igbm90IHRoZSBPbmVFdXJvRmlsdGVyIHJvdXRpbmUuXG4gICAgICovXG4gICAgcHVibGljIHNldCBvZWYoZW5hYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX29lZiA9IGVuYWJsZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQ2hlY2sgaWYgT25lRXVyb0ZpbHRlciBpcyBlbmFibGVkIG9yIG5vdC5cbiAgICAgKiBAcmV0dXJucyAoYm9vbGVhbikgdHJ1ZSBvciBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgb2VmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2VmO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xufVxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgICBwcml2YXRlIHN0YXRpYyB0cmFja2VkTWF0cml4OiBhbnkgPSB7XG4gICAgICAgIC8vIGZvciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIGRlbHRhOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIGludGVycG9sYXRlZDogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIH07XG4gICAgLy9wcml2YXRlIHN0YXRpYyBpbnRlcnBvbGF0aW9uRmFjdG9yOiBudW1iZXIgPSAyNFxuICAgIHN0YXRpYyBpbnRlcnBvbGF0ZSh3b3JsZDogYW55KSB7XG4gICAgICAgIGNvbnN0IGludGVycG9sYXRpb25GYWN0b3IgPSAyNDtcblxuICAgICAgICAvLyBpbnRlcnBvbGF0ZSBtYXRyaXhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrZWRNYXRyaXguZGVsdGFbaV0gPSB3b3JsZFtpXSAtIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWRbaV07XG4gICAgICAgICAgICB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldID1cbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldICsgdGhpcy50cmFja2VkTWF0cml4LmRlbHRhW2ldIC8gaW50ZXJwb2xhdGlvbkZhY3RvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNNb2JpbGUoKSB7XG4gICAgICAgIHJldHVybiAvQW5kcm9pZHxtb2JpbGV8aVBhZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRNYXRyaXgobWF0cml4OiBhbnksIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYXJyYXk6IGFueSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgYXJyYXlba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtYXRyaXguZWxlbWVudHMuc2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG1hdHJpeC5lbGVtZW50cy5zZXQoYXJyYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0cml4LmVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChhcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGhyZWVfXzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQge1xuXHRBbmltYXRpb25DbGlwLFxuXHRCb25lLFxuXHRCb3gzLFxuXHRCdWZmZXJBdHRyaWJ1dGUsXG5cdEJ1ZmZlckdlb21ldHJ5LFxuXHRDbGFtcFRvRWRnZVdyYXBwaW5nLFxuXHRDb2xvcixcblx0RGlyZWN0aW9uYWxMaWdodCxcblx0RG91YmxlU2lkZSxcblx0RmlsZUxvYWRlcixcblx0RnJvbnRTaWRlLFxuXHRHcm91cCxcblx0SW1hZ2VCaXRtYXBMb2FkZXIsXG5cdEludGVybGVhdmVkQnVmZmVyLFxuXHRJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSxcblx0SW50ZXJwb2xhbnQsXG5cdEludGVycG9sYXRlRGlzY3JldGUsXG5cdEludGVycG9sYXRlTGluZWFyLFxuXHRMaW5lLFxuXHRMaW5lQmFzaWNNYXRlcmlhbCxcblx0TGluZUxvb3AsXG5cdExpbmVTZWdtZW50cyxcblx0TGluZWFyRmlsdGVyLFxuXHRMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdExvYWRlcixcblx0TG9hZGVyVXRpbHMsXG5cdE1hdGVyaWFsLFxuXHRNYXRoVXRpbHMsXG5cdE1hdHJpeDQsXG5cdE1lc2gsXG5cdE1lc2hCYXNpY01hdGVyaWFsLFxuXHRNZXNoUGh5c2ljYWxNYXRlcmlhbCxcblx0TWVzaFN0YW5kYXJkTWF0ZXJpYWwsXG5cdE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXG5cdE5lYXJlc3RGaWx0ZXIsXG5cdE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHROdW1iZXJLZXlmcmFtZVRyYWNrLFxuXHRPYmplY3QzRCxcblx0T3J0aG9ncmFwaGljQ2FtZXJhLFxuXHRQZXJzcGVjdGl2ZUNhbWVyYSxcblx0UG9pbnRMaWdodCxcblx0UG9pbnRzLFxuXHRQb2ludHNNYXRlcmlhbCxcblx0UHJvcGVydHlCaW5kaW5nLFxuXHRRdWF0ZXJuaW9uLFxuXHRRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayxcblx0UkdCRm9ybWF0LFxuXHRSZXBlYXRXcmFwcGluZyxcblx0U2tlbGV0b24sXG5cdFNraW5uZWRNZXNoLFxuXHRTcGhlcmUsXG5cdFNwb3RMaWdodCxcblx0VGFuZ2VudFNwYWNlTm9ybWFsTWFwLFxuXHRUZXh0dXJlLFxuXHRUZXh0dXJlTG9hZGVyLFxuXHRUcmlhbmdsZUZhbkRyYXdNb2RlLFxuXHRUcmlhbmdsZVN0cmlwRHJhd01vZGUsXG5cdFZlY3RvcjIsXG5cdFZlY3RvcjMsXG5cdFZlY3RvcktleWZyYW1lVHJhY2ssXG5cdHNSR0JFbmNvZGluZ1xufSBmcm9tICd0aHJlZSc7XG5cbmNsYXNzIEdMVEZMb2FkZXIgZXh0ZW5kcyBMb2FkZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBtYW5hZ2VyICkge1xuXG5cdFx0c3VwZXIoIG1hbmFnZXIgKTtcblxuXHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBudWxsO1xuXHRcdHRoaXMua3R4MkxvYWRlciA9IG51bGw7XG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG51bGw7XG5cblx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcyA9IFtdO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzVm9sdW1lRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNJb3JFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1NwZWN1bGFyRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZMaWdodHNFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1lc2hvcHRDb21wcmVzc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGxvYWQoIHVybCwgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yICkge1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0bGV0IHJlc291cmNlUGF0aDtcblxuXHRcdGlmICggdGhpcy5yZXNvdXJjZVBhdGggIT09ICcnICkge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnJlc291cmNlUGF0aDtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMucGF0aCAhPT0gJycgKSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IHRoaXMucGF0aDtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IExvYWRlclV0aWxzLmV4dHJhY3RVcmxCYXNlKCB1cmwgKTtcblxuXHRcdH1cblxuXHRcdC8vIFRlbGxzIHRoZSBMb2FkaW5nTWFuYWdlciB0byB0cmFjayBhbiBleHRyYSBpdGVtLCB3aGljaCByZXNvbHZlcyBhZnRlclxuXHRcdC8vIHRoZSBtb2RlbCBpcyBmdWxseSBsb2FkZWQuIFRoaXMgbWVhbnMgdGhlIGNvdW50IG9mIGl0ZW1zIGxvYWRlZCB3aWxsXG5cdFx0Ly8gYmUgaW5jb3JyZWN0LCBidXQgZW5zdXJlcyBtYW5hZ2VyLm9uTG9hZCgpIGRvZXMgbm90IGZpcmUgZWFybHkuXG5cdFx0dGhpcy5tYW5hZ2VyLml0ZW1TdGFydCggdXJsICk7XG5cblx0XHRjb25zdCBfb25FcnJvciA9IGZ1bmN0aW9uICggZSApIHtcblxuXHRcdFx0aWYgKCBvbkVycm9yICkge1xuXG5cdFx0XHRcdG9uRXJyb3IoIGUgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRXJyb3IoIHVybCApO1xuXHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcblxuXHRcdH07XG5cblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5tYW5hZ2VyICk7XG5cblx0XHRsb2FkZXIuc2V0UGF0aCggdGhpcy5wYXRoICk7XG5cdFx0bG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xuXHRcdGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblx0XHRsb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0aGlzLndpdGhDcmVkZW50aWFscyApO1xuXG5cdFx0bG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBkYXRhICkge1xuXG5cdFx0XHR0cnkge1xuXG5cdFx0XHRcdHNjb3BlLnBhcnNlKCBkYXRhLCByZXNvdXJjZVBhdGgsIGZ1bmN0aW9uICggZ2x0ZiApIHtcblxuXHRcdFx0XHRcdG9uTG9hZCggZ2x0ZiApO1xuXG5cdFx0XHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcblxuXHRcdFx0XHR9LCBfb25FcnJvciApO1xuXG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRfb25FcnJvciggZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9LCBvblByb2dyZXNzLCBfb25FcnJvciApO1xuXG5cdH1cblxuXHRzZXREUkFDT0xvYWRlciggZHJhY29Mb2FkZXIgKSB7XG5cblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHNldEREU0xvYWRlcigpIHtcblxuXHRcdHRocm93IG5ldyBFcnJvcihcblxuXHRcdFx0J1RIUkVFLkdMVEZMb2FkZXI6IFwiTVNGVF90ZXh0dXJlX2Rkc1wiIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFBsZWFzZSB1cGRhdGUgdG8gXCJLSFJfdGV4dHVyZV9iYXNpc3VcIi4nXG5cblx0XHQpO1xuXG5cdH1cblxuXHRzZXRLVFgyTG9hZGVyKCBrdHgyTG9hZGVyICkge1xuXG5cdFx0dGhpcy5rdHgyTG9hZGVyID0ga3R4MkxvYWRlcjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0c2V0TWVzaG9wdERlY29kZXIoIG1lc2hvcHREZWNvZGVyICkge1xuXG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG1lc2hvcHREZWNvZGVyO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRyZWdpc3RlciggY2FsbGJhY2sgKSB7XG5cblx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgPT09IC0gMSApIHtcblxuXHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3MucHVzaCggY2FsbGJhY2sgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHR1bnJlZ2lzdGVyKCBjYWxsYmFjayApIHtcblxuXHRcdGlmICggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSAhPT0gLSAxICkge1xuXG5cdFx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcy5zcGxpY2UoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICksIDEgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRwYXJzZSggZGF0YSwgcGF0aCwgb25Mb2FkLCBvbkVycm9yICkge1xuXG5cdFx0bGV0IGNvbnRlbnQ7XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHt9O1xuXHRcdGNvbnN0IHBsdWdpbnMgPSB7fTtcblxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICkge1xuXG5cdFx0XHRjb250ZW50ID0gZGF0YTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnN0IG1hZ2ljID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEsIDAsIDQgKSApO1xuXG5cdFx0XHRpZiAoIG1hZ2ljID09PSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyApIHtcblxuXHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXSA9IG5ldyBHTFRGQmluYXJ5RXh0ZW5zaW9uKCBkYXRhICk7XG5cblx0XHRcdFx0fSBjYXRjaCAoIGVycm9yICkge1xuXG5cdFx0XHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggZXJyb3IgKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnRlbnQgPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdLmNvbnRlbnQ7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29udGVudCA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoIGNvbnRlbnQgKTtcblxuXHRcdGlmICgganNvbi5hc3NldCA9PT0gdW5kZWZpbmVkIHx8IGpzb24uYXNzZXQudmVyc2lvblsgMCBdIDwgMiApIHtcblxuXHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgYXNzZXQuIGdsVEYgdmVyc2lvbnMgPj0yLjAgYXJlIHN1cHBvcnRlZC4nICkgKTtcblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBhcnNlciA9IG5ldyBHTFRGUGFyc2VyKCBqc29uLCB7XG5cblx0XHRcdHBhdGg6IHBhdGggfHwgdGhpcy5yZXNvdXJjZVBhdGggfHwgJycsXG5cdFx0XHRjcm9zc09yaWdpbjogdGhpcy5jcm9zc09yaWdpbixcblx0XHRcdHJlcXVlc3RIZWFkZXI6IHRoaXMucmVxdWVzdEhlYWRlcixcblx0XHRcdG1hbmFnZXI6IHRoaXMubWFuYWdlcixcblx0XHRcdGt0eDJMb2FkZXI6IHRoaXMua3R4MkxvYWRlcixcblx0XHRcdG1lc2hvcHREZWNvZGVyOiB0aGlzLm1lc2hvcHREZWNvZGVyXG5cblx0XHR9ICk7XG5cblx0XHRwYXJzZXIuZmlsZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luQ2FsbGJhY2tzLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW5DYWxsYmFja3NbIGkgXSggcGFyc2VyICk7XG5cdFx0XHRwbHVnaW5zWyBwbHVnaW4ubmFtZSBdID0gcGx1Z2luO1xuXG5cdFx0XHQvLyBXb3JrYXJvdW5kIHRvIGF2b2lkIGRldGVybWluaW5nIGFzIHVua25vd24gZXh0ZW5zaW9uXG5cdFx0XHQvLyBpbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoKS5cblx0XHRcdC8vIFJlbW92ZSB0aGlzIHdvcmthcm91bmQgaWYgd2UgbW92ZSBhbGwgdGhlIGV4aXN0aW5nXG5cdFx0XHQvLyBleHRlbnNpb24gaGFuZGxlcnMgdG8gcGx1Z2luIHN5c3RlbVxuXHRcdFx0ZXh0ZW5zaW9uc1sgcGx1Z2luLm5hbWUgXSA9IHRydWU7XG5cblx0XHR9XG5cblx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1VzZWQgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGpzb24uZXh0ZW5zaW9uc1VzZWQubGVuZ3RoOyArKyBpICkge1xuXG5cdFx0XHRcdGNvbnN0IGV4dGVuc2lvbk5hbWUgPSBqc29uLmV4dGVuc2lvbnNVc2VkWyBpIF07XG5cdFx0XHRcdGNvbnN0IGV4dGVuc2lvbnNSZXF1aXJlZCA9IGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkIHx8IFtdO1xuXG5cdFx0XHRcdHN3aXRjaCAoIGV4dGVuc2lvbk5hbWUgKSB7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M6XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uKCBqc29uLCB0aGlzLmRyYWNvTG9hZGVyICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk06XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NRVNIX1FVQU5USVpBVElPTjpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWVzaFF1YW50aXphdGlvbkV4dGVuc2lvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRpZiAoIGV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCBleHRlbnNpb25OYW1lICkgPj0gMCAmJiBwbHVnaW5zWyBleHRlbnNpb25OYW1lIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBVbmtub3duIGV4dGVuc2lvbiBcIicgKyBleHRlbnNpb25OYW1lICsgJ1wiLicgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cGFyc2VyLnNldEV4dGVuc2lvbnMoIGV4dGVuc2lvbnMgKTtcblx0XHRwYXJzZXIuc2V0UGx1Z2lucyggcGx1Z2lucyApO1xuXHRcdHBhcnNlci5wYXJzZSggb25Mb2FkLCBvbkVycm9yICk7XG5cblx0fVxuXG59XG5cbi8qIEdMVEZSRUdJU1RSWSAqL1xuXG5mdW5jdGlvbiBHTFRGUmVnaXN0cnkoKSB7XG5cblx0bGV0IG9iamVjdHMgPSB7fTtcblxuXHRyZXR1cm5cdHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRcdHJldHVybiBvYmplY3RzWyBrZXkgXTtcblxuXHRcdH0sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uICgga2V5LCBvYmplY3QgKSB7XG5cblx0XHRcdG9iamVjdHNbIGtleSBdID0gb2JqZWN0O1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZTogZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRcdGRlbGV0ZSBvYmplY3RzWyBrZXkgXTtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0b2JqZWN0cyA9IHt9O1xuXG5cdFx0fVxuXG5cdH07XG5cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIEVYVEVOU0lPTlMgKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBFWFRFTlNJT05TID0ge1xuXHRLSFJfQklOQVJZX0dMVEY6ICdLSFJfYmluYXJ5X2dsVEYnLFxuXHRLSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTjogJ0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uJyxcblx0S0hSX0xJR0hUU19QVU5DVFVBTDogJ0tIUl9saWdodHNfcHVuY3R1YWwnLFxuXHRLSFJfTUFURVJJQUxTX0NMRUFSQ09BVDogJ0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0Jyxcblx0S0hSX01BVEVSSUFMU19JT1I6ICdLSFJfbWF0ZXJpYWxzX2lvcicsXG5cdEtIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M6ICdLSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcycsXG5cdEtIUl9NQVRFUklBTFNfU1BFQ1VMQVI6ICdLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyJyxcblx0S0hSX01BVEVSSUFMU19UUkFOU01JU1NJT046ICdLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbicsXG5cdEtIUl9NQVRFUklBTFNfVU5MSVQ6ICdLSFJfbWF0ZXJpYWxzX3VubGl0Jyxcblx0S0hSX01BVEVSSUFMU19WT0xVTUU6ICdLSFJfbWF0ZXJpYWxzX3ZvbHVtZScsXG5cdEtIUl9URVhUVVJFX0JBU0lTVTogJ0tIUl90ZXh0dXJlX2Jhc2lzdScsXG5cdEtIUl9URVhUVVJFX1RSQU5TRk9STTogJ0tIUl90ZXh0dXJlX3RyYW5zZm9ybScsXG5cdEtIUl9NRVNIX1FVQU5USVpBVElPTjogJ0tIUl9tZXNoX3F1YW50aXphdGlvbicsXG5cdEVYVF9URVhUVVJFX1dFQlA6ICdFWFRfdGV4dHVyZV93ZWJwJyxcblx0RVhUX01FU0hPUFRfQ09NUFJFU1NJT046ICdFWFRfbWVzaG9wdF9jb21wcmVzc2lvbidcbn07XG5cbi8qKlxuICogUHVuY3R1YWwgTGlnaHRzIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9saWdodHNfcHVuY3R1YWxcbiAqL1xuY2xhc3MgR0xURkxpZ2h0c0V4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0xJR0hUU19QVU5DVFVBTDtcblxuXHRcdC8vIE9iamVjdDNEIGluc3RhbmNlIGNhY2hlc1xuXHRcdHRoaXMuY2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXG5cdH1cblxuXHRfbWFya0RlZnMoKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBub2RlRGVmcyA9IHRoaXMucGFyc2VyLmpzb24ubm9kZXMgfHwgW107XG5cblx0XHRmb3IgKCBsZXQgbm9kZUluZGV4ID0gMCwgbm9kZUxlbmd0aCA9IG5vZGVEZWZzLmxlbmd0aDsgbm9kZUluZGV4IDwgbm9kZUxlbmd0aDsgbm9kZUluZGV4ICsrICkge1xuXG5cdFx0XHRjb25zdCBub2RlRGVmID0gbm9kZURlZnNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYuZXh0ZW5zaW9uc1xuXHRcdFx0XHRcdCYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF1cblx0XHRcdFx0XHQmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmxpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGFyc2VyLl9hZGROb2RlUmVmKCB0aGlzLmNhY2hlLCBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmxpZ2h0ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0X2xvYWRMaWdodCggbGlnaHRJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGNhY2hlS2V5ID0gJ2xpZ2h0OicgKyBsaWdodEluZGV4O1xuXHRcdGxldCBkZXBlbmRlbmN5ID0gcGFyc2VyLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdGlmICggZGVwZW5kZW5jeSApIHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSAoIGpzb24uZXh0ZW5zaW9ucyAmJiBqc29uLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgfHwge307XG5cdFx0Y29uc3QgbGlnaHREZWZzID0gZXh0ZW5zaW9ucy5saWdodHMgfHwgW107XG5cdFx0Y29uc3QgbGlnaHREZWYgPSBsaWdodERlZnNbIGxpZ2h0SW5kZXggXTtcblx0XHRsZXQgbGlnaHROb2RlO1xuXG5cdFx0Y29uc3QgY29sb3IgPSBuZXcgQ29sb3IoIDB4ZmZmZmZmICk7XG5cblx0XHRpZiAoIGxpZ2h0RGVmLmNvbG9yICE9PSB1bmRlZmluZWQgKSBjb2xvci5mcm9tQXJyYXkoIGxpZ2h0RGVmLmNvbG9yICk7XG5cblx0XHRjb25zdCByYW5nZSA9IGxpZ2h0RGVmLnJhbmdlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5yYW5nZSA6IDA7XG5cblx0XHRzd2l0Y2ggKCBsaWdodERlZi50eXBlICkge1xuXG5cdFx0XHRjYXNlICdkaXJlY3Rpb25hbCc6XG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KCBjb2xvciApO1xuXHRcdFx0XHRsaWdodE5vZGUudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgLSAxICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5hZGQoIGxpZ2h0Tm9kZS50YXJnZXQgKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3BvaW50Jzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IFBvaW50TGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnc3BvdCc6XG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBTcG90TGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xuXHRcdFx0XHQvLyBIYW5kbGUgc3BvdGxpZ2h0IHByb3BlcnRpZXMuXG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3QgPSBsaWdodERlZi5zcG90IHx8IHt9O1xuXHRcdFx0XHRsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlID0gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSA6IDA7XG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlIDogTWF0aC5QSSAvIDQuMDtcblx0XHRcdFx0bGlnaHROb2RlLmFuZ2xlID0gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZTtcblx0XHRcdFx0bGlnaHROb2RlLnBlbnVtYnJhID0gMS4wIC0gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAvIGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGU7XG5cdFx0XHRcdGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAtIDEgKTtcblx0XHRcdFx0bGlnaHROb2RlLmFkZCggbGlnaHROb2RlLnRhcmdldCApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5leHBlY3RlZCBsaWdodCB0eXBlOiAnICsgbGlnaHREZWYudHlwZSApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBsaWdodHMgKGUuZy4gc3BvdCkgZGVmYXVsdCB0byBhIHBvc2l0aW9uIG90aGVyIHRoYW4gdGhlIG9yaWdpbi4gUmVzZXQgdGhlIHBvc2l0aW9uXG5cdFx0Ly8gaGVyZSwgYmVjYXVzZSBub2RlLWxldmVsIHBhcnNpbmcgd2lsbCBvbmx5IG92ZXJyaWRlIHBvc2l0aW9uIGlmIGV4cGxpY2l0bHkgc3BlY2lmaWVkLlxuXHRcdGxpZ2h0Tm9kZS5wb3NpdGlvbi5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdGxpZ2h0Tm9kZS5kZWNheSA9IDI7XG5cblx0XHRpZiAoIGxpZ2h0RGVmLmludGVuc2l0eSAhPT0gdW5kZWZpbmVkICkgbGlnaHROb2RlLmludGVuc2l0eSA9IGxpZ2h0RGVmLmludGVuc2l0eTtcblxuXHRcdGxpZ2h0Tm9kZS5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIGxpZ2h0RGVmLm5hbWUgfHwgKCAnbGlnaHRfJyArIGxpZ2h0SW5kZXggKSApO1xuXG5cdFx0ZGVwZW5kZW5jeSA9IFByb21pc2UucmVzb2x2ZSggbGlnaHROb2RlICk7XG5cblx0XHRwYXJzZXIuY2FjaGUuYWRkKCBjYWNoZUtleSwgZGVwZW5kZW5jeSApO1xuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY3k7XG5cblx0fVxuXG5cdGNyZWF0ZU5vZGVBdHRhY2htZW50KCBub2RlSW5kZXggKSB7XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXHRcdGNvbnN0IGxpZ2h0RGVmID0gKCBub2RlRGVmLmV4dGVuc2lvbnMgJiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHx8IHt9O1xuXHRcdGNvbnN0IGxpZ2h0SW5kZXggPSBsaWdodERlZi5saWdodDtcblxuXHRcdGlmICggbGlnaHRJbmRleCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gdGhpcy5fbG9hZExpZ2h0KCBsaWdodEluZGV4ICkudGhlbiggZnVuY3Rpb24gKCBsaWdodCApIHtcblxuXHRcdFx0cmV0dXJuIHBhcnNlci5fZ2V0Tm9kZVJlZiggc2VsZi5jYWNoZSwgbGlnaHRJbmRleCwgbGlnaHQgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBVbmxpdCBNYXRlcmlhbHMgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc191bmxpdFxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoKSB7XG5cblx0XHRyZXR1cm4gTWVzaEJhc2ljTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSB7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XG5cblx0XHRjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IG1hdGVyaWFsRGVmLnBick1ldGFsbGljUm91Z2huZXNzO1xuXG5cdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcyApIHtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgKSApIHtcblxuXHRcdFx0XHRjb25zdCBhcnJheSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvcjtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIENsZWFyY29hdCBNYXRlcmlhbHMgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19DTEVBUkNPQVQ7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdEZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXQgPSBleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0VGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdE1hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXRUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXRSb3VnaG5lc3MgPSBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdFJvdWdobmVzc01hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXROb3JtYWxNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSApICk7XG5cblx0XHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlLnNjYWxlO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdE5vcm1hbFNjYWxlID0gbmV3IFZlY3RvcjIoIHNjYWxlLCBzY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBUcmFuc21pc3Npb24gTWF0ZXJpYWxzIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXG4gKiBEcmFmdDogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMTY5OFxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1RSQU5TTUlTU0lPTjtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zbWlzc2lvbiA9IGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAndHJhbnNtaXNzaW9uTWFwJywgZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogTWF0ZXJpYWxzIFZvbHVtZSBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3ZvbHVtZVxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzVm9sdW1lRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1ZPTFVNRTtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMudGhpY2tuZXNzID0gZXh0ZW5zaW9uLnRoaWNrbmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gZXh0ZW5zaW9uLnRoaWNrbmVzc0ZhY3RvciA6IDA7XG5cblx0XHRpZiAoIGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAndGhpY2tuZXNzTWFwJywgZXh0ZW5zaW9uLnRoaWNrbmVzc1RleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuYXR0ZW51YXRpb25EaXN0YW5jZSA9IGV4dGVuc2lvbi5hdHRlbnVhdGlvbkRpc3RhbmNlIHx8IDA7XG5cblx0XHRjb25zdCBjb2xvckFycmF5ID0gZXh0ZW5zaW9uLmF0dGVudWF0aW9uQ29sb3IgfHwgWyAxLCAxLCAxIF07XG5cdFx0bWF0ZXJpYWxQYXJhbXMuYXR0ZW51YXRpb25UaW50ID0gbmV3IENvbG9yKCBjb2xvckFycmF5WyAwIF0sIGNvbG9yQXJyYXlbIDEgXSwgY29sb3JBcnJheVsgMiBdICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBNYXRlcmlhbHMgaW9yIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfaW9yXG4gKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNJb3JFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfSU9SO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5pb3IgPSBleHRlbnNpb24uaW9yICE9PSB1bmRlZmluZWQgPyBleHRlbnNpb24uaW9yIDogMS41O1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIE1hdGVyaWFscyBzcGVjdWxhciBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyXG4gKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNTcGVjdWxhckV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19TUEVDVUxBUjtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJJbnRlbnNpdHkgPSBleHRlbnNpb24uc3BlY3VsYXJGYWN0b3IgIT09IHVuZGVmaW5lZCA/IGV4dGVuc2lvbi5zcGVjdWxhckZhY3RvciA6IDEuMDtcblxuXHRcdGlmICggZXh0ZW5zaW9uLnNwZWN1bGFyVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3NwZWN1bGFySW50ZW5zaXR5TWFwJywgZXh0ZW5zaW9uLnNwZWN1bGFyVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBjb2xvckFycmF5ID0gZXh0ZW5zaW9uLnNwZWN1bGFyQ29sb3JGYWN0b3IgfHwgWyAxLCAxLCAxIF07XG5cdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJUaW50ID0gbmV3IENvbG9yKCBjb2xvckFycmF5WyAwIF0sIGNvbG9yQXJyYXlbIDEgXSwgY29sb3JBcnJheVsgMiBdICk7XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zcGVjdWxhckNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3NwZWN1bGFyVGludE1hcCcsIGV4dGVuc2lvbi5zcGVjdWxhckNvbG9yVGV4dHVyZSApLnRoZW4oIGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuXHRcdFx0XHR0ZXh0dXJlLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xuXG5cdFx0XHR9ICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIEJhc2lzVSBUZXh0dXJlIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX2Jhc2lzdVxuICovXG5jbGFzcyBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfQkFTSVNVO1xuXG5cdH1cblxuXHRsb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXG5cdFx0aWYgKCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gdGV4dHVyZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xuXHRcdGNvbnN0IGxvYWRlciA9IHBhcnNlci5vcHRpb25zLmt0eDJMb2FkZXI7XG5cblx0XHRpZiAoICEgbG9hZGVyICkge1xuXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0S1RYMkxvYWRlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBLVFgyIHRleHR1cmVzJyApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEFzc3VtZXMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsIGFuZCB0aGF0IGEgZmFsbGJhY2sgdGV4dHVyZSBpcyBwcmVzZW50XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBXZWJQIFRleHR1cmUgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfdGV4dHVyZV93ZWJwXG4gKi9cbmNsYXNzIEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuRVhUX1RFWFRVUkVfV0VCUDtcblx0XHR0aGlzLmlzU3VwcG9ydGVkID0gbnVsbDtcblxuXHR9XG5cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXG5cdFx0aWYgKCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgbmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgbmFtZSBdO1xuXHRcdGNvbnN0IHNvdXJjZSA9IGpzb24uaW1hZ2VzWyBleHRlbnNpb24uc291cmNlIF07XG5cblx0XHRsZXQgbG9hZGVyID0gcGFyc2VyLnRleHR1cmVMb2FkZXI7XG5cdFx0aWYgKCBzb3VyY2UudXJpICkge1xuXG5cdFx0XHRjb25zdCBoYW5kbGVyID0gcGFyc2VyLm9wdGlvbnMubWFuYWdlci5nZXRIYW5kbGVyKCBzb3VyY2UudXJpICk7XG5cdFx0XHRpZiAoIGhhbmRsZXIgIT09IG51bGwgKSBsb2FkZXIgPSBoYW5kbGVyO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZGV0ZWN0U3VwcG9ydCgpLnRoZW4oIGZ1bmN0aW9uICggaXNTdXBwb3J0ZWQgKSB7XG5cblx0XHRcdGlmICggaXNTdXBwb3J0ZWQgKSByZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcblxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCBuYW1lICkgPj0gMCApIHtcblxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBXZWJQIHJlcXVpcmVkIGJ5IGFzc2V0IGJ1dCB1bnN1cHBvcnRlZC4nICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIFBORyBvciBKUEVHLlxuXHRcdFx0cmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGRldGVjdFN1cHBvcnQoKSB7XG5cblx0XHRpZiAoICEgdGhpcy5pc1N1cHBvcnRlZCApIHtcblxuXHRcdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUgKSB7XG5cblx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0XHQvLyBMb3NzeSB0ZXN0IGltYWdlLiBTdXBwb3J0IGZvciBsb3NzeSBpbWFnZXMgZG9lc24ndCBndWFyYW50ZWUgc3VwcG9ydCBmb3IgYWxsXG5cdFx0XHRcdC8vIFdlYlAgaW1hZ2VzLCB1bmZvcnR1bmF0ZWx5LlxuXHRcdFx0XHRpbWFnZS5zcmMgPSAnZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmlJQUFBQlhSVUpRVmxBNElCWUFBQUF3QVFDZEFTb0JBQUVBRHNEK0phUUFBM0FBQUFBQSc7XG5cblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJlc29sdmUoIGltYWdlLmhlaWdodCA9PT0gMSApO1xuXG5cdFx0XHRcdH07XG5cblx0XHRcdH0gKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmlzU3VwcG9ydGVkO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIG1lc2hvcHQgQnVmZmVyVmlldyBDb21wcmVzc2lvbiBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF9tZXNob3B0X2NvbXByZXNzaW9uXG4gKi9cbmNsYXNzIEdMVEZNZXNob3B0Q29tcHJlc3Npb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OO1xuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG5cdH1cblxuXHRsb2FkQnVmZmVyVmlldyggaW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbjtcblx0XHRjb25zdCBidWZmZXJWaWV3ID0ganNvbi5idWZmZXJWaWV3c1sgaW5kZXggXTtcblxuXHRcdGlmICggYnVmZmVyVmlldy5leHRlbnNpb25zICYmIGJ1ZmZlclZpZXcuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdGNvbnN0IGV4dGVuc2lvbkRlZiA9IGJ1ZmZlclZpZXcuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRcdGNvbnN0IGJ1ZmZlciA9IHRoaXMucGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXInLCBleHRlbnNpb25EZWYuYnVmZmVyICk7XG5cdFx0XHRjb25zdCBkZWNvZGVyID0gdGhpcy5wYXJzZXIub3B0aW9ucy5tZXNob3B0RGVjb2RlcjtcblxuXHRcdFx0aWYgKCAhIGRlY29kZXIgfHwgISBkZWNvZGVyLnN1cHBvcnRlZCApIHtcblxuXHRcdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBzZXRNZXNob3B0RGVjb2RlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBjb21wcmVzc2VkIGZpbGVzJyApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBBc3N1bWVzIHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBvcHRpb25hbCBhbmQgdGhhdCBmYWxsYmFjayBidWZmZXIgZGF0YSBpcyBwcmVzZW50XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggWyBidWZmZXIsIGRlY29kZXIucmVhZHkgXSApLnRoZW4oIGZ1bmN0aW9uICggcmVzICkge1xuXG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBleHRlbnNpb25EZWYuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0XHRjb25zdCBieXRlTGVuZ3RoID0gZXh0ZW5zaW9uRGVmLmJ5dGVMZW5ndGggfHwgMDtcblxuXHRcdFx0XHRjb25zdCBjb3VudCA9IGV4dGVuc2lvbkRlZi5jb3VudDtcblx0XHRcdFx0Y29uc3Qgc3RyaWRlID0gZXh0ZW5zaW9uRGVmLmJ5dGVTdHJpZGU7XG5cblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKCBjb3VudCAqIHN0cmlkZSApO1xuXHRcdFx0XHRjb25zdCBzb3VyY2UgPSBuZXcgVWludDhBcnJheSggcmVzWyAwIF0sIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGggKTtcblxuXHRcdFx0XHRkZWNvZGVyLmRlY29kZUdsdGZCdWZmZXIoIG5ldyBVaW50OEFycmF5KCByZXN1bHQgKSwgY291bnQsIHN0cmlkZSwgc291cmNlLCBleHRlbnNpb25EZWYubW9kZSwgZXh0ZW5zaW9uRGVmLmZpbHRlciApO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyogQklOQVJZIEVYVEVOU0lPTiAqL1xuY29uc3QgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgPSAnZ2xURic7XG5jb25zdCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggPSAxMjtcbmNvbnN0IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMgPSB7IEpTT046IDB4NEU0RjUzNEEsIEJJTjogMHgwMDRFNDk0MiB9O1xuXG5jbGFzcyBHTFRGQmluYXJ5RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggZGF0YSApIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdFx0dGhpcy5ib2R5ID0gbnVsbDtcblxuXHRcdGNvbnN0IGhlYWRlclZpZXcgPSBuZXcgRGF0YVZpZXcoIGRhdGEsIDAsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCApO1xuXG5cdFx0dGhpcy5oZWFkZXIgPSB7XG5cdFx0XHRtYWdpYzogTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEuc2xpY2UoIDAsIDQgKSApICksXG5cdFx0XHR2ZXJzaW9uOiBoZWFkZXJWaWV3LmdldFVpbnQzMiggNCwgdHJ1ZSApLFxuXHRcdFx0bGVuZ3RoOiBoZWFkZXJWaWV3LmdldFVpbnQzMiggOCwgdHJ1ZSApXG5cdFx0fTtcblxuXHRcdGlmICggdGhpcy5oZWFkZXIubWFnaWMgIT09IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBnbFRGLUJpbmFyeSBoZWFkZXIuJyApO1xuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5oZWFkZXIudmVyc2lvbiA8IDIuMCApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogTGVnYWN5IGJpbmFyeSBmaWxlIGRldGVjdGVkLicgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGNodW5rQ29udGVudHNMZW5ndGggPSB0aGlzLmhlYWRlci5sZW5ndGggLSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEg7XG5cdFx0Y29uc3QgY2h1bmtWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcblx0XHRsZXQgY2h1bmtJbmRleCA9IDA7XG5cblx0XHR3aGlsZSAoIGNodW5rSW5kZXggPCBjaHVua0NvbnRlbnRzTGVuZ3RoICkge1xuXG5cdFx0XHRjb25zdCBjaHVua0xlbmd0aCA9IGNodW5rVmlldy5nZXRVaW50MzIoIGNodW5rSW5kZXgsIHRydWUgKTtcblx0XHRcdGNodW5rSW5kZXggKz0gNDtcblxuXHRcdFx0Y29uc3QgY2h1bmtUeXBlID0gY2h1bmtWaWV3LmdldFVpbnQzMiggY2h1bmtJbmRleCwgdHJ1ZSApO1xuXHRcdFx0Y2h1bmtJbmRleCArPSA0O1xuXG5cdFx0XHRpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5KU09OICkge1xuXG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KCBkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKyBjaHVua0luZGV4LCBjaHVua0xlbmd0aCApO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBjb250ZW50QXJyYXkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggY2h1bmtUeXBlID09PSBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTLkJJTiApIHtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICsgY2h1bmtJbmRleDtcblx0XHRcdFx0dGhpcy5ib2R5ID0gZGF0YS5zbGljZSggYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xpZW50cyBtdXN0IGlnbm9yZSBjaHVua3Mgd2l0aCB1bmtub3duIHR5cGVzLlxuXG5cdFx0XHRjaHVua0luZGV4ICs9IGNodW5rTGVuZ3RoO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmNvbnRlbnQgPT09IG51bGwgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEpTT04gY29udGVudCBub3QgZm91bmQuJyApO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcbiAqIERSQUNPIE1lc2ggQ29tcHJlc3Npb24gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb25cbiAqL1xuY2xhc3MgR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigganNvbiwgZHJhY29Mb2FkZXIgKSB7XG5cblx0XHRpZiAoICEgZHJhY29Mb2FkZXIgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IE5vIERSQUNPTG9hZGVyIGluc3RhbmNlIHByb3ZpZGVkLicgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT047XG5cdFx0dGhpcy5qc29uID0ganNvbjtcblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XG5cdFx0dGhpcy5kcmFjb0xvYWRlci5wcmVsb2FkKCk7XG5cblx0fVxuXG5cdGRlY29kZVByaW1pdGl2ZSggcHJpbWl0aXZlLCBwYXJzZXIgKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGRyYWNvTG9hZGVyID0gdGhpcy5kcmFjb0xvYWRlcjtcblx0XHRjb25zdCBidWZmZXJWaWV3SW5kZXggPSBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0uYnVmZmVyVmlldztcblx0XHRjb25zdCBnbHRmQXR0cmlidXRlTWFwID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmF0dHJpYnV0ZXM7XG5cdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVNYXAgPSB7fTtcblx0XHRjb25zdCBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwID0ge307XG5cdFx0Y29uc3QgYXR0cmlidXRlVHlwZU1hcCA9IHt9O1xuXG5cdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBnbHRmQXR0cmlidXRlTWFwICkge1xuXG5cdFx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBhdHRyaWJ1dGVOYW1lIF0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHR0aHJlZUF0dHJpYnV0ZU1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF07XG5cblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIHByaW1pdGl2ZS5hdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBhdHRyaWJ1dGVOYW1lIF0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIGdsdGZBdHRyaWJ1dGVNYXBbIGF0dHJpYnV0ZU5hbWUgXSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGFjY2Vzc29yRGVmID0ganNvbi5hY2Nlc3NvcnNbIHByaW1pdGl2ZS5hdHRyaWJ1dGVzWyBhdHRyaWJ1dGVOYW1lIF0gXTtcblx0XHRcdFx0Y29uc3QgY29tcG9uZW50VHlwZSA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHRcdGF0dHJpYnV0ZVR5cGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gY29tcG9uZW50VHlwZTtcblx0XHRcdFx0YXR0cmlidXRlTm9ybWFsaXplZE1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYnVmZmVyVmlld0luZGV4ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblxuXHRcdFx0XHRkcmFjb0xvYWRlci5kZWNvZGVEcmFjb0ZpbGUoIGJ1ZmZlclZpZXcsIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XG5cblx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXNbIGF0dHJpYnV0ZU5hbWUgXTtcblx0XHRcdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwWyBhdHRyaWJ1dGVOYW1lIF07XG5cblx0XHRcdFx0XHRcdGlmICggbm9ybWFsaXplZCAhPT0gdW5kZWZpbmVkICkgYXR0cmlidXRlLm5vcm1hbGl6ZWQgPSBub3JtYWxpemVkO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVzb2x2ZSggZ2VvbWV0cnkgKTtcblxuXHRcdFx0XHR9LCB0aHJlZUF0dHJpYnV0ZU1hcCwgYXR0cmlidXRlVHlwZU1hcCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogVGV4dHVyZSBUcmFuc2Zvcm0gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtXG4gKi9cbmNsYXNzIEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNO1xuXG5cdH1cblxuXHRleHRlbmRUZXh0dXJlKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKSB7XG5cblx0XHRpZiAoIHRyYW5zZm9ybS50ZXhDb29yZCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0cyBpbiBcIicgKyB0aGlzLm5hbWUgKyAnXCIgZXh0ZW5zaW9uIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcblxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNmb3JtLm9mZnNldCA9PT0gdW5kZWZpbmVkICYmIHRyYW5zZm9ybS5yb3RhdGlvbiA9PT0gdW5kZWZpbmVkICYmIHRyYW5zZm9ybS5zY2FsZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMjE4MTkuXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHRcdH1cblxuXHRcdHRleHR1cmUgPSB0ZXh0dXJlLmNsb25lKCk7XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5vZmZzZXQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5vZmZzZXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0ub2Zmc2V0ICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0ZXh0dXJlLnJvdGF0aW9uID0gdHJhbnNmb3JtLnJvdGF0aW9uO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm0uc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5yZXBlYXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0uc2NhbGUgKTtcblxuXHRcdH1cblxuXHRcdHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG5cdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0fVxuXG59XG5cbi8qKlxuICogU3BlY3VsYXItR2xvc3NpbmVzcyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzc1xuICovXG5cbi8qKlxuICogQSBzdWIgY2xhc3Mgb2YgU3RhbmRhcmRNYXRlcmlhbCB3aXRoIHNvbWUgb2YgdGhlIGZ1bmN0aW9uYWxpdHlcbiAqIGNoYW5nZWQgdmlhIHRoZSBgb25CZWZvcmVDb21waWxlYCBjYWxsYmFja1xuICogQHBhaWxoZWFkXG4gKi9cbmNsYXNzIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsIGV4dGVuZHMgTWVzaFN0YW5kYXJkTWF0ZXJpYWwge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJhbXMgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCA9IHRydWU7XG5cblx0XHQvL3ZhcmlvdXMgY2h1bmtzIHRoYXQgbmVlZCByZXBsYWNpbmdcblx0XHRjb25zdCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rID0gW1xuXHRcdFx0JyNpZmRlZiBVU0VfU1BFQ1VMQVJNQVAnLFxuXHRcdFx0J1x0dW5pZm9ybSBzYW1wbGVyMkQgc3BlY3VsYXJNYXA7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rID0gW1xuXHRcdFx0JyNpZmRlZiBVU0VfR0xPU1NJTkVTU01BUCcsXG5cdFx0XHQnXHR1bmlmb3JtIHNhbXBsZXIyRCBnbG9zc2luZXNzTWFwOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCd2ZWMzIHNwZWN1bGFyRmFjdG9yID0gc3BlY3VsYXI7Jyxcblx0XHRcdCcjaWZkZWYgVVNFX1NQRUNVTEFSTUFQJyxcblx0XHRcdCdcdHZlYzQgdGV4ZWxTcGVjdWxhciA9IHRleHR1cmUyRCggc3BlY3VsYXJNYXAsIHZVdiApOycsXG5cdFx0XHQnXHR0ZXhlbFNwZWN1bGFyID0gc1JHQlRvTGluZWFyKCB0ZXhlbFNwZWN1bGFyICk7Jyxcblx0XHRcdCdcdC8vIHJlYWRzIGNoYW5uZWwgUkdCLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxuXHRcdFx0J1x0c3BlY3VsYXJGYWN0b3IgKj0gdGV4ZWxTcGVjdWxhci5yZ2I7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgZ2xvc3NpbmVzc01hcEZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQnZmxvYXQgZ2xvc3NpbmVzc0ZhY3RvciA9IGdsb3NzaW5lc3M7Jyxcblx0XHRcdCcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxuXHRcdFx0J1x0dmVjNCB0ZXhlbEdsb3NzaW5lc3MgPSB0ZXh0dXJlMkQoIGdsb3NzaW5lc3NNYXAsIHZVdiApOycsXG5cdFx0XHQnXHQvLyByZWFkcyBjaGFubmVsIEEsIGNvbXBhdGlibGUgd2l0aCBhIGdsVEYgU3BlY3VsYXItR2xvc3NpbmVzcyAoUkdCQSkgdGV4dHVyZScsXG5cdFx0XHQnXHRnbG9zc2luZXNzRmFjdG9yICo9IHRleGVsR2xvc3NpbmVzcy5hOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IGxpZ2h0UGh5c2ljYWxGcmFnbWVudENodW5rID0gW1xuXHRcdFx0J1BoeXNpY2FsTWF0ZXJpYWwgbWF0ZXJpYWw7Jyxcblx0XHRcdCdtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBkaWZmdXNlQ29sb3IucmdiICogKCAxLiAtIG1heCggc3BlY3VsYXJGYWN0b3IuciwgbWF4KCBzcGVjdWxhckZhY3Rvci5nLCBzcGVjdWxhckZhY3Rvci5iICkgKSApOycsXG5cdFx0XHQndmVjMyBkeHkgPSBtYXgoIGFicyggZEZkeCggZ2VvbWV0cnlOb3JtYWwgKSApLCBhYnMoIGRGZHkoIGdlb21ldHJ5Tm9ybWFsICkgKSApOycsXG5cdFx0XHQnZmxvYXQgZ2VvbWV0cnlSb3VnaG5lc3MgPSBtYXgoIG1heCggZHh5LngsIGR4eS55ICksIGR4eS56ICk7Jyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgPSBtYXgoIDEuMCAtIGdsb3NzaW5lc3NGYWN0b3IsIDAuMDUyNSApOyAvLyAwLjA1MjUgY29ycmVzcG9uZHMgdG8gdGhlIGJhc2UgbWlwIG9mIGEgMjU2IGN1YmVtYXAuJyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgKz0gZ2VvbWV0cnlSb3VnaG5lc3M7Jyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgPSBtaW4oIG1hdGVyaWFsLnJvdWdobmVzcywgMS4wICk7Jyxcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gc3BlY3VsYXJGYWN0b3I7Jyxcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCB1bmlmb3JtcyA9IHtcblx0XHRcdHNwZWN1bGFyOiB7IHZhbHVlOiBuZXcgQ29sb3IoKS5zZXRIZXgoIDB4ZmZmZmZmICkgfSxcblx0XHRcdGdsb3NzaW5lc3M6IHsgdmFsdWU6IDEgfSxcblx0XHRcdHNwZWN1bGFyTWFwOiB7IHZhbHVlOiBudWxsIH0sXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7IHZhbHVlOiBudWxsIH1cblx0XHR9O1xuXG5cdFx0dGhpcy5fZXh0cmFVbmlmb3JtcyA9IHVuaWZvcm1zO1xuXG5cdFx0dGhpcy5vbkJlZm9yZUNvbXBpbGUgPSBmdW5jdGlvbiAoIHNoYWRlciApIHtcblxuXHRcdFx0Zm9yICggY29uc3QgdW5pZm9ybU5hbWUgaW4gdW5pZm9ybXMgKSB7XG5cblx0XHRcdFx0c2hhZGVyLnVuaWZvcm1zWyB1bmlmb3JtTmFtZSBdID0gdW5pZm9ybXNbIHVuaWZvcm1OYW1lIF07XG5cblx0XHRcdH1cblxuXHRcdFx0c2hhZGVyLmZyYWdtZW50U2hhZGVyID0gc2hhZGVyLmZyYWdtZW50U2hhZGVyXG5cdFx0XHRcdC5yZXBsYWNlKCAndW5pZm9ybSBmbG9hdCByb3VnaG5lc3M7JywgJ3VuaWZvcm0gdmVjMyBzcGVjdWxhcjsnIClcblx0XHRcdFx0LnJlcGxhY2UoICd1bmlmb3JtIGZsb2F0IG1ldGFsbmVzczsnLCAndW5pZm9ybSBmbG9hdCBnbG9zc2luZXNzOycgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxyb3VnaG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bWV0YWxuZXNzbWFwX3BhcnNfZnJhZ21lbnQ+JywgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8cm91Z2huZXNzbWFwX2ZyYWdtZW50PicsIHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9mcmFnbWVudD4nLCBnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPGxpZ2h0c19waHlzaWNhbF9mcmFnbWVudD4nLCBsaWdodFBoeXNpY2FsRnJhZ21lbnRDaHVuayApO1xuXG5cdFx0fTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCB0aGlzLCB7XG5cblx0XHRcdHNwZWN1bGFyOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXIudmFsdWUgPSB2O1xuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNwZWN1bGFyTWFwOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXJNYXAudmFsdWUgPSB2O1xuXG5cdFx0XHRcdFx0aWYgKCB2ICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1NQRUNVTEFSTUFQID0gJyc7IC8vIFVTRV9VViBpcyBzZXQgYnkgdGhlIHJlbmRlcmVyIGZvciBzcGVjdWxhciBtYXBzXG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9TUEVDVUxBUk1BUDtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnbG9zc2luZXNzOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3MudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzLnZhbHVlID0gdjtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3NNYXAudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlID0gdjtcblxuXHRcdFx0XHRcdGlmICggdiApIHtcblxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQID0gJyc7XG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1VWID0gJyc7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfVVY7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSApO1xuXG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3NNYXA7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xuXG5cdFx0dGhpcy5zZXRWYWx1ZXMoIHBhcmFtcyApO1xuXG5cdH1cblxuXHRjb3B5KCBzb3VyY2UgKSB7XG5cblx0XHRzdXBlci5jb3B5KCBzb3VyY2UgKTtcblxuXHRcdHRoaXMuc3BlY3VsYXJNYXAgPSBzb3VyY2Uuc3BlY3VsYXJNYXA7XG5cdFx0dGhpcy5zcGVjdWxhci5jb3B5KCBzb3VyY2Uuc3BlY3VsYXIgKTtcblx0XHR0aGlzLmdsb3NzaW5lc3NNYXAgPSBzb3VyY2UuZ2xvc3NpbmVzc01hcDtcblx0XHR0aGlzLmdsb3NzaW5lc3MgPSBzb3VyY2UuZ2xvc3NpbmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzc01hcDtcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3NNYXA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG59XG5cblxuY2xhc3MgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M7XG5cblx0XHR0aGlzLnNwZWN1bGFyR2xvc3NpbmVzc1BhcmFtcyA9IFtcblx0XHRcdCdjb2xvcicsXG5cdFx0XHQnbWFwJyxcblx0XHRcdCdsaWdodE1hcCcsXG5cdFx0XHQnbGlnaHRNYXBJbnRlbnNpdHknLFxuXHRcdFx0J2FvTWFwJyxcblx0XHRcdCdhb01hcEludGVuc2l0eScsXG5cdFx0XHQnZW1pc3NpdmUnLFxuXHRcdFx0J2VtaXNzaXZlSW50ZW5zaXR5Jyxcblx0XHRcdCdlbWlzc2l2ZU1hcCcsXG5cdFx0XHQnYnVtcE1hcCcsXG5cdFx0XHQnYnVtcFNjYWxlJyxcblx0XHRcdCdub3JtYWxNYXAnLFxuXHRcdFx0J25vcm1hbE1hcFR5cGUnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudE1hcCcsXG5cdFx0XHQnZGlzcGxhY2VtZW50U2NhbGUnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudEJpYXMnLFxuXHRcdFx0J3NwZWN1bGFyTWFwJyxcblx0XHRcdCdzcGVjdWxhcicsXG5cdFx0XHQnZ2xvc3NpbmVzc01hcCcsXG5cdFx0XHQnZ2xvc3NpbmVzcycsXG5cdFx0XHQnYWxwaGFNYXAnLFxuXHRcdFx0J2Vudk1hcCcsXG5cdFx0XHQnZW52TWFwSW50ZW5zaXR5Jyxcblx0XHRcdCdyZWZyYWN0aW9uUmF0aW8nLFxuXHRcdF07XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSgpIHtcblxuXHRcdHJldHVybiBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApIHtcblxuXHRcdGNvbnN0IHBiclNwZWN1bGFyR2xvc3NpbmVzcyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvciApICkge1xuXG5cdFx0XHRjb25zdCBhcnJheSA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlRmFjdG9yO1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdH1cblxuXHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCAwLjAsIDAuMCwgMC4wICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcyA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgPyBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciA6IDEuMDtcblx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKSApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIuZnJvbUFycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc3Qgc3BlY0dsb3NzTWFwRGVmID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmU7XG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2dsb3NzaW5lc3NNYXAnLCBzcGVjR2xvc3NNYXBEZWYgKSApO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhck1hcCcsIHNwZWNHbG9zc01hcERlZiApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cblx0Y3JlYXRlTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XG5cdFx0bWF0ZXJpYWwuZm9nID0gdHJ1ZTtcblxuXHRcdG1hdGVyaWFsLmNvbG9yID0gbWF0ZXJpYWxQYXJhbXMuY29sb3I7XG5cblx0XHRtYXRlcmlhbC5tYXAgPSBtYXRlcmlhbFBhcmFtcy5tYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5tYXA7XG5cblx0XHRtYXRlcmlhbC5saWdodE1hcCA9IG51bGw7XG5cdFx0bWF0ZXJpYWwubGlnaHRNYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5hb01hcCA9IG1hdGVyaWFsUGFyYW1zLmFvTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYW9NYXA7XG5cdFx0bWF0ZXJpYWwuYW9NYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5lbWlzc2l2ZSA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlO1xuXHRcdG1hdGVyaWFsLmVtaXNzaXZlSW50ZW5zaXR5ID0gMS4wO1xuXHRcdG1hdGVyaWFsLmVtaXNzaXZlTWFwID0gbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZU1hcDtcblxuXHRcdG1hdGVyaWFsLmJ1bXBNYXAgPSBtYXRlcmlhbFBhcmFtcy5idW1wTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcDtcblx0XHRtYXRlcmlhbC5idW1wU2NhbGUgPSAxO1xuXG5cdFx0bWF0ZXJpYWwubm9ybWFsTWFwID0gbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwO1xuXHRcdG1hdGVyaWFsLm5vcm1hbE1hcFR5cGUgPSBUYW5nZW50U3BhY2VOb3JtYWxNYXA7XG5cblx0XHRpZiAoIG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlICkgbWF0ZXJpYWwubm9ybWFsU2NhbGUgPSBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZTtcblxuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudE1hcCA9IG51bGw7XG5cdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50U2NhbGUgPSAxO1xuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudEJpYXMgPSAwO1xuXG5cdFx0bWF0ZXJpYWwuc3BlY3VsYXJNYXAgPSBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhck1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyTWFwO1xuXHRcdG1hdGVyaWFsLnNwZWN1bGFyID0gbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXI7XG5cblx0XHRtYXRlcmlhbC5nbG9zc2luZXNzTWFwID0gbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzc01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3NNYXA7XG5cdFx0bWF0ZXJpYWwuZ2xvc3NpbmVzcyA9IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3M7XG5cblx0XHRtYXRlcmlhbC5hbHBoYU1hcCA9IG51bGw7XG5cblx0XHRtYXRlcmlhbC5lbnZNYXAgPSBtYXRlcmlhbFBhcmFtcy5lbnZNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbnZNYXA7XG5cdFx0bWF0ZXJpYWwuZW52TWFwSW50ZW5zaXR5ID0gMS4wO1xuXG5cdFx0bWF0ZXJpYWwucmVmcmFjdGlvblJhdGlvID0gMC45ODtcblxuXHRcdHJldHVybiBtYXRlcmlhbDtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBNZXNoIFF1YW50aXphdGlvbiBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWVzaF9xdWFudGl6YXRpb25cbiAqL1xuY2xhc3MgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT047XG5cblx0fVxuXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBJTlRFUlBPTEFUSU9OICoqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gU3BsaW5lIEludGVycG9sYXRpb25cbi8vIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYXBwZW5kaXgtYy1zcGxpbmUtaW50ZXJwb2xhdGlvblxuY2xhc3MgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQgZXh0ZW5kcyBJbnRlcnBvbGFudCB7XG5cblx0Y29uc3RydWN0b3IoIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKSB7XG5cblx0XHRzdXBlciggcGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlciApO1xuXG5cdH1cblxuXHRjb3B5U2FtcGxlVmFsdWVfKCBpbmRleCApIHtcblxuXHRcdC8vIENvcGllcyBhIHNhbXBsZSB2YWx1ZSB0byB0aGUgcmVzdWx0IGJ1ZmZlci4gU2VlIGRlc2NyaXB0aW9uIG9mIGdsVEZcblx0XHQvLyBDVUJJQ1NQTElORSB2YWx1ZXMgbGF5b3V0IGluIGludGVycG9sYXRlXygpIGZ1bmN0aW9uIGJlbG93LlxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXIsXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLnNhbXBsZVZhbHVlcyxcblx0XHRcdHZhbHVlU2l6ZSA9IHRoaXMudmFsdWVTaXplLFxuXHRcdFx0b2Zmc2V0ID0gaW5kZXggKiB2YWx1ZVNpemUgKiAzICsgdmFsdWVTaXplO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpICE9PSB2YWx1ZVNpemU7IGkgKysgKSB7XG5cblx0XHRcdHJlc3VsdFsgaSBdID0gdmFsdWVzWyBvZmZzZXQgKyBpIF07XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1cblxufVxuXG5HTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuYmVmb3JlU3RhcnRfID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV87XG5cbkdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5hZnRlckVuZF8gPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcblxuR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmludGVycG9sYXRlXyA9IGZ1bmN0aW9uICggaTEsIHQwLCB0LCB0MSApIHtcblxuXHRjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdEJ1ZmZlcjtcblx0Y29uc3QgdmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXM7XG5cdGNvbnN0IHN0cmlkZSA9IHRoaXMudmFsdWVTaXplO1xuXG5cdGNvbnN0IHN0cmlkZTIgPSBzdHJpZGUgKiAyO1xuXHRjb25zdCBzdHJpZGUzID0gc3RyaWRlICogMztcblxuXHRjb25zdCB0ZCA9IHQxIC0gdDA7XG5cblx0Y29uc3QgcCA9ICggdCAtIHQwICkgLyB0ZDtcblx0Y29uc3QgcHAgPSBwICogcDtcblx0Y29uc3QgcHBwID0gcHAgKiBwO1xuXG5cdGNvbnN0IG9mZnNldDEgPSBpMSAqIHN0cmlkZTM7XG5cdGNvbnN0IG9mZnNldDAgPSBvZmZzZXQxIC0gc3RyaWRlMztcblxuXHRjb25zdCBzMiA9IC0gMiAqIHBwcCArIDMgKiBwcDtcblx0Y29uc3QgczMgPSBwcHAgLSBwcDtcblx0Y29uc3QgczAgPSAxIC0gczI7XG5cdGNvbnN0IHMxID0gczMgLSBwcCArIHA7XG5cblx0Ly8gTGF5b3V0IG9mIGtleWZyYW1lIG91dHB1dCB2YWx1ZXMgZm9yIENVQklDU1BMSU5FIGFuaW1hdGlvbnM6XG5cdC8vICAgWyBpblRhbmdlbnRfMSwgc3BsaW5lVmVydGV4XzEsIG91dFRhbmdlbnRfMSwgaW5UYW5nZW50XzIsIHNwbGluZVZlcnRleF8yLCAuLi4gXVxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgIT09IHN0cmlkZTsgaSArKyApIHtcblxuXHRcdGNvbnN0IHAwID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZSBdOyAvLyBzcGxpbmVWZXJ0ZXhfa1xuXHRcdGNvbnN0IG0wID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZTIgXSAqIHRkOyAvLyBvdXRUYW5nZW50X2sgKiAodF9rKzEgLSB0X2spXG5cdFx0Y29uc3QgcDEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpICsgc3RyaWRlIF07IC8vIHNwbGluZVZlcnRleF9rKzFcblx0XHRjb25zdCBtMSA9IHZhbHVlc1sgb2Zmc2V0MSArIGkgXSAqIHRkOyAvLyBpblRhbmdlbnRfaysxICogKHRfaysxIC0gdF9rKVxuXG5cdFx0cmVzdWx0WyBpIF0gPSBzMCAqIHAwICsgczEgKiBtMCArIHMyICogcDEgKyBzMyAqIG0xO1xuXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59O1xuXG5jb25zdCBfcSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cbmNsYXNzIEdMVEZDdWJpY1NwbGluZVF1YXRlcm5pb25JbnRlcnBvbGFudCBleHRlbmRzIEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50IHtcblxuXHRpbnRlcnBvbGF0ZV8oIGkxLCB0MCwgdCwgdDEgKSB7XG5cblx0XHRjb25zdCByZXN1bHQgPSBzdXBlci5pbnRlcnBvbGF0ZV8oIGkxLCB0MCwgdCwgdDEgKTtcblxuXHRcdF9xLmZyb21BcnJheSggcmVzdWx0ICkubm9ybWFsaXplKCkudG9BcnJheSggcmVzdWx0ICk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1cblxufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBJTlRFUk5BTFMgKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogQ09OU1RBTlRTICovXG5cbmNvbnN0IFdFQkdMX0NPTlNUQU5UUyA9IHtcblx0RkxPQVQ6IDUxMjYsXG5cdC8vRkxPQVRfTUFUMjogMzU2NzQsXG5cdEZMT0FUX01BVDM6IDM1Njc1LFxuXHRGTE9BVF9NQVQ0OiAzNTY3Nixcblx0RkxPQVRfVkVDMjogMzU2NjQsXG5cdEZMT0FUX1ZFQzM6IDM1NjY1LFxuXHRGTE9BVF9WRUM0OiAzNTY2Nixcblx0TElORUFSOiA5NzI5LFxuXHRSRVBFQVQ6IDEwNDk3LFxuXHRTQU1QTEVSXzJEOiAzNTY3OCxcblx0UE9JTlRTOiAwLFxuXHRMSU5FUzogMSxcblx0TElORV9MT09QOiAyLFxuXHRMSU5FX1NUUklQOiAzLFxuXHRUUklBTkdMRVM6IDQsXG5cdFRSSUFOR0xFX1NUUklQOiA1LFxuXHRUUklBTkdMRV9GQU46IDYsXG5cdFVOU0lHTkVEX0JZVEU6IDUxMjEsXG5cdFVOU0lHTkVEX1NIT1JUOiA1MTIzXG59O1xuXG5jb25zdCBXRUJHTF9DT01QT05FTlRfVFlQRVMgPSB7XG5cdDUxMjA6IEludDhBcnJheSxcblx0NTEyMTogVWludDhBcnJheSxcblx0NTEyMjogSW50MTZBcnJheSxcblx0NTEyMzogVWludDE2QXJyYXksXG5cdDUxMjU6IFVpbnQzMkFycmF5LFxuXHQ1MTI2OiBGbG9hdDMyQXJyYXlcbn07XG5cbmNvbnN0IFdFQkdMX0ZJTFRFUlMgPSB7XG5cdDk3Mjg6IE5lYXJlc3RGaWx0ZXIsXG5cdDk3Mjk6IExpbmVhckZpbHRlcixcblx0OTk4NDogTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdDk5ODU6IExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdDk5ODY6IE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdDk5ODc6IExpbmVhck1pcG1hcExpbmVhckZpbHRlclxufTtcblxuY29uc3QgV0VCR0xfV1JBUFBJTkdTID0ge1xuXHQzMzA3MTogQ2xhbXBUb0VkZ2VXcmFwcGluZyxcblx0MzM2NDg6IE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXG5cdDEwNDk3OiBSZXBlYXRXcmFwcGluZ1xufTtcblxuY29uc3QgV0VCR0xfVFlQRV9TSVpFUyA9IHtcblx0J1NDQUxBUic6IDEsXG5cdCdWRUMyJzogMixcblx0J1ZFQzMnOiAzLFxuXHQnVkVDNCc6IDQsXG5cdCdNQVQyJzogNCxcblx0J01BVDMnOiA5LFxuXHQnTUFUNCc6IDE2XG59O1xuXG5jb25zdCBBVFRSSUJVVEVTID0ge1xuXHRQT1NJVElPTjogJ3Bvc2l0aW9uJyxcblx0Tk9STUFMOiAnbm9ybWFsJyxcblx0VEFOR0VOVDogJ3RhbmdlbnQnLFxuXHRURVhDT09SRF8wOiAndXYnLFxuXHRURVhDT09SRF8xOiAndXYyJyxcblx0Q09MT1JfMDogJ2NvbG9yJyxcblx0V0VJR0hUU18wOiAnc2tpbldlaWdodCcsXG5cdEpPSU5UU18wOiAnc2tpbkluZGV4Jyxcbn07XG5cbmNvbnN0IFBBVEhfUFJPUEVSVElFUyA9IHtcblx0c2NhbGU6ICdzY2FsZScsXG5cdHRyYW5zbGF0aW9uOiAncG9zaXRpb24nLFxuXHRyb3RhdGlvbjogJ3F1YXRlcm5pb24nLFxuXHR3ZWlnaHRzOiAnbW9ycGhUYXJnZXRJbmZsdWVuY2VzJ1xufTtcblxuY29uc3QgSU5URVJQT0xBVElPTiA9IHtcblx0Q1VCSUNTUExJTkU6IHVuZGVmaW5lZCwgLy8gV2UgdXNlIGEgY3VzdG9tIGludGVycG9sYW50IChHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGF0aW9uKSBmb3IgQ1VCSUNTUExJTkUgdHJhY2tzLiBFYWNoXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2V5ZnJhbWUgdHJhY2sgd2lsbCBiZSBpbml0aWFsaXplZCB3aXRoIGEgZGVmYXVsdCBpbnRlcnBvbGF0aW9uIHR5cGUsIHRoZW4gbW9kaWZpZWQuXG5cdExJTkVBUjogSW50ZXJwb2xhdGVMaW5lYXIsXG5cdFNURVA6IEludGVycG9sYXRlRGlzY3JldGVcbn07XG5cbmNvbnN0IEFMUEhBX01PREVTID0ge1xuXHRPUEFRVUU6ICdPUEFRVUUnLFxuXHRNQVNLOiAnTUFTSycsXG5cdEJMRU5EOiAnQkxFTkQnXG59O1xuXG4vKiBVVElMSVRZIEZVTkNUSU9OUyAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVVJMKCB1cmwsIHBhdGggKSB7XG5cblx0Ly8gSW52YWxpZCBVUkxcblx0aWYgKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fCB1cmwgPT09ICcnICkgcmV0dXJuICcnO1xuXG5cdC8vIEhvc3QgUmVsYXRpdmUgVVJMXG5cdGlmICggL15odHRwcz86XFwvXFwvL2kudGVzdCggcGF0aCApICYmIC9eXFwvLy50ZXN0KCB1cmwgKSApIHtcblxuXHRcdHBhdGggPSBwYXRoLnJlcGxhY2UoIC8oXmh0dHBzPzpcXC9cXC9bXlxcL10rKS4qL2ksICckMScgKTtcblxuXHR9XG5cblx0Ly8gQWJzb2x1dGUgVVJMIGh0dHA6Ly8saHR0cHM6Ly8sLy9cblx0aWYgKCAvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KCB1cmwgKSApIHJldHVybiB1cmw7XG5cblx0Ly8gRGF0YSBVUklcblx0aWYgKCAvXmRhdGE6LiosLiokL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xuXG5cdC8vIEJsb2IgVVJMXG5cdGlmICggL15ibG9iOi4qJC9pLnRlc3QoIHVybCApICkgcmV0dXJuIHVybDtcblxuXHQvLyBSZWxhdGl2ZSBVUkxcblx0cmV0dXJuIHBhdGggKyB1cmw7XG5cbn1cblxuLyoqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2RlZmF1bHQtbWF0ZXJpYWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKCBjYWNoZSApIHtcblxuXHRpZiAoIGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXSA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCgge1xuXHRcdFx0Y29sb3I6IDB4RkZGRkZGLFxuXHRcdFx0ZW1pc3NpdmU6IDB4MDAwMDAwLFxuXHRcdFx0bWV0YWxuZXNzOiAxLFxuXHRcdFx0cm91Z2huZXNzOiAxLFxuXHRcdFx0dHJhbnNwYXJlbnQ6IGZhbHNlLFxuXHRcdFx0ZGVwdGhUZXN0OiB0cnVlLFxuXHRcdFx0c2lkZTogRnJvbnRTaWRlXG5cdFx0fSApO1xuXG5cdH1cblxuXHRyZXR1cm4gY2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF07XG5cbn1cblxuZnVuY3Rpb24gYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBrbm93bkV4dGVuc2lvbnMsIG9iamVjdCwgb2JqZWN0RGVmICkge1xuXG5cdC8vIEFkZCB1bmtub3duIGdsVEYgZXh0ZW5zaW9ucyB0byBhbiBvYmplY3QncyB1c2VyRGF0YS5cblxuXHRmb3IgKCBjb25zdCBuYW1lIGluIG9iamVjdERlZi5leHRlbnNpb25zICkge1xuXG5cdFx0aWYgKCBrbm93bkV4dGVuc2lvbnNbIG5hbWUgXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgPSBvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgfHwge307XG5cdFx0XHRvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnNbIG5hbWUgXSA9IG9iamVjdERlZi5leHRlbnNpb25zWyBuYW1lIF07XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3QzRHxNYXRlcmlhbHxCdWZmZXJHZW9tZXRyeX0gb2JqZWN0XG4gKiBAcGFyYW0ge0dMVEYuZGVmaW5pdGlvbn0gZ2x0ZkRlZlxuICovXG5mdW5jdGlvbiBhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBvYmplY3QsIGdsdGZEZWYgKSB7XG5cblx0aWYgKCBnbHRmRGVmLmV4dHJhcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0aWYgKCB0eXBlb2YgZ2x0ZkRlZi5leHRyYXMgPT09ICdvYmplY3QnICkge1xuXG5cdFx0XHRPYmplY3QuYXNzaWduKCBvYmplY3QudXNlckRhdGEsIGdsdGZEZWYuZXh0cmFzICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBJZ25vcmluZyBwcmltaXRpdmUgdHlwZSAuZXh0cmFzLCAnICsgZ2x0ZkRlZi5leHRyYXMgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21vcnBoLXRhcmdldHNcbiAqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtBcnJheTxHTFRGLlRhcmdldD59IHRhcmdldHNcbiAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckdlb21ldHJ5Pn1cbiAqL1xuZnVuY3Rpb24gYWRkTW9ycGhUYXJnZXRzKCBnZW9tZXRyeSwgdGFyZ2V0cywgcGFyc2VyICkge1xuXG5cdGxldCBoYXNNb3JwaFBvc2l0aW9uID0gZmFsc2U7XG5cdGxldCBoYXNNb3JwaE5vcm1hbCA9IGZhbHNlO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0aWYgKCB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIGhhc01vcnBoUG9zaXRpb24gPSB0cnVlO1xuXHRcdGlmICggdGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkICkgaGFzTW9ycGhOb3JtYWwgPSB0cnVlO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICYmIGhhc01vcnBoTm9ybWFsICkgYnJlYWs7XG5cblx0fVxuXG5cdGlmICggISBoYXNNb3JwaFBvc2l0aW9uICYmICEgaGFzTW9ycGhOb3JtYWwgKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBnZW9tZXRyeSApO1xuXG5cdGNvbnN0IHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyA9IFtdO1xuXHRjb25zdCBwZW5kaW5nTm9ybWFsQWNjZXNzb3JzID0gW107XG5cblx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gKSB7XG5cblx0XHRcdGNvbnN0IHBlbmRpbmdBY2Nlc3NvciA9IHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHRhcmdldC5QT1NJVElPTiApXG5cdFx0XHRcdDogZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcblxuXHRcdFx0cGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzLnB1c2goIHBlbmRpbmdBY2Nlc3NvciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBoYXNNb3JwaE5vcm1hbCApIHtcblxuXHRcdFx0Y29uc3QgcGVuZGluZ0FjY2Vzc29yID0gdGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHRhcmdldC5OT1JNQUwgKVxuXHRcdFx0XHQ6IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsO1xuXG5cdFx0XHRwZW5kaW5nTm9ybWFsQWNjZXNzb3JzLnB1c2goIHBlbmRpbmdBY2Nlc3NvciApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzICksXG5cdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgKVxuXHRdICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvcnMgKSB7XG5cblx0XHRjb25zdCBtb3JwaFBvc2l0aW9ucyA9IGFjY2Vzc29yc1sgMCBdO1xuXHRcdGNvbnN0IG1vcnBoTm9ybWFscyA9IGFjY2Vzc29yc1sgMSBdO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uID0gbW9ycGhQb3NpdGlvbnM7XG5cdFx0aWYgKCBoYXNNb3JwaE5vcm1hbCApIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5ub3JtYWwgPSBtb3JwaE5vcm1hbHM7XG5cdFx0Z2VvbWV0cnkubW9ycGhUYXJnZXRzUmVsYXRpdmUgPSB0cnVlO1xuXG5cdFx0cmV0dXJuIGdlb21ldHJ5O1xuXG5cdH0gKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7TWVzaH0gbWVzaFxuICogQHBhcmFtIHtHTFRGLk1lc2h9IG1lc2hEZWZcbiAqL1xuZnVuY3Rpb24gdXBkYXRlTW9ycGhUYXJnZXRzKCBtZXNoLCBtZXNoRGVmICkge1xuXG5cdG1lc2gudXBkYXRlTW9ycGhUYXJnZXRzKCk7XG5cblx0aWYgKCBtZXNoRGVmLndlaWdodHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtZXNoRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBtZXNoRGVmLndlaWdodHNbIGkgXTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly8gLmV4dHJhcyBoYXMgdXNlci1kZWZpbmVkIGRhdGEsIHNvIGNoZWNrIHRoYXQgLmV4dHJhcy50YXJnZXROYW1lcyBpcyBhbiBhcnJheS5cblx0aWYgKCBtZXNoRGVmLmV4dHJhcyAmJiBBcnJheS5pc0FycmF5KCBtZXNoRGVmLmV4dHJhcy50YXJnZXROYW1lcyApICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0TmFtZXMgPSBtZXNoRGVmLmV4dHJhcy50YXJnZXROYW1lcztcblxuXHRcdGlmICggbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXMubGVuZ3RoID09PSB0YXJnZXROYW1lcy5sZW5ndGggKSB7XG5cblx0XHRcdG1lc2gubW9ycGhUYXJnZXREaWN0aW9uYXJ5ID0ge307XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXROYW1lcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRtZXNoLm1vcnBoVGFyZ2V0RGljdGlvbmFyeVsgdGFyZ2V0TmFtZXNbIGkgXSBdID0gaTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSW52YWxpZCBleHRyYXMudGFyZ2V0TmFtZXMgbGVuZ3RoLiBJZ25vcmluZyBuYW1lcy4nICk7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZUtleSggcHJpbWl0aXZlRGVmICkge1xuXG5cdGNvbnN0IGRyYWNvRXh0ZW5zaW9uID0gcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXTtcblx0bGV0IGdlb21ldHJ5S2V5O1xuXG5cdGlmICggZHJhY29FeHRlbnNpb24gKSB7XG5cblx0XHRnZW9tZXRyeUtleSA9ICdkcmFjbzonICsgZHJhY29FeHRlbnNpb24uYnVmZmVyVmlld1xuXHRcdFx0XHQrICc6JyArIGRyYWNvRXh0ZW5zaW9uLmluZGljZXNcblx0XHRcdFx0KyAnOicgKyBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBkcmFjb0V4dGVuc2lvbi5hdHRyaWJ1dGVzICk7XG5cblx0fSBlbHNlIHtcblxuXHRcdGdlb21ldHJ5S2V5ID0gcHJpbWl0aXZlRGVmLmluZGljZXMgKyAnOicgKyBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBwcmltaXRpdmVEZWYuYXR0cmlidXRlcyApICsgJzonICsgcHJpbWl0aXZlRGVmLm1vZGU7XG5cblx0fVxuXG5cdHJldHVybiBnZW9tZXRyeUtleTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBhdHRyaWJ1dGVzICkge1xuXG5cdGxldCBhdHRyaWJ1dGVzS2V5ID0gJyc7XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKCBhdHRyaWJ1dGVzICkuc29ydCgpO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0YXR0cmlidXRlc0tleSArPSBrZXlzWyBpIF0gKyAnOicgKyBhdHRyaWJ1dGVzWyBrZXlzWyBpIF0gXSArICc7JztcblxuXHR9XG5cblx0cmV0dXJuIGF0dHJpYnV0ZXNLZXk7XG5cbn1cblxuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBjb25zdHJ1Y3RvciApIHtcblxuXHQvLyBSZWZlcmVuY2U6XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tZXNoX3F1YW50aXphdGlvbiNlbmNvZGluZy1xdWFudGl6ZWQtZGF0YVxuXG5cdHN3aXRjaCAoIGNvbnN0cnVjdG9yICkge1xuXG5cdFx0Y2FzZSBJbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDEyNztcblxuXHRcdGNhc2UgVWludDhBcnJheTpcblx0XHRcdHJldHVybiAxIC8gMjU1O1xuXG5cdFx0Y2FzZSBJbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyAzMjc2NztcblxuXHRcdGNhc2UgVWludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDY1NTM1O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIG5vcm1hbGl6ZWQgYWNjZXNzb3IgY29tcG9uZW50IHR5cGUuJyApO1xuXG5cdH1cblxufVxuXG4vKiBHTFRGIFBBUlNFUiAqL1xuXG5jbGFzcyBHTFRGUGFyc2VyIHtcblxuXHRjb25zdHJ1Y3RvcigganNvbiA9IHt9LCBvcHRpb25zID0ge30gKSB7XG5cblx0XHR0aGlzLmpzb24gPSBqc29uO1xuXHRcdHRoaXMuZXh0ZW5zaW9ucyA9IHt9O1xuXHRcdHRoaXMucGx1Z2lucyA9IHt9O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cblx0XHQvLyBsb2FkZXIgb2JqZWN0IGNhY2hlXG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBHTFRGUmVnaXN0cnkoKTtcblxuXHRcdC8vIGFzc29jaWF0aW9ucyBiZXR3ZWVuIFRocmVlLmpzIG9iamVjdHMgYW5kIGdsVEYgZWxlbWVudHNcblx0XHR0aGlzLmFzc29jaWF0aW9ucyA9IG5ldyBNYXAoKTtcblxuXHRcdC8vIEJ1ZmZlckdlb21ldHJ5IGNhY2hpbmdcblx0XHR0aGlzLnByaW1pdGl2ZUNhY2hlID0ge307XG5cblx0XHQvLyBPYmplY3QzRCBpbnN0YW5jZSBjYWNoZXNcblx0XHR0aGlzLm1lc2hDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cdFx0dGhpcy5jYW1lcmFDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cdFx0dGhpcy5saWdodENhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblxuXHRcdHRoaXMudGV4dHVyZUNhY2hlID0ge307XG5cblx0XHQvLyBUcmFjayBub2RlIG5hbWVzLCB0byBlbnN1cmUgbm8gZHVwbGljYXRlc1xuXHRcdHRoaXMubm9kZU5hbWVzVXNlZCA9IHt9O1xuXG5cdFx0Ly8gVXNlIGFuIEltYWdlQml0bWFwTG9hZGVyIGlmIGltYWdlQml0bWFwcyBhcmUgc3VwcG9ydGVkLiBNb3ZlcyBtdWNoIG9mIHRoZVxuXHRcdC8vIGV4cGVuc2l2ZSB3b3JrIG9mIHVwbG9hZGluZyBhIHRleHR1cmUgdG8gdGhlIEdQVSBvZmYgdGhlIG1haW4gdGhyZWFkLlxuXHRcdGlmICggdHlwZW9mIGNyZWF0ZUltYWdlQml0bWFwICE9PSAndW5kZWZpbmVkJyAmJiAvRmlyZWZveC8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApID09PSBmYWxzZSApIHtcblxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IEltYWdlQml0bWFwTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnRleHR1cmVMb2FkZXIuc2V0Q3Jvc3NPcmlnaW4oIHRoaXMub3B0aW9ucy5jcm9zc09yaWdpbiApO1xuXHRcdHRoaXMudGV4dHVyZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLm9wdGlvbnMucmVxdWVzdEhlYWRlciApO1xuXG5cdFx0dGhpcy5maWxlTG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XG5cdFx0dGhpcy5maWxlTG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnICkge1xuXG5cdFx0XHR0aGlzLmZpbGVMb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0cnVlICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHNldEV4dGVuc2lvbnMoIGV4dGVuc2lvbnMgKSB7XG5cblx0XHR0aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuXG5cdH1cblxuXHRzZXRQbHVnaW5zKCBwbHVnaW5zICkge1xuXG5cdFx0dGhpcy5wbHVnaW5zID0gcGx1Z2lucztcblxuXHR9XG5cblx0cGFyc2UoIG9uTG9hZCwgb25FcnJvciApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXG5cdFx0Ly8gQ2xlYXIgdGhlIGxvYWRlciBjYWNoZVxuXHRcdHRoaXMuY2FjaGUucmVtb3ZlQWxsKCk7XG5cblx0XHQvLyBNYXJrIHRoZSBzcGVjaWFsIG5vZGVzL21lc2hlcyBpbiBqc29uIGZvciBlZmZpY2llbnQgcGFyc2Vcblx0XHR0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRyZXR1cm4gZXh0Ll9tYXJrRGVmcyAmJiBleHQuX21hcmtEZWZzKCk7XG5cblx0XHR9ICk7XG5cblx0XHRQcm9taXNlLmFsbCggdGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0cmV0dXJuIGV4dC5iZWZvcmVSb290ICYmIGV4dC5iZWZvcmVSb290KCk7XG5cblx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggW1xuXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdzY2VuZScgKSxcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ2FuaW1hdGlvbicgKSxcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ2NhbWVyYScgKSxcblxuXHRcdFx0XSApO1xuXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggZGVwZW5kZW5jaWVzICkge1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHRcdHNjZW5lOiBkZXBlbmRlbmNpZXNbIDAgXVsganNvbi5zY2VuZSB8fCAwIF0sXG5cdFx0XHRcdHNjZW5lczogZGVwZW5kZW5jaWVzWyAwIF0sXG5cdFx0XHRcdGFuaW1hdGlvbnM6IGRlcGVuZGVuY2llc1sgMSBdLFxuXHRcdFx0XHRjYW1lcmFzOiBkZXBlbmRlbmNpZXNbIDIgXSxcblx0XHRcdFx0YXNzZXQ6IGpzb24uYXNzZXQsXG5cdFx0XHRcdHBhcnNlcjogcGFyc2VyLFxuXHRcdFx0XHR1c2VyRGF0YToge31cblx0XHRcdH07XG5cblx0XHRcdGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgcmVzdWx0LCBqc29uICk7XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIHJlc3VsdCwganNvbiApO1xuXG5cdFx0XHRQcm9taXNlLmFsbCggcGFyc2VyLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuYWZ0ZXJSb290ICYmIGV4dC5hZnRlclJvb3QoIHJlc3VsdCApO1xuXG5cdFx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0b25Mb2FkKCByZXN1bHQgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApLmNhdGNoKCBvbkVycm9yICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBNYXJrcyB0aGUgc3BlY2lhbCBub2Rlcy9tZXNoZXMgaW4ganNvbiBmb3IgZWZmaWNpZW50IHBhcnNlLlxuXHQgKi9cblx0X21hcmtEZWZzKCkge1xuXG5cdFx0Y29uc3Qgbm9kZURlZnMgPSB0aGlzLmpzb24ubm9kZXMgfHwgW107XG5cdFx0Y29uc3Qgc2tpbkRlZnMgPSB0aGlzLmpzb24uc2tpbnMgfHwgW107XG5cdFx0Y29uc3QgbWVzaERlZnMgPSB0aGlzLmpzb24ubWVzaGVzIHx8IFtdO1xuXG5cdFx0Ly8gTm90aGluZyBpbiB0aGUgbm9kZSBkZWZpbml0aW9uIGluZGljYXRlcyB3aGV0aGVyIGl0IGlzIGEgQm9uZSBvciBhblxuXHRcdC8vIE9iamVjdDNELiBVc2UgdGhlIHNraW5zJyBqb2ludCByZWZlcmVuY2VzIHRvIG1hcmsgYm9uZXMuXG5cdFx0Zm9yICggbGV0IHNraW5JbmRleCA9IDAsIHNraW5MZW5ndGggPSBza2luRGVmcy5sZW5ndGg7IHNraW5JbmRleCA8IHNraW5MZW5ndGg7IHNraW5JbmRleCArKyApIHtcblxuXHRcdFx0Y29uc3Qgam9pbnRzID0gc2tpbkRlZnNbIHNraW5JbmRleCBdLmpvaW50cztcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGpvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRub2RlRGVmc1sgam9pbnRzWyBpIF0gXS5pc0JvbmUgPSB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyBJdGVyYXRlIG92ZXIgYWxsIG5vZGVzLCBtYXJraW5nIHJlZmVyZW5jZXMgdG8gc2hhcmVkIHJlc291cmNlcyxcblx0XHQvLyBhcyB3ZWxsIGFzIHNrZWxldG9uIGpvaW50cy5cblx0XHRmb3IgKCBsZXQgbm9kZUluZGV4ID0gMCwgbm9kZUxlbmd0aCA9IG5vZGVEZWZzLmxlbmd0aDsgbm9kZUluZGV4IDwgbm9kZUxlbmd0aDsgbm9kZUluZGV4ICsrICkge1xuXG5cdFx0XHRjb25zdCBub2RlRGVmID0gbm9kZURlZnNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYubWVzaCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHRoaXMuX2FkZE5vZGVSZWYoIHRoaXMubWVzaENhY2hlLCBub2RlRGVmLm1lc2ggKTtcblxuXHRcdFx0XHQvLyBOb3RoaW5nIGluIHRoZSBtZXNoIGRlZmluaXRpb24gaW5kaWNhdGVzIHdoZXRoZXIgaXQgaXNcblx0XHRcdFx0Ly8gYSBTa2lubmVkTWVzaCBvciBNZXNoLiBVc2UgdGhlIG5vZGUncyBtZXNoIHJlZmVyZW5jZVxuXHRcdFx0XHQvLyB0byBtYXJrIFNraW5uZWRNZXNoIGlmIG5vZGUgaGFzIHNraW4uXG5cdFx0XHRcdGlmICggbm9kZURlZi5za2luICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRtZXNoRGVmc1sgbm9kZURlZi5tZXNoIF0uaXNTa2lubmVkTWVzaCA9IHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHR0aGlzLl9hZGROb2RlUmVmKCB0aGlzLmNhbWVyYUNhY2hlLCBub2RlRGVmLmNhbWVyYSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb3VudHMgcmVmZXJlbmNlcyB0byBzaGFyZWQgbm9kZSAvIE9iamVjdDNEIHJlc291cmNlcy4gVGhlc2UgcmVzb3VyY2VzXG5cdCAqIGNhbiBiZSByZXVzZWQsIG9yIFwiaW5zdGFudGlhdGVkXCIsIGF0IG11bHRpcGxlIG5vZGVzIGluIHRoZSBzY2VuZVxuXHQgKiBoaWVyYXJjaHkuIE1lc2gsIENhbWVyYSwgYW5kIExpZ2h0IGluc3RhbmNlcyBhcmUgaW5zdGFudGlhdGVkIGFuZCBtdXN0XG5cdCAqIGJlIG1hcmtlZC4gTm9uLXNjZW5lZ3JhcGggcmVzb3VyY2VzIChsaWtlIE1hdGVyaWFscywgR2VvbWV0cmllcywgYW5kXG5cdCAqIFRleHR1cmVzKSBjYW4gYmUgcmV1c2VkIGRpcmVjdGx5IGFuZCBhcmUgbm90IG1hcmtlZCBoZXJlLlxuXHQgKlxuXHQgKiBFeGFtcGxlOiBDZXNpdW1NaWxrVHJ1Y2sgc2FtcGxlIG1vZGVsIHJldXNlcyBcIldoZWVsXCIgbWVzaGVzLlxuXHQgKi9cblx0X2FkZE5vZGVSZWYoIGNhY2hlLCBpbmRleCApIHtcblxuXHRcdGlmICggaW5kZXggPT09IHVuZGVmaW5lZCApIHJldHVybjtcblxuXHRcdGlmICggY2FjaGUucmVmc1sgaW5kZXggXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjYWNoZS5yZWZzWyBpbmRleCBdID0gY2FjaGUudXNlc1sgaW5kZXggXSA9IDA7XG5cblx0XHR9XG5cblx0XHRjYWNoZS5yZWZzWyBpbmRleCBdICsrO1xuXG5cdH1cblxuXHQvKiogUmV0dXJucyBhIHJlZmVyZW5jZSB0byBhIHNoYXJlZCByZXNvdXJjZSwgY2xvbmluZyBpdCBpZiBuZWNlc3NhcnkuICovXG5cdF9nZXROb2RlUmVmKCBjYWNoZSwgaW5kZXgsIG9iamVjdCApIHtcblxuXHRcdGlmICggY2FjaGUucmVmc1sgaW5kZXggXSA8PSAxICkgcmV0dXJuIG9iamVjdDtcblxuXHRcdGNvbnN0IHJlZiA9IG9iamVjdC5jbG9uZSgpO1xuXG5cdFx0Ly8gUHJvcGFnYXRlcyBtYXBwaW5ncyB0byB0aGUgY2xvbmVkIG9iamVjdCwgcHJldmVudHMgbWFwcGluZ3Mgb24gdGhlXG5cdFx0Ly8gb3JpZ2luYWwgb2JqZWN0IGZyb20gYmVpbmcgbG9zdC5cblx0XHRjb25zdCB1cGRhdGVNYXBwaW5ncyA9ICggb3JpZ2luYWwsIGNsb25lICkgPT4ge1xuXG5cdFx0XHRjb25zdCBtYXBwaW5ncyA9IHRoaXMuYXNzb2NpYXRpb25zLmdldCggb3JpZ2luYWwgKTtcblx0XHRcdGlmICggbWFwcGluZ3MgIT0gbnVsbCApIHtcblxuXHRcdFx0XHR0aGlzLmFzc29jaWF0aW9ucy5zZXQoIGNsb25lLCBtYXBwaW5ncyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGNvbnN0IFsgaSwgY2hpbGQgXSBvZiBvcmlnaW5hbC5jaGlsZHJlbi5lbnRyaWVzKCkgKSB7XG5cblx0XHRcdFx0dXBkYXRlTWFwcGluZ3MoIGNoaWxkLCBjbG9uZS5jaGlsZHJlblsgaSBdICk7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0XHR1cGRhdGVNYXBwaW5ncyggb2JqZWN0LCByZWYgKTtcblxuXHRcdHJlZi5uYW1lICs9ICdfaW5zdGFuY2VfJyArICggY2FjaGUudXNlc1sgaW5kZXggXSArKyApO1xuXG5cdFx0cmV0dXJuIHJlZjtcblxuXHR9XG5cblx0X2ludm9rZU9uZSggZnVuYyApIHtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSBPYmplY3QudmFsdWVzKCB0aGlzLnBsdWdpbnMgKTtcblx0XHRleHRlbnNpb25zLnB1c2goIHRoaXMgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBmdW5jKCBleHRlbnNpb25zWyBpIF0gKTtcblxuXHRcdFx0aWYgKCByZXN1bHQgKSByZXR1cm4gcmVzdWx0O1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0fVxuXG5cdF9pbnZva2VBbGwoIGZ1bmMgKSB7XG5cblx0XHRjb25zdCBleHRlbnNpb25zID0gT2JqZWN0LnZhbHVlcyggdGhpcy5wbHVnaW5zICk7XG5cdFx0ZXh0ZW5zaW9ucy51bnNoaWZ0KCB0aGlzICk7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZnVuYyggZXh0ZW5zaW9uc1sgaSBdICk7XG5cblx0XHRcdGlmICggcmVzdWx0ICkgcGVuZGluZy5wdXNoKCByZXN1bHQgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBwZW5kaW5nO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdHMgdGhlIHNwZWNpZmllZCBkZXBlbmRlbmN5IGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEfE1hdGVyaWFsfFRIUkVFLlRleHR1cmV8QW5pbWF0aW9uQ2xpcHxBcnJheUJ1ZmZlcnxPYmplY3Q+fVxuXHQgKi9cblx0Z2V0RGVwZW5kZW5jeSggdHlwZSwgaW5kZXggKSB7XG5cblx0XHRjb25zdCBjYWNoZUtleSA9IHR5cGUgKyAnOicgKyBpbmRleDtcblx0XHRsZXQgZGVwZW5kZW5jeSA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0aWYgKCAhIGRlcGVuZGVuY3kgKSB7XG5cblx0XHRcdHN3aXRjaCAoIHR5cGUgKSB7XG5cblx0XHRcdFx0Y2FzZSAnc2NlbmUnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRTY2VuZSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdub2RlJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkTm9kZSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdtZXNoJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkTWVzaCAmJiBleHQubG9hZE1lc2goIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYWNjZXNzb3InOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBY2Nlc3NvciggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdidWZmZXJWaWV3Jzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkQnVmZmVyVmlldyAmJiBleHQubG9hZEJ1ZmZlclZpZXcoIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYnVmZmVyJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQnVmZmVyKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkTWF0ZXJpYWwgJiYgZXh0LmxvYWRNYXRlcmlhbCggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICd0ZXh0dXJlJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkVGV4dHVyZSAmJiBleHQubG9hZFRleHR1cmUoIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnc2tpbic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZFNraW4oIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYW5pbWF0aW9uJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQW5pbWF0aW9uKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2NhbWVyYSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZENhbWVyYSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1Vua25vd24gdHlwZTogJyArIHR5cGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGRlcGVuZGVuY3kgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdHMgYWxsIGRlcGVuZGVuY2llcyBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgYXN5bmNocm9ub3VzbHksIHdpdGggY2FjaGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxPYmplY3Q+Pn1cblx0ICovXG5cdGdldERlcGVuZGVuY2llcyggdHlwZSApIHtcblxuXHRcdGxldCBkZXBlbmRlbmNpZXMgPSB0aGlzLmNhY2hlLmdldCggdHlwZSApO1xuXG5cdFx0aWYgKCAhIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRcdGNvbnN0IGRlZnMgPSB0aGlzLmpzb25bIHR5cGUgKyAoIHR5cGUgPT09ICdtZXNoJyA/ICdlcycgOiAncycgKSBdIHx8IFtdO1xuXG5cdFx0XHRkZXBlbmRlbmNpZXMgPSBQcm9taXNlLmFsbCggZGVmcy5tYXAoIGZ1bmN0aW9uICggZGVmLCBpbmRleCApIHtcblxuXHRcdFx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koIHR5cGUsIGluZGV4ICk7XG5cblx0XHRcdH0gKSApO1xuXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggdHlwZSwgZGVwZW5kZW5jaWVzICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlckluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxuXHQgKi9cblx0bG9hZEJ1ZmZlciggYnVmZmVySW5kZXggKSB7XG5cblx0XHRjb25zdCBidWZmZXJEZWYgPSB0aGlzLmpzb24uYnVmZmVyc1sgYnVmZmVySW5kZXggXTtcblx0XHRjb25zdCBsb2FkZXIgPSB0aGlzLmZpbGVMb2FkZXI7XG5cblx0XHRpZiAoIGJ1ZmZlckRlZi50eXBlICYmIGJ1ZmZlckRlZi50eXBlICE9PSAnYXJyYXlidWZmZXInICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiAnICsgYnVmZmVyRGVmLnR5cGUgKyAnIGJ1ZmZlciB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuJyApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gSWYgcHJlc2VudCwgR0xCIGNvbnRhaW5lciBpcyByZXF1aXJlZCB0byBiZSB0aGUgZmlyc3QgYnVmZmVyLlxuXHRcdGlmICggYnVmZmVyRGVmLnVyaSA9PT0gdW5kZWZpbmVkICYmIGJ1ZmZlckluZGV4ID09PSAwICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCB0aGlzLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0uYm9keSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlLCByZWplY3QgKSB7XG5cblx0XHRcdGxvYWRlci5sb2FkKCByZXNvbHZlVVJMKCBidWZmZXJEZWYudXJpLCBvcHRpb25zLnBhdGggKSwgcmVzb2x2ZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmVqZWN0KCBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBGYWlsZWQgdG8gbG9hZCBidWZmZXIgXCInICsgYnVmZmVyRGVmLnVyaSArICdcIi4nICkgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlclZpZXdJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cblx0ICovXG5cdGxvYWRCdWZmZXJWaWV3KCBidWZmZXJWaWV3SW5kZXggKSB7XG5cblx0XHRjb25zdCBidWZmZXJWaWV3RGVmID0gdGhpcy5qc29uLmJ1ZmZlclZpZXdzWyBidWZmZXJWaWV3SW5kZXggXTtcblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXInLCBidWZmZXJWaWV3RGVmLmJ1ZmZlciApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyICkge1xuXG5cdFx0XHRjb25zdCBieXRlTGVuZ3RoID0gYnVmZmVyVmlld0RlZi5ieXRlTGVuZ3RoIHx8IDA7XG5cdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gYnVmZmVyVmlld0RlZi5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRyZXR1cm4gYnVmZmVyLnNsaWNlKCBieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNhY2Nlc3NvcnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFjY2Vzc29ySW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJBdHRyaWJ1dGV8SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGU+fVxuXHQgKi9cblx0bG9hZEFjY2Vzc29yKCBhY2Nlc3NvckluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXG5cdFx0Y29uc3QgYWNjZXNzb3JEZWYgPSB0aGlzLmpzb24uYWNjZXNzb3JzWyBhY2Nlc3NvckluZGV4IF07XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgPT09IHVuZGVmaW5lZCAmJiBhY2Nlc3NvckRlZi5zcGFyc2UgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gSWdub3JlIGVtcHR5IGFjY2Vzc29ycywgd2hpY2ggbWF5IGJlIHVzZWQgdG8gZGVjbGFyZSBydW50aW1lXG5cdFx0XHQvLyBpbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIGNvbWluZyBmcm9tIGFub3RoZXIgc291cmNlIChlLmcuIERyYWNvXG5cdFx0XHQvLyBjb21wcmVzc2lvbiBleHRlbnNpb24pLlxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggbnVsbCApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZ0J1ZmZlclZpZXdzID0gW107XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCBudWxsICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ1ZmZlclZpZXcgKSApO1xuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5zcGFyc2UudmFsdWVzLmJ1ZmZlclZpZXcgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nQnVmZmVyVmlld3MgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXdzICkge1xuXG5cdFx0XHRjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyVmlld3NbIDAgXTtcblxuXHRcdFx0Y29uc3QgaXRlbVNpemUgPSBXRUJHTF9UWVBFX1NJWkVTWyBhY2Nlc3NvckRlZi50eXBlIF07XG5cdFx0XHRjb25zdCBUeXBlZEFycmF5ID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlIF07XG5cblx0XHRcdC8vIEZvciBWRUMzOiBpdGVtU2l6ZSBpcyAzLCBlbGVtZW50Qnl0ZXMgaXMgNCwgaXRlbUJ5dGVzIGlzIDEyLlxuXHRcdFx0Y29uc3QgZWxlbWVudEJ5dGVzID0gVHlwZWRBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcblx0XHRcdGNvbnN0IGl0ZW1CeXRlcyA9IGVsZW1lbnRCeXRlcyAqIGl0ZW1TaXplO1xuXHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IGFjY2Vzc29yRGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdGNvbnN0IGJ5dGVTdHJpZGUgPSBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgPyBqc29uLmJ1ZmZlclZpZXdzWyBhY2Nlc3NvckRlZi5idWZmZXJWaWV3IF0uYnl0ZVN0cmlkZSA6IHVuZGVmaW5lZDtcblx0XHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xuXHRcdFx0bGV0IGFycmF5LCBidWZmZXJBdHRyaWJ1dGU7XG5cblx0XHRcdC8vIFRoZSBidWZmZXIgaXMgbm90IGludGVybGVhdmVkIGlmIHRoZSBzdHJpZGUgaXMgdGhlIGl0ZW0gc2l6ZSBpbiBieXRlcy5cblx0XHRcdGlmICggYnl0ZVN0cmlkZSAmJiBieXRlU3RyaWRlICE9PSBpdGVtQnl0ZXMgKSB7XG5cblx0XHRcdFx0Ly8gRWFjaCBcInNsaWNlXCIgb2YgdGhlIGJ1ZmZlciwgYXMgZGVmaW5lZCBieSAnY291bnQnIGVsZW1lbnRzIG9mICdieXRlU3RyaWRlJyBieXRlcywgZ2V0cyBpdHMgb3duIEludGVybGVhdmVkQnVmZmVyXG5cdFx0XHRcdC8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IElCQS5jb3VudCByZWZsZWN0cyBhY2Nlc3Nvci5jb3VudCBwcm9wZXJseVxuXHRcdFx0XHRjb25zdCBpYlNsaWNlID0gTWF0aC5mbG9vciggYnl0ZU9mZnNldCAvIGJ5dGVTdHJpZGUgKTtcblx0XHRcdFx0Y29uc3QgaWJDYWNoZUtleSA9ICdJbnRlcmxlYXZlZEJ1ZmZlcjonICsgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyArICc6JyArIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgKyAnOicgKyBpYlNsaWNlICsgJzonICsgYWNjZXNzb3JEZWYuY291bnQ7XG5cdFx0XHRcdGxldCBpYiA9IHBhcnNlci5jYWNoZS5nZXQoIGliQ2FjaGVLZXkgKTtcblxuXHRcdFx0XHRpZiAoICEgaWIgKSB7XG5cblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3LCBpYlNsaWNlICogYnl0ZVN0cmlkZSwgYWNjZXNzb3JEZWYuY291bnQgKiBieXRlU3RyaWRlIC8gZWxlbWVudEJ5dGVzICk7XG5cblx0XHRcdFx0XHQvLyBJbnRlZ2VyIHBhcmFtZXRlcnMgdG8gSUIvSUJBIGFyZSBpbiBhcnJheSBlbGVtZW50cywgbm90IGJ5dGVzLlxuXHRcdFx0XHRcdGliID0gbmV3IEludGVybGVhdmVkQnVmZmVyKCBhcnJheSwgYnl0ZVN0cmlkZSAvIGVsZW1lbnRCeXRlcyApO1xuXG5cdFx0XHRcdFx0cGFyc2VyLmNhY2hlLmFkZCggaWJDYWNoZUtleSwgaWIgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKCBpYiwgaXRlbVNpemUsICggYnl0ZU9mZnNldCAlIGJ5dGVTdHJpZGUgKSAvIGVsZW1lbnRCeXRlcywgbm9ybWFsaXplZCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggYnVmZmVyVmlldyA9PT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGFjY2Vzc29yRGVmLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlldywgYnl0ZU9mZnNldCwgYWNjZXNzb3JEZWYuY291bnQgKiBpdGVtU2l6ZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBhcnJheSwgaXRlbVNpemUsIG5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI3NwYXJzZS1hY2Nlc3NvcnNcblx0XHRcdGlmICggYWNjZXNzb3JEZWYuc3BhcnNlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgaXRlbVNpemVJbmRpY2VzID0gV0VCR0xfVFlQRV9TSVpFUy5TQ0FMQVI7XG5cdFx0XHRcdGNvbnN0IFR5cGVkQXJyYXlJbmRpY2VzID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5jb21wb25lbnRUeXBlIF07XG5cblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldEluZGljZXMgPSBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXRWYWx1ZXMgPSBhY2Nlc3NvckRlZi5zcGFyc2UudmFsdWVzLmJ5dGVPZmZzZXQgfHwgMDtcblxuXHRcdFx0XHRjb25zdCBzcGFyc2VJbmRpY2VzID0gbmV3IFR5cGVkQXJyYXlJbmRpY2VzKCBidWZmZXJWaWV3c1sgMSBdLCBieXRlT2Zmc2V0SW5kaWNlcywgYWNjZXNzb3JEZWYuc3BhcnNlLmNvdW50ICogaXRlbVNpemVJbmRpY2VzICk7XG5cdFx0XHRcdGNvbnN0IHNwYXJzZVZhbHVlcyA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3c1sgMiBdLCBieXRlT2Zmc2V0VmFsdWVzLCBhY2Nlc3NvckRlZi5zcGFyc2UuY291bnQgKiBpdGVtU2l6ZSApO1xuXG5cdFx0XHRcdGlmICggYnVmZmVyVmlldyAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdC8vIEF2b2lkIG1vZGlmeWluZyB0aGUgb3JpZ2luYWwgQXJyYXlCdWZmZXIsIGlmIHRoZSBidWZmZXJWaWV3IHdhc24ndCBpbml0aWFsaXplZCB3aXRoIHplcm9lcy5cblx0XHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBidWZmZXJBdHRyaWJ1dGUuYXJyYXkuc2xpY2UoKSwgYnVmZmVyQXR0cmlidXRlLml0ZW1TaXplLCBidWZmZXJBdHRyaWJ1dGUubm9ybWFsaXplZCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gc3BhcnNlSW5kaWNlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gc3BhcnNlSW5kaWNlc1sgaSBdO1xuXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlLnNldFgoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSAyICkgYnVmZmVyQXR0cmlidXRlLnNldFkoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDEgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gMyApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRaKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAyIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDQgKSBidWZmZXJBdHRyaWJ1dGUuc2V0VyggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMyBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSA1ICkgdGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgaXRlbVNpemUgaW4gc3BhcnNlIEJ1ZmZlckF0dHJpYnV0ZS4nICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBidWZmZXJBdHRyaWJ1dGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjdGV4dHVyZXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRleHR1cmVJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLlRleHR1cmU+fVxuXHQgKi9cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cdFx0Y29uc3Qgc291cmNlID0ganNvbi5pbWFnZXNbIHRleHR1cmVEZWYuc291cmNlIF07XG5cblx0XHRsZXQgbG9hZGVyID0gdGhpcy50ZXh0dXJlTG9hZGVyO1xuXG5cdFx0aWYgKCBzb3VyY2UudXJpICkge1xuXG5cdFx0XHRjb25zdCBoYW5kbGVyID0gb3B0aW9ucy5tYW5hZ2VyLmdldEhhbmRsZXIoIHNvdXJjZS51cmkgKTtcblx0XHRcdGlmICggaGFuZGxlciAhPT0gbnVsbCApIGxvYWRlciA9IGhhbmRsZXI7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGNvbnN0IGNhY2hlS2V5ID0gKCBzb3VyY2UudXJpIHx8IHNvdXJjZS5idWZmZXJWaWV3ICkgKyAnOicgKyB0ZXh0dXJlRGVmLnNhbXBsZXI7XG5cblx0XHRpZiAoIHRoaXMudGV4dHVyZUNhY2hlWyBjYWNoZUtleSBdICkge1xuXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMjE1NTkuXG5cdFx0XHRyZXR1cm4gdGhpcy50ZXh0dXJlQ2FjaGVbIGNhY2hlS2V5IF07XG5cblx0XHR9XG5cblx0XHRjb25zdCBVUkwgPSBzZWxmLlVSTCB8fCBzZWxmLndlYmtpdFVSTDtcblxuXHRcdGxldCBzb3VyY2VVUkkgPSBzb3VyY2UudXJpIHx8ICcnO1xuXHRcdGxldCBpc09iamVjdFVSTCA9IGZhbHNlO1xuXG5cdFx0aWYgKCBzb3VyY2UuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBMb2FkIGJpbmFyeSBpbWFnZSBkYXRhIGZyb20gYnVmZmVyVmlldywgaWYgcHJvdmlkZWQuXG5cblx0XHRcdHNvdXJjZVVSSSA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIHNvdXJjZS5idWZmZXJWaWV3ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xuXG5cdFx0XHRcdGlzT2JqZWN0VVJMID0gdHJ1ZTtcblx0XHRcdFx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKCBbIGJ1ZmZlclZpZXcgXSwgeyB0eXBlOiBzb3VyY2UubWltZVR5cGUgfSApO1xuXHRcdFx0XHRzb3VyY2VVUkkgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdHJldHVybiBzb3VyY2VVUkk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gZWxzZSBpZiAoIHNvdXJjZS51cmkgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogSW1hZ2UgJyArIHRleHR1cmVJbmRleCArICcgaXMgbWlzc2luZyBVUkkgYW5kIGJ1ZmZlclZpZXcnICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCBzb3VyY2VVUkkgKS50aGVuKCBmdW5jdGlvbiAoIHNvdXJjZVVSSSApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcblxuXHRcdFx0XHRsZXQgb25Mb2FkID0gcmVzb2x2ZTtcblxuXHRcdFx0XHRpZiAoIGxvYWRlci5pc0ltYWdlQml0bWFwTG9hZGVyID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0b25Mb2FkID0gZnVuY3Rpb24gKCBpbWFnZUJpdG1hcCApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKCBpbWFnZUJpdG1hcCApO1xuXHRcdFx0XHRcdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdHJlc29sdmUoIHRleHR1cmUgKTtcblxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxvYWRlci5sb2FkKCByZXNvbHZlVVJMKCBzb3VyY2VVUkksIG9wdGlvbnMucGF0aCApLCBvbkxvYWQsIHVuZGVmaW5lZCwgcmVqZWN0ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdC8vIENsZWFuIHVwIHJlc291cmNlcyBhbmQgY29uZmlndXJlIFRleHR1cmUuXG5cblx0XHRcdGlmICggaXNPYmplY3RVUkwgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTCggc291cmNlVVJJICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoIHRleHR1cmVEZWYubmFtZSApIHRleHR1cmUubmFtZSA9IHRleHR1cmVEZWYubmFtZTtcblxuXHRcdFx0Y29uc3Qgc2FtcGxlcnMgPSBqc29uLnNhbXBsZXJzIHx8IHt9O1xuXHRcdFx0Y29uc3Qgc2FtcGxlciA9IHNhbXBsZXJzWyB0ZXh0dXJlRGVmLnNhbXBsZXIgXSB8fCB7fTtcblxuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBXRUJHTF9GSUxURVJTWyBzYW1wbGVyLm1hZ0ZpbHRlciBdIHx8IExpbmVhckZpbHRlcjtcblx0XHRcdHRleHR1cmUubWluRmlsdGVyID0gV0VCR0xfRklMVEVSU1sgc2FtcGxlci5taW5GaWx0ZXIgXSB8fCBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXI7XG5cdFx0XHR0ZXh0dXJlLndyYXBTID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBTIF0gfHwgUmVwZWF0V3JhcHBpbmc7XG5cdFx0XHR0ZXh0dXJlLndyYXBUID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBUIF0gfHwgUmVwZWF0V3JhcHBpbmc7XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCB0ZXh0dXJlLCB7IHRleHR1cmVzOiB0ZXh0dXJlSW5kZXggfSApO1xuXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHRcdH0gKS5jYXRjaCggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogQ291bGRuXFwndCBsb2FkIHRleHR1cmUnLCBzb3VyY2VVUkkgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy50ZXh0dXJlQ2FjaGVbIGNhY2hlS2V5IF0gPSBwcm9taXNlO1xuXG5cdFx0cmV0dXJuIHByb21pc2U7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBc3luY2hyb25vdXNseSBhc3NpZ25zIGEgdGV4dHVyZSB0byB0aGUgZ2l2ZW4gbWF0ZXJpYWwgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3R9IG1hdGVyaWFsUGFyYW1zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtYXBOYW1lXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtYXBEZWZcblx0ICogQHJldHVybiB7UHJvbWlzZTxUZXh0dXJlPn1cblx0ICovXG5cdGFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCBtYXBOYW1lLCBtYXBEZWYgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ3RleHR1cmUnLCBtYXBEZWYuaW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdC8vIE1hdGVyaWFscyBzYW1wbGUgYW9NYXAgZnJvbSBVViBzZXQgMSBhbmQgb3RoZXIgbWFwcyBmcm9tIFVWIHNldCAwIC0gdGhpcyBjYW4ndCBiZSBjb25maWd1cmVkXG5cdFx0XHQvLyBIb3dldmVyLCB3ZSB3aWxsIGNvcHkgVVYgc2V0IDAgdG8gVVYgc2V0IDEgb24gZGVtYW5kIGZvciBhb01hcFxuXHRcdFx0aWYgKCBtYXBEZWYudGV4Q29vcmQgIT09IHVuZGVmaW5lZCAmJiBtYXBEZWYudGV4Q29vcmQgIT0gMCAmJiAhICggbWFwTmFtZSA9PT0gJ2FvTWFwJyAmJiBtYXBEZWYudGV4Q29vcmQgPT0gMSApICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEN1c3RvbSBVViBzZXQgJyArIG1hcERlZi50ZXhDb29yZCArICcgZm9yIHRleHR1cmUgJyArIG1hcE5hbWUgKyAnIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHBhcnNlci5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdICkge1xuXG5cdFx0XHRcdGNvbnN0IHRyYW5zZm9ybSA9IG1hcERlZi5leHRlbnNpb25zICE9PSB1bmRlZmluZWQgPyBtYXBEZWYuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXSA6IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRpZiAoIHRyYW5zZm9ybSApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGdsdGZSZWZlcmVuY2UgPSBwYXJzZXIuYXNzb2NpYXRpb25zLmdldCggdGV4dHVyZSApO1xuXHRcdFx0XHRcdHRleHR1cmUgPSBwYXJzZXIuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXS5leHRlbmRUZXh0dXJlKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKTtcblx0XHRcdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggdGV4dHVyZSwgZ2x0ZlJlZmVyZW5jZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFBhcmFtc1sgbWFwTmFtZSBdID0gdGV4dHVyZTtcblxuXHRcdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NpZ25zIGZpbmFsIG1hdGVyaWFsIHRvIGEgTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLiBUaGUgaW5zdGFuY2Vcblx0ICogYWxyZWFkeSBoYXMgYSBtYXRlcmlhbCAoZ2VuZXJhdGVkIGZyb20gdGhlIGdsVEYgbWF0ZXJpYWwgb3B0aW9ucyBhbG9uZSlcblx0ICogYnV0IHJldXNlIG9mIHRoZSBzYW1lIGdsVEYgbWF0ZXJpYWwgbWF5IHJlcXVpcmUgbXVsdGlwbGUgdGhyZWVqcyBtYXRlcmlhbHNcblx0ICogdG8gYWNjb21tb2RhdGUgZGlmZmVyZW50IHByaW1pdGl2ZSB0eXBlcywgZGVmaW5lcywgZXRjLiBOZXcgbWF0ZXJpYWxzIHdpbGxcblx0ICogYmUgY3JlYXRlZCBpZiBuZWNlc3NhcnksIGFuZCByZXVzZWQgZnJvbSBhIGNhY2hlLlxuXHQgKiBAcGFyYW0gIHtPYmplY3QzRH0gbWVzaCBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuXG5cdCAqL1xuXHRhc3NpZ25GaW5hbE1hdGVyaWFsKCBtZXNoICkge1xuXG5cdFx0Y29uc3QgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xuXHRcdGxldCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWw7XG5cblx0XHRjb25zdCB1c2VEZXJpdmF0aXZlVGFuZ2VudHMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnRhbmdlbnQgPT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCB1c2VWZXJ0ZXhDb2xvcnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLmNvbG9yICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgdXNlRmxhdFNoYWRpbmcgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbCA9PT0gdW5kZWZpbmVkO1xuXG5cdFx0aWYgKCBtZXNoLmlzUG9pbnRzICkge1xuXG5cdFx0XHRjb25zdCBjYWNoZUtleSA9ICdQb2ludHNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcblxuXHRcdFx0bGV0IHBvaW50c01hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRcdGlmICggISBwb2ludHNNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRwb2ludHNNYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCgpO1xuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBwb2ludHNNYXRlcmlhbCwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwubWFwID0gbWF0ZXJpYWwubWFwO1xuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5zaXplQXR0ZW51YXRpb24gPSBmYWxzZTsgLy8gZ2xURiBzcGVjIHNheXMgcG9pbnRzIHNob3VsZCBiZSAxcHhcblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIHBvaW50c01hdGVyaWFsICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBwb2ludHNNYXRlcmlhbDtcblxuXHRcdH0gZWxzZSBpZiAoIG1lc2guaXNMaW5lICkge1xuXG5cdFx0XHRjb25zdCBjYWNoZUtleSA9ICdMaW5lQmFzaWNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcblxuXHRcdFx0bGV0IGxpbmVNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgbGluZU1hdGVyaWFsICkge1xuXG5cdFx0XHRcdGxpbmVNYXRlcmlhbCA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCgpO1xuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBsaW5lTWF0ZXJpYWwsIG1hdGVyaWFsICk7XG5cdFx0XHRcdGxpbmVNYXRlcmlhbC5jb2xvci5jb3B5KCBtYXRlcmlhbC5jb2xvciApO1xuXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgbGluZU1hdGVyaWFsICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBsaW5lTWF0ZXJpYWw7XG5cblx0XHR9XG5cblx0XHQvLyBDbG9uZSB0aGUgbWF0ZXJpYWwgaWYgaXQgd2lsbCBiZSBtb2RpZmllZFxuXHRcdGlmICggdXNlRGVyaXZhdGl2ZVRhbmdlbnRzIHx8IHVzZVZlcnRleENvbG9ycyB8fCB1c2VGbGF0U2hhZGluZyApIHtcblxuXHRcdFx0bGV0IGNhY2hlS2V5ID0gJ0Nsb25lZE1hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkICsgJzonO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsLmlzR0xURlNwZWN1bGFyR2xvc3NpbmVzc01hdGVyaWFsICkgY2FjaGVLZXkgKz0gJ3NwZWN1bGFyLWdsb3NzaW5lc3M6Jztcblx0XHRcdGlmICggdXNlRGVyaXZhdGl2ZVRhbmdlbnRzICkgY2FjaGVLZXkgKz0gJ2Rlcml2YXRpdmUtdGFuZ2VudHM6Jztcblx0XHRcdGlmICggdXNlVmVydGV4Q29sb3JzICkgY2FjaGVLZXkgKz0gJ3ZlcnRleC1jb2xvcnM6Jztcblx0XHRcdGlmICggdXNlRmxhdFNoYWRpbmcgKSBjYWNoZUtleSArPSAnZmxhdC1zaGFkaW5nOic7XG5cblx0XHRcdGxldCBjYWNoZWRNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgY2FjaGVkTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0Y2FjaGVkTWF0ZXJpYWwgPSBtYXRlcmlhbC5jbG9uZSgpO1xuXG5cdFx0XHRcdGlmICggdXNlVmVydGV4Q29sb3JzICkgY2FjaGVkTWF0ZXJpYWwudmVydGV4Q29sb3JzID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCB1c2VGbGF0U2hhZGluZyApIGNhY2hlZE1hdGVyaWFsLmZsYXRTaGFkaW5nID0gdHJ1ZTtcblxuXHRcdFx0XHRpZiAoIHVzZURlcml2YXRpdmVUYW5nZW50cyApIHtcblxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzExNDM4I2lzc3VlY29tbWVudC01MDcwMDM5OTVcblx0XHRcdFx0XHRpZiAoIGNhY2hlZE1hdGVyaWFsLm5vcm1hbFNjYWxlICkgY2FjaGVkTWF0ZXJpYWwubm9ybWFsU2NhbGUueSAqPSAtIDE7XG5cdFx0XHRcdFx0aWYgKCBjYWNoZWRNYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZSApIGNhY2hlZE1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlLnkgKj0gLSAxO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGNhY2hlZE1hdGVyaWFsICk7XG5cblx0XHRcdFx0dGhpcy5hc3NvY2lhdGlvbnMuc2V0KCBjYWNoZWRNYXRlcmlhbCwgdGhpcy5hc3NvY2lhdGlvbnMuZ2V0KCBtYXRlcmlhbCApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBjYWNoZWRNYXRlcmlhbDtcblxuXHRcdH1cblxuXHRcdC8vIHdvcmthcm91bmRzIGZvciBtZXNoIGFuZCBnZW9tZXRyeVxuXG5cdFx0aWYgKCBtYXRlcmlhbC5hb01hcCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2MiA9PT0gdW5kZWZpbmVkICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKCAndXYyJywgZ2VvbWV0cnkuYXR0cmlidXRlcy51diApO1xuXG5cdFx0fVxuXG5cdFx0bWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIC8qIG1hdGVyaWFsSW5kZXggKi8gKSB7XG5cblx0XHRyZXR1cm4gTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21hdGVyaWFsc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gbWF0ZXJpYWxJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1hdGVyaWFsPn1cblx0ICovXG5cdGxvYWRNYXRlcmlhbCggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0ganNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGxldCBtYXRlcmlhbFR5cGU7XG5cdFx0Y29uc3QgbWF0ZXJpYWxQYXJhbXMgPSB7fTtcblx0XHRjb25zdCBtYXRlcmlhbEV4dGVuc2lvbnMgPSBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8IHt9O1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBtYXRlcmlhbEV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdICkge1xuXG5cdFx0XHRjb25zdCBzZ0V4dGVuc2lvbiA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdO1xuXHRcdFx0bWF0ZXJpYWxUeXBlID0gc2dFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XG5cdFx0XHRwZW5kaW5nLnB1c2goIHNnRXh0ZW5zaW9uLmV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSApO1xuXG5cdFx0fSBlbHNlIGlmICggbWF0ZXJpYWxFeHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQgXSApIHtcblxuXHRcdFx0Y29uc3Qga211RXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUIF07XG5cdFx0XHRtYXRlcmlhbFR5cGUgPSBrbXVFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XG5cdFx0XHRwZW5kaW5nLnB1c2goIGttdUV4dGVuc2lvbi5leHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFNwZWNpZmljYXRpb246XG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbWV0YWxsaWMtcm91Z2huZXNzLW1hdGVyaWFsXG5cblx0XHRcdGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3MgfHwge307XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciApICkge1xuXG5cdFx0XHRcdGNvbnN0IGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5tZXRhbG5lc3MgPSBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgOiAxLjA7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5yb3VnaG5lc3MgPSBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciA6IDEuMDtcblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21ldGFsbmVzc01hcCcsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSApICk7XG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAncm91Z2huZXNzTWFwJywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFR5cGUgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuZ2V0TWF0ZXJpYWxUeXBlICYmIGV4dC5nZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIFByb21pc2UuYWxsKCB0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMgJiYgZXh0LmV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApO1xuXG5cdFx0XHR9ICkgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5kb3VibGVTaWRlZCA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc2lkZSA9IERvdWJsZVNpZGU7XG5cblx0XHR9XG5cblx0XHRjb25zdCBhbHBoYU1vZGUgPSBtYXRlcmlhbERlZi5hbHBoYU1vZGUgfHwgQUxQSEFfTU9ERVMuT1BBUVVFO1xuXG5cdFx0aWYgKCBhbHBoYU1vZGUgPT09IEFMUEhBX01PREVTLkJMRU5EICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc3BhcmVudCA9IHRydWU7XG5cblx0XHRcdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTc3MDZcblx0XHRcdG1hdGVyaWFsUGFyYW1zLmRlcHRoV3JpdGUgPSBmYWxzZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmZvcm1hdCA9IFJHQkZvcm1hdDtcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gZmFsc2U7XG5cblx0XHRcdGlmICggYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5NQVNLICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmFscGhhVGVzdCA9IG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmICE9PSB1bmRlZmluZWQgPyBtYXRlcmlhbERlZi5hbHBoYUN1dG9mZiA6IDAuNTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdub3JtYWxNYXAnLCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICkgKTtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUgPSBuZXcgVmVjdG9yMiggMSwgMSApO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGU7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUuc2V0KCBzY2FsZSwgc2NhbGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdhb01hcCcsIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUgKSApO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5hb01hcEludGVuc2l0eSA9IG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGg7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZSA9IG5ldyBDb2xvcigpLmZyb21BcnJheSggbWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdlbWlzc2l2ZU1hcCcsIG1hdGVyaWFsRGVmLmVtaXNzaXZlVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGxldCBtYXRlcmlhbDtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbFR5cGUgPT09IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF0uY3JlYXRlTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bWF0ZXJpYWwgPSBuZXcgbWF0ZXJpYWxUeXBlKCBtYXRlcmlhbFBhcmFtcyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubmFtZSApIG1hdGVyaWFsLm5hbWUgPSBtYXRlcmlhbERlZi5uYW1lO1xuXG5cdFx0XHQvLyBiYXNlQ29sb3JUZXh0dXJlLCBlbWlzc2l2ZVRleHR1cmUsIGFuZCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlIHVzZSBzUkdCIGVuY29kaW5nLlxuXHRcdFx0aWYgKCBtYXRlcmlhbC5tYXAgKSBtYXRlcmlhbC5tYXAuZW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XG5cdFx0XHRpZiAoIG1hdGVyaWFsLmVtaXNzaXZlTWFwICkgbWF0ZXJpYWwuZW1pc3NpdmVNYXAuZW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG1hdGVyaWFsLCBtYXRlcmlhbERlZiApO1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbWF0ZXJpYWwsIHsgbWF0ZXJpYWxzOiBtYXRlcmlhbEluZGV4IH0gKTtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBtYXRlcmlhbCwgbWF0ZXJpYWxEZWYgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGVyaWFsO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKiogV2hlbiBPYmplY3QzRCBpbnN0YW5jZXMgYXJlIHRhcmdldGVkIGJ5IGFuaW1hdGlvbiwgdGhleSBuZWVkIHVuaXF1ZSBuYW1lcy4gKi9cblx0Y3JlYXRlVW5pcXVlTmFtZSggb3JpZ2luYWxOYW1lICkge1xuXG5cdFx0Y29uc3Qgc2FuaXRpemVkTmFtZSA9IFByb3BlcnR5QmluZGluZy5zYW5pdGl6ZU5vZGVOYW1lKCBvcmlnaW5hbE5hbWUgfHwgJycgKTtcblxuXHRcdGxldCBuYW1lID0gc2FuaXRpemVkTmFtZTtcblxuXHRcdGZvciAoIGxldCBpID0gMTsgdGhpcy5ub2RlTmFtZXNVc2VkWyBuYW1lIF07ICsrIGkgKSB7XG5cblx0XHRcdG5hbWUgPSBzYW5pdGl6ZWROYW1lICsgJ18nICsgaTtcblxuXHRcdH1cblxuXHRcdHRoaXMubm9kZU5hbWVzVXNlZFsgbmFtZSBdID0gdHJ1ZTtcblxuXHRcdHJldHVybiBuYW1lO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNnZW9tZXRyeVxuXHQgKlxuXHQgKiBDcmVhdGVzIEJ1ZmZlckdlb21ldHJpZXMgZnJvbSBwcmltaXRpdmVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5PEdMVEYuUHJpbWl0aXZlPn0gcHJpbWl0aXZlc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PEJ1ZmZlckdlb21ldHJ5Pj59XG5cdCAqL1xuXHRsb2FkR2VvbWV0cmllcyggcHJpbWl0aXZlcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBjYWNoZSA9IHRoaXMucHJpbWl0aXZlQ2FjaGU7XG5cblx0XHRmdW5jdGlvbiBjcmVhdGVEcmFjb1ByaW1pdGl2ZSggcHJpbWl0aXZlICkge1xuXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdXG5cdFx0XHRcdC5kZWNvZGVQcmltaXRpdmUoIHByaW1pdGl2ZSwgcGFyc2VyIClcblx0XHRcdFx0LnRoZW4oIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggZ2VvbWV0cnksIHByaW1pdGl2ZSwgcGFyc2VyICk7XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHByaW1pdGl2ZSA9IHByaW1pdGl2ZXNbIGkgXTtcblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0gY3JlYXRlUHJpbWl0aXZlS2V5KCBwcmltaXRpdmUgKTtcblxuXHRcdFx0Ly8gU2VlIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCB0aGlzIGdlb21ldHJ5XG5cdFx0XHRjb25zdCBjYWNoZWQgPSBjYWNoZVsgY2FjaGVLZXkgXTtcblxuXHRcdFx0aWYgKCBjYWNoZWQgKSB7XG5cblx0XHRcdFx0Ly8gVXNlIHRoZSBjYWNoZWQgZ2VvbWV0cnkgaWYgaXQgZXhpc3RzXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggY2FjaGVkLnByb21pc2UgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRsZXQgZ2VvbWV0cnlQcm9taXNlO1xuXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXSApIHtcblxuXHRcdFx0XHRcdC8vIFVzZSBEUkFDTyBnZW9tZXRyeSBpZiBhdmFpbGFibGVcblx0XHRcdFx0XHRnZW9tZXRyeVByb21pc2UgPSBjcmVhdGVEcmFjb1ByaW1pdGl2ZSggcHJpbWl0aXZlICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZ2VvbWV0cnlcblx0XHRcdFx0XHRnZW9tZXRyeVByb21pc2UgPSBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBuZXcgQnVmZmVyR2VvbWV0cnkoKSwgcHJpbWl0aXZlLCBwYXJzZXIgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2FjaGUgdGhpcyBnZW9tZXRyeVxuXHRcdFx0XHRjYWNoZVsgY2FjaGVLZXkgXSA9IHsgcHJpbWl0aXZlOiBwcmltaXRpdmUsIHByb21pc2U6IGdlb21ldHJ5UHJvbWlzZSB9O1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggZ2VvbWV0cnlQcm9taXNlICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtZXNoZXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1lc2hJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwfE1lc2h8U2tpbm5lZE1lc2g+fVxuXHQgKi9cblx0bG9hZE1lc2goIG1lc2hJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXG5cdFx0Y29uc3QgbWVzaERlZiA9IGpzb24ubWVzaGVzWyBtZXNoSW5kZXggXTtcblx0XHRjb25zdCBwcmltaXRpdmVzID0gbWVzaERlZi5wcmltaXRpdmVzO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IG1hdGVyaWFsID0gcHJpbWl0aXZlc1sgaSBdLm1hdGVyaWFsID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoIHRoaXMuY2FjaGUgKVxuXHRcdFx0XHQ6IHRoaXMuZ2V0RGVwZW5kZW5jeSggJ21hdGVyaWFsJywgcHJpbWl0aXZlc1sgaSBdLm1hdGVyaWFsICk7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggbWF0ZXJpYWwgKTtcblxuXHRcdH1cblxuXHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmxvYWRHZW9tZXRyaWVzKCBwcmltaXRpdmVzICkgKTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICggcmVzdWx0cyApIHtcblxuXHRcdFx0Y29uc3QgbWF0ZXJpYWxzID0gcmVzdWx0cy5zbGljZSggMCwgcmVzdWx0cy5sZW5ndGggLSAxICk7XG5cdFx0XHRjb25zdCBnZW9tZXRyaWVzID0gcmVzdWx0c1sgcmVzdWx0cy5sZW5ndGggLSAxIF07XG5cblx0XHRcdGNvbnN0IG1lc2hlcyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbIGkgXTtcblx0XHRcdFx0Y29uc3QgcHJpbWl0aXZlID0gcHJpbWl0aXZlc1sgaSBdO1xuXG5cdFx0XHRcdC8vIDEuIGNyZWF0ZSBNZXNoXG5cblx0XHRcdFx0bGV0IG1lc2g7XG5cblx0XHRcdFx0Y29uc3QgbWF0ZXJpYWwgPSBtYXRlcmlhbHNbIGkgXTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVTIHx8XG5cdFx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX1NUUklQIHx8XG5cdFx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX0ZBTiB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdC8vIC5pc1NraW5uZWRNZXNoIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnMoKVxuXHRcdFx0XHRcdG1lc2ggPSBtZXNoRGVmLmlzU2tpbm5lZE1lc2ggPT09IHRydWVcblx0XHRcdFx0XHRcdD8gbmV3IFNraW5uZWRNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKVxuXHRcdFx0XHRcdFx0OiBuZXcgTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0XHRpZiAoIG1lc2guaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZSAmJiAhIG1lc2guZ2VvbWV0cnkuYXR0cmlidXRlcy5za2luV2VpZ2h0Lm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHdlIG5vcm1hbGl6ZSBmbG9hdGluZyBwb2ludCBza2luIHdlaWdodCBhcnJheSB0byBmaXggbWFsZm9ybWVkIGFzc2V0cyAoc2VlICMxNTMxOSlcblx0XHRcdFx0XHRcdC8vIGl0J3MgaW1wb3J0YW50IHRvIHNraXAgdGhpcyBmb3Igbm9uLWZsb2F0MzIgZGF0YSBzaW5jZSBub3JtYWxpemVTa2luV2VpZ2h0cyBhc3N1bWVzIG5vbi1ub3JtYWxpemVkIGlucHV0c1xuXHRcdFx0XHRcdFx0bWVzaC5ub3JtYWxpemVTa2luV2VpZ2h0cygpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX1NUUklQICkge1xuXG5cdFx0XHRcdFx0XHRtZXNoLmdlb21ldHJ5ID0gdG9UcmlhbmdsZXNEcmF3TW9kZSggbWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVTdHJpcERyYXdNb2RlICk7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX0ZBTiApIHtcblxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUoIG1lc2guZ2VvbWV0cnksIFRyaWFuZ2xlRmFuRHJhd01vZGUgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVTICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lU2VnbWVudHMoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9TVFJJUCApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZSggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FX0xPT1AgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVMb29wKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlBPSU5UUyApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgUG9pbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogUHJpbWl0aXZlIG1vZGUgdW5zdXBwb3J0ZWQ6ICcgKyBwcmltaXRpdmUubW9kZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIE9iamVjdC5rZXlzKCBtZXNoLmdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyApLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdFx0XHR1cGRhdGVNb3JwaFRhcmdldHMoIG1lc2gsIG1lc2hEZWYgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVzaC5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG1lc2hEZWYubmFtZSB8fCAoICdtZXNoXycgKyBtZXNoSW5kZXggKSApO1xuXG5cdFx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG1lc2gsIG1lc2hEZWYgKTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBtZXNoLCBwcmltaXRpdmUgKTtcblxuXHRcdFx0XHRwYXJzZXIuYXNzaWduRmluYWxNYXRlcmlhbCggbWVzaCApO1xuXG5cdFx0XHRcdG1lc2hlcy5wdXNoKCBtZXNoICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG1lc2hlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbWVzaGVzWyBpIF0sIHtcblx0XHRcdFx0XHRtZXNoZXM6IG1lc2hJbmRleCxcblx0XHRcdFx0XHRwcmltaXRpdmVzOiBpXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1lc2hlcy5sZW5ndGggPT09IDEgKSB7XG5cblx0XHRcdFx0cmV0dXJuIG1lc2hlc1sgMCBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBncm91cCwgeyBtZXNoZXM6IG1lc2hJbmRleCB9ICk7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtZXNoZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Z3JvdXAuYWRkKCBtZXNoZXNbIGkgXSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBncm91cDtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNjYW1lcmFzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLkNhbWVyYT59XG5cdCAqL1xuXHRsb2FkQ2FtZXJhKCBjYW1lcmFJbmRleCApIHtcblxuXHRcdGxldCBjYW1lcmE7XG5cdFx0Y29uc3QgY2FtZXJhRGVmID0gdGhpcy5qc29uLmNhbWVyYXNbIGNhbWVyYUluZGV4IF07XG5cdFx0Y29uc3QgcGFyYW1zID0gY2FtZXJhRGVmWyBjYW1lcmFEZWYudHlwZSBdO1xuXG5cdFx0aWYgKCAhIHBhcmFtcyApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBjYW1lcmEgcGFyYW1ldGVycy4nICk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0XHRpZiAoIGNhbWVyYURlZi50eXBlID09PSAncGVyc3BlY3RpdmUnICkge1xuXG5cdFx0XHRjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoIE1hdGhVdGlscy5yYWRUb0RlZyggcGFyYW1zLnlmb3YgKSwgcGFyYW1zLmFzcGVjdFJhdGlvIHx8IDEsIHBhcmFtcy56bmVhciB8fCAxLCBwYXJhbXMuemZhciB8fCAyZTYgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGNhbWVyYURlZi50eXBlID09PSAnb3J0aG9ncmFwaGljJyApIHtcblxuXHRcdFx0Y2FtZXJhID0gbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYSggLSBwYXJhbXMueG1hZywgcGFyYW1zLnhtYWcsIHBhcmFtcy55bWFnLCAtIHBhcmFtcy55bWFnLCBwYXJhbXMuem5lYXIsIHBhcmFtcy56ZmFyICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGNhbWVyYURlZi5uYW1lICkgY2FtZXJhLm5hbWUgPSB0aGlzLmNyZWF0ZVVuaXF1ZU5hbWUoIGNhbWVyYURlZi5uYW1lICk7XG5cblx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBjYW1lcmEsIGNhbWVyYURlZiApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggY2FtZXJhICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNraW5JbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG5cdCAqL1xuXHRsb2FkU2tpbiggc2tpbkluZGV4ICkge1xuXG5cdFx0Y29uc3Qgc2tpbkRlZiA9IHRoaXMuanNvbi5za2luc1sgc2tpbkluZGV4IF07XG5cblx0XHRjb25zdCBza2luRW50cnkgPSB7IGpvaW50czogc2tpbkRlZi5qb2ludHMgfTtcblxuXHRcdGlmICggc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHNraW5FbnRyeSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcblxuXHRcdFx0c2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMgPSBhY2Nlc3NvcjtcblxuXHRcdFx0cmV0dXJuIHNraW5FbnRyeTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhbmltYXRpb25JbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFuaW1hdGlvbkNsaXA+fVxuXHQgKi9cblx0bG9hZEFuaW1hdGlvbiggYW5pbWF0aW9uSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXG5cdFx0Y29uc3QgYW5pbWF0aW9uRGVmID0ganNvbi5hbmltYXRpb25zWyBhbmltYXRpb25JbmRleCBdO1xuXG5cdFx0Y29uc3QgcGVuZGluZ05vZGVzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ0lucHV0QWNjZXNzb3JzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ091dHB1dEFjY2Vzc29ycyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdTYW1wbGVycyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdUYXJnZXRzID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBjaGFubmVsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzWyBpIF07XG5cdFx0XHRjb25zdCBzYW1wbGVyID0gYW5pbWF0aW9uRGVmLnNhbXBsZXJzWyBjaGFubmVsLnNhbXBsZXIgXTtcblx0XHRcdGNvbnN0IHRhcmdldCA9IGNoYW5uZWwudGFyZ2V0O1xuXHRcdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5ub2RlICE9PSB1bmRlZmluZWQgPyB0YXJnZXQubm9kZSA6IHRhcmdldC5pZDsgLy8gTk9URTogdGFyZ2V0LmlkIGlzIGRlcHJlY2F0ZWQuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5pbnB1dCBdIDogc2FtcGxlci5pbnB1dDtcblx0XHRcdGNvbnN0IG91dHB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5vdXRwdXQgXSA6IHNhbXBsZXIub3V0cHV0O1xuXG5cdFx0XHRwZW5kaW5nTm9kZXMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5hbWUgKSApO1xuXHRcdFx0cGVuZGluZ0lucHV0QWNjZXNzb3JzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgaW5wdXQgKSApO1xuXHRcdFx0cGVuZGluZ091dHB1dEFjY2Vzc29ycy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIG91dHB1dCApICk7XG5cdFx0XHRwZW5kaW5nU2FtcGxlcnMucHVzaCggc2FtcGxlciApO1xuXHRcdFx0cGVuZGluZ1RhcmdldHMucHVzaCggdGFyZ2V0ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb2RlcyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdJbnB1dEFjY2Vzc29ycyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nU2FtcGxlcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nVGFyZ2V0cyApXG5cblx0XHRdICkudGhlbiggZnVuY3Rpb24gKCBkZXBlbmRlbmNpZXMgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVzID0gZGVwZW5kZW5jaWVzWyAwIF07XG5cdFx0XHRjb25zdCBpbnB1dEFjY2Vzc29ycyA9IGRlcGVuZGVuY2llc1sgMSBdO1xuXHRcdFx0Y29uc3Qgb3V0cHV0QWNjZXNzb3JzID0gZGVwZW5kZW5jaWVzWyAyIF07XG5cdFx0XHRjb25zdCBzYW1wbGVycyA9IGRlcGVuZGVuY2llc1sgMyBdO1xuXHRcdFx0Y29uc3QgdGFyZ2V0cyA9IGRlcGVuZGVuY2llc1sgNCBdO1xuXG5cdFx0XHRjb25zdCB0cmFja3MgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IG5vZGUgPSBub2Rlc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBpbnB1dEFjY2Vzc29yID0gaW5wdXRBY2Nlc3NvcnNbIGkgXTtcblx0XHRcdFx0Y29uc3Qgb3V0cHV0QWNjZXNzb3IgPSBvdXRwdXRBY2Nlc3NvcnNbIGkgXTtcblx0XHRcdFx0Y29uc3Qgc2FtcGxlciA9IHNhbXBsZXJzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdFx0XHRpZiAoIG5vZGUgPT09IHVuZGVmaW5lZCApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdG5vZGUudXBkYXRlTWF0cml4KCk7XG5cdFx0XHRcdG5vZGUubWF0cml4QXV0b1VwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0bGV0IFR5cGVkS2V5ZnJhbWVUcmFjaztcblxuXHRcdFx0XHRzd2l0Y2ggKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gKSB7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzOlxuXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBOdW1iZXJLZXlmcmFtZVRyYWNrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5yb3RhdGlvbjpcblxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gUXVhdGVybmlvbktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnBvc2l0aW9uOlxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnNjYWxlOlxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IFZlY3RvcktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdGFyZ2V0TmFtZSA9IG5vZGUubmFtZSA/IG5vZGUubmFtZSA6IG5vZGUudXVpZDtcblxuXHRcdFx0XHRjb25zdCBpbnRlcnBvbGF0aW9uID0gc2FtcGxlci5pbnRlcnBvbGF0aW9uICE9PSB1bmRlZmluZWQgPyBJTlRFUlBPTEFUSU9OWyBzYW1wbGVyLmludGVycG9sYXRpb24gXSA6IEludGVycG9sYXRlTGluZWFyO1xuXG5cdFx0XHRcdGNvbnN0IHRhcmdldE5hbWVzID0gW107XG5cblx0XHRcdFx0aWYgKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gPT09IFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzICkge1xuXG5cdFx0XHRcdFx0Ly8gTm9kZSBtYXkgYmUgYSBHcm91cCAoZ2xURiBtZXNoIHdpdGggc2V2ZXJhbCBwcmltaXRpdmVzKSBvciBhIE1lc2guXG5cdFx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggb2JqZWN0LmlzTWVzaCA9PT0gdHJ1ZSAmJiBvYmplY3QubW9ycGhUYXJnZXRJbmZsdWVuY2VzICkge1xuXG5cdFx0XHRcdFx0XHRcdHRhcmdldE5hbWVzLnB1c2goIG9iamVjdC5uYW1lID8gb2JqZWN0Lm5hbWUgOiBvYmplY3QudXVpZCApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHRhcmdldE5hbWVzLnB1c2goIHRhcmdldE5hbWUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IG91dHB1dEFycmF5ID0gb3V0cHV0QWNjZXNzb3IuYXJyYXk7XG5cblx0XHRcdFx0aWYgKCBvdXRwdXRBY2Nlc3Nvci5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIG91dHB1dEFycmF5LmNvbnN0cnVjdG9yICk7XG5cdFx0XHRcdFx0Y29uc3Qgc2NhbGVkID0gbmV3IEZsb2F0MzJBcnJheSggb3V0cHV0QXJyYXkubGVuZ3RoICk7XG5cblx0XHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gb3V0cHV0QXJyYXkubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRcdHNjYWxlZFsgaiBdID0gb3V0cHV0QXJyYXlbIGogXSAqIHNjYWxlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3V0cHV0QXJyYXkgPSBzY2FsZWQ7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIGxldCBqID0gMCwgamwgPSB0YXJnZXROYW1lcy5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHRyYWNrID0gbmV3IFR5cGVkS2V5ZnJhbWVUcmFjayhcblx0XHRcdFx0XHRcdHRhcmdldE5hbWVzWyBqIF0gKyAnLicgKyBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0sXG5cdFx0XHRcdFx0XHRpbnB1dEFjY2Vzc29yLmFycmF5LFxuXHRcdFx0XHRcdFx0b3V0cHV0QXJyYXksXG5cdFx0XHRcdFx0XHRpbnRlcnBvbGF0aW9uXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdC8vIE92ZXJyaWRlIGludGVycG9sYXRpb24gd2l0aCBjdXN0b20gZmFjdG9yeSBtZXRob2QuXG5cdFx0XHRcdFx0aWYgKCBzYW1wbGVyLmludGVycG9sYXRpb24gPT09ICdDVUJJQ1NQTElORScgKSB7XG5cblx0XHRcdFx0XHRcdHRyYWNrLmNyZWF0ZUludGVycG9sYW50ID0gZnVuY3Rpb24gSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lKCByZXN1bHQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBDVUJJQ1NQTElORSBrZXlmcmFtZSBpbiBnbFRGIGhhcyB0aHJlZSBvdXRwdXQgdmFsdWVzIGZvciBlYWNoIGlucHV0IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHQvLyByZXByZXNlbnRpbmcgaW5UYW5nZW50LCBzcGxpbmVWZXJ0ZXgsIGFuZCBvdXRUYW5nZW50LiBBcyBhIHJlc3VsdCwgdHJhY2suZ2V0VmFsdWVTaXplKClcblx0XHRcdFx0XHRcdFx0Ly8gbXVzdCBiZSBkaXZpZGVkIGJ5IHRocmVlIHRvIGdldCB0aGUgaW50ZXJwb2xhbnQncyBzYW1wbGVTaXplIGFyZ3VtZW50LlxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGludGVycG9sYW50VHlwZSA9ICggdGhpcyBpbnN0YW5jZW9mIFF1YXRlcm5pb25LZXlmcmFtZVRyYWNrICkgPyBHTFRGQ3ViaWNTcGxpbmVRdWF0ZXJuaW9uSW50ZXJwb2xhbnQgOiBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudDtcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IGludGVycG9sYW50VHlwZSggdGhpcy50aW1lcywgdGhpcy52YWx1ZXMsIHRoaXMuZ2V0VmFsdWVTaXplKCkgLyAzLCByZXN1bHQgKTtcblxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0Ly8gTWFyayBhcyBDVUJJQ1NQTElORS4gYHRyYWNrLmdldEludGVycG9sYXRpb24oKWAgZG9lc24ndCBzdXBwb3J0IGN1c3RvbSBpbnRlcnBvbGFudHMuXG5cdFx0XHRcdFx0XHR0cmFjay5jcmVhdGVJbnRlcnBvbGFudC5pc0ludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSA9IHRydWU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0cmFja3MucHVzaCggdHJhY2sgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbmFtZSA9IGFuaW1hdGlvbkRlZi5uYW1lID8gYW5pbWF0aW9uRGVmLm5hbWUgOiAnYW5pbWF0aW9uXycgKyBhbmltYXRpb25JbmRleDtcblxuXHRcdFx0cmV0dXJuIG5ldyBBbmltYXRpb25DbGlwKCBuYW1lLCB1bmRlZmluZWQsIHRyYWNrcyApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHRjcmVhdGVOb2RlTWVzaCggbm9kZUluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdGlmICggbm9kZURlZi5tZXNoID09PSB1bmRlZmluZWQgKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ21lc2gnLCBub2RlRGVmLm1lc2ggKS50aGVuKCBmdW5jdGlvbiAoIG1lc2ggKSB7XG5cblx0XHRcdGNvbnN0IG5vZGUgPSBwYXJzZXIuX2dldE5vZGVSZWYoIHBhcnNlci5tZXNoQ2FjaGUsIG5vZGVEZWYubWVzaCwgbWVzaCApO1xuXG5cdFx0XHQvLyBpZiB3ZWlnaHRzIGFyZSBwcm92aWRlZCBvbiB0aGUgbm9kZSwgb3ZlcnJpZGUgd2VpZ2h0cyBvbiB0aGUgbWVzaC5cblx0XHRcdGlmICggbm9kZURlZi53ZWlnaHRzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvICkge1xuXG5cdFx0XHRcdFx0aWYgKCAhIG8uaXNNZXNoICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVEZWYud2VpZ2h0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRcdFx0by5tb3JwaFRhcmdldEluZmx1ZW5jZXNbIGkgXSA9IG5vZGVEZWYud2VpZ2h0c1sgaSBdO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNub2Rlcy1hbmQtaGllcmFyY2h5XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QzRD59XG5cdCAqL1xuXHRsb2FkTm9kZSggbm9kZUluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHQvLyByZXNlcnZlIG5vZGUncyBuYW1lIGJlZm9yZSBpdHMgZGVwZW5kZW5jaWVzLCBzbyB0aGUgcm9vdCBoYXMgdGhlIGludGVuZGVkIG5hbWUuXG5cdFx0Y29uc3Qgbm9kZU5hbWUgPSBub2RlRGVmLm5hbWUgPyBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbm9kZURlZi5uYW1lICkgOiAnJztcblxuXHRcdHJldHVybiAoIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0XHRjb25zdCBtZXNoUHJvbWlzZSA9IHBhcnNlci5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmNyZWF0ZU5vZGVNZXNoICYmIGV4dC5jcmVhdGVOb2RlTWVzaCggbm9kZUluZGV4ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0aWYgKCBtZXNoUHJvbWlzZSApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIG1lc2hQcm9taXNlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBub2RlRGVmLmNhbWVyYSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdjYW1lcmEnLCBub2RlRGVmLmNhbWVyYSApLnRoZW4oIGZ1bmN0aW9uICggY2FtZXJhICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlci5fZ2V0Tm9kZVJlZiggcGFyc2VyLmNhbWVyYUNhY2hlLCBub2RlRGVmLmNhbWVyYSwgY2FtZXJhICk7XG5cblx0XHRcdFx0fSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cGFyc2VyLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuY3JlYXRlTm9kZUF0dGFjaG1lbnQgJiYgZXh0LmNyZWF0ZU5vZGVBdHRhY2htZW50KCBub2RlSW5kZXggKTtcblxuXHRcdFx0fSApLmZvckVhY2goIGZ1bmN0aW9uICggcHJvbWlzZSApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHByb21pc2UgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHRcdH0oKSApLnRoZW4oIGZ1bmN0aW9uICggb2JqZWN0cyApIHtcblxuXHRcdFx0bGV0IG5vZGU7XG5cblx0XHRcdC8vIC5pc0JvbmUgaXNuJ3QgaW4gZ2xURiBzcGVjLiBTZWUgLl9tYXJrRGVmc1xuXHRcdFx0aWYgKCBub2RlRGVmLmlzQm9uZSA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRub2RlID0gbmV3IEJvbmUoKTtcblxuXHRcdFx0fSBlbHNlIGlmICggb2JqZWN0cy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHRcdG5vZGUgPSBuZXcgR3JvdXAoKTtcblxuXHRcdFx0fSBlbHNlIGlmICggb2JqZWN0cy5sZW5ndGggPT09IDEgKSB7XG5cblx0XHRcdFx0bm9kZSA9IG9iamVjdHNbIDAgXTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRub2RlID0gbmV3IE9iamVjdDNEKCk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBub2RlICE9PSBvYmplY3RzWyAwIF0gKSB7XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG9iamVjdHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRub2RlLmFkZCggb2JqZWN0c1sgaSBdICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5uYW1lICkge1xuXG5cdFx0XHRcdG5vZGUudXNlckRhdGEubmFtZSA9IG5vZGVEZWYubmFtZTtcblx0XHRcdFx0bm9kZS5uYW1lID0gbm9kZU5hbWU7XG5cblx0XHRcdH1cblxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbm9kZSwgbm9kZURlZiApO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbm9kZSwgbm9kZURlZiApO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYubWF0cml4ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeDQoKTtcblx0XHRcdFx0bWF0cml4LmZyb21BcnJheSggbm9kZURlZi5tYXRyaXggKTtcblx0XHRcdFx0bm9kZS5hcHBseU1hdHJpeDQoIG1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggbm9kZURlZi50cmFuc2xhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bm9kZS5wb3NpdGlvbi5mcm9tQXJyYXkoIG5vZGVEZWYudHJhbnNsYXRpb24gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBub2RlRGVmLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRub2RlLnF1YXRlcm5pb24uZnJvbUFycmF5KCBub2RlRGVmLnJvdGF0aW9uICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbm9kZURlZi5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bm9kZS5zY2FsZS5mcm9tQXJyYXkoIG5vZGVEZWYuc2NhbGUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhIHBhcnNlci5hc3NvY2lhdGlvbnMuaGFzKCBub2RlICkgKSB7XG5cblx0XHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG5vZGUsIHt9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5nZXQoIG5vZGUgKS5ub2RlcyA9IG5vZGVJbmRleDtcblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2NlbmVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzY2VuZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8R3JvdXA+fVxuXHQgKi9cblx0bG9hZFNjZW5lKCBzY2VuZUluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IHNjZW5lRGVmID0gdGhpcy5qc29uLnNjZW5lc1sgc2NlbmVJbmRleCBdO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cblx0XHQvLyBMb2FkZXIgcmV0dXJucyBHcm91cCwgbm90IFNjZW5lLlxuXHRcdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTgzNDIjaXNzdWVjb21tZW50LTU3ODk4MTE3MlxuXHRcdGNvbnN0IHNjZW5lID0gbmV3IEdyb3VwKCk7XG5cdFx0aWYgKCBzY2VuZURlZi5uYW1lICkgc2NlbmUubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBzY2VuZURlZi5uYW1lICk7XG5cblx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBzY2VuZSwgc2NlbmVEZWYgKTtcblxuXHRcdGlmICggc2NlbmVEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgc2NlbmUsIHNjZW5lRGVmICk7XG5cblx0XHRjb25zdCBub2RlSWRzID0gc2NlbmVEZWYubm9kZXMgfHwgW107XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbm9kZUlkcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBidWlsZE5vZGVIaWVyYXJjaHkoIG5vZGVJZHNbIGkgXSwgc2NlbmUsIGpzb24sIHBhcnNlciApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdC8vIFJlbW92ZXMgZGFuZ2xpbmcgYXNzb2NpYXRpb25zLCBhc3NvY2lhdGlvbnMgdGhhdCByZWZlcmVuY2UgYSBub2RlIHRoYXRcblx0XHRcdC8vIGRpZG4ndCBtYWtlIGl0IGludG8gdGhlIHNjZW5lLlxuXHRcdFx0Y29uc3QgcmVkdWNlQXNzb2NpYXRpb25zID0gKCBub2RlICkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHJlZHVjZWRBc3NvY2lhdGlvbnMgPSBuZXcgTWFwKCk7XG5cblx0XHRcdFx0Zm9yICggY29uc3QgWyBrZXksIHZhbHVlIF0gb2YgcGFyc2VyLmFzc29jaWF0aW9ucyApIHtcblxuXHRcdFx0XHRcdGlmICgga2V5IGluc3RhbmNlb2YgTWF0ZXJpYWwgfHwga2V5IGluc3RhbmNlb2YgVGV4dHVyZSApIHtcblxuXHRcdFx0XHRcdFx0cmVkdWNlZEFzc29jaWF0aW9ucy5zZXQoIGtleSwgdmFsdWUgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bm9kZS50cmF2ZXJzZSggKCBub2RlICkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgbWFwcGluZ3MgPSBwYXJzZXIuYXNzb2NpYXRpb25zLmdldCggbm9kZSApO1xuXG5cdFx0XHRcdFx0aWYgKCBtYXBwaW5ncyAhPSBudWxsICkge1xuXG5cdFx0XHRcdFx0XHRyZWR1Y2VkQXNzb2NpYXRpb25zLnNldCggbm9kZSwgbWFwcGluZ3MgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0cmV0dXJuIHJlZHVjZWRBc3NvY2lhdGlvbnM7XG5cblx0XHRcdH07XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMgPSByZWR1Y2VBc3NvY2lhdGlvbnMoIHNjZW5lICk7XG5cblx0XHRcdHJldHVybiBzY2VuZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cbn1cblxuZnVuY3Rpb24gYnVpbGROb2RlSGllcmFyY2h5KCBub2RlSWQsIHBhcmVudE9iamVjdCwganNvbiwgcGFyc2VyICkge1xuXG5cdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSWQgXTtcblxuXHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdub2RlJywgbm9kZUlkICkudGhlbiggZnVuY3Rpb24gKCBub2RlICkge1xuXG5cdFx0aWYgKCBub2RlRGVmLnNraW4gPT09IHVuZGVmaW5lZCApIHJldHVybiBub2RlO1xuXG5cdFx0Ly8gYnVpbGQgc2tlbGV0b24gaGVyZSBhcyB3ZWxsXG5cblx0XHRsZXQgc2tpbkVudHJ5O1xuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnc2tpbicsIG5vZGVEZWYuc2tpbiApLnRoZW4oIGZ1bmN0aW9uICggc2tpbiApIHtcblxuXHRcdFx0c2tpbkVudHJ5ID0gc2tpbjtcblxuXHRcdFx0Y29uc3QgcGVuZGluZ0pvaW50cyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gc2tpbkVudHJ5LmpvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRwZW5kaW5nSm9pbnRzLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbm9kZScsIHNraW5FbnRyeS5qb2ludHNbIGkgXSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nSm9pbnRzICk7XG5cblx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCBqb2ludE5vZGVzICkge1xuXG5cdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG1lc2ggKSB7XG5cblx0XHRcdFx0aWYgKCAhIG1lc2guaXNNZXNoICkgcmV0dXJuO1xuXG5cdFx0XHRcdGNvbnN0IGJvbmVzID0gW107XG5cdFx0XHRcdGNvbnN0IGJvbmVJbnZlcnNlcyA9IFtdO1xuXG5cdFx0XHRcdGZvciAoIGxldCBqID0gMCwgamwgPSBqb2ludE5vZGVzLmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3Qgam9pbnROb2RlID0gam9pbnROb2Rlc1sgaiBdO1xuXG5cdFx0XHRcdFx0aWYgKCBqb2ludE5vZGUgKSB7XG5cblx0XHRcdFx0XHRcdGJvbmVzLnB1c2goIGpvaW50Tm9kZSApO1xuXG5cdFx0XHRcdFx0XHRjb25zdCBtYXQgPSBuZXcgTWF0cml4NCgpO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0bWF0LmZyb21BcnJheSggc2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMuYXJyYXksIGogKiAxNiApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJvbmVJbnZlcnNlcy5wdXNoKCBtYXQgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEpvaW50IFwiJXNcIiBjb3VsZCBub3QgYmUgZm91bmQuJywgc2tpbkVudHJ5LmpvaW50c1sgaiBdICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lc2guYmluZCggbmV3IFNrZWxldG9uKCBib25lcywgYm9uZUludmVyc2VzICksIG1lc2gubWF0cml4V29ybGQgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdH0gKTtcblxuXHR9ICkudGhlbiggZnVuY3Rpb24gKCBub2RlICkge1xuXG5cdFx0Ly8gYnVpbGQgbm9kZSBoaWVyYWNoeVxuXG5cdFx0cGFyZW50T2JqZWN0LmFkZCggbm9kZSApO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBub2RlRGVmLmNoaWxkcmVuICkge1xuXG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IG5vZGVEZWYuY2hpbGRyZW47XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBjaGlsZCA9IGNoaWxkcmVuWyBpIF07XG5cdFx0XHRcdHBlbmRpbmcucHVzaCggYnVpbGROb2RlSGllcmFyY2h5KCBjaGlsZCwgbm9kZSwganNvbiwgcGFyc2VyICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fSApO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7R0xURi5QcmltaXRpdmV9IHByaW1pdGl2ZURlZlxuICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUJvdW5kcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICkge1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmVEZWYuYXR0cmlidXRlcztcblxuXHRjb25zdCBib3ggPSBuZXcgQm94MygpO1xuXG5cdGlmICggYXR0cmlidXRlcy5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuanNvbi5hY2Nlc3NvcnNbIGF0dHJpYnV0ZXMuUE9TSVRJT04gXTtcblxuXHRcdGNvbnN0IG1pbiA9IGFjY2Vzc29yLm1pbjtcblx0XHRjb25zdCBtYXggPSBhY2Nlc3Nvci5tYXg7XG5cblx0XHQvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxuXG5cdFx0aWYgKCBtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ym94LnNldChcblx0XHRcdFx0bmV3IFZlY3RvcjMoIG1pblsgMCBdLCBtaW5bIDEgXSwgbWluWyAyIF0gKSxcblx0XHRcdFx0bmV3IFZlY3RvcjMoIG1heFsgMCBdLCBtYXhbIDEgXSwgbWF4WyAyIF0gKVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBhY2Nlc3Nvci5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGJveFNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgXSApO1xuXHRcdFx0XHRib3gubWluLm11bHRpcGx5U2NhbGFyKCBib3hTY2FsZSApO1xuXHRcdFx0XHRib3gubWF4Lm11bHRpcGx5U2NhbGFyKCBib3hTY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIG1pbi9tYXggcHJvcGVydGllcyBmb3IgYWNjZXNzb3IgUE9TSVRJT04uJyApO1xuXG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Y29uc3QgdGFyZ2V0cyA9IHByaW1pdGl2ZURlZi50YXJnZXRzO1xuXG5cdGlmICggdGFyZ2V0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Y29uc3QgbWF4RGlzcGxhY2VtZW50ID0gbmV3IFZlY3RvcjMoKTtcblx0XHRjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdFx0aWYgKCB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBhY2Nlc3NvciA9IHBhcnNlci5qc29uLmFjY2Vzc29yc1sgdGFyZ2V0LlBPU0lUSU9OIF07XG5cdFx0XHRcdGNvbnN0IG1pbiA9IGFjY2Vzc29yLm1pbjtcblx0XHRcdFx0Y29uc3QgbWF4ID0gYWNjZXNzb3IubWF4O1xuXG5cdFx0XHRcdC8vIGdsVEYgcmVxdWlyZXMgJ21pbicgYW5kICdtYXgnLCBidXQgVlJNICh3aGljaCBleHRlbmRzIGdsVEYpIGN1cnJlbnRseSBpZ25vcmVzIHRoYXQgcmVxdWlyZW1lbnQuXG5cblx0XHRcdFx0aWYgKCBtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdC8vIHdlIG5lZWQgdG8gZ2V0IG1heCBvZiBhYnNvbHV0ZSBjb21wb25lbnRzIGJlY2F1c2UgdGFyZ2V0IHdlaWdodCBpcyBbLTEsMV1cblx0XHRcdFx0XHR2ZWN0b3Iuc2V0WCggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDAgXSApLCBNYXRoLmFicyggbWF4WyAwIF0gKSApICk7XG5cdFx0XHRcdFx0dmVjdG9yLnNldFkoIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAxIF0gKSwgTWF0aC5hYnMoIG1heFsgMSBdICkgKSApO1xuXHRcdFx0XHRcdHZlY3Rvci5zZXRaKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMiBdICksIE1hdGguYWJzKCBtYXhbIDIgXSApICkgKTtcblxuXG5cdFx0XHRcdFx0aWYgKCBhY2Nlc3Nvci5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBib3hTY2FsZSA9IGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3Nvci5jb21wb25lbnRUeXBlIF0gKTtcblx0XHRcdFx0XHRcdHZlY3Rvci5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE5vdGU6IHRoaXMgYXNzdW1lcyB0aGF0IHRoZSBzdW0gb2YgYWxsIHdlaWdodHMgaXMgYXQgbW9zdCAxLiBUaGlzIGlzbid0IHF1aXRlIGNvcnJlY3QgLSBpdCdzIG1vcmUgY29uc2VydmF0aXZlXG5cdFx0XHRcdFx0Ly8gdG8gYXNzdW1lIHRoYXQgZWFjaCB0YXJnZXQgY2FuIGhhdmUgYSBtYXggd2VpZ2h0IG9mIDEuIEhvd2V2ZXIsIGZvciBzb21lIHVzZSBjYXNlcyAtIG5vdGFibHksIHdoZW4gbW9ycGggdGFyZ2V0c1xuXHRcdFx0XHRcdC8vIGFyZSB1c2VkIHRvIGltcGxlbWVudCBrZXktZnJhbWUgYW5pbWF0aW9ucyBhbmQgYXMgc3VjaCBvbmx5IHR3byBhcmUgYWN0aXZlIGF0IGEgdGltZSAtIHRoaXMgcmVzdWx0cyBpbiB2ZXJ5IGxhcmdlXG5cdFx0XHRcdFx0Ly8gYm94ZXMuIFNvIGZvciBub3cgd2UgbWFrZSBhIGJveCB0aGF0J3Mgc29tZXRpbWVzIGEgdG91Y2ggdG9vIHNtYWxsIGJ1dCBpcyBob3BlZnVsbHkgbW9zdGx5IG9mIHJlYXNvbmFibGUgc2l6ZS5cblx0XHRcdFx0XHRtYXhEaXNwbGFjZW1lbnQubWF4KCB2ZWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIEFzIHBlciBjb21tZW50IGFib3ZlIHRoaXMgYm94IGlzbid0IGNvbnNlcnZhdGl2ZSwgYnV0IGhhcyBhIHJlYXNvbmFibGUgc2l6ZSBmb3IgYSB2ZXJ5IGxhcmdlIG51bWJlciBvZiBtb3JwaCB0YXJnZXRzLlxuXHRcdGJveC5leHBhbmRCeVZlY3RvciggbWF4RGlzcGxhY2VtZW50ICk7XG5cblx0fVxuXG5cdGdlb21ldHJ5LmJvdW5kaW5nQm94ID0gYm94O1xuXG5cdGNvbnN0IHNwaGVyZSA9IG5ldyBTcGhlcmUoKTtcblxuXHRib3guZ2V0Q2VudGVyKCBzcGhlcmUuY2VudGVyICk7XG5cdHNwaGVyZS5yYWRpdXMgPSBib3gubWluLmRpc3RhbmNlVG8oIGJveC5tYXggKSAvIDI7XG5cblx0Z2VvbWV0cnkuYm91bmRpbmdTcGhlcmUgPSBzcGhlcmU7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtHTFRGLlByaW1pdGl2ZX0gcHJpbWl0aXZlRGVmXG4gKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxuICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJHZW9tZXRyeT59XG4gKi9cbmZ1bmN0aW9uIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGFzc2lnbkF0dHJpYnV0ZUFjY2Vzc29yKCBhY2Nlc3NvckluZGV4LCBhdHRyaWJ1dGVOYW1lICkge1xuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBhY2Nlc3NvckluZGV4IClcblx0XHRcdC50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xuXG5cdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggYXR0cmlidXRlTmFtZSwgYWNjZXNzb3IgKTtcblxuXHRcdFx0fSApO1xuXG5cdH1cblxuXHRmb3IgKCBjb25zdCBnbHRmQXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzICkge1xuXG5cdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgZ2x0ZkF0dHJpYnV0ZU5hbWUgXSB8fCBnbHRmQXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gU2tpcCBhdHRyaWJ1dGVzIGFscmVhZHkgcHJvdmlkZWQgYnkgZS5nLiBEcmFjbyBleHRlbnNpb24uXG5cdFx0aWYgKCB0aHJlZUF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIGNvbnRpbnVlO1xuXG5cdFx0cGVuZGluZy5wdXNoKCBhc3NpZ25BdHRyaWJ1dGVBY2Nlc3NvciggYXR0cmlidXRlc1sgZ2x0ZkF0dHJpYnV0ZU5hbWUgXSwgdGhyZWVBdHRyaWJ1dGVOYW1lICkgKTtcblxuXHR9XG5cblx0aWYgKCBwcmltaXRpdmVEZWYuaW5kaWNlcyAhPT0gdW5kZWZpbmVkICYmICEgZ2VvbWV0cnkuaW5kZXggKSB7XG5cblx0XHRjb25zdCBhY2Nlc3NvciA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBwcmltaXRpdmVEZWYuaW5kaWNlcyApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XG5cblx0XHRcdGdlb21ldHJ5LnNldEluZGV4KCBhY2Nlc3NvciApO1xuXG5cdFx0fSApO1xuXG5cdFx0cGVuZGluZy5wdXNoKCBhY2Nlc3NvciApO1xuXG5cdH1cblxuXHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmICk7XG5cblx0Y29tcHV0ZUJvdW5kcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHByaW1pdGl2ZURlZi50YXJnZXRzICE9PSB1bmRlZmluZWRcblx0XHRcdD8gYWRkTW9ycGhUYXJnZXRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLnRhcmdldHMsIHBhcnNlciApXG5cdFx0XHQ6IGdlb21ldHJ5O1xuXG5cdH0gKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge051bWJlcn0gZHJhd01vZGVcbiAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5fVxuICovXG5mdW5jdGlvbiB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBnZW9tZXRyeSwgZHJhd01vZGUgKSB7XG5cblx0bGV0IGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcblxuXHQvLyBnZW5lcmF0ZSBpbmRleCBpZiBub3QgcHJlc2VudFxuXG5cdGlmICggaW5kZXggPT09IG51bGwgKSB7XG5cblx0XHRjb25zdCBpbmRpY2VzID0gW107XG5cblx0XHRjb25zdCBwb3NpdGlvbiA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xuXG5cdFx0aWYgKCBwb3NpdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbi5jb3VudDsgaSArKyApIHtcblxuXHRcdFx0XHRpbmRpY2VzLnB1c2goIGkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRnZW9tZXRyeS5zZXRJbmRleCggaW5kaWNlcyApO1xuXHRcdFx0aW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkdMVEZMb2FkZXIudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmRlZmluZWQgcG9zaXRpb24gYXR0cmlidXRlLiBQcm9jZXNzaW5nIG5vdCBwb3NzaWJsZS4nICk7XG5cdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cblx0Y29uc3QgbnVtYmVyT2ZUcmlhbmdsZXMgPSBpbmRleC5jb3VudCAtIDI7XG5cdGNvbnN0IG5ld0luZGljZXMgPSBbXTtcblxuXHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZUZhbkRyYXdNb2RlICkge1xuXG5cdFx0Ly8gZ2wuVFJJQU5HTEVfRkFOXG5cblx0XHRmb3IgKCBsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XG5cblx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggMCApICk7XG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xuXHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIGdsLlRSSUFOR0xFX1NUUklQXG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcblxuXHRcdFx0aWYgKCBpICUgMiA9PT0gMCApIHtcblxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XG5cblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0aWYgKCAoIG5ld0luZGljZXMubGVuZ3RoIC8gMyApICE9PSBudW1iZXJPZlRyaWFuZ2xlcyApIHtcblxuXHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5hYmxlIHRvIGdlbmVyYXRlIGNvcnJlY3QgYW1vdW50IG9mIHRyaWFuZ2xlcy4nICk7XG5cblx0fVxuXG5cdC8vIGJ1aWxkIGZpbmFsIGdlb21ldHJ5XG5cblx0Y29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpO1xuXHRuZXdHZW9tZXRyeS5zZXRJbmRleCggbmV3SW5kaWNlcyApO1xuXG5cdHJldHVybiBuZXdHZW9tZXRyeTtcblxufVxuXG5leHBvcnQgeyBHTFRGTG9hZGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2NlbmVSZW5kZXJlclRKUyBmcm9tIFwiLi9TY2VuZVJlbmRlcmVyVEpTXCI7XG5pbXBvcnQgTkZUYWRkVEpTIGZyb20gXCIuL21hcmtlcm1lZGlhL05GVGFkZFRKU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7IFNjZW5lUmVuZGVyZXJUSlMsIE5GVGFkZFRKUyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9