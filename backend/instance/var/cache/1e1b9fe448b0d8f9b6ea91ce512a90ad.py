# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\z3cform\\templates\\password_input.pt'

__tokens = {242: ('view/attributes', 9, 11), 137: ('view/name', 5, 17), 192: ('view/value', 7, 18)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_3082741029328 = {'xmlns': 'http://www.w3.org/1999/xhtml'}
_static_3082751993680 = {'name': '${view/name}', 'type': 'password', 'value': '${view/value}'}
_static_3082776268880 = __compile_zt_expr
_static_3082717449168 = __C2ZContextWrapper
_static_3082776411792 = __compile_zt_expr
_static_3082776406928 = __C2ZContextWrapper
_static_3082742530704 = __compile_zt_expr
_static_3082742532048 = __C2ZContextWrapper
_static_3082776724816 = set(['allowfullscreen', 'controls', 'itemscope', 'inert', 'noshade', 'formnovalidate', 'compact', 'loop', 'muted', 'defer', 'selected', 'declare', 'autoplay', 'playsinline', 'autofocus', 'shadowrootclonable', 'async', 'disabled', 'nomodule', 'novalidate', 'multiple', 'readonly', 'checked', 'open', 'shadowrootdelegatesfocus', 'ismap', 'noresize', 'required', 'shadowrootserializable', 'nowrap', 'reversed', 'default'])
_static_3082776737680 = set([])
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None)]) name=None at 2cdc25a5710> -> __attrs_3082752249168
            __attrs_3082752249168 = _static_3082741029328
            __append('\n  ')
            # <Static value=Dict(keys=[Constant(value='name', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='${view/name}', kind=None), ..., Constant(value='${view/value}', kind=None)]) name=None at 2cdc25a6590> -> __attrs_3082776908112
            __attrs_3082776908112 = _static_3082751993680
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input')
            # <Value 'view/attributes' (9:11)> -> __cache_3082776913680
            __token = 242
            try:
                __zt_tmp = __attrs_3082776908112
            except NameError:
                __zt_tmp = None
            __cache_3082776913680 = _static_3082776268880('path', 'view/attributes', econtext=econtext)(_static_3082717449168(econtext, __zt_tmp))
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082752247056
            __default_3082752247056 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${view/name}' (5:15)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2cdc25a6dd0> -> __attr_name
            __token = 137
            try:
                __zt_tmp = __attrs_3082776908112
            except NameError:
                __zt_tmp = None
            __attr_name = _static_3082776411792('path', 'view/name', econtext=econtext)(_static_3082776406928(econtext, __zt_tmp))
            __attr_name = __quote(__attr_name, '"', '&quot;', None, _DEFAULT_MARKER)
            __attr_name = __attr_name
            if __attr_name is None:
                pass
            elif __attr_name is _DEFAULT_MARKER:
                __attr_name = None
            else:
                __tt = type(__attr_name)
                if __tt is bytes:
                    __attr_name = decode(__attr_name)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __attr_name = str(__attr_name)
                    else:
                        __markup = getattr(__attr_name, '__html__', None)
                        if __markup is None:
                            __converted = translate(__attr_name, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __attr_name = str(__attr_name) if __attr_name is __converted else __converted
                        else:
                            __attr_name = __markup()
            if __attr_name is not None and 'name' not in __chain(__cache_3082776913680):
                __append(' name="%s"' % __attr_name)
            if 'type' not in __chain(__cache_3082776913680):
                __append(' type="password"')
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082752254992
            __default_3082752254992 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${view/value}' (7:16)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2cdc25a6b10> -> __attr_value
            __token = 192
            try:
                __zt_tmp = __attrs_3082776908112
            except NameError:
                __zt_tmp = None
            __attr_value = _static_3082742530704('path', 'view/value', econtext=econtext)(_static_3082742532048(econtext, __zt_tmp))
            __attr_value = __quote(__attr_value, '"', '&quot;', None, _DEFAULT_MARKER)
            __attr_value = __attr_value
            if __attr_value is None:
                pass
            elif __attr_value is _DEFAULT_MARKER:
                __attr_value = None
            else:
                __tt = type(__attr_value)
                if __tt is bytes:
                    __attr_value = decode(__attr_value)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __attr_value = str(__attr_value)
                    else:
                        __markup = getattr(__attr_value, '__html__', None)
                        if __markup is None:
                            __converted = translate(__attr_value, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __attr_value = str(__attr_value) if __attr_value is __converted else __converted
                        else:
                            __attr_value = __markup()
            if __attr_value is not None and 'value' not in __chain(__cache_3082776913680):
                __append(' value="%s"' % __attr_value)
            __attr_3082776906640 = __cache_3082776913680
            for name, value in __attr_3082776906640.items():
                if name in _static_3082776724816:
                    if not bool(value):
                        continue
                    value = name
                if name not in _static_3082776737680 and value is not None:
                    if name in _static_3082776724816:
                        if not bool(value):
                            continue
                        value = name
                    __append(' ' + name + '=' + '"' + __quote(value, '"', '&quot;', None, None) + '"')
            __append(' />\n\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}