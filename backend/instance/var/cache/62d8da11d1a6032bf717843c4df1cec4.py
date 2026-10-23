# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\portlets\\browser\\templates/manage_portlets_fallback.pt'

__tokens = {56: ('view/available', 2, 20), 104: ('nothing', 4, 30), 240: ('string:${view/object_url}/@@manage-portlets', 11, 12)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696162766544 = {'class': 'row managePortlets-row'}
_static_1696037483536 = __compile_zt_expr
_static_1696164599184 = __C2ZContextWrapper
_static_1696164605840 = {}
_static_1696164077200 = __compile_zt_expr
_static_1696164075664 = __C2ZContextWrapper
_static_1696164074448 = {'class': 'managePortletsFallback', 'href': 'string:${view/object_url}/@@manage-portlets'}
_static_1696164520272 = __compile_zt_expr
_static_1696164524944 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='row managePortlets-row', kind=None)]) name=None at 18ae7157e50> -> __attrs_1696163528656
            __attrs_1696163528656 = _static_1696162766544
            # <Value 'view/available' (2:20)> -> __condition
            __token = 56
            try:
                __zt_tmp = __attrs_1696163528656
            except NameError:
                __zt_tmp = None
            __condition = _static_1696037483536('path', 'view/available', econtext=econtext)(_static_1696164599184(econtext, __zt_tmp))
            if __condition:
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="row managePortlets-row" >\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163520400
                __attrs_1696163520400 = _static_1696164605840
                # <Value 'nothing' (4:30)> -> __condition
                __token = 104
                try:
                    __zt_tmp = __attrs_1696163520400
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696164077200('path', 'nothing', econtext=econtext)(_static_1696164075664(econtext, __zt_tmp))
                if __condition:
                    __append('\n\t\t**********\n\t\tNEEDED COL\n\t\t**********\n  ')
                __append('\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='href', kind=None)], values=[Constant(value='managePortletsFallback', kind=None), Constant(value='string:${view/object_url}/@@manage-portlets', kind=None)]) name=None at 18aeb3961d0> -> __attrs_1696163523728
                __attrs_1696163523728 = _static_1696164074448
                __previous_i18n_domain_1696163516432 = __i18n_domain
                __i18n_domain = 'plone'
                # <a ... (0:0)
                # --------------------------------------------------------
                __append('<a class="managePortletsFallback"')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163522640
                __default_1696163522640 = _DEFAULT_MARKER
                # <Substitution 'string:${view/object_url}/@@manage-portlets' (11:12)> -> __attr_href
                __token = 240
                try:
                    __zt_tmp = __attrs_1696163523728
                except NameError:
                    __zt_tmp = None
                __attr_href = _static_1696164520272('string', '${view/object_url}/@@manage-portlets', econtext=econtext)(_static_1696164524944(econtext, __zt_tmp))
                __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_href is not None:
                    __append(' href="%s"' % __attr_href)
                __append(' >')
                __stream_1696163519504 = []
                __append_1696163519504 = __stream_1696163519504.append
                __append_1696163519504('\n        Manage portlets\n  ')
                __msgid_1696163519504 = __re_whitespace(''.join(__stream_1696163519504)).strip()
                __append(translate('manage_portlets_link', mapping=None, default=__msgid_1696163519504, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</a>')
                __i18n_domain = __previous_i18n_domain_1696163516432
                __append('\n\n</div>')
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}