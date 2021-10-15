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

    this.version = "0.3.1";
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
/* harmony import */ var _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SceneRendererTJS */ "./src/SceneRendererTJS.ts");







var NFTaddTJS = /*#__PURE__*/function () {
  function NFTaddTJS(uuid) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NFTaddTJS);

    this.entities = [];
    this.scene = _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_5__["default"].getGlobalScene();
    this.target = window || __webpack_require__.g;
    this.uuid = uuid;
    this.names = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NFTaddTJS, [{
    key: "add",
    value: function add(mesh, name, objVisibility) {
      this.target.addEventListener("getNFTData-" + this.uuid + "-" + name, function (ev) {
        var msg = ev.detail;
        mesh.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        mesh.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      root.matrixAutoUpdate = false;
      this.scene.add(root);
      root.add(mesh);
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        mesh.visible = true;
        var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        mesh.visible = objVisibility;
      });
      this.names.push(name);
      this.entities.push({
        name: name,
        mesh: mesh
      });
    }
  }, {
    key: "addModel",
    value: function addModel(url, name, x, y, z, scale, objVisibility) {
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      root.matrixAutoUpdate = false;
      this.scene.add(root);
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;
        model.scale.set(scale, scale, scale);
        model.rotation.x = Math.PI / 2;
        model.position.x = x;
        model.position.y = y;
        model.position.z = z;
        root.add(model);
      });
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        model.visible = true;
        var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
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
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      root.matrixAutoUpdate = false;
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
        var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
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
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      root.matrixAutoUpdate = false;
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
        var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
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
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDhDQUE4QywwQ0FBTzs7QUFFckQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUMsd0NBQUs7O0FBRTVDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFF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QTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0Isb0JBQW9COztBQUV4Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzREFBbUI7O0FBRXRDOztBQUVBLG1CQUFtQix3QkFBd0I7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBLG1CQUFtQix1QkFBdUI7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFc0I7Ozs7Ozs7VUM1ckl0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSxpRUFBZTtBQUFFLGtCQUFnQixFQUFoQix5REFBRjtBQUFvQixXQUFTLEVBQVQsOERBQVM7QUFBN0IsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvU2NlbmVSZW5kZXJlclRKUy50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvbWFya2VybWVkaWEvTkZUYWRkVEpTLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy91dGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvZXh0ZXJuYWwgdW1kIHtcImNvbW1vbmpzXCI6XCJ0aHJlZVwiLFwiY29tbW9uanMyXCI6XCJ0aHJlZVwiLFwiYW1kXCI6XCJ0aHJlZVwiLFwicm9vdFwiOlwiVEhSRUVcIn0iLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInRocmVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFSbmZ0VGhyZWVqc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBUm5mdFRocmVlanNcIl0gPSBmYWN0b3J5KHJvb3RbXCJUSFJFRVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RocmVlX18pIHtcbnJldHVybiAiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvVXRpbHNcIjtcblxuaW50ZXJmYWNlIENvbmZpZ0RhdGEge1xuICAgIGNhbWVyYToge1xuICAgICAgICBmYXI6IG51bWJlcjtcbiAgICAgICAgZm92OiBudW1iZXI7XG4gICAgICAgIG1hdHJpeEF1dG9VcGRhdGU6IGJvb2xlYW47XG4gICAgICAgIG5lYXI6IG51bWJlcjtcbiAgICAgICAgcmF0aW86IG51bWJlcjtcbiAgICB9O1xuICAgIHJlbmRlcmVyOiB7XG4gICAgICAgIGFscGhhOiBib29sZWFuO1xuICAgICAgICBhbnRpYWxpYXM6IGJvb2xlYW47XG4gICAgICAgIGNvbnRleHQ6IGFueTtcbiAgICAgICAgZGVwdGg6IGJvb2xlYW47XG4gICAgICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXI6IGJvb2xlYW47XG4gICAgICAgIHByZWNpc2lvbjogc3RyaW5nO1xuICAgICAgICBzdGVuY2lsOiBib29sZWFuO1xuICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGJvb2xlYW47XG4gICAgICAgIG9ialZpc2liaWxpdHk6IGJvb2xlYW47XG4gICAgfTtcbn1cblxuaW50ZXJmYWNlIFJvb3QgZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG4gICAgLy9tYXRyaXg6IG9iamVjdFxufVxuXG5pbnRlcmZhY2UgUmVuZGVyZXIge1xuICAgIHJlbmRlcjogKHNjZW5lOiBUSFJFRS5TY2VuZSwgY2FtZXJhOiBUSFJFRS5DYW1lcmEpID0+IHZvaWQ7XG4gICAgc2V0UGl4ZWxSYXRpbzogKHBpeGVsUmF0aW86IG51bWJlcikgPT4gdm9pZDtcbiAgICBzZXRTaXplOiAodzogbnVtYmVyLCBoOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDYW1lcmEgZXh0ZW5kcyBUSFJFRS5DYW1lcmEge1xuICAgIG1hdHJpeEF1dG9VcGRhdGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTY2VuZSBleHRlbmRzIFRIUkVFLlNjZW5lIHtcbiAgICBhZGQ6IChub2RlOiBUSFJFRS5PYmplY3QzRCkgPT4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVSZW5kZXJlclRKUyB7XG4gICAgcHVibGljIGNhbnZhc19kcmF3OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhO1xuICAgIHByaXZhdGUgY29uZmlnRGF0YTogQ29uZmlnRGF0YTtcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyO1xuICAgIHByaXZhdGUgdXVpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcm9vdDogUm9vdDtcbiAgICBwcml2YXRlIHRhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgcHJpdmF0ZSBzY2VuZTogU2NlbmU7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2xvYmFsU2NlbmU6IFNjZW5lO1xuICAgIHByaXZhdGUgdmVyc2lvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnRGF0YTogQ29uZmlnRGF0YSwgY2FudmFzRHJhdzogSFRNTENhbnZhc0VsZW1lbnQsIHV1aWQ6IHN0cmluZywgY2FtZXJhQm9vbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNvbmZpZ0RhdGEgPSBjb25maWdEYXRhO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHdpbmRvdyB8fCBnbG9iYWw7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBjYW52YXM6IGNhbnZhc0RyYXcsXG4gICAgICAgICAgICBjb250ZXh0OiBjb25maWdEYXRhLnJlbmRlcmVyLmNvbnRleHQsXG4gICAgICAgICAgICBhbHBoYTogY29uZmlnRGF0YS5yZW5kZXJlci5hbHBoYSxcbiAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogY29uZmlnRGF0YS5yZW5kZXJlci5wcmVtdWx0aXBsaWVkQWxwaGEsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IGNvbmZpZ0RhdGEucmVuZGVyZXIuYW50aWFsaWFzLFxuICAgICAgICAgICAgc3RlbmNpbDogY29uZmlnRGF0YS5yZW5kZXJlci5zdGVuY2lsLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBjb25maWdEYXRhLnJlbmRlcmVyLnByZWNpc2lvbixcbiAgICAgICAgICAgIGRlcHRoOiBjb25maWdEYXRhLnJlbmRlcmVyLmRlcHRoLFxuICAgICAgICAgICAgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogY29uZmlnRGF0YS5yZW5kZXJlci5sb2dhcml0aG1pY0RlcHRoQnVmZmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICBTY2VuZVJlbmRlcmVyVEpTLmdsb2JhbFNjZW5lID0gdGhpcy5zY2VuZTtcbiAgICAgICAgaWYgKGNhbWVyYUJvb2wgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLmZvdixcbiAgICAgICAgICAgICAgICBjb25maWdEYXRhLmNhbWVyYS5yYXRpbyxcbiAgICAgICAgICAgICAgICBjb25maWdEYXRhLmNhbWVyYS5uZWFyLFxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLmZhclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLkNhbWVyYSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFwiMC4zLjFcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJBUm5mdFRocmVlanMgdmVyc2lvbjogXCIsIHRoaXMudmVyc2lvbik7XG4gICAgfVxuXG4gICAgaW5pdFJlbmRlcmVyKCkge1xuICAgICAgICB0aGlzLmNhbWVyYS5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRQcm9qZWN0aW9uTWF0cml4XCIsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgodGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCwgZXYuZGV0YWlsLnByb2opO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jYW1lcmEpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGxpZ2h0KTtcblxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0V2luZG93U2l6ZVwiLCAoX2V2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZShfZXYuZGV0YWlsLnN3LCBfZXYuZGV0YWlsLnNoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2V0SW5pdFJlbmRlcmVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJvbkluaXRUaHJlZWpzUmVuZGVyaW5nXCIsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICAgICAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuZGlzcGF0Y2hFdmVudChzZXRJbml0UmVuZGVyZXJFdmVudCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgIH1cblxuICAgIC8vIGdldHRlcnNcblxuICAgIGdldFJlbmRlcmVyKCk6IFJlbmRlcmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXI7XG4gICAgfVxuXG4gICAgZ2V0U2NlbmUoKTogU2NlbmUge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcbiAgICB9XG5cbiAgICBnZXRDYW1lcmEoKTogQ2FtZXJhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRHbG9iYWxTY2VuZSgpOiBTY2VuZSB7XG4gICAgICAgIHJldHVybiBTY2VuZVJlbmRlcmVyVEpTLmdsb2JhbFNjZW5lO1xuICAgIH1cblxuICAgIC8vIHNldHRlcnNcblxuICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgc2V0U2NlbmUoc2NlbmU6IFNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB9XG5cbiAgICBzZXRDYW1lcmEoY2FtZXJhOiBDYW1lcmEpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgfVxuXG4gICAgLy8gdGljayB0byBiZSBpbXBsZW1lbnRlZFxuICAgIC8qIHRpY2sgKCkge1xuICAgIHRoaXMuZHJhdygpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2spXG4gIH0qL1xufVxuIiwiaW1wb3J0IHsgT2JqZWN0M0QsIFBsYW5lR2VvbWV0cnksIFNjZW5lLCBUZXh0dXJlTG9hZGVyLCBWaWRlb1RleHR1cmUsIE1lc2gsIE1lc2hTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgU2NlbmVSZW5kZXJlclRKUyBmcm9tIFwiLi4vU2NlbmVSZW5kZXJlclRKU1wiO1xuXG5pbnRlcmZhY2UgQVJ2aWRlbyB7XG4gICAgcGxheTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIEVudGl0eSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG1lc2g6IE9iamVjdDNEO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSB0byBkZWZpbmUgdGhlIFBsYW5lR2VvbWV0cnkgdXNlZCBpbiB0aGUgYWRkSW1hZ2UgYW5kIGFkZFZpZGVvIGZ1bmN0aW9ucy5cbiAqIEBwYXJhbSB3ICB3aWR0aCBvZiB0aGUgUGxhbmVHZW9tZXRyeS5cbiAqIEBwYXJhbSBoIGhlaWdodCBvZiB0aGUgUGxhbmVHZW9tZXRyeS5cbiAqIEBwYXJhbSB3cyB3aWR0aCBudW1iZXIgb2Ygc2VnbWVudHMgb2YgdGhlIFBsYW5lR2VvbWV0cnkuXG4gKiBAcGFyYW0gaHMgaGVpZ2h0IG51bWJlciBvZiBzZWdtZW50cyBvZiB0aGUgUGxhbmVHZW9tZXRyeS5cbiAqL1xuaW50ZXJmYWNlIElQbGFuZUNvbmZpZyB7XG4gICAgdzogbnVtYmVyO1xuICAgIGg6IG51bWJlcjtcbiAgICB3czogbnVtYmVyO1xuICAgIGhzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5GVGFkZFRKUyB7XG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5W10gPSBbXTtcbiAgICBwcml2YXRlIG5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgc2NlbmU6IFNjZW5lO1xuICAgIHByaXZhdGUgdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICBwcml2YXRlIHV1aWQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IFNjZW5lUmVuZGVyZXJUSlMuZ2V0R2xvYmFsU2NlbmUoKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB3aW5kb3cgfHwgZ2xvYmFsO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLm5hbWVzID0gW107XG4gICAgfVxuICAgIHB1YmxpYyBhZGQobWVzaDogT2JqZWN0M0QsIG5hbWU6IHN0cmluZywgb2JqVmlzaWJpbGl0eTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnkgPSAoKG1zZy5oZWlnaHQgLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnggPSAoKG1zZy53aWR0aCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gXCJyb290LVwiICsgbmFtZTtcbiAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICByb290LmFkZChtZXNoKTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE1hdHJpeEdMX1JILVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lc2gudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm5mdFRyYWNraW5nTG9zdC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgICAgICBtZXNoLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goeyBuYW1lLCBtZXNoIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRNb2RlbCh1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvYmpWaXNpYmlsaXR5OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gXCJyb290LVwiICsgbmFtZTtcbiAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBsZXQgbW9kZWw6IGFueTtcbiAgICAgICAgLyogTG9hZCBNb2RlbCAqL1xuICAgICAgICBjb25zdCB0aHJlZUdMVEZMb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgICAgICB0aHJlZUdMVEZMb2FkZXIubG9hZCh1cmwsIChnbHRmKSA9PiB7XG4gICAgICAgICAgICBtb2RlbCA9IGdsdGYuc2NlbmU7XG4gICAgICAgICAgICBtb2RlbC5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgICAgICBtb2RlbC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi54ID0geDtcbiAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnkgPSB5O1xuICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueiA9IHo7XG4gICAgICAgICAgICByb290LmFkZChtb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgbW9kZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm5mdFRyYWNraW5nTG9zdC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgICAgICBtb2RlbC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGFkZEltYWdlKFxuICAgICAgICBpbWFnZVVybDogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHNjYWxlOiBudW1iZXIsXG4gICAgICAgIGNvbmZpZ3M6IElQbGFuZUNvbmZpZyxcbiAgICAgICAgb2JqVmlzaWJpbGl0eTogYm9vbGVhblxuICAgICkge1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tID0gbmV3IFBsYW5lR2VvbWV0cnkoY29uZmlncy53LCBjb25maWdzLmgsIGNvbmZpZ3Mud3MsIGNvbmZpZ3MuaHMpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmVMb2FkZXIoKS5sb2FkKGltYWdlVXJsKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogY29sb3IsIG1hcDogdGV4dHVyZSB9KTtcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb20sIG1hdGVyaWFsKTtcbiAgICAgICAgcGxhbmUuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vdC5hZGQocGxhbmUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcGxhbmUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm5mdFRyYWNraW5nTG9zdC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGFkZFZpZGVvKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgc2NhbGU6IG51bWJlciwgY29uZmlnczogSVBsYW5lQ29uZmlnLCBvYmpWaXNpYmlsaXR5OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gXCJyb290LVwiICsgbmFtZTtcbiAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBjb25zdCBBUlZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVmlkZW9UZXh0dXJlKEFSVmlkZW8gYXMgSFRNTFZpZGVvRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1hdCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweGJiYmJmZiwgbWFwOiB0ZXh0dXJlIH0pO1xuICAgICAgICBBUlZpZGVvLnBsYXkoKTtcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tID0gbmV3IFBsYW5lR2VvbWV0cnkoY29uZmlncy53LCBjb25maWdzLmgsIGNvbmZpZ3Mud3MsIGNvbmZpZ3MuaHMpO1xuICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbSwgbWF0KTtcbiAgICAgICAgcGxhbmUuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vdC5hZGQocGxhbmUpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcGxhbmUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm5mdFRyYWNraW5nTG9zdC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJhY2tlZE1hdHJpeDogYW55ID0ge1xuICAgICAgICAvLyBmb3IgaW50ZXJwb2xhdGlvblxuICAgICAgICBkZWx0YTogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBpbnRlcnBvbGF0ZWQ6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICB9O1xuICAgIC8vcHJpdmF0ZSBzdGF0aWMgaW50ZXJwb2xhdGlvbkZhY3RvcjogbnVtYmVyID0gMjRcbiAgICBzdGF0aWMgaW50ZXJwb2xhdGUod29ybGQ6IGFueSkge1xuICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uRmFjdG9yID0gMjQ7XG5cbiAgICAgICAgLy8gaW50ZXJwb2xhdGUgbWF0cml4XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50cmFja2VkTWF0cml4LmRlbHRhW2ldID0gd29ybGRbaV0gLSB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldO1xuICAgICAgICAgICAgdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFtpXSArIHRoaXMudHJhY2tlZE1hdHJpeC5kZWx0YVtpXSAvIGludGVycG9sYXRpb25GYWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTW9iaWxlKCkge1xuICAgICAgICByZXR1cm4gL0FuZHJvaWR8bW9iaWxlfGlQYWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0TWF0cml4KG1hdHJpeDogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIGFycmF5W2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbWF0cml4LmVsZW1lbnRzLnNldCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBtYXRyaXguZWxlbWVudHMuc2V0KGFycmF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdHJpeC5lbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoYXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RocmVlX187IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiaW1wb3J0IHtcblx0QW5pbWF0aW9uQ2xpcCxcblx0Qm9uZSxcblx0Qm94Myxcblx0QnVmZmVyQXR0cmlidXRlLFxuXHRCdWZmZXJHZW9tZXRyeSxcblx0Q2xhbXBUb0VkZ2VXcmFwcGluZyxcblx0Q29sb3IsXG5cdERpcmVjdGlvbmFsTGlnaHQsXG5cdERvdWJsZVNpZGUsXG5cdEZpbGVMb2FkZXIsXG5cdEZyb250U2lkZSxcblx0R3JvdXAsXG5cdEltYWdlQml0bWFwTG9hZGVyLFxuXHRJbnRlcmxlYXZlZEJ1ZmZlcixcblx0SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUsXG5cdEludGVycG9sYW50LFxuXHRJbnRlcnBvbGF0ZURpc2NyZXRlLFxuXHRJbnRlcnBvbGF0ZUxpbmVhcixcblx0TGluZSxcblx0TGluZUJhc2ljTWF0ZXJpYWwsXG5cdExpbmVMb29wLFxuXHRMaW5lU2VnbWVudHMsXG5cdExpbmVhckZpbHRlcixcblx0TGluZWFyTWlwbWFwTGluZWFyRmlsdGVyLFxuXHRMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHRMb2FkZXIsXG5cdExvYWRlclV0aWxzLFxuXHRNYXRlcmlhbCxcblx0TWF0aFV0aWxzLFxuXHRNYXRyaXg0LFxuXHRNZXNoLFxuXHRNZXNoQmFzaWNNYXRlcmlhbCxcblx0TWVzaFBoeXNpY2FsTWF0ZXJpYWwsXG5cdE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuXHRNaXJyb3JlZFJlcGVhdFdyYXBwaW5nLFxuXHROZWFyZXN0RmlsdGVyLFxuXHROZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxuXHROZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlcixcblx0TnVtYmVyS2V5ZnJhbWVUcmFjayxcblx0T2JqZWN0M0QsXG5cdE9ydGhvZ3JhcGhpY0NhbWVyYSxcblx0UGVyc3BlY3RpdmVDYW1lcmEsXG5cdFBvaW50TGlnaHQsXG5cdFBvaW50cyxcblx0UG9pbnRzTWF0ZXJpYWwsXG5cdFByb3BlcnR5QmluZGluZyxcblx0UXVhdGVybmlvbixcblx0UXVhdGVybmlvbktleWZyYW1lVHJhY2ssXG5cdFJHQkZvcm1hdCxcblx0UmVwZWF0V3JhcHBpbmcsXG5cdFNrZWxldG9uLFxuXHRTa2lubmVkTWVzaCxcblx0U3BoZXJlLFxuXHRTcG90TGlnaHQsXG5cdFRhbmdlbnRTcGFjZU5vcm1hbE1hcCxcblx0VGV4dHVyZSxcblx0VGV4dHVyZUxvYWRlcixcblx0VHJpYW5nbGVGYW5EcmF3TW9kZSxcblx0VHJpYW5nbGVTdHJpcERyYXdNb2RlLFxuXHRWZWN0b3IyLFxuXHRWZWN0b3IzLFxuXHRWZWN0b3JLZXlmcmFtZVRyYWNrLFxuXHRzUkdCRW5jb2Rpbmdcbn0gZnJvbSAndGhyZWUnO1xuXG5jbGFzcyBHTFRGTG9hZGVyIGV4dGVuZHMgTG9hZGVyIHtcblxuXHRjb25zdHJ1Y3RvciggbWFuYWdlciApIHtcblxuXHRcdHN1cGVyKCBtYW5hZ2VyICk7XG5cblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gbnVsbDtcblx0XHR0aGlzLmt0eDJMb2FkZXIgPSBudWxsO1xuXHRcdHRoaXMubWVzaG9wdERlY29kZXIgPSBudWxsO1xuXG5cdFx0dGhpcy5wbHVnaW5DYWxsYmFja3MgPSBbXTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNDbGVhcmNvYXRFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURlRleHR1cmVXZWJQRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1ZvbHVtZUV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzSW9yRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNTcGVjdWxhckV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTGlnaHRzRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNZXNob3B0Q29tcHJlc3Npb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHRsb2FkKCB1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvciApIHtcblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGxldCByZXNvdXJjZVBhdGg7XG5cblx0XHRpZiAoIHRoaXMucmVzb3VyY2VQYXRoICE9PSAnJyApIHtcblxuXHRcdFx0cmVzb3VyY2VQYXRoID0gdGhpcy5yZXNvdXJjZVBhdGg7XG5cblx0XHR9IGVsc2UgaWYgKCB0aGlzLnBhdGggIT09ICcnICkge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnBhdGg7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSBMb2FkZXJVdGlscy5leHRyYWN0VXJsQmFzZSggdXJsICk7XG5cblx0XHR9XG5cblx0XHQvLyBUZWxscyB0aGUgTG9hZGluZ01hbmFnZXIgdG8gdHJhY2sgYW4gZXh0cmEgaXRlbSwgd2hpY2ggcmVzb2x2ZXMgYWZ0ZXJcblx0XHQvLyB0aGUgbW9kZWwgaXMgZnVsbHkgbG9hZGVkLiBUaGlzIG1lYW5zIHRoZSBjb3VudCBvZiBpdGVtcyBsb2FkZWQgd2lsbFxuXHRcdC8vIGJlIGluY29ycmVjdCwgYnV0IGVuc3VyZXMgbWFuYWdlci5vbkxvYWQoKSBkb2VzIG5vdCBmaXJlIGVhcmx5LlxuXHRcdHRoaXMubWFuYWdlci5pdGVtU3RhcnQoIHVybCApO1xuXG5cdFx0Y29uc3QgX29uRXJyb3IgPSBmdW5jdGlvbiAoIGUgKSB7XG5cblx0XHRcdGlmICggb25FcnJvciApIHtcblxuXHRcdFx0XHRvbkVycm9yKCBlICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS5lcnJvciggZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVycm9yKCB1cmwgKTtcblx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVuZCggdXJsICk7XG5cblx0XHR9O1xuXG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoIHRoaXMubWFuYWdlciApO1xuXG5cdFx0bG9hZGVyLnNldFBhdGgoIHRoaXMucGF0aCApO1xuXHRcdGxvYWRlci5zZXRSZXNwb25zZVR5cGUoICdhcnJheWJ1ZmZlcicgKTtcblx0XHRsb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5yZXF1ZXN0SGVhZGVyICk7XG5cdFx0bG9hZGVyLnNldFdpdGhDcmVkZW50aWFscyggdGhpcy53aXRoQ3JlZGVudGlhbHMgKTtcblxuXHRcdGxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggZGF0YSApIHtcblxuXHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRzY29wZS5wYXJzZSggZGF0YSwgcmVzb3VyY2VQYXRoLCBmdW5jdGlvbiAoIGdsdGYgKSB7XG5cblx0XHRcdFx0XHRvbkxvYWQoIGdsdGYgKTtcblxuXHRcdFx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVuZCggdXJsICk7XG5cblx0XHRcdFx0fSwgX29uRXJyb3IgKTtcblxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0X29uRXJyb3IoIGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSwgb25Qcm9ncmVzcywgX29uRXJyb3IgKTtcblxuXHR9XG5cblx0c2V0RFJBQ09Mb2FkZXIoIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRzZXRERFNMb2FkZXIoKSB7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cblx0XHRcdCdUSFJFRS5HTFRGTG9hZGVyOiBcIk1TRlRfdGV4dHVyZV9kZHNcIiBubyBsb25nZXIgc3VwcG9ydGVkLiBQbGVhc2UgdXBkYXRlIHRvIFwiS0hSX3RleHR1cmVfYmFzaXN1XCIuJ1xuXG5cdFx0KTtcblxuXHR9XG5cblx0c2V0S1RYMkxvYWRlcigga3R4MkxvYWRlciApIHtcblxuXHRcdHRoaXMua3R4MkxvYWRlciA9IGt0eDJMb2FkZXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHNldE1lc2hvcHREZWNvZGVyKCBtZXNob3B0RGVjb2RlciApIHtcblxuXHRcdHRoaXMubWVzaG9wdERlY29kZXIgPSBtZXNob3B0RGVjb2Rlcjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0cmVnaXN0ZXIoIGNhbGxiYWNrICkge1xuXG5cdFx0aWYgKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApID09PSAtIDEgKSB7XG5cblx0XHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0dW5yZWdpc3RlciggY2FsbGJhY2sgKSB7XG5cblx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgIT09IC0gMSApIHtcblxuXHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3Muc3BsaWNlKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApLCAxICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0cGFyc2UoIGRhdGEsIHBhdGgsIG9uTG9hZCwgb25FcnJvciApIHtcblxuXHRcdGxldCBjb250ZW50O1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB7fTtcblx0XHRjb25zdCBwbHVnaW5zID0ge307XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApIHtcblxuXHRcdFx0Y29udGVudCA9IGRhdGE7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zdCBtYWdpYyA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhLCAwLCA0ICkgKTtcblxuXHRcdFx0aWYgKCBtYWdpYyA9PT0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgKSB7XG5cblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0gPSBuZXcgR0xURkJpbmFyeUV4dGVuc2lvbiggZGF0YSApO1xuXG5cdFx0XHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblxuXHRcdFx0XHRcdGlmICggb25FcnJvciApIG9uRXJyb3IoIGVycm9yICk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250ZW50ID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXS5jb250ZW50O1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBuZXcgVWludDhBcnJheSggZGF0YSApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKCBjb250ZW50ICk7XG5cblx0XHRpZiAoIGpzb24uYXNzZXQgPT09IHVuZGVmaW5lZCB8fCBqc29uLmFzc2V0LnZlcnNpb25bIDAgXSA8IDIgKSB7XG5cblx0XHRcdGlmICggb25FcnJvciApIG9uRXJyb3IoIG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGFzc2V0LiBnbFRGIHZlcnNpb25zID49Mi4wIGFyZSBzdXBwb3J0ZWQuJyApICk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0XHRjb25zdCBwYXJzZXIgPSBuZXcgR0xURlBhcnNlcigganNvbiwge1xuXG5cdFx0XHRwYXRoOiBwYXRoIHx8IHRoaXMucmVzb3VyY2VQYXRoIHx8ICcnLFxuXHRcdFx0Y3Jvc3NPcmlnaW46IHRoaXMuY3Jvc3NPcmlnaW4sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyOiB0aGlzLnJlcXVlc3RIZWFkZXIsXG5cdFx0XHRtYW5hZ2VyOiB0aGlzLm1hbmFnZXIsXG5cdFx0XHRrdHgyTG9hZGVyOiB0aGlzLmt0eDJMb2FkZXIsXG5cdFx0XHRtZXNob3B0RGVjb2RlcjogdGhpcy5tZXNob3B0RGVjb2RlclxuXG5cdFx0fSApO1xuXG5cdFx0cGFyc2VyLmZpbGVMb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5yZXF1ZXN0SGVhZGVyICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luQ2FsbGJhY2tzWyBpIF0oIHBhcnNlciApO1xuXHRcdFx0cGx1Z2luc1sgcGx1Z2luLm5hbWUgXSA9IHBsdWdpbjtcblxuXHRcdFx0Ly8gV29ya2Fyb3VuZCB0byBhdm9pZCBkZXRlcm1pbmluZyBhcyB1bmtub3duIGV4dGVuc2lvblxuXHRcdFx0Ly8gaW4gYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCkuXG5cdFx0XHQvLyBSZW1vdmUgdGhpcyB3b3JrYXJvdW5kIGlmIHdlIG1vdmUgYWxsIHRoZSBleGlzdGluZ1xuXHRcdFx0Ly8gZXh0ZW5zaW9uIGhhbmRsZXJzIHRvIHBsdWdpbiBzeXN0ZW1cblx0XHRcdGV4dGVuc2lvbnNbIHBsdWdpbi5uYW1lIF0gPSB0cnVlO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNVc2VkICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBqc29uLmV4dGVuc2lvbnNVc2VkLmxlbmd0aDsgKysgaSApIHtcblxuXHRcdFx0XHRjb25zdCBleHRlbnNpb25OYW1lID0ganNvbi5leHRlbnNpb25zVXNlZFsgaSBdO1xuXHRcdFx0XHRjb25zdCBleHRlbnNpb25zUmVxdWlyZWQgPSBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCB8fCBbXTtcblxuXHRcdFx0XHRzd2l0Y2ggKCBleHRlbnNpb25OYW1lICkge1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQ6XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3NFeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbigganNvbiwgdGhpcy5kcmFjb0xvYWRlciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT046XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0aWYgKCBleHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggZXh0ZW5zaW9uTmFtZSApID49IDAgJiYgcGx1Z2luc1sgZXh0ZW5zaW9uTmFtZSBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogVW5rbm93biBleHRlbnNpb24gXCInICsgZXh0ZW5zaW9uTmFtZSArICdcIi4nICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHBhcnNlci5zZXRFeHRlbnNpb25zKCBleHRlbnNpb25zICk7XG5cdFx0cGFyc2VyLnNldFBsdWdpbnMoIHBsdWdpbnMgKTtcblx0XHRwYXJzZXIucGFyc2UoIG9uTG9hZCwgb25FcnJvciApO1xuXG5cdH1cblxufVxuXG4vKiBHTFRGUkVHSVNUUlkgKi9cblxuZnVuY3Rpb24gR0xURlJlZ2lzdHJ5KCkge1xuXG5cdGxldCBvYmplY3RzID0ge307XG5cblx0cmV0dXJuXHR7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0XHRyZXR1cm4gb2JqZWN0c1sga2V5IF07XG5cblx0XHR9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAoIGtleSwgb2JqZWN0ICkge1xuXG5cdFx0XHRvYmplY3RzWyBrZXkgXSA9IG9iamVjdDtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmU6IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0XHRkZWxldGUgb2JqZWN0c1sga2V5IF07XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdG9iamVjdHMgPSB7fTtcblxuXHRcdH1cblxuXHR9O1xuXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBFWFRFTlNJT05TICoqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgRVhURU5TSU9OUyA9IHtcblx0S0hSX0JJTkFSWV9HTFRGOiAnS0hSX2JpbmFyeV9nbFRGJyxcblx0S0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046ICdLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbicsXG5cdEtIUl9MSUdIVFNfUFVOQ1RVQUw6ICdLSFJfbGlnaHRzX3B1bmN0dWFsJyxcblx0S0hSX01BVEVSSUFMU19DTEVBUkNPQVQ6ICdLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCcsXG5cdEtIUl9NQVRFUklBTFNfSU9SOiAnS0hSX21hdGVyaWFsc19pb3InLFxuXHRLSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOiAnS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MnLFxuXHRLSFJfTUFURVJJQUxTX1NQRUNVTEFSOiAnS0hSX21hdGVyaWFsc19zcGVjdWxhcicsXG5cdEtIUl9NQVRFUklBTFNfVFJBTlNNSVNTSU9OOiAnS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24nLFxuXHRLSFJfTUFURVJJQUxTX1VOTElUOiAnS0hSX21hdGVyaWFsc191bmxpdCcsXG5cdEtIUl9NQVRFUklBTFNfVk9MVU1FOiAnS0hSX21hdGVyaWFsc192b2x1bWUnLFxuXHRLSFJfVEVYVFVSRV9CQVNJU1U6ICdLSFJfdGV4dHVyZV9iYXNpc3UnLFxuXHRLSFJfVEVYVFVSRV9UUkFOU0ZPUk06ICdLSFJfdGV4dHVyZV90cmFuc2Zvcm0nLFxuXHRLSFJfTUVTSF9RVUFOVElaQVRJT046ICdLSFJfbWVzaF9xdWFudGl6YXRpb24nLFxuXHRFWFRfVEVYVFVSRV9XRUJQOiAnRVhUX3RleHR1cmVfd2VicCcsXG5cdEVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OOiAnRVhUX21lc2hvcHRfY29tcHJlc3Npb24nXG59O1xuXG4vKipcbiAqIFB1bmN0dWFsIExpZ2h0cyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbGlnaHRzX3B1bmN0dWFsXG4gKi9cbmNsYXNzIEdMVEZMaWdodHNFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9MSUdIVFNfUFVOQ1RVQUw7XG5cblx0XHQvLyBPYmplY3QzRCBpbnN0YW5jZSBjYWNoZXNcblx0XHR0aGlzLmNhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblxuXHR9XG5cblx0X21hcmtEZWZzKCkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3Qgbm9kZURlZnMgPSB0aGlzLnBhcnNlci5qc29uLm5vZGVzIHx8IFtdO1xuXG5cdFx0Zm9yICggbGV0IG5vZGVJbmRleCA9IDAsIG5vZGVMZW5ndGggPSBub2RlRGVmcy5sZW5ndGg7IG5vZGVJbmRleCA8IG5vZGVMZW5ndGg7IG5vZGVJbmRleCArKyApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZURlZiA9IG5vZGVEZWZzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLmV4dGVuc2lvbnNcblx0XHRcdFx0XHQmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdXG5cdFx0XHRcdFx0JiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5saWdodCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBhcnNlci5fYWRkTm9kZVJlZiggdGhpcy5jYWNoZSwgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5saWdodCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdF9sb2FkTGlnaHQoIGxpZ2h0SW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBjYWNoZUtleSA9ICdsaWdodDonICsgbGlnaHRJbmRleDtcblx0XHRsZXQgZGVwZW5kZW5jeSA9IHBhcnNlci5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRpZiAoIGRlcGVuZGVuY3kgKSByZXR1cm4gZGVwZW5kZW5jeTtcblxuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gKCBqc29uLmV4dGVuc2lvbnMgJiYganNvbi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHx8IHt9O1xuXHRcdGNvbnN0IGxpZ2h0RGVmcyA9IGV4dGVuc2lvbnMubGlnaHRzIHx8IFtdO1xuXHRcdGNvbnN0IGxpZ2h0RGVmID0gbGlnaHREZWZzWyBsaWdodEluZGV4IF07XG5cdFx0bGV0IGxpZ2h0Tm9kZTtcblxuXHRcdGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKCAweGZmZmZmZiApO1xuXG5cdFx0aWYgKCBsaWdodERlZi5jb2xvciAhPT0gdW5kZWZpbmVkICkgY29sb3IuZnJvbUFycmF5KCBsaWdodERlZi5jb2xvciApO1xuXG5cdFx0Y29uc3QgcmFuZ2UgPSBsaWdodERlZi5yYW5nZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYucmFuZ2UgOiAwO1xuXG5cdFx0c3dpdGNoICggbGlnaHREZWYudHlwZSApIHtcblxuXHRcdFx0Y2FzZSAnZGlyZWN0aW9uYWwnOlxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgRGlyZWN0aW9uYWxMaWdodCggY29sb3IgKTtcblx0XHRcdFx0bGlnaHROb2RlLnRhcmdldC5wb3NpdGlvbi5zZXQoIDAsIDAsIC0gMSApO1xuXHRcdFx0XHRsaWdodE5vZGUuYWRkKCBsaWdodE5vZGUudGFyZ2V0ICk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdwb2ludCc6XG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBQb2ludExpZ2h0KCBjb2xvciApO1xuXHRcdFx0XHRsaWdodE5vZGUuZGlzdGFuY2UgPSByYW5nZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3Nwb3QnOlxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgU3BvdExpZ2h0KCBjb2xvciApO1xuXHRcdFx0XHRsaWdodE5vZGUuZGlzdGFuY2UgPSByYW5nZTtcblx0XHRcdFx0Ly8gSGFuZGxlIHNwb3RsaWdodCBwcm9wZXJ0aWVzLlxuXHRcdFx0XHRsaWdodERlZi5zcG90ID0gbGlnaHREZWYuc3BvdCB8fCB7fTtcblx0XHRcdFx0bGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSA9IGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgOiAwO1xuXHRcdFx0XHRsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlID0gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSA6IE1hdGguUEkgLyA0LjA7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5hbmdsZSA9IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGU7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5wZW51bWJyYSA9IDEuMCAtIGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgLyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xuXHRcdFx0XHRsaWdodE5vZGUudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgLSAxICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5hZGQoIGxpZ2h0Tm9kZS50YXJnZXQgKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuZXhwZWN0ZWQgbGlnaHQgdHlwZTogJyArIGxpZ2h0RGVmLnR5cGUgKTtcblxuXHRcdH1cblxuXHRcdC8vIFNvbWUgbGlnaHRzIChlLmcuIHNwb3QpIGRlZmF1bHQgdG8gYSBwb3NpdGlvbiBvdGhlciB0aGFuIHRoZSBvcmlnaW4uIFJlc2V0IHRoZSBwb3NpdGlvblxuXHRcdC8vIGhlcmUsIGJlY2F1c2Ugbm9kZS1sZXZlbCBwYXJzaW5nIHdpbGwgb25seSBvdmVycmlkZSBwb3NpdGlvbiBpZiBleHBsaWNpdGx5IHNwZWNpZmllZC5cblx0XHRsaWdodE5vZGUucG9zaXRpb24uc2V0KCAwLCAwLCAwICk7XG5cblx0XHRsaWdodE5vZGUuZGVjYXkgPSAyO1xuXG5cdFx0aWYgKCBsaWdodERlZi5pbnRlbnNpdHkgIT09IHVuZGVmaW5lZCApIGxpZ2h0Tm9kZS5pbnRlbnNpdHkgPSBsaWdodERlZi5pbnRlbnNpdHk7XG5cblx0XHRsaWdodE5vZGUubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBsaWdodERlZi5uYW1lIHx8ICggJ2xpZ2h0XycgKyBsaWdodEluZGV4ICkgKTtcblxuXHRcdGRlcGVuZGVuY3kgPSBQcm9taXNlLnJlc29sdmUoIGxpZ2h0Tm9kZSApO1xuXG5cdFx0cGFyc2VyLmNhY2hlLmFkZCggY2FjaGVLZXksIGRlcGVuZGVuY3kgKTtcblxuXHRcdHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdH1cblxuXHRjcmVhdGVOb2RlQXR0YWNobWVudCggbm9kZUluZGV4ICkge1xuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXHRcdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcblx0XHRjb25zdCBsaWdodERlZiA9ICggbm9kZURlZi5leHRlbnNpb25zICYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB8fCB7fTtcblx0XHRjb25zdCBsaWdodEluZGV4ID0gbGlnaHREZWYubGlnaHQ7XG5cblx0XHRpZiAoIGxpZ2h0SW5kZXggPT09IHVuZGVmaW5lZCApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIHRoaXMuX2xvYWRMaWdodCggbGlnaHRJbmRleCApLnRoZW4oIGZ1bmN0aW9uICggbGlnaHQgKSB7XG5cblx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHNlbGYuY2FjaGUsIGxpZ2h0SW5kZXgsIGxpZ2h0ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogVW5saXQgTWF0ZXJpYWxzIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdW5saXRcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCkge1xuXG5cdFx0cmV0dXJuIE1lc2hCYXNpY01hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkge1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0Y29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSBtYXRlcmlhbERlZi5wYnJNZXRhbGxpY1JvdWdobmVzcztcblxuXHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MgKSB7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYXJyYXkgPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3I7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBDbGVhcmNvYXQgTWF0ZXJpYWxzIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XG4gKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNDbGVhcmNvYXRFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfQ0xFQVJDT0FUO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0ID0gZXh0ZW5zaW9uLmNsZWFyY29hdEZhY3RvcjtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXRNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0VGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0Um91Z2huZXNzID0gZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvcjtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXRSb3VnaG5lc3NNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0Tm9ybWFsTWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUgKSApO1xuXG5cdFx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZTtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXROb3JtYWxTY2FsZSA9IG5ldyBWZWN0b3IyKCBzY2FsZSwgc2NhbGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogVHJhbnNtaXNzaW9uIE1hdGVyaWFscyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblxuICogRHJhZnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE2OThcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19UUkFOU01JU1NJT047XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLnRyYW5zbWlzc2lvbkZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc21pc3Npb24gPSBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3RyYW5zbWlzc2lvbk1hcCcsIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIE1hdGVyaWFscyBWb2x1bWUgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc192b2x1bWVcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1ZvbHVtZUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19WT0xVTUU7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLnRoaWNrbmVzcyA9IGV4dGVuc2lvbi50aGlja25lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IGV4dGVuc2lvbi50aGlja25lc3NGYWN0b3IgOiAwO1xuXG5cdFx0aWYgKCBleHRlbnNpb24udGhpY2tuZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3RoaWNrbmVzc01hcCcsIGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdG1hdGVyaWFsUGFyYW1zLmF0dGVudWF0aW9uRGlzdGFuY2UgPSBleHRlbnNpb24uYXR0ZW51YXRpb25EaXN0YW5jZSB8fCAwO1xuXG5cdFx0Y29uc3QgY29sb3JBcnJheSA9IGV4dGVuc2lvbi5hdHRlbnVhdGlvbkNvbG9yIHx8IFsgMSwgMSwgMSBdO1xuXHRcdG1hdGVyaWFsUGFyYW1zLmF0dGVudWF0aW9uVGludCA9IG5ldyBDb2xvciggY29sb3JBcnJheVsgMCBdLCBjb2xvckFycmF5WyAxIF0sIGNvbG9yQXJyYXlbIDIgXSApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogTWF0ZXJpYWxzIGlvciBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2lvclxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzSW9yRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX0lPUjtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuaW9yID0gZXh0ZW5zaW9uLmlvciAhPT0gdW5kZWZpbmVkID8gZXh0ZW5zaW9uLmlvciA6IDEuNTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBNYXRlcmlhbHMgc3BlY3VsYXIgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zcGVjdWxhclxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzU3BlY3VsYXJFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfU1BFQ1VMQVI7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFySW50ZW5zaXR5ID0gZXh0ZW5zaW9uLnNwZWN1bGFyRmFjdG9yICE9PSB1bmRlZmluZWQgPyBleHRlbnNpb24uc3BlY3VsYXJGYWN0b3IgOiAxLjA7XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zcGVjdWxhclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhckludGVuc2l0eU1hcCcsIGV4dGVuc2lvbi5zcGVjdWxhclRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY29sb3JBcnJheSA9IGV4dGVuc2lvbi5zcGVjdWxhckNvbG9yRmFjdG9yIHx8IFsgMSwgMSwgMSBdO1xuXHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyVGludCA9IG5ldyBDb2xvciggY29sb3JBcnJheVsgMCBdLCBjb2xvckFycmF5WyAxIF0sIGNvbG9yQXJyYXlbIDIgXSApO1xuXG5cdFx0aWYgKCBleHRlbnNpb24uc3BlY3VsYXJDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhclRpbnRNYXAnLCBleHRlbnNpb24uc3BlY3VsYXJDb2xvclRleHR1cmUgKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdFx0dGV4dHVyZS5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcblxuXHRcdFx0fSApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBCYXNpc1UgVGV4dHVyZSBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV9iYXNpc3VcbiAqL1xuY2xhc3MgR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX0JBU0lTVTtcblxuXHR9XG5cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cdFx0Y29uc3Qgc291cmNlID0ganNvbi5pbWFnZXNbIGV4dGVuc2lvbi5zb3VyY2UgXTtcblx0XHRjb25zdCBsb2FkZXIgPSBwYXJzZXIub3B0aW9ucy5rdHgyTG9hZGVyO1xuXG5cdFx0aWYgKCAhIGxvYWRlciApIHtcblxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCB0aGlzLm5hbWUgKSA+PSAwICkge1xuXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IHNldEtUWDJMb2FkZXIgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgS1RYMiB0ZXh0dXJlcycgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBBc3N1bWVzIHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBvcHRpb25hbCBhbmQgdGhhdCBhIGZhbGxiYWNrIHRleHR1cmUgaXMgcHJlc2VudFxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogV2ViUCBUZXh0dXJlIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX3RleHR1cmVfd2VicFxuICovXG5jbGFzcyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9URVhUVVJFX1dFQlA7XG5cdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG51bGw7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKSB7XG5cblx0XHRjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xuXG5cdFx0bGV0IGxvYWRlciA9IHBhcnNlci50ZXh0dXJlTG9hZGVyO1xuXHRcdGlmICggc291cmNlLnVyaSApIHtcblxuXHRcdFx0Y29uc3QgaGFuZGxlciA9IHBhcnNlci5vcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlLnVyaSApO1xuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmRldGVjdFN1cHBvcnQoKS50aGVuKCBmdW5jdGlvbiAoIGlzU3VwcG9ydGVkICkge1xuXG5cdFx0XHRpZiAoIGlzU3VwcG9ydGVkICkgcmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggbmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogV2ViUCByZXF1aXJlZCBieSBhc3NldCBidXQgdW5zdXBwb3J0ZWQuJyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGwgYmFjayB0byBQTkcgb3IgSlBFRy5cblx0XHRcdHJldHVybiBwYXJzZXIubG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHRkZXRlY3RTdXBwb3J0KCkge1xuXG5cdFx0aWYgKCAhIHRoaXMuaXNTdXBwb3J0ZWQgKSB7XG5cblx0XHRcdHRoaXMuaXNTdXBwb3J0ZWQgPSBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlICkge1xuXG5cdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdFx0Ly8gTG9zc3kgdGVzdCBpbWFnZS4gU3VwcG9ydCBmb3IgbG9zc3kgaW1hZ2VzIGRvZXNuJ3QgZ3VhcmFudGVlIHN1cHBvcnQgZm9yIGFsbFxuXHRcdFx0XHQvLyBXZWJQIGltYWdlcywgdW5mb3J0dW5hdGVseS5cblx0XHRcdFx0aW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JpSUFBQUJYUlVKUVZsQTRJQllBQUFBd0FRQ2RBU29CQUFFQURzRCtKYVFBQTNBQUFBQUEnO1xuXG5cdFx0XHRcdGltYWdlLm9ubG9hZCA9IGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRyZXNvbHZlKCBpbWFnZS5oZWlnaHQgPT09IDEgKTtcblxuXHRcdFx0XHR9O1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5pc1N1cHBvcnRlZDtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBtZXNob3B0IEJ1ZmZlclZpZXcgQ29tcHJlc3Npb24gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfbWVzaG9wdF9jb21wcmVzc2lvblxuICovXG5jbGFzcyBHTFRGTWVzaG9wdENvbXByZXNzaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5FWFRfTUVTSE9QVF9DT01QUkVTU0lPTjtcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuXHR9XG5cblx0bG9hZEJ1ZmZlclZpZXcoIGluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb247XG5cdFx0Y29uc3QgYnVmZmVyVmlldyA9IGpzb24uYnVmZmVyVmlld3NbIGluZGV4IF07XG5cblx0XHRpZiAoIGJ1ZmZlclZpZXcuZXh0ZW5zaW9ucyAmJiBidWZmZXJWaWV3LmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRjb25zdCBleHRlbnNpb25EZWYgPSBidWZmZXJWaWV3LmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0XHRjb25zdCBidWZmZXIgPSB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyJywgZXh0ZW5zaW9uRGVmLmJ1ZmZlciApO1xuXHRcdFx0Y29uc3QgZGVjb2RlciA9IHRoaXMucGFyc2VyLm9wdGlvbnMubWVzaG9wdERlY29kZXI7XG5cblx0XHRcdGlmICggISBkZWNvZGVyIHx8ICEgZGVjb2Rlci5zdXBwb3J0ZWQgKSB7XG5cblx0XHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCB0aGlzLm5hbWUgKSA+PSAwICkge1xuXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0TWVzaG9wdERlY29kZXIgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgY29tcHJlc3NlZCBmaWxlcycgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gQXNzdW1lcyB0aGF0IHRoZSBleHRlbnNpb24gaXMgb3B0aW9uYWwgYW5kIHRoYXQgZmFsbGJhY2sgYnVmZmVyIGRhdGEgaXMgcHJlc2VudFxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFsgYnVmZmVyLCBkZWNvZGVyLnJlYWR5IF0gKS50aGVuKCBmdW5jdGlvbiAoIHJlcyApIHtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gZXh0ZW5zaW9uRGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYnl0ZUxlbmd0aCA9IGV4dGVuc2lvbkRlZi5ieXRlTGVuZ3RoIHx8IDA7XG5cblx0XHRcdFx0Y29uc3QgY291bnQgPSBleHRlbnNpb25EZWYuY291bnQ7XG5cdFx0XHRcdGNvbnN0IHN0cmlkZSA9IGV4dGVuc2lvbkRlZi5ieXRlU3RyaWRlO1xuXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheUJ1ZmZlciggY291bnQgKiBzdHJpZGUgKTtcblx0XHRcdFx0Y29uc3Qgc291cmNlID0gbmV3IFVpbnQ4QXJyYXkoIHJlc1sgMCBdLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoICk7XG5cblx0XHRcdFx0ZGVjb2Rlci5kZWNvZGVHbHRmQnVmZmVyKCBuZXcgVWludDhBcnJheSggcmVzdWx0ICksIGNvdW50LCBzdHJpZGUsIHNvdXJjZSwgZXh0ZW5zaW9uRGVmLm1vZGUsIGV4dGVuc2lvbkRlZi5maWx0ZXIgKTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qIEJJTkFSWSBFWFRFTlNJT04gKi9cbmNvbnN0IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDID0gJ2dsVEYnO1xuY29uc3QgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIID0gMTI7XG5jb25zdCBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTID0geyBKU09OOiAweDRFNEY1MzRBLCBCSU46IDB4MDA0RTQ5NDIgfTtcblxuY2xhc3MgR0xURkJpbmFyeUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIGRhdGEgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURjtcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xuXHRcdHRoaXMuYm9keSA9IG51bGw7XG5cblx0XHRjb25zdCBoZWFkZXJWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCAwLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcblxuXHRcdHRoaXMuaGVhZGVyID0ge1xuXHRcdFx0bWFnaWM6IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhLnNsaWNlKCAwLCA0ICkgKSApLFxuXHRcdFx0dmVyc2lvbjogaGVhZGVyVmlldy5nZXRVaW50MzIoIDQsIHRydWUgKSxcblx0XHRcdGxlbmd0aDogaGVhZGVyVmlldy5nZXRVaW50MzIoIDgsIHRydWUgKVxuXHRcdH07XG5cblx0XHRpZiAoIHRoaXMuaGVhZGVyLm1hZ2ljICE9PSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgZ2xURi1CaW5hcnkgaGVhZGVyLicgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMuaGVhZGVyLnZlcnNpb24gPCAyLjAgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IExlZ2FjeSBiaW5hcnkgZmlsZSBkZXRlY3RlZC4nICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBjaHVua0NvbnRlbnRzTGVuZ3RoID0gdGhpcy5oZWFkZXIubGVuZ3RoIC0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIO1xuXHRcdGNvbnN0IGNodW5rVmlldyA9IG5ldyBEYXRhVmlldyggZGF0YSwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICk7XG5cdFx0bGV0IGNodW5rSW5kZXggPSAwO1xuXG5cdFx0d2hpbGUgKCBjaHVua0luZGV4IDwgY2h1bmtDb250ZW50c0xlbmd0aCApIHtcblxuXHRcdFx0Y29uc3QgY2h1bmtMZW5ndGggPSBjaHVua1ZpZXcuZ2V0VWludDMyKCBjaHVua0luZGV4LCB0cnVlICk7XG5cdFx0XHRjaHVua0luZGV4ICs9IDQ7XG5cblx0XHRcdGNvbnN0IGNodW5rVHlwZSA9IGNodW5rVmlldy5nZXRVaW50MzIoIGNodW5rSW5kZXgsIHRydWUgKTtcblx0XHRcdGNodW5rSW5kZXggKz0gNDtcblxuXHRcdFx0aWYgKCBjaHVua1R5cGUgPT09IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMuSlNPTiApIHtcblxuXHRcdFx0XHRjb25zdCBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheSggZGF0YSwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICsgY2h1bmtJbmRleCwgY2h1bmtMZW5ndGggKTtcblx0XHRcdFx0dGhpcy5jb250ZW50ID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggY29udGVudEFycmF5ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5CSU4gKSB7XG5cblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCArIGNodW5rSW5kZXg7XG5cdFx0XHRcdHRoaXMuYm9keSA9IGRhdGEuc2xpY2UoIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBjaHVua0xlbmd0aCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIENsaWVudHMgbXVzdCBpZ25vcmUgY2h1bmtzIHdpdGggdW5rbm93biB0eXBlcy5cblxuXHRcdFx0Y2h1bmtJbmRleCArPSBjaHVua0xlbmd0aDtcblxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5jb250ZW50ID09PSBudWxsICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBKU09OIGNvbnRlbnQgbm90IGZvdW5kLicgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG4gKiBEUkFDTyBNZXNoIENvbXByZXNzaW9uIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uXG4gKi9cbmNsYXNzIEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIGpzb24sIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0aWYgKCAhIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBObyBEUkFDT0xvYWRlciBpbnN0YW5jZSBwcm92aWRlZC4nICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OO1xuXHRcdHRoaXMuanNvbiA9IGpzb247XG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xuXHRcdHRoaXMuZHJhY29Mb2FkZXIucHJlbG9hZCgpO1xuXG5cdH1cblxuXHRkZWNvZGVQcmltaXRpdmUoIHByaW1pdGl2ZSwgcGFyc2VyICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBkcmFjb0xvYWRlciA9IHRoaXMuZHJhY29Mb2FkZXI7XG5cdFx0Y29uc3QgYnVmZmVyVmlld0luZGV4ID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmJ1ZmZlclZpZXc7XG5cdFx0Y29uc3QgZ2x0ZkF0dHJpYnV0ZU1hcCA9IHByaW1pdGl2ZS5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5hdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTWFwID0ge307XG5cdFx0Y29uc3QgYXR0cmlidXRlTm9ybWFsaXplZE1hcCA9IHt9O1xuXHRcdGNvbnN0IGF0dHJpYnV0ZVR5cGVNYXAgPSB7fTtcblxuXHRcdGZvciAoIGNvbnN0IGF0dHJpYnV0ZU5hbWUgaW4gZ2x0ZkF0dHJpYnV0ZU1hcCApIHtcblxuXHRcdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0dGhyZWVBdHRyaWJ1dGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gZ2x0ZkF0dHJpYnV0ZU1hcFsgYXR0cmlidXRlTmFtZSBdO1xuXG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBwcmltaXRpdmUuYXR0cmlidXRlcyApIHtcblxuXHRcdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF0gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBhY2Nlc3NvckRlZiA9IGpzb24uYWNjZXNzb3JzWyBwcmltaXRpdmUuYXR0cmlidXRlc1sgYXR0cmlidXRlTmFtZSBdIF07XG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudFR5cGUgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgXTtcblxuXHRcdFx0XHRhdHRyaWJ1dGVUeXBlTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGNvbXBvbmVudFR5cGU7XG5cdFx0XHRcdGF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGJ1ZmZlclZpZXdJbmRleCApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlldyApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUgKSB7XG5cblx0XHRcdFx0ZHJhY29Mb2FkZXIuZGVjb2RlRHJhY29GaWxlKCBidWZmZXJWaWV3LCBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xuXG5cdFx0XHRcdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzWyBhdHRyaWJ1dGVOYW1lIF07XG5cdFx0XHRcdFx0XHRjb25zdCBub3JtYWxpemVkID0gYXR0cmlidXRlTm9ybWFsaXplZE1hcFsgYXR0cmlidXRlTmFtZSBdO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG5vcm1hbGl6ZWQgIT09IHVuZGVmaW5lZCApIGF0dHJpYnV0ZS5ub3JtYWxpemVkID0gbm9ybWFsaXplZDtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlc29sdmUoIGdlb21ldHJ5ICk7XG5cblx0XHRcdFx0fSwgdGhyZWVBdHRyaWJ1dGVNYXAsIGF0dHJpYnV0ZVR5cGVNYXAgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIFRleHR1cmUgVHJhbnNmb3JtIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybVxuICovXG5jbGFzcyBHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STTtcblxuXHR9XG5cblx0ZXh0ZW5kVGV4dHVyZSggdGV4dHVyZSwgdHJhbnNmb3JtICkge1xuXG5cdFx0aWYgKCB0cmFuc2Zvcm0udGV4Q29vcmQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogQ3VzdG9tIFVWIHNldHMgaW4gXCInICsgdGhpcy5uYW1lICsgJ1wiIGV4dGVuc2lvbiBub3QgeWV0IHN1cHBvcnRlZC4nICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5vZmZzZXQgPT09IHVuZGVmaW5lZCAmJiB0cmFuc2Zvcm0ucm90YXRpb24gPT09IHVuZGVmaW5lZCAmJiB0cmFuc2Zvcm0uc2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzIxODE5LlxuXHRcdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0XHR9XG5cblx0XHR0ZXh0dXJlID0gdGV4dHVyZS5jbG9uZSgpO1xuXG5cdFx0aWYgKCB0cmFuc2Zvcm0ub2Zmc2V0ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRleHR1cmUub2Zmc2V0LmZyb21BcnJheSggdHJhbnNmb3JtLm9mZnNldCApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm0ucm90YXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5yb3RhdGlvbiA9IHRyYW5zZm9ybS5yb3RhdGlvbjtcblxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNmb3JtLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRleHR1cmUucmVwZWF0LmZyb21BcnJheSggdHJhbnNmb3JtLnNjYWxlICk7XG5cblx0XHR9XG5cblx0XHR0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuXHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIFNwZWN1bGFyLUdsb3NzaW5lc3MgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3NcbiAqL1xuXG4vKipcbiAqIEEgc3ViIGNsYXNzIG9mIFN0YW5kYXJkTWF0ZXJpYWwgd2l0aCBzb21lIG9mIHRoZSBmdW5jdGlvbmFsaXR5XG4gKiBjaGFuZ2VkIHZpYSB0aGUgYG9uQmVmb3JlQ29tcGlsZWAgY2FsbGJhY2tcbiAqIEBwYWlsaGVhZFxuICovXG5jbGFzcyBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCBleHRlbmRzIE1lc2hTdGFuZGFyZE1hdGVyaWFsIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyYW1zICkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwgPSB0cnVlO1xuXG5cdFx0Ly92YXJpb3VzIGNodW5rcyB0aGF0IG5lZWQgcmVwbGFjaW5nXG5cdFx0Y29uc3Qgc3BlY3VsYXJNYXBQYXJzRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCcjaWZkZWYgVVNFX1NQRUNVTEFSTUFQJyxcblx0XHRcdCdcdHVuaWZvcm0gc2FtcGxlcjJEIHNwZWN1bGFyTWFwOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IGdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxuXHRcdFx0J1x0dW5pZm9ybSBzYW1wbGVyMkQgZ2xvc3NpbmVzc01hcDsnLFxuXHRcdFx0JyNlbmRpZidcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCBzcGVjdWxhck1hcEZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQndmVjMyBzcGVjdWxhckZhY3RvciA9IHNwZWN1bGFyOycsXG5cdFx0XHQnI2lmZGVmIFVTRV9TUEVDVUxBUk1BUCcsXG5cdFx0XHQnXHR2ZWM0IHRleGVsU3BlY3VsYXIgPSB0ZXh0dXJlMkQoIHNwZWN1bGFyTWFwLCB2VXYgKTsnLFxuXHRcdFx0J1x0dGV4ZWxTcGVjdWxhciA9IHNSR0JUb0xpbmVhciggdGV4ZWxTcGVjdWxhciApOycsXG5cdFx0XHQnXHQvLyByZWFkcyBjaGFubmVsIFJHQiwgY29tcGF0aWJsZSB3aXRoIGEgZ2xURiBTcGVjdWxhci1HbG9zc2luZXNzIChSR0JBKSB0ZXh0dXJlJyxcblx0XHRcdCdcdHNwZWN1bGFyRmFjdG9yICo9IHRleGVsU3BlY3VsYXIucmdiOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IGdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rID0gW1xuXHRcdFx0J2Zsb2F0IGdsb3NzaW5lc3NGYWN0b3IgPSBnbG9zc2luZXNzOycsXG5cdFx0XHQnI2lmZGVmIFVTRV9HTE9TU0lORVNTTUFQJyxcblx0XHRcdCdcdHZlYzQgdGV4ZWxHbG9zc2luZXNzID0gdGV4dHVyZTJEKCBnbG9zc2luZXNzTWFwLCB2VXYgKTsnLFxuXHRcdFx0J1x0Ly8gcmVhZHMgY2hhbm5lbCBBLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxuXHRcdFx0J1x0Z2xvc3NpbmVzc0ZhY3RvciAqPSB0ZXhlbEdsb3NzaW5lc3MuYTsnLFxuXHRcdFx0JyNlbmRpZidcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCBsaWdodFBoeXNpY2FsRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCdQaHlzaWNhbE1hdGVyaWFsIG1hdGVyaWFsOycsXG5cdFx0XHQnbWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gZGlmZnVzZUNvbG9yLnJnYiAqICggMS4gLSBtYXgoIHNwZWN1bGFyRmFjdG9yLnIsIG1heCggc3BlY3VsYXJGYWN0b3IuZywgc3BlY3VsYXJGYWN0b3IuYiApICkgKTsnLFxuXHRcdFx0J3ZlYzMgZHh5ID0gbWF4KCBhYnMoIGRGZHgoIGdlb21ldHJ5Tm9ybWFsICkgKSwgYWJzKCBkRmR5KCBnZW9tZXRyeU5vcm1hbCApICkgKTsnLFxuXHRcdFx0J2Zsb2F0IGdlb21ldHJ5Um91Z2huZXNzID0gbWF4KCBtYXgoIGR4eS54LCBkeHkueSApLCBkeHkueiApOycsXG5cdFx0XHQnbWF0ZXJpYWwucm91Z2huZXNzID0gbWF4KCAxLjAgLSBnbG9zc2luZXNzRmFjdG9yLCAwLjA1MjUgKTsgLy8gMC4wNTI1IGNvcnJlc3BvbmRzIHRvIHRoZSBiYXNlIG1pcCBvZiBhIDI1NiBjdWJlbWFwLicsXG5cdFx0XHQnbWF0ZXJpYWwucm91Z2huZXNzICs9IGdlb21ldHJ5Um91Z2huZXNzOycsXG5cdFx0XHQnbWF0ZXJpYWwucm91Z2huZXNzID0gbWluKCBtYXRlcmlhbC5yb3VnaG5lc3MsIDEuMCApOycsXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IHNwZWN1bGFyRmFjdG9yOycsXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgdW5pZm9ybXMgPSB7XG5cdFx0XHRzcGVjdWxhcjogeyB2YWx1ZTogbmV3IENvbG9yKCkuc2V0SGV4KCAweGZmZmZmZiApIH0sXG5cdFx0XHRnbG9zc2luZXNzOiB7IHZhbHVlOiAxIH0sXG5cdFx0XHRzcGVjdWxhck1hcDogeyB2YWx1ZTogbnVsbCB9LFxuXHRcdFx0Z2xvc3NpbmVzc01hcDogeyB2YWx1ZTogbnVsbCB9XG5cdFx0fTtcblxuXHRcdHRoaXMuX2V4dHJhVW5pZm9ybXMgPSB1bmlmb3JtcztcblxuXHRcdHRoaXMub25CZWZvcmVDb21waWxlID0gZnVuY3Rpb24gKCBzaGFkZXIgKSB7XG5cblx0XHRcdGZvciAoIGNvbnN0IHVuaWZvcm1OYW1lIGluIHVuaWZvcm1zICkge1xuXG5cdFx0XHRcdHNoYWRlci51bmlmb3Jtc1sgdW5pZm9ybU5hbWUgXSA9IHVuaWZvcm1zWyB1bmlmb3JtTmFtZSBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNoYWRlci5mcmFnbWVudFNoYWRlciA9IHNoYWRlci5mcmFnbWVudFNoYWRlclxuXHRcdFx0XHQucmVwbGFjZSggJ3VuaWZvcm0gZmxvYXQgcm91Z2huZXNzOycsICd1bmlmb3JtIHZlYzMgc3BlY3VsYXI7JyApXG5cdFx0XHRcdC5yZXBsYWNlKCAndW5pZm9ybSBmbG9hdCBtZXRhbG5lc3M7JywgJ3VuaWZvcm0gZmxvYXQgZ2xvc3NpbmVzczsnIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8cm91Z2huZXNzbWFwX3BhcnNfZnJhZ21lbnQ+Jywgc3BlY3VsYXJNYXBQYXJzRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9wYXJzX2ZyYWdtZW50PicsIGdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPHJvdWdobmVzc21hcF9mcmFnbWVudD4nLCBzcGVjdWxhck1hcEZyYWdtZW50Q2h1bmsgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxtZXRhbG5lc3NtYXBfZnJhZ21lbnQ+JywgZ2xvc3NpbmVzc01hcEZyYWdtZW50Q2h1bmsgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxsaWdodHNfcGh5c2ljYWxfZnJhZ21lbnQ+JywgbGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsgKTtcblxuXHRcdH07XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyggdGhpcywge1xuXG5cdFx0XHRzcGVjdWxhcjoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5zcGVjdWxhci52YWx1ZTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRcdHVuaWZvcm1zLnNwZWN1bGFyLnZhbHVlID0gdjtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzcGVjdWxhck1hcDoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5zcGVjdWxhck1hcC52YWx1ZTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRcdHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlID0gdjtcblxuXHRcdFx0XHRcdGlmICggdiApIHtcblxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9TUEVDVUxBUk1BUCA9ICcnOyAvLyBVU0VfVVYgaXMgc2V0IGJ5IHRoZSByZW5kZXJlciBmb3Igc3BlY3VsYXIgbWFwc1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfU1BFQ1VMQVJNQVA7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2xvc3NpbmVzczoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5nbG9zc2luZXNzLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuZ2xvc3NpbmVzcy52YWx1ZSA9IHY7XG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2xvc3NpbmVzc01hcDoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuZ2xvc3NpbmVzc01hcC52YWx1ZSA9IHY7XG5cblx0XHRcdFx0XHRpZiAoIHYgKSB7XG5cblx0XHRcdFx0XHRcdHRoaXMuZGVmaW5lcy5VU0VfR0xPU1NJTkVTU01BUCA9ICcnO1xuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9VViA9ICcnO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfR0xPU1NJTkVTU01BUDtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmRlZmluZXMuVVNFX1VWO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0gKTtcblxuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzcztcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzTWFwO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzc01hcDtcblxuXHRcdHRoaXMuc2V0VmFsdWVzKCBwYXJhbXMgKTtcblxuXHR9XG5cblx0Y29weSggc291cmNlICkge1xuXG5cdFx0c3VwZXIuY29weSggc291cmNlICk7XG5cblx0XHR0aGlzLnNwZWN1bGFyTWFwID0gc291cmNlLnNwZWN1bGFyTWFwO1xuXHRcdHRoaXMuc3BlY3VsYXIuY29weSggc291cmNlLnNwZWN1bGFyICk7XG5cdFx0dGhpcy5nbG9zc2luZXNzTWFwID0gc291cmNlLmdsb3NzaW5lc3NNYXA7XG5cdFx0dGhpcy5nbG9zc2luZXNzID0gc291cmNlLmdsb3NzaW5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3NNYXA7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxufVxuXG5cbmNsYXNzIEdMVEZNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3NFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTO1xuXG5cdFx0dGhpcy5zcGVjdWxhckdsb3NzaW5lc3NQYXJhbXMgPSBbXG5cdFx0XHQnY29sb3InLFxuXHRcdFx0J21hcCcsXG5cdFx0XHQnbGlnaHRNYXAnLFxuXHRcdFx0J2xpZ2h0TWFwSW50ZW5zaXR5Jyxcblx0XHRcdCdhb01hcCcsXG5cdFx0XHQnYW9NYXBJbnRlbnNpdHknLFxuXHRcdFx0J2VtaXNzaXZlJyxcblx0XHRcdCdlbWlzc2l2ZUludGVuc2l0eScsXG5cdFx0XHQnZW1pc3NpdmVNYXAnLFxuXHRcdFx0J2J1bXBNYXAnLFxuXHRcdFx0J2J1bXBTY2FsZScsXG5cdFx0XHQnbm9ybWFsTWFwJyxcblx0XHRcdCdub3JtYWxNYXBUeXBlJyxcblx0XHRcdCdkaXNwbGFjZW1lbnRNYXAnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudFNjYWxlJyxcblx0XHRcdCdkaXNwbGFjZW1lbnRCaWFzJyxcblx0XHRcdCdzcGVjdWxhck1hcCcsXG5cdFx0XHQnc3BlY3VsYXInLFxuXHRcdFx0J2dsb3NzaW5lc3NNYXAnLFxuXHRcdFx0J2dsb3NzaW5lc3MnLFxuXHRcdFx0J2FscGhhTWFwJyxcblx0XHRcdCdlbnZNYXAnLFxuXHRcdFx0J2Vudk1hcEludGVuc2l0eScsXG5cdFx0XHQncmVmcmFjdGlvblJhdGlvJyxcblx0XHRdO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoKSB7XG5cblx0XHRyZXR1cm4gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSB7XG5cblx0XHRjb25zdCBwYnJTcGVjdWxhckdsb3NzaW5lc3MgPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGlmICggQXJyYXkuaXNBcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VGYWN0b3IgKSApIHtcblxuXHRcdFx0Y29uc3QgYXJyYXkgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvcjtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xuXHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XG5cblx0XHR9XG5cblx0XHRpZiAoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZSA9IG5ldyBDb2xvciggMC4wLCAwLjAsIDAuMCApO1xuXHRcdG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3MgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gcGJyU3BlY3VsYXJHbG9zc2luZXNzLmdsb3NzaW5lc3NGYWN0b3IgOiAxLjA7XG5cdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblxuXHRcdGlmICggQXJyYXkuaXNBcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyRmFjdG9yICkgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyLmZyb21BcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyRmFjdG9yICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNvbnN0IHNwZWNHbG9zc01hcERlZiA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdnbG9zc2luZXNzTWFwJywgc3BlY0dsb3NzTWFwRGVmICkgKTtcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnc3BlY3VsYXJNYXAnLCBzcGVjR2xvc3NNYXBEZWYgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG5cdGNyZWF0ZU1hdGVyaWFsKCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsKCBtYXRlcmlhbFBhcmFtcyApO1xuXHRcdG1hdGVyaWFsLmZvZyA9IHRydWU7XG5cblx0XHRtYXRlcmlhbC5jb2xvciA9IG1hdGVyaWFsUGFyYW1zLmNvbG9yO1xuXG5cdFx0bWF0ZXJpYWwubWFwID0gbWF0ZXJpYWxQYXJhbXMubWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubWFwO1xuXG5cdFx0bWF0ZXJpYWwubGlnaHRNYXAgPSBudWxsO1xuXHRcdG1hdGVyaWFsLmxpZ2h0TWFwSW50ZW5zaXR5ID0gMS4wO1xuXG5cdFx0bWF0ZXJpYWwuYW9NYXAgPSBtYXRlcmlhbFBhcmFtcy5hb01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmFvTWFwO1xuXHRcdG1hdGVyaWFsLmFvTWFwSW50ZW5zaXR5ID0gMS4wO1xuXG5cdFx0bWF0ZXJpYWwuZW1pc3NpdmUgPSBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZTtcblx0XHRtYXRlcmlhbC5lbWlzc2l2ZUludGVuc2l0eSA9IDEuMDtcblx0XHRtYXRlcmlhbC5lbWlzc2l2ZU1hcCA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXA7XG5cblx0XHRtYXRlcmlhbC5idW1wTWFwID0gbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmJ1bXBNYXA7XG5cdFx0bWF0ZXJpYWwuYnVtcFNjYWxlID0gMTtcblxuXHRcdG1hdGVyaWFsLm5vcm1hbE1hcCA9IG1hdGVyaWFsUGFyYW1zLm5vcm1hbE1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLm5vcm1hbE1hcDtcblx0XHRtYXRlcmlhbC5ub3JtYWxNYXBUeXBlID0gVGFuZ2VudFNwYWNlTm9ybWFsTWFwO1xuXG5cdFx0aWYgKCBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSApIG1hdGVyaWFsLm5vcm1hbFNjYWxlID0gbWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGU7XG5cblx0XHRtYXRlcmlhbC5kaXNwbGFjZW1lbnRNYXAgPSBudWxsO1xuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudFNjYWxlID0gMTtcblx0XHRtYXRlcmlhbC5kaXNwbGFjZW1lbnRCaWFzID0gMDtcblxuXHRcdG1hdGVyaWFsLnNwZWN1bGFyTWFwID0gbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhck1hcDtcblx0XHRtYXRlcmlhbC5zcGVjdWxhciA9IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyO1xuXG5cdFx0bWF0ZXJpYWwuZ2xvc3NpbmVzc01hcCA9IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3NNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzTWFwO1xuXHRcdG1hdGVyaWFsLmdsb3NzaW5lc3MgPSBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzO1xuXG5cdFx0bWF0ZXJpYWwuYWxwaGFNYXAgPSBudWxsO1xuXG5cdFx0bWF0ZXJpYWwuZW52TWFwID0gbWF0ZXJpYWxQYXJhbXMuZW52TWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZW52TWFwO1xuXHRcdG1hdGVyaWFsLmVudk1hcEludGVuc2l0eSA9IDEuMDtcblxuXHRcdG1hdGVyaWFsLnJlZnJhY3Rpb25SYXRpbyA9IDAuOTg7XG5cblx0XHRyZXR1cm4gbWF0ZXJpYWw7XG5cblx0fVxuXG59XG5cbi8qKlxuICogTWVzaCBRdWFudGl6YXRpb24gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21lc2hfcXVhbnRpemF0aW9uXG4gKi9cbmNsYXNzIEdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01FU0hfUVVBTlRJWkFUSU9OO1xuXG5cdH1cblxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogSU5URVJQT0xBVElPTiAqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFNwbGluZSBJbnRlcnBvbGF0aW9uXG4vLyBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2FwcGVuZGl4LWMtc3BsaW5lLWludGVycG9sYXRpb25cbmNsYXNzIEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50IGV4dGVuZHMgSW50ZXJwb2xhbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJhbWV0ZXJQb3NpdGlvbnMsIHNhbXBsZVZhbHVlcywgc2FtcGxlU2l6ZSwgcmVzdWx0QnVmZmVyICkge1xuXG5cdFx0c3VwZXIoIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKTtcblxuXHR9XG5cblx0Y29weVNhbXBsZVZhbHVlXyggaW5kZXggKSB7XG5cblx0XHQvLyBDb3BpZXMgYSBzYW1wbGUgdmFsdWUgdG8gdGhlIHJlc3VsdCBidWZmZXIuIFNlZSBkZXNjcmlwdGlvbiBvZiBnbFRGXG5cdFx0Ly8gQ1VCSUNTUExJTkUgdmFsdWVzIGxheW91dCBpbiBpbnRlcnBvbGF0ZV8oKSBmdW5jdGlvbiBiZWxvdy5cblxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0QnVmZmVyLFxuXHRcdFx0dmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXMsXG5cdFx0XHR2YWx1ZVNpemUgPSB0aGlzLnZhbHVlU2l6ZSxcblx0XHRcdG9mZnNldCA9IGluZGV4ICogdmFsdWVTaXplICogMyArIHZhbHVlU2l6ZTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSAhPT0gdmFsdWVTaXplOyBpICsrICkge1xuXG5cdFx0XHRyZXN1bHRbIGkgXSA9IHZhbHVlc1sgb2Zmc2V0ICsgaSBdO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblxuXHR9XG5cbn1cblxuR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmJlZm9yZVN0YXJ0XyA9IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5jb3B5U2FtcGxlVmFsdWVfO1xuXG5HTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuYWZ0ZXJFbmRfID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV87XG5cbkdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5pbnRlcnBvbGF0ZV8gPSBmdW5jdGlvbiAoIGkxLCB0MCwgdCwgdDEgKSB7XG5cblx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXI7XG5cdGNvbnN0IHZhbHVlcyA9IHRoaXMuc2FtcGxlVmFsdWVzO1xuXHRjb25zdCBzdHJpZGUgPSB0aGlzLnZhbHVlU2l6ZTtcblxuXHRjb25zdCBzdHJpZGUyID0gc3RyaWRlICogMjtcblx0Y29uc3Qgc3RyaWRlMyA9IHN0cmlkZSAqIDM7XG5cblx0Y29uc3QgdGQgPSB0MSAtIHQwO1xuXG5cdGNvbnN0IHAgPSAoIHQgLSB0MCApIC8gdGQ7XG5cdGNvbnN0IHBwID0gcCAqIHA7XG5cdGNvbnN0IHBwcCA9IHBwICogcDtcblxuXHRjb25zdCBvZmZzZXQxID0gaTEgKiBzdHJpZGUzO1xuXHRjb25zdCBvZmZzZXQwID0gb2Zmc2V0MSAtIHN0cmlkZTM7XG5cblx0Y29uc3QgczIgPSAtIDIgKiBwcHAgKyAzICogcHA7XG5cdGNvbnN0IHMzID0gcHBwIC0gcHA7XG5cdGNvbnN0IHMwID0gMSAtIHMyO1xuXHRjb25zdCBzMSA9IHMzIC0gcHAgKyBwO1xuXG5cdC8vIExheW91dCBvZiBrZXlmcmFtZSBvdXRwdXQgdmFsdWVzIGZvciBDVUJJQ1NQTElORSBhbmltYXRpb25zOlxuXHQvLyAgIFsgaW5UYW5nZW50XzEsIHNwbGluZVZlcnRleF8xLCBvdXRUYW5nZW50XzEsIGluVGFuZ2VudF8yLCBzcGxpbmVWZXJ0ZXhfMiwgLi4uIF1cblx0Zm9yICggbGV0IGkgPSAwOyBpICE9PSBzdHJpZGU7IGkgKysgKSB7XG5cblx0XHRjb25zdCBwMCA9IHZhbHVlc1sgb2Zmc2V0MCArIGkgKyBzdHJpZGUgXTsgLy8gc3BsaW5lVmVydGV4X2tcblx0XHRjb25zdCBtMCA9IHZhbHVlc1sgb2Zmc2V0MCArIGkgKyBzdHJpZGUyIF0gKiB0ZDsgLy8gb3V0VGFuZ2VudF9rICogKHRfaysxIC0gdF9rKVxuXHRcdGNvbnN0IHAxID0gdmFsdWVzWyBvZmZzZXQxICsgaSArIHN0cmlkZSBdOyAvLyBzcGxpbmVWZXJ0ZXhfaysxXG5cdFx0Y29uc3QgbTEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpIF0gKiB0ZDsgLy8gaW5UYW5nZW50X2srMSAqICh0X2srMSAtIHRfaylcblxuXHRcdHJlc3VsdFsgaSBdID0gczAgKiBwMCArIHMxICogbTAgKyBzMiAqIHAxICsgczMgKiBtMTtcblxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcblxufTtcblxuY29uc3QgX3EgPSBuZXcgUXVhdGVybmlvbigpO1xuXG5jbGFzcyBHTFRGQ3ViaWNTcGxpbmVRdWF0ZXJuaW9uSW50ZXJwb2xhbnQgZXh0ZW5kcyBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCB7XG5cblx0aW50ZXJwb2xhdGVfKCBpMSwgdDAsIHQsIHQxICkge1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gc3VwZXIuaW50ZXJwb2xhdGVfKCBpMSwgdDAsIHQsIHQxICk7XG5cblx0XHRfcS5mcm9tQXJyYXkoIHJlc3VsdCApLm5vcm1hbGl6ZSgpLnRvQXJyYXkoIHJlc3VsdCApO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblxuXHR9XG5cbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogSU5URVJOQUxTICoqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qIENPTlNUQU5UUyAqL1xuXG5jb25zdCBXRUJHTF9DT05TVEFOVFMgPSB7XG5cdEZMT0FUOiA1MTI2LFxuXHQvL0ZMT0FUX01BVDI6IDM1Njc0LFxuXHRGTE9BVF9NQVQzOiAzNTY3NSxcblx0RkxPQVRfTUFUNDogMzU2NzYsXG5cdEZMT0FUX1ZFQzI6IDM1NjY0LFxuXHRGTE9BVF9WRUMzOiAzNTY2NSxcblx0RkxPQVRfVkVDNDogMzU2NjYsXG5cdExJTkVBUjogOTcyOSxcblx0UkVQRUFUOiAxMDQ5Nyxcblx0U0FNUExFUl8yRDogMzU2NzgsXG5cdFBPSU5UUzogMCxcblx0TElORVM6IDEsXG5cdExJTkVfTE9PUDogMixcblx0TElORV9TVFJJUDogMyxcblx0VFJJQU5HTEVTOiA0LFxuXHRUUklBTkdMRV9TVFJJUDogNSxcblx0VFJJQU5HTEVfRkFOOiA2LFxuXHRVTlNJR05FRF9CWVRFOiA1MTIxLFxuXHRVTlNJR05FRF9TSE9SVDogNTEyM1xufTtcblxuY29uc3QgV0VCR0xfQ09NUE9ORU5UX1RZUEVTID0ge1xuXHQ1MTIwOiBJbnQ4QXJyYXksXG5cdDUxMjE6IFVpbnQ4QXJyYXksXG5cdDUxMjI6IEludDE2QXJyYXksXG5cdDUxMjM6IFVpbnQxNkFycmF5LFxuXHQ1MTI1OiBVaW50MzJBcnJheSxcblx0NTEyNjogRmxvYXQzMkFycmF5XG59O1xuXG5jb25zdCBXRUJHTF9GSUxURVJTID0ge1xuXHQ5NzI4OiBOZWFyZXN0RmlsdGVyLFxuXHQ5NzI5OiBMaW5lYXJGaWx0ZXIsXG5cdDk5ODQ6IE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHQ5OTg1OiBMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHQ5OTg2OiBOZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxuXHQ5OTg3OiBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXJcbn07XG5cbmNvbnN0IFdFQkdMX1dSQVBQSU5HUyA9IHtcblx0MzMwNzE6IENsYW1wVG9FZGdlV3JhcHBpbmcsXG5cdDMzNjQ4OiBNaXJyb3JlZFJlcGVhdFdyYXBwaW5nLFxuXHQxMDQ5NzogUmVwZWF0V3JhcHBpbmdcbn07XG5cbmNvbnN0IFdFQkdMX1RZUEVfU0laRVMgPSB7XG5cdCdTQ0FMQVInOiAxLFxuXHQnVkVDMic6IDIsXG5cdCdWRUMzJzogMyxcblx0J1ZFQzQnOiA0LFxuXHQnTUFUMic6IDQsXG5cdCdNQVQzJzogOSxcblx0J01BVDQnOiAxNlxufTtcblxuY29uc3QgQVRUUklCVVRFUyA9IHtcblx0UE9TSVRJT046ICdwb3NpdGlvbicsXG5cdE5PUk1BTDogJ25vcm1hbCcsXG5cdFRBTkdFTlQ6ICd0YW5nZW50Jyxcblx0VEVYQ09PUkRfMDogJ3V2Jyxcblx0VEVYQ09PUkRfMTogJ3V2MicsXG5cdENPTE9SXzA6ICdjb2xvcicsXG5cdFdFSUdIVFNfMDogJ3NraW5XZWlnaHQnLFxuXHRKT0lOVFNfMDogJ3NraW5JbmRleCcsXG59O1xuXG5jb25zdCBQQVRIX1BST1BFUlRJRVMgPSB7XG5cdHNjYWxlOiAnc2NhbGUnLFxuXHR0cmFuc2xhdGlvbjogJ3Bvc2l0aW9uJyxcblx0cm90YXRpb246ICdxdWF0ZXJuaW9uJyxcblx0d2VpZ2h0czogJ21vcnBoVGFyZ2V0SW5mbHVlbmNlcydcbn07XG5cbmNvbnN0IElOVEVSUE9MQVRJT04gPSB7XG5cdENVQklDU1BMSU5FOiB1bmRlZmluZWQsIC8vIFdlIHVzZSBhIGN1c3RvbSBpbnRlcnBvbGFudCAoR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhdGlvbikgZm9yIENVQklDU1BMSU5FIHRyYWNrcy4gRWFjaFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtleWZyYW1lIHRyYWNrIHdpbGwgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhIGRlZmF1bHQgaW50ZXJwb2xhdGlvbiB0eXBlLCB0aGVuIG1vZGlmaWVkLlxuXHRMSU5FQVI6IEludGVycG9sYXRlTGluZWFyLFxuXHRTVEVQOiBJbnRlcnBvbGF0ZURpc2NyZXRlXG59O1xuXG5jb25zdCBBTFBIQV9NT0RFUyA9IHtcblx0T1BBUVVFOiAnT1BBUVVFJyxcblx0TUFTSzogJ01BU0snLFxuXHRCTEVORDogJ0JMRU5EJ1xufTtcblxuLyogVVRJTElUWSBGVU5DVElPTlMgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVVSTCggdXJsLCBwYXRoICkge1xuXG5cdC8vIEludmFsaWQgVVJMXG5cdGlmICggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHwgdXJsID09PSAnJyApIHJldHVybiAnJztcblxuXHQvLyBIb3N0IFJlbGF0aXZlIFVSTFxuXHRpZiAoIC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoIHBhdGggKSAmJiAvXlxcLy8udGVzdCggdXJsICkgKSB7XG5cblx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKCAvKF5odHRwcz86XFwvXFwvW15cXC9dKykuKi9pLCAnJDEnICk7XG5cblx0fVxuXG5cdC8vIEFic29sdXRlIFVSTCBodHRwOi8vLGh0dHBzOi8vLC8vXG5cdGlmICggL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xuXG5cdC8vIERhdGEgVVJJXG5cdGlmICggL15kYXRhOi4qLC4qJC9pLnRlc3QoIHVybCApICkgcmV0dXJuIHVybDtcblxuXHQvLyBCbG9iIFVSTFxuXHRpZiAoIC9eYmxvYjouKiQvaS50ZXN0KCB1cmwgKSApIHJldHVybiB1cmw7XG5cblx0Ly8gUmVsYXRpdmUgVVJMXG5cdHJldHVybiBwYXRoICsgdXJsO1xuXG59XG5cbi8qKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNkZWZhdWx0LW1hdGVyaWFsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRNYXRlcmlhbCggY2FjaGUgKSB7XG5cblx0aWYgKCBjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Y2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF0gPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoIHtcblx0XHRcdGNvbG9yOiAweEZGRkZGRixcblx0XHRcdGVtaXNzaXZlOiAweDAwMDAwMCxcblx0XHRcdG1ldGFsbmVzczogMSxcblx0XHRcdHJvdWdobmVzczogMSxcblx0XHRcdHRyYW5zcGFyZW50OiBmYWxzZSxcblx0XHRcdGRlcHRoVGVzdDogdHJ1ZSxcblx0XHRcdHNpZGU6IEZyb250U2lkZVxuXHRcdH0gKTtcblxuXHR9XG5cblx0cmV0dXJuIGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdO1xuXG59XG5cbmZ1bmN0aW9uIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSgga25vd25FeHRlbnNpb25zLCBvYmplY3QsIG9iamVjdERlZiApIHtcblxuXHQvLyBBZGQgdW5rbm93biBnbFRGIGV4dGVuc2lvbnMgdG8gYW4gb2JqZWN0J3MgdXNlckRhdGEuXG5cblx0Zm9yICggY29uc3QgbmFtZSBpbiBvYmplY3REZWYuZXh0ZW5zaW9ucyApIHtcblxuXHRcdGlmICgga25vd25FeHRlbnNpb25zWyBuYW1lIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0b2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zID0gb2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zIHx8IHt9O1xuXHRcdFx0b2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zWyBuYW1lIF0gPSBvYmplY3REZWYuZXh0ZW5zaW9uc1sgbmFtZSBdO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0M0R8TWF0ZXJpYWx8QnVmZmVyR2VvbWV0cnl9IG9iamVjdFxuICogQHBhcmFtIHtHTFRGLmRlZmluaXRpb259IGdsdGZEZWZcbiAqL1xuZnVuY3Rpb24gYXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggb2JqZWN0LCBnbHRmRGVmICkge1xuXG5cdGlmICggZ2x0ZkRlZi5leHRyYXMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmICggdHlwZW9mIGdsdGZEZWYuZXh0cmFzID09PSAnb2JqZWN0JyApIHtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbiggb2JqZWN0LnVzZXJEYXRhLCBnbHRmRGVmLmV4dHJhcyApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSWdub3JpbmcgcHJpbWl0aXZlIHR5cGUgLmV4dHJhcywgJyArIGdsdGZEZWYuZXh0cmFzICk7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtb3JwaC10YXJnZXRzXG4gKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7QXJyYXk8R0xURi5UYXJnZXQ+fSB0YXJnZXRzXG4gKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxuICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJHZW9tZXRyeT59XG4gKi9cbmZ1bmN0aW9uIGFkZE1vcnBoVGFyZ2V0cyggZ2VvbWV0cnksIHRhcmdldHMsIHBhcnNlciApIHtcblxuXHRsZXQgaGFzTW9ycGhQb3NpdGlvbiA9IGZhbHNlO1xuXHRsZXQgaGFzTW9ycGhOb3JtYWwgPSBmYWxzZTtcblxuXHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdGlmICggdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSBoYXNNb3JwaFBvc2l0aW9uID0gdHJ1ZTtcblx0XHRpZiAoIHRhcmdldC5OT1JNQUwgIT09IHVuZGVmaW5lZCApIGhhc01vcnBoTm9ybWFsID0gdHJ1ZTtcblxuXHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiAmJiBoYXNNb3JwaE5vcm1hbCApIGJyZWFrO1xuXG5cdH1cblxuXHRpZiAoICEgaGFzTW9ycGhQb3NpdGlvbiAmJiAhIGhhc01vcnBoTm9ybWFsICkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSggZ2VvbWV0cnkgKTtcblxuXHRjb25zdCBwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMgPSBbXTtcblx0Y29uc3QgcGVuZGluZ05vcm1hbEFjY2Vzc29ycyA9IFtdO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICkge1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nQWNjZXNzb3IgPSB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuUE9TSVRJT04gKVxuXHRcdFx0XHQ6IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG5cblx0XHRcdHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycy5wdXNoKCBwZW5kaW5nQWNjZXNzb3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggaGFzTW9ycGhOb3JtYWwgKSB7XG5cblx0XHRcdGNvbnN0IHBlbmRpbmdBY2Nlc3NvciA9IHRhcmdldC5OT1JNQUwgIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuTk9STUFMIClcblx0XHRcdFx0OiBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbDtcblxuXHRcdFx0cGVuZGluZ05vcm1hbEFjY2Vzc29ycy5wdXNoKCBwZW5kaW5nQWNjZXNzb3IgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKCBbXG5cdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyApLFxuXHRcdFByb21pc2UuYWxsKCBwZW5kaW5nTm9ybWFsQWNjZXNzb3JzIClcblx0XSApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3JzICkge1xuXG5cdFx0Y29uc3QgbW9ycGhQb3NpdGlvbnMgPSBhY2Nlc3NvcnNbIDAgXTtcblx0XHRjb25zdCBtb3JwaE5vcm1hbHMgPSBhY2Nlc3NvcnNbIDEgXTtcblxuXHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiApIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvbiA9IG1vcnBoUG9zaXRpb25zO1xuXHRcdGlmICggaGFzTW9ycGhOb3JtYWwgKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMubm9ybWFsID0gbW9ycGhOb3JtYWxzO1xuXHRcdGdlb21ldHJ5Lm1vcnBoVGFyZ2V0c1JlbGF0aXZlID0gdHJ1ZTtcblxuXHRcdHJldHVybiBnZW9tZXRyeTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge01lc2h9IG1lc2hcbiAqIEBwYXJhbSB7R0xURi5NZXNofSBtZXNoRGVmXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZU1vcnBoVGFyZ2V0cyggbWVzaCwgbWVzaERlZiApIHtcblxuXHRtZXNoLnVwZGF0ZU1vcnBoVGFyZ2V0cygpO1xuXG5cdGlmICggbWVzaERlZi53ZWlnaHRzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbWVzaERlZi53ZWlnaHRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1sgaSBdID0gbWVzaERlZi53ZWlnaHRzWyBpIF07XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIC5leHRyYXMgaGFzIHVzZXItZGVmaW5lZCBkYXRhLCBzbyBjaGVjayB0aGF0IC5leHRyYXMudGFyZ2V0TmFtZXMgaXMgYW4gYXJyYXkuXG5cdGlmICggbWVzaERlZi5leHRyYXMgJiYgQXJyYXkuaXNBcnJheSggbWVzaERlZi5leHRyYXMudGFyZ2V0TmFtZXMgKSApIHtcblxuXHRcdGNvbnN0IHRhcmdldE5hbWVzID0gbWVzaERlZi5leHRyYXMudGFyZ2V0TmFtZXM7XG5cblx0XHRpZiAoIG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzLmxlbmd0aCA9PT0gdGFyZ2V0TmFtZXMubGVuZ3RoICkge1xuXG5cdFx0XHRtZXNoLm1vcnBoVGFyZ2V0RGljdGlvbmFyeSA9IHt9O1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0bWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnlbIHRhcmdldE5hbWVzWyBpIF0gXSA9IGk7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEludmFsaWQgZXh0cmFzLnRhcmdldE5hbWVzIGxlbmd0aC4gSWdub3JpbmcgbmFtZXMuJyApO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVLZXkoIHByaW1pdGl2ZURlZiApIHtcblxuXHRjb25zdCBkcmFjb0V4dGVuc2lvbiA9IHByaW1pdGl2ZURlZi5leHRlbnNpb25zICYmIHByaW1pdGl2ZURlZi5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF07XG5cdGxldCBnZW9tZXRyeUtleTtcblxuXHRpZiAoIGRyYWNvRXh0ZW5zaW9uICkge1xuXG5cdFx0Z2VvbWV0cnlLZXkgPSAnZHJhY286JyArIGRyYWNvRXh0ZW5zaW9uLmJ1ZmZlclZpZXdcblx0XHRcdFx0KyAnOicgKyBkcmFjb0V4dGVuc2lvbi5pbmRpY2VzXG5cdFx0XHRcdCsgJzonICsgY3JlYXRlQXR0cmlidXRlc0tleSggZHJhY29FeHRlbnNpb24uYXR0cmlidXRlcyApO1xuXG5cdH0gZWxzZSB7XG5cblx0XHRnZW9tZXRyeUtleSA9IHByaW1pdGl2ZURlZi5pbmRpY2VzICsgJzonICsgY3JlYXRlQXR0cmlidXRlc0tleSggcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXMgKSArICc6JyArIHByaW1pdGl2ZURlZi5tb2RlO1xuXG5cdH1cblxuXHRyZXR1cm4gZ2VvbWV0cnlLZXk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlc0tleSggYXR0cmlidXRlcyApIHtcblxuXHRsZXQgYXR0cmlidXRlc0tleSA9ICcnO1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyggYXR0cmlidXRlcyApLnNvcnQoKTtcblxuXHRmb3IgKCBsZXQgaSA9IDAsIGlsID0ga2V5cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdGF0dHJpYnV0ZXNLZXkgKz0ga2V5c1sgaSBdICsgJzonICsgYXR0cmlidXRlc1sga2V5c1sgaSBdIF0gKyAnOyc7XG5cblx0fVxuXG5cdHJldHVybiBhdHRyaWJ1dGVzS2V5O1xuXG59XG5cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggY29uc3RydWN0b3IgKSB7XG5cblx0Ly8gUmVmZXJlbmNlOlxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWVzaF9xdWFudGl6YXRpb24jZW5jb2RpbmctcXVhbnRpemVkLWRhdGFcblxuXHRzd2l0Y2ggKCBjb25zdHJ1Y3RvciApIHtcblxuXHRcdGNhc2UgSW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyAxMjc7XG5cblx0XHRjYXNlIFVpbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDI1NTtcblxuXHRcdGNhc2UgSW50MTZBcnJheTpcblx0XHRcdHJldHVybiAxIC8gMzI3Njc7XG5cblx0XHRjYXNlIFVpbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyA2NTUzNTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBub3JtYWxpemVkIGFjY2Vzc29yIGNvbXBvbmVudCB0eXBlLicgKTtcblxuXHR9XG5cbn1cblxuLyogR0xURiBQQVJTRVIgKi9cblxuY2xhc3MgR0xURlBhcnNlciB7XG5cblx0Y29uc3RydWN0b3IoIGpzb24gPSB7fSwgb3B0aW9ucyA9IHt9ICkge1xuXG5cdFx0dGhpcy5qc29uID0ganNvbjtcblx0XHR0aGlzLmV4dGVuc2lvbnMgPSB7fTtcblx0XHR0aGlzLnBsdWdpbnMgPSB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG5cdFx0Ly8gbG9hZGVyIG9iamVjdCBjYWNoZVxuXHRcdHRoaXMuY2FjaGUgPSBuZXcgR0xURlJlZ2lzdHJ5KCk7XG5cblx0XHQvLyBhc3NvY2lhdGlvbnMgYmV0d2VlbiBUaHJlZS5qcyBvYmplY3RzIGFuZCBnbFRGIGVsZW1lbnRzXG5cdFx0dGhpcy5hc3NvY2lhdGlvbnMgPSBuZXcgTWFwKCk7XG5cblx0XHQvLyBCdWZmZXJHZW9tZXRyeSBjYWNoaW5nXG5cdFx0dGhpcy5wcmltaXRpdmVDYWNoZSA9IHt9O1xuXG5cdFx0Ly8gT2JqZWN0M0QgaW5zdGFuY2UgY2FjaGVzXG5cdFx0dGhpcy5tZXNoQ2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXHRcdHRoaXMuY2FtZXJhQ2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXHRcdHRoaXMubGlnaHRDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cblx0XHR0aGlzLnRleHR1cmVDYWNoZSA9IHt9O1xuXG5cdFx0Ly8gVHJhY2sgbm9kZSBuYW1lcywgdG8gZW5zdXJlIG5vIGR1cGxpY2F0ZXNcblx0XHR0aGlzLm5vZGVOYW1lc1VzZWQgPSB7fTtcblxuXHRcdC8vIFVzZSBhbiBJbWFnZUJpdG1hcExvYWRlciBpZiBpbWFnZUJpdG1hcHMgYXJlIHN1cHBvcnRlZC4gTW92ZXMgbXVjaCBvZiB0aGVcblx0XHQvLyBleHBlbnNpdmUgd29yayBvZiB1cGxvYWRpbmcgYSB0ZXh0dXJlIHRvIHRoZSBHUFUgb2ZmIHRoZSBtYWluIHRocmVhZC5cblx0XHRpZiAoIHR5cGVvZiBjcmVhdGVJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgL0ZpcmVmb3gvLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdHRoaXMudGV4dHVyZUxvYWRlciA9IG5ldyBJbWFnZUJpdG1hcExvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMudGV4dHVyZUxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50ZXh0dXJlTG9hZGVyLnNldENyb3NzT3JpZ2luKCB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW4gKTtcblx0XHR0aGlzLnRleHR1cmVMb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5vcHRpb25zLnJlcXVlc3RIZWFkZXIgKTtcblxuXHRcdHRoaXMuZmlsZUxvYWRlciA9IG5ldyBGaWxlTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXHRcdHRoaXMuZmlsZUxvYWRlci5zZXRSZXNwb25zZVR5cGUoICdhcnJheWJ1ZmZlcicgKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJyApIHtcblxuXHRcdFx0dGhpcy5maWxlTG9hZGVyLnNldFdpdGhDcmVkZW50aWFscyggdHJ1ZSApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRzZXRFeHRlbnNpb25zKCBleHRlbnNpb25zICkge1xuXG5cdFx0dGhpcy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcblxuXHR9XG5cblx0c2V0UGx1Z2lucyggcGx1Z2lucyApIHtcblxuXHRcdHRoaXMucGx1Z2lucyA9IHBsdWdpbnM7XG5cblx0fVxuXG5cdHBhcnNlKCBvbkxvYWQsIG9uRXJyb3IgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblxuXHRcdC8vIENsZWFyIHRoZSBsb2FkZXIgY2FjaGVcblx0XHR0aGlzLmNhY2hlLnJlbW92ZUFsbCgpO1xuXG5cdFx0Ly8gTWFyayB0aGUgc3BlY2lhbCBub2Rlcy9tZXNoZXMgaW4ganNvbiBmb3IgZWZmaWNpZW50IHBhcnNlXG5cdFx0dGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0cmV0dXJuIGV4dC5fbWFya0RlZnMgJiYgZXh0Ll9tYXJrRGVmcygpO1xuXG5cdFx0fSApO1xuXG5cdFx0UHJvbWlzZS5hbGwoIHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdHJldHVybiBleHQuYmVmb3JlUm9vdCAmJiBleHQuYmVmb3JlUm9vdCgpO1xuXG5cdFx0fSApICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnc2NlbmUnICksXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdhbmltYXRpb24nICksXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdjYW1lcmEnICksXG5cblx0XHRcdF0gKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0XHRzY2VuZTogZGVwZW5kZW5jaWVzWyAwIF1bIGpzb24uc2NlbmUgfHwgMCBdLFxuXHRcdFx0XHRzY2VuZXM6IGRlcGVuZGVuY2llc1sgMCBdLFxuXHRcdFx0XHRhbmltYXRpb25zOiBkZXBlbmRlbmNpZXNbIDEgXSxcblx0XHRcdFx0Y2FtZXJhczogZGVwZW5kZW5jaWVzWyAyIF0sXG5cdFx0XHRcdGFzc2V0OiBqc29uLmFzc2V0LFxuXHRcdFx0XHRwYXJzZXI6IHBhcnNlcixcblx0XHRcdFx0dXNlckRhdGE6IHt9XG5cdFx0XHR9O1xuXG5cdFx0XHRhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHJlc3VsdCwganNvbiApO1xuXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCByZXN1bHQsIGpzb24gKTtcblxuXHRcdFx0UHJvbWlzZS5hbGwoIHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmFmdGVyUm9vdCAmJiBleHQuYWZ0ZXJSb290KCByZXN1bHQgKTtcblxuXHRcdFx0fSApICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdG9uTG9hZCggcmVzdWx0ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKS5jYXRjaCggb25FcnJvciApO1xuXG5cdH1cblxuXHQvKipcblx0ICogTWFya3MgdGhlIHNwZWNpYWwgbm9kZXMvbWVzaGVzIGluIGpzb24gZm9yIGVmZmljaWVudCBwYXJzZS5cblx0ICovXG5cdF9tYXJrRGVmcygpIHtcblxuXHRcdGNvbnN0IG5vZGVEZWZzID0gdGhpcy5qc29uLm5vZGVzIHx8IFtdO1xuXHRcdGNvbnN0IHNraW5EZWZzID0gdGhpcy5qc29uLnNraW5zIHx8IFtdO1xuXHRcdGNvbnN0IG1lc2hEZWZzID0gdGhpcy5qc29uLm1lc2hlcyB8fCBbXTtcblxuXHRcdC8vIE5vdGhpbmcgaW4gdGhlIG5vZGUgZGVmaW5pdGlvbiBpbmRpY2F0ZXMgd2hldGhlciBpdCBpcyBhIEJvbmUgb3IgYW5cblx0XHQvLyBPYmplY3QzRC4gVXNlIHRoZSBza2lucycgam9pbnQgcmVmZXJlbmNlcyB0byBtYXJrIGJvbmVzLlxuXHRcdGZvciAoIGxldCBza2luSW5kZXggPSAwLCBza2luTGVuZ3RoID0gc2tpbkRlZnMubGVuZ3RoOyBza2luSW5kZXggPCBza2luTGVuZ3RoOyBza2luSW5kZXggKysgKSB7XG5cblx0XHRcdGNvbnN0IGpvaW50cyA9IHNraW5EZWZzWyBza2luSW5kZXggXS5qb2ludHM7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBqb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0bm9kZURlZnNbIGpvaW50c1sgaSBdIF0uaXNCb25lID0gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gSXRlcmF0ZSBvdmVyIGFsbCBub2RlcywgbWFya2luZyByZWZlcmVuY2VzIHRvIHNoYXJlZCByZXNvdXJjZXMsXG5cdFx0Ly8gYXMgd2VsbCBhcyBza2VsZXRvbiBqb2ludHMuXG5cdFx0Zm9yICggbGV0IG5vZGVJbmRleCA9IDAsIG5vZGVMZW5ndGggPSBub2RlRGVmcy5sZW5ndGg7IG5vZGVJbmRleCA8IG5vZGVMZW5ndGg7IG5vZGVJbmRleCArKyApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZURlZiA9IG5vZGVEZWZzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLm1lc2ggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHR0aGlzLl9hZGROb2RlUmVmKCB0aGlzLm1lc2hDYWNoZSwgbm9kZURlZi5tZXNoICk7XG5cblx0XHRcdFx0Ly8gTm90aGluZyBpbiB0aGUgbWVzaCBkZWZpbml0aW9uIGluZGljYXRlcyB3aGV0aGVyIGl0IGlzXG5cdFx0XHRcdC8vIGEgU2tpbm5lZE1lc2ggb3IgTWVzaC4gVXNlIHRoZSBub2RlJ3MgbWVzaCByZWZlcmVuY2Vcblx0XHRcdFx0Ly8gdG8gbWFyayBTa2lubmVkTWVzaCBpZiBub2RlIGhhcyBza2luLlxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2tpbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bWVzaERlZnNbIG5vZGVEZWYubWVzaCBdLmlzU2tpbm5lZE1lc2ggPSB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYuY2FtZXJhICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0dGhpcy5fYWRkTm9kZVJlZiggdGhpcy5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ291bnRzIHJlZmVyZW5jZXMgdG8gc2hhcmVkIG5vZGUgLyBPYmplY3QzRCByZXNvdXJjZXMuIFRoZXNlIHJlc291cmNlc1xuXHQgKiBjYW4gYmUgcmV1c2VkLCBvciBcImluc3RhbnRpYXRlZFwiLCBhdCBtdWx0aXBsZSBub2RlcyBpbiB0aGUgc2NlbmVcblx0ICogaGllcmFyY2h5LiBNZXNoLCBDYW1lcmEsIGFuZCBMaWdodCBpbnN0YW5jZXMgYXJlIGluc3RhbnRpYXRlZCBhbmQgbXVzdFxuXHQgKiBiZSBtYXJrZWQuIE5vbi1zY2VuZWdyYXBoIHJlc291cmNlcyAobGlrZSBNYXRlcmlhbHMsIEdlb21ldHJpZXMsIGFuZFxuXHQgKiBUZXh0dXJlcykgY2FuIGJlIHJldXNlZCBkaXJlY3RseSBhbmQgYXJlIG5vdCBtYXJrZWQgaGVyZS5cblx0ICpcblx0ICogRXhhbXBsZTogQ2VzaXVtTWlsa1RydWNrIHNhbXBsZSBtb2RlbCByZXVzZXMgXCJXaGVlbFwiIG1lc2hlcy5cblx0ICovXG5cdF9hZGROb2RlUmVmKCBjYWNoZSwgaW5kZXggKSB7XG5cblx0XHRpZiAoIGluZGV4ID09PSB1bmRlZmluZWQgKSByZXR1cm47XG5cblx0XHRpZiAoIGNhY2hlLnJlZnNbIGluZGV4IF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y2FjaGUucmVmc1sgaW5kZXggXSA9IGNhY2hlLnVzZXNbIGluZGV4IF0gPSAwO1xuXG5cdFx0fVxuXG5cdFx0Y2FjaGUucmVmc1sgaW5kZXggXSArKztcblxuXHR9XG5cblx0LyoqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gYSBzaGFyZWQgcmVzb3VyY2UsIGNsb25pbmcgaXQgaWYgbmVjZXNzYXJ5LiAqL1xuXHRfZ2V0Tm9kZVJlZiggY2FjaGUsIGluZGV4LCBvYmplY3QgKSB7XG5cblx0XHRpZiAoIGNhY2hlLnJlZnNbIGluZGV4IF0gPD0gMSApIHJldHVybiBvYmplY3Q7XG5cblx0XHRjb25zdCByZWYgPSBvYmplY3QuY2xvbmUoKTtcblxuXHRcdC8vIFByb3BhZ2F0ZXMgbWFwcGluZ3MgdG8gdGhlIGNsb25lZCBvYmplY3QsIHByZXZlbnRzIG1hcHBpbmdzIG9uIHRoZVxuXHRcdC8vIG9yaWdpbmFsIG9iamVjdCBmcm9tIGJlaW5nIGxvc3QuXG5cdFx0Y29uc3QgdXBkYXRlTWFwcGluZ3MgPSAoIG9yaWdpbmFsLCBjbG9uZSApID0+IHtcblxuXHRcdFx0Y29uc3QgbWFwcGluZ3MgPSB0aGlzLmFzc29jaWF0aW9ucy5nZXQoIG9yaWdpbmFsICk7XG5cdFx0XHRpZiAoIG1hcHBpbmdzICE9IG51bGwgKSB7XG5cblx0XHRcdFx0dGhpcy5hc3NvY2lhdGlvbnMuc2V0KCBjbG9uZSwgbWFwcGluZ3MgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBjb25zdCBbIGksIGNoaWxkIF0gb2Ygb3JpZ2luYWwuY2hpbGRyZW4uZW50cmllcygpICkge1xuXG5cdFx0XHRcdHVwZGF0ZU1hcHBpbmdzKCBjaGlsZCwgY2xvbmUuY2hpbGRyZW5bIGkgXSApO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdFx0dXBkYXRlTWFwcGluZ3MoIG9iamVjdCwgcmVmICk7XG5cblx0XHRyZWYubmFtZSArPSAnX2luc3RhbmNlXycgKyAoIGNhY2hlLnVzZXNbIGluZGV4IF0gKysgKTtcblxuXHRcdHJldHVybiByZWY7XG5cblx0fVxuXG5cdF9pbnZva2VPbmUoIGZ1bmMgKSB7XG5cblx0XHRjb25zdCBleHRlbnNpb25zID0gT2JqZWN0LnZhbHVlcyggdGhpcy5wbHVnaW5zICk7XG5cdFx0ZXh0ZW5zaW9ucy5wdXNoKCB0aGlzICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZnVuYyggZXh0ZW5zaW9uc1sgaSBdICk7XG5cblx0XHRcdGlmICggcmVzdWx0ICkgcmV0dXJuIHJlc3VsdDtcblxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXG5cdH1cblxuXHRfaW52b2tlQWxsKCBmdW5jICkge1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IE9iamVjdC52YWx1ZXMoIHRoaXMucGx1Z2lucyApO1xuXHRcdGV4dGVuc2lvbnMudW5zaGlmdCggdGhpcyApO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGZ1bmMoIGV4dGVuc2lvbnNbIGkgXSApO1xuXG5cdFx0XHRpZiAoIHJlc3VsdCApIHBlbmRpbmcucHVzaCggcmVzdWx0ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGVuZGluZztcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3RzIHRoZSBzcGVjaWZpZWQgZGVwZW5kZW5jeSBhc3luY2hyb25vdXNseSwgd2l0aCBjYWNoaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QzRHxNYXRlcmlhbHxUSFJFRS5UZXh0dXJlfEFuaW1hdGlvbkNsaXB8QXJyYXlCdWZmZXJ8T2JqZWN0Pn1cblx0ICovXG5cdGdldERlcGVuZGVuY3koIHR5cGUsIGluZGV4ICkge1xuXG5cdFx0Y29uc3QgY2FjaGVLZXkgPSB0eXBlICsgJzonICsgaW5kZXg7XG5cdFx0bGV0IGRlcGVuZGVuY3kgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdGlmICggISBkZXBlbmRlbmN5ICkge1xuXG5cdFx0XHRzd2l0Y2ggKCB0eXBlICkge1xuXG5cdFx0XHRcdGNhc2UgJ3NjZW5lJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2NlbmUoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbm9kZSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZE5vZGUoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbWVzaCc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZE1lc2ggJiYgZXh0LmxvYWRNZXNoKCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2FjY2Vzc29yJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQWNjZXNzb3IoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYnVmZmVyVmlldyc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZEJ1ZmZlclZpZXcgJiYgZXh0LmxvYWRCdWZmZXJWaWV3KCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2J1ZmZlcic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEJ1ZmZlciggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZE1hdGVyaWFsICYmIGV4dC5sb2FkTWF0ZXJpYWwoIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAndGV4dHVyZSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZFRleHR1cmUgJiYgZXh0LmxvYWRUZXh0dXJlKCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3NraW4nOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRTa2luKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2FuaW1hdGlvbic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEFuaW1hdGlvbiggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdjYW1lcmEnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRDYW1lcmEoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdVbmtub3duIHR5cGU6ICcgKyB0eXBlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBkZXBlbmRlbmN5ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jeTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3RzIGFsbCBkZXBlbmRlbmNpZXMgb2YgdGhlIHNwZWNpZmllZCB0eXBlIGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8T2JqZWN0Pj59XG5cdCAqL1xuXHRnZXREZXBlbmRlbmNpZXMoIHR5cGUgKSB7XG5cblx0XHRsZXQgZGVwZW5kZW5jaWVzID0gdGhpcy5jYWNoZS5nZXQoIHR5cGUgKTtcblxuXHRcdGlmICggISBkZXBlbmRlbmNpZXMgKSB7XG5cblx0XHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0XHRjb25zdCBkZWZzID0gdGhpcy5qc29uWyB0eXBlICsgKCB0eXBlID09PSAnbWVzaCcgPyAnZXMnIDogJ3MnICkgXSB8fCBbXTtcblxuXHRcdFx0ZGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoIGRlZnMubWFwKCBmdW5jdGlvbiAoIGRlZiwgaW5kZXggKSB7XG5cblx0XHRcdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCB0eXBlLCBpbmRleCApO1xuXG5cdFx0XHR9ICkgKTtcblxuXHRcdFx0dGhpcy5jYWNoZS5hZGQoIHR5cGUsIGRlcGVuZGVuY2llcyApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY2llcztcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYnVmZmVycy1hbmQtYnVmZmVyLXZpZXdzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXJJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cblx0ICovXG5cdGxvYWRCdWZmZXIoIGJ1ZmZlckluZGV4ICkge1xuXG5cdFx0Y29uc3QgYnVmZmVyRGVmID0gdGhpcy5qc29uLmJ1ZmZlcnNbIGJ1ZmZlckluZGV4IF07XG5cdFx0Y29uc3QgbG9hZGVyID0gdGhpcy5maWxlTG9hZGVyO1xuXG5cdFx0aWYgKCBidWZmZXJEZWYudHlwZSAmJiBidWZmZXJEZWYudHlwZSAhPT0gJ2FycmF5YnVmZmVyJyApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogJyArIGJ1ZmZlckRlZi50eXBlICsgJyBidWZmZXIgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLicgKTtcblxuXHRcdH1cblxuXHRcdC8vIElmIHByZXNlbnQsIEdMQiBjb250YWluZXIgaXMgcmVxdWlyZWQgdG8gYmUgdGhlIGZpcnN0IGJ1ZmZlci5cblx0XHRpZiAoIGJ1ZmZlckRlZi51cmkgPT09IHVuZGVmaW5lZCAmJiBidWZmZXJJbmRleCA9PT0gMCApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggdGhpcy5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdLmJvZHkgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSwgcmVqZWN0ICkge1xuXG5cdFx0XHRsb2FkZXIubG9hZCggcmVzb2x2ZVVSTCggYnVmZmVyRGVmLnVyaSwgb3B0aW9ucy5wYXRoICksIHJlc29sdmUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdHJlamVjdCggbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogRmFpbGVkIHRvIGxvYWQgYnVmZmVyIFwiJyArIGJ1ZmZlckRlZi51cmkgKyAnXCIuJyApICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYnVmZmVycy1hbmQtYnVmZmVyLXZpZXdzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXJWaWV3SW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59XG5cdCAqL1xuXHRsb2FkQnVmZmVyVmlldyggYnVmZmVyVmlld0luZGV4ICkge1xuXG5cdFx0Y29uc3QgYnVmZmVyVmlld0RlZiA9IHRoaXMuanNvbi5idWZmZXJWaWV3c1sgYnVmZmVyVmlld0luZGV4IF07XG5cblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyJywgYnVmZmVyVmlld0RlZi5idWZmZXIgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlciApIHtcblxuXHRcdFx0Y29uc3QgYnl0ZUxlbmd0aCA9IGJ1ZmZlclZpZXdEZWYuYnl0ZUxlbmd0aCB8fCAwO1xuXHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXdEZWYuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0cmV0dXJuIGJ1ZmZlci5zbGljZSggYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGggKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYWNjZXNzb3JzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhY2Nlc3NvckluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyQXR0cmlidXRlfEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlPn1cblx0ICovXG5cdGxvYWRBY2Nlc3NvciggYWNjZXNzb3JJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblxuXHRcdGNvbnN0IGFjY2Vzc29yRGVmID0gdGhpcy5qc29uLmFjY2Vzc29yc1sgYWNjZXNzb3JJbmRleCBdO1xuXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ID09PSB1bmRlZmluZWQgJiYgYWNjZXNzb3JEZWYuc3BhcnNlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIElnbm9yZSBlbXB0eSBhY2Nlc3NvcnMsIHdoaWNoIG1heSBiZSB1c2VkIHRvIGRlY2xhcmUgcnVudGltZVxuXHRcdFx0Ly8gaW5mb3JtYXRpb24gYWJvdXQgYXR0cmlidXRlcyBjb21pbmcgZnJvbSBhbm90aGVyIHNvdXJjZSAoZS5nLiBEcmFjb1xuXHRcdFx0Ly8gY29tcHJlc3Npb24gZXh0ZW5zaW9uKS5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIG51bGwgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmdCdWZmZXJWaWV3cyA9IFtdO1xuXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyApICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggbnVsbCApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5zcGFyc2UgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5idWZmZXJWaWV3ICkgKTtcblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuc3BhcnNlLnZhbHVlcy5idWZmZXJWaWV3ICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZ0J1ZmZlclZpZXdzICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3cyApIHtcblxuXHRcdFx0Y29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdzWyAwIF07XG5cblx0XHRcdGNvbnN0IGl0ZW1TaXplID0gV0VCR0xfVFlQRV9TSVpFU1sgYWNjZXNzb3JEZWYudHlwZSBdO1xuXHRcdFx0Y29uc3QgVHlwZWRBcnJheSA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHQvLyBGb3IgVkVDMzogaXRlbVNpemUgaXMgMywgZWxlbWVudEJ5dGVzIGlzIDQsIGl0ZW1CeXRlcyBpcyAxMi5cblx0XHRcdGNvbnN0IGVsZW1lbnRCeXRlcyA9IFR5cGVkQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XG5cdFx0XHRjb25zdCBpdGVtQnl0ZXMgPSBlbGVtZW50Qnl0ZXMgKiBpdGVtU2l6ZTtcblx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBhY2Nlc3NvckRlZi5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRjb25zdCBieXRlU3RyaWRlID0gYWNjZXNzb3JEZWYuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkID8ganNvbi5idWZmZXJWaWV3c1sgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyBdLmJ5dGVTdHJpZGUgOiB1bmRlZmluZWQ7XG5cdFx0XHRjb25zdCBub3JtYWxpemVkID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcblx0XHRcdGxldCBhcnJheSwgYnVmZmVyQXR0cmlidXRlO1xuXG5cdFx0XHQvLyBUaGUgYnVmZmVyIGlzIG5vdCBpbnRlcmxlYXZlZCBpZiB0aGUgc3RyaWRlIGlzIHRoZSBpdGVtIHNpemUgaW4gYnl0ZXMuXG5cdFx0XHRpZiAoIGJ5dGVTdHJpZGUgJiYgYnl0ZVN0cmlkZSAhPT0gaXRlbUJ5dGVzICkge1xuXG5cdFx0XHRcdC8vIEVhY2ggXCJzbGljZVwiIG9mIHRoZSBidWZmZXIsIGFzIGRlZmluZWQgYnkgJ2NvdW50JyBlbGVtZW50cyBvZiAnYnl0ZVN0cmlkZScgYnl0ZXMsIGdldHMgaXRzIG93biBJbnRlcmxlYXZlZEJ1ZmZlclxuXHRcdFx0XHQvLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBJQkEuY291bnQgcmVmbGVjdHMgYWNjZXNzb3IuY291bnQgcHJvcGVybHlcblx0XHRcdFx0Y29uc3QgaWJTbGljZSA9IE1hdGguZmxvb3IoIGJ5dGVPZmZzZXQgLyBieXRlU3RyaWRlICk7XG5cdFx0XHRcdGNvbnN0IGliQ2FjaGVLZXkgPSAnSW50ZXJsZWF2ZWRCdWZmZXI6JyArIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgKyAnOicgKyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlICsgJzonICsgaWJTbGljZSArICc6JyArIGFjY2Vzc29yRGVmLmNvdW50O1xuXHRcdFx0XHRsZXQgaWIgPSBwYXJzZXIuY2FjaGUuZ2V0KCBpYkNhY2hlS2V5ICk7XG5cblx0XHRcdFx0aWYgKCAhIGliICkge1xuXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlldywgaWJTbGljZSAqIGJ5dGVTdHJpZGUsIGFjY2Vzc29yRGVmLmNvdW50ICogYnl0ZVN0cmlkZSAvIGVsZW1lbnRCeXRlcyApO1xuXG5cdFx0XHRcdFx0Ly8gSW50ZWdlciBwYXJhbWV0ZXJzIHRvIElCL0lCQSBhcmUgaW4gYXJyYXkgZWxlbWVudHMsIG5vdCBieXRlcy5cblx0XHRcdFx0XHRpYiA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlciggYXJyYXksIGJ5dGVTdHJpZGUgLyBlbGVtZW50Qnl0ZXMgKTtcblxuXHRcdFx0XHRcdHBhcnNlci5jYWNoZS5hZGQoIGliQ2FjaGVLZXksIGliICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSggaWIsIGl0ZW1TaXplLCAoIGJ5dGVPZmZzZXQgJSBieXRlU3RyaWRlICkgLyBlbGVtZW50Qnl0ZXMsIG5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIGJ1ZmZlclZpZXcgPT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQsIGFjY2Vzc29yRGVmLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNzcGFyc2UtYWNjZXNzb3JzXG5cdFx0XHRpZiAoIGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGl0ZW1TaXplSW5kaWNlcyA9IFdFQkdMX1RZUEVfU0laRVMuU0NBTEFSO1xuXHRcdFx0XHRjb25zdCBUeXBlZEFycmF5SW5kaWNlcyA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXRJbmRpY2VzID0gYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0VmFsdWVzID0gYWNjZXNzb3JEZWYuc3BhcnNlLnZhbHVlcy5ieXRlT2Zmc2V0IHx8IDA7XG5cblx0XHRcdFx0Y29uc3Qgc3BhcnNlSW5kaWNlcyA9IG5ldyBUeXBlZEFycmF5SW5kaWNlcyggYnVmZmVyVmlld3NbIDEgXSwgYnl0ZU9mZnNldEluZGljZXMsIGFjY2Vzc29yRGVmLnNwYXJzZS5jb3VudCAqIGl0ZW1TaXplSW5kaWNlcyApO1xuXHRcdFx0XHRjb25zdCBzcGFyc2VWYWx1ZXMgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlld3NbIDIgXSwgYnl0ZU9mZnNldFZhbHVlcywgYWNjZXNzb3JEZWYuc3BhcnNlLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHRpZiAoIGJ1ZmZlclZpZXcgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHQvLyBBdm9pZCBtb2RpZnlpbmcgdGhlIG9yaWdpbmFsIEFycmF5QnVmZmVyLCBpZiB0aGUgYnVmZmVyVmlldyB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCB6ZXJvZXMuXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYnVmZmVyQXR0cmlidXRlLmFycmF5LnNsaWNlKCksIGJ1ZmZlckF0dHJpYnV0ZS5pdGVtU2l6ZSwgYnVmZmVyQXR0cmlidXRlLm5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHNwYXJzZUluZGljZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHNwYXJzZUluZGljZXNbIGkgXTtcblxuXHRcdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZS5zZXRYKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gMiApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRZKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAxIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDMgKSBidWZmZXJBdHRyaWJ1dGUuc2V0WiggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMiBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSA0ICkgYnVmZmVyQXR0cmlidXRlLnNldFcoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDMgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gNSApIHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGl0ZW1TaXplIGluIHNwYXJzZSBCdWZmZXJBdHRyaWJ1dGUuJyApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYnVmZmVyQXR0cmlidXRlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3RleHR1cmVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0ZXh0dXJlSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxUSFJFRS5UZXh0dXJlPn1cblx0ICovXG5cdGxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXHRcdGNvbnN0IHNvdXJjZSA9IGpzb24uaW1hZ2VzWyB0ZXh0dXJlRGVmLnNvdXJjZSBdO1xuXG5cdFx0bGV0IGxvYWRlciA9IHRoaXMudGV4dHVyZUxvYWRlcjtcblxuXHRcdGlmICggc291cmNlLnVyaSApIHtcblxuXHRcdFx0Y29uc3QgaGFuZGxlciA9IG9wdGlvbnMubWFuYWdlci5nZXRIYW5kbGVyKCBzb3VyY2UudXJpICk7XG5cdFx0XHRpZiAoIGhhbmRsZXIgIT09IG51bGwgKSBsb2FkZXIgPSBoYW5kbGVyO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApO1xuXG5cdH1cblxuXHRsb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cblx0XHRjb25zdCBjYWNoZUtleSA9ICggc291cmNlLnVyaSB8fCBzb3VyY2UuYnVmZmVyVmlldyApICsgJzonICsgdGV4dHVyZURlZi5zYW1wbGVyO1xuXG5cdFx0aWYgKCB0aGlzLnRleHR1cmVDYWNoZVsgY2FjaGVLZXkgXSApIHtcblxuXHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzIxNTU5LlxuXHRcdFx0cmV0dXJuIHRoaXMudGV4dHVyZUNhY2hlWyBjYWNoZUtleSBdO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgVVJMID0gc2VsZi5VUkwgfHwgc2VsZi53ZWJraXRVUkw7XG5cblx0XHRsZXQgc291cmNlVVJJID0gc291cmNlLnVyaSB8fCAnJztcblx0XHRsZXQgaXNPYmplY3RVUkwgPSBmYWxzZTtcblxuXHRcdGlmICggc291cmNlLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gTG9hZCBiaW5hcnkgaW1hZ2UgZGF0YSBmcm9tIGJ1ZmZlclZpZXcsIGlmIHByb3ZpZGVkLlxuXG5cdFx0XHRzb3VyY2VVUkkgPSBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBzb3VyY2UuYnVmZmVyVmlldyApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlldyApIHtcblxuXHRcdFx0XHRpc09iamVjdFVSTCA9IHRydWU7XG5cdFx0XHRcdGNvbnN0IGJsb2IgPSBuZXcgQmxvYiggWyBidWZmZXJWaWV3IF0sIHsgdHlwZTogc291cmNlLm1pbWVUeXBlIH0gKTtcblx0XHRcdFx0c291cmNlVVJJID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXHRcdFx0XHRyZXR1cm4gc291cmNlVVJJO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzb3VyY2UudXJpID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEltYWdlICcgKyB0ZXh0dXJlSW5kZXggKyAnIGlzIG1pc3NpbmcgVVJJIGFuZCBidWZmZXJWaWV3JyApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSggc291cmNlVVJJICkudGhlbiggZnVuY3Rpb24gKCBzb3VyY2VVUkkgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlLCByZWplY3QgKSB7XG5cblx0XHRcdFx0bGV0IG9uTG9hZCA9IHJlc29sdmU7XG5cblx0XHRcdFx0aWYgKCBsb2FkZXIuaXNJbWFnZUJpdG1hcExvYWRlciA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdG9uTG9hZCA9IGZ1bmN0aW9uICggaW1hZ2VCaXRtYXAgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSggaW1hZ2VCaXRtYXAgKTtcblx0XHRcdFx0XHRcdHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRyZXNvbHZlKCB0ZXh0dXJlICk7XG5cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsb2FkZXIubG9hZCggcmVzb2x2ZVVSTCggc291cmNlVVJJLCBvcHRpb25zLnBhdGggKSwgb25Mb2FkLCB1bmRlZmluZWQsIHJlamVjdCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG5cdFx0XHQvLyBDbGVhbiB1cCByZXNvdXJjZXMgYW5kIGNvbmZpZ3VyZSBUZXh0dXJlLlxuXG5cdFx0XHRpZiAoIGlzT2JqZWN0VVJMID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoIHNvdXJjZVVSSSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRleHR1cmUuZmxpcFkgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCB0ZXh0dXJlRGVmLm5hbWUgKSB0ZXh0dXJlLm5hbWUgPSB0ZXh0dXJlRGVmLm5hbWU7XG5cblx0XHRcdGNvbnN0IHNhbXBsZXJzID0ganNvbi5zYW1wbGVycyB8fCB7fTtcblx0XHRcdGNvbnN0IHNhbXBsZXIgPSBzYW1wbGVyc1sgdGV4dHVyZURlZi5zYW1wbGVyIF0gfHwge307XG5cblx0XHRcdHRleHR1cmUubWFnRmlsdGVyID0gV0VCR0xfRklMVEVSU1sgc2FtcGxlci5tYWdGaWx0ZXIgXSB8fCBMaW5lYXJGaWx0ZXI7XG5cdFx0XHR0ZXh0dXJlLm1pbkZpbHRlciA9IFdFQkdMX0ZJTFRFUlNbIHNhbXBsZXIubWluRmlsdGVyIF0gfHwgTGluZWFyTWlwbWFwTGluZWFyRmlsdGVyO1xuXHRcdFx0dGV4dHVyZS53cmFwUyA9IFdFQkdMX1dSQVBQSU5HU1sgc2FtcGxlci53cmFwUyBdIHx8IFJlcGVhdFdyYXBwaW5nO1xuXHRcdFx0dGV4dHVyZS53cmFwVCA9IFdFQkdMX1dSQVBQSU5HU1sgc2FtcGxlci53cmFwVCBdIHx8IFJlcGVhdFdyYXBwaW5nO1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggdGV4dHVyZSwgeyB0ZXh0dXJlczogdGV4dHVyZUluZGV4IH0gKTtcblxuXHRcdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0XHR9ICkuY2F0Y2goIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IENvdWxkblxcJ3QgbG9hZCB0ZXh0dXJlJywgc291cmNlVVJJICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMudGV4dHVyZUNhY2hlWyBjYWNoZUtleSBdID0gcHJvbWlzZTtcblxuXHRcdHJldHVybiBwcm9taXNlO1xuXG5cdH1cblxuXHQvKipcblx0ICogQXN5bmNocm9ub3VzbHkgYXNzaWducyBhIHRleHR1cmUgdG8gdGhlIGdpdmVuIG1hdGVyaWFsIHBhcmFtZXRlcnMuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtYXRlcmlhbFBhcmFtc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWFwTmFtZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gbWFwRGVmXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VGV4dHVyZT59XG5cdCAqL1xuXHRhc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgbWFwTmFtZSwgbWFwRGVmICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICd0ZXh0dXJlJywgbWFwRGVmLmluZGV4ICkudGhlbiggZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG5cdFx0XHQvLyBNYXRlcmlhbHMgc2FtcGxlIGFvTWFwIGZyb20gVVYgc2V0IDEgYW5kIG90aGVyIG1hcHMgZnJvbSBVViBzZXQgMCAtIHRoaXMgY2FuJ3QgYmUgY29uZmlndXJlZFxuXHRcdFx0Ly8gSG93ZXZlciwgd2Ugd2lsbCBjb3B5IFVWIHNldCAwIHRvIFVWIHNldCAxIG9uIGRlbWFuZCBmb3IgYW9NYXBcblx0XHRcdGlmICggbWFwRGVmLnRleENvb3JkICE9PSB1bmRlZmluZWQgJiYgbWFwRGVmLnRleENvb3JkICE9IDAgJiYgISAoIG1hcE5hbWUgPT09ICdhb01hcCcgJiYgbWFwRGVmLnRleENvb3JkID09IDEgKSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0ICcgKyBtYXBEZWYudGV4Q29vcmQgKyAnIGZvciB0ZXh0dXJlICcgKyBtYXBOYW1lICsgJyBub3QgeWV0IHN1cHBvcnRlZC4nICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBwYXJzZXIuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXSApIHtcblxuXHRcdFx0XHRjb25zdCB0cmFuc2Zvcm0gPSBtYXBEZWYuZXh0ZW5zaW9ucyAhPT0gdW5kZWZpbmVkID8gbWFwRGVmLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0gOiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0aWYgKCB0cmFuc2Zvcm0gKSB7XG5cblx0XHRcdFx0XHRjb25zdCBnbHRmUmVmZXJlbmNlID0gcGFyc2VyLmFzc29jaWF0aW9ucy5nZXQoIHRleHR1cmUgKTtcblx0XHRcdFx0XHR0ZXh0dXJlID0gcGFyc2VyLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0uZXh0ZW5kVGV4dHVyZSggdGV4dHVyZSwgdHJhbnNmb3JtICk7XG5cdFx0XHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIHRleHR1cmUsIGdsdGZSZWZlcmVuY2UgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXNbIG1hcE5hbWUgXSA9IHRleHR1cmU7XG5cblx0XHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQXNzaWducyBmaW5hbCBtYXRlcmlhbCB0byBhIE1lc2gsIExpbmUsIG9yIFBvaW50cyBpbnN0YW5jZS4gVGhlIGluc3RhbmNlXG5cdCAqIGFscmVhZHkgaGFzIGEgbWF0ZXJpYWwgKGdlbmVyYXRlZCBmcm9tIHRoZSBnbFRGIG1hdGVyaWFsIG9wdGlvbnMgYWxvbmUpXG5cdCAqIGJ1dCByZXVzZSBvZiB0aGUgc2FtZSBnbFRGIG1hdGVyaWFsIG1heSByZXF1aXJlIG11bHRpcGxlIHRocmVlanMgbWF0ZXJpYWxzXG5cdCAqIHRvIGFjY29tbW9kYXRlIGRpZmZlcmVudCBwcmltaXRpdmUgdHlwZXMsIGRlZmluZXMsIGV0Yy4gTmV3IG1hdGVyaWFscyB3aWxsXG5cdCAqIGJlIGNyZWF0ZWQgaWYgbmVjZXNzYXJ5LCBhbmQgcmV1c2VkIGZyb20gYSBjYWNoZS5cblx0ICogQHBhcmFtICB7T2JqZWN0M0R9IG1lc2ggTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLlxuXHQgKi9cblx0YXNzaWduRmluYWxNYXRlcmlhbCggbWVzaCApIHtcblxuXHRcdGNvbnN0IGdlb21ldHJ5ID0gbWVzaC5nZW9tZXRyeTtcblx0XHRsZXQgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsO1xuXG5cdFx0Y29uc3QgdXNlRGVyaXZhdGl2ZVRhbmdlbnRzID0gZ2VvbWV0cnkuYXR0cmlidXRlcy50YW5nZW50ID09PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgdXNlVmVydGV4Q29sb3JzID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5jb2xvciAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHVzZUZsYXRTaGFkaW5nID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWwgPT09IHVuZGVmaW5lZDtcblxuXHRcdGlmICggbWVzaC5pc1BvaW50cyApIHtcblxuXHRcdFx0Y29uc3QgY2FjaGVLZXkgPSAnUG9pbnRzTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQ7XG5cblx0XHRcdGxldCBwb2ludHNNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgcG9pbnRzTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoKTtcblx0XHRcdFx0TWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggcG9pbnRzTWF0ZXJpYWwsIG1hdGVyaWFsICk7XG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLmNvbG9yLmNvcHkoIG1hdGVyaWFsLmNvbG9yICk7XG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLm1hcCA9IG1hdGVyaWFsLm1hcDtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwuc2l6ZUF0dGVudWF0aW9uID0gZmFsc2U7IC8vIGdsVEYgc3BlYyBzYXlzIHBvaW50cyBzaG91bGQgYmUgMXB4XG5cblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBwb2ludHNNYXRlcmlhbCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsID0gcG9pbnRzTWF0ZXJpYWw7XG5cblx0XHR9IGVsc2UgaWYgKCBtZXNoLmlzTGluZSApIHtcblxuXHRcdFx0Y29uc3QgY2FjaGVLZXkgPSAnTGluZUJhc2ljTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQ7XG5cblx0XHRcdGxldCBsaW5lTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdFx0aWYgKCAhIGxpbmVNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRsaW5lTWF0ZXJpYWwgPSBuZXcgTGluZUJhc2ljTWF0ZXJpYWwoKTtcblx0XHRcdFx0TWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggbGluZU1hdGVyaWFsLCBtYXRlcmlhbCApO1xuXHRcdFx0XHRsaW5lTWF0ZXJpYWwuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGxpbmVNYXRlcmlhbCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsID0gbGluZU1hdGVyaWFsO1xuXG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgdGhlIG1hdGVyaWFsIGlmIGl0IHdpbGwgYmUgbW9kaWZpZWRcblx0XHRpZiAoIHVzZURlcml2YXRpdmVUYW5nZW50cyB8fCB1c2VWZXJ0ZXhDb2xvcnMgfHwgdXNlRmxhdFNoYWRpbmcgKSB7XG5cblx0XHRcdGxldCBjYWNoZUtleSA9ICdDbG9uZWRNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZCArICc6JztcblxuXHRcdFx0aWYgKCBtYXRlcmlhbC5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCApIGNhY2hlS2V5ICs9ICdzcGVjdWxhci1nbG9zc2luZXNzOic7XG5cdFx0XHRpZiAoIHVzZURlcml2YXRpdmVUYW5nZW50cyApIGNhY2hlS2V5ICs9ICdkZXJpdmF0aXZlLXRhbmdlbnRzOic7XG5cdFx0XHRpZiAoIHVzZVZlcnRleENvbG9ycyApIGNhY2hlS2V5ICs9ICd2ZXJ0ZXgtY29sb3JzOic7XG5cdFx0XHRpZiAoIHVzZUZsYXRTaGFkaW5nICkgY2FjaGVLZXkgKz0gJ2ZsYXQtc2hhZGluZzonO1xuXG5cdFx0XHRsZXQgY2FjaGVkTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdFx0aWYgKCAhIGNhY2hlZE1hdGVyaWFsICkge1xuXG5cdFx0XHRcdGNhY2hlZE1hdGVyaWFsID0gbWF0ZXJpYWwuY2xvbmUoKTtcblxuXHRcdFx0XHRpZiAoIHVzZVZlcnRleENvbG9ycyApIGNhY2hlZE1hdGVyaWFsLnZlcnRleENvbG9ycyA9IHRydWU7XG5cdFx0XHRcdGlmICggdXNlRmxhdFNoYWRpbmcgKSBjYWNoZWRNYXRlcmlhbC5mbGF0U2hhZGluZyA9IHRydWU7XG5cblx0XHRcdFx0aWYgKCB1c2VEZXJpdmF0aXZlVGFuZ2VudHMgKSB7XG5cblx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xMTQzOCNpc3N1ZWNvbW1lbnQtNTA3MDAzOTk1XG5cdFx0XHRcdFx0aWYgKCBjYWNoZWRNYXRlcmlhbC5ub3JtYWxTY2FsZSApIGNhY2hlZE1hdGVyaWFsLm5vcm1hbFNjYWxlLnkgKj0gLSAxO1xuXHRcdFx0XHRcdGlmICggY2FjaGVkTWF0ZXJpYWwuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgKSBjYWNoZWRNYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZS55ICo9IC0gMTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBjYWNoZWRNYXRlcmlhbCApO1xuXG5cdFx0XHRcdHRoaXMuYXNzb2NpYXRpb25zLnNldCggY2FjaGVkTWF0ZXJpYWwsIHRoaXMuYXNzb2NpYXRpb25zLmdldCggbWF0ZXJpYWwgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsID0gY2FjaGVkTWF0ZXJpYWw7XG5cblx0XHR9XG5cblx0XHQvLyB3b3JrYXJvdW5kcyBmb3IgbWVzaCBhbmQgZ2VvbWV0cnlcblxuXHRcdGlmICggbWF0ZXJpYWwuYW9NYXAgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcy51djIgPT09IHVuZGVmaW5lZCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3V2MicsIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgKTtcblxuXHRcdH1cblxuXHRcdG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCAvKiBtYXRlcmlhbEluZGV4ICovICkge1xuXG5cdFx0cmV0dXJuIE1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtYXRlcmlhbHNcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1hdGVyaWFsSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxNYXRlcmlhbD59XG5cdCAqL1xuXHRsb2FkTWF0ZXJpYWwoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IGpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRsZXQgbWF0ZXJpYWxUeXBlO1xuXHRcdGNvbnN0IG1hdGVyaWFsUGFyYW1zID0ge307XG5cdFx0Y29uc3QgbWF0ZXJpYWxFeHRlbnNpb25zID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCB7fTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGlmICggbWF0ZXJpYWxFeHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXSApIHtcblxuXHRcdFx0Y29uc3Qgc2dFeHRlbnNpb24gPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXTtcblx0XHRcdG1hdGVyaWFsVHlwZSA9IHNnRXh0ZW5zaW9uLmdldE1hdGVyaWFsVHlwZSgpO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBzZ0V4dGVuc2lvbi5leHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIG1hdGVyaWFsRXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUIF0gKSB7XG5cblx0XHRcdGNvbnN0IGttdUV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVCBdO1xuXHRcdFx0bWF0ZXJpYWxUeXBlID0ga211RXh0ZW5zaW9uLmdldE1hdGVyaWFsVHlwZSgpO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBrbXVFeHRlbnNpb24uZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBTcGVjaWZpY2F0aW9uOlxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI21ldGFsbGljLXJvdWdobmVzcy1tYXRlcmlhbFxuXG5cdFx0XHRjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IG1hdGVyaWFsRGVmLnBick1ldGFsbGljUm91Z2huZXNzIHx8IHt9O1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgKSApIHtcblxuXHRcdFx0XHRjb25zdCBhcnJheSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvcjtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMubWV0YWxuZXNzID0gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgIT09IHVuZGVmaW5lZCA/IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yIDogMS4wO1xuXHRcdFx0bWF0ZXJpYWxQYXJhbXMucm91Z2huZXNzID0gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgOiAxLjA7XG5cblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtZXRhbG5lc3NNYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgKSApO1xuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3JvdWdobmVzc01hcCcsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWxUeXBlID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmdldE1hdGVyaWFsVHlwZSAmJiBleHQuZ2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBQcm9taXNlLmFsbCggdGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmV4dGVuZE1hdGVyaWFsUGFyYW1zICYmIGV4dC5leHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKTtcblxuXHRcdFx0fSApICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZG91YmxlU2lkZWQgPT09IHRydWUgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnNpZGUgPSBEb3VibGVTaWRlO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgYWxwaGFNb2RlID0gbWF0ZXJpYWxEZWYuYWxwaGFNb2RlIHx8IEFMUEhBX01PREVTLk9QQVFVRTtcblxuXHRcdGlmICggYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5CTEVORCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNwYXJlbnQgPSB0cnVlO1xuXG5cdFx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE3NzA2XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5kZXB0aFdyaXRlID0gZmFsc2U7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5mb3JtYXQgPSBSR0JGb3JtYXQ7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc3BhcmVudCA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoIGFscGhhTW9kZSA9PT0gQUxQSEFfTU9ERVMuTUFTSyApIHtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5hbHBoYVRlc3QgPSBtYXRlcmlhbERlZi5hbHBoYUN1dG9mZiAhPT0gdW5kZWZpbmVkID8gbWF0ZXJpYWxEZWYuYWxwaGFDdXRvZmYgOiAwLjU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbm9ybWFsTWFwJywgbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZSApICk7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlID0gbmV3IFZlY3RvcjIoIDEsIDEgKTtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlLnNldCggc2NhbGUsIHNjYWxlICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnYW9NYXAnLCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlICkgKTtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuYW9NYXBJbnRlbnNpdHkgPSBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLmVtaXNzaXZlRmFjdG9yICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmUgPSBuZXcgQ29sb3IoKS5mcm9tQXJyYXkoIG1hdGVyaWFsRGVmLmVtaXNzaXZlRmFjdG9yICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLmVtaXNzaXZlVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnZW1pc3NpdmVNYXAnLCBtYXRlcmlhbERlZi5lbWlzc2l2ZVRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRsZXQgbWF0ZXJpYWw7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxUeXBlID09PSBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRtYXRlcmlhbCA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdLmNyZWF0ZU1hdGVyaWFsKCBtYXRlcmlhbFBhcmFtcyApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdG1hdGVyaWFsID0gbmV3IG1hdGVyaWFsVHlwZSggbWF0ZXJpYWxQYXJhbXMgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm5hbWUgKSBtYXRlcmlhbC5uYW1lID0gbWF0ZXJpYWxEZWYubmFtZTtcblxuXHRcdFx0Ly8gYmFzZUNvbG9yVGV4dHVyZSwgZW1pc3NpdmVUZXh0dXJlLCBhbmQgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSB1c2Ugc1JHQiBlbmNvZGluZy5cblx0XHRcdGlmICggbWF0ZXJpYWwubWFwICkgbWF0ZXJpYWwubWFwLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xuXHRcdFx0aWYgKCBtYXRlcmlhbC5lbWlzc2l2ZU1hcCApIG1hdGVyaWFsLmVtaXNzaXZlTWFwLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xuXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBtYXRlcmlhbCwgbWF0ZXJpYWxEZWYgKTtcblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG1hdGVyaWFsLCB7IG1hdGVyaWFsczogbWF0ZXJpYWxJbmRleCB9ICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbWF0ZXJpYWwsIG1hdGVyaWFsRGVmICk7XG5cblx0XHRcdHJldHVybiBtYXRlcmlhbDtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqIFdoZW4gT2JqZWN0M0QgaW5zdGFuY2VzIGFyZSB0YXJnZXRlZCBieSBhbmltYXRpb24sIHRoZXkgbmVlZCB1bmlxdWUgbmFtZXMuICovXG5cdGNyZWF0ZVVuaXF1ZU5hbWUoIG9yaWdpbmFsTmFtZSApIHtcblxuXHRcdGNvbnN0IHNhbml0aXplZE5hbWUgPSBQcm9wZXJ0eUJpbmRpbmcuc2FuaXRpemVOb2RlTmFtZSggb3JpZ2luYWxOYW1lIHx8ICcnICk7XG5cblx0XHRsZXQgbmFtZSA9IHNhbml0aXplZE5hbWU7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDE7IHRoaXMubm9kZU5hbWVzVXNlZFsgbmFtZSBdOyArKyBpICkge1xuXG5cdFx0XHRuYW1lID0gc2FuaXRpemVkTmFtZSArICdfJyArIGk7XG5cblx0XHR9XG5cblx0XHR0aGlzLm5vZGVOYW1lc1VzZWRbIG5hbWUgXSA9IHRydWU7XG5cblx0XHRyZXR1cm4gbmFtZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjZ2VvbWV0cnlcblx0ICpcblx0ICogQ3JlYXRlcyBCdWZmZXJHZW9tZXRyaWVzIGZyb20gcHJpbWl0aXZlcy5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheTxHTFRGLlByaW1pdGl2ZT59IHByaW1pdGl2ZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxCdWZmZXJHZW9tZXRyeT4+fVxuXHQgKi9cblx0bG9hZEdlb21ldHJpZXMoIHByaW1pdGl2ZXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3QgY2FjaGUgPSB0aGlzLnByaW1pdGl2ZUNhY2hlO1xuXG5cdFx0ZnVuY3Rpb24gY3JlYXRlRHJhY29QcmltaXRpdmUoIHByaW1pdGl2ZSApIHtcblxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXVxuXHRcdFx0XHQuZGVjb2RlUHJpbWl0aXZlKCBwcmltaXRpdmUsIHBhcnNlciApXG5cdFx0XHRcdC50aGVuKCBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIGdlb21ldHJ5LCBwcmltaXRpdmUsIHBhcnNlciApO1xuXG5cdFx0XHRcdH0gKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBwcmltaXRpdmVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBwcmltaXRpdmUgPSBwcmltaXRpdmVzWyBpIF07XG5cdFx0XHRjb25zdCBjYWNoZUtleSA9IGNyZWF0ZVByaW1pdGl2ZUtleSggcHJpbWl0aXZlICk7XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgdGhpcyBnZW9tZXRyeVxuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGVbIGNhY2hlS2V5IF07XG5cblx0XHRcdGlmICggY2FjaGVkICkge1xuXG5cdFx0XHRcdC8vIFVzZSB0aGUgY2FjaGVkIGdlb21ldHJ5IGlmIGl0IGV4aXN0c1xuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGNhY2hlZC5wcm9taXNlICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bGV0IGdlb21ldHJ5UHJvbWlzZTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5leHRlbnNpb25zICYmIHByaW1pdGl2ZS5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF0gKSB7XG5cblx0XHRcdFx0XHQvLyBVc2UgRFJBQ08gZ2VvbWV0cnkgaWYgYXZhaWxhYmxlXG5cdFx0XHRcdFx0Z2VvbWV0cnlQcm9taXNlID0gY3JlYXRlRHJhY29QcmltaXRpdmUoIHByaW1pdGl2ZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGdlb21ldHJ5XG5cdFx0XHRcdFx0Z2VvbWV0cnlQcm9taXNlID0gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggbmV3IEJ1ZmZlckdlb21ldHJ5KCksIHByaW1pdGl2ZSwgcGFyc2VyICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhY2hlIHRoaXMgZ2VvbWV0cnlcblx0XHRcdFx0Y2FjaGVbIGNhY2hlS2V5IF0gPSB7IHByaW1pdGl2ZTogcHJpbWl0aXZlLCBwcm9taXNlOiBnZW9tZXRyeVByb21pc2UgfTtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGdlb21ldHJ5UHJvbWlzZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWVzaGVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtZXNoSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxHcm91cHxNZXNofFNraW5uZWRNZXNoPn1cblx0ICovXG5cdGxvYWRNZXNoKCBtZXNoSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblxuXHRcdGNvbnN0IG1lc2hEZWYgPSBqc29uLm1lc2hlc1sgbWVzaEluZGV4IF07XG5cdFx0Y29uc3QgcHJpbWl0aXZlcyA9IG1lc2hEZWYucHJpbWl0aXZlcztcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBwcmltaXRpdmVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBtYXRlcmlhbCA9IHByaW1pdGl2ZXNbIGkgXS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKCB0aGlzLmNhY2hlIClcblx0XHRcdFx0OiB0aGlzLmdldERlcGVuZGVuY3koICdtYXRlcmlhbCcsIHByaW1pdGl2ZXNbIGkgXS5tYXRlcmlhbCApO1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIG1hdGVyaWFsICk7XG5cblx0XHR9XG5cblx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5sb2FkR2VvbWV0cmllcyggcHJpbWl0aXZlcyApICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoIHJlc3VsdHMgKSB7XG5cblx0XHRcdGNvbnN0IG1hdGVyaWFscyA9IHJlc3VsdHMuc2xpY2UoIDAsIHJlc3VsdHMubGVuZ3RoIC0gMSApO1xuXHRcdFx0Y29uc3QgZ2VvbWV0cmllcyA9IHJlc3VsdHNbIHJlc3VsdHMubGVuZ3RoIC0gMSBdO1xuXG5cdFx0XHRjb25zdCBtZXNoZXMgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGdlb21ldHJpZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgZ2VvbWV0cnkgPSBnZW9tZXRyaWVzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHByaW1pdGl2ZSA9IHByaW1pdGl2ZXNbIGkgXTtcblxuXHRcdFx0XHQvLyAxLiBjcmVhdGUgTWVzaFxuXG5cdFx0XHRcdGxldCBtZXNoO1xuXG5cdFx0XHRcdGNvbnN0IG1hdGVyaWFsID0gbWF0ZXJpYWxzWyBpIF07XG5cblx0XHRcdFx0aWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFUyB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9TVFJJUCB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4gfHxcblx0XHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHQvLyAuaXNTa2lubmVkTWVzaCBpc24ndCBpbiBnbFRGIHNwZWMuIFNlZSAuX21hcmtEZWZzKClcblx0XHRcdFx0XHRtZXNoID0gbWVzaERlZi5pc1NraW5uZWRNZXNoID09PSB0cnVlXG5cdFx0XHRcdFx0XHQ/IG5ldyBTa2lubmVkTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsIClcblx0XHRcdFx0XHRcdDogbmV3IE1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdFx0aWYgKCBtZXNoLmlzU2tpbm5lZE1lc2ggPT09IHRydWUgJiYgISBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2tpbldlaWdodC5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdFx0XHQvLyB3ZSBub3JtYWxpemUgZmxvYXRpbmcgcG9pbnQgc2tpbiB3ZWlnaHQgYXJyYXkgdG8gZml4IG1hbGZvcm1lZCBhc3NldHMgKHNlZSAjMTUzMTkpXG5cdFx0XHRcdFx0XHQvLyBpdCdzIGltcG9ydGFudCB0byBza2lwIHRoaXMgZm9yIG5vbi1mbG9hdDMyIGRhdGEgc2luY2Ugbm9ybWFsaXplU2tpbldlaWdodHMgYXNzdW1lcyBub24tbm9ybWFsaXplZCBpbnB1dHNcblx0XHRcdFx0XHRcdG1lc2gubm9ybWFsaXplU2tpbldlaWdodHMoKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9TVFJJUCApIHtcblxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUoIG1lc2guZ2VvbWV0cnksIFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4gKSB7XG5cblx0XHRcdFx0XHRcdG1lc2guZ2VvbWV0cnkgPSB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBtZXNoLmdlb21ldHJ5LCBUcmlhbmdsZUZhbkRyYXdNb2RlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FUyApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZVNlZ21lbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVfU1RSSVAgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmUoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9MT09QICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lTG9vcCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5QT0lOVFMgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IFBvaW50cyggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFByaW1pdGl2ZSBtb2RlIHVuc3VwcG9ydGVkOiAnICsgcHJpbWl0aXZlLm1vZGUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBPYmplY3Qua2V5cyggbWVzaC5nZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgKS5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRcdFx0dXBkYXRlTW9ycGhUYXJnZXRzKCBtZXNoLCBtZXNoRGVmICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lc2gubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBtZXNoRGVmLm5hbWUgfHwgKCAnbWVzaF8nICsgbWVzaEluZGV4ICkgKTtcblxuXHRcdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBtZXNoLCBtZXNoRGVmICk7XG5cblx0XHRcdFx0aWYgKCBwcmltaXRpdmUuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbWVzaCwgcHJpbWl0aXZlICk7XG5cblx0XHRcdFx0cGFyc2VyLmFzc2lnbkZpbmFsTWF0ZXJpYWwoIG1lc2ggKTtcblxuXHRcdFx0XHRtZXNoZXMucHVzaCggbWVzaCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtZXNoZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG1lc2hlc1sgaSBdLCB7XG5cdFx0XHRcdFx0bWVzaGVzOiBtZXNoSW5kZXgsXG5cdFx0XHRcdFx0cHJpbWl0aXZlczogaVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXNoZXMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdHJldHVybiBtZXNoZXNbIDAgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggZ3JvdXAsIHsgbWVzaGVzOiBtZXNoSW5kZXggfSApO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbWVzaGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGdyb3VwLmFkZCggbWVzaGVzWyBpIF0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZ3JvdXA7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjY2FtZXJhc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxUSFJFRS5DYW1lcmE+fVxuXHQgKi9cblx0bG9hZENhbWVyYSggY2FtZXJhSW5kZXggKSB7XG5cblx0XHRsZXQgY2FtZXJhO1xuXHRcdGNvbnN0IGNhbWVyYURlZiA9IHRoaXMuanNvbi5jYW1lcmFzWyBjYW1lcmFJbmRleCBdO1xuXHRcdGNvbnN0IHBhcmFtcyA9IGNhbWVyYURlZlsgY2FtZXJhRGVmLnR5cGUgXTtcblxuXHRcdGlmICggISBwYXJhbXMgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgY2FtZXJhIHBhcmFtZXRlcnMuJyApO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBjYW1lcmFEZWYudHlwZSA9PT0gJ3BlcnNwZWN0aXZlJyApIHtcblxuXHRcdFx0Y2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCBNYXRoVXRpbHMucmFkVG9EZWcoIHBhcmFtcy55Zm92ICksIHBhcmFtcy5hc3BlY3RSYXRpbyB8fCAxLCBwYXJhbXMuem5lYXIgfHwgMSwgcGFyYW1zLnpmYXIgfHwgMmU2ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBjYW1lcmFEZWYudHlwZSA9PT0gJ29ydGhvZ3JhcGhpYycgKSB7XG5cblx0XHRcdGNhbWVyYSA9IG5ldyBPcnRob2dyYXBoaWNDYW1lcmEoIC0gcGFyYW1zLnhtYWcsIHBhcmFtcy54bWFnLCBwYXJhbXMueW1hZywgLSBwYXJhbXMueW1hZywgcGFyYW1zLnpuZWFyLCBwYXJhbXMuemZhciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBjYW1lcmFEZWYubmFtZSApIGNhbWVyYS5uYW1lID0gdGhpcy5jcmVhdGVVbmlxdWVOYW1lKCBjYW1lcmFEZWYubmFtZSApO1xuXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggY2FtZXJhLCBjYW1lcmFEZWYgKTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIGNhbWVyYSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NraW5zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBza2luSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuXHQgKi9cblx0bG9hZFNraW4oIHNraW5JbmRleCApIHtcblxuXHRcdGNvbnN0IHNraW5EZWYgPSB0aGlzLmpzb24uc2tpbnNbIHNraW5JbmRleCBdO1xuXG5cdFx0Y29uc3Qgc2tpbkVudHJ5ID0geyBqb2ludHM6IHNraW5EZWYuam9pbnRzIH07XG5cblx0XHRpZiAoIHNraW5EZWYuaW52ZXJzZUJpbmRNYXRyaWNlcyA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBza2luRW50cnkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHNraW5EZWYuaW52ZXJzZUJpbmRNYXRyaWNlcyApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XG5cblx0XHRcdHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzID0gYWNjZXNzb3I7XG5cblx0XHRcdHJldHVybiBza2luRW50cnk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjYW5pbWF0aW9uc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYW5pbWF0aW9uSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxBbmltYXRpb25DbGlwPn1cblx0ICovXG5cdGxvYWRBbmltYXRpb24oIGFuaW1hdGlvbkluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblxuXHRcdGNvbnN0IGFuaW1hdGlvbkRlZiA9IGpzb24uYW5pbWF0aW9uc1sgYW5pbWF0aW9uSW5kZXggXTtcblxuXHRcdGNvbnN0IHBlbmRpbmdOb2RlcyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdJbnB1dEFjY2Vzc29ycyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nU2FtcGxlcnMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nVGFyZ2V0cyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGFuaW1hdGlvbkRlZi5jaGFubmVscy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgY2hhbm5lbCA9IGFuaW1hdGlvbkRlZi5jaGFubmVsc1sgaSBdO1xuXHRcdFx0Y29uc3Qgc2FtcGxlciA9IGFuaW1hdGlvbkRlZi5zYW1wbGVyc1sgY2hhbm5lbC5zYW1wbGVyIF07XG5cdFx0XHRjb25zdCB0YXJnZXQgPSBjaGFubmVsLnRhcmdldDtcblx0XHRcdGNvbnN0IG5hbWUgPSB0YXJnZXQubm9kZSAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0Lm5vZGUgOiB0YXJnZXQuaWQ7IC8vIE5PVEU6IHRhcmdldC5pZCBpcyBkZXByZWNhdGVkLlxuXHRcdFx0Y29uc3QgaW5wdXQgPSBhbmltYXRpb25EZWYucGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkID8gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnNbIHNhbXBsZXIuaW5wdXQgXSA6IHNhbXBsZXIuaW5wdXQ7XG5cdFx0XHRjb25zdCBvdXRwdXQgPSBhbmltYXRpb25EZWYucGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkID8gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnNbIHNhbXBsZXIub3V0cHV0IF0gOiBzYW1wbGVyLm91dHB1dDtcblxuXHRcdFx0cGVuZGluZ05vZGVzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBuYW1lICkgKTtcblx0XHRcdHBlbmRpbmdJbnB1dEFjY2Vzc29ycy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIGlucHV0ICkgKTtcblx0XHRcdHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBvdXRwdXQgKSApO1xuXHRcdFx0cGVuZGluZ1NhbXBsZXJzLnB1c2goIHNhbXBsZXIgKTtcblx0XHRcdHBlbmRpbmdUYXJnZXRzLnB1c2goIHRhcmdldCApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbXG5cblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nTm9kZXMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nSW5wdXRBY2Nlc3NvcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nT3V0cHV0QWNjZXNzb3JzICksXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1NhbXBsZXJzICksXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1RhcmdldHMgKVxuXG5cdFx0XSApLnRoZW4oIGZ1bmN0aW9uICggZGVwZW5kZW5jaWVzICkge1xuXG5cdFx0XHRjb25zdCBub2RlcyA9IGRlcGVuZGVuY2llc1sgMCBdO1xuXHRcdFx0Y29uc3QgaW5wdXRBY2Nlc3NvcnMgPSBkZXBlbmRlbmNpZXNbIDEgXTtcblx0XHRcdGNvbnN0IG91dHB1dEFjY2Vzc29ycyA9IGRlcGVuZGVuY2llc1sgMiBdO1xuXHRcdFx0Y29uc3Qgc2FtcGxlcnMgPSBkZXBlbmRlbmNpZXNbIDMgXTtcblx0XHRcdGNvbnN0IHRhcmdldHMgPSBkZXBlbmRlbmNpZXNbIDQgXTtcblxuXHRcdFx0Y29uc3QgdHJhY2tzID0gW107XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2Rlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBub2RlID0gbm9kZXNbIGkgXTtcblx0XHRcdFx0Y29uc3QgaW5wdXRBY2Nlc3NvciA9IGlucHV0QWNjZXNzb3JzWyBpIF07XG5cdFx0XHRcdGNvbnN0IG91dHB1dEFjY2Vzc29yID0gb3V0cHV0QWNjZXNzb3JzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHNhbXBsZXIgPSBzYW1wbGVyc1sgaSBdO1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRcdFx0aWYgKCBub2RlID09PSB1bmRlZmluZWQgKSBjb250aW51ZTtcblxuXHRcdFx0XHRub2RlLnVwZGF0ZU1hdHJpeCgpO1xuXHRcdFx0XHRub2RlLm1hdHJpeEF1dG9VcGRhdGUgPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBUeXBlZEtleWZyYW1lVHJhY2s7XG5cblx0XHRcdFx0c3dpdGNoICggUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdICkge1xuXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMud2VpZ2h0czpcblxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gTnVtYmVyS2V5ZnJhbWVUcmFjaztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMucm90YXRpb246XG5cblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IFF1YXRlcm5pb25LZXlmcmFtZVRyYWNrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5wb3NpdGlvbjpcblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5zY2FsZTpcblx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBWZWN0b3JLZXlmcmFtZVRyYWNrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHRhcmdldE5hbWUgPSBub2RlLm5hbWUgPyBub2RlLm5hbWUgOiBub2RlLnV1aWQ7XG5cblx0XHRcdFx0Y29uc3QgaW50ZXJwb2xhdGlvbiA9IHNhbXBsZXIuaW50ZXJwb2xhdGlvbiAhPT0gdW5kZWZpbmVkID8gSU5URVJQT0xBVElPTlsgc2FtcGxlci5pbnRlcnBvbGF0aW9uIF0gOiBJbnRlcnBvbGF0ZUxpbmVhcjtcblxuXHRcdFx0XHRjb25zdCB0YXJnZXROYW1lcyA9IFtdO1xuXG5cdFx0XHRcdGlmICggUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdID09PSBQQVRIX1BST1BFUlRJRVMud2VpZ2h0cyApIHtcblxuXHRcdFx0XHRcdC8vIE5vZGUgbWF5IGJlIGEgR3JvdXAgKGdsVEYgbWVzaCB3aXRoIHNldmVyYWwgcHJpbWl0aXZlcykgb3IgYSBNZXNoLlxuXHRcdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIG9iamVjdC5pc01lc2ggPT09IHRydWUgJiYgb2JqZWN0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlcyApIHtcblxuXHRcdFx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCBvYmplY3QubmFtZSA/IG9iamVjdC5uYW1lIDogb2JqZWN0LnV1aWQgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCB0YXJnZXROYW1lICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBvdXRwdXRBcnJheSA9IG91dHB1dEFjY2Vzc29yLmFycmF5O1xuXG5cdFx0XHRcdGlmICggb3V0cHV0QWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciApO1xuXHRcdFx0XHRcdGNvbnN0IHNjYWxlZCA9IG5ldyBGbG9hdDMyQXJyYXkoIG91dHB1dEFycmF5Lmxlbmd0aCApO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IG91dHB1dEFycmF5Lmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0XHRzY2FsZWRbIGogXSA9IG91dHB1dEFycmF5WyBqIF0gKiBzY2FsZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG91dHB1dEFycmF5ID0gc2NhbGVkO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCB0cmFjayA9IG5ldyBUeXBlZEtleWZyYW1lVHJhY2soXG5cdFx0XHRcdFx0XHR0YXJnZXROYW1lc1sgaiBdICsgJy4nICsgUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdLFxuXHRcdFx0XHRcdFx0aW5wdXRBY2Nlc3Nvci5hcnJheSxcblx0XHRcdFx0XHRcdG91dHB1dEFycmF5LFxuXHRcdFx0XHRcdFx0aW50ZXJwb2xhdGlvblxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHQvLyBPdmVycmlkZSBpbnRlcnBvbGF0aW9uIHdpdGggY3VzdG9tIGZhY3RvcnkgbWV0aG9kLlxuXHRcdFx0XHRcdGlmICggc2FtcGxlci5pbnRlcnBvbGF0aW9uID09PSAnQ1VCSUNTUExJTkUnICkge1xuXG5cdFx0XHRcdFx0XHR0cmFjay5jcmVhdGVJbnRlcnBvbGFudCA9IGZ1bmN0aW9uIEludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSggcmVzdWx0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgQ1VCSUNTUExJTkUga2V5ZnJhbWUgaW4gZ2xURiBoYXMgdGhyZWUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBpbnB1dCB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0Ly8gcmVwcmVzZW50aW5nIGluVGFuZ2VudCwgc3BsaW5lVmVydGV4LCBhbmQgb3V0VGFuZ2VudC4gQXMgYSByZXN1bHQsIHRyYWNrLmdldFZhbHVlU2l6ZSgpXG5cdFx0XHRcdFx0XHRcdC8vIG11c3QgYmUgZGl2aWRlZCBieSB0aHJlZSB0byBnZXQgdGhlIGludGVycG9sYW50J3Mgc2FtcGxlU2l6ZSBhcmd1bWVudC5cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBpbnRlcnBvbGFudFR5cGUgPSAoIHRoaXMgaW5zdGFuY2VvZiBRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayApID8gR0xURkN1YmljU3BsaW5lUXVhdGVybmlvbkludGVycG9sYW50IDogR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQ7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBpbnRlcnBvbGFudFR5cGUoIHRoaXMudGltZXMsIHRoaXMudmFsdWVzLCB0aGlzLmdldFZhbHVlU2l6ZSgpIC8gMywgcmVzdWx0ICk7XG5cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdC8vIE1hcmsgYXMgQ1VCSUNTUExJTkUuIGB0cmFjay5nZXRJbnRlcnBvbGF0aW9uKClgIGRvZXNuJ3Qgc3VwcG9ydCBjdXN0b20gaW50ZXJwb2xhbnRzLlxuXHRcdFx0XHRcdFx0dHJhY2suY3JlYXRlSW50ZXJwb2xhbnQuaXNJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUgPSB0cnVlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dHJhY2tzLnB1c2goIHRyYWNrICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBhbmltYXRpb25EZWYubmFtZSA/IGFuaW1hdGlvbkRlZi5uYW1lIDogJ2FuaW1hdGlvbl8nICsgYW5pbWF0aW9uSW5kZXg7XG5cblx0XHRcdHJldHVybiBuZXcgQW5pbWF0aW9uQ2xpcCggbmFtZSwgdW5kZWZpbmVkLCB0cmFja3MgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0Y3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRpZiAoIG5vZGVEZWYubWVzaCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdtZXNoJywgbm9kZURlZi5tZXNoICkudGhlbiggZnVuY3Rpb24gKCBtZXNoICkge1xuXG5cdFx0XHRjb25zdCBub2RlID0gcGFyc2VyLl9nZXROb2RlUmVmKCBwYXJzZXIubWVzaENhY2hlLCBub2RlRGVmLm1lc2gsIG1lc2ggKTtcblxuXHRcdFx0Ly8gaWYgd2VpZ2h0cyBhcmUgcHJvdmlkZWQgb24gdGhlIG5vZGUsIG92ZXJyaWRlIHdlaWdodHMgb24gdGhlIG1lc2guXG5cdFx0XHRpZiAoIG5vZGVEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbyApIHtcblxuXHRcdFx0XHRcdGlmICggISBvLmlzTWVzaCApIHJldHVybjtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2RlRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRcdG8ubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBub2RlRGVmLndlaWdodHNbIGkgXTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbm9kZXMtYW5kLWhpZXJhcmNoeVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0M0Q+fVxuXHQgKi9cblx0bG9hZE5vZGUoIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0Ly8gcmVzZXJ2ZSBub2RlJ3MgbmFtZSBiZWZvcmUgaXRzIGRlcGVuZGVuY2llcywgc28gdGhlIHJvb3QgaGFzIHRoZSBpbnRlbmRlZCBuYW1lLlxuXHRcdGNvbnN0IG5vZGVOYW1lID0gbm9kZURlZi5uYW1lID8gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG5vZGVEZWYubmFtZSApIDogJyc7XG5cblx0XHRyZXR1cm4gKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdFx0Y29uc3QgbWVzaFByb21pc2UgPSBwYXJzZXIuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5jcmVhdGVOb2RlTWVzaCAmJiBleHQuY3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmICggbWVzaFByb21pc2UgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBtZXNoUHJvbWlzZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnY2FtZXJhJywgbm9kZURlZi5jYW1lcmEgKS50aGVuKCBmdW5jdGlvbiAoIGNhbWVyYSApIHtcblxuXHRcdFx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHBhcnNlci5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEsIGNhbWVyYSApO1xuXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmNyZWF0ZU5vZGVBdHRhY2htZW50ICYmIGV4dC5jcmVhdGVOb2RlQXR0YWNobWVudCggbm9kZUluZGV4ICk7XG5cblx0XHRcdH0gKS5mb3JFYWNoKCBmdW5jdGlvbiAoIHByb21pc2UgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwcm9taXNlICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0XHR9KCkgKS50aGVuKCBmdW5jdGlvbiAoIG9iamVjdHMgKSB7XG5cblx0XHRcdGxldCBub2RlO1xuXG5cdFx0XHQvLyAuaXNCb25lIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnNcblx0XHRcdGlmICggbm9kZURlZi5pc0JvbmUgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBCb25lKCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRub2RlID0gbmV3IEdyb3VwKCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdG5vZGUgPSBvYmplY3RzWyAwIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBPYmplY3QzRCgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZSAhPT0gb2JqZWN0c1sgMCBdICkge1xuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBvYmplY3RzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdFx0bm9kZS5hZGQoIG9iamVjdHNbIGkgXSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYubmFtZSApIHtcblxuXHRcdFx0XHRub2RlLnVzZXJEYXRhLm5hbWUgPSBub2RlRGVmLm5hbWU7XG5cdFx0XHRcdG5vZGUubmFtZSA9IG5vZGVOYW1lO1xuXG5cdFx0XHR9XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG5vZGUsIG5vZGVEZWYgKTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG5vZGUsIG5vZGVEZWYgKTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLm1hdHJpeCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IG1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XG5cdFx0XHRcdG1hdHJpeC5mcm9tQXJyYXkoIG5vZGVEZWYubWF0cml4ICk7XG5cdFx0XHRcdG5vZGUuYXBwbHlNYXRyaXg0KCBtYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYudHJhbnNsYXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUucG9zaXRpb24uZnJvbUFycmF5KCBub2RlRGVmLnRyYW5zbGF0aW9uICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbm9kZURlZi5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheSggbm9kZURlZi5yb3RhdGlvbiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUuc2NhbGUuZnJvbUFycmF5KCBub2RlRGVmLnNjYWxlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggISBwYXJzZXIuYXNzb2NpYXRpb25zLmhhcyggbm9kZSApICkge1xuXG5cdFx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBub2RlLCB7fSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KCBub2RlICkubm9kZXMgPSBub2RlSW5kZXg7XG5cblx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NjZW5lc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gc2NlbmVJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwPn1cblx0ICovXG5cdGxvYWRTY2VuZSggc2NlbmVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBzY2VuZURlZiA9IHRoaXMuanNvbi5zY2VuZXNbIHNjZW5lSW5kZXggXTtcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0Ly8gTG9hZGVyIHJldHVybnMgR3JvdXAsIG5vdCBTY2VuZS5cblx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE4MzQyI2lzc3VlY29tbWVudC01Nzg5ODExNzJcblx0XHRjb25zdCBzY2VuZSA9IG5ldyBHcm91cCgpO1xuXHRcdGlmICggc2NlbmVEZWYubmFtZSApIHNjZW5lLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggc2NlbmVEZWYubmFtZSApO1xuXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggc2NlbmUsIHNjZW5lRGVmICk7XG5cblx0XHRpZiAoIHNjZW5lRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHNjZW5lLCBzY2VuZURlZiApO1xuXG5cdFx0Y29uc3Qgbm9kZUlkcyA9IHNjZW5lRGVmLm5vZGVzIHx8IFtdO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVJZHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggYnVpbGROb2RlSGllcmFyY2h5KCBub2RlSWRzWyBpIF0sIHNjZW5lLCBqc29uLCBwYXJzZXIgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHQvLyBSZW1vdmVzIGRhbmdsaW5nIGFzc29jaWF0aW9ucywgYXNzb2NpYXRpb25zIHRoYXQgcmVmZXJlbmNlIGEgbm9kZSB0aGF0XG5cdFx0XHQvLyBkaWRuJ3QgbWFrZSBpdCBpbnRvIHRoZSBzY2VuZS5cblx0XHRcdGNvbnN0IHJlZHVjZUFzc29jaWF0aW9ucyA9ICggbm9kZSApID0+IHtcblxuXHRcdFx0XHRjb25zdCByZWR1Y2VkQXNzb2NpYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IFsga2V5LCB2YWx1ZSBdIG9mIHBhcnNlci5hc3NvY2lhdGlvbnMgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGtleSBpbnN0YW5jZW9mIE1hdGVyaWFsIHx8IGtleSBpbnN0YW5jZW9mIFRleHR1cmUgKSB7XG5cblx0XHRcdFx0XHRcdHJlZHVjZWRBc3NvY2lhdGlvbnMuc2V0KCBrZXksIHZhbHVlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG5vZGUudHJhdmVyc2UoICggbm9kZSApID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IG1hcHBpbmdzID0gcGFyc2VyLmFzc29jaWF0aW9ucy5nZXQoIG5vZGUgKTtcblxuXHRcdFx0XHRcdGlmICggbWFwcGluZ3MgIT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdFx0cmVkdWNlZEFzc29jaWF0aW9ucy5zZXQoIG5vZGUsIG1hcHBpbmdzICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHJldHVybiByZWR1Y2VkQXNzb2NpYXRpb25zO1xuXG5cdFx0XHR9O1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zID0gcmVkdWNlQXNzb2NpYXRpb25zKCBzY2VuZSApO1xuXG5cdFx0XHRyZXR1cm4gc2NlbmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTm9kZUhpZXJhcmNoeSggbm9kZUlkLCBwYXJlbnRPYmplY3QsIGpzb24sIHBhcnNlciApIHtcblxuXHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUlkIF07XG5cblx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5vZGVJZCApLnRoZW4oIGZ1bmN0aW9uICggbm9kZSApIHtcblxuXHRcdGlmICggbm9kZURlZi5za2luID09PSB1bmRlZmluZWQgKSByZXR1cm4gbm9kZTtcblxuXHRcdC8vIGJ1aWxkIHNrZWxldG9uIGhlcmUgYXMgd2VsbFxuXG5cdFx0bGV0IHNraW5FbnRyeTtcblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ3NraW4nLCBub2RlRGVmLnNraW4gKS50aGVuKCBmdW5jdGlvbiAoIHNraW4gKSB7XG5cblx0XHRcdHNraW5FbnRyeSA9IHNraW47XG5cblx0XHRcdGNvbnN0IHBlbmRpbmdKb2ludHMgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHNraW5FbnRyeS5qb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0cGVuZGluZ0pvaW50cy5wdXNoKCBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBza2luRW50cnkuam9pbnRzWyBpIF0gKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZ0pvaW50cyApO1xuXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggam9pbnROb2RlcyApIHtcblxuXHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBtZXNoICkge1xuXG5cdFx0XHRcdGlmICggISBtZXNoLmlzTWVzaCApIHJldHVybjtcblxuXHRcdFx0XHRjb25zdCBib25lcyA9IFtdO1xuXHRcdFx0XHRjb25zdCBib25lSW52ZXJzZXMgPSBbXTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gam9pbnROb2Rlcy5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGpvaW50Tm9kZSA9IGpvaW50Tm9kZXNbIGogXTtcblxuXHRcdFx0XHRcdGlmICggam9pbnROb2RlICkge1xuXG5cdFx0XHRcdFx0XHRib25lcy5wdXNoKCBqb2ludE5vZGUgKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgbWF0ID0gbmV3IE1hdHJpeDQoKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0XHRcdG1hdC5mcm9tQXJyYXkoIHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzLmFycmF5LCBqICogMTYgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRib25lSW52ZXJzZXMucHVzaCggbWF0ICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBKb2ludCBcIiVzXCIgY291bGQgbm90IGJlIGZvdW5kLicsIHNraW5FbnRyeS5qb2ludHNbIGogXSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZXNoLmJpbmQoIG5ldyBTa2VsZXRvbiggYm9uZXMsIGJvbmVJbnZlcnNlcyApLCBtZXNoLm1hdHJpeFdvcmxkICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fSApLnRoZW4oIGZ1bmN0aW9uICggbm9kZSApIHtcblxuXHRcdC8vIGJ1aWxkIG5vZGUgaGllcmFjaHlcblxuXHRcdHBhcmVudE9iamVjdC5hZGQoIG5vZGUgKTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGlmICggbm9kZURlZi5jaGlsZHJlbiApIHtcblxuXHRcdFx0Y29uc3QgY2hpbGRyZW4gPSBub2RlRGVmLmNoaWxkcmVuO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgY2hpbGQgPSBjaGlsZHJlblsgaSBdO1xuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGJ1aWxkTm9kZUhpZXJhcmNoeSggY2hpbGQsIG5vZGUsIGpzb24sIHBhcnNlciApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH0gKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge0dMVEYuUHJpbWl0aXZlfSBwcmltaXRpdmVEZWZcbiAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVCb3VuZHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgYm94ID0gbmV3IEJveDMoKTtcblxuXHRpZiAoIGF0dHJpYnV0ZXMuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNvbnN0IGFjY2Vzc29yID0gcGFyc2VyLmpzb24uYWNjZXNzb3JzWyBhdHRyaWJ1dGVzLlBPU0lUSU9OIF07XG5cblx0XHRjb25zdCBtaW4gPSBhY2Nlc3Nvci5taW47XG5cdFx0Y29uc3QgbWF4ID0gYWNjZXNzb3IubWF4O1xuXG5cdFx0Ly8gZ2xURiByZXF1aXJlcyAnbWluJyBhbmQgJ21heCcsIGJ1dCBWUk0gKHdoaWNoIGV4dGVuZHMgZ2xURikgY3VycmVudGx5IGlnbm9yZXMgdGhhdCByZXF1aXJlbWVudC5cblxuXHRcdGlmICggbWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGJveC5zZXQoXG5cdFx0XHRcdG5ldyBWZWN0b3IzKCBtaW5bIDAgXSwgbWluWyAxIF0sIG1pblsgMiBdICksXG5cdFx0XHRcdG5ldyBWZWN0b3IzKCBtYXhbIDAgXSwgbWF4WyAxIF0sIG1heFsgMiBdIClcblx0XHRcdCk7XG5cblx0XHRcdGlmICggYWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRjb25zdCBib3hTY2FsZSA9IGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3Nvci5jb21wb25lbnRUeXBlIF0gKTtcblx0XHRcdFx0Ym94Lm1pbi5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblx0XHRcdFx0Ym94Lm1heC5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicgKTtcblxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdGNvbnN0IHRhcmdldHMgPSBwcmltaXRpdmVEZWYudGFyZ2V0cztcblxuXHRpZiAoIHRhcmdldHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNvbnN0IG1heERpc3BsYWNlbWVudCA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0Y29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRcdGlmICggdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuanNvbi5hY2Nlc3NvcnNbIHRhcmdldC5QT1NJVElPTiBdO1xuXHRcdFx0XHRjb25zdCBtaW4gPSBhY2Nlc3Nvci5taW47XG5cdFx0XHRcdGNvbnN0IG1heCA9IGFjY2Vzc29yLm1heDtcblxuXHRcdFx0XHQvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxuXG5cdFx0XHRcdGlmICggbWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGdldCBtYXggb2YgYWJzb2x1dGUgY29tcG9uZW50cyBiZWNhdXNlIHRhcmdldCB3ZWlnaHQgaXMgWy0xLDFdXG5cdFx0XHRcdFx0dmVjdG9yLnNldFgoIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAwIF0gKSwgTWF0aC5hYnMoIG1heFsgMCBdICkgKSApO1xuXHRcdFx0XHRcdHZlY3Rvci5zZXRZKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMSBdICksIE1hdGguYWJzKCBtYXhbIDEgXSApICkgKTtcblx0XHRcdFx0XHR2ZWN0b3Iuc2V0WiggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDIgXSApLCBNYXRoLmFicyggbWF4WyAyIF0gKSApICk7XG5cblxuXHRcdFx0XHRcdGlmICggYWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgYm94U2NhbGUgPSBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3IuY29tcG9uZW50VHlwZSBdICk7XG5cdFx0XHRcdFx0XHR2ZWN0b3IubXVsdGlwbHlTY2FsYXIoIGJveFNjYWxlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBOb3RlOiB0aGlzIGFzc3VtZXMgdGhhdCB0aGUgc3VtIG9mIGFsbCB3ZWlnaHRzIGlzIGF0IG1vc3QgMS4gVGhpcyBpc24ndCBxdWl0ZSBjb3JyZWN0IC0gaXQncyBtb3JlIGNvbnNlcnZhdGl2ZVxuXHRcdFx0XHRcdC8vIHRvIGFzc3VtZSB0aGF0IGVhY2ggdGFyZ2V0IGNhbiBoYXZlIGEgbWF4IHdlaWdodCBvZiAxLiBIb3dldmVyLCBmb3Igc29tZSB1c2UgY2FzZXMgLSBub3RhYmx5LCB3aGVuIG1vcnBoIHRhcmdldHNcblx0XHRcdFx0XHQvLyBhcmUgdXNlZCB0byBpbXBsZW1lbnQga2V5LWZyYW1lIGFuaW1hdGlvbnMgYW5kIGFzIHN1Y2ggb25seSB0d28gYXJlIGFjdGl2ZSBhdCBhIHRpbWUgLSB0aGlzIHJlc3VsdHMgaW4gdmVyeSBsYXJnZVxuXHRcdFx0XHRcdC8vIGJveGVzLiBTbyBmb3Igbm93IHdlIG1ha2UgYSBib3ggdGhhdCdzIHNvbWV0aW1lcyBhIHRvdWNoIHRvbyBzbWFsbCBidXQgaXMgaG9wZWZ1bGx5IG1vc3RseSBvZiByZWFzb25hYmxlIHNpemUuXG5cdFx0XHRcdFx0bWF4RGlzcGxhY2VtZW50Lm1heCggdmVjdG9yICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgbWluL21heCBwcm9wZXJ0aWVzIGZvciBhY2Nlc3NvciBQT1NJVElPTi4nICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyBBcyBwZXIgY29tbWVudCBhYm92ZSB0aGlzIGJveCBpc24ndCBjb25zZXJ2YXRpdmUsIGJ1dCBoYXMgYSByZWFzb25hYmxlIHNpemUgZm9yIGEgdmVyeSBsYXJnZSBudW1iZXIgb2YgbW9ycGggdGFyZ2V0cy5cblx0XHRib3guZXhwYW5kQnlWZWN0b3IoIG1heERpc3BsYWNlbWVudCApO1xuXG5cdH1cblxuXHRnZW9tZXRyeS5ib3VuZGluZ0JveCA9IGJveDtcblxuXHRjb25zdCBzcGhlcmUgPSBuZXcgU3BoZXJlKCk7XG5cblx0Ym94LmdldENlbnRlciggc3BoZXJlLmNlbnRlciApO1xuXHRzcGhlcmUucmFkaXVzID0gYm94Lm1pbi5kaXN0YW5jZVRvKCBib3gubWF4ICkgLyAyO1xuXG5cdGdlb21ldHJ5LmJvdW5kaW5nU3BoZXJlID0gc3BoZXJlO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7R0xURi5QcmltaXRpdmV9IHByaW1pdGl2ZURlZlxuICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxuICovXG5mdW5jdGlvbiBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKSB7XG5cblx0Y29uc3QgYXR0cmlidXRlcyA9IHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRmdW5jdGlvbiBhc3NpZ25BdHRyaWJ1dGVBY2Nlc3NvciggYWNjZXNzb3JJbmRleCwgYXR0cmlidXRlTmFtZSApIHtcblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgYWNjZXNzb3JJbmRleCApXG5cdFx0XHQudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcblxuXHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZU5hbWUsIGFjY2Vzc29yICk7XG5cblx0XHRcdH0gKTtcblxuXHR9XG5cblx0Zm9yICggY29uc3QgZ2x0ZkF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcyApIHtcblxuXHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbIGdsdGZBdHRyaWJ1dGVOYW1lIF0gfHwgZ2x0ZkF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdC8vIFNraXAgYXR0cmlidXRlcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IGUuZy4gRHJhY28gZXh0ZW5zaW9uLlxuXHRcdGlmICggdGhyZWVBdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSBjb250aW51ZTtcblxuXHRcdHBlbmRpbmcucHVzaCggYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoIGF0dHJpYnV0ZXNbIGdsdGZBdHRyaWJ1dGVOYW1lIF0sIHRocmVlQXR0cmlidXRlTmFtZSApICk7XG5cblx0fVxuXG5cdGlmICggcHJpbWl0aXZlRGVmLmluZGljZXMgIT09IHVuZGVmaW5lZCAmJiAhIGdlb21ldHJ5LmluZGV4ICkge1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgcHJpbWl0aXZlRGVmLmluZGljZXMgKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xuXG5cdFx0XHRnZW9tZXRyeS5zZXRJbmRleCggYWNjZXNzb3IgKTtcblxuXHRcdH0gKTtcblxuXHRcdHBlbmRpbmcucHVzaCggYWNjZXNzb3IgKTtcblxuXHR9XG5cblx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiApO1xuXG5cdGNvbXB1dGVCb3VuZHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBwcmltaXRpdmVEZWYudGFyZ2V0cyAhPT0gdW5kZWZpbmVkXG5cdFx0XHQ/IGFkZE1vcnBoVGFyZ2V0cyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZi50YXJnZXRzLCBwYXJzZXIgKVxuXHRcdFx0OiBnZW9tZXRyeTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtOdW1iZXJ9IGRyYXdNb2RlXG4gKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeX1cbiAqL1xuZnVuY3Rpb24gdG9UcmlhbmdsZXNEcmF3TW9kZSggZ2VvbWV0cnksIGRyYXdNb2RlICkge1xuXG5cdGxldCBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cblx0Ly8gZ2VuZXJhdGUgaW5kZXggaWYgbm90IHByZXNlbnRcblxuXHRpZiAoIGluZGV4ID09PSBudWxsICkge1xuXG5cdFx0Y29uc3QgaW5kaWNlcyA9IFtdO1xuXG5cdFx0Y29uc3QgcG9zaXRpb24gPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicgKTtcblxuXHRcdGlmICggcG9zaXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcG9zaXRpb24uY291bnQ7IGkgKysgKSB7XG5cblx0XHRcdFx0aW5kaWNlcy5wdXNoKCBpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGluZGljZXMgKTtcblx0XHRcdGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5kZWZpbmVkIHBvc2l0aW9uIGF0dHJpYnV0ZS4gUHJvY2Vzc2luZyBub3QgcG9zc2libGUuJyApO1xuXHRcdFx0cmV0dXJuIGdlb21ldHJ5O1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXG5cdGNvbnN0IG51bWJlck9mVHJpYW5nbGVzID0gaW5kZXguY291bnQgLSAyO1xuXHRjb25zdCBuZXdJbmRpY2VzID0gW107XG5cblx0aWYgKCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSApIHtcblxuXHRcdC8vIGdsLlRSSUFOR0xFX0ZBTlxuXG5cdFx0Zm9yICggbGV0IGkgPSAxOyBpIDw9IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xuXG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIDAgKSApO1xuXHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBnbC5UUklBTkdMRV9TVFJJUFxuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XG5cblx0XHRcdGlmICggaSAlIDIgPT09IDAgKSB7XG5cblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xuXG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdGlmICggKCBuZXdJbmRpY2VzLmxlbmd0aCAvIDMgKSAhPT0gbnVtYmVyT2ZUcmlhbmdsZXMgKSB7XG5cblx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlci50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuYWJsZSB0byBnZW5lcmF0ZSBjb3JyZWN0IGFtb3VudCBvZiB0cmlhbmdsZXMuJyApO1xuXG5cdH1cblxuXHQvLyBidWlsZCBmaW5hbCBnZW9tZXRyeVxuXG5cdGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnkuY2xvbmUoKTtcblx0bmV3R2VvbWV0cnkuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcblxuXHRyZXR1cm4gbmV3R2VvbWV0cnk7XG5cbn1cblxuZXhwb3J0IHsgR0xURkxvYWRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNjZW5lUmVuZGVyZXJUSlMgZnJvbSBcIi4vU2NlbmVSZW5kZXJlclRKU1wiO1xuaW1wb3J0IE5GVGFkZFRKUyBmcm9tIFwiLi9tYXJrZXJtZWRpYS9ORlRhZGRUSlNcIjtcblxuZXhwb3J0IGRlZmF1bHQgeyBTY2VuZVJlbmRlcmVyVEpTLCBORlRhZGRUSlMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==