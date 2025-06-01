(function () {
    ;
    function __webpack_require__(P) {
        var E = __webpack_module_cache__[P];
        if (E !== void 0) {
            return E.exports;
        }
        var d = __webpack_module_cache__[P] = {
            id: P,
            loaded: false,
            exports: {}
        };
        return __webpack_modules__[P].call(d.exports, d, d.exports, __webpack_require__), d.loaded = true, d.exports;
    }
    __webpack_require__.m = __webpack_modules__;
    (function () {
        __webpack_require__.amdO = {};
    }());
    (function () {
        __webpack_require__.n = function (P) {
            var E = P && P.__esModule ? function () {
                return P.default;
            } : function () {
                return P;
            };
            return __webpack_require__.d(E, { a: E }), E;
        };
    }());
    (function () {
        var P = Object.getPrototypeOf ? function (d) {
                return Object.getPrototypeOf(d);
            } : function (d) {
                return d.__proto__;
            }, E;
        __webpack_require__.t = function (d, f) {
            if (f & 1 && (d = this(d)), f & 8 || typeof d == 'object' && d && (f & 4 && d.__esModule || f & 16 && typeof d.then == 'function')) {
                return d;
            }
            var T = Object.create(null);
            __webpack_require__.r(T);
            var p = {
                w: function () {
                    return d[w];
                }
            };
            E = E || [
                null,
                P({}),
                P([]),
                P(P)
            ];
            for (var h = f & 2 && d; typeof h == 'object' && !~E.indexOf(h); h = P(h)) {
                Object.getOwnPropertyNames(h).forEach(function (w) {
                    ;
                });
            }
            return p.default = function () {
                return d;
            }, __webpack_require__.d(T, p), T;
        };
    }());
    (function () {
        __webpack_require__.d = function (P, E) {
            for (var d in E)
                __webpack_require__.o(E, d) && !__webpack_require__.o(P, d) && Object.defineProperty(P, d, {
                    enumerable: true,
                    get: E[d]
                });
        };
    }());
    (function () {
        __webpack_require__.f = {};
        __webpack_require__.e = function (P) {
            return Promise.all(Object.keys(__webpack_require__.f).reduce(function (E, d) {
                return __webpack_require__.f[d](P, E), E;
            }, []));
        };
    }());
    (function () {
        __webpack_require__.u = function (P) {
            return '' + P + '.' + {
                '138': '806de06f',
                '154': 'fdd7cec5',
                '164': '6505df12',
                '189': '686f87d8',
                '199': '4a1179c2',
                '224': '2794839b',
                '256': '43463a36',
                '316': '2c115d5f',
                '322': 'a1bf0c71',
                '347': '88354756',
                '394': '9fb7f2d8',
                '397': 'f8e1a145',
                '406': '910d3e04',
                '408': '9c62318d',
                '474': '5a36811b',
                '492': '6be75ec4',
                '587': '1bdac0ec',
                '591': '3737e6fe',
                '607': '3ac43435',
                '621': '06eb3608',
                '683': '678b982c',
                '746': 'e2d7fcf4',
                '773': '6f9a4b74',
                '784': '2f581b24',
                '816': 'b01653ea',
                '846': 'c3818215',
                '854': 'f7f15fbe',
                '874': 'bcbfb0b8',
                '914': 'ebd22283',
                '927': 'a8851908',
                '976': '388401d0',
                '982': 'c0d6b792',
                '987': 'bc05564b'
            }[P] + '.js';
        };
    }());
    (function () {
        __webpack_require__.miniCssF = function (P) {
            return 'css/' + P + '.1b3bc9e9.css';
        };
    }());
    (function () {
        __webpack_require__.g = function () {
            if (typeof globalThis == 'object') {
                return globalThis;
            }
            try {
                return this || new Function('return this')();
            } catch (P) {
                if (typeof window == 'object') {
                    return window;
                }
            }
        }();
    }());
    (function () {
        __webpack_require__.o = function (P, E) {
            return Object.prototype.hasOwnProperty.call(P, E);
        };
    }());
    (function () {
        var P = { d: [f] };
        __webpack_require__.l = function (d, f, T, p) {
            if (P[d]) {
                P[d].push(f);
                return;
            }
            var h, w;
            if (T !== void 0) {
                for (var B = document.getElementsByTagName('script'), Q = 0; Q < B.length; Q++) {
                    var z = B[Q];
                    if (z.getAttribute('src') == d || z.getAttribute('data-webpack') == 'web:' + T) {
                        h = z;
                        break;
                    }
                }
            }
            h || (w = true, h = document.createElement('script'), h.charset = 'utf-8', h.timeout = 120, __webpack_require__.nc && h.setAttribute('nonce', __webpack_require__.nc), h.setAttribute('data-webpack', 'web:' + T), h.src = d);
            ;
            var M = function (G, S) {
                    h.onerror = h.onload = null;
                    clearTimeout(U);
                    var R = P[d];
                    if (delete P[d], h.parentNode && h.parentNode.removeChild(h), R && R.forEach(function (x) {
                            return x(S);
                        }), G) {
                        return G(S);
                    }
                }, U = setTimeout(M.bind(null, void 0, {
                    type: 'timeout',
                    target: h
                }), 120000);
            h.onerror = M.bind(null, h.onerror);
            h.onload = M.bind(null, h.onload);
            w && document.head.appendChild(h);
        };
    }());
    (function () {
        __webpack_require__.r = function (P) {
            typeof Symbol != 'undefined' && Symbol.toStringTag && Object.defineProperty(P, Symbol.toStringTag, { value: 'Module' });
            Object.defineProperty(P, '__esModule', { value: true });
        };
    }());
    (function () {
        __webpack_require__.nmd = function (P) {
            return P.paths = [], P.children || (P.children = []), P;
        };
    }());
    (function () {
        var P = { '982': [2982] }, E = {
                '2982': [
                    'default',
                    './AbsStore',
                    7794
                ]
            };
        __webpack_require__.f.remotes = function (d, f) {
            __webpack_require__.o(P, d) && P[d].forEach(function (T) {
                var p = __webpack_require__.R;
                p || (p = []);
                var h = E[T];
                if (!(p.indexOf(h) >= 0)) {
                    if (p.push(h), h.p) {
                        return f.push(h.p);
                    }
                    var w = function (U) {
                            U || (U = new Error('Container missing'));
                            typeof U.message == 'string' && (U.message += `
while loading "` + h[1] + '" from ' + h[2]);
                            __webpack_modules__[T] = function () {
                                throw U;
                            };
                            h.p = 0;
                        }, B = function (U, G, S, R, x, g) {
                            try {
                                var F = U(G, S);
                                if (F && F.then) {
                                    var we = F.then(function (Se) {
                                        return x(Se, R);
                                    }, w);
                                    if (g) {
                                        f.push(h.p = we);
                                    } else {
                                        return we;
                                    }
                                } else {
                                    return x(F, R, g);
                                }
                            } catch (Se) {
                                w(Se);
                            }
                        }, Q = function (U, G, S) {
                            return U ? B(__webpack_require__.I, h[0], 0, U, z, S) : w();
                        }, z = function (U, G, S) {
                            return B(G.get, h[1], p, 0, M, S);
                        }, M = function (U) {
                            h.p = 1;
                            __webpack_modules__[T] = function (G) {
                                G.exports = U();
                            };
                        };
                    B(__webpack_require__, h[2], 0, 0, Q, 1);
                }
            });
        };
    }());
    (function () {
        __webpack_require__.S = {};
        var P = { f: 0 }, E = {};
        __webpack_require__.I = function (d, f) {
            f || (f = []);
            var T = E[d];
            if (T || (T = E[d] = {}), !(f.indexOf(T) >= 0)) {
                if (f.push(T), P[d]) {
                    return P[d];
                }
                __webpack_require__.o(__webpack_require__.S, d) || (__webpack_require__.S[d] = {});
                var p = __webpack_require__.S[d], h = function (M) {
                        return typeof console != 'undefined' && console.warn && console.warn(M);
                    }, B = function (M, U, G, S) {
                        var R = p[M] = p[M] || {}, x = R[U];
                        (!x || !x.loaded && (!S != !x.eager ? S : 'web' > x.from)) && (R[U] = {
                            get: G,
                            from: 'web',
                            eager: !!S
                        });
                    }, Q = function (M) {
                        var U = function (x) {
                            h('Initialization of sharing external failed: ' + x);
                        };
                        try {
                            var G = __webpack_require__(M);
                            if (!G) {
                                return;
                            }
                            var S = function (x) {
                                return x && x.init && x.init(__webpack_require__.S[d], f);
                            };
                            if (G.then) {
                                return z.push(G.then(S, U));
                            }
                            var R = S(G);
                            if (R && R.then) {
                                return z.push(R.catch(U));
                            }
                        } catch (x) {
                            U(x);
                        }
                    }, z = [];
                switch (d) {
                case 'default':
                    Q(7794);
                    break;
                }
                return z.length ? P[d] = Promise.all(z).then(function () {
                    return P[d] = 1;
                }) : P[d] = 1;
            }
        };
    }());
    (function () {
        __webpack_require__.p = '//cdn.midasbuy.com/apps/login/';
    }());
    (function () {
        var P = function (T, p, h, w) {
                var B = document.createElement('link');
                B.rel = 'stylesheet';
                B.type = 'text/css';
                var Q = function (z) {
                    if (B.onerror = B.onload = null, z.type === 'load') {
                        h();
                    } else {
                        var M = z && (z.type === 'load' ? 'missing' : z.type), U = z && z.target && z.target.href || p, G = new Error('Loading CSS chunk ' + T + ` failed.
(` + U + ')');
                        G.code = 'CSS_CHUNK_LOAD_FAILED';
                        G.type = M;
                        G.request = U;
                        B.parentNode.removeChild(B);
                        w(G);
                    }
                };
                return B.onerror = B.onload = Q, B.href = p, document.head.appendChild(B), B;
            }, E = function (T, p) {
                for (var h = document.getElementsByTagName('link'), w = 0; w < h.length; w++) {
                    var B = h[w], Q = B.getAttribute('data-href') || B.getAttribute('href');
                    if (B.rel === 'stylesheet' && (Q === T || Q === p)) {
                        return B;
                    }
                }
                for (var z = document.getElementsByTagName('style'), w = 0; w < z.length; w++) {
                    var B = z[w], Q = B.getAttribute('data-href');
                    if (Q === T || Q === p) {
                        return B;
                    }
                }
            }, d = function (T) {
                return new Promise(function (p, h) {
                    var w = __webpack_require__.miniCssF(T), B = __webpack_require__.p + w;
                    if (E(w, B)) {
                        return p();
                    }
                    P(T, B, p, h);
                });
            };
        __webpack_require__.f.miniCss = function (T, p) {
            ;
            f[T] ? p.push(f[T]) : f[T] !== 0 && h[T] && p.push(f[T] = d(T).then(function () {
                f[T] = 0;
            }, function (w) {
                throw delete f[T], w;
            }));
        };
    }());
    (function () {
        ;
        __webpack_require__.f.j = function (f, T) {
            var p = __webpack_require__.o(P, f) ? P[f] : void 0;
            if (p !== 0) {
                if (p) {
                    T.push(p[2]);
                } else {
                    if (f != 982) {
                        var h = new Promise(function (z, M) {
                            p = P[f] = [
                                z,
                                M
                            ];
                        });
                        T.push(p[2] = h);
                        var w = __webpack_require__.p + __webpack_require__.u(f), B = new Error(), Q = function (z) {
                                if (__webpack_require__.o(P, f) && (p = P[f], p !== 0 && (P[f] = void 0), p)) {
                                    var M = z && (z.type === 'load' ? 'missing' : z.type), U = z && z.target && z.target.src;
                                    B.message = 'Loading chunk ' + f + ` failed.
(` + M + ': ' + U + ')';
                                    B.name = 'ChunkLoadError';
                                    B.type = M;
                                    B.request = U;
                                    p[1](B);
                                }
                            };
                        __webpack_require__.l(w, Q, 'chunk-' + f, f);
                    } else {
                        ;
                    }
                }
            }
        };
        var E = function (f, T) {
                var p = T[0], h = T[1], w = T[2], B, Q, z = 0;
                if (p.some(function (U) {
                        return P[U] !== 0;
                    })) {
                    for (B in h)
                        __webpack_require__.o(h, B) && (__webpack_require__.m[B] = h[B]);
                    if (w) {
                        var M = w(__webpack_require__);
                    }
                }
                for (f && f(T); z < p.length; z++) {
                    Q = p[z];
                    __webpack_require__.o(P, Q) && P[Q] && P[Q][0]();
                    P[p[z]] = 0;
                }
            }, d = self.webpackChunkweb = self.webpackChunkweb || [];
        d.forEach(E.bind(null, 0));
        d.push = E.bind(null, d.push.bind(d));
    }());
    ;
    (function () {
        'use strict';
        var P = __webpack_require__(144), E = function () {
                var Z = this, Ee = Z.$createElement, ue = Z._self._c || Ee;
                return Z.isExternal ? ue('div', Z._g({
                    staticClass: 'svg-external-icon svg-icon',
                    style: Z.styleExternalIcon
                }, Z.$listeners)) : ue('svg', Z._g({
                    class: Z.svgClass,
                    attrs: { 'aria-hidden': 'true' }
                }, Z.$listeners), [ue('use', { attrs: { 'xlink:href': Z.iconName } })]);
            }, d = [], f = function (Z) {
                return /^(https?:|mailto:|tel:)/.test(Z);
            }, T = {
                name: 'SvgIcon',
                props: {
                    iconClass: {
                        type: String,
                        required: true
                    },
                    className: {
                        type: String,
                        default: ''
                    }
                },
                computed: {
                    isExternal: function () {
                        return f(this.iconClass);
                    },
                    iconName: function () {
                        return '#icon-' + this.iconClass;
                    },
                    svgClass: function () {
                        return this.className ? 'svg-icon ' + this.className : 'svg-icon';
                    },
                    styleExternalIcon: function () {
                        return {
                            mask: 'url(' + this.iconClass + ') no-repeat 50% 50%',
                            '-webkit-mask': 'url(' + this.iconClass + ') no-repeat 50% 50%'
                        };
                    }
                }
            }, p = T, h = __webpack_require__(1900), w = (0, h.Z)(p, E, d, false, null, null, null), B = w.exports;
        P.Z.component('svg-icon', B);
        try {
            var Q = __webpack_require__(234), z = function (Z) {
                    return Z.keys().map(Z);
                };
            z(Q);
        } catch (Z) {
        }
        var M = function () {
                var Z = this, Ee = Z.$createElement, ue = Z._self._c || Ee;
                return ue('div', {
                    staticClass: 'wrap game-shop game-wrap credit-card credit-card-new',
                    attrs: { id: 'login-sdk-app' }
                }, [
                    ue('div', {
                        class: { 'pop-mode-box': Z.showModule !== 'bind-openid' },
                        style: { display: Z.getPasskeyRewardSuccess ? 'none' : 'block' }
                    }, [ue(Z.showModule, {
                            ref: 'childComponent',
                            tag: 'component',
                            attrs: {
                                'show-module': Z.showModule,
                                csrftoken: Z.csrftoken,
                                'key-version': Z.keyVersion,
                                language: Z.language,
                                'load-recaptcha-sdk': Z.hasLoadRecaptchaSdk,
                                lanres: Z.lanRes,
                                'handle-toast-msg': Z.handleToastMsg,
                                'post-complete': Z.postComplete,
                                'close-pop': Z.closePop,
                                'birth-validate': Z.birthValidate,
                                'checked-clause': Z.checkedClause,
                                'confirm-clause-handler': Z.confirmClauseHandler,
                                'third-party-login': Z.thirdPartyLogin,
                                'result-page-type': Z.resultPageType,
                                'third-party-type': Z.thirdPartyType,
                                'third-party-list': Z.thirdPartyList,
                                'link-account-error-code': Z.linkAccountErrorCode,
                                'is-step-confirm': Z.isStepConfirm,
                                'process-type': Z.processType,
                                'login-type': Z.loginType,
                                'page-config': Z.pageConfig,
                                birthday: Z.birthday,
                                source: Z.source,
                                'login-params': Z.loginParams,
                                'report-bucket-params': Z.reportBucketParams,
                                'direct-login': Z.directLogin,
                                'is-diff': Z.isDiff,
                                'third-login-error-info': Z.thirdLoginErrorInfo,
                                'report-source-params': Z.reportSourceParams,
                                'is-page-view': Z.isPageView,
                                'get-error-msg': Z.getErrorMsg,
                                'user-info-store': Z.userInfoStore,
                                'webauthn-info': Z.webauthnInfo,
                                'passkey-loading': Z.passkeyLoading,
                                'native-game-login-config': Z.nativeGameLoginConfig,
                                'show-loading': Z.showLoading,
                                'launch-app-status': Z.launchAppStatus,
                                'handle-app-login': Z.handleAppLogin,
                                'handle-login-user-info': Z.handleLoginUserInfo,
                                'show-passkey-reward': Z.showPasskeyReward,
                                'do-task-exec': Z.doTaskExec,
                                'passkey-reward-prize': Z.passkeyRewardPrize,
                                'game-login-extra-info': Z.gameLoginExtraInfo,
                                'is-game-login': Z.isGameLogin,
                                'is-mobile-landscape': Z.isMobileLandscape
                            },
                            on: {
                                'update:showModule': function (pe) {
                                    Z.showModule = pe;
                                },
                                'update:show-module': function (pe) {
                                    Z.showModule = pe;
                                },
                                'update:birthValidate': function (pe) {
                                    Z.birthValidate = pe;
                                },
                                'update:birth-validate': function (pe) {
                                    Z.birthValidate = pe;
                                },
                                'update:checkedClause': function (pe) {
                                    Z.checkedClause = pe;
                                },
                                'update:checked-clause': function (pe) {
                                    Z.checkedClause = pe;
                                },
                                'update:resultPageType': function (pe) {
                                    Z.resultPageType = pe;
                                },
                                'update:result-page-type': function (pe) {
                                    Z.resultPageType = pe;
                                },
                                'update:thirdPartyType': function (pe) {
                                    Z.thirdPartyType = pe;
                                },
                                'update:third-party-type': function (pe) {
                                    Z.thirdPartyType = pe;
                                },
                                'update:linkAccountErrorCode': function (pe) {
                                    Z.linkAccountErrorCode = pe;
                                },
                                'update:link-account-error-code': function (pe) {
                                    Z.linkAccountErrorCode = pe;
                                },
                                'update:isStepConfirm': function (pe) {
                                    Z.isStepConfirm = pe;
                                },
                                'update:is-step-confirm': function (pe) {
                                    Z.isStepConfirm = pe;
                                },
                                'update:processType': function (pe) {
                                    Z.processType = pe;
                                },
                                'update:process-type': function (pe) {
                                    Z.processType = pe;
                                },
                                'update:loginType': function (pe) {
                                    Z.loginType = pe;
                                },
                                'update:login-type': function (pe) {
                                    Z.loginType = pe;
                                },
                                'update:birthday': function (pe) {
                                    Z.birthday = pe;
                                },
                                'update:loginParams': function (pe) {
                                    Z.loginParams = pe;
                                },
                                'update:login-params': function (pe) {
                                    Z.loginParams = pe;
                                },
                                'update:isDiff': function (pe) {
                                    Z.isDiff = pe;
                                },
                                'update:is-diff': function (pe) {
                                    Z.isDiff = pe;
                                },
                                'update:thirdLoginErrorInfo': function (pe) {
                                    Z.thirdLoginErrorInfo = pe;
                                },
                                'update:third-login-error-info': function (pe) {
                                    Z.thirdLoginErrorInfo = pe;
                                },
                                'update:userInfoStore': function (pe) {
                                    Z.userInfoStore = pe;
                                },
                                'update:user-info-store': function (pe) {
                                    Z.userInfoStore = pe;
                                },
                                'update:webauthnInfo': function (pe) {
                                    Z.webauthnInfo = pe;
                                },
                                'update:webauthn-info': function (pe) {
                                    Z.webauthnInfo = pe;
                                },
                                'update:nativeGameLoginConfig': function (pe) {
                                    Z.nativeGameLoginConfig = pe;
                                },
                                'update:native-game-login-config': function (pe) {
                                    Z.nativeGameLoginConfig = pe;
                                },
                                'update:showLoading': function (pe) {
                                    Z.showLoading = pe;
                                },
                                'update:show-loading': function (pe) {
                                    Z.showLoading = pe;
                                },
                                'update:launchAppStatus': function (pe) {
                                    Z.launchAppStatus = pe;
                                },
                                'update:launch-app-status': function (pe) {
                                    Z.launchAppStatus = pe;
                                },
                                'update:gameLoginExtraInfo': function (pe) {
                                    Z.gameLoginExtraInfo = pe;
                                },
                                'update:game-login-extra-info': function (pe) {
                                    Z.gameLoginExtraInfo = pe;
                                }
                            }
                        })], 1),
                    Z._v(' '),
                    ue('div', {
                        staticClass: 'pop-mode-box',
                        style: { display: Z.showWebauthnFail ? 'block' : 'none' },
                        attrs: { id: 'pop-box' }
                    }, [ue('WebauthnSignUpFail', {
                            attrs: {
                                lanres: Z.lanRes,
                                handleClose: Z.handleCloseFail,
                                showModule: Z.showModule,
                                show: Z.showWebauthnFail,
                                webauthnInfo: Z.webauthnInfo
                            },
                            on: {
                                'update:showModule': function (pe) {
                                    Z.showModule = pe;
                                },
                                'update:show-module': function (pe) {
                                    Z.showModule = pe;
                                }
                            }
                        })], 1),
                    Z._v(' '),
                    ue('div', {
                        staticClass: 'pop-mode-box',
                        style: { display: Z.showLoading ? 'block' : 'none' },
                        attrs: { id: 'pop-box' }
                    }, [Z._m(0)]),
                    Z._v(' '),
                    ue('div', {
                        staticClass: 'pop-mode-box',
                        style: { display: Z.launchAppStatus === 'launching' ? 'block' : 'none' },
                        attrs: { id: 'pop-box' }
                    }, [ue('AppLaunching', {
                            attrs: {
                                show: Z.launchAppStatus === 'launching',
                                lanres: Z.lanRes,
                                nativeGameLoginConfig: Z.nativeGameLoginConfig,
                                launchAppStatus: Z.launchAppStatus,
                                processType: Z.processType,
                                showModule: Z.showModule,
                                resultPageType: Z.resultPageType,
                                handleToastMsg: Z.handleToastMsg,
                                postComplete: Z.postComplete,
                                gameLoginExtraInfo: Z.gameLoginExtraInfo,
                                'is-page-view': Z.isPageView
                            },
                            on: {
                                'update:launchAppStatus': function (pe) {
                                    Z.launchAppStatus = pe;
                                },
                                'update:launch-app-status': function (pe) {
                                    Z.launchAppStatus = pe;
                                },
                                'update:showModule': function (pe) {
                                    Z.showModule = pe;
                                },
                                'update:show-module': function (pe) {
                                    Z.showModule = pe;
                                },
                                'update:resultPageType': function (pe) {
                                    Z.resultPageType = pe;
                                },
                                'update:result-page-type': function (pe) {
                                    Z.resultPageType = pe;
                                },
                                'update:gameLoginExtraInfo': function (pe) {
                                    Z.gameLoginExtraInfo = pe;
                                },
                                'update:game-login-extra-info': function (pe) {
                                    Z.gameLoginExtraInfo = pe;
                                }
                            }
                        })], 1),
                    Z._v(' '),
                    ue('div', {
                        staticClass: 'pop-toast',
                        style: { display: Z.toastMsg ? 'block' : 'none' }
                    }, [Z._v(`
    ` + Z._s(Z.toastMsg) + `
  `)]),
                    Z._v(' '),
                    ue('div', {
                        staticClass: 'pop-mode-box',
                        style: { display: Z.getPasskeyRewardSuccess ? 'block' : 'none' },
                        attrs: { id: 'pop-box' }
                    }, [ue('ActivityAward', {
                            attrs: {
                                prize: Z.passkeyRewardPrize,
                                lanres: Z.lanRes,
                                handleClosePasskeyReward: Z.handleClosePasskeyReward
                            }
                        })], 1)
                ]);
            }, U = [function () {
                    var Z = this, Ee = Z.$createElement, ue = Z._self._c || Ee;
                    return ue('div', { staticClass: 'loading_wrap' }, [
                        ue('div', { staticClass: 'loading_icon' }, [ue('img', {
                                attrs: {
                                    src: 'https://cdn.midasbuy.com/images/loading-large.c5ac1db5.png',
                                    alt: ''
                                }
                            })]),
                        Z._v(' '),
                        ue('div', { staticClass: 'text' }, [Z._v('loading...')])
                    ]);
                }], G = __webpack_require__(7411), S = function (Z, Ee) {
                var ue = Z.origin, pe = Z.data, Ge;
                try {
                    Ge = JSON.parse(pe);
                } catch (It) {
                }
                ;
                if (!(!/(\.midasbuy\.com|\.360mobi\.vn|\.zing\.vn)$/.test(ue) && location.origin !== ue || !Ge)) {
                    var ot = Ge.action, nt = Ge.pageConfig;
                    Ee(ot, nt);
                }
            }, R = S, x = __webpack_require__(6229), g = __webpack_require__(6495), F = __webpack_require__(49), we = __webpack_require__(6065), Se = __webpack_require__(9853);
        function O() {
            var Z, Ee = (Z = window.matchMedia) === null || Z === void 0 ? void 0 : Z.call(window, '(orientation: landscape)');
            return !!(Ee == null ? void 0 : Ee.matches);
        }
        var y = __webpack_require__(9852), W = __webpack_require__(9457), V = __webpack_require__(8081), _ = __webpack_require__(5610), A = __webpack_require__(3922), N = __webpack_require__(9347), Ne = __webpack_require__(5099), te = __webpack_require__(2447), L = __webpack_require__(326), X = function () {
                return X = Object.assign || function (Z) {
                    for (var Ee, ue = 1, pe = arguments.length; ue < pe; ue++) {
                        Ee = arguments[ue];
                        for (var Ge in Ee)
                            Object.prototype.hasOwnProperty.call(Ee, Ge) && (Z[Ge] = Ee[Ge]);
                    }
                    return Z;
                }, X.apply(this, arguments);
            }, se = function (Z, Ee, ue, pe) {
                function Ge(me) {
                    return me instanceof ue ? me : new ue(function (ot) {
                        ot(me);
                    });
                }
                return new (ue || (ue = Promise))(function (me, ot) {
                    function nt(ht) {
                        try {
                            Pe(pe.next(ht));
                        } catch (Mt) {
                            ot(Mt);
                        }
                    }
                    function It(ht) {
                        try {
                            Pe(pe.throw(ht));
                        } catch (Mt) {
                            ot(Mt);
                        }
                    }
                    function Pe(ht) {
                        ht.done ? me(ht.value) : Ge(ht.value).then(nt, It);
                    }
                    Pe((pe = pe.apply(Z, Ee || [])).next());
                });
            }, ye = function (Z, Ee) {
                var ue = {
                        label: 0,
                        sent: function () {
                            if (me[0] & 1) {
                                throw me[1];
                            }
                            return me[1];
                        },
                        trys: [],
                        ops: []
                    }, pe, Ge, me, ot;
                return ot = {
                    next: nt(0),
                    throw: nt(1),
                    return: nt(2)
                }, typeof Symbol == 'function' && (ot[Symbol.iterator] = function () {
                    return this;
                }), ot;
                function nt(Pe) {
                    return function (ht) {
                        return It([
                            Pe,
                            ht
                        ]);
                    };
                }
                function It(Pe) {
                    if (pe) {
                        throw new TypeError('Generator is already executing.');
                    }
                    for (; ue;) {
                        try {
                            if (pe = 1, Ge && (me = Pe[0] & 2 ? Ge.return : Pe[0] ? Ge.throw || ((me = Ge.return) && me.call(Ge), 0) : Ge.next) && !(me = me.call(Ge, Pe[1])).done) {
                                return me;
                            }
                            switch (Ge = 0, me && (Pe = [
                                    Pe[0] & 2,
                                    me.value
                                ]), Pe[0]) {
                            case 0:
                            case 1:
                                me = Pe;
                                break;
                            case 4:
                                return ue.label++, {
                                    value: Pe[1],
                                    done: false
                                };
                            case 5:
                                ue.label++, Ge = Pe[1], Pe = [0];
                                continue;
                            case 7:
                                Pe = ue.ops.pop(), ue.trys.pop();
                                continue;
                            default:
                                if (me = ue.trys, !(me = me.length > 0 && me[me.length - 1]) && (Pe[0] === 6 || Pe[0] === 2)) {
                                    ue = 0;
                                    continue;
                                }
                                if (Pe[0] === 3 && (!me || Pe[1] > me[0] && Pe[1] < me[3])) {
                                    ue.label = Pe[1];
                                    break;
                                }
                                if (Pe[0] === 6 && ue.label < me[1]) {
                                    ue.label = me[1];
                                    me = Pe;
                                    break;
                                }
                                if (me && ue.label < me[2]) {
                                    ue.label = me[2];
                                    ue.ops.push(Pe);
                                    break;
                                }
                                me[2] && ue.ops.pop(), ue.trys.pop();
                                continue;
                            }
                            Pe = Ee.call(Z, ue);
                        } catch (ht) {
                            Pe = [
                                6,
                                ht
                            ];
                            Ge = 0;
                        } finally {
                            pe = me = 0;
                        }
                    }
                    if (Pe[0] & 5) {
                        throw Pe[1];
                    }
                    return {
                        value: Pe[0] ? Pe[1] : void 0,
                        done: true
                    };
                }
            }, ge, he = window.lanRes, xe = window.report, Ce = window.thirdPartyList, Oe = window.user, Ie = window.loginConfig, J = window.gameConfig, ce = Ie || {}, K = ce.passkeySignUpConfig, ie = ce.processTypeConfig, be = ie === void 0 ? {} : ie, ke = J || {}, Ve = ke.images, gt = ke.titleName, xt = gt === void 0 ? '' : gt, je = ke.gameShortUrl, Fe = K || {}, qe = Fe.showPasskeyAfterSignIn, Qe = qe === void 0 ? false : qe, ze = Fe.supportLoginType, wt = ze === void 0 ? [] : ze, _t = (0, G.default)(), Et = ((ge = location.hash) === null || ge === void 0 ? void 0 : ge.replace('#', '')) || '', it = Object.keys(be) || [], Rt = function (Z) {
                return it.reduce(function (Ee, ue) {
                    var pe, Ge = (pe = be == null ? void 0 : be[ue]) === null || pe === void 0 ? void 0 : pe[Z];
                    return Ge && (Ee[ue] = Ge), Ee;
                }, {});
            }, Wt = Rt('reportSource'), qt = window.activityConfig, oe = (0, L.Z)(te.Z).extend({
                mixins: [te.Z],
                components: {
                    Login: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(138),
                            __webpack_require__.e(914)
                        ]).then(__webpack_require__.bind(__webpack_require__, 9056));
                    },
                    SignUp: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(138),
                            __webpack_require__.e(914)
                        ]).then(__webpack_require__.bind(__webpack_require__, 9056));
                    },
                    SignUpNew: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(976),
                            __webpack_require__.e(322)
                        ]).then(__webpack_require__.bind(__webpack_require__, 322));
                    },
                    SignIn: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(773)
                        ]).then(__webpack_require__.bind(__webpack_require__, 9773));
                    },
                    CheckEmail: function () {
                        return __webpack_require__.e(474).then(__webpack_require__.bind(__webpack_require__, 4474));
                    },
                    FoundPassword: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(316)
                        ]).then(__webpack_require__.bind(__webpack_require__, 9316));
                    },
                    ThirdPartyAddInfo: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(976),
                            __webpack_require__.e(224)
                        ]).then(__webpack_require__.bind(__webpack_require__, 3224));
                    },
                    ConfirmLinkAccount: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(621)
                        ]).then(__webpack_require__.bind(__webpack_require__, 9621));
                    },
                    LinkAccount: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(138),
                            __webpack_require__.e(746)
                        ]).then(__webpack_require__.bind(__webpack_require__, 4746));
                    },
                    ResultPage: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(394)
                        ]).then(__webpack_require__.bind(__webpack_require__, 3394));
                    },
                    CompleteEmailAccount: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(154)
                        ]).then(__webpack_require__.bind(__webpack_require__, 9154));
                    },
                    BindOpenid: function () {
                        return __webpack_require__.e(607).then(__webpack_require__.bind(__webpack_require__, 2607));
                    },
                    ActiveEmailLink: function () {
                        return __webpack_require__.e(408).then(__webpack_require__.bind(__webpack_require__, 6408));
                    },
                    ApplicationLogin: function () {
                        return __webpack_require__.e(784).then(__webpack_require__.bind(__webpack_require__, 5784));
                    },
                    LipassLogin: function () {
                        return __webpack_require__.e(164).then(__webpack_require__.bind(__webpack_require__, 164));
                    },
                    ChangePassword: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(816)
                        ]).then(__webpack_require__.bind(__webpack_require__, 9816));
                    },
                    ChangeEmail: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(874)
                        ]).then(__webpack_require__.bind(__webpack_require__, 2874));
                    },
                    LipassJoint: function () {
                        return __webpack_require__.e(846).then(__webpack_require__.bind(__webpack_require__, 7846));
                    },
                    LipassSignUp: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(976),
                            __webpack_require__.e(683)
                        ]).then(__webpack_require__.bind(__webpack_require__, 1683));
                    },
                    WebauthnSignUp: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(492)
                        ]).then(__webpack_require__.bind(__webpack_require__, 2492));
                    },
                    WebauthnResult: function () {
                        return __webpack_require__.e(189).then(__webpack_require__.bind(__webpack_require__, 9189));
                    },
                    NativeGameLogin: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(987)
                        ]).then(__webpack_require__.bind(__webpack_require__, 9987));
                    },
                    WebauthnSignUpFaq: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(397)
                        ]).then(__webpack_require__.bind(__webpack_require__, 8945));
                    },
                    AccountTips: function () {
                        return __webpack_require__.e(927).then(__webpack_require__.bind(__webpack_require__, 8927));
                    },
                    GameTicketAccountTips: function () {
                        return __webpack_require__.e(347).then(__webpack_require__.bind(__webpack_require__, 6347));
                    },
                    GameTicketActive: function () {
                        return Promise.all([
                            __webpack_require__.e(854),
                            __webpack_require__.e(406)
                        ]).then(__webpack_require__.bind(__webpack_require__, 2406));
                    },
                    WebauthnSignUpFail: function () {
                        return __webpack_require__.e(256).then(__webpack_require__.bind(__webpack_require__, 8256));
                    },
                    AppLaunching: function () {
                        return __webpack_require__.e(587).then(__webpack_require__.bind(__webpack_require__, 5587));
                    },
                    NativeGameLoginFail: function () {
                        return __webpack_require__.e(591).then(__webpack_require__.bind(__webpack_require__, 6591));
                    },
                    ActivityAward: function () {
                        return __webpack_require__.e(199).then(__webpack_require__.bind(__webpack_require__, 6199));
                    }
                },
                data: function () {
                    return {
                        showModule: Et || 'login',
                        csrftoken: '',
                        keyVersion: '',
                        language: '',
                        hasLoadRecaptchaSdk: false,
                        lanRes: he,
                        toastMsg: '',
                        toastTimer: null,
                        birthValidate: false,
                        checkedClause: false,
                        loading: false,
                        resultPageType: '',
                        thirdPartyType: _t.thirdPartyType || (Oe == null ? void 0 : Oe.providerType) || 'facebook',
                        thirdPartyList: Ce,
                        linkAccountErrorCode: '',
                        birthday: '',
                        isStepConfirm: false,
                        processType: 'email',
                        loginType: 'login',
                        pageConfig: {},
                        source: Et === 'authorize-login' || Et === 'authorize-confirm' ? 'third-party' : 'midasbuy',
                        loginParams: {},
                        isDiff: false,
                        thirdLoginErrorInfo: {},
                        isMobile: (0, Se.Z)(true),
                        userInfoStore: {
                            username: '',
                            password: '',
                            activeCode: '',
                            country: '',
                            timezone: '',
                            language: '',
                            type: '',
                            csrftoken: '',
                            keyVersion: '',
                            subscribeChecked: false,
                            loginSuccessUserData: null,
                            email: '',
                            name: '',
                            avatarUrl: ''
                        },
                        webauthnInfo: {
                            resultType: 'success',
                            passkeyName: '',
                            fromResult: false,
                            sourceInfo: {},
                            showFailPop: false,
                            errorCounter: 0
                        },
                        hasShowPasskey: false,
                        homePageViewTime: null,
                        loginSource: '',
                        passkeyLoading: false,
                        reportBucketParams: {},
                        nativeGameLoginConfig: {
                            titleName: xt,
                            gameBackgroundUrl: Ve == null ? void 0 : Ve.loginBackground,
                            gameLogoUrl: Ve == null ? void 0 : Ve.logo,
                            showGameLogin: false,
                            gameShortName: je
                        },
                        gameLoginExtraInfo: {
                            startTime: 0,
                            isFromNativeGameLogin: false,
                            isFromReLogin: false
                        },
                        showLoading: false,
                        launchAppStatus: 'notLaunched',
                        showPasskeyReward: false,
                        getPasskeyRewardSuccess: false,
                        passkeyRewardPrize: {},
                        handleClosePasskeyReward: function () {
                        },
                        isMobileLandscape: (0, Se.Z)() && O()
                    };
                },
                watch: {
                    gameLoginProps: {
                        handler: function (Z) {
                            Z && this.handleNativeGameLoginConfig();
                        },
                        immediate: true,
                        deep: true
                    },
                    showModule: {
                        handler: function (Z) {
                            Z && (location.hash = '#' + Z);
                        },
                        immediate: false
                    },
                    reportProps: {
                        handler: function (Z) {
                            var Ee = Z.module, ue = Z.pageView;
                            Ee && ue && this.handleReport();
                            [
                                'login',
                                'sign-up'
                            ].includes(Ee) && ue && (this.homePageViewTime = Date.now());
                            ue || (this.isDiff = false);
                        },
                        deep: true,
                        immediate: true
                    }
                },
                computed: {
                    isGameLogin: function () {
                        var Z, Ee, ue;
                        return !!((Ee = (Z = this.pageConfig) === null || Z === void 0 ? void 0 : Z.gameLoginInfo) === null || Ee === void 0 ? void 0 : Ee.authType) && !((ue = this.gameLoginExtraInfo) === null || ue === void 0 ? void 0 : ue.isFromReLogin);
                    },
                    isBindToCurrentAccount: function () {
                        return this.processType === 'addThirdParty';
                    },
                    showWebauthnFail: function () {
                        var Z;
                        return (Z = this.webauthnInfo) === null || Z === void 0 ? void 0 : Z.showFailPop;
                    },
                    isSupportGameLogin: function () {
                        var Z = this.currentAppid;
                        if (!Z) {
                            return false;
                        }
                        var Ee = this.getGameThirdPartyInfo();
                        if (!Ee) {
                            return false;
                        }
                        var ue = (this.gameLoginExtraInfo || {}).isFromReLogin;
                        return (0, V.JC)({
                            thirdPartyInfo: Ee,
                            gameAppId: Z,
                            hideGameLogin: ue
                        });
                    },
                    currentAppid: function () {
                        var Z, Ee, ue, pe = (0, G.default)(((Z = parent == null ? void 0 : parent.location) === null || Z === void 0 ? void 0 : Z.href) || window.location.href);
                        return (pe == null ? void 0 : pe.appid) || ((Ee = this.pageConfig) === null || Ee === void 0 ? void 0 : Ee.appid) || ((ue = window.__PAY_INFO) === null || ue === void 0 ? void 0 : ue.appid);
                    },
                    isPageView: function () {
                        var Z;
                        return (Z = this.pageConfig) === null || Z === void 0 ? void 0 : Z.report;
                    },
                    reportProps: function () {
                        return {
                            module: this.showModule,
                            pageView: this.isPageView
                        };
                    },
                    gameLoginProps: function () {
                        return {
                            currentAppid: this.currentAppid,
                            isPageView: this.isPageView
                        };
                    },
                    reportSourceParams: function () {
                        var Z;
                        return {
                            situation: ((Z = this.pageConfig) === null || Z === void 0 ? void 0 : Z.from) || '',
                            source: Wt[this.processType] || this.processType || ''
                        };
                    }
                },
                created: function () {
                    var Z = this;
                    document.body.addEventListener('touchmove', function (ue) {
                        Z.isDiff && ue.preventDefault();
                    }, { passive: false });
                    window.addEventListener('message', function (ue) {
                        Z.onMessage(ue);
                    });
                    window.addEventListener('hashchange', function () {
                        Z.switchModule(location.hash.slice(1));
                    });
                    var Ee = 'orientationchange' in window ? 'orientationchange' : 'resize';
                    window.addEventListener(Ee, function () {
                        var ue = (0, Se.Z)() && O();
                        ue !== Z.isMobileLandscape && (Z.isMobileLandscape = ue);
                    });
                },
                methods: {
                    getSchemeUrl: function () {
                        var Z, Ee, ue;
                        return se(this, void 0, void 0, function () {
                            var pe, Ge, me, ot, nt, It, Pe, ht, Mt, Nt, jt, Gt, cr;
                            return ye(this, function (Xt) {
                                switch (Xt.label) {
                                case 0:
                                    return Xt.trys.push([
                                        0,
                                        4,
                                        ,
                                        5
                                    ]), pe = window.country, Ge = pe === void 0 ? 'sg' : pe, me = (this.nativeGameLoginConfig || {}).authType, me !== 'app' ? [
                                        3,
                                        3
                                    ] : (ot = (window.midasbuyDeviceInfo || {}).browserName, nt = {
                                        Chrome: 'chrome',
                                        Safari: 'safari',
                                        Firefox: 'firefox',
                                        'Mobile Safari': 'safari'
                                    }, It = ((Z = top == null ? void 0 : top.location) === null || Z === void 0 ? void 0 : Z.href) || 'https://' + location.hostname + '/', Pe = {
                                        country: Ge,
                                        offer_id: (Ee = this.nativeGameLoginConfig) === null || Ee === void 0 ? void 0 : Ee.appid,
                                        redirect_url: It,
                                        browser: nt[ot] || '',
                                        is_link_midas: !!this.isBindToCurrentAccount,
                                        start_time: (ue = this.gameLoginExtraInfo) === null || ue === void 0 ? void 0 : ue.startTime
                                    }, [
                                        4,
                                        (0, F.B)(Pe)
                                    ]);
                                case 1:
                                    return ht = Xt.sent(), [
                                        4,
                                        we.Z.getAppGameLink(ht)
                                    ];
                                case 2:
                                    return Mt = Xt.sent(), Nt = (Mt == null ? void 0 : Mt.data) || {}, jt = Nt.data, Gt = Nt.ret, Gt === 0 ? [
                                        2,
                                        (jt == null ? void 0 : jt.app_game_link) || ''
                                    ] : [
                                        2,
                                        ''
                                    ];
                                case 3:
                                    return [
                                        2,
                                        ''
                                    ];
                                case 4:
                                    return cr = Xt.sent(), [
                                        2,
                                        ''
                                    ];
                                case 5:
                                    return [2];
                                }
                            });
                        });
                    },
                    handleAppLogin: function () {
                        return se(this, void 0, void 0, function () {
                            var Z, Ee;
                            return ye(this, function (ue) {
                                switch (ue.label) {
                                case 0:
                                    return ue.trys.push([
                                        0,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        this.getSchemeUrl()
                                    ];
                                case 1:
                                    return Z = ue.sent(), Z ? (this.showLoading = true, this.launchAppStatus = 'launching', [
                                        4,
                                        Ne.Z.launch(Z)
                                    ]) : [2];
                                case 2:
                                    return ue.sent(), Ne.Z.getLaunchStatus(), this.showLoading = false, [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return Ee = ue.sent(), this.launchAppStatus = 'notLaunched', this.showLoading = false, [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return [2];
                                }
                            });
                        });
                    },
                    getGameThirdPartyInfo: function () {
                        var Z = this;
                        return Ce == null ? void 0 : Ce.find(function (Ee) {
                            return Ee.appid === Z.currentAppid && Ee.type === 'NativeGameLogin';
                        });
                    },
                    handleNativeGameLoginConfig: function () {
                        if (this.isSupportGameLogin) {
                            var Z = this.getGameThirdPartyInfo();
                            this.nativeGameLoginConfig = X(X(X(X({}, this.nativeGameLoginConfig), Z), (Z == null ? void 0 : Z.sdkConfig) || {}), { showGameLogin: true });
                        }
                    },
                    handleLoginUserInfo: function () {
                        var Z, Ee, ue;
                        return se(this, void 0, void 0, function () {
                            var pe, Ge;
                            return ye(this, function (me) {
                                switch (me.label) {
                                case 0:
                                    return me.trys.push([
                                        0,
                                        4,
                                        ,
                                        5
                                    ]), [
                                        4,
                                        g.Z.getLoginInfo()
                                    ];
                                case 1:
                                    return pe = me.sent(), (pe == null ? void 0 : pe.ret) !== 0 ? [
                                        3,
                                        3
                                    ] : (this.userInfoStore = X(X({}, this.userInfoStore), { loginSuccessUserData: ((Z = pe == null ? void 0 : pe.data) === null || Z === void 0 ? void 0 : Z.user) || null }), ((ue = (Ee = pe == null ? void 0 : pe.data) === null || Ee === void 0 ? void 0 : Ee.user) === null || ue === void 0 ? void 0 : ue.uid) ? [
                                        4,
                                        this.handleCheckTaskStatus()
                                    ] : [
                                        3,
                                        3
                                    ]);
                                case 2:
                                    me.sent(), me.label = 3;
                                case 3:
                                    return [
                                        3,
                                        5
                                    ];
                                case 4:
                                    return Ge = me.sent(), [
                                        3,
                                        5
                                    ];
                                case 5:
                                    return [2];
                                }
                            });
                        });
                    },
                    checkTaskStatus: function () {
                        var Z;
                        return se(this, void 0, void 0, function () {
                            var Ee, ue;
                            return ye(this, function (pe) {
                                switch (pe.label) {
                                case 0:
                                    return pe.trys.push([
                                        0,
                                        2,
                                        ,
                                        3
                                    ]), [
                                        4,
                                        this.queryTaskStatus()
                                    ];
                                case 1:
                                    return Ee = pe.sent(), (Ee == null ? void 0 : Ee.state) === te.b.CAN_RECEIVE && (this.showPasskeyReward = true, this.passkeyRewardPrize = (Z = Ee == null ? void 0 : Ee.prizeList) === null || Z === void 0 ? void 0 : Z[0]), [
                                        3,
                                        3
                                    ];
                                case 2:
                                    return ue = pe.sent(), [
                                        3,
                                        3
                                    ];
                                case 3:
                                    return [2];
                                }
                            });
                        });
                    },
                    handleCheckTaskStatus: function () {
                        var Z, Ee, ue, pe, Ge, me, ot, nt;
                        return se(this, void 0, void 0, function () {
                            var It, Pe, ht;
                            return ye(this, function (Mt) {
                                switch (Mt.label) {
                                case 0:
                                    return It = qt || {}, Pe = It.login_activity_list, ht = It.mp_app_id, this.initTaskModel({
                                        activityId: (Z = Pe == null ? void 0 : Pe[0]) === null || Z === void 0 ? void 0 : Z.activity_id,
                                        appId: ht,
                                        userId: (ue = (Ee = this.userInfoStore) === null || Ee === void 0 ? void 0 : Ee.loginSuccessUserData) === null || ue === void 0 ? void 0 : ue.uid,
                                        userType: 'midasbuy',
                                        appTaskMetaData: {},
                                        loginState: {
                                            appid: (Ge = (pe = this.userInfoStore) === null || pe === void 0 ? void 0 : pe.loginSuccessUserData) === null || Ge === void 0 ? void 0 : Ge.appid,
                                            token: (ot = (me = this.userInfoStore) === null || me === void 0 ? void 0 : me.loginSuccessUserData) === null || ot === void 0 ? void 0 : ot.token
                                        },
                                        taskModel: {
                                            mp_model_conf: { mp_sub_activity_id: (nt = Pe == null ? void 0 : Pe[0]) === null || nt === void 0 ? void 0 : nt.sub_activity_id },
                                            mp_task_box_conf: [{}]
                                        }
                                    }), [
                                        4,
                                        this.checkTaskStatus()
                                    ];
                                case 1:
                                    return Mt.sent(), [2];
                                }
                            });
                        });
                    },
                    handleCloseFail: function () {
                        this.webauthnInfo = X(X({}, this.webauthnInfo), { showFailPop: false });
                    },
                    handlePageConfig: function (Z) {
                        var Ee;
                        Z === void 0 && (Z = {});
                        this.pageConfig = Z;
                        var ue = Z.processType, pe = Z.thirdPartyType;
                        it.includes(ue) && (this.processType = ue, this.handleResultPageType(ue));
                        !pe && ((Ee = Z == null ? void 0 : Z.gameLoginInfo) === null || Ee === void 0 ? void 0 : Ee.authType) === 'gameTicket' ? this.thirdPartyType = je + '-ticket' : this.thirdPartyType = pe || (Oe == null ? void 0 : Oe.providerType) || 'facebook';
                    },
                    handleResultPageType: function (Z) {
                        if (this.showModule === 'result-page') {
                            var Ee = Object.keys(Rt('showResultInCallbackPage')), ue = Rt('resultPageType');
                            (Ee == null ? void 0 : Ee.includes(Z)) && (this.resultPageType = ue == null ? void 0 : ue[Z]);
                        }
                    },
                    onMessage: function (Z) {
                        var Ee = this;
                        R(Z, function (ue, pe) {
                            switch (ue) {
                            case 'changePageConfig':
                                Ee.handlePageConfig(pe);
                                break;
                            default:
                                break;
                            }
                        });
                    },
                    confirmClauseHandler: function () {
                        this.checkedClause = true;
                        this.thirdPartyLogin();
                    },
                    directLogin: function (Z) {
                        var Ee = this, ue, pe, Ge = Z || {}, me = Ge.needInfoParams, ot = me === void 0 ? true : me, nt = Ge.newSourceToken, It = this, Pe = It.processType, ht = It.pageConfig, Mt = It.thirdPartyType, Nt = (be == null ? void 0 : be[Pe]) || {}, jt = Nt.sourceToken, Gt = Nt.directLoginModule, cr = Nt.hideResultPageInDirectLogin, Xt = Nt.resultPageType, ir = {
                                csrftoken: this.csrftoken,
                                source: nt || jt
                            }, Yt = (Ie || {}).birthdayYearInterval, dr = Yt === void 0 ? 5 : Yt, Tr = {
                                region: ((ue = this.userInfoStore) === null || ue === void 0 ? void 0 : ue.country) || '',
                                birthdate: (0, V.xA)((pe = this.userInfoStore) === null || pe === void 0 ? void 0 : pe.birthday, dr)
                            }, Lr = sessionStorage == null ? void 0 : sessionStorage.getItem(W.x), Qt = {
                                endpoint_type: this.isMobile ? 'h5' : 'pc',
                                token: Lr || ''
                            };
                        ot && Object.assign(ir, Tr);
                        Mt === y.SN && Object.assign(ir, Qt);
                        this.loading = true;
                        (0, F.B)(ir).then(function (Sr) {
                            we.Z.directLogin(Sr).then(function (Pr) {
                                Ee.loading = false;
                                var an = Pr.data || {}, Gr = an.ret, sn = an.data, $n = sn === void 0 ? {} : sn, qn = function () {
                                        var Wr, Jn = ((Wr = ht == null ? void 0 : ht.gameLoginInfo) === null || Wr === void 0 ? void 0 : Wr.authType) || Mt || '';
                                        if (cr) {
                                            return Ee.postComplete({
                                                status: 200,
                                                action: Xt,
                                                source: Mt
                                            });
                                        }
                                        if (Pe == null ? void 0 : Pe.endsWith('Exist')) {
                                            return Ee.postComplete({
                                                status: 200,
                                                action: Jn + 'LoginSuccess',
                                                source: Mt
                                            });
                                        }
                                        Ee.resultPageType = Xt;
                                        Ee.showModule = 'result-page';
                                    };
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem([
                                    'complete-email-account',
                                    'confirm-link-account'
                                ].includes(Gt) ? 'complete_account' : 'third_register', 'agree', true, {
                                    result_info: Gr === 0 ? 'success' : 'failed',
                                    result_code: Gr
                                });
                                Gr === 0 ? qn() : Gr === 1003 ? we.Z.verifyInit($n.verifycode_url, function (Wr) {
                                    Sr.ticket = Wr;
                                    Ee.submitRegister(Sr, 'login');
                                }) : (Ee.handleToastMsg({ ret: Gr }), Ee.thirdPartyType === y.SN && Ee.closePop({ successType: 'closeIframe' }));
                            }).catch(function () {
                                Ee.loading = false;
                            });
                        });
                    },
                    switchModule: function (Z) {
                        this.showModule = Z;
                    },
                    initParams: function () {
                        var Z, Ee, ue;
                        this.csrftoken = (Z = document.querySelector('#csrftoken')) === null || Z === void 0 ? void 0 : Z.getAttribute('value');
                        this.keyVersion = (Ee = document.querySelector('#keyVersion')) === null || Ee === void 0 ? void 0 : Ee.getAttribute('value');
                        this.language = (ue = document.querySelector('#language')) === null || ue === void 0 ? void 0 : ue.getAttribute('value');
                    },
                    loadRecaptchaSdkCallback: function () {
                        this.hasLoadRecaptchaSdk = true;
                    },
                    getErrorMsg: function (Z) {
                        var Ee = (he || {}).errorMsgMap;
                        return (Ee == null ? void 0 : Ee[Z]) || (Ee == null ? void 0 : Ee.default) || '';
                    },
                    handleToastMsg: function (Z) {
                        var Ee = this, ue = Z.ret, pe = Z.msg, Ge = pe === void 0 ? '' : pe, me = Z.timeout, ot = me === void 0 ? 3500 : me, nt = (he || {}).errorMsgMap, It = ue && !(nt == null ? void 0 : nt[ue]) && !Ge && (nt == null ? void 0 : nt.default);
                        this.toastTimer && clearTimeout(this.toastTimer);
                        var Pe = ue ? (nt == null ? void 0 : nt[ue]) || Ge || (nt == null ? void 0 : nt.default) : Ge;
                        this.toastMsg = It ? Pe + ' (' + ue + ')' : Pe;
                        this.toastTimer = setTimeout(function () {
                            Ee.toastMsg = '';
                        }, ot);
                    },
                    shouldBindOpenidAfterLogin: function () {
                        if (!window.__PAY_INFO.appid || this.pageConfig.noBindAfterLogin) {
                            return false;
                        }
                        if (_t.bindAfterLogin || this.pageConfig.bindAfterLogin) {
                            return true;
                        }
                        var Z = Ie.bindOpenidReferrerRegExpList;
                        if (Z) {
                            return Z.some(function (Ee) {
                                return new RegExp(Ee).test(document.referrer);
                            });
                        }
                    },
                    isFromActivity: function () {
                        var Z, Ee = Ie.activityPageReferrerRegExpList, ue = this.pageConfig;
                        return ((Z = ue == null ? void 0 : ue.from) === null || Z === void 0 ? void 0 : Z.startsWith('pagedoo-Activity')) ? true : Ee ? Ee.some(function (pe) {
                            return new RegExp(pe).test(document.referrer);
                        }) : false;
                    },
                    shouldShowWebauthnSignUp: function (Z) {
                        var Ee;
                        return ((Ee = this.pageConfig) === null || Ee === void 0 ? void 0 : Ee.from) === 'easy-login' || this.isFromActivity() ? false : Qe && wt.includes(Z) && (0, V.kN)({ appid: this.currentAppid });
                    },
                    shouldShowLipSignUp: function (Z) {
                        var Ee;
                        return ((Ee = this.pageConfig) === null || Ee === void 0 ? void 0 : Ee.from) !== 'easy-login' && !this.hasShowPasskey && !this.isFromActivity() && [
                            'email',
                            'google'
                        ].includes(Z);
                    },
                    handleLipSignUpAfterLoginSuccess: function (Z) {
                        var Ee, ue, pe;
                        return se(this, void 0, void 0, function () {
                            var Ge, me, ot, nt, It, Pe, ht, Mt, Nt, jt, Gt, cr, Xt, ir, Yt;
                            return ye(this, function (dr) {
                                switch (dr.label) {
                                case 0:
                                    return dr.trys.push([
                                        0,
                                        5,
                                        ,
                                        6
                                    ]), Ge = this.currentAppid, me = ((Ee = this.userInfoStore) === null || Ee === void 0 ? void 0 : Ee.username) || '', me ? [
                                        3,
                                        2
                                    ] : [
                                        4,
                                        g.Z.getLoginInfo()
                                    ];
                                case 1:
                                    ot = dr.sent(), me = (ot == null ? void 0 : ot.ret) === 0 ? (pe = (ue = ot == null ? void 0 : ot.data) === null || ue === void 0 ? void 0 : ue.user) === null || pe === void 0 ? void 0 : pe.email : '', dr.label = 2;
                                case 2:
                                    return (0, V.CG)(Ge, me) ? [
                                        4,
                                        (0, F.B)({})
                                    ] : [
                                        2,
                                        false
                                    ];
                                case 3:
                                    return nt = dr.sent(), [
                                        4,
                                        we.Z.getLipByEmail(nt)
                                    ];
                                case 4:
                                    if (It = dr.sent(), Pe = It.data || {}, ht = Pe.ret, Mt = Pe.data, Nt = Mt || {}, jt = Nt.is_create, Gt = Nt.is_link, cr = Nt.email, Xt = Nt.avatarUrl, ir = Nt.username, ht === 0) {
                                        if ((jt || Gt) && (this.showModule = 'lipass-joint', (0, A.Z)(W.v + '_' + me, { flag: true }), this.userInfoStore = X(X({}, this.userInfoStore), {
                                                email: cr,
                                                name: ir,
                                                avatarUrl: Xt,
                                                loginSuccessUserData: Z || null
                                            })), jt) {
                                            return this.processType = 'createLipass', [
                                                2,
                                                true
                                            ];
                                        }
                                        if (Gt) {
                                            return this.processType = 'addLipassWithEmail', [
                                                2,
                                                true
                                            ];
                                        }
                                    }
                                    return [
                                        2,
                                        false
                                    ];
                                case 5:
                                    return Yt = dr.sent(), xe == null || xe.custom('handleLipSignUpAfterLoginSuccess_error', { error: Yt == null ? void 0 : Yt.message }), [
                                        2,
                                        false
                                    ];
                                case 6:
                                    return [2];
                                }
                            });
                        });
                    },
                    postComplete: function (Z) {
                        return se(this, void 0, void 0, function () {
                            var Ee, ue, pe, Ge, me, ot, nt, It, Pe, ht = this;
                            return ye(this, function (Mt) {
                                switch (Mt.label) {
                                case 0:
                                    return Ee = Z.action, ue = Z.user, pe = Z.source, Ge = Ee && ![
                                        'registerSuccess',
                                        'activeSuccess',
                                        'linkSuccess'
                                    ].includes(Ee), pe && Ge && (this.loginSource = pe), this.shouldShowWebauthnSignUp(pe) ? [
                                        4,
                                        N.k === null || N.k === void 0 ? void 0 : N.k.getPasskeyInfoList()
                                    ] : [
                                        3,
                                        2
                                    ];
                                case 1:
                                    if (me = Mt.sent() || [], !me.length) {
                                        return this.userInfoStore = X(X({}, this.userInfoStore), { loginSuccessUserData: ue || null }), this.switchModule('webauthn-sign-up'), this.hasShowPasskey = true, [2];
                                    }
                                    ot = (window.midasbuyDeviceInfo || {}).deviceName, nt = ot === void 0 ? '' : ot, N.k === null || N.k === void 0 || N.k.saveCredentialId(me == null ? void 0 : me.filter(function (Nt) {
                                        return Nt.device_name === nt;
                                    }).map(function (Nt) {
                                        return Nt.credential_id;
                                    })), Mt.label = 2;
                                case 2:
                                    return this.loginSource && (_.ZP === null || _.ZP === void 0 || _.ZP.emit('login_success_manually', {
                                        component_info: {
                                            compo_ext: { login_type: this.loginSource },
                                            compo_id: 'login_success'
                                        },
                                        source_info: { trigger_point: this.loginSource },
                                        result_info: '' + (Date.now() - Number(this.homePageViewTime)),
                                        event_code: 'login_success'
                                    }, true), this.loginSource = ''), this.shouldShowLipSignUp(pe) ? [
                                        4,
                                        this.handleLipSignUpAfterLoginSuccess(ue)
                                    ] : [
                                        3,
                                        4
                                    ];
                                case 3:
                                    if (It = Mt.sent(), It) {
                                        return [2];
                                    }
                                    Mt.label = 4;
                                case 4:
                                    return Pe = [
                                        'msdkLoginSuccess',
                                        'loginSuccess',
                                        'facebookLoginSuccess',
                                        'googleLoginSuccess',
                                        'lipassLoginSuccess',
                                        'registerSuccess',
                                        'resetSuccess',
                                        'activeSuccess',
                                        'linkSuccess'
                                    ], this.shouldBindOpenidAfterLogin() && !(ue == null ? void 0 : ue.currentBindUser) && Pe.includes(Ee) ? [
                                        2,
                                        g.Z.getLoginInfo().then(function (Nt) {
                                            if (Nt.ret === 0) {
                                                var jt = Nt.data.user || {};
                                                g.Z.setUserData(jt);
                                                var Gt = jt.currentBindUser;
                                                Gt ? (Z.user = jt, ht.postComplete(Z)) : ht.switchModule('bind-openid');
                                            }
                                        })
                                    ] : (Ee === 'activeSuccess' || Ee === 'linkSuccess' || Ee === 'facebookLoginSuccess' ? (this.thirdPartyType === y.SN && (Z.action = 'lipassLoginSuccess'), g.Z.bindGameOpenid(function () {
                                        ht.postMessage(Z);
                                    })) : this.postMessage(Z), [2]);
                                }
                            });
                        });
                    },
                    postMessage: function (Z) {
                        window.parent && window.parent.postMessage(JSON.stringify(Z), '*');
                    },
                    closePop: function (Z) {
                        var Ee = (Z || {}).successType, ue = Ee === void 0 ? 'closeIframe' : Ee;
                        xe.click('close');
                        this.postComplete({
                            status: 200,
                            action: ue
                        });
                    },
                    handlePassKeyLogin: function (Z) {
                        var Ee, ue;
                        return se(this, void 0, void 0, function () {
                            var pe, Ge, me, ot, nt, It = this;
                            return ye(this, function (Pe) {
                                switch (Pe.label) {
                                case 0:
                                    return Pe.trys.push([
                                        0,
                                        5,
                                        ,
                                        6
                                    ]), this.passkeyLoading ? [2] : (this.passkeyLoading = true, [
                                        4,
                                        N.k.handleLogin()
                                    ]);
                                case 1:
                                    return Pe.sent(), this.passkeyLoading = false, [
                                        4,
                                        this.handleLoginUserInfo()
                                    ];
                                case 2:
                                    return Pe.sent(), this.showPasskeyReward ? [
                                        4,
                                        this.doTaskExec()
                                    ] : [
                                        3,
                                        4
                                    ];
                                case 3:
                                    if (pe = Pe.sent(), pe.state === te.b.RECEIVED) {
                                        return _.ZP === null || _.ZP === void 0 || _.ZP.exposureModule('create_passkey_success', 'receive_points_success'), this.getPasskeyRewardSuccess = true, this.handleClosePasskeyReward = function () {
                                            It.getPasskeyRewardSuccess = false;
                                            It.showPasskeyReward = false;
                                            It.postComplete({
                                                status: 200,
                                                action: 'loginSuccess',
                                                source: Z
                                            });
                                        }, [2];
                                    }
                                    _.ZP === null || _.ZP === void 0 || _.ZP.exposureModule('create_passkey_success', 'receive_points_fail'), Pe.label = 4;
                                case 4:
                                    return this.postComplete({
                                        status: 200,
                                        action: 'loginSuccess',
                                        source: Z
                                    }), [
                                        3,
                                        6
                                    ];
                                case 5:
                                    return Ge = Pe.sent(), me = Ge || {}, ot = me.code, nt = me.message, _.ZP === null || _.ZP === void 0 || _.ZP.emit('login_passkey_error', {
                                        component_info: {
                                            compo_ext: {
                                                ret: '' + (ot || ''),
                                                msg: nt || '',
                                                login_type: Z
                                            },
                                            compo_id: 'login_passkey_error'
                                        },
                                        event_code: 'custom'
                                    }), this.handleToastMsg({
                                        ret: ot,
                                        msg: ((ue = (Ee = this.lanRes) === null || Ee === void 0 ? void 0 : Ee.errorMsgMap) === null || ue === void 0 ? void 0 : ue.passkeyLoginDefault) || ''
                                    }), this.passkeyLoading = false, [
                                        3,
                                        6
                                    ];
                                case 6:
                                    return [2];
                                }
                            });
                        });
                    },
                    handleNativeGameLogin: function () {
                        return se(this, void 0, void 0, function () {
                            var Z;
                            return ye(this, function (Ee) {
                                switch (Ee.label) {
                                case 0:
                                    return Z = (this.nativeGameLoginConfig || {}).authType, Z === 'app' && !this.isBindToCurrentAccount ? [
                                        4,
                                        this.handleAppLogin()
                                    ] : [
                                        3,
                                        2
                                    ];
                                case 1:
                                    Ee.sent(), Ee.label = 2;
                                case 2:
                                    return this.showModule = 'native-game-login', [2];
                                }
                            });
                        });
                    },
                    thirdPartyLogin: function (Z) {
                        var Ee, ue, pe;
                        return se(this, void 0, void 0, function () {
                            var Ge, me, ot, nt, It, Pe, ht, Mt, Nt, jt, Gt, cr, Xt, ir, Yt, dr = this;
                            return ye(this, function (Tr) {
                                return Ge = Z.loginType, me = Ge === void 0 ? 'login' : Ge, ot = Z.thirdPartyType, nt = ot === void 0 ? 'facebook' : ot, It = Z.redirectUrl, Pe = It === void 0 ? '' : It, ht = Z.type, Mt = ht === void 0 ? '' : ht, Nt = Z.isFromGameRecommend, jt = Nt === void 0 ? false : Nt, Gt = Z.sourceToken, cr = Gt === void 0 ? '' : Gt, Xt = Z.action, ir = this.thirdPartyType, jt ? _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', 'login_' + nt, true, { result_info: 'pending' }) : _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', nt, true, { result_info: 'pending' }), Mt === 'NativeGameLogin' ? (this.handleNativeGameLogin(), this.gameLoginExtraInfo = X(X({}, this.gameLoginExtraInfo), { startTime: Math.floor(Date.now() / 1000) }), this.thirdPartyType = nt, [2]) : [
                                    'passkey',
                                    'passkey_tips',
                                    'login_passkey',
                                    'login_passkey_auto'
                                ].includes(nt) ? (this.handlePassKeyLogin(nt), [2]) : nt === y.SN ? (this.thirdPartyType = y.SN, xe.click('lipass_' + me, { situation: ((Ee = this.pageConfig) === null || Ee === void 0 ? void 0 : Ee.from) || '' }), [
                                    2,
                                    this.switchModule('lipass-login')
                                ]) : (Yt = nt === 'google' ? 'google' : 'fb', xe.click(Yt + '_' + me, { situation: ((ue = this.pageConfig) === null || ue === void 0 ? void 0 : ue.from) || '' }), !this.hasLoadRecaptchaSdk || this.loading ? [2] : (this.loginType = me, this.thirdPartyType = nt, this.loading = true, g.Z.thirdPartyLogin({
                                    thirdPartyType: nt,
                                    context: this,
                                    redirectUrl: Pe,
                                    source: cr,
                                    action: Xt,
                                    gameThirdPartyType: ir,
                                    processType: this.processType,
                                    failCallback: function () {
                                        dr.postComplete({
                                            status: 200,
                                            action: 'confirmLinkFail',
                                            errorCode: '10011'
                                        });
                                    }
                                }, ((pe = this.pageConfig) === null || pe === void 0 ? void 0 : pe.from) || ''), [2]));
                            });
                        });
                    },
                    handleReport: function () {
                        ;
                        [
                            'registerSuccess',
                            'resetSuccess'
                        ].includes(this.resultPageType) || ('register-reset-result-pop' = 'link_successful');
                        this.thirdPartyType === 'google' && ('link_login-existing-account' = 'link_existing-account-google');
                        this.thirdPartyType === 'lipass' && ('link_same-acount-google' = 'link_same-acount-lip');
                        this.processType === 'reset' && 'activate-pop';
                        var Ee = Z[this.showModule] || 'login-pop', ue = { situation: this.pageConfig.from || '' };
                        [
                            'check-email',
                            'result-page',
                            'complete-email-account',
                            'active-email-link',
                            'third-party-add-info'
                        ].includes(this.showModule) && (ue.source = Wt[this.processType] || this.processType);
                        ue = X(X({}, ue), this.reportBucketParams);
                        xe.view(Ee, ue);
                        xe.setPage(Ee);
                        this.showModule === 'login' && (_.ZP === null || _.ZP === void 0 || _.ZP.exposureModule('login', '', true));
                    }
                },
                mounted: function () {
                    this.postMessage({
                        status: 200,
                        action: 'iframeLoad'
                    });
                    (0, x.A)(this.loadRecaptchaSdkCallback);
                    this.initParams();
                }
            }), Ke = oe, mt = (0, h.Z)(Ke, M, U, false, null, null, null), et = mt.exports, q = __webpack_require__(5926), Te = __webpack_require__(1391), $e = function () {
                return $e = Object.assign || function (Z) {
                    for (var Ee, ue = 1, pe = arguments.length; ue < pe; ue++) {
                        Ee = arguments[ue];
                        for (var Ge in Ee)
                            Object.prototype.hasOwnProperty.call(Ee, Ge) && (Z[Ge] = Ee[Ge]);
                    }
                    return Z;
                }, $e.apply(this, arguments);
            }, rt = function (Z, Ee, ue, pe) {
                function Ge(me) {
                    return me instanceof ue ? me : new ue(function (ot) {
                        ot(me);
                    });
                }
                return new (ue || (ue = Promise))(function (me, ot) {
                    function nt(ht) {
                        try {
                            Pe(pe.next(ht));
                        } catch (Mt) {
                            ot(Mt);
                        }
                    }
                    function It(ht) {
                        try {
                            Pe(pe.throw(ht));
                        } catch (Mt) {
                            ot(Mt);
                        }
                    }
                    function Pe(ht) {
                        ht.done ? me(ht.value) : Ge(ht.value).then(nt, It);
                    }
                    Pe((pe = pe.apply(Z, Ee || [])).next());
                });
            }, St = function (Z, Ee) {
                var ue = {
                        label: 0,
                        sent: function () {
                            if (me[0] & 1) {
                                throw me[1];
                            }
                            return me[1];
                        },
                        trys: [],
                        ops: []
                    }, pe, Ge, me, ot;
                return ot = {
                    next: nt(0),
                    throw: nt(1),
                    return: nt(2)
                }, typeof Symbol == 'function' && (ot[Symbol.iterator] = function () {
                    return this;
                }), ot;
                function nt(Pe) {
                    return function (ht) {
                        return It([
                            Pe,
                            ht
                        ]);
                    };
                }
                function It(Pe) {
                    if (pe) {
                        throw new TypeError('Generator is already executing.');
                    }
                    for (; ue;) {
                        try {
                            if (pe = 1, Ge && (me = Pe[0] & 2 ? Ge.return : Pe[0] ? Ge.throw || ((me = Ge.return) && me.call(Ge), 0) : Ge.next) && !(me = me.call(Ge, Pe[1])).done) {
                                return me;
                            }
                            switch (Ge = 0, me && (Pe = [
                                    Pe[0] & 2,
                                    me.value
                                ]), Pe[0]) {
                            case 0:
                            case 1:
                                me = Pe;
                                break;
                            case 4:
                                return ue.label++, {
                                    value: Pe[1],
                                    done: false
                                };
                            case 5:
                                ue.label++, Ge = Pe[1], Pe = [0];
                                continue;
                            case 7:
                                Pe = ue.ops.pop(), ue.trys.pop();
                                continue;
                            default:
                                if (me = ue.trys, !(me = me.length > 0 && me[me.length - 1]) && (Pe[0] === 6 || Pe[0] === 2)) {
                                    ue = 0;
                                    continue;
                                }
                                if (Pe[0] === 3 && (!me || Pe[1] > me[0] && Pe[1] < me[3])) {
                                    ue.label = Pe[1];
                                    break;
                                }
                                if (Pe[0] === 6 && ue.label < me[1]) {
                                    ue.label = me[1];
                                    me = Pe;
                                    break;
                                }
                                if (me && ue.label < me[2]) {
                                    ue.label = me[2];
                                    ue.ops.push(Pe);
                                    break;
                                }
                                me[2] && ue.ops.pop(), ue.trys.pop();
                                continue;
                            }
                            Pe = Ee.call(Z, ue);
                        } catch (ht) {
                            Pe = [
                                6,
                                ht
                            ];
                            Ge = 0;
                        } finally {
                            pe = me = 0;
                        }
                    }
                    if (Pe[0] & 5) {
                        throw Pe[1];
                    }
                    return {
                        value: Pe[0] ? Pe[1] : void 0,
                        done: true
                    };
                }
            }, pt = function (Z) {
                return new Promise(function (Ee, ue) {
                    (0, q.Z)(Z, function (pe) {
                        pe ? Ee(pe) : ue(new Error('loadScript ' + Z + ' fail: ' + pe));
                    });
                });
            }, yt = function () {
                return pt('/xmidas-sdk.js');
            }, zt = function () {
                return new Promise(function (Z) {
                    var Ee = setInterval(function () {
                        return rt(void 0, void 0, void 0, function () {
                            return St(this, function (ue) {
                                return window.xMidas && (clearInterval(Ee), (0, Te.L)(), Z()), [2];
                            });
                        });
                    }, 50);
                });
            }, Jt = function (Z, Ee) {
                return Ee === void 0 && (Ee = {}), P.Z.config.productionTip = false, new P.Z($e($e({}, Ee), {
                    render: function (ue) {
                        return ue(Z);
                    }
                })).$mount('#app');
            }, Mr = __webpack_require__(7567), kr = __webpack_require__(2238), Kt = function (Z, Ee, ue, pe) {
                function Ge(me) {
                    return me instanceof ue ? me : new ue(function (ot) {
                        ot(me);
                    });
                }
                return new (ue || (ue = Promise))(function (me, ot) {
                    function nt(ht) {
                        try {
                            Pe(pe.next(ht));
                        } catch (Mt) {
                            ot(Mt);
                        }
                    }
                    function It(ht) {
                        try {
                            Pe(pe.throw(ht));
                        } catch (Mt) {
                            ot(Mt);
                        }
                    }
                    function Pe(ht) {
                        ht.done ? me(ht.value) : Ge(ht.value).then(nt, It);
                    }
                    Pe((pe = pe.apply(Z, Ee || [])).next());
                });
            }, fr = function (Z, Ee) {
                var ue = {
                        label: 0,
                        sent: function () {
                            if (me[0] & 1) {
                                throw me[1];
                            }
                            return me[1];
                        },
                        trys: [],
                        ops: []
                    }, pe, Ge, me, ot;
                return ot = {
                    next: nt(0),
                    throw: nt(1),
                    return: nt(2)
                }, typeof Symbol == 'function' && (ot[Symbol.iterator] = function () {
                    return this;
                }), ot;
                function nt(Pe) {
                    return function (ht) {
                        return It([
                            Pe,
                            ht
                        ]);
                    };
                }
                function It(Pe) {
                    if (pe) {
                        throw new TypeError('Generator is already executing.');
                    }
                    for (; ue;) {
                        try {
                            if (pe = 1, Ge && (me = Pe[0] & 2 ? Ge.return : Pe[0] ? Ge.throw || ((me = Ge.return) && me.call(Ge), 0) : Ge.next) && !(me = me.call(Ge, Pe[1])).done) {
                                return me;
                            }
                            switch (Ge = 0, me && (Pe = [
                                    Pe[0] & 2,
                                    me.value
                                ]), Pe[0]) {
                            case 0:
                            case 1:
                                me = Pe;
                                break;
                            case 4:
                                return ue.label++, {
                                    value: Pe[1],
                                    done: false
                                };
                            case 5:
                                ue.label++, Ge = Pe[1], Pe = [0];
                                continue;
                            case 7:
                                Pe = ue.ops.pop(), ue.trys.pop();
                                continue;
                            default:
                                if (me = ue.trys, !(me = me.length > 0 && me[me.length - 1]) && (Pe[0] === 6 || Pe[0] === 2)) {
                                    ue = 0;
                                    continue;
                                }
                                if (Pe[0] === 3 && (!me || Pe[1] > me[0] && Pe[1] < me[3])) {
                                    ue.label = Pe[1];
                                    break;
                                }
                                if (Pe[0] === 6 && ue.label < me[1]) {
                                    ue.label = me[1];
                                    me = Pe;
                                    break;
                                }
                                if (me && ue.label < me[2]) {
                                    ue.label = me[2];
                                    ue.ops.push(Pe);
                                    break;
                                }
                                me[2] && ue.ops.pop(), ue.trys.pop();
                                continue;
                            }
                            Pe = Ee.call(Z, ue);
                        } catch (ht) {
                            Pe = [
                                6,
                                ht
                            ];
                            Ge = 0;
                        } finally {
                            pe = me = 0;
                        }
                    }
                    if (Pe[0] & 5) {
                        throw Pe[1];
                    }
                    return {
                        value: Pe[0] ? Pe[1] : void 0,
                        done: true
                    };
                }
            };
        function nr() {
            var Z;
            return Kt(this, void 0, void 0, function () {
                var Ee, ue, pe, Ge, me, ot, nt, It, Pe, ht, Mt, Nt, jt, Gt, cr, Xt = this;
                return fr(this, function (ir) {
                    switch (ir.label) {
                    case 0:
                        return ir.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), Ee = (Z = new kr.UAParser()) === null || Z === void 0 ? void 0 : Z.getResult(), ue = Ee || {}, pe = ue.device, Ge = ue.os, me = ue.browser, ot = pe || {}, nt = ot.vendor, It = ot.model, Pe = (Ge == null ? void 0 : Ge.name) || '', Pe === 'Mac OS' && (Pe = 'macOS'), ht = function () {
                            return Kt(Xt, void 0, void 0, function () {
                                var Yt, dr, Tr, Lr;
                                return fr(this, function (Qt) {
                                    switch (Qt.label) {
                                    case 0:
                                        return Qt.trys.push([
                                            0,
                                            2,
                                            ,
                                            3
                                        ]), [
                                            4,
                                            (Lr = (Tr = window.navigator.userAgentData) === null || Tr === void 0 ? void 0 : Tr.getHighEntropyValues) === null || Lr === void 0 ? void 0 : Lr.call(Tr, [
                                                'model',
                                                'platform',
                                                'platformVersion'
                                            ])
                                        ];
                                    case 1:
                                        return Yt = Qt.sent() || {}, [
                                            2,
                                            Yt
                                        ];
                                    case 2:
                                        return dr = Qt.sent(), [
                                            2,
                                            {}
                                        ];
                                    case 3:
                                        return [2];
                                    }
                                });
                            });
                        }, [
                            4,
                            ht()
                        ];
                    case 1:
                        return Mt = ir.sent(), Nt = (Mt || {}).model, jt = Nt || It || '', Gt = function () {
                            return nt && jt ? nt + '_' + jt : '' + Pe;
                        }, [
                            2,
                            {
                                deviceName: Gt(),
                                osName: Pe,
                                browserName: (me == null ? void 0 : me.name) || '',
                                browserVersion: (me == null ? void 0 : me.version) || '',
                                device: pe,
                                os: Ge,
                                newModel: jt
                            }
                        ];
                    case 2:
                        return cr = ir.sent(), [
                            3,
                            3
                        ];
                    case 3:
                        return [2];
                    }
                });
            });
        }
        function yr(Z) {
            var Ee = Z || {}, ue = Ee.completeStr, pe = ue === void 0 ? '' : ue, Ge = Ee.endsWithStr, me = Ge === void 0 ? '' : Ge, ot = pe.match(new RegExp('^(.*?)' + me));
            return ot ? ot[1] : '';
        }
        var Ur = function (Z, Ee, ue, pe) {
                function Ge(me) {
                    return me instanceof ue ? me : new ue(function (ot) {
                        ot(me);
                    });
                }
                return new (ue || (ue = Promise))(function (me, ot) {
                    function nt(ht) {
                        try {
                            Pe(pe.next(ht));
                        } catch (Mt) {
                            ot(Mt);
                        }
                    }
                    function It(ht) {
                        try {
                            Pe(pe.throw(ht));
                        } catch (Mt) {
                            ot(Mt);
                        }
                    }
                    function Pe(ht) {
                        ht.done ? me(ht.value) : Ge(ht.value).then(nt, It);
                    }
                    Pe((pe = pe.apply(Z, Ee || [])).next());
                });
            }, Br = function (Z, Ee) {
                var ue = {
                        label: 0,
                        sent: function () {
                            if (me[0] & 1) {
                                throw me[1];
                            }
                            return me[1];
                        },
                        trys: [],
                        ops: []
                    }, pe, Ge, me, ot;
                return ot = {
                    next: nt(0),
                    throw: nt(1),
                    return: nt(2)
                }, typeof Symbol == 'function' && (ot[Symbol.iterator] = function () {
                    return this;
                }), ot;
                function nt(Pe) {
                    return function (ht) {
                        return It([
                            Pe,
                            ht
                        ]);
                    };
                }
                function It(Pe) {
                    if (pe) {
                        throw new TypeError('Generator is already executing.');
                    }
                    for (; ue;) {
                        try {
                            if (pe = 1, Ge && (me = Pe[0] & 2 ? Ge.return : Pe[0] ? Ge.throw || ((me = Ge.return) && me.call(Ge), 0) : Ge.next) && !(me = me.call(Ge, Pe[1])).done) {
                                return me;
                            }
                            switch (Ge = 0, me && (Pe = [
                                    Pe[0] & 2,
                                    me.value
                                ]), Pe[0]) {
                            case 0:
                            case 1:
                                me = Pe;
                                break;
                            case 4:
                                return ue.label++, {
                                    value: Pe[1],
                                    done: false
                                };
                            case 5:
                                ue.label++, Ge = Pe[1], Pe = [0];
                                continue;
                            case 7:
                                Pe = ue.ops.pop(), ue.trys.pop();
                                continue;
                            default:
                                if (me = ue.trys, !(me = me.length > 0 && me[me.length - 1]) && (Pe[0] === 6 || Pe[0] === 2)) {
                                    ue = 0;
                                    continue;
                                }
                                if (Pe[0] === 3 && (!me || Pe[1] > me[0] && Pe[1] < me[3])) {
                                    ue.label = Pe[1];
                                    break;
                                }
                                if (Pe[0] === 6 && ue.label < me[1]) {
                                    ue.label = me[1];
                                    me = Pe;
                                    break;
                                }
                                if (me && ue.label < me[2]) {
                                    ue.label = me[2];
                                    ue.ops.push(Pe);
                                    break;
                                }
                                me[2] && ue.ops.pop(), ue.trys.pop();
                                continue;
                            }
                            Pe = Ee.call(Z, ue);
                        } catch (ht) {
                            Pe = [
                                6,
                                ht
                            ];
                            Ge = 0;
                        } finally {
                            pe = me = 0;
                        }
                    }
                    if (Pe[0] & 5) {
                        throw Pe[1];
                    }
                    return {
                        value: Pe[0] ? Pe[1] : void 0,
                        done: true
                    };
                }
            };
        (0, Mr.Hz)();
        _.ZP.init();
        _.ZP.setFromSource('loginSdk');
        var ar = window.parent !== window;
        yt().then(function () {
            return zt();
        }).then(function () {
            return Ur(void 0, void 0, void 0, function () {
                var Z, Ee, ue, pe, Ge, me, ot, nt, It, Pe, ht, Mt;
                return Br(this, function (Nt) {
                    switch (Nt.label) {
                    case 0:
                        return Nt.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), [
                            4,
                            __webpack_require__.e(982).then(__webpack_require__.t.bind(__webpack_require__, 2982, 23))
                        ];
                    case 1:
                        return Z = Nt.sent(), Ee = (It = Z) === null || It === void 0 ? void 0 : It.default, window.absStore = Ee ? new Ee() : {}, [
                            3,
                            3
                        ];
                    case 2:
                        return ue = Nt.sent(), window.absStore = {}, [
                            3,
                            3
                        ];
                    case 3:
                        if (!ar) {
                            return [2];
                        }
                        Nt.label = 4;
                    case 4:
                        return Nt.trys.push([
                            4,
                            6,
                            ,
                            7
                        ]), pe = window, [
                            4,
                            (ht = (Pe = window.PublicKeyCredential) === null || Pe === void 0 ? void 0 : Pe.isUserVerifyingPlatformAuthenticatorAvailable) === null || ht === void 0 ? void 0 : ht.call(Pe)
                        ];
                    case 5:
                        return pe.isPlatformSupportPasskey = Nt.sent() || false, [
                            3,
                            7
                        ];
                    case 6:
                        return Ge = Nt.sent(), _.ZP === null || _.ZP === void 0 || _.ZP.emit('passkey_catch_error', {
                            component_info: {
                                compo_id: 'passkey_catch_error',
                                compo_ext: { msg: (Ge == null ? void 0 : Ge.message) || '' }
                            },
                            event_code: 'custom'
                        }), [
                            3,
                            7
                        ];
                    case 7:
                        return Nt.trys.push([
                            7,
                            9,
                            ,
                            10
                        ]), me = window, [
                            4,
                            nr()
                        ];
                    case 8:
                        return me.midasbuyDeviceInfo = Nt.sent(), [
                            3,
                            10
                        ];
                    case 9:
                        return ot = Nt.sent(), _.ZP === null || _.ZP === void 0 || _.ZP.emit('device_info_catch_error', {
                            component_info: {
                                compo_id: 'device_info_catch_error',
                                compo_ext: { msg: (ot == null ? void 0 : ot.message) || '' }
                            },
                            event_code: 'custom'
                        }), [
                            3,
                            10
                        ];
                    case 10:
                        return nt = (Mt = Jt(et).$children) === null || Mt === void 0 ? void 0 : Mt[0], window.__ThirdPartyLoginCallback = function (jt) {
                            var Gt, cr, Xt, ir, Yt, dr, Tr, Lr, Qt = jt.callbackType, Sr = jt.errorCode, Pr = jt.gameSdkConfig, an = yr({
                                    completeStr: Qt,
                                    endsWithStr: 'LoginSuccess'
                                });
                            if (an || Qt === 'gameLinkSuccess') {
                                var Gr = !!(Pr == null ? void 0 : Pr.authType), sn = Gr ? Pr == null ? void 0 : Pr.gameName : an;
                                nt.postComplete({
                                    status: 200,
                                    action: Qt,
                                    source: sn,
                                    gameSdkConfig: Pr
                                });
                                return;
                            }
                            switch (Qt) {
                            case 'loginSuccess':
                            case 'activeSuccess':
                            case 'linkSuccess':
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', '', true, {
                                    result_info: 'success',
                                    situation: ((Gt = nt.pageConfig) === null || Gt === void 0 ? void 0 : Gt.from) || ''
                                }), nt.postComplete({
                                    status: 200,
                                    action: Qt
                                });
                                break;
                            case 'linkFail':
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', 'link_fail', true, {
                                    result_info: 'failed',
                                    situation: ((cr = nt.pageConfig) === null || cr === void 0 ? void 0 : cr.from) || '',
                                    status: 'link_failed'
                                }), nt.linkAccountErrorCode = Sr || '', nt.showModule = 'link-account';
                                break;
                            case 'gameLinkFail':
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', 'game_link_fail', true, {
                                    result_info: 'failed',
                                    situation: ((Xt = nt.pageConfig) === null || Xt === void 0 ? void 0 : Xt.from) || '',
                                    status: 'game_link_failed'
                                }), nt.postComplete({
                                    status: 200,
                                    action: 'gameLinkFail',
                                    errorCode: Sr,
                                    gameSdkConfig: Pr
                                });
                                break;
                            case 'gameLinkThirdPartyFail':
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', 'game_link_third_party_fail', true, {
                                    result_info: 'failed',
                                    situation: ((ir = nt.pageConfig) === null || ir === void 0 ? void 0 : ir.from) || '',
                                    status: 'game_link_third_party_failed'
                                }), nt.linkAccountErrorCode = Sr || '';
                                break;
                            case 'gameLoginFail':
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', 'game_login_fail', true, {
                                    result_info: 'failed',
                                    situation: ((Yt = nt.pageConfig) === null || Yt === void 0 ? void 0 : Yt.from) || '',
                                    status: 'game_login_failed'
                                }), nt.postComplete({
                                    status: 200,
                                    action: 'gameLoginFail',
                                    errorCode: Sr,
                                    gameSdkConfig: Pr
                                });
                                break;
                            case 'confirmLinkFail':
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', 'confirm_link', true, {
                                    result_info: 'failed',
                                    situation: ((dr = nt.pageConfig) === null || dr === void 0 ? void 0 : dr.from) || '',
                                    status: 'confirm_link_failed'
                                }), nt.postComplete({
                                    status: 200,
                                    action: 'confirmLinkFail',
                                    errorCode: Sr
                                });
                                break;
                            case 'tofLoginFail':
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', 'tof', true, {
                                    result_info: 'failed',
                                    situation: ((Tr = nt.pageConfig) === null || Tr === void 0 ? void 0 : Tr.from) || '',
                                    status: 'tof_login_failed'
                                }), nt.thirdLoginErrorInfo = {
                                    errorCode: Sr,
                                    type: 'toweroffantasy'
                                };
                                break;
                            case 'otherFail':
                                _.ZP === null || _.ZP === void 0 || _.ZP.clickItem('login', 'other', true, {
                                    result_info: 'failed',
                                    situation: ((Lr = nt.pageConfig) === null || Lr === void 0 ? void 0 : Lr.from) || '',
                                    status: 'other_failed'
                                }), nt.postComplete({
                                    status: 200,
                                    action: 'otherFail',
                                    errorCode: Sr
                                });
                                break;
                            default:
                                break;
                            }
                        }, window.__LOGINSUCCESSCALLBACK__ = function () {
                            nt.postMessage({
                                status: 200,
                                action: 'facebookLoginSuccess'
                            });
                        }, window.switchModule = function (jt) {
                            nt.switchModule(jt);
                        }, [2];
                    }
                });
            });
        });
    }());
}());
