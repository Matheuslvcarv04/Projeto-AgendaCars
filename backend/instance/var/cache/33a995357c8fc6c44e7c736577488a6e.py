# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\links\\favicon.pt'

__tokens = {30: ('python: view.favicon_path', 2, 16), 93: ('python: view.mimetype', 4, 16), 138: ('python: view.favicon_path', 6, 16)}
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
_static_1696094671952 = {}
_static_1696163091856 = {'href': '${python: view.favicon_path}', 'rel': 'icon', 'type': '${python: view.mimetype}'}
_static_1696125949392 = __compile_zt_expr
_static_1696125955088 = __C2ZContextWrapper
_static_1696163093968 = __compile_zt_expr
_static_1696059712656 = __C2ZContextWrapper
_static_1696094051920 = {'href': '${python: view.favicon_path}', 'rel': 'mask-icon'}
_static_1696125946448 = __compile_zt_expr
_static_1696163958992 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696093087120
            __attrs_1696093087120 = _static_1696094671952
            __append('\n  ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='type', kind=None)], values=[Constant(value='${python: view.favicon_path}', kind=None), ..., Constant(value='${python: view.mimetype}', kind=None)]) name=None at 18aeb3a1b10> -> __attrs_1696163727952
            __attrs_1696163727952 = _static_1696163091856
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163575824
            __default_1696163575824 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${python: view.favicon_path}' (2:14)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb3a1cd0> -> __attr_href
            __token = 30
            try:
                __zt_tmp = __attrs_1696163727952
            except NameError:
                __zt_tmp = None
            __attr_href = _static_1696125949392('python', ' view.favicon_path', econtext=econtext)(_static_1696125955088(econtext, __zt_tmp))
            __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
            __attr_href = __attr_href
            if __attr_href is None:
                pass
            elif __attr_href is _DEFAULT_MARKER:
                __attr_href = None
            else:
                __tt = type(__attr_href)
                if __tt is bytes:
                    __attr_href = decode(__attr_href)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __attr_href = str(__attr_href)
                    else:
                        __markup = getattr(__attr_href, '__html__', None)
                        if __markup is None:
                            __converted = translate(__attr_href, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __attr_href = str(__attr_href) if __attr_href is __converted else __converted
                        else:
                            __attr_href = __markup()
            if __attr_href is not None:
                __append(' href="%s"' % __attr_href)
            __append(' rel="icon"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163729040
            __default_1696163729040 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${python: view.mimetype}' (4:14)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb3ca4d0> -> __attr_type
            __token = 93
            try:
                __zt_tmp = __attrs_1696163727952
            except NameError:
                __zt_tmp = None
            __attr_type = _static_1696163093968('python', ' view.mimetype', econtext=econtext)(_static_1696059712656(econtext, __zt_tmp))
            __attr_type = __quote(__attr_type, '"', '&quot;', None, _DEFAULT_MARKER)
            __attr_type = __attr_type
            if __attr_type is None:
                pass
            elif __attr_type is _DEFAULT_MARKER:
                __attr_type = None
            else:
                __tt = type(__attr_type)
                if __tt is bytes:
                    __attr_type = decode(__attr_type)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __attr_type = str(__attr_type)
                    else:
                        __markup = getattr(__attr_type, '__html__', None)
                        if __markup is None:
                            __converted = translate(__attr_type, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __attr_type = str(__attr_type) if __attr_type is __converted else __converted
                        else:
                            __attr_type = __markup()
            if __attr_type is not None:
                __append(' type="%s"' % __attr_type)
            __append(' />\n  ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), Constant(value='rel', kind=None)], values=[Constant(value='${python: view.favicon_path}', kind=None), Constant(value='mask-icon', kind=None)]) name=None at 18aeb3c9950> -> __attrs_1696163738704
            __attrs_1696163738704 = _static_1696094051920
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163725776
            __default_1696163725776 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${python: view.favicon_path}' (6:14)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb3c8ed0> -> __attr_href
            __token = 138
            try:
                __zt_tmp = __attrs_1696163738704
            except NameError:
                __zt_tmp = None
            __attr_href = _static_1696125946448('python', ' view.favicon_path', econtext=econtext)(_static_1696163958992(econtext, __zt_tmp))
            __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
            __attr_href = __attr_href
            if __attr_href is None:
                pass
            elif __attr_href is _DEFAULT_MARKER:
                __attr_href = None
            else:
                __tt = type(__attr_href)
                if __tt is bytes:
                    __attr_href = decode(__attr_href)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __attr_href = str(__attr_href)
                    else:
                        __markup = getattr(__attr_href, '__html__', None)
                        if __markup is None:
                            __converted = translate(__attr_href, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __attr_href = str(__attr_href) if __attr_href is __converted else __converted
                        else:
                            __attr_href = __markup()
            if __attr_href is not None:
                __append(' href="%s"' % __attr_href)
            __append(' rel="mask-icon" />\n\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}