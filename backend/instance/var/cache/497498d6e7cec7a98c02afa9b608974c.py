# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\z3cform\\templates\\submit_input.pt'

__tokens = {271: ('view/attributes', 10, 12), 136: ('view/id', 5, 16), 164: ('view/name', 6, 18), 219: ('view/value', 8, 19), 305: ('view/title', 12, 5)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_3082717456656 = {'xmlns': 'http://www.w3.org/1999/xhtml'}
_static_3082777101008 = {'id': '${view/id}', 'name': '${view/name}', 'type': 'submit', 'value': '${view/value}'}
_static_3082777018896 = __compile_zt_expr
_static_3082752751824 = __C2ZContextWrapper
_static_3082742312848 = __compile_zt_expr
_static_3082776404688 = __C2ZContextWrapper
_static_3082776273040 = __compile_zt_expr
_static_3082776271568 = __C2ZContextWrapper
_static_3082742534416 = __compile_zt_expr
_static_3082776453008 = __C2ZContextWrapper
_static_3082776758096 = set(['allowfullscreen', 'controls', 'itemscope', 'inert', 'noshade', 'formnovalidate', 'compact', 'loop', 'muted', 'defer', 'selected', 'declare', 'autoplay', 'playsinline', 'autofocus', 'shadowrootclonable', 'async', 'disabled', 'nomodule', 'novalidate', 'multiple', 'readonly', 'checked', 'open', 'shadowrootdelegatesfocus', 'ismap', 'noresize', 'required', 'shadowrootserializable', 'nowrap', 'reversed', 'default'])
_static_3082776763152 = set([])
_static_3082776296016 = __compile_zt_expr
_static_3082776291664 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None)]) name=None at 2cdc3caa290> -> __attrs_3082776389840
            __attrs_3082776389840 = _static_3082717456656
            __append('\n  ')
            # <Static value=Dict(keys=[Constant(value='id', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='${view/id}', kind=None), ..., Constant(value='${view/value}', kind=None)]) name=None at 2cdc3ca8b50> -> __attrs_3082776389456
            __attrs_3082776389456 = _static_3082777101008
            # <button ... (0:0)
            # --------------------------------------------------------
            __append('<button')
            # <Value 'view/attributes' (10:12)> -> __cache_3082776393232
            __token = 271
            try:
                __zt_tmp = __attrs_3082776389456
            except NameError:
                __zt_tmp = None
            __cache_3082776393232 = _static_3082777018896('path', 'view/attributes', econtext=econtext)(_static_3082752751824(econtext, __zt_tmp))
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082776386704
            __default_3082776386704 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${view/id}' (5:14)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2cdc3caa990> -> __attr_id
            __token = 136
            try:
                __zt_tmp = __attrs_3082776389456
            except NameError:
                __zt_tmp = None
            __attr_id = _static_3082742312848('path', 'view/id', econtext=econtext)(_static_3082776404688(econtext, __zt_tmp))
            __attr_id = __quote(__attr_id, '"', '&quot;', None, _DEFAULT_MARKER)
            __attr_id = __attr_id
            if __attr_id is None:
                pass
            elif __attr_id is _DEFAULT_MARKER:
                __attr_id = None
            else:
                __tt = type(__attr_id)
                if __tt is bytes:
                    __attr_id = decode(__attr_id)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __attr_id = str(__attr_id)
                    else:
                        __markup = getattr(__attr_id, '__html__', None)
                        if __markup is None:
                            __converted = translate(__attr_id, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __attr_id = str(__attr_id) if __attr_id is __converted else __converted
                        else:
                            __attr_id = __markup()
            if __attr_id is not None and 'id' not in __chain(__cache_3082776393232):
                __append(' id="%s"' % __attr_id)
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082776380752
            __default_3082776380752 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${view/name}' (6:16)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2cdc3ca9950> -> __attr_name
            __token = 164
            try:
                __zt_tmp = __attrs_3082776389456
            except NameError:
                __zt_tmp = None
            __attr_name = _static_3082776273040('path', 'view/name', econtext=econtext)(_static_3082776271568(econtext, __zt_tmp))
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
            if __attr_name is not None and 'name' not in __chain(__cache_3082776393232):
                __append(' name="%s"' % __attr_name)
            if 'type' not in __chain(__cache_3082776393232):
                __append(' type="submit"')
            # <Symbol value=<DEFAULT> at 2cdba95ac10> -> __default_3082776386896
            __default_3082776386896 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${view/value}' (8:17)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2cdc3ca81d0> -> __attr_value
            __token = 219
            try:
                __zt_tmp = __attrs_3082776389456
            except NameError:
                __zt_tmp = None
            __attr_value = _static_3082742534416('path', 'view/value', econtext=econtext)(_static_3082776453008(econtext, __zt_tmp))
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
            if __attr_value is not None and 'value' not in __chain(__cache_3082776393232):
                __append(' value="%s"' % __attr_value)
            __attr_3082776393040 = __cache_3082776393232
            for name, value in __attr_3082776393040.items():
                if name in _static_3082776758096:
                    if not bool(value):
                        continue
                    value = name
                if name not in _static_3082776763152 and value is not None:
                    if name in _static_3082776758096:
                        if not bool(value):
                            continue
                        value = name
                    __append(' ' + name + '=' + '"' + __quote(value, '"', '&quot;', None, None) + '"')
            __append(' >')
            # <Interpolation value=<Substitution '${view/title}' (12:3)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2cdc3ca8c50> -> __content_3082562646208
            __token = 305
            try:
                __zt_tmp = __attrs_3082776389456
            except NameError:
                __zt_tmp = None
            __content_3082562646208 = _static_3082776296016('path', 'view/title', econtext=econtext)(_static_3082776291664(econtext, __zt_tmp))
            __content_3082562646208 = __quote(__content_3082562646208, '\x00', '&#0;', None, None)
            __content_3082562646208 = __content_3082562646208
            if __content_3082562646208 is None:
                pass
            elif __content_3082562646208 is None:
                __content_3082562646208 = None
            else:
                __tt = type(__content_3082562646208)
                if __tt is bytes:
                    __content_3082562646208 = decode(__content_3082562646208)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __content_3082562646208 = str(__content_3082562646208)
                    else:
                        __markup = getattr(__content_3082562646208, '__html__', None)
                        if __markup is None:
                            __converted = translate(__content_3082562646208, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __content_3082562646208 = str(__content_3082562646208) if __content_3082562646208 is __converted else __converted
                        else:
                            __content_3082562646208 = __markup()
            if __content_3082562646208 is not None:
                __append(__content_3082562646208)
            __append('</button>\n\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}