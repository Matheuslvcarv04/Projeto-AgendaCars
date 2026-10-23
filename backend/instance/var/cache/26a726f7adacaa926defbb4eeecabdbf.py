# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\logo.pt'

__tokens = {102: (' view/navigation_root_titl', 5, 10), 66: ('view/navigation_root_url', 4, 10), 267: ('view/logo_title', 13, 13), 327: ('c view/img_s', 15, 11), 298: (' view/logo_titl', 14, 14)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
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
_static_1696162667280 = {'id': 'portal-logo', 'title': 'Home', 'href': 'view/navigation_root_url'}
_static_1696164606224 = __compile_zt_expr
_static_1696164605584 = __C2ZContextWrapper
_static_1696164447952 = __compile_zt_expr
_static_1696164459344 = __C2ZContextWrapper
_static_1696164115600 = {'alt': '', 'src': 'plone-logo.svg', 'title': 'view/logo_title'}
_static_1696164452240 = __compile_zt_expr
_static_1696164450640 = __C2ZContextWrapper
_static_1696141402704 = __compile_zt_expr
_static_1696141395408 = __C2ZContextWrapper
_static_1696162962320 = __compile_zt_expr
_static_1696162960272 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None), ..., Constant(value='href', kind=None)], values=[Constant(value='portal-logo', kind=None), ..., Constant(value='view/navigation_root_url', kind=None)]) name=None at 18aeb2fc350> -> __attrs_1696162900560
            __attrs_1696162900560 = _static_1696162667280
            __previous_i18n_domain_1696162892304 = __i18n_domain
            __i18n_domain = 'plone'
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a id="portal-logo"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162895888
            __default_1696162895888 = _DEFAULT_MARKER
            # <Translate msgid=None node=<Substitution 'view/navigation_root_title' (5:10)> at 18aeb2fea90> -> __attr_title
            # <Substitution 'view/navigation_root_title' (5:10)> -> __attr_title
            __token = 102
            try:
                __zt_tmp = __attrs_1696162900560
            except NameError:
                __zt_tmp = None
            __attr_title = _static_1696164606224('path', 'view/navigation_root_title', econtext=econtext)(_static_1696164605584(econtext, __zt_tmp))
            __attr_title = __quote(__attr_title, '"', '&quot;', 'Home', _DEFAULT_MARKER)
            __attr_title = translate(__attr_title, default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
            if __attr_title is not None:
                __append(' title="%s"' % __attr_title)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162894480
            __default_1696162894480 = _DEFAULT_MARKER
            # <Substitution 'view/navigation_root_url' (4:10)> -> __attr_href
            __token = 66
            try:
                __zt_tmp = __attrs_1696162900560
            except NameError:
                __zt_tmp = None
            __attr_href = _static_1696164447952('path', 'view/navigation_root_url', econtext=econtext)(_static_1696164459344(econtext, __zt_tmp))
            __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_href is not None:
                __append(' href="%s"' % __attr_href)
            __append(' >\n  ')
            # <Static value=Dict(keys=[Constant(value='alt', kind=None), ..., Constant(value='title', kind=None)], values=[Constant(value='', kind=None), ..., Constant(value='view/logo_title', kind=None)]) name=None at 18aeb2ff7d0> -> __attrs_1696162896976
            __attrs_1696162896976 = _static_1696164115600
            # <img ... (0:0)
            # --------------------------------------------------------
            __append('<img')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162899664
            __default_1696162899664 = _DEFAULT_MARKER
            # <Substitution 'view/logo_title' (13:13)> -> __attr_alt
            __token = 267
            try:
                __zt_tmp = __attrs_1696162896976
            except NameError:
                __zt_tmp = None
            __attr_alt = _static_1696164452240('path', 'view/logo_title', econtext=econtext)(_static_1696164450640(econtext, __zt_tmp))
            __attr_alt = __quote(__attr_alt, '"', '&quot;', '', _DEFAULT_MARKER)
            if __attr_alt is not None:
                __append(' alt="%s"' % __attr_alt)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162901968
            __default_1696162901968 = _DEFAULT_MARKER
            # <Substitution 'view/img_src' (15:11)> -> __attr_src
            __token = 327
            try:
                __zt_tmp = __attrs_1696162896976
            except NameError:
                __zt_tmp = None
            __attr_src = _static_1696141402704('path', 'view/img_src', econtext=econtext)(_static_1696141395408(econtext, __zt_tmp))
            __attr_src = __quote(__attr_src, '"', '&quot;', 'plone-logo.svg', _DEFAULT_MARKER)
            if __attr_src is not None:
                __append(' src="%s"' % __attr_src)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162906064
            __default_1696162906064 = _DEFAULT_MARKER
            # <Substitution 'view/logo_title' (14:14)> -> __attr_title
            __token = 298
            try:
                __zt_tmp = __attrs_1696162896976
            except NameError:
                __zt_tmp = None
            __attr_title = _static_1696162962320('path', 'view/logo_title', econtext=econtext)(_static_1696162960272(econtext, __zt_tmp))
            __attr_title = __quote(__attr_title, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_title is not None:
                __append(' title="%s"' % __attr_title)
            __append(' /></a>')
            __i18n_domain = __previous_i18n_domain_1696162892304
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}