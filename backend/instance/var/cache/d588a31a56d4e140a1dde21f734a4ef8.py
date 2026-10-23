# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\z3cform\\templates\\text_input.pt'

__tokens = {238: ('view/attributes', 9, 11), 137: ('view/name', 5, 17), 188: ('view/value', 7, 18)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_3082747004560 = {'xmlns': 'http://www.w3.org/1999/xhtml'}
_static_3082776311312 = {'name': '${view/name}', 'type': 'text', 'value': '${view/value}'}
_static_3082776407120 = __compile_zt_expr
_static_3082776297872 = __C2ZContextWrapper
_static_3082777106832 = __compile_zt_expr
_static_3082777110864 = __C2ZContextWrapper
_static_3082776300816 = __compile_zt_expr
_static_3082776731024 = __C2ZContextWrapper
_static_3082752534416 = set(['allowfullscreen', 'controls', 'itemscope', 'inert', 'noshade', 'formnovalidate', 'compact', 'loop', 'muted', 'defer', 'selected', 'declare', 'autoplay', 'playsinline', 'autofocus', 'shadowrootclonable', 'async', 'disabled', 'nomodule', 'novalidate', 'multiple', 'readonly', 'checked', 'open', 'shadowrootdelegatesfocus', 'ismap', 'noresize', 'required', 'shadowrootserializable', 'nowrap', 'reversed', 'default'])
_static_3082719182800 = set([])
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None)]) name=None at 2cdc1e4e810> -> __attrs_3082744559184
            __attrs_3082744559184 = _static_3082747004560
            __append('\n  ')
            # <Static value=Dict(keys=[Constant(value='name', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='${view/name}', kind=None), ..., Constant(value='${view/value}', kind=None)]) name=None at 2cdc1e4ee90> -> __attrs_3082669863120
            __attrs_3082669863120 = _static_3082776311312
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input')
            # <Value 'view/attributes' (9:11)> -> __cache_3082669866640
            __token = 238
            try:
                __zt_tmp = __attrs_3082669863120
            except NameError:
                __zt_tmp = None
            __cache_3082669866640 = _static_3082776407120('path', 'view/attributes', econtext=econtext)(_static_3082776297872(econtext, __zt_tmp))
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082669855376
            __default_3082669855376 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${view/name}' (5:15)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2cdbd713710> -> __attr_name
            __token = 137
            try:
                __zt_tmp = __attrs_3082669863120
            except NameError:
                __zt_tmp = None
            __attr_name = _static_3082777106832('path', 'view/name', econtext=econtext)(_static_3082777110864(econtext, __zt_tmp))
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
            if __attr_name is not None and 'name' not in __chain(__cache_3082669866640):
                __append(' name="%s"' % __attr_name)
            if 'type' not in __chain(__cache_3082669866640):
                __append(' type="text"')
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082669865360
            __default_3082669865360 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${view/value}' (7:16)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2cdbd711250> -> __attr_value
            __token = 188
            try:
                __zt_tmp = __attrs_3082669863120
            except NameError:
                __zt_tmp = None
            __attr_value = _static_3082776300816('path', 'view/value', econtext=econtext)(_static_3082776731024(econtext, __zt_tmp))
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
            if __attr_value is not None and 'value' not in __chain(__cache_3082669866640):
                __append(' value="%s"' % __attr_value)
            __attr_3082669856208 = __cache_3082669866640
            for name, value in __attr_3082669856208.items():
                if name in _static_3082752534416:
                    if not bool(value):
                        continue
                    value = name
                if name not in _static_3082719182800 and value is not None:
                    if name in _static_3082752534416:
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