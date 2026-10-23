# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\Products\\CMFPlone\\browser\\login\\templates\\login.pt'

__tokens = {574: ('view/label | nothing', 18, 29), 1096: ('context/@@ploneform-macros/titlelessform', 31, 37), 1096: ('context/@@ploneform-macros/titlelessform', 31, 37), 1224: ('context/@@plone_portal_state', 34, 43), 1294: (' portal_state/portal_ur', 35, 40), 1508: ('string:${portal_url}/@@login-help', 38, 62), 1660: ('python:view.self_registration_enabled()', 40, 36), 1859: ('string:${portal_url}/@@register', 42, 60), 287: ('context/@@main_template/macros/master', 7, 23), 287: ('context/@@main_template/macros/master', 7, 23)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from collections import deque as _deque
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_3082716150352 = {}
_static_3082718928976 = {'class': 'login-wrapper'}
_static_3082718933200 = {'class': 'card'}
_static_3082718774736 = {'class': 'card-body'}
_static_3082718785616 = {'class': 'card-title h5'}
_static_3082711100752 = __compile_zt_expr
_static_3082711090512 = __C2ZContextWrapper
_static_3082719173328 = {'id': 'login-form'}
_static_3082742384016 = {'class': 'alert alert-danger pat-cookietrigger', 'style': 'display:none'}
_static_3082742078160 = {}
_static_3082717598032 = {}
_static_3082740043280 = {}
_static_3082740050128 = 'titlelessform'
_static_3082718152272 = __compile_zt_expr
_static_3082718159952 = __C2ZContextWrapper
_static_3082718166608 = {'class': 'footer mt-4'}
_static_3082741777232 = __compile_zt_expr
_static_3082740369680 = __C2ZContextWrapper
_static_3082718575824 = __compile_zt_expr
_static_3082718575376 = __C2ZContextWrapper
_static_3082741694352 = {}
_static_3082740779088 = {}
_static_3082742534352 = {'href': '@@login-help'}
_static_3082717407440 = __compile_zt_expr
_static_3082717410960 = __C2ZContextWrapper
_static_3082717717520 = {}
_static_3082741894224 = __compile_zt_expr
_static_3082741901840 = __C2ZContextWrapper
_static_3082741906768 = {}
_static_3082743515536 = {'href': '@@register', 'class': 'emph'}
_static_3082740877840 = __compile_zt_expr
_static_3082740879440 = __C2ZContextWrapper
_static_3082741608976 = {}
_static_3082741215120 = 'master'
_static_3082740140560 = {}
_static_3082718979408 = __compile_zt_expr
_static_3082718983824 = __C2ZContextWrapper
import re
import functools
from itertools import chain as __chain
from sys import intern
__default = intern('__default__')
__marker = object()
g_re_amp = re.compile('&(?!([A-Za-z]+|#[0-9]+);)')
g_re_needs_escape = re.compile('[&<>\\"\\\']').search
__re_whitespace = functools.partial(re.compile('\\s+').sub, ' ')

def initialize(modules, nothing, tales, zope_version_6_2_0_):

    def render_main(__stream, econtext, rcontext, __i18n_domain=None, __i18n_context=None, target_language=None):
        __append = __stream.append
        __re_amp = g_re_amp
        __token = None
        __re_needs_escape = g_re_needs_escape

        def __convert(target):
            if target is None:
                return
            __tt = type(target)
            if __tt is bytes:
                target = decode(target)
            elif __tt is not str:
                if __tt is int or __tt is float:
                    target = str(target)
                else:
                    __markup = getattr(target, '__html__', None)
                    if __markup is None:
                        __converted = translate(target, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                        target = str(target) if target is __converted else __converted
                    else:
                        target = __markup()
            return target

        def __quote(target, quote, quote_entity, default, default_marker):
            if target is None:
                return
            if target is default_marker:
                return default
            __tt = type(target)
            if __tt is bytes:
                target = decode(target)
            elif __tt is not str:
                if __tt is int or __tt is float:
                    return str(target)
                __markup = getattr(target, '__html__', None)
                if __markup is None:
                    __converted = translate(target, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                    target = str(target) if target is __converted else __converted
                else:
                    return __markup()
            if target is not None:
                try:
                    escape = __re_needs_escape(target) is not None
                except TypeError:
                    pass
                else:
                    if escape:
                        if '&' in target:
                            target = target.replace('&', '&amp;')
                        if '<' in target:
                            target = target.replace('<', '&lt;')
                        if '>' in target:
                            target = target.replace('>', '&gt;')
                        if quote is not None and quote in target:
                            target = target.replace(quote, quote_entity)
            return target
        translate = econtext['__translate']
        decode = econtext['__decode']
        on_error_handler = econtext['__on_error_handler']
        try:
            getname = econtext.get_name
            get = econtext.get
            # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082717107792
            __attrs_3082717107792 = _static_3082716150352
            __append('\n\n      ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='login-wrapper', kind=None)]) name=None at 2cdbda41050> -> __attrs_3082716147728
            __attrs_3082716147728 = _static_3082718928976
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="login-wrapper">\n\n        ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card', kind=None)]) name=None at 2cdc0337d50> -> __attrs_3082740961360
            __attrs_3082740961360 = _static_3082718933200
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="card">\n          ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card-body', kind=None)]) name=None at 2cdc1ae1a50> -> __attrs_3082740965328
            __attrs_3082740965328 = _static_3082718774736
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="card-body">\n            ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card-title h5', kind=None)]) name=None at 2cdc1ae27d0> -> __attrs_3082740968848
            __attrs_3082740968848 = _static_3082718785616
            # <h1 ... (0:0)
            # --------------------------------------------------------
            __append('<h1 class="card-title h5">')
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082740966352
            __default_3082740966352 = _DEFAULT_MARKER
            # <Value 'view/label | nothing' (18:29)> -> __cache_3082740965840
            __token = 574
            try:
                __zt_tmp = __attrs_3082740968848
            except NameError:
                __zt_tmp = None
            __cache_3082740965840 = _static_3082711100752('path', 'view/label | nothing', econtext=econtext)(_static_3082711090512(econtext, __zt_tmp))
            # <BinOp left=<Value 'view/label | nothing' (18:29)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 2cdba95ac10> at 2cdc0241c50> -> __condition
            __expression = __cache_3082740965840
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                pass
            else:
                __content = __cache_3082740965840
                __content = __quote(__content, None, '\xad', None, None)
                if __content is not None:
                    __append(__content)
            __append('</h1>\n\n            ')
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='login-form', kind=None)]) name=None at 2cdc1ae3150> -> __attrs_3082740971280
            __attrs_3082740971280 = _static_3082719173328
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div id="login-form">\n\n              ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='style', kind=None)], values=[Constant(value='alert alert-danger pat-cookietrigger', kind=None), Constant(value='display:none', kind=None)]) name=None at 2cdc1ae3f10> -> __attrs_3082676467024
            __attrs_3082676467024 = _static_3082742384016
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="alert alert-danger pat-cookietrigger" style="display:none">\n                ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082676469200
            __attrs_3082676469200 = _static_3082742078160
            # <strong ... (0:0)
            # --------------------------------------------------------
            __append('<strong>')
            __stream_3082685032656 = []
            __append_3082685032656 = __stream_3082685032656.append
            __append_3082685032656('\n                  Error\n                ')
            __msgid_3082685032656 = __re_whitespace(''.join(__stream_3082685032656)).strip()
            if __msgid_3082685032656:
                __append(translate(__msgid_3082685032656, mapping=None, default=__msgid_3082685032656, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</strong>\n                ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082676461264
            __attrs_3082676461264 = _static_3082717598032
            __stream_3082676460688 = []
            __append_3082676460688 = __stream_3082676460688.append
            __append_3082676460688('\n                  Cookies are not enabled. You must enable cookies before you can log in.\n                ')
            __msgid_3082676460688 = __re_whitespace(''.join(__stream_3082676460688)).strip()
            __append(translate('enable_cookies_message_before_login', mapping=None, default=__msgid_3082676460688, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('\n              </div>\n              ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082687908496
            __attrs_3082687908496 = _static_3082740043280
            __backup_macroname_3082740972288 = get('macroname', __marker)
            # <Static value=Constant(value='titlelessform', kind=None) name=None at 2cdbe848f50> -> __value
            __value = _static_3082740050128
            econtext['macroname'] = __value
            # <Value 'context/@@ploneform-macros/titlelessform' (31:37)> -> __macro
            __token = 1096
            try:
                __zt_tmp = __attrs_3082687908496
            except NameError:
                __zt_tmp = None
            __macro = _static_3082718152272('path', 'context/@@ploneform-macros/titlelessform', econtext=econtext)(_static_3082718159952(econtext, __zt_tmp))
            __token = 1096
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_3082740972288 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_3082740972288
            __append('\n\n              ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='footer mt-4', kind=None)]) name=None at 2cdbe849350> -> __attrs_3082687913296
            __attrs_3082687913296 = _static_3082718166608
            __backup_portal_state_3082709677952 = get('portal_state', __marker)
            # <Value 'context/@@plone_portal_state' (34:43)> -> __value
            __token = 1224
            try:
                __zt_tmp = __attrs_3082687913296
            except NameError:
                __zt_tmp = None
            __value = _static_3082741777232('path', 'context/@@plone_portal_state', econtext=econtext)(_static_3082740369680(econtext, __zt_tmp))
            econtext['portal_state'] = __value
            __backup_portal_url_3082683582272 = get('portal_url', __marker)
            # <Value 'portal_state/portal_url' (35:40)> -> __value
            __token = 1294
            try:
                __zt_tmp = __attrs_3082687913296
            except NameError:
                __zt_tmp = None
            __value = _static_3082718575824('path', 'portal_state/portal_url', econtext=econtext)(_static_3082718575376(econtext, __zt_tmp))
            econtext['portal_url'] = __value
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="footer mt-4">\n                ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082740181584
            __attrs_3082740181584 = _static_3082741694352
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div>\n                  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082740183248
            __attrs_3082740183248 = _static_3082740779088
            __stream_3082740182416 = []
            __append_3082740182416 = __stream_3082740182416.append
            __append_3082740182416('Trouble logging in?')
            __msgid_3082740182416 = __re_whitespace(''.join(__stream_3082740182416)).strip()
            __append(translate('trouble_logging_in', mapping=None, default=__msgid_3082740182416, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('\n                  ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='@@login-help', kind=None)]) name=None at 2cdc1a23a10> -> __attrs_3082740186128
            __attrs_3082740186128 = _static_3082742534352
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a')
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082712124048
            __default_3082712124048 = _DEFAULT_MARKER
            # <Substitution 'string:${portal_url}/@@login-help' (38:62)> -> __attr_href
            __token = 1508
            try:
                __zt_tmp = __attrs_3082740186128
            except NameError:
                __zt_tmp = None
            __attr_href = _static_3082717407440('string', '${portal_url}/@@login-help', econtext=econtext)(_static_3082717410960(econtext, __zt_tmp))
            __attr_href = __quote(__attr_href, '"', '&quot;', '@@login-help', _DEFAULT_MARKER)
            if __attr_href is not None:
                __append(' href="%s"' % __attr_href)
            __append('>')
            __stream_3082740183952 = []
            __append_3082740183952 = __stream_3082740183952.append
            __append_3082740183952('Get help')
            __msgid_3082740183952 = __re_whitespace(''.join(__stream_3082740183952)).strip()
            __append(translate('footer_login_link_get_help', mapping=None, default=__msgid_3082740183952, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</a>.\n                </div>\n                ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082712371536
            __attrs_3082712371536 = _static_3082717717520
            # <Value 'python:view.self_registration_enabled()' (40:36)> -> __condition
            __token = 1660
            try:
                __zt_tmp = __attrs_3082712371536
            except NameError:
                __zt_tmp = None
            __condition = _static_3082741894224('python', 'view.self_registration_enabled()', econtext=econtext)(_static_3082741901840(econtext, __zt_tmp))
            if __condition:
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div>\n                  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082712381264
                __attrs_3082712381264 = _static_3082741906768
                __stream_3082712374736 = []
                __append_3082712374736 = __stream_3082712374736.append
                __append_3082712374736('Need an account?')
                __msgid_3082712374736 = __re_whitespace(''.join(__stream_3082712374736)).strip()
                __append(translate('need_an_account', mapping=None, default=__msgid_3082712374736, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('\n                  ')
                # <Static value=Dict(keys=[Constant(value='href', kind=None), Constant(value='class', kind=None)], values=[Constant(value='@@register', kind=None), Constant(value='emph', kind=None)]) name=None at 2cdbff9ead0> -> __attrs_3082712380496
                __attrs_3082712380496 = _static_3082743515536
                # <a ... (0:0)
                # --------------------------------------------------------
                __append('<a')
                # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082712379024
                __default_3082712379024 = _DEFAULT_MARKER
                # <Substitution 'string:${portal_url}/@@register' (42:60)> -> __attr_href
                __token = 1859
                try:
                    __zt_tmp = __attrs_3082712380496
                except NameError:
                    __zt_tmp = None
                __attr_href = _static_3082740877840('string', '${portal_url}/@@register', econtext=econtext)(_static_3082740879440(econtext, __zt_tmp))
                __attr_href = __quote(__attr_href, '"', '&quot;', '@@register', _DEFAULT_MARKER)
                if __attr_href is not None:
                    __append(' href="%s"' % __attr_href)
                __append(' class="emph">')
                __stream_3082712377872 = []
                __append_3082712377872 = __stream_3082712377872.append
                __append_3082712377872('Sign up here')
                __msgid_3082712377872 = __re_whitespace(''.join(__stream_3082712377872)).strip()
                __append(translate('footer_login_link_signup', mapping=None, default=__msgid_3082712377872, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</a>.\n                </div>')
            __append('\n              </div>')
            if __backup_portal_url_3082683582272 is __marker:
                del econtext['portal_url']
            else:
                econtext['portal_url'] = __backup_portal_url_3082683582272
            if __backup_portal_state_3082709677952 is __marker:
                del econtext['portal_state']
            else:
                econtext['portal_state'] = __backup_portal_state_3082709677952
            __append('\n\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    ')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise

    def render(__stream, econtext, rcontext, __i18n_domain=None, __i18n_context=None, target_language=None):
        __append = __stream.append
        __re_amp = g_re_amp
        __token = None
        __re_needs_escape = g_re_needs_escape

        def __convert(target):
            if target is None:
                return
            __tt = type(target)
            if __tt is bytes:
                target = decode(target)
            elif __tt is not str:
                if __tt is int or __tt is float:
                    target = str(target)
                else:
                    __markup = getattr(target, '__html__', None)
                    if __markup is None:
                        __converted = translate(target, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                        target = str(target) if target is __converted else __converted
                    else:
                        target = __markup()
            return target

        def __quote(target, quote, quote_entity, default, default_marker):
            if target is None:
                return
            if target is default_marker:
                return default
            __tt = type(target)
            if __tt is bytes:
                target = decode(target)
            elif __tt is not str:
                if __tt is int or __tt is float:
                    return str(target)
                __markup = getattr(target, '__html__', None)
                if __markup is None:
                    __converted = translate(target, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                    target = str(target) if target is __converted else __converted
                else:
                    return __markup()
            if target is not None:
                try:
                    escape = __re_needs_escape(target) is not None
                except TypeError:
                    pass
                else:
                    if escape:
                        if '&' in target:
                            target = target.replace('&', '&amp;')
                        if '<' in target:
                            target = target.replace('<', '&lt;')
                        if '>' in target:
                            target = target.replace('>', '&gt;')
                        if quote is not None and quote in target:
                            target = target.replace(quote, quote_entity)
            return target
        translate = econtext['__translate']
        decode = econtext['__decode']
        on_error_handler = econtext['__on_error_handler']
        try:
            getname = econtext.get_name
            get = econtext.get
            # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082717932560
            __attrs_3082717932560 = _static_3082741608976
            __previous_i18n_domain_3082716073744 = __i18n_domain
            __i18n_domain = 'plone'
            __backup_macroname_3082716072576 = get('macroname', __marker)
            # <Static value=Constant(value='master', kind=None) name=None at 2cdc022a7d0> -> __value
            __value = _static_3082741215120
            econtext['macroname'] = __value

            def __fill_main(__stream, econtext, rcontext, __i18n_domain=__i18n_domain, __i18n_context=__i18n_context, target_language=target_language):
                getname = econtext.get_name
                get = econtext.get
                # <Static value=Dict(keys=[], values=[]) name=None at 2cdbacb0290> -> __attrs_3082673151568
                __attrs_3082673151568 = _static_3082740140560
                __append('\n    ')
                __token = None
                render_main(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
                econtext.update(rcontext)
                __append('\n  ')
            _slots = econtext['__slot_main'] = _deque((__fill_main,))
            # <Value 'context/@@main_template/macros/master' (7:23)> -> __macro
            __token = 287
            try:
                __zt_tmp = __attrs_3082717932560
            except NameError:
                __zt_tmp = None
            __macro = _static_3082718979408('path', 'context/@@main_template/macros/master', econtext=econtext)(_static_3082718983824(econtext, __zt_tmp))
            __token = 287
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_3082716072576 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_3082716072576
            __i18n_domain = __previous_i18n_domain_3082716073744
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render_main': render_main, 'render': render}