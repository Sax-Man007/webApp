var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'false',
		version: '19.8.31',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.95.js", main: "static.adsafeprotected.com/main.19.8.31.js"},
		protocol: 'https',
		jsref: "https:\/\/tpc.googlesyndication.com\/",
		asid: "2c7956d4-1450-11ea-bff9-382c4ac630ed",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,postDts:0,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,forceid:0,usesca:100,usexsca:1,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,bbs,bas",
		adsafeDomain: "adsafeprotected.com:80",
		minimizeCalls: "false",
		adWidth: "728",
		adHeight: "90",
		forceAppend: "false",
		sp_imp_maxLength: 8000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "rjss",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=357221",
		adsafeSrc: "https:\/\/fw.adsafeprotected.com\/rfw\/www.googletagservices.com\/357221\/40171660\/dcm\/dcmads.js",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: false,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/fw.adsafeprotected.com\/rjss\/www.googletagservices.com\/357221\/40171660\/dcm\/dcmads.js",
		accountForSadImps: '',
		sendCookie: 'true',
		cookieBaseURL: 'sc.iasds01.com\/dtc?advEntityId=357221&pubEnt=40171660',
		fwMonitoring: 'false',
		doNothing: false,
		mn: "app33ami",
		mobOrTab: false,
		app: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/blocking\/app\/initial\/357221\/40171660?redirectUrl=https%3A%2F%2Fwww.googletagservices.com%2Fdcm%2Fdcmads.js",
		anId: '',
		advEntityId: '357221',
		pubEntityId: '40171660',
		videoId: '',
		videoChannel: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: [],
		groupm_native_publisher: false
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;




;(function(omidGlobal, factory, exports) {
	// CommonJS support
	if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(omidGlobal, exports);

		// If neither AMD nor CommonJS are used, export to a versioned name in the
		// global context.
	} else {
		var exports = {};
		var versions = ['1.2.20-iab1793'];
		var additionalVersionString = '';
		if (!!additionalVersionString) {
			versions.push(additionalVersionString);
		}

		factory(omidGlobal, exports);

		function deepFreeze(object) {
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					object[key] = deepFreeze(object[key]);
				}
			}
			return Object.freeze(object);
		}

		// Inject and freeze the exported components of omid.
		for (var key in exports) {
			if (exports.hasOwnProperty(key)) {
				if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
					// Define the top level property in the global scope
					Object.defineProperty(omidGlobal, key, {
//							value: {},       Removed trailing comma for build
						value: {}
					});
				}
				versions.forEach(function(version) {
					if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
						var frozenObject = deepFreeze(exports[key]);
						// Define the object exports keyed-off versions
						Object.defineProperty(omidGlobal[key], version, {
							get: function () {
								return frozenObject;
							},
//								enumerable: true,       Removed trailing comma for build
							enumerable: true
						});
					}
				});
			}
		}
	}
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
	'use strict';
	var $jscomp = $jscomp || {};
	$jscomp.scope = {};
	$jscomp.arrayIteratorImpl = function(a) {
		var b = 0;
		return function() {
			return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
		};
	};
	$jscomp.arrayIterator = function(a) {
		return {next:$jscomp.arrayIteratorImpl(a)};
	};
	$jscomp.makeIterator = function(a) {
		var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
		return b ? b.call(a) : $jscomp.arrayIterator(a);
	};
	$jscomp.arrayFromIterator = function(a) {
		for (var b, c = []; !(b = a.next()).done;) {
			c.push(b.value);
		}
		return c;
	};
	$jscomp.arrayFromIterable = function(a) {
		return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
	};
	$jscomp.ASSUME_ES5 = !1;
	$jscomp.ASSUME_NO_NATIVE_MAP = !1;
	$jscomp.ASSUME_NO_NATIVE_SET = !1;
	$jscomp.SIMPLE_FROUND_POLYFILL = !1;
	$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {
			};
			b.prototype = a;
			return new b;
		};
	$jscomp.underscoreProtoCanBeSet = function() {
		var a = {a:!0}, b = {};
		try {
			return b.__proto__ = a, b.a;
		} catch (c) {
		}
		return !1;
	};
	$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
				a.__proto__ = b;
				if (a.__proto__ !== b) {
					throw new TypeError(a + " is not extensible");
				}
				return a;
			} : null;
	$jscomp.inherits = function(a, b) {
		a.prototype = $jscomp.objectCreate(b.prototype);
		a.prototype.constructor = a;
		if ($jscomp.setPrototypeOf) {
			var c = $jscomp.setPrototypeOf;
			c(a, b);
		} else {
			for (c in b) {
				if ("prototype" != c) {
					if (Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d);
					} else {
						a[c] = b[c];
					}
				}
			}
		}
		a.superClass_ = b.prototype;
	};
	var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
		if (!b) {
			throw Error("Value for " + a + " is undefined, null or blank.");
		}
		if ("string" !== typeof b && !(b instanceof String)) {
			throw Error("Value for " + a + " is not a string.");
		}
		if ("" === b.trim()) {
			throw Error("Value for " + a + " is empty string.");
		}
	}, assertNotNullObject:function(a, b) {
		if (null == b) {
			throw Error("Value for " + a + " is undefined or null");
		}
	}, assertNumber:function(a, b) {
		if (null == b) {
			throw Error(a + " must not be null or undefined.");
		}
		if ("number" !== typeof b || isNaN(b)) {
			throw Error("Value for " + a + " is not a number");
		}
	}, assertNumberBetween:function(a, b, c, d) {
		(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
		if (b < c || b > d) {
			throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
		}
	}, assertFunction:function(a, b) {
		if (!b) {
			throw Error(a + " must not be truthy.");
		}
	}, assertPositiveNumber:function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
		if (0 > b) {
			throw Error(a + " must be a positive number.");
		}
	}};
	var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
	module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
		return /\d+\.\d+\.\d+(-.*)?/.test(a);
	};
	module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
		a = a.split("-")[0].split(".");
		b = b.split("-")[0].split(".");
		for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
			var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
			if (d > e) {
				break;
			} else {
				if (d < e) {
					return !1;
				}
			}
		}
		return !0;
	};
	var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
	module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
	};
	module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
	};
	var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", STATE_CHANGE:"stateChange", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", VIDEO:"video", LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
		PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, VideoEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ErrorType:{GENERIC:"generic", VIDEO:"video"},
		AdSessionType:{NATIVE:"native", HTML:"html"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app", WEB:"web"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed",
			CLIPPED:"clipped"}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds",
			CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
	var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
		this.guid = a;
		this.method = b;
		this.version = c;
		this.args = d;
	};
	module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
		return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
			void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.deserialize = function(a) {
		return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.prototype.serialize = function() {
		var a = {};
		a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
		void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
		return a;
	};
	var module$exports$omid$common$Communication = function(a) {
		this.to = a;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
	};
	module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
	};
	module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
		if (this.onMessage) {
			this.onMessage(a, b);
		}
	};
	module$exports$omid$common$Communication.prototype.serialize = function(a) {
		return JSON.stringify(a);
	};
	module$exports$omid$common$Communication.prototype.deserialize = function(a) {
		return JSON.parse(a);
	};
	module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
	};
	var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
		try {
			return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
		} catch (b) {
			return !1;
		}
	}, declareOmidPresence:function(a) {
		a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME +
					'"></iframe>'))));
	}, appendPresenceIframe_:function(a) {
		var b = a.document.createElement("iframe");
		b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
		b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
		b.style.display = "none";
		a.document.body.appendChild(b);
	}, isMutationObserverAvailable_:function(a) {
		return "MutationObserver" in a;
	}, registerMutationObserver_:function(a) {
		var b = new MutationObserver(function(c) {
			c.forEach(function(c) {
				"BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
			});
		});
		b.observe(a.document.documentElement, {childList:!0});
	}};
	var module$exports$omid$common$DirectCommunication = function(a) {
		module$exports$omid$common$Communication.call(this, a);
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
		this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
	};
	$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.handleExportedMessage(a.serialize(), this);
	};
	module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
		module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
	};
	module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
		return !1;
	};
	var module$exports$omid$common$eventTypedefs = {};
	var module$exports$omid$common$exporter = {};
	function module$contents$omid$common$exporter_getOmidExports() {
		return "undefined" === typeof omidExports ? null : omidExports;
	}
	function module$contents$omid$common$exporter_getOrCreateName(a, b) {
		return a && (a[b] || (a[b] = {}));
	}
	module$exports$omid$common$exporter.packageExport = function(a, b, c) {
		if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
			a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
		}
	};
	var module$exports$omid$common$guid = {generateGuid:function() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
			var b = 16 * Math.random() | 0;
			a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
			return a;
		});
	}};
	var module$exports$omid$common$logger = {error:function(a) {
		for (var b = [], c = 0; c < arguments.length; ++c) {
			b[c - 0] = arguments[c];
		}
		module$contents$omid$common$logger_executeLog(function() {
			throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
		}, function() {
			return console.error.apply(console, $jscomp.arrayFromIterable(b));
		});
	}, debug:function(a) {
		for (var b = [], c = 0; c < arguments.length; ++c) {
			b[c - 0] = arguments[c];
		}
		module$contents$omid$common$logger_executeLog(function() {
		}, function() {
			return console.error.apply(console, $jscomp.arrayFromIterable(b));
		});
	}};
	function module$contents$omid$common$logger_executeLog(a, b) {
		"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
	}
	;var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
	function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
		if ("undefined" !== typeof omidGlobal && omidGlobal) {
			return omidGlobal;
		}
		if ("undefined" !== typeof global && global) {
			return global;
		}
		if ("undefined" !== typeof window && window) {
			return window;
		}
		if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
			return module$contents$omid$common$OmidGlobalProvider_globalThis;
		}
		throw Error("Could not determine global object context.");
	}
	module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
	var module$exports$omid$common$windowUtils = {};
	function module$contents$omid$common$windowUtils_isValidWindow(a) {
		return null != a && "undefined" !== typeof a.top && null != a.top;
	}
	module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
		if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
			return !1;
		}
		try {
			if ("undefined" === typeof a.location.hostname) {
				return !0;
			}
			module$contents$omid$common$windowUtils_isSameOriginForIE(a);
		} catch (b) {
			return !0;
		}
		return !1;
	};
	function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
		return "" === a.x || "" !== a.x;
	}
	module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
		"undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	var module$exports$omid$common$PostMessageCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
		module$exports$omid$common$Communication.call(this, b);
		var c = this;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
		a.addEventListener("message", function(a) {
			if ("object" === typeof a.data) {
				var b = a.data;
				module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
			}
		});
	};
	$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
		return !!(a && a.addEventListener && a.postMessage);
	};
	module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.postMessage(a.serialize(), "*");
	};
	module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
		return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
	};
	var module$exports$omid$common$Rectangle = function(a, b, c, d) {
		this.x = a;
		this.y = b;
		this.width = c;
		this.height = d;
	};
	var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omid", "serviceWindow"];
	function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
		return b.reduce(function(a, b) {
			return a && a[b];
		}, a);
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
		if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
			try {
				var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
				if (e) {
					return new module$exports$omid$common$DirectCommunication(e);
				}
			} catch (f) {
			}
		}
		return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
		b = $jscomp.makeIterator(b);
		for (var e = b.next(); !e.done; e = b.next()) {
			if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
				return e;
			}
		}
		return null;
	}
	module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
		c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
		var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
		b && d.unshift(b);
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
	};
	module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
		var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
		d && c.push(d);
		c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
	};
	var module$exports$omid$common$VastProperties = function(a, b, c, d) {
		this.isSkippable = a;
		this.skipOffset = b;
		this.isAutoPlay = c;
		this.position = d;
	};
	var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.2.20-iab1793"};
	var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
	function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
		var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
		return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
	}
	var module$exports$omid$verificationClient$VerificationClient = function(a) {
		if (this.communication = a || (0,module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
			this.communication.onMessage = this.handleMessage_.bind(this);
		} else {
			if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
				this.omid3p = a;
			}
		}
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
		this.callbackMap_ = {};
		this.imgCache_ = [];
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
		return !(!this.communication && !this.omid3p);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		this.omid3p ? this.omid3p.registerSessionObserver(a, b) : this.sendMessage_("addSessionListener", a, b);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
		this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
				a && b ? b() : !a && c && c();
			}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
		var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
		this.imgCache_.push(e);
		var f = function(a) {
			var b = d.imgCache_.indexOf(e);
			0 <= b && d.imgCache_.splice(b, 1);
			a && a();
		};
		e.addEventListener("load", f.bind(this, b));
		e.addEventListener("error", f.bind(this, c));
		e.src = a;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
		var d = this;
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
				e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
			}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
		var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
		d = d.createElement("script");
		d.onload = b;
		d.onerror = c;
		d.src = a;
		d.type = "application/javascript";
		e.appendChild(d);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
		try {
			eval(a);
		} catch (c) {
			module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
		}
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasTimeoutMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
		}
//----------var c = this.remoteTimeouts_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setTimeout", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
		this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasIntervalMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
		}
//----------var c = this.remoteIntervals_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setInterval", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
		this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
		b = a.method;
		var c = a.guid;
		a = a.args;
		if ("response" === b && this.callbackMap_[c]) {
			var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
			this.callbackMap_[c].apply(this, d);
		}
		"error" === b && window.console && module$exports$omid$common$logger.error(a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
		for (var c = [], d = 1; d < arguments.length; ++d) {
			c[d - 1] = arguments[d];
		}
		this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
		for (var d = [], e = 2; e < arguments.length; ++e) {
			d[e - 2] = arguments[e];
		}
		this.communication && (e = (0,module$exports$omid$common$guid.generateGuid)(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
	};
	(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

}, typeof exports === 'undefined' ? undefined : exports));



} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}



	
	__IASScope.isDomless = (typeof window === "undefined" ? true : false);
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.2.20-iab1793'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;




__IntegralASConfig.getContextNode = function(win, topWin) {
	'use strict';

	if (__IASScope.isDomless) {
		return;
	}
	if (__IntegralASConfig.useFIF) {
		return __IASScope.frameElement; // Early exit if using FIF
	}
	
	var tempScript,
		embedded = win != topWin,
		scripts = document.getElementsByTagName('script'),
		result = scripts[scripts.length - 1],
		scriptIndex = scripts.length,
		
		useDocWrite = 'jss,jsi,jspix'.indexOf(__IntegralASConfig.mode) !== -1,
		scriptUrl = __IntegralASConfig.scriptUrl;

	try {
		
		while (--scriptIndex >= 0) {
			tempScript = scripts[scriptIndex];
			if (
				tempScript.src &&
				tempScript.src.indexOf(scriptUrl) === 0 &&
				tempScript.getAttribute('data-ias-script-tag') === null
			) {
				result = tempScript;
				tempScript.setAttribute('data-ias-script-tag', 'found');
				break;
			}
		}
		if (scriptIndex === 0 && useDocWrite && !embedded) {
			
			document.write('<span id="s' + __IntegralASConfig.asid + '"/>');
			result = document.getElementById('s' + __IntegralASConfig.asid).parentNode;
		}
	} catch (e) {} // TODO: maybe a jsDiagnostic?

	return result;
};

__IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);





__IntegralASConfig.perfFactory = function() {
	'use strict';

	var _marks = {};
	var START_CODE = 'A';
	var END_CODE = 'Z';

	function _addMark(codeName, time) {
		
		_marks[codeName] = time;
	}

	function mark(codeName) {
		_addMark(codeName, Math.round(__IASScope.performance.now()));
	}

	function markStart(baseName) {
		mark(baseName + START_CODE);
	}

	function markEnd(baseName) {
		mark(baseName + END_CODE);
	}

	function markResource(baseName, url) {
		var entry, entries;
		entries = __IASScope.performance.getEntriesByName(url);
		if (entries && entries.length) {
			entry = entries[entries.length - 1];
			if (entry.startTime > 0 && entry.responseEnd > 0) {
				_addMark(baseName + START_CODE, Math.round(entry.startTime));
				
				_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
			}
		}
	}

	function getData() {
		return _marks;
	}

	function noop() {}

	function setNoops() {
		_addMark = noop;
		mark = noop;
		markStart = noop;
		markEnd = noop;
		markResource = noop;
	}

	function isFunc(obj) {
		return typeof obj === 'function';
	}

	function _init() {
		var canUsePerformanceAPIs = false;
		var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
		var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
		var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
		var downloadMark;

		try {
			canUsePerformanceAPIs =
				__IASScope.performance &&
				isFunc(__IASScope.performance.getEntriesByName) &&
				isFunc(__IASScope.performance.now) &&
				__IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

			if (canUsePerformanceAPIs) {
				downloadMark = __IntegralASConfig.jsDoSplit
					? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD
					: PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

				markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
				_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
				markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
			} else {
				setNoops();
			}
		} catch (err) {
			// TODO: remove if we never get here?
			setNoops();
			if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
				__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
			}
		}
	}

	_init();

	return {
		mark: mark,
		markStart: markStart,
		markEnd: markEnd,
		markResource: markResource,
		getData: getData
	};
};
__IntegralASConfig.perf = __IntegralASConfig.perfFactory();





} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}
__IntegralASConfig.initialize=function(m,v,M){function Ka(){var h,a,b;m.perf.markStart(ja);z.startSystem();l=z.getAggregator();l.provide({omidAdSessionContext:{}});l.provide({omidAdSessionVerificationParameters:{}});h=La();a=ka();b=(new Ma).createInstance(h,a);l.provide({mErrors:h,mJsonp:a,mComm:b});h=__IASOmidVerificationClient;l.provide({omidVerificationClient:h});l.once("callContinueMain",function(){var a,b;m.perf.markStart(la);b=U.instantiateModules();a=U.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,s,b.renderDetector);U.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);U.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,s);m.perf.markEnd(la)});l.on("tryToCallContinueMain",function(a){m.isResolved?l.trigger("callContinueMain"):l.trigger("requestBootstrapper",
a)});l.once("requestBootstrapper",function(a){var b=m.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var e=a&&a.config,k=a&&a.sca,u=a&&a.xsca;e&&l.trigger("jsonp",b+"/jsconfig"+e+(m.adSessionId?"&adSessionId="+m.adSessionId:""),function(a){Object.assign(m,"string"===typeof a?JSON.parse(a):a);m.isResolved=!0;m.sp_cdnScripts={sca:k,xsca:u};l.trigger("callContinueMain")},!1,"cbName")});h=[{environment:new $(h),adSessionReadyStrategy:new Na(h)},{environment:new Oa,
adSessionReadyStrategy:new Pa}];(new Qa(h)).resolve().adSessionReadyStrategy.start();m.perf.markEnd(ja)}var l,U=function(){function h(a){var b=new Ra(a,s),c=new Sa,d=new Ta(a,s),p=Ua(a,s),q=(new Va(m,s,a)).resolve(),h=[b],D=[];p.applies()&&h.push(p);d.applies()&&h.push(d);c.applies(a,s)&&h.push(c);f(q).each(function(a,b){h.push(new Wa(b,s));D.push(b.id)});0<D.length&&(l.trigger("addOutputItem",{output:D.join(".")},"scm",{type:g.IMPRESSION_EVENT}),l.trigger("addOutputItem",{output:D},"metricIdList",
{type:g.DT_CODES.UNLOAD,asION:!0}));return h}function a(a,b,c,d){var p=h(a);l.provide("viewabilityDefinitions",p);return f(p).map(function(p,h){var f;f=new Xa(h,b);var w=(new Ya(c,a,h.rts)).getCallbacks(),l=new Za(d.createPingJobs(h.type,h.timeInViewThresholds,w,h.metricId));h.rtsCallbacks=w;f=h.thresholdType===g.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new $a(f,h,l,s.isVideo()):new ab(f,new aa(h.minUnit),l);f.start();return f})}function b(a,b){var c=(new ba).accepts(),c=!s.isAvid()&&!c&&
!s.isInMobiMraidVideo();return s.isVideo()&&c?bb(m.videoId,a,b):{}}function c(a,b,c,d,p,q,h,D,w,N){try{m.perf.markStart(ma),m.tpiLookupURL&&cb(h,D).init(m.tpiLookupURL),s.isDomless()||N.isStarted()&&N.sendOriginList(),z.runAll(),r.execAtEndOfThread(function(){var q;try{m.perf.markStart(na);q={output:(new Date).getTime()-p};a.addItem(q,"sinceFw",{type:g.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:g.DT_CODES.ADTALK});m.perf.markEnd(na);var h,x;m.isSplitMode&&
(x=m.protocol+"://"+m.sp_cdnScripts.main,m.perf.markResource(db,x));m.impUrl&&m.perf.markResource(eb,m.impUrl);h=m.perf.getData();l.trigger("addThrottledProp",g.DT_SLOT.IM,"prf",f(h).toION());c.isApplicable(s)&&c.sendAdTalkCall()}catch(D){d.add(g.ERROR_CODES.ADTALK_DELAY)}}),m.perf.markEnd(ma)}catch(Q){d.add(g.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,n,p,q,h,f,w){var g;"true"!==m.minimizeCalls&&(g=(new Date).getTime(),r.execAtEndOfThread(function(){c(a,b,d,n,g,p,q,h,f,w)}))}return{instantiateModules:function(){var c,
d,u,n,p,q,h,f,g={};m.perf.markStart(oa);l=z.getAggregator();g.mFeatures=l.provide("features",fb());l.provide("mobileApp",function(){return c=c||new gb(g.mFeatures)});l.provide("avidJsClient",function(){return d=d||new hb(r.getWindow())});l.provide("context",s);g.mBrowser=l.provide("browser",(new ib).createInstance());g.mErrors=l.request("mErrors");g.mIds=l.provide("ids",jb());g.iOutput=new kb(l);l.request("mJsonp");g.mComm=l.request("mComm");g.viewabilityMeasurement=(new lb(new mb(g.mIds),g.mFeatures,
g.mBrowser)).create();if((n=l.request("omidAdSessionContext"))&&n.queuedOutputItems)for(q=0;q<n.queuedOutputItems.length;q++)l.trigger("addOutputItem",{output:n.queuedOutputItems[q].value},n.queuedOutputItems[q].code,{type:"impression"});g.mFeatures.on("swapids")&&(m.oid=m.asid,m.asid=g.mIds.unq);g.mAdTalk=(new nb).createInstance(g.mFeatures);u=ob();n=pb(l);p=l.provide("mPage",(new qb).createInstance());g.mAncestorOrigins=rb();g.mPageUrls=l.provide("pageUrls",(new sb).createInstance(g.mAncestorOrigins,
r));q=tb();l.provide("ieXDomainViewability",ub(g.mBrowser));h=vb(g.mBrowser);f=b(g.mFeatures,q);g.mVideo=l.provide("video",f);wb(xb.build());h=(new yb).createInstance(g.mErrors,h,g.mFeatures);p=(new zb).createInstance(h,g.mErrors,p,s);f=l.provide("jobFactory",Ab());g.mDataTransfer=Bb(h,g.mErrors,g.mFeatures,g.mIds,g.iOutput,g.mBrowser,q,u);u=Cb(g.mErrors,g.mFeatures,l,n);g.mMode=Db(u,g.mFeatures,g.viewabilityMeasurement.isImmediate());g.mViewability=l.provide("viewability",Eb(new F,g.viewabilityMeasurement,
g.mBrowser,g.mDataTransfer,g.mFeatures,l,g.iOutput,p,q,g.mVideo));a(g.mFeatures,g.mViewability,n,f);g.loopDelay=pa();g.renderDetector=Fb();g.mDataTransfer.setViewabilityMod(g.mViewability);m.perf.markEnd(oa);return g},preImpression:function(a,b,c,d,p,q,h,f,w,N,Q){var B,r,H,A,s;m.perf.markStart(qa);try{c.isApplicable(N)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),w.on("fm2")&&d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),w.on("idMap")&&(B=c.getIdMap())&&d.addItem(B,"idMap"))}catch(t){p.add(g.ERROR_CODES.ADTALK_GENERAL)}try{q.isApplicable(h,
w,N)&&q.start(),s=f.detectTopURL(),w.on("exch")&&(r=(new Gb).createInstance(p,d),r.parse(s)),H=Hb(),H.isApplicable(w)&&H.start(w),N.usesGroupMCustomMetric()&&Ib(),A=Jb(),A.isApplicable(w)&&(A.start(),l.trigger("sendCookie")),Q.start()}catch(Kb){p.add(g.ERROR_CODES.IMPRESSION_LEADUP)}m.perf.markEnd(qa);return s},sendImpression:function(a,b,c,d,p,q,h,g,w){try{Lb(a,b,c,d,p,q,h).send(g),f.isFunction(w.triggerInitializationEvents)&&w.triggerInitializationEvents()}catch(l){__IntegralASDiagnosticCall("impsend",
l,m)}},postImpression:function(a,b,c,n,p,q,h,f,w,l,r,B,C){try{m.perf.markStart(ra);var H=Mb();H.start();H.addFieldTypes([g.DT_SLOT.IM,g.DT_SLOT.FF,g.DT_SLOT.ENVIRONMENT,g.DT_SLOT.FF_EXP]);var A=Nb(a,b,c);A.isApplicable(n)&&A.start();var s;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(s=Ob(p,q,h,b,f),s.init());d(f,w,l,h,n,p,q,b,B);r&&r.start&&r.start();C.isDomless()||Pb().start(["sca","xsca","rsrch"],n);Qb();z.runTier(g.TIERS.VIEWABILITY);var t=Rb();t.isApplicable(n)&&(t.start(),R.recordBlockingTime(),
m.perf.mark(Sb),R.setupOnLoadTracking(),R.setupBrowserDelayTracking());m.perf.markEnd(ra)}catch(Kb){h.add(g.ERROR_CODES.POST_IMPRESSION)}}}}(),f=function(h){return new G(h)},G=function(h){this.iterable=h};G.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return h?a:b};G.prototype.isArray=function(){return this.iterable instanceof Array};G.prototype.isEmpty=function(h){return 0===this.keys(h).length};G.prototype.each=function(h,a){var b=
this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)h(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&h(c,b[c])};G.prototype.map=function(h,a){var b=[];this.each(function(c,d){var e=h(c,d);if(void 0!==e||a)b[b.length]=e});return b};G.prototype.stringify=function(h,a){a=a||",";var b=[];this.each(function(a,d){var e=h(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};G.prototype.toION=function(h,a){var b,c="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+
this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(h,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),n=f(c).toION(h,a);return d?n:(h[b]||b)+":"+n}));return c+b.join(",")+d};G.prototype.compareTo=function(h){var a=!1;this.each(function(b,c){h[b]!==c&&(a||(a={}),a[b]=c)});return a};G.prototype.toParams=function(h){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},h)};G.prototype._privateMixin=
function(h,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(h[c]=a[c]);return h};G.prototype.mapToObj=function(h){var a={},b=this;this.each(function(c,d){var e=h(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};G.prototype.invert=function(){return this.mapToObj(function(h,a){var b={};b[a]=h;return b})};G.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};G.prototype.find=function(h){var a;this.each(function(b,c){h(b,c)&&(a=c)});return a};G.prototype.findFirst=
function(h){var a,b;this.each(function(c,d){!b&&h(c,d)&&(a=d,b=!0)});return a};G.prototype.keys=function(h){var a=[];this.each(function(b){a.push(b)},h);return a};G.prototype.asStrings=function(){var h={};this.each(function(a,b){h[a]=""+b});return h};G.prototype.selectProperties=function(h){var a={},b=this;f(h).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};G.prototype.filter=function(h,a){return this.map(function(a,c){var d;if(f.isUndef(h)||f.resolve(h,a,c))d=c;return d},
a)};G.prototype.toArray=function(){return this.map(function(h,a){return a})};G.prototype.JSONStringify=function(){var h,a,b=!1;v.Prototype&&v.Prototype.Version&&-1===v.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return h};G.prototype.contains=function(h){var a=f(this.iterable).findFirst(function(a,c){return h===c});return f.isDef(a)};f.toBase=function(h,a){var b,c=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
e=[];h=c?-h:h;do b=h%a,e.push(d[b]),h=(h-b)/a;while(0<h);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(h){return"undefined"!==typeof h};f.isUndef=function(h){return!f.isDef(h)};f.isBool=function(h){return"boolean"===typeof h};f.noop=function(){};f.identity=function(h){return h};f.isFunction=function(h){return"function"===typeof h};f.isStr=function(h){return"string"===typeof h};f.useIfDef=function(h){return f.isDef(h)?h:!1};f.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};
f.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);return h};f.resolve=function(h){var a=f(arguments).toArray();a.shift();return f.isFunction(h)?h.apply({},a):h};f.flatJSONParse=function(h){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(h);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(h);return e};f.debounce=function(h,a,b){var c,d=b||v;return function(){var b=this,k=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;h.apply(b,k)},a)}};f.last=function(h){return h[h.length-
1]};f.collapseArgsIntoHash=function(h,a){var b={};a?b[h]=a:b=h;return b};f.fromBoolToNum=function(h){return h?1:0};f.isNumeric=function(h){return f.isDef(h)&&null!==h&&!isNaN(h)};f.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};var z=function(){var h,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,q){q=q||{};var x,g,w=function(a){0===b.length&&(b=f(a).map(function(a,b){return h.request(b)}))},l=function(){if(!x){var a=
[];x=!0;w(["features","browser","context"]);q.emits&&(c.events=new F);if(!q.applies||q.applies.apply(q,b))g=!0,a=f(e).map(function(a,b){return h.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=q.tier;f.isDef(b)&&(a[b]=a[b]||new ca,a[b].push(l))})();h.provide(d,function(){var a;l();g&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=
function(){h=h||new sa;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return h};return d}(),g={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",
VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",
JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",
FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",
UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",
AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,
0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr"}},
RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},ja="mf",la="cm",oa="in",qa="pr",ra="po",Sb="bl",ma="lo",na="lt",db="md",eb="id",Tb=function(){var h,a=g.RENDER.CREATIVE_NODE_TYPES.concat(g.RENDER.CONTAINER_NODE_TYPES),b=function(c){var d;h=h||m.contextNode.parentNode;if(c)if(t.isNodeXDomainIframe(c))d=c;else{var e=t.getNodeName(c);if(e&&(-1!==g.RENDER.CREATIVE_NODE_TYPES.indexOf(e.toUpperCase())||t.hasBackgroundImage(c)||c.children&&0===c.children.length&&c.innerText&&0<c.innerText.length))d=c;
else{h=c;var e=b,k=t.getNodeName(c),u=[],n=c&&c.children,p=n&&n.length,q;if(n)for(var f=0;f<p;f++)q=n[f],q.children&&0===q.children.length&&-1===a.indexOf(q.nodeName.toUpperCase())&&u.push(q.nodeName);var D;try{D=a.concat(u),t.isWindow(c)?d="HEAD"===t.getNodeName(m.contextNode.parentNode)?V(m.contextNode.parentNode.ownerDocument.body,D):V(null,D):("IFRAME"===k&&(c=c.contentWindow.document),d=V(c,D))}catch(w){}d=e(d)}}else d=null;return d};return{find:b,getClosestContainerName:function(){return t.getNodeName(h)}}},
Fb=function(){var h,a=!1,b={status:g.RENDER.STATUS.OTHER,details:g.RENDER.DETAILS.OTHER},c={status:g.RENDER.STATUS.DETECTED,details:g.RENDER.DETAILS.ENVIRONMENT},d=function(){a=!0},e=function(a){var b={},c=r.getDoc(),d=function(e){var k=e&&e.type;if("readystatechange"===k&&"complete"===e.target.readyState||"load"===k)b.status=g.RENDER.STATUS.DETECTED,b.details=h.build(a,{eventType:k}),u(b),y.removeEvent(a,"load",d),y.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(b.status=g.RENDER.STATUS.DETECTED,
b.details=h.build(a,{eventType:"readystatechange"})):(y.addEvent(a,"load",d),y.addEvent(c,"readystatechange",d));return b},k=function(a){a===g.RENDER.STATUS.DETECTED&&l.trigger("perfCheckpoint",{type:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},u=function(c){var d=new Ub(c),e=c.status||b.status;c=c.details||b.details;a&&e===g.RENDER.STATUS.DETECTED?(d=d.status(),k(e),l.trigger("addThrottledOutputItem","rend",e),l.trigger("addThrottledOutputItem",
"renddet",c),l.trigger("addThrottledOutputItem","rmeas",d)):(d=d.status(),k(e),l.trigger("addOutputItem",{output:e},"rend"),l.trigger("addOutputItem",{output:c},"renddet"),l.trigger("addOutputItem",{output:d},"rmeas"))},n=function(){l.on("primaryadfound",function(a){var c,d=b,k=new Tb,n=!0,f=function(){B();n&&(c=r.setInterval(B,500))},l=function(){var a=r.getWindow().mraid,b=function(){y.removeEvent(a,"ready",b);h.appendCode(g.RENDER.DIAGNOSTIC.MRAID_READY);f()};"loading"===(a.getState&&a.getState())?
y.addEvent(a,"ready",b):(h.appendCode(g.RENDER.DIAGNOSTIC.MRAID_DEFAULT),f())},B=function(){var b=a&&a.getAdNode(),f=k.find(b);if(t.isNodeXDomainIframe(f))c?r.clearInterval(c):n=!1,d=e(f);else if(f){var b=!1,l=t.getRect(f);f&&"IMG"===t.getNodeName(f)&&(b=0===f.naturalWidth||0===f.naturalHeight);!b&&l.width>=g.RENDER.WIDTH_THRESHOLD&&l.height>=g.RENDER.HEIGHT_THRESHOLD&&(d.status=g.RENDER.STATUS.DETECTED,c?r.clearInterval(c):n=!1);d.details=h.build(f)}else d.details=k.getClosestContainerName()||h.getAdNodeName(b)||
d.details;u(d)};s.isMraid()?l():f()})};return{start:function(){l.trigger("perfCheckpoint",{type:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:"initial"});h=new Vb;l.on("impressionsent",d);s.isAvid()||s.isOmid()||s.isVideo()?u(c):(u(b),n())}}},Vb=function(){var h=!1,a=[],b=function(a){var b;if(t.isWindow(a))b="WINDOW";else if(t.isNodeXDomainIframe(a))b="XIFRAME";else try{b=t.getNodeName(a)}catch(e){}return b};return{build:function(c,d){var e=c&&t.getRect(c),k=b(c),u=c&&"IMG"===
k,n=t.hasBackgroundImage(c),p=c.innerText&&0<c.innerText.length,p=c.children&&0===c.children.length&&p,q=[k,e&&e.width>=g.RENDER.WIDTH_THRESHOLD&&e.height>=g.RENDER.HEIGHT_THRESHOLD?g.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:g.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE];!n&&!u||0!==c.naturalWidth&&0!==c.naturalHeight||q.push(g.RENDER.DIAGNOSTIC.BROKEN_IMAGE);n&&q.push(g.RENDER.DIAGNOSTIC.STYLED_NODE);p&&q.push(g.RENDER.DIAGNOSTIC.TEXT_NODE);d&&d.eventType&&("readystatechange"===d.eventType?q.push(g.RENDER.DIAGNOSTIC.DOCUMENT_READY):
"load"===d.eventType&&q.push(g.RENDER.DIAGNOSTIC.LOAD_FIRED));h&&f(a).each(function(a,b){q.push(b)});return q.join(".")},getAdNodeName:b,appendCode:function(b){a.push(b);h=!0}}},Ub=function(h){return{status:function(){var a=h.details||g.RENDER.DETAILS.OTHER,b=h.status||g.RENDER.STATUS.OTHER,c=a.split(".")[0],d="env"===a,e=c&&-1!==g.RENDER.CREATIVE_NODE_TYPES.indexOf(c.toUpperCase()),c="XIFRAME"===c,k=-1!==a.indexOf("tn"),a=-1!==a.indexOf("sn");return d?b:e||c||k||a?"1":"0"}}},W=function(){return{applies:function(h,
a){var b=l.request("mobileApp"),c=!a.bootstrapOn("mobOrTab")&&h.browserIs(g.BROWSERS.WEBKIT);return(h.browserIs(g.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||c||h.browserIs(g.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&h.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},Ib=function(){var h,a,b=!1,c=l.request("mPage"),d=function(){!b&&a&&h&&!c.isHidden()&&(b=!0,l.trigger("sendDt",g.DT_CODES.LARGE_BILLABLE))};l.on("primaryadfound",function(a){h=a.getDims().area()>=g.MRC_LARGE_AD_SIZE;d()});
l.on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},ob=function(){var h=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=s.getTagTime(),h.push(d));f(a).mixin(c)});return{toString:function(){return f(h).toION(b)}}},sa=function(){var h=new Wb,a=new F;return f(h).mixin(a)},F=function(){var h={},a={},b=function(b,c,k){if((b=a[b])&&0!==b)return k&&
(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){h[a]=h[a]||new ca;h[a].push(b,c)};return{on:function(a,e){var k={};e?k[a]=e:k=a;f(k).each(c);f(k).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=h[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var k=b;a[k]=a[k]||[];a[k].push(c);(k=h[b])&&k.run.apply({},c)}}},da=function(){var h=function(a,c,d){var e,k=c.length,
u=t.isWindow(a)?a.frames:t.getChildWindowsOf(a);d&&d(a,c);if(u&&u.length){for(a=0;a<u.length;a++)(e=u[a])&&t.isWindow(e)&&(c[k]=a,h(e,c,d));c.pop()}},a=function(a,c){try{h(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=t.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},ca=function(){var h=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;h[h.length]=function(){c<b&&(c++,
a.apply({},arguments))}},run:function(){var a=arguments;f(h).each(function(b,c){c.apply({},a)})}}},Za=function(h){var a={};return{doEligibleJobs:function(b){f(h).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Xb=function(){var h,a=new ta,b=function(b,d,e,k){var u,n,p,q;if(JSON&&JSON.parse)try{u=JSON.parse(b.data),n=b.source,q=f.noop,d(u)&&(k&&(p=k(n,u))&&(q=function(){a.send(function(){return p},n)}),e(b,u,q))}catch(h){u&&l.trigger("error",g.ERROR_CODES.MESSAGE_LISTENER)}};
return{listen:function(a,d,e){h=function(k){b(k,a,d,e)};y.addEvent(v,"message",h)},stop:function(){h&&y.removeEvent(v,"message",h);h=null}}},ta=function(){var h=function(a){return f(a).isObj()?[a]:(new da).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=h(c);f(d).each(function(c,d){var u;u=f.resolve(b,d)||{};u.sentTime=r.now();u=a(u);d.postMessage(f(u).JSONStringify(),"*")})}}}},
Yb=function(h,a){return{onAll:function(b){var c={};f(a).each(function(d,e){h.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},kb=function(h){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);
return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,h;a(e)&&(h=d.output(),e.encode&&(c=encodeURIComponent(c),h=encodeURIComponent(h)),f.isFunction(b)?b(c,h):b[c]=h)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&
delete b[a]})},getItem:function(a){return b[a]}}},Wb=function(){var h={},a=function(a,c){h[a]=c};return{request:function(a){var c,d=h[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?h[b]=c:f(b).each(a);return c}}},zb=function(){return{createInstance:function(h,a,b,c){return s.isDomless()?new Zb:new $b(h,a,b,c)}}},$b=function(h,a,b,c){var d;return{collect:function(){var a=h.find(),k=a.getOutOfViewReasons(),u=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&
d?d:I(t.calcWinDims()),p=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!p.hasValidDims())return{viewState:g.NA,posViewState:g.NA,embedded:s.embedded,winDimensions:n,adDimensions:p};!0===u&&k.push(g.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:k.length?g.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:k.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),
tabHidden:f.stringifyTriState(u),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Zb=function(){return{collect:function(){return{}}}},ac=function(h){h=h||f.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=h(b);c();0!==a.length&&
b===e.state||a.push({state:b,duration:0})}}},ua=function(h,a){var b=h||1,c=0,d=0,e,k=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var u=e||a;0===c%b&&(k+=r.now()-u,d++);c++},getTime:function(){return k},getCount:function(){return d}}},va=function(){var h,a=0,b=0,c=new F(!0),d=function(){h&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},
start:function(){h||(h=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},bc=function(h,a){var b,c=a,d=function(a){b||(a&&h(),b=r.setInterval(h,c))},e=function(a){a&&h();r.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},aa=function(h){var a,b,c=0,d=s.getTagTime(),e=0,k=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=s.getTagTime();k=!1},mark:function(){a=k?s.getTagTime()-d:0;c+=a;c>=h&&(b=c-a<h,e+=b?c:a);d=s.getTagTime();
k=!0}}},P=function(h,a){var b=h||m.adsafeSrc||m.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?m.protocol+":"+b:m.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],k=b[4],u=b[5],n=h?b[6]:"",p=a?b[7]:"",q={},x=function(a){f.isDef(a)&&(k=a);return k},g=function(a){f.isDef(a)&&(u=a);return u},l=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=q[b])?q[b]=
d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:x,master:g,setParam:function(a,b){q[a]=q[a]||{};f(b).isObj()?f(q[a]).mixin(b):q[a]=b},path:function(a){n=a},toString:function(){var a=x()?x()+".":"",b=n?"/"+n:"",c;p||!f(q).isEmpty()?(c=f(q).isEmpty()?"":f(q).stringify(l,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+g()+b+c}}},Qb=function(){var h=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&
c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(s.friendly&&!s.isMobileApp())if(b=l.request("adSlotIds"))c=b;else{var d,e;if(d=t.getOurNodeInTop()){var k=t.getAncestorNodes(d);e=f(k).map(a)}if(b=e=e&&h(e))l.trigger("addOutputItem",{output:b},"slid",{type:g.DT_CODES.ADTALK,asION:!0}),l.provide("adSlotIds",b),c=b}return c}catch(u){l.trigger("error",g.ERROR_CODES.AD_SLOT_ID)}}()};z("AdRefreshDetection",[],function(){var h=
[30,45,60,90],a={start:function(){var a=this,c=m.asid,d=this.getChanId();c&&d&&(this.recordAdSlotImpression(c,d,function(c,d){c?l.trigger("error",g.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d))},adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},getChanId:function(){for(var a=m.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var k=d.exec(a[e]);k&&3===k.length&&"chanId"===k[1]&&(c=k[2])}return c},sendRefreshSession:function(a){l.trigger("addThrottledProp",
g.DT_SLOT.ENVIRONMENT,"ar",(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount)},recordAdSlotImpression:function(a,c,d){var e=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);d(null,b)}catch(c){d(c)}},!1);e.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a){var c=this,d=m.adRefreshThreshold&&parseInt(m.adRefreshThreshold)||
null,e=r.getTop();if(d&&this.adRefreshIntervalIsValid(d))l.on("sendDt",function(k,u){k===g.DT_CODES.PING&&u===d&&(r.execAtEndOfThread(function(){e.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a}),"*")}),c.sendAutoRefreshProp(d))})},sendAutoRefreshProp:function(a){l.trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"ir",a);l.trigger("adSessionComplete")}};s.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){l.trigger("error",
g.ERROR_CODES.AD_REFRESH)}});return a},{tier:g.TIERS.ENVIRONMENT,applies:function(h,a,b){return b.isPossiblyRefreshable()}});var rb=function(){var h,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=r.getWindow().location.ancestorOrigins,a=!0}catch(b){l.trigger("error",g.ERROR_CODES.ANCESTOR_ORIGINS)}},
getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return f.last(h)},sendOriginList:function(){var a;a="ao:"+(h?f(h).map(b).reverse():[]).join(",");l.trigger("addOutputItem",{output:a},"tpiLookup",{type:g.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.trigger("sendDt",g.DT_CODES.THIRD_PARTY)}}},Ob=function(h,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},k=function(d){try{a.diagnostic("c");var k=d.length,p=0,q=0;e(k,0,0);f(d).each(function(a,b){h.send(b.replace("%%CBS%%",
c.getCacheBustId()),function(){e(k,p,++q)},!0);e(k,++p,q)})}catch(x){b.add(g.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new P).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+m.asid;h.jsonp(a,k)}catch(c){b.add(g.ERROR_CODES.AT_INIT)}}}},Cb=function(h,a,b,c){return{enabled:"true"===m.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===m.accountForSadImps&&c.measure(a),m._onAPIResult&&m._onAPIResult(a)}catch(e){h.add(g.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag",
"bapiClient")}}}},ib=function(){return{createInstance:function(h,a,b,c){return s.isDomless()?new cc:new dc}}},dc=function(){var h=g.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=h.OPERA:f.isDef(b.mozInnerScreenY)?a=h.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=h.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=h.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=h.IE:f.isDef(b.WebKitPoint)&&(a=h.WEBKIT)}catch(c){}return a},
c=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:g.NA},
getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var k=g.NA,u=r.getDoc(),n=u.createElement("div");if(a(h.IE))try{if("-ms-ime-align"in u.documentElement.style)k="11";else for(n.style.behavior="url(#default#clientcaps)",u=0;u<e.length&&!(k=n.getComponentVersion(e[u],"componentid").replace(/,/g,"."));u++);}catch(p){}e=k;k=g.NA;n=r.getWindow();f.isDef(n.navigator)&&
f.isDef(n.navigator.appName)&&(k=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:k}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],k=function(){return f(b).findFirst(function(b,c){return J.contains(a,c)})};return J.contains(a,"Android")&&k()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},cc=function(){var h=function(){return!1},a=function(){return g.NA};
return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:h,getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,isAndroidWebViewBrowser:h}},Ma=function(){return{createInstance:function(h,a){return s.isDomless()?new ec(a):new fc(h,a)}}},gc=function(){var h,a=function(a,c){var d="",e="",k=r.getDoc().getElementsByTagName("ins");if(k&&0<k.length){e=k[0];d="<ins";for(k=0;k<e.attributes.length;k++)d+=
" "+e.attributes[k].nodeName+'="'+e.attributes[k].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=l.request("omidAdSessionContext");var c=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/");return c&&a},deployBlockingScriptIntoIframe:function(b){h=l.request("omidAdSessionContext");var c="iasbi"+m.asid,d;d=m.contextNode.parentNode;var e,k=m.adWidth&&0<m.adWidth?m.adWidth:0,u=m.adHeight&&0<m.adHeight?m.adHeight:0,f=r.getDoc().getElementsByTagName("ins"),p;p=e=0;f&&0<f.length&&(p=f[0],e=parseInt(p.style.width),
p=parseInt(p.style.height));k=e||k||window.innerWidth;u=p||u||window.innerHeight;"complete"===r.getDoc().readyState&&(m.forceAppend="true");"true"===m.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=k+"px",d.style.height=u+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",d.style.padding=d.style.margin=d.style.border="0px";
d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},fc=function(h,a){var b=function(a,b){var c,d,e=m.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="','"></iframe>'],img:['<img src="','"/>']}[a];c=c[0]+b+c[1];d=new gc;d.isApplicable(b)?d.deployBlockingScriptIntoIframe(b):
"true"===m.forceAppend?"script"!==a?(d=M.createElement("DIV"),d.innerHTML=c,e.appendChild(d.childNodes[0])):(c=M.createElement("SCRIPT"),c.src=b,e.appendChild(c)):M.write(c)},c=function(a,b,c){var d=!c&&y.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=t.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=M.createElement("script");c=c||m.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=b);d&&(e.setAttribute("defer",
""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),c(a,void 0,!0))},k=function(b,c,e,k){d(a.wrap(b,c,e,k))};l.on({addNode:b,send:c,exec:d,notify:e,jsonp:k});return{addNode:b,send:c,exec:d,notify:e,jsonp:k}},ec=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=
function(a,b){a=encodeURI(a);l.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(h.wrap(a,b,d,e))};l.on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},s=function(){var h="undefined"===typeof window,a="undefined"!==
typeof v&&"undefined"!==typeof top&&v!==top,b=function(){var a=!1;if(h)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return h||f.isDef(r.getWindow().mraid)},d=function(){return!h&&f.isDef(r.getWindow().mraid)},e=function(){var a=!1;if(!h)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=d()&&!!a;return a},k=function(){var a;if(!(a=-1!==m.mode.indexOf("jsvid"))){var b;a=!1;var c=z.getAggregator();if(!h&&(c=c.request("avidJsClient"),
c.isAvidAvailable()))try{b=c.getAvidAdSessionContext(),a=b.mediaType===g.MEDIA_TYPE.VIDEO}catch(d){}(b=a)||(c=z.getAggregator(),b=c.request("omidVerificationClient"),a=!1,c=c.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===g.MEDIA_TYPE.VIDEO),b=a||e());a=b}return a},u=function(){return m.mobOrTab},n=function(a){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(b,c){return J.contains(c.id,a)}).length},p=function(){return n("grpm")||m.use100v};return{embedded:a,
friendly:b,isFriendlyToParent:function(a){var b,c;if(h)a=!0;else{try{c=P(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-m.birthdate},getPageTime:function(){var a=g.NA;!h&&f.isDef(v.chrome)&&f.isDef(v.chrome.csi)&&f.isFunction(v.chrome.csi)&&(a=r.round(v.chrome.csi().pageT));return a},isVideo:k,isMobileApp:c,isSpecifiedAd:function(){var a=!1;h||(a=(a=m._cl_adpath)&&f.isStr(a));return a},isCompoundAd:function(){var a=
!1,b=/\[(.*)\]/;h||(a=b.exec(m._cl_adpath),a=null!==a&&0!==a[1].length&&1<a[1].split(",").length);return a},isAvid:function(){return!h&&f.isDef(r.getWindow().avid)},isOmid:function(){var a=z.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new ba).accepts()},isOmidForWeb:function(){return(new wa).accepts()},isDomless:function(){return h},isAvidNative:function(){var a=!1,b=z.getAggregator();h||(b=b.request("avidJsClient"),b.isAvidAvailable()&&
(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===g.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===g.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return a},isBustedIframe:function(){var a=!1;h||(a=void 0!==ea());return a},isMraid:d,isSafeFrame:function(){var a=!1;h||(a=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:e,isDeviceTypeGroupMobile:u,usesIASFullyInViewCustomMetric:function(){return n("fiv")||m.use100v},usesGroupMCustomMetric:p,isCeltra:function(){var a=
!1;h||(a=xa().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&u()},usesZeroPivCustomMetric:function(){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),
"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!h&&!c()&&!k()&&a&&"jload"===m.mode}}}(),y={addEvent:function(h,a,b,c){f.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",y.mouseEnter(b),c):"mouseleave"===a?h.addEventListener("mouseout",y.mouseEnter(b),c):h.addEventListener(a,b,c):f.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,b))},removeEvent:function(h,a,b){f.isDef(h.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):
"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),h.removeEventListener(a,b)):f.isDef(h.detachEvent)&&h.detachEvent("on"+a,b)},mouseEnter:function(h){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||h.call(this,b)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==h;)a=a.parentNode;return a===h},getStyle:function(h,a,b){var c="",d=M.defaultView&&M.defaultView.getComputedStyle;b=b||"";d?c=(h=M.defaultView.getComputedStyle(h,b))?h.getPropertyValue(a):c:h.currentStyle&&
(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=h.currentStyle[a]);return c},getXHR2:function(h,a){var b,c;f.isDef(v.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(h,a){if(s.isDomless())r.setTimeout(function(){h()},50);else{var b=a||(s.xDomainIframe?M:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},d=this;(function(a){var k=function(){a(!0)};
f.isFunction(M.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(k):d.addEvent(b,"DOMContentLoaded",k,!1):c(a)})(h)}},isSandboxed:function(h){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)h=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(h.browserIs(g.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&
(a=!0)}h=a}c=h}return c},styleElement:function(h,a){if(h&&f(h.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});h.style.cssText=b}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===y.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},X=function(h){var a,b=X.callTypeCounter,c=[g.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},
e=function(){var a={},b=g.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],d=b&&b[h];f.isDef(d)&&0!==d&&f(c).contains(h)&&(a=a+"."+d);d=b[h];b[h]=f.isDef(d)?d+1:1;return a}();return{callType:h,enumerator:a}};X.callTypeCounter={};var Bb=function(h,a,b,c,d,e,k,u){var n=0,p=0,q=!1,x=function(a,e,u,h,x,D){u=u||!b.on("postDts");var s=a===g.DT_CODES.DIAGNOSTIC||
a===g.DT_CODES.ADTALK||a===g.DT_CODES.SCA||a===g.DT_CODES.XSCA||a===g.DT_CODES.EXTERNAL||a===g.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(s||"n"!==k.getCurrentLoc()))try{var t=m.dtBaseURL,L=new P(t,!0),v=r.now();l.trigger("preSendDt",a);t||(L.path("dt"),b.on("usedtdomain")&&L.sub("dt"));w(L,a,e);x&&x.field&&L.setParam(x.field,x.value);h||N(L,a);l.trigger("send",L,function(){p+=1;n=r.now()-v;f.isFunction(D)&&D()},u);a===g.DT_CODES.UNLOAD&&(q=!0);d.cleanup()}catch(y){__IntegralASDiagnosticCall("dt-"+
a,y),l.trigger("error",g.ERROR_CODES.PHONE_HOME)}};h=function(){q||x(g.DT_CODES.UNLOAD,-1,!0)};var D=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=m.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&x(g.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},w=function(a,b,e){var k=new X(b);e=f.isDef(e)?e:k.enumerator;a.setParam("asId",m.asid);e={c:c.getCacheBustId(),pingTime:e,time:s.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&
(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},N=function(c,h){var f,q={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===h},function(a,b){c.setParam(a,b.replace("%3A",":"))});k.fastForward();if(h===g.DT_CODES.CUSTOM||h===g.DT_CODES.UNLOAD||h===g.DT_CODES.VIDEO_EVENTS||h===g.DT_CODES.FULLY_INVIEW||h===g.DT_CODES.PING||h===g.DT_CODES.VIEWABILITY_READY||h===g.DT_CODES.ADTALK)q.clog=u,s.isVideo()&&(f=s.isOmid()&&!s.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",
(f=l.request(f))&&!f.isEmpty()&&(q.ve=f));h===g.DT_CODES.UNLOAD&&(q.ndt=p);-1!==m.mode.indexOf("jsvid")&&(q.vv=l.request("videoVersion"));q.NULL1=b.output();q.NULL2=k.stringify(10);q.em=s.embedded;q.fr=s.friendly;q.e=a.toString();q.tt=m.mode;q.dtt=n;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},q);c.setParam("tv",q);c.setParam("br",e.getBrowserType())};l.on({sendDt:function(a,b,c){x(a,f.resolve(b),void 0,void 0,void 0,
c)},sendMinDt:function(a,b){x(a,b,void 0,!0)},sendDiag:D,updateDtCount:function(){p++},unload:h});return{send:x,unload:h,diagnostic:D,setViewabilityMod:function(a){}}},I=function(h){var a={},b=!1,c=function(){var a=1===h.nodeType?t.nodeIsHidden(h):0===h.width||0===h.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},k=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;h!==v.parent&&
(1!==h.nodeType?a=h:f.isDef(h.getBoundingClientRect)&&(b=t.getRect(h),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:k,isMrcLarge:function(){return k()>=
g.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=k()}}},t={findElementsWithSize:function(h){var a=[],b=function(c){1>t.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),b=0!==parseInt(y.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;h="hidden"===y.getStyle(h,"visibility");return b||a||h},calcWinDims:function(){var h,a,b;try{a=t.browserWindowPosition(),b=t.windowSize(),h={scrX:r.round(a.scrX),scrY:r.round(a.scrY),
width:r.round(b.width),height:r.round(b.height)}}catch(c){z.getAggregator().trigger("error",g.ERROR_CODES.GET_WIN_DIMENSIONS),h={}}return h},windowSize:function(){var h={},a,b;if(s.isDomless())return{width:0,height:0};if(s.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))h.width=top.innerWidth,h.height=top.innerHeight;else if(f.isDef(b.clientWidth))h.width=b.clientWidth,h.height=b.clientHeight;else if(f.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;
else throw h.width=h.height=0,"";else f.isDef(v.outerWidth)&&(h.width=v.outerWidth,h.height=v.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;f.isDef(v.screenX)?(h=v.screenX,a=v.screenY):f.isDef(v.screenLeft)&&(h=v.screenLeft,a=v.screenTop);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=t.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},b=t.browserWindowPosition();h=h.getBoundingClientRect();f.isUndef(h.x)&&(a.x=h.left,a.y=h.top);f.isUndef(h.width)&&
(a.width=h.right-h.left,a.height=h.bottom-h.top);f(a).mixin(h,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&f.isDef(h.documentElement.clientWidth)&&h.documentElement||h.body},getPlaceholderSpan:function(){var h=M.createElement("span");f(h.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=s.friendly&&r.getTop().Image;return f.isFunction(h)?
new h:new Image},createHiddenIframe:function(h){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,h?{display:"none"}:b);return a},tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,a){var b,c,d,e=1E4,k=1E4;b=y.nodeIsAbsolutelyPositioned(h);d=!t.tagNameIs(h,"OBJECT");if(null!==h.parentNode&&!b&&d&&!t.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,b=!t.tagNameIs(d,
"OBJECT"),c="inline"!==y.getStyle(d,"display"),b&&c&&(b=t.getRect(d),e=b.width<e?b.width:e,k=b.height<k?b.height:k);while(d.parentNode!==M&&d!==a)}return{width:r.round(e),height:r.round(k)}},hasBackgroundImage:function(h){h=y.getStyle(h,"background-image");return""!==h&&"none"!==h},findChildWithLargestContent:function(h,a){var b=z.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=this.hasBackgroundImage,d=function(a){for(var c=a;a.parentNode!==h&&"inline"!==y.getStyle(a.parentNode,"display");){var d;
if(!(d=!b)){d=a.parentNode;var e=!0;if("visible"===y.getStyle(d,"overflow")||"visible"===y.getStyle(d,"overflowX")&&"visible"===y.getStyle(d,"overflowY"))e=!1;d=e}d&&(c=a.parentNode);a=a.parentNode}return c},e=null,k=function(a){var b,d,e=null,k=-1;if(a.length)for(b=0,d=a.length;b<d;b++){var f=a[b],g=t.getNodeArea(f),l;if(l=g>k){l=f;var r=void 0;if(r=l.parentNode===h)if(r=void 0,r="DIV"===l.nodeName)if(r=void 0,r=!c(l)){var m=r=void 0;l=l.childNodes;for(r=0;r<l.length;r++)1===l[r].nodeType&&(m=!0);
r=!m}l=!r}l&&(e=f,k=g)}e&&(e.hasValidSizeForMobileApp=1<k);return e}(function(b){var c,d,e,k,h=[],f=a||"iframe img a object embed div".split(" ");c=0;for(d=f.length;c<d;c++){e=f[c].toLowerCase();var g=b.getElementsByTagName&&b.getElementsByTagName(e);if(g&&g.length)for(e=0,k=g.length;e<k;e++)h.push(g[e])}return h}(h));k&&(e=d(k),e.hasValidSizeForMobileApp=k.hasValidSizeForMobileApp);return e},screenSize:function(){if(s.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{f.isDef(v.screen)&&
(h={width:v.screen.width,height:v.screen.height})}catch(a){}return h},calcMonDims:function(){var h=f(t.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(h={scrX:v.screen.availLeft,scrY:v.screen.availTop,width:v.screen.availWidth,height:v.screen.availHeight});return h},getOurIFrameInTop:function(){for(var h,a=r.getTop(),b=r.getWindow();b!=a;)h=b,b=h.parent;return h},getOurNodeInTop:function(){var h;s.friendly&&(h=s.embedded?(h=t.getOurIFrameInTop())&&h.frameElement:m.contextNode);return h},
getAncestorNodes:function(h){var a=[],b=h.ownerDocument&&h.ownerDocument.documentElement;if(b)for(;h.parentNode!==b;)a.push(h),h=h.parentNode;return a},getTagsNamed:function(h,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(h)}catch(d){b=null}return b},containsScriptTagWithSrc:function(h){return!!f(t.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(h)?h(c):c===h})},contains:function(h,a){var b=!1;try{b=f.isDef(h)&&f.isFunction(h.contains)&&h.contains(a)}catch(c){}return b},
querySelector:function(h,a){var b;try{b=h.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(h,a){return h.ownerDocument&&(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,b){h&&f.isFunction(h.setAttribute)&&h.setAttribute(a,b)},removeAttributeOf:function(h,a){h&&f.isFunction(h.removeAttribute)&&h.removeAttribute(a)},crossQuerySelector:function(h,a){var b,c,d=[m.contextNode.parentNode,r.getDoc()];s.friendly&&d.push(r.getTop().document);if(a&&
s.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=t.querySelector(d,h)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=t.getTagsNamed("iframe",h))&&(a=f(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var h=r.getWindow().frameElement;return h&&
h.id},isViewportVisible:function(h,a){var b=h.innerWidth,c=h.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,b){h=h&&t.getAttribute(h,a);return b.test(h)},isImageTag:function(h){return h&&h.src&&t.tagNameIs(h,"img")},getDimensionFromStyle:function(h){var a,b=y.getStyle(h,"width");h=y.getStyle(h,"height");b&&h&&(a={width:f.getNum(b),height:f.getNum(h)});
return a},getDimensionFromAttributes:function(h){var a,b=t.getAttribute(h,"width");h=t.getAttribute(h,"height");b&&h&&(a={width:f.getNum(b),height:f.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,k;if(c(b))e=b;else if(k=b.children)for(d=0;d<k.length&&!(e=a(k[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===y.getStyle(a,"position"),e="hidden"!==y.getStyle(b,"overflow")&&!d;s.isSpecifiedAd()&&
(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=t.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return t.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===t.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},La=function(){var a=
{},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};z.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Gb=function(){return{createInstance:function(a,b){return s.isDomless()?new hc:new ic(a,b)}}},ic=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(m.adsafeSrc,
m.requrl,m.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,k=c(d),u=k&&k.length&&k.join("|"),n=m.exchList;u&&(e=f(n).map(function(a,b){return 0<=u.indexOf(J.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:g.IMPRESSION_EVENT}))}catch(p){a.add(g.ERROR_CODES.EXCHANGE_PARSING)}}}},hc=function(){return{parse:function(a){}}},fb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=m.jsFeatures,a[b]=
!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={},e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(k(b));return c});e.gm=f.fromBoolToNum(s.usesGroupMCustomMetric());return f(b).mixin(e)},k=function(a){a=m[a];return!0===a||"true"===a||f.isFunction(a)};f(c).each(function(a,
c){b(c)});return{on:b,bootstrapOn:k,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(m[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=m.sp_cdnScripts&&m.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},vb=function(a){return{calcInitialViewState:function(a,c){var d;d={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var e={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},k=g.NA;d=c?d:e;f.isDef(a)&&a!==g.NA&&
-1<a&&(k=a>=d.IN_VIEW?g.IN_VIEW:a<=d.OUT_OF_VIEW?g.OUT_OF_VIEW:a>=d.PARTIAL_VIEW?g.PARTIAL_VIEW_PLUS:g.PARTIAL_VIEW_MINUS);return k},calcPercentInView:function(a,c,d,e){var k=0,u=a;a.hasValidDims()&&!a.isHidden()&&(f([c,d,e]).each(function(a,b){if(b.hasValidDims()){var c=u.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),k=Math.max(c.scrY,d.scrY),f=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),f=f-e,c=c-k;u=I({scrX:e,scrY:k,width:0<f?f:0,height:0<c?c:0})}}),
k=r.round(u.area()/a.area()*100));return k}}},jb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=v.Uint32Array&&v.crypto&&v.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),v.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(d){z.getAggregator().trigger("error",g.ERROR_CODES.UID_GENERATION)}return a}());
var d=function(){return m.anId};return{getAsid:function(){return m.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||m.advEntityId+"-"+m.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},cb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(g.DT_CODES.THIRD_PARTY,void 0,
!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},jc=function(a,b,c,d){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return function(){var e=a.getTimeInViewInSeconds(),k=a.getTimeInViewForRts();f.isDef(d)&&(l.trigger("addOutputItem",{output:d},"metricId",{type:b}),l.trigger("addOutputItem",{output:"t"},"cmr",{type:b}));l.trigger("sendDt",b,e);if(c[k])c[k]()}}}},Ab=function(){return{createPingJobs:function(a,b,c,d){return f(b.getTimeThresholds()).map(function(b,
k){return new jc(k,a,c,d)})}}},ka=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},c=function(){var a=m.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,k,f){var n=c(),p,q,g;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(p=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],q=p.split("=")[1],g=J.stringToFn(q),
d=a(d,p));v[n]=function(a){e(a);k&&g&&g(a);v[n]=void 0};return d=b(d,f,n)},wrapToGlobal:function(a){var b=c();v[b]=function(c){a(c);v[b]=void 0};return b}}},Db=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=P(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?
l.trigger("jsonp",c,a.callback,!0):l.trigger("send",c,function(){l.trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.on("adImpression",function(e,n){var p;try{p=d(c,n),a.enabled?l.trigger("jsonp",p,a.callback,!0):l.trigger("send",p,f.noop,!b.on("postMon"))}catch(q){__IntegralASDiagnosticCall("jsvidimp",
q,m)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===m.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.trigger("jsonp",c(a),function(a){l.trigger("videoBlockResult",a)});l.on("adImpression",function(c,e){var n;try{var g;if(g=b)g=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;g&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));n=d(a,e);l.trigger("send",
n,f.noop,!0)}catch(w){__IntegralASDiagnosticCall("fwjsvidimp",w,m)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[m.mode],d=!!b.isFW,f=function(a){var b;b=l.request("mobileApp").isMobileAppEnvironment()&&m.mobFwUrl?m.mobFwUrl:a?m.adsafeSrc:m.requrl;a||(b+="?"+m.reqquery);return b}(d),q=f.indexOf("BEGIN__ADSAFE"),g=-1!==q,D=g?f.slice(q):"",a=g?f.slice(0,q):a(f);return{isFW:d,baseUrl:a,macroUrl:D,sendImpression:function(a){var d=
function(){b.nodeType?l.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,
arguments)},getWindow:function(){return v},getTimeoutScope:function(){return s.isDomless()&&s.isOmid()?z.getAggregator().request("omidVerificationClient"):v},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){s.isDomless();
return top},getDoc:function(){s.isDomless();return M},getIntersectionObserver:function(a,b){s.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},qb=function(){return{createInstance:function(){return s.isDomless()?new kc:new lc}}},lc=function(){var a,b=!1,c=!1,d=l.request("features"),e=new ca,k=function(){var b;b=923747==m.anId||925955==m.anId;d.on("blur")||d.on("abcAudit")&&b?(b=r.getWindow(),b=s.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||
f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},u=function(){var b=r.getWindow(),c=function(){e.run(k())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,k){var u=k+"Hidden";f.isDef(d[u])&&(a=u,c=k+c,b=!0)}):b=!0;return b?
{prop:a,event:c}:{}}();return{isHidden:k,onHiddenChange:function(a){e.push(a);c||(c=!0,u())},supportsVisAPI:function(){return b}}},kc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},sb=function(){return{createInstance:function(a,b){return s.isDomless()?new mc:new nc(a,b)}}},nc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},
e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},k=function(){var k,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var k=b.getWindow();e=!1;f.isDef(k.navigator)&&f.isDef(k.navigator.userAgent)&&(k=k.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),
null!==k&&2==k.length&&(k=k[1].split("."),3==parseInt(k[0],10)&&6>=parseInt(k[1],10)&&(3==k.length?13>=parseInt(k[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(q){}try{p.b=encodeURIComponent(parent.location.href)}catch(g){}if(s.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(l){}try{p.e=encodeURIComponent(v.document.referrer)}catch(w){}}try{"jsi"!==m.mode&&(p.d=encodeURIComponent(v.location.href))}catch(r){}try{p.f=encodeURIComponent(m.jsref)}catch(Q){}try{k=
n(),p.g=encodeURIComponent(k.g||""),p.q=encodeURIComponent(k.q||""),a.isStarted()&&!k.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(B){}p=d(p);p=e(p);k=[];for(var C in p)p.hasOwnProperty(C)&&k.push({key:C,val:p[C]});k.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=k};return{detectTopURL:k,getDetectedURLs:function(){return c?c:k()}}},mc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},
pb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",m._onSuspicious)},skipAsFraudulent:function(){return b}}},tb=function(){var a=[],b={},c={sl:"n"},d=0,e,k,u,n={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&
(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},q=function(a,c){var d=new ac(c);return b[a]=d},x=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},D=function(){f(c).each(function(b,c){n[c]+=a.length?u-d:u});d=u},w=function(b){a.length&&D();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(n[b]+=n.n);c[a]=b});a.length||D()},r=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var e={sl:x(a.viewState)};
u=s.getTagTime();w(e);e.t=u;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=g.PIV_NA);f.isUndef(c.reason)&&
(c.reason="");return k=c};(function(){q("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});q("as",function(a){var b=g.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){u=s.getTagTime();D()},registerLocation:function(d){var k,p=!1;c.sl==x(d.viewState)&&a.length?(k=new r(d),a[a.length-1].details=
k.details):(k=new r(d),a.push(k),e=d.viewState,p=!0);l.trigger("newScreenEvent",k);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(k),a[a.length-1].breakdowns[b]=c.get()):c.addState(k)});return k},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(n).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:q,getCurrentLoc:function(){return x(e)},getCurrentEvent:function(){return k}}},J={hashCode:function(a){var b=
0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=v,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&
(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},oc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=t.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=t.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,
c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,k=function(a){var d=t.tagNameIs(a,"div"),e=t.attributeMatches(a,"class",b);a=t.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return t.traverseAndFindFirstMatchingNode(a,k)},getClickableImage:function(b){var c,k=(b=t.getFirstChildElement(b))&&t.tagNameIs(b,"a"),f=t.attributeMatches(b,"href",d),g=t.attributeMatches(b,"target",e);k&&f&&g&&(b=t.getFirstChildElement(b),t.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&
(c=b));return c},getNodeMatchingMinimumSize:function(b){return t.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},pc=function(){var a=oc(),b=function(a,b){b.tag=t.getTagName(a);b.size=t.getDimensionFromAttributes(a)||t.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=
4,b(c,d);return d}}};z("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!t.isViewportVisible(c,a))return c;if(c!==d&&s.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();t.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});var qc=function(a){var b,
c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}};z("AS_Finder",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),k,u={};d!==c&&(k=f.stringifyTriState(d),u.res1=k,u.ps=k,u.ts=r.now(),
u.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",u));c=d}catch(n){l.trigger("error",g.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)qc(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});z("hA",["AS_Finder"],function(a){var b=0,c=function(a,b){l.trigger("addThrottledProp",g.DT_SLOT.FF,a,f(b).toION())},d=function(a){2>b&&c("ha1",a);
b++};(function(){var b,k;if(s.embedded)try{k=m.contextNode.parentNode,b=pc().getDFPValue(k),k={},k.df=b.type,b.size&&(k.sz=b.size.width+"."+b.size.height),b.tag&&(k.dom=b.tag),c("dfp",k),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){l.trigger("error",g.ERROR_CODES.HIDDEN)}})()},{tier:g.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var fa=function(a,b,c,d){var e,k=0,u=0,n=!1,p=function(){e=Math.round(t.getNodeArea(a.body));if(e>=d){for(var p,q=e+20*e/100,
w=a.querySelectorAll("iframe"),w=f.fromNodeListToArray(w);w.length&&(u<q||k<c);)p=w.shift(),p=Math.round(t.getNodeArea(p)),p>=d&&(k++,u+=p);u>=q&&k>=c&&(l.trigger("addThrottledProp",g.DT_SLOT.FF,b,f({va:e,bia:u,bin:k}).toION()),n=!0)}},q=function(){var b;b=new MutationObserver(function(a){n?b.disconnect():r.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&t.isElement(c)&&t.tagNameIs(c,"IFRAME")&&f.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,
childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(p),!n&&f.isDef(v.MutationObserver)&&q())};z("BS_Finder",[],fa);z("BS_InApp",[],function(){var a=r.getWindow().document;l.request("mobileApp").isMobileAppEnvironment()&&fa(a,"bs1",3,100)},{tier:g.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}});z("BS_Browser",[],function(){var a=r.getWindow().document,b=a.body?Math.round(t.getNodeArea(a.body)):
null;!l.request("mobileApp").isMobileAppEnvironment()&&b&&fa(a,"bs2",5,b)},{tier:g.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}});var nb=function(){return{createInstance:function(a){return s.isDomless()?new rc:new sc(a)}}},sc=function(a){var b,c,d,e=new sa,k=new da,u=new tc(e),g=new uc,p=new vc,q=new wc(e,a),x=function(){f.isUndef(d)&&(d=new xc(e));return d},D=function(){e.provide({frameCollection:function(){return u},adProxy:function(){return p},
adTalkMessage:function(a){return new yc(a,e)},adTalkMessageCollection:function(){return g},idMapModule:x,interFrameQuerySelector:function(a){return new zc(a)}})};return{isApplicable:function(a){return f.isDef(v.JSON)&&f.isDef(v.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){D();k.traverse(u.addFrame);q.startListening();q.sendToKnownFrames();l.once("stopAdTalk",function(){q.stopListening()});l.provide("adTalkEventAggregator",e)},sendAdTalkCall:q.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&
(b=new ya(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new ya(e,!0));return c},getIdMap:x}},rc=function(){return{isApplicable:function(){return!1},start:function(){}}},yc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=l.request("features").on("swapids")?m.oid:m.asid;var k=a||{},f=m.asid,d=d.tagId,n=s.embedded,p=s.friendly,q=m.birthdate;c=c.split("-")[2];var x;s.friendly?x="["+g.AD_IDENTIFIER+"-"+m.asid+
"]":(x=r.getWindow(),x=x.location&&x.location.href,x='iframe[src*="'+(x&&x.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:k,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:p,srcBirthdate:q,iasCommonId:c,nodeSelector:x,positionStr:e,version:"0.1"}},uc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},Ac=function(a,b,c,d){var e,k=a==v;e={position:b.slice(0),id:b.join("-"),isMe:k,isLeaf:!a.frames.length,
adProxies:k?c:[],selfDescription:void 0,unifiedId:m.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var u=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){g(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},g=function(a,
b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){u(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},tc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,k,f){var g=a.request("adProxy").getAll();e=new Ac(e,k,g,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,
dictionary:c,getMe:function(){return d}}},ya=function(a,b){var c=function(a,c){var f=c.adProxies,g="";if(c.isValidForMapping()){if(b)g+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";g+=p}return g}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+(m.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,
62)+"+"+d}}},xc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=m.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},k=function(a){var e=!1,e=!s.embedded,k="BODY"!==t.getNodeName(c)&&"HEAD"!==t.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var x=a.nodeSelector&&-1===a.nodeSelector.indexOf(g.AD_IDENTIFIER);f=!(f?x:!a.srcIsFriendly)}e&&k&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,
a=a.srcIsEmbedded&&s.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==m.asid&&k(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),l.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:k}},zc=function(a){var b=new da,c=function(a){var b=a,c="IFRAME"===t.getNodeName(a),d=t.isWindow(a);c?b=a.contentWindow.document:
d&&(b=a.document);return b},d=function(a,b){return t.querySelector(c(a),b)},e=function(c,e){var g,p,q;try{p=d(c,e),p||(g=b.getFrames(!0,a),f(g).findFirst(function(a,b){return q=d(b,e)}))}catch(x){}return p||q||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},wc=function(a){var b=!1,c,d;d=l.request("features").on("swapids")?m.oid:m.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==m.asid;return b.hasOwnProperty("messageContent")&&
c===b.iasCommonId&&e},k=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},u=function(){var c=g.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.trigger("sendDt",c)},n=function(c,d,e){var k,n,m,s,t;try{k=a.request("frameCollection");n=a.request("adTalkMessageCollection");m=d.messageContent.self;n.add(d);var C=k.getMe();C.unifiedId>m.unifiedId&&(C.unifiedId=m.unifiedId);var H;H=r.now()-d.sentTime;d.transferDuration=H;n=s=
k.getFrame(m.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(s=s||k.addFrame(c.source,m.id.split("-"),d),s.addInformationFromSrc(d,m),e()):s.addInformationFromSrc(d,m);(t=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&u()}catch(A){l.trigger("error",g.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:u,sendToKnownFrames:function(){(new ta).send(k)},startListening:function(){c=new Xb;c.listen(e,n,k)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:k}},
Bc=function(){var a=l.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},vc=function(){var a,b=[],c=function(a){a=new Bc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},ub=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(g.BROWSERS.IE)&&y.addEvent(r.getDoc().documentElement,"click",e,!0);
return{determineFramePosition:function(){a.browserIs(g.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Cc=function(a,b){var c,d=g.NA,e=d,k=!1,u=!1,n=!1,p=!b,q=function(){var b=r.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&r.execAtEndOfThread(function(){l.trigger("IOPivChange",d)});e=
d},{threshold:g.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&r.execAtEndOfThread(function(){d===g.NA&&(d=0)});b.observe(x(a));p&&r.execAtEndOfThread(function(){s.isBustedIframe()||l.trigger("delayedViewabilityReady")});k=!0},x=function(b){if(!f.isUndef(b)){if(n){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[g.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},
start:function(){var b;try{a.document&&(n=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){u=!0}b&&null!==b.bodyElement?q():b&&b.document?y.whenReady(q,b.document):u?l.request("errors").add(g.ERROR_CODES.BUSTED_IFRAME_IN_IO):q()},isStarted:function(){return k},getAdNodeDimensions:function(){var a;c&&(a=I({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return d!==g.NA}}},pa=function(){var a=!1;(function(){y.whenReady(function(){l.trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}};z("loopDelay",[],pa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:g.TIERS.VIEWABILITY});var Dc=function(){return{start:function(a){l.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(g.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Ec=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Nb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&
!d&&(d=!0,l.trigger("notify",m._onMeasurable))};return{start:function(){var b;b=[Fc(),Gc(),Ec(),Dc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(m._onMeasurable)}}},Gc=function(){return{start:function(a){Yb(l,["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(g.BROWSERS.WEBKIT)||c)&&s.isVideo()}}},Fc=function(){return{start:function(a){l.once("adImpression",
function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&s.isVideo()}}},Hc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||
a.addEventListener("ready",function(){l.trigger("adImpression")})}}},Ic=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||g.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),
b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Jc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.trigger("adImpression")})}catch(b){}}}},
Kc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},$=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=l.request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&
f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},Lc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",
function(a){l.trigger("adImpression")})}}},Qa=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},Na=function(a){var b=!1,c=!1,d=l.request("omidAdSessionContext"),e=l.request("omidAdSessionVerificationParameters"),k=r.getWindow(),g=(k=k&&k.omid3p)&&f.isFunction(k.registerSessionObserver)&&f.isFunction(k.addEventListener)?k:a,n=function(){return e&&e.IAS&&0<Object.keys(e.IAS).length?e.IAS:e},p=function(){var a,e;b&&c&&(v.omidSupported=!0,a=
d.app&&d.isDisplay&&!d.isWeb,(e=m.mobFwUrl&&-1<m.mobFwUrl.indexOf("/blocking/"))&&d.isLimitedSandbox&&"1"===m.adWidth&&"1"===m.adHeight&&(d.isLimitedSandbox=!1),a&&e&&(d.delayingViewabilityEvents=!0),l.trigger("tryToCallContinueMain",n()))},q=function(a){if("sessionStart"===a.type){d.adSessionType=a.data.context.adSessionType;d.environment=a.data.context.environment;d.omidNativeInfo=a.data.context.omidNativeInfo;d.omidJsInfo=a.data.context.omidJsInfo;d.deviceInfo=a.data.context.deviceInfo;d.app=a.data.context.app;
d.isNative="native"===d.adSessionType;d.isLimitedSandbox=s.embedded;d.isHtml="html"===a.data.context.adSessionType;d.isWeb="web"===a.data.context.environment;e=a.data.verificationParameters;a=d.isHtml&&d.isWeb;d.queuedOutputItems=[];for(var c=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},
{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],f,k,g,q=0;q<c.length;q++)f=c[q].root,k=c[q].field,g=c[q].code,"object"===typeof d[f]&&"undefined"!==typeof d[f][k]&&d.queuedOutputItems.push({code:g,value:d[f][k]});a?l.trigger("tryToCallContinueMain",n()):(b=
!0,p())}},x=function(a){d.mediaType=a.data.mediaType;a.data.viewport&&a.data.adView&&(d.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}});d.isNativeVideo=d.isNative&&"video"===a.data.mediaType;d.isDisplay="display"===a.data.mediaType;c=!0;p()};return{start:function(){g.registerSessionObserver(q,"IAS");g.addEventListener("impression",x)}}},Oa=function(){return{accepts:function(){return!0}}},wa=function(){var a=l.request("omidAdSessionContext"),b=l.request("omidVerificationClient"),
c=new $(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Pa=function(){return{start:function(){l.trigger("tryToCallContinueMain","")}}},Mc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Nc=function(a,b){var c,d=function(a){var d,f,g;try{d=a.eventData.percentageInView,
f=c&&75<=d,g={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",g)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},
addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Oc=function(a,b){var c=[],d=(new Date).getTime(),e=0,k=0,u=!1,n={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("sl:"+d.sl+",")+("tp:"+d.tp+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},p=function(){u=!0},q=function(a){try{var p="",q=a.hasOwnProperty("timestamp")?
a.timestamp:(new Date).getTime();switch(a.type){case "start":p="adVideoStart";d=q;k=a.data.duration;1E3<k&&(k/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":p="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}""!==
p&&c.push({t:q-d,sl:"undefined",tp:p,ad_duration:k,volume:e});if("loaded"===a.type&&f.isDef(a.data)){var n=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),p=-1!==n?n+1:void 0,r=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===u?(f.isDef(p)&&l.trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"vbp",p),l.trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"vps",r)):(f.isDef(p)&&l.trigger("addOutputItem",{output:p},"vbp",{type:g.IMPRESSION_EVENT}),l.trigger("addOutputItem",{output:r},
"vps",{type:g.IMPRESSION_EVENT}))}"start"===a.type&&l.trigger("omidAdDuration",{ad_duration:k});var m;"playerStateChange"===a.type?m="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?m="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(m="AdPaused");f.isDef(m)&&b.trigger("videoPlaybackEvent",{eventType:m,eventData:null})}catch(s){__IntegralASDiagnosticCall("omidvideo",s,
v.bootstrapper)}};return{start:function(){l.on("impressionsent",p);l.provide({omidVideoEventsString:n});a.addEventListener("video",q)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},za=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?g.IN_VIEW:g.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":g.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){z.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.DISPLAY_CODE},
g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Pc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,k=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:k,getScreenLocationInfo:function(a){return b.create(a)},
isImmediate:function(){return k()?d.isImmediate():!0},isMeasurable:function(){return k()?e.isMeasurable():!1},isMediaType:function(a){return k()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){k()&&d.start()},requiresDelayedViewabilityEvent:function(){k()&&b.requiresDelayedViewabilityEvent()}}},lb=function(a,b,c){var d=l.request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),
e=e.concat(a.getAvidMeasurementStrategies()),e=e.concat(a.getMraidMeasurementStrategies()),e=(new ga(e)).resolve(),f=new Qc(e),g=new Aa(b,c,s,d);return!e&&g.accepts()?new Rc(s.isVideo(),new F):new Pc(e,f,d.isMobileAppEnvironment())}}},mb=function(a){var b=l.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=l.request("omidVerificationClient"),b=new $(a),e=new wa,f=[];if(b.accepts()&&!e.accepts()){var g=new ba,n=new Sc,e=new Tc(a,new F),g=[{environment:g,measurementStrategy:new Uc(a,
new F)},{environment:n,measurementStrategy:new Ba(new ha,r.getWindow(),new F)}],g=(g=(new ga(g)).resolve())?g.measurementStrategy:{},p=new Ca(new Da(new S),new S,n.accepts()),n=new Kc(a,b,m.mode),q=new Ea(e,g,new F,p),b=new Lc(a,b,m.mode),a=new Fa(e,g,new Oc(a,new F),new F,p);f.push({environment:n,measurementStrategy:q});f.push({environment:b,measurementStrategy:a})}return f},getAvidMeasurementStrategies:function(){var b=l.request("avidJsClient"),d=new Ic(b),e=[];if(d.accepts()){var f=new Hc(b,d,
m.mode),g=new Jc(b,d,m.mode),n;n=new Mc(b,new F);if(d.supportsAdContainerGeometry()){var p=new Vc,q=new Wc,x=new Ba(new ha,r.getWindow(),new F),D=new Xc(b,new F),p=(p=(new ga([{environment:p,measurementStrategy:D},{environment:q,measurementStrategy:x}])).resolve())?p.measurementStrategy:{},q=new Ca(new Da(new S),new S,q.accepts()),x=new Yc(b,new F),b=new Ea(x,p,new F,q);n=new Fa(x,p,n,new F,q)}else q=new Nc(b,new F),b=new za(q,new F),n=new Ga(q,n,new F);e.push({environment:f,measurementStrategy:b});
e.push({environment:g,measurementStrategy:n});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Zc(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.request("context"),e=new $c(r.getWindow(),e),f=new ad(r.getWindow(),new F);e.accepts()?(d=new bd(r.getWindow(),new F),d=new Ga(f,d,new F),d={environment:e,measurementStrategy:d}):(e=new za(f,new F),d={environment:d,measurementStrategy:e});
a.push(d)}return a}}},ga=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Qc=function(a){var b=!1,c,d={winDimensions:I({scrX:0,scrY:0,width:0,height:0}),adDimensions:I({scrX:0,scrY:0,width:0,height:0}),containerDimensions:I({scrX:0,scrY:0,width:0,height:0}),method:g.NA,viewState:g.NA,percentInView:g.PIV_NA,reason:"",obstructed:g.NA,isHidden:g.NA,tabHidden:g.NA,posViewState:g.NA,adCompCount:1},e=function(a){return a?
new I({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):I({scrX:0,scrY:0,width:0,height:0})},k=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||g.NA,viewState:a.viewState||g.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:g.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:g.NA,tabHidden:g.NA,posViewState:a.viewState||g.NA,adCompCount:1,
shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,z.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=
c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(k),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Ga=function(a,b,c){var d=!1,e=!1,k=!1,u,n,p,q,x=function(){if(!f.isUndef(n)){var a=[],b,l;d?(e?(l=!1,b=100):(l=q,b=p),50>b&&a.push(g.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,b=0,a.push(g.OUT_OF_VIEW_REASONS.VIDEO));k=!0;n.shouldDelegateToDomBasedViewability=l;n.percentageInView=b;n.viewState=50>b?g.OUT_OF_VIEW:
g.IN_VIEW;n.outOfViewReason=a.join(".");u=n;c.trigger("measurementChanged",u)}},r=function(a){n=a;p=a.percentageInView;q=a.shouldDelegateToDomBasedViewability;x()},m=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);x()};return{start:function(){l.trigger("addOutputItem",{output:g.MEDIA_TYPE.VIDEO_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});
a.addScreenLocationChangedListener(r);a.start();b.addVideoPlaybackEventListener(m);b.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return k}}},$c=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==
a.type||b||(b=!0,l.trigger("adImpression"))})}catch(d){}}}},bd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Yc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,
y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:g.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:g.OUT_OF_VIEW_REASONS.FOCUS,viewport:g.OUT_OF_VIEW_REASONS.GEOM,clipped:g.OUT_OF_VIEW_REASONS.GEOM,obstructed:g.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:g.OUT_OF_VIEW_REASONS.FOCUS,notFound:g.OUT_OF_VIEW_REASONS.HIDDEN},
c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},Ca=function(a,b,c){function d(a,b,c){c=n(b,c);a=k(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+
a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},k=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},u=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,q){if(f.isDef(e)&&f.isDef(q)){var l=e.viewport,m=e.computedAdContainer,w=m.obstructions,s=w&&0<w.length,t=e.originalAdContainer,B=q.adGeometry,
C=q.adFound,H=e.detectionMethod,A=0,l={x:0,y:0,width:l.width,height:l.height},E=u(t,B),K=e.outOfViewReason,v=0,L=0,y=s||!1,v=1>=B.width*B.height;c&&v&&(C=!1,K=K||"",C||-1!==K.indexOf(g.OUT_OF_VIEW_REASONS.GEOM)||(K=g.OUT_OF_VIEW_REASONS.GEOM+(""!==K?"."+K:"")));if(C&&0<e.percentageInView){v=d(l,m,E);s?(A=n(m,E),A=k(l,m,A),A=u(m,A),A=a.calculateObstructedArea(A,w)):A=0;L=A;A=Math.round((v-L)/(E.width*E.height)*100);s&&0===L&&(y=!1);for(var B=y,z,s=0,C=b.getConfig(E).numberOfSlices,L=r.floor(E.height/
C)||1,w=[],v=B?a.getObstructionStatusBySlice(C):[],F,s=0;s<C;s++)z=E.y+L*s,s==C-1&&(L=E.y+E.height-z),z={x:E.x,y:z,width:E.width,height:L},F=d(l,m,z),z=1==F/(z.width*z.height),w.push(z);if(B)for(m=r.min(v.length,C),s=0;s<m;s++)w[s]=w[s]&&!v[s];m=w}else m=b.getConfig(B).defaultSliceArray;return{windowDimensions:l,containerDimensions:t,adDimensions:E,percentageInView:A,viewState:50<=A?g.IN_VIEW:g.OUT_OF_VIEW,outOfViewReason:50<=A?"":K||g.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:H,isObstructed:y,sliceStatus:m}}}}},
Vc=function(){return{accepts:function(){return s.isAvidNative()}}},Xc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Wc=function(){return{accepts:function(){return s.isAvid()&&!s.isAvidNative()}}},Ea=function(a,
b,c,d){var e,k,u,n=function(){if(f.isDef(e)&&f.isDef(k)){var a=d.calculateGeometricMeasurement(e,k);u=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;n()},q=function(a){k=a;n()};return{start:function(){l.trigger("addOutputItem",{output:g.MEDIA_TYPE.DISPLAY_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(q);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",
a)},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return u}}},Da=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var k,g,n,p;g=e&&0<e.length;var q;if(g){q=Math.round(d.width);var l=Math.round(d.height);k=Array(q);for(n=0;n<q;n++)k[n]=Array(l);q={matrix:k,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:q,height:l}}else q={};k=q;l=q=0;if(g){for(;q<e.length;q++){g=e[q];n=l=k;var m=g;k=Math.max(n.x,m.x);g=Math.max(n.y,m.y);
p=Math.min(n.x+n.width,m.x+m.width);m=Math.min(n.y+n.height,m.y+m.height);n=p-k;p=m-g;n=0<n?n:0;p=0<p?p:0;k-=l.x;g-=l.y;n=k+n;p=g+p;for(k=Math.round(k);k<Math.round(n);k++)for(m=Math.round(g);m<Math.round(p);m++)void 0!==l.matrix[k]&&void 0===l.matrix[k][m]&&(l.matrix[k][m]=1,l.obscuredPixelCount+=1);k=l}l=k.obscuredPixelCount;q=k;if(f.isUndef(q.matrix)||0===q.matrix.length)c=[];else{g=0;p=!1;k=q.matrix[0].length;n=q.matrix.length;p=a.getConfig({height:k}).numberOfSlices;for(var m=r.floor(k/p)||1,
w=[],s=0;s<k;s++){p=!1;for(var t=0;t<n;t++)if(1===q.matrix[t][s]){p=!0;break}g++;p&&(s+=m-g,g=m);if(g==m||s===k-1)w.push(p),g=0}c=w}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Tc=function(a,b){var c=l.request("omidAdSessionContext"),d=null,e=!1,k=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(u(d),d=null)):r.setTimeout(k,50)},u=function(a){var f=a.data.adView,l=!!(f.measuringElement&&f.containerGeometry&&
f.onScreenContainerGeometry);c.delayingViewabilityEvents?(d=a,e||(e=!0,k())):(l&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions),a={viewport:a.data.viewport||{width:0,height:0},originalAdContainer:f[l?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0},computedAdContainer:f["onScreen"+(l?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0},percentageInView:f.percentageInView,detectionMethod:g.DETECTION_METHODS.OMID,
outOfViewReason:n(f.reasons)},b.trigger(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a))},n=function(a){var b={inactive:g.OUT_OF_VIEW_REASONS.FOCUS,viewport:g.OUT_OF_VIEW_REASONS.GEOM,clipped:g.OUT_OF_VIEW_REASONS.GEOM,obstructed:g.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:g.OUT_OF_VIEW_REASONS.FOCUS,notFound:g.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&
u(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",u)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:n}},ba=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Uc=function(a,b){var c=l.request("omidAdSessionContext"),d=null,e=!1,f=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?
(e=c.delayingViewabilityEvents=!1,d&&(u(d),d=null)):r.setTimeout(f,50)},u=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,f());else{var p=a.data.adView.geometry,q=a.data.adView.containerGeometry,l=!!p;a=a.data.adView.measuringElement&&!!q;b.trigger(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:{x:l&&a?p.x-q.x:0,y:l&&a?p.y-q.y:0,width:l?p.width:0,height:l?p.height:0},adFound:l})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&u(c.impressionViewabilityMeasurement);
a.addEventListener("geometryChange",u)},addAdGeometryMeasurementChangedListener:function(a){b.on(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Sc=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Fa=function(a,b,c,d,e){var k=!1,u=!1,n,p,q,m,r,w=function(){if(!(f.isUndef(p)||f.isUndef(q)||f.isUndef(m))){r=!0;var a=e.calculateGeometricMeasurement(p,q),b=k&&u,c=k&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,
adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:k,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=g.IN_VIEW:(l.viewState=g.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||g.OUT_OF_VIEW_REASONS.VIDEO);n=l;d.trigger("videoGeometryMeasurementChanged",n)}},s=function(a){p=a;w()},t=function(a){q=a;w()},B=function(a){m=a;a=a.eventType;
"AdEnteredFullscreen"===a?u=!0:"AdExitedFullscreen"===a?u=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?k=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(k=!1);w()};return{start:function(){l.trigger("addOutputItem",{output:g.MEDIA_TYPE.VIDEO_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(s);a.start();b.addAdGeometryMeasurementChangedListener(t);b.start();c.addVideoPlaybackEventListener(B);c.start()},
getStrategyName:function(){return g.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return r}}},Ba=function(a,b,c){var d,e=function(){var b=a.find(),e,n=!0;f.isDef(b)?(e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):n=!1;if(b=n)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);b&&(d=e,c.trigger(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,
{adGeometry:e,adFound:n}))};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Zc=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},ad=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:
[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:g.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(k){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},k=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},u=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",
function(){k()}):k())},n=function(){c||u()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||t.containsScriptTagWithSrc("mraid.js"))b=!1;l.trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?l.trigger("exec","mraid.js",n):u()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},Ya=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||l.trigger("notify",
c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Sa=function(){var a=new O({tiv:[1E4]}),b=f([g.IN_VIEW,g.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:g.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==m.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},
Ra=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var l=[2E3,5E3,15E3];c?(c=new O({tiv:d}),d=d[0]):f?(c=new O({tiv:l}),d=l[0]):(c=new O({tiv:e}),d=e[0]);e={5E3:m._onInViewMRC5,15E3:m._onInViewMRC15};e[d]=m._onInViewMRC;return{timeInViewThresholds:c,type:g.DT_CODES.PING,rts:e,isInView:function(a){return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3,
shouldIncludeSound:!1}},Ua=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],u=[1E3,5E3,15E3],n=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new O({tiv:f}):d?new O({tiv:n}):new O({tiv:u});l.provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,
type:g.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},Ta=function(a,b){return{timeInViewThresholds:new O({tiv:[0]}),type:g.DT_CODES.FULLY_INVIEW,rts:{0:m._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Wa=function(a,b){var c,d,e,k=r.getMaxNumber(),
l=b.isVideo(),n=a.id;d=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&m.groupm_native_publisher)&&d;c=new O(a);d=a.qiv;(function(){e={};var a;f.isDef(m.rts)&&f.isDef(m.rts[n])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():g.RTS_KEY_FOR_VQ,e[a]=m.rts[n])})();return{timeInViewThresholds:c,qivThreshold:d,type:g.DT_CODES.CUSTOM,rts:e,isInView:function(b){if(!b.adDimensions)return!1;
var c,d,e,n=b.adDimensions.area(),m=1===b.tabHidden,s=r.max(b.fullPercentInView||0,b.percentInView);c=f(a.thresholds).findFirst(function(a,b){d=b.lb||0;e=b.ub||k;if(n>=d&&n<=e)return!0});c=!m&&s>=c.piv;b.method==g.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);l&&(c=c&&b.isVideoPlaying,p&&(c=c&&b.isSoundOn));return c},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p}},Va=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":
"web",k=b.isDeviceTypeGroupMobile()?"mobile":"desktop",g=f(a.customViewability).isArray()&&0<a.customViewability.length,n=c.on("customMetric"),p=c.on("groupmCM"),q=function(a,b){var c,g,q,n,l;c=f(b.mediaTypes).contains(d);g=f(b.distributionChannels).contains(e);q=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(k):!0;n=J.contains(b.id,"fiv");l=J.contains(b.id,"groupmCM");n=!n;l&&(n=p);return n&&c&&g&&q};return{resolve:function(){var b=[],c;n&&g&&(c=f(a.customViewability).filter(q),f(c).each(function(a,
c){b.push(c)}));return b}}},O=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ia(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new cd;b.push(new dd(c,parseInt(a[1].replace("%"))));b.push(new ia(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ia(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},cd=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};l.on({omidAdDuration:b,
adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ia=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},dd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},
ab=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},$a=function(a,b,c,d){var e,k,g,n,p,q,m=function(a,b){return!b&&a},r=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},s=function(a){var l=0,m=1===a.tabHidden,x=a.isVideoPlaying,s=a.isSoundOn,w=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){g(b,m,x,w)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});t("slcVt",n);d&&(f(a.sliceStatus).each(function(a,
b){r(b,m,x,w)&&s?k[a].mark():k[a].stop();p[a]=k[a].getTotalTime()}),t("slcVtVol",p));q=d&&b&&b.shouldIncludeSound?p:n;a=f(q).findFirst(function(a,b){l=Math.max(l,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(l)},t=function(a,b){var c={};c[a]=b;l.trigger("addOutputItem",{output:c},{minDt:!1})},v=function(a){!e&&a.sliceStatus&&(e=[],k=[],n=[],p=[],f(a.sliceStatus).each(function(a){e.push(new aa(1));n.push(0);d&&(k.push(new aa(1)),p.push(0))}))},B=function(a){f.isUndef(a.sliceStatus)||(e||v(a),s(a))};
return{start:function(){g=d?r:m;a.addMeasurementChangedListener(B)}}},Xa=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},Eb=function(a,b,c,d,e,f,l,n,p,q){var m=!1,t=s.isVideo(),w=f.request("mobileApp"),N=W().applies(c,e),v=c.browserIs(g.BROWSERS.GECKO)||c.browserIs(g.BROWSERS.IE)&&e.on("rattie")||N,B=s.xDomainIframe&&!v,C=new ua(10),H=function(){e.on("viewabilityready")&&!m&&(d.send(g.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),
m=!0)};f.on("delayedViewabilityReady",function(){A();H()});f.on("delayedViewabilityReadyCallOnly",H);var A=function(c){c=c||!1;try{C.start();var d,e;b.hasMeasurementStrategy()?e=w.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(e=n.collect(),w.isMobileAppEnvironment()?(e.viewState=g.NA,e.method=g.NA,e.percentInView=g.NA):B&&(e.viewState=g.NA,e.percentInView=g.PIV_NA),t&&!s.isAvid()&&q.setVideoSpecificScreenEventFields(e));
d=p.registerLocation(e);c||a.trigger("measurementChanged",e);C.stop();var m=r.round(C.getTime()/C.getCount());l.addItem({output:m},"lt",{type:g.DT_CODES.UNLOAD});return d}catch(x){f.trigger("error",g.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:A,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":t?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=s.xDomainIframe,d=a&&c.browserIs(g.BROWSERS.WEBKIT),e=a&&c.browserIs(g.BROWSERS.MSEDGE),
a=a&&N,d=!d&&!e&&!a;return w.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){w.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};z("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,d){var e,k=ed(c),u=[new fd,new gd(k)],n=function(){return f(u).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===
a.type&&l.trigger("adSessionComplete")},q=function(a){y.addEvent(v,a,function(){l.trigger("adSessionComplete")},!1)},x=function(){var a=new X(g.DT_CODES.VIDEO_EVENTS);l.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:m.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};l.once("startViewabilityLoop",function(){var b,c=l.request("mobileApp").isMobileAppEnvironment();l.request("ids").impressionIsIdentifiable()&&(e=bc(a.checkScreenLoc,k.getPollingFrequency()),
(b=n())?b.start(e):e.start(!0),c?s.isOmid()?l.request("omidVerificationClient").registerSessionObserver(p,"IAS"):q("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):q("beforeunload"))});l.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||x();l.trigger("unload");e&&e.stop();l.trigger("endAdSession");l.trigger("stopAdTalk")})},{tier:g.TIERS.VIEWABILITY});var ed=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},
gd=function(a){var b,c,d,e,f,g=function(p){d&&!f&&1>p?(f=!0,r.setTimeout(function(){g(p)},1E3)):(e=1>p,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){g(a.percentInView)};return{applies:function(a,b,c){var e=l.request("mobileApp");a=(new Aa(b,a,c,e)).accepts();b=b.on("viewabilityOptimization")&&!a;d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);l.on("IOPivChange",g);l.on("newScreenEvent",
n)}}},fd=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=W();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);l.on("IOPivChange",e)}}},pd=function(a,b,c,d,e,k){var u,n,p,q,x,D,w,N,Q,B=t.getElementsWindow(b);t.getElementsDocument(b);l.provide("iframeCalculatorHelper",
hd(B));var C=id(b,d),H=g.AD_IDENTIFIER+"-"+m.asid,A=!1,E=I({}),K=s.isDeviceTypeGroupMobile(),z=s.usesGroupMCustomMetricMobilePassThru(),L,Y=function(){if(!u)if(u=C.calcDims(b,d,p),c===g.DETECTION_METHODS.VIDEO&&s.embedded){var a=u,e=(new I(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.trigger("error",g.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===g.DETECTION_METHODS.AD_PLACEHOLDER&&u.treatAsPlaceholder();return u},F=function(){var b,d=s.xDomainIframe&&A;b=K&&
A&&p.isReady();b=d||b;d=C.getClippedDims&&(c===g.DETECTION_METHODS.VIDEO&&s.embedded||s.isCeltra());b?n=p.getPiv():f.isUndef(n)&&(b=!K&&(s.friendly||f.isDef(v.mozInnerScreenX))&&e.on("offscreen"),N=Y(),w=new I(t.calcWinDims()),D=new I(b?t.calcMonDims():{}),Q=d?C.getClippedDims():E,n=a.calcPercentInView(N,w,D,Q));return n},G=function(){return a.calcInitialViewState(F())},J=function(){return b===v?!1:Y().isHidden()},jd=function(a,b){return s.isVideo()?r.getDoc().body:a.document&&a.document.body?a.document.body:
b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=r.getWindow(),e=r.getDoc(),f=b===c,k=e.body,g=new W,n=l.request("browser"),m=l.request("features"),u=l.request("context"),w=!s.xDomainIframe,t=jd(b,d),e=f&&k?e.body:b;L=s.friendlyIframe?c.frameElement:e;y.addEvent(e,"click",function(){l.trigger("adComponentClicked")});y.addEvent(e,"mouseover",function(){l.trigger("adComponentMousedOver")});g.applies(n,m,u)?(p=Cc(b,w),p.start(),A=!0,z&&(c=new kd(Y().getRounded()),
g=new ld,t=new md(t,g),q=new nd(c.getSlices(),t))):z&&(x=new od(a))})();return{mark:function(){t.setAttributeOf(L,H,"")},cleanup:function(){t.removeAttributeOf(L,H)},isNode:function(a){return b===a},isHidden:J,isObstructed:function(){return!1},getDims:Y,getPercentInView:F,getLocationState:G,getOnPageViewability:function(){return J()?g.OUT_OF_VIEW:G()},getDetectionMethod:function(){return c},getContainerDims:function(){return C.allowsOptimization?u:I(d)},refresh:function(){Q=N=w=D=n=u=void 0;if(k){var a,
c;if(!s.isDomless()&&(c=b.parentNode)){for(;b!==v&&c&&c!==M&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;q&&q.isReadyToMeasure()?a=q.getSliceStatus():s.friendly&&x&&f.isDef(N)&&(a=x.getSliceStatus(N,w,D,Q));return a}}},qd=function(a,b){var c=[],d,e=f([]),k=function(){return c[0]&&c[0].getDetectionMethod()===g.DETECTION_METHODS.AD_PLACEHOLDER},m=function(p,q,n,m){var u=k()||0===c.length;p=pd(a,p,q,n,b,m);k()&&(n=c.shift(),e=f(c),
n.cleanup(),d=void 0);c.push(p);e=f(c);u&&p.mark();u&&q!==g.DETECTION_METHODS.AD_PLACEHOLDER&&l.trigger("primaryadfound",p)},n=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var k;k=e.getDims();k.hasValidDims()&&(a=e.getPercentInView(),b=a!==g.NA,k=k.area(),c+=k,f+=a/100*k)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},p=function(){var a;a=n();a=a.hasMeasurement?r.round(a.totalInView/a.totalArea*100):g.PIV_NA;isNaN(a)&&(a=0);return a},q=function(){var c=b.bootstrapOn("mobOrTab"),
c=n().totalArea>=g.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!c&&!s.isVideo();return a.calcInitialViewState(p(),c)},x=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},t=function(a){return function(){return c[0]&&c[0][a]()}};l.on("adComponentAdded",function(a){f(a).each(function(a,b){-1===x(b)&&m(b,g.DETECTION_METHODS.MUTATION)})});l.on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=x(b);-1<d&&c.splice(d,1)})});return{getDims:t("getDims"),isObstructed:t("isObstructed"),
getDetectionMethod:t("getDetectionMethod"),getContainerDims:t("getContainerDims"),getViewState:q,getPercentInView:p,isHidden:t("isHidden"),isUsingPlaceholder:k,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:m,getOutOfViewReasons:function(){var a,b=[],e=c[0],f=g.OUT_OF_VIEW_REASONS;e&&(a=d||q(),a!==g.OUT_OF_VIEW&&a!==g.PARTIAL_VIEW_MINUS||b.push(f.GEOM),e.isHidden()&&b.push(f.HIDDEN),e.isObstructed()&&b.push(f.OBSTRUCTION));return b},
getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:t("getSliceStatus")}},rd=function(a){var b=!1;if(!f.isUndef(v.MutationObserver)){var c=new MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};l.on("adComponentClicked",d);l.on("adComponentMousedOver",
d);y.whenReady(function(){try{c.observe(M.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(g.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},zd=function(a,b){var c=[sd(),td()],d=[ha(),ud(),vd(),wd(),xd(),yd()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},vd=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},
find:function(){b=b||ea();var c=t.crossQuerySelector(ea().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},V=function(a,b){var c,d=t.findChildWithLargestContent(a||m.contextNode.parentNode,b);1<t.getNodeArea(d)&&!d[g.IAS_DETECTOR]&&(c=d);return c},xd=function(){return{detectionMethod:g.DETECTION_METHODS.IFRAME,find:function(){return v},isApplicable:function(){return s.embedded},getAdContainer:function(){return m.contextNode.parentNode},
allowForAdContainerChange:!0}},Ad=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return J.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,
b){return t.crossQuerySelector(b,!0)})}catch(c){}return a}}},Bd=function(){return{isApplicable:function(a,b){var c;try{c=t.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&J.contains(c,"_tpi")&&t.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+t.getFrameId().replace("_tpi","")+"']"},detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Cd=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=t.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&
b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=t.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),g=a.friendlyIframe&&r.getWindow().frameElement,g=g&&I(g).isOneByOne(),q=function(){var a=r.getDoc().scripts;return f(a).findFirst(function(a,b){return J.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&
!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&q&&c&&g&&d()&&e()},getCssSelector:e}},ea=function(){var a,b=z.getAggregator().request("features");a||(a=[Cd(),Bd(),Ad()]);return f(a).findFirst(function(a,d){return d.isApplicable(s,b)})},wd=function(){var a,b=function(){r.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:g.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,
d=xa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=t.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},xa=function(){var a,b=function(){var b;(b=m.contextNode.parentNode)&&J.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&t.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ha=function(){var a=l.request("mobileApp");return{usePlaceholder:!0,
detectionMethod:g.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=t.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[g.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},td=function(){var a;return{detectionMethod:g.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return s.isSpecifiedAd()},find:function(){var b=t.crossQuerySelector(m._cl_adpath);b&&(a=t.getParent(b),
1>t.getNodeArea(b)&&(a=b,b=t.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},sd=function(){var a;return{detectionMethod:g.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return s.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(m._cl_adpath)[1].split(",").forEach(function(d){if(c=t.crossQuerySelector(d))a=t.getParent(c),1>t.getNodeArea(c)&&(a=c,c=t.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},yd=function(){return{usePlaceholder:!0,detectionMethod:g.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:V,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},ud=function(){return{detectionMethod:g.DETECTION_METHODS.VIDEO,find:l.request("video").findAdNode,isApplicable:s.isVideo,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},id=function(a,b){var c,d;c=[Dd(),Ed(),Fd()];d=
f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Gd();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},Fd=function(){return{calcDims:function(a,b){var c,d,e=new I(a);t.isClippable(a,b)&&(c=t.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(s.isSpecifiedAd()||s.isBustedIframe())&&t.nodeIsInWindow(a,r.getTop());a=!t.elementIsEmbedded(a);
return b||a}}},Ed=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(s.isSpecifiedAd()||s.isBustedIframe())&&t.elementIsEmbedded(a)}}},Dd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new I(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,
c){var d=(s.isSpecifiedAd()||s.isBustedIframe())&&s.embedded&&!t.nodeIsInWindow(c,r.getTop()),e=s.isCeltra()&&t.elementIsEmbedded(a);return d||e}}},Gd=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=W();var c=l.request("browser"),d=l.request("features"),e=l.request("context");return e.isDeviceTypeGroupMobile()&&a.applies(c,d,e)},allowsOptimization:!1,setBaseStrategy:function(b){a=
b}}},hd=function(a){var b,c,d,e=l.request("features"),k=l.request("browser");a=a||r.getWindow();var m=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,k=0,n=e.length;k<n;k++)if(e[k]==b){d=e[k];f=!0;break}if(f){d=t.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(s){l.trigger("error",g.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&m(b.parent,c)}return c},
n=function(){var p,n={};try{var x,D,w,v,y,B,C=r.getMaxNumber(),H=r.getMaxNumber();s.friendly?(x=m(),w=x.left,v=x.top,C=x.width,H=x.height,D=t.browserWindowPosition(),y=D.scrX+w,B=D.scrY+v):e.on("rattie")&&k.browserIs(g.BROWSERS.IE)?(d=d||l.request("ieXDomainViewability"),c=d.determineFramePosition(),y=c.scrX,B=c.scrY):f.isDef(a.mozInnerScreenX)&&(y=r.round(a.mozInnerScreenX),B=r.round(a.mozInnerScreenY));var n={scrX:y,scrY:B,iFrameClippingWidth:C,iFrameClippingHeight:H},A,E,K=b||t.getIeDimObj(a);
b=K;f.isDef(a.innerWidth)?(A=a.innerWidth,E=a.innerHeight):K&&f.isDef(K.clientWidth)?(A=K.clientWidth,E=K.clientHeight,0===A&&0<K.offsetWidth&&(A=K.offsetWidth),0===E&&0<K.offsetHeight&&(E=K.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(A=a.frameElement.clientWidth,E=a.frameElement.clientHeight);p=A;n.height=E;n.width=p}catch(z){l.trigger("error",g.ERROR_CODES.GET_AD_DIMENSIONS)}return n};return{calcDims:function(){return new I(n())},getClippedDims:function(){var a=n();return new I({scrX:a.scrX,
scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},yb=function(){return{createInstance:function(a,b,c){return s.isDomless()?new Hd:new Id(a,b,c)}}},Id=function(a,b,c){var d,e=m&&m.contextNode&&m.contextNode.parentNode?m.contextNode.parentNode:null,k=qd(b,c),l=function(){var a,b,e;d=d||zd(s,c);a=d.find();!a&&d.usePlaceholder?n():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,c){k.addAdComponent(c,f.resolve(d.detectionMethod),
b,e)}))},n=function(){var a;k.hasAd()||(a=t.getPlaceholderSpan(),e.insertBefore(a,m.contextNode.nextSibling),k.addAdComponent(a,g.DETECTION_METHODS.AD_PLACEHOLDER,t.getParent(a)))};rd(a);return{find:function(){k.isUsingPlaceholder()||!k.hasAd()?l():k.refresh();return k},getDetectionMethod:function(){}}},Hd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},hb=function(a){var b,c=[],d=a||v,e=function(){return"stub"===g().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==
g().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},g=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,v.bootstrapper)}else"object"===typeof a&&(b=a);return b};s.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:g,addEventListener:function(a,b){e()?c.push({type:a,
functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},gb=function(a){var b=new Jd,c=new Kd;try{if(a.bootstrapOn("mobOrTab")||s.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){l.trigger("error",g.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},
Ld={url:{STRINGIFIED_METHOD:"u",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){return-1!==r.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,
c){return f.isDef(J.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){return t.containsScriptTagWithSrc(function(a){return f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ha=function(){var a=function(a,c){var d,e=Ld[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},Md={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},Jd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=m.hasOwnProperty("serverSideAppDetection")&&0!==m.serverSideAppDetection.length?!0:Ha().process(Md);b()&&l.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},Kd=function(){var a=[],
b=[],c=function(b,c){var f,g=Ha().process(c.detectionRules);g&&(a.push(c.STRINGIFIED_SDK+"*"+g),f=c);return f};return{detect:function(){b=f(Nd).map(c);0<b.length&&l.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Nd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],kd=function(a){var b=
[],c=function(a,b,c){a*=c;return new T(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new T(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},S=function(){var a=g.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=g.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<
a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Od=function(){var a,b,c=0,d=-1,e=0,g=l.request("browser"),m=function(){var a,b;a=l.request("pageUrls").getDetectedURLs();a=f(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&null!==b.match(/(insider)|(bustle)|(wikia)/i)});return f.isDef(a)};b=r.setInterval(function(){var a=r.now();d=a-e;e=a;
c++;10<=c&&b&&r.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=t.calcMonDims().height,l=g.getUserAgent(),l=l&&null!==l.match(/(FBAN)/)?1:0,s=g.getUserAgent(),s=s&&null!==s.match(/(iPad)/)?1:0,w=m()?1:0,v=g.getUserAgent(),v=v&&null!==v.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=r.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*l-0.874412*s+0.646972*w+0.28118*v+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:l,mbip:s,mbhs:w,mbbr:v,mblr:d,
mbp:e};b&&r.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},Rc=function(a,b,c){var d,e,k,u,n,p=[],q=m.contextNode.parentNode,x=0,t=0,w=!1,v=!1,z=new Od,B=function(){var a=p.length-1,b=-1;-1<a&&(b=p[a].piv);return b},C=function(){l.trigger("delayedViewabilityReadyCallOnly")},H=function(a){y.whenReady(function(){e=new Pd(a,r.getDoc().body)})},A=function(){e.removePixels()},E=function(){var a=z.getDebugState(),b=B();f.isUndef(a)&&(a={});a.mbm=f.fromBoolToNum(v);a.mbrd=f.fromBoolToNum(w);
a.mbtg=f.isDef(q.tagName)?q.tagName:"na";a.mbaf=f.isDef(k)?k:"na";a.mbad=f.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";a.piv=f.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{l.trigger("addOutputItem",{output:a},b),l.trigger("addOutputItem",{output:-101},"pingTime",b),l.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var q;q=f.isDef(d);if(c||!b.adDimensions)return b;q||(k=b.method,d=b.adDimensions,H(d));if(f.isUndef(e)||!e.isReadyToMeasure())q=!1;f.isUndef(u)&&
q&&(u=z.isLikelyToProduceFalsePositive(d));if(v=!u&&q){var m;q=e.getPercentInView();var A=B(),E=1===b.tabHidden;t=r.now()-x;m=0<x?900>t:!0;x=r.now();0===b.adDimensions.area()&&(q=0);m||(q=0);var y=q;p.push({tm:s.getTagTime(),piv:y});3<p.length&&p.shift();0===q&&0<A&&(m&&(m=p.length-1,y=!0,2<=p.length&&-1<m&&(y=0===p[m].piv&&0===p[m-1].piv),m=!y),m&&(q=A));a?(f.isUndef(n)&&(n=l.request("video")),n.setVideoSpecificScreenEventFields(b),q=b.isVideoPlayingInFullscreen?!0:!E&&50<=q&&b.isVideoPlaying):q=
!E&&50<=q;b.viewState=q?g.IN_VIEW:g.OUT_OF_VIEW;b.percentInView=B();A=[];E=f(b.reason);m=g.OUT_OF_VIEW_REASONS;q||A.push(m.GEOM);E.contains(m.HIDDEN)&&A.push(m.HIDDEN);E.contains(m.OBSTRUCTION)&&A.push(m.OBSTRUCTION);b.reason=A;b.sliceStatus=e.getSliceStatus();w||(w=!0,r.execAtEndOfThread(C))}else b.viewState=g.NA,b.percentInView=-1;return b},start:function(){l.on("endAdSession",A);c&&r.setTimeout(E,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return v},
isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},Aa=function(a,b,c,d){return{accepts:function(){var e=c.xDomainIframe,f=a.bootstrapOn("mobOrTab"),l=a.on("ios"),n=b.browserIs(g.BROWSERS.WEBKIT),p=9<=b.getIOSVersion(),q=d.isMobileAppEnvironment();return e&&f&&l&&n&&p&&!q},isImmediate:function(){return!1},start:function(){}}},Qd=function(a,b,c,d,e,k,l){var n,p=m.birthdate+""+r.round(1E6*r.random()),q=101,s,t,w,v=!1,y=function(){return'<html><body><script type="text/javascript">'+
("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,g=(new Date).getTime(),k=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(k)};a.requestAnimationFrame(k);b.body.isInView=function(a){return{isInView:c,rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-g}}catch(l){b.body.setAttribute("data-err",l.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+
")(window);")+"\x3c/script></body></html>"},B=function(a,b){w||(q=a,w=b)},C=function(){var a,b,c;if(w)return!1;if(t)return!0;try{if(s.contentWindow&&s.contentWindow.document&&s.contentWindow.document.body){c=s.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&B(104);(b=c.isReady?c.isReady():!1)&&(t=c.isInView?c.isInView:void 0)&&B(105)}}catch(d){B(106,d)}return f.isDef(t)},H=function(a,b,c){var k=M.createElement("iframe");k.id=p;f(k.style).mixin({position:"absolute",
width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var l=k.style;k[g.IAS_DETECTOR]="true";l.left=b;l.top=c;a.appendChild(k);s=k;B(102);a=s;try{var q=a.contentWindow,n=y();q.document.open();a.contentWindow.document.write(n);q.document.close()}catch(m){B(103,m)}return k}(a,b,c);return{isInView:function(){var a,b,c=!1;r.now();C()&&(a=t(!0),c=a.isInView,v=!1,n&&(b=20*n.rate+n.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,v=!0)),
B(107),n=a);return c},isNotReadyToReport:function(){return!C()},createdElement:s,remove:function(){H.parentNode&&H.parentNode.removeChild(H)},getStatus:function(){return q},getError:function(){return w},isReadingInvalid:function(){return v},getRate:function(){return s.contentWindow&&s.contentWindow.document&&s.contentWindow.document.body&&s.contentWindow.document.body.getRate?s.contentWindow.document.body.getRate():-1},percentInView:k}},Pd=function(a,b,c){var d,e=a.getRounded(),g=[],l=!1;a=S().getConfig(e);
var n=a.percentInViewSliceArray,p=1==a.numberOfSlices,q={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},m=function(){var a;if(!l)for(l=!0,a=0;a<g.length;a++)if(g[a].isNotReadyToReport()){l=!1;break}return l},t=function(a){var b=[],c=0;r.floor(a.height/n.length);var d=r.floor(a.width/2-1);f(n).each(function(e,f){c=r.floor(a.height*f);c===a.height&&(c-=2);b.push({y:r.floor(c)+"px",x:r.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},w=function(a){var b=
[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},v=function(a,b){var c=0;b&&(a.reverse(),f(a).map(function(a,b){b.percentInView=100-b.percentInView}));f(a).findFirst(function(a,b){b.isInView&&(c=r.max(c,b.percentInView));return!b.isInView});return c},y=function(){var a,b,c,d=[];q.mbs=[];f(g).each(function(b,c){a=c.isInView();q.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=v(d,!1);c=v(d,!0);return r.max(b,c)};(function(){d=p?
w(e):t(e);var a=d.get();f(a).each(function(a,d){var e=new Qd(b,d.x,d.y,d.width,d.height,d.percentInView,c);g.push(e)})})();return{getPercentInView:function(){var a=m(),b=y();q.mbrd=a?1:0;b!=q.mbp&&q.mbivs.push([s.getTagTime(),b]);q.mbp=b;return a?b:-1},removePixels:function(){void 0!==c&&c.stop();f(g).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){q.mbm=1;g&&0<g.length&&(q.mbpr=[],q.mbir=[],f(g).each(function(a,b){q.mbpr.push(b.getRate());q.mbir.push(b.isReadingInvalid()?
1:0)}));return q},isReadyToMeasure:m,getSliceStatus:function(){var a;g&&0<g.length&&(a=[],f(g).each(function(b,c){a.push(c.isInView())}));return a}}},nd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),g=Math.max(d.leftX,f.leftX),k=Math.min(d.rightX,f.rightX),l=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new T(g,k,l,f))}});return c},e=function(a,
b){var c=0,e=d(a,b),g;f(e).each(function(a,b){g=b.value();c+=g.area});return c},k=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=k();c.mbrd=1;a!==c.mbp&&c.mbivs.push([s.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=
1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(g.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},od=function(a){var b=S();return{getSliceStatus:function(c,d,e,f){var g,l=[];g=c.getRounded();c=g.height;var p=g.scrY,q=new I({scrX:g.scrX,width:g.width}),m=b.getConfig(g).numberOfSlices;q.set("height",r.floor(c/m));for(var s=0;s<m;s++)q.set("scrY",r.ceil(p+c/m*s)),g=100===a.calcPercentInView(q,
d,e,f),l.push(g);return l}}},T=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),g=Math.ceil(c),l=Math.ceil(d),p=f-e,q=l-g,m=p*q,r=function(){return{leftX:e,rightX:f,topY:g,bottomY:l,width:p,height:q,area:m}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},ld=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},md=function(a,b){var c,d=[],e=[],g=function(){f(d).each(function(a,
b){b(e)})},l=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var m=d.intersectionRatio,d=d.intersectionRect,r=d.left-f.left,f=d.top-f.top,f=new T(r,r+d.width,f,f+d.height);e.push(f);f=l();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new T(0,b,f[d],f[d+1]));g();
1===m&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},Rd=function(){return{listenForResult:function(){l.on("videoBlockResult",function(a){var b=l.request("adNode"),c=!1,d="blockAd"+m.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Sd=function(a,b,c){var d,e,g,s,n;g=l.request("videoTranslator").translate(a.messageType);s=function(a){a=
a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);n=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);e={t:a.time-m.birthdate,tp:g,sl:b};f(e).mixin(s);f(e).mixin(n);return d=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(g)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(g)},
indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===g||"initAd"===g)&&("fullscreen"===s.viewMode||s.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===g&&"normal"===s.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(g)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(g)},getVolume:function(a){return a.getVolumeFromContext(s)},
updateScreenLoc:function(a){e.sl=a;d.sl=a},trigger:function(){"adImpression"===g?l.persistentTrigger(g,s,n):l.trigger(g,s,n)},toString:function(){return"{"+f(e).toParams()+"}"}}).mixin(e)},Td=function(){var a=[];return{registerEvent:function(b,c,d){b=new Sd(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Ud=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},
e=function(){a&&a.hasAlwaysBeen(!0)&&l.trigger("sendDt",g.DT_CODES.QUARTILE_FULLY_INVIEW)},k=function(){b=!0;d()},m=function(a){a=(new Ia).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){l.on({adVideoStart:k,adImpression:k,volumeChanged:m,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Vd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",
AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ia=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},bb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,k,u,n,p=[],q=g.OUT_OF_VIEW,t=!1,v=!1,w=!1,z=!0,F=new Td,B=Ud(),C=new Rd,H=new Ia,A,E=[],G=function(b){var d;t=!0;var e={};try{e=JSON.parse(unescape(b&&
b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=F.registerEvent(e,c.getCurrentLoc(),c.getCurrentEvent()),d.indicatesPlaying()?(v=!0,q=w?g.IN_VIEW:!1):d.indicatesNotPlaying()?(v=!1,q=g.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,q=v?g.IN_VIEW:g.OUT_OF_VIEW):d.indicatesNormalSize()&&(w=!1,q=v?!1:g.OUT_OF_VIEW),b=parseFloat(d.getVolume(H)),0<b?z=!0:0===b&&(z=!1));p.push(d);n&&O();return d},I=function(b){var c,g,k=ka().wrapToGlobal(G),q=function(a){f.isStr(a)&&(l.provide("vc",function(){return a}),l.trigger("addOutputItem",
{output:a},"vc",{type:"impression"}))};try{g=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(g)&&"2"===g.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),t=!0,q(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,m)}},L=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};k||(f([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return k=c(d)}),!k&&b.on("novidnodeerr")&&
__IntegralASDiagnosticCall("novidnode",{},m));return k},J=function(){var a=L();a&&!t&&I(a);return a},M=function(a){a=H.getVolumeFromContext(a);z=f.isDef(a)?0<a:!1},O=function(){A||(A=l.request("viewabilityDefinitions"));A&&0==E.length&&f(A).each(function(a,b){b.qivThreshold&&E.push(b)});f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&l.trigger("sendDt",
g.DT_CODES.VIDEO_EVENTS),P(b)))});p=[];n=!0},P=function(a){var b=["","adVideoFirstQuartile","adVideoMidpoint","adVideoThirdQuartile","adVideoComplete"].indexOf(a.tp),d=Math.floor(a.t/1E3);f(E).each(function(a,e){var k=!1,k=e.qivThreshold.indexOf(b);-1!==k&&e.isInView(c.getCurrentEvent())&&0<e.qivThreshold.length&&(e.qivThreshold.splice(k,1),k=0==e.qivThreshold.length)&&(l.trigger("addOutputItem",{output:e.metricId},"metricId",{type:g.DT_CODES.CUSTOM}),l.trigger("addOutputItem",{output:"q"},"cmr",
{type:g.DT_CODES.CUSTOM}),l.trigger("sendDt",g.DT_CODES.CUSTOM,d),e.rtsCallbacks&&f.isFunction(e.rtsCallbacks[g.RTS_KEY_FOR_VQ])&&e.rtsCallbacks[g.RTS_KEY_FOR_VQ]())})};(function(){y.addEvent(r.getWindow(),"message",function(a){G(a)});l.on({volumeChanged:M});l.provide({videoEventsString:F,videoVersion:function(){var a,b=J();try{a=b.getVersion()}catch(c){a=-1,l.trigger("error",g.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return u=u||new Vd},adNode:J});J();C.listenForResult();
B.isApplicable(s)&&B.start(c)})();return{findAdNode:J,getViewStateOverride:function(){return q},isHandshakeComplete:function(){return t},triggerInitializationEvents:O,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===g.NA;a.isVideoPlaying=!0;a.isSoundOn=z;a.isVideoPlayingInFullscreen=!1;if(q){if(q===g.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=g.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:q;a.isVideoPlaying=q===g.IN_VIEW}w&&v&&(a.percentInView=
100,a.isVideoPlayingInFullscreen=!0)}}},Wd=function(){return new Z(g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Mb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.trigger("sendDt",g.DT_CODES.PERFORMANCE)}),a=!1},k=function(){b=new va;d=0;e(!0);b.start()},m=function(d,e,g,l){d=c[d];l?(f.isDef(d[e])||(d[e]=[]),d[e].push(g)):d[e]=g;b&&b.isActive()||k();a=!0},n=function(c,d,e){l.trigger("addOutputItem",{output:d},
c,e);b&&b.isActive()||k();a=!0},p=function(b){f(c).each(function(d,e){var g=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(g).isEmpty()||(l.trigger("addOutputItem",{output:g},d,k),c[d]={});a=!1})};return{start:function(){l.on("preSendDt",function(a){p(a);b&&b.kill()});l.on("addThrottledProp",m);l.on("addThrottledOutputItem",n)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Rb=function(){var a={},b=function(b){a[b]||(a[b]=new ua(1,m.birthdate));return a[b]},c=function(a){b(a).start()},
d=function(a){var c=b(a);c.stop();l.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Xd=function(){return new Z(g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},wb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),l.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&
l.trigger("addThrottledProp",g.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));l.provide("perfActive",function(){return c});return{isActive:c}},Z=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},g=function(){var a,b={};e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===
b}}},xb=function(){function a(){}a.build=function(){var a=[];a.push(new Z(g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=l.request("vc");var d={jv3:Ja,av3:Ja,jvw:Xd,avw:Wd};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Ja=function(){return new Z(g.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.trigger("measureTime",
R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(v,"load",function(){l.trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new va;a.onTick({4:function(){l.trigger("markTime",R.IDS.IN_BROWSER_DELAY)},5:function(){l.trigger("measureTime",R.IDS.IN_BROWSER_DELAY)}});a.start()}};z("GDPRConsentDetector",[],function(){var a="ias_"+m.asid,b,c,d=function(b){try{if(b&&b.data&&b.data.__cmpReturn&&b.data.__cmpReturn.callId===a&&b.data.__cmpReturn.returnValue){var k=
b.data.__cmpReturn.returnValue,m=f.isDef(k)&&f.isDef(k.vendorConsents)&&f.isDef(k.vendorConsents[278])?k.vendorConsents[278]:void 0,n={appl:f.stringifyTriState(k.gdprApplies),cnst:f.stringifyTriState(m),glbl:f.stringifyTriState(k.hasGlobalConsent),mtdt:encodeURIComponent(k.metadata)};l.trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"gcd",f(n).toION());y.removeEvent(c,"message",d)}}catch(p){l.trigger("error",g.ERROR_CODES.GDPR)}};(function(){var e;e=r.getWindow();for(var k=r.getTop();!b;){try{e.frames.__cmpLocator&&
(b=e)}catch(m){}if(e===k)break;e=e.parent}e=!!b;l.trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"gca",f.stringifyTriState(e));e&&(c=r.getWindow(),e={__cmpCall:{command:"getVendorConsents",parameter:[278],callId:a}},y.addEvent(c,"message",d),b.postMessage(e,"*"))})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});z("postMessageDetector",[],function(){var a=!1,b="pmdetector"+m.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();
y.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){l.trigger("addThrottledProp",g.DT_SLOT.IM,"pom",f.stringifyTriState(a));y.removeEvent(d,"message",c)})})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});z("safeFrameDetector",[],function(){l.trigger("addThrottledProp",g.DT_SLOT.IM,"sf",f.stringifyTriState(s.isSafeFrame()))},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Jb=function(){var a=
m.asid,b=m.cookieBaseURL,c=m.protocol,d=function(a){f(a).each(function(a,b){l.trigger("notify",b)})},e=function(){var e;e=new P(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.trigger("jsonp",e,d,!0);l.trigger("updateDtCount")};return{start:function(){l.on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Lb=function(a,b,c,d,e,f,r){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var q,
s=d.baseUrl,t,w,v=f.getDocumentMode();"number"===typeof v?(w=2E3,8===v?w=4E3:8<v&&(w=8E3)):w=n(m.sp_imp_maxLength,2E3);t=w;w=s=s.replace(g.UNIQUE_ID_TOKEN,m.asid);var y=s.length,z,C,F=n(m.sp_imp_jsInfo_minLength,0),v="";try{z=t-y-F,0<z&&(C=Yd(p,z,14,b.on("partialUrls")),v+=C.join("&"))}catch(A){a.add(g.ERROR_CODES.IMPRESSION_URLS)}s=w+v;p=s+="&"===s.slice(-1)?"":"&";var E,y="";try{E=t-s.length,y+=Zd(E,"adsafe_jsinfo=",a,b,c,e,f,r)}catch(G){a.add(g.ERROR_CODES.JSINFO),y+="adsafe_jsinfo=e:"+a.toString()}s=
p+y;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);q=s;d.sendImpression(q);m.impUrl=q;l.trigger("impressionsent")}catch(I){__IntegralASDiagnosticCall("impsend",I,m)}}}},Zd=function(a,b,c,d,e,k,l,n){return function(c){var d=c.primary.join(","),g=b,k=0,l=function(a){if(a)return","+a};g.length+d.length+5<=a&&(g+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){g.length+c.length+5<=a?g+=l(c):k+=1}));return g+=",ov:"+k}(function(){var a,b;b=a={viewState:g.NA};s.isDomless()?
b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):f.isDef(r.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||n.requiresDelayedViewabilityEvent();a=b;var t=a.viewState;b=e.getAvidIds();t=["id:"+m.asid,"c:"+e.getCacheBustId(),"sl:"+t,"em:"+s.embedded,"fr:"+s.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(t.push("abi:"+b.bundleIdentifier),t.push("apn:"+b.partner),t.push("apv:"+b.partnerVersion));a=$d(a,c,d,e,k,l,n);return{primary:t,
secondary:a}}())},$d=function(a,b,c,d,e,k,u){var n=[],p=l.request("mPage");n.push("mn:"+m.mn);n.push("pt:"+function(){var b=u.stringifyPingTimes();a.viewState!==g.NA&&(b+=a.details);return b}());n.push(f(k.params()).toParams());c.on("mrcAudit")&&!s.isDomless()&&n.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===g.IMPRESSION_EVENT;(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());
n.push("tt:"+m.mode);n.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));n.push("et:"+(r.now()-m.birthdate));m.perf.mark("si");c.on("swapids")?n.push("oid:"+m.oid):n.push("uid:"+d.unq);n.push("v:19.8.31");n.push("sp:"+(m.isSplitMode?1:0));c.on("resolution")&&(n.push("wr:"+f(t.windowSize()).toArray().join(".")),n.push("sr:"+f(t.screenSize()).toArray().join(".")));b=function(){var a;a=String(m.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?
a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&n.push("x_xpc:"+b);return n},Yd=function(a,b,c,d){var e,g=[],l=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(l(b))return b}),a=f(a).map(function(a,b){if(!l(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var l=e.key,m;m=24+g.join("&").length+l.length+c;m=b-m;d&&m<f.length&&0<m&&(f=f.substr(0,m));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+
l,l=g.join("&").length,f.length+l<=b&&g.push(f)}));return g},Hb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=ae(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.trigger("addOutputItem",{output:c},"pl",{type:g.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),l.trigger("addOutputItem",{output:a},"pd",{type:g.DT_CODES.ADTALK}))}}},de=function(a,b){return{start:function(){try{var c=be(),d=c.getMethodName(a),
e=new P(b.getEnabledScriptUrl(a)),f=ce,m=r.getDoc();(new f(m.body||m.head||m.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){l.trigger("error",g.ERROR_CODES.FEATURE_SCRIPT)}}}},be=function(){var a=function(a,c,d){a===m.asid&&(d.unshift(c),l.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:m.asid,constant:g,features:b,context:s,dtBaseURL:m.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Pb=function(){return{start:function(a,
b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&de(d,b).start()})}}},ae=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=J.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},ce=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=t.createHiddenIframe();c.setAttribute("src","about:blank");
(a||m.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var g,l;g=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+g+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{Ka()}catch(ee){__IntegralASDiagnosticCall("main",
ee,m)}};try{(function(){var m=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
