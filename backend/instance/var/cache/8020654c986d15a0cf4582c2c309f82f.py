# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\analytics\\view_head.pt'

__tokens = {42: ('view/webstats_js', 2, 24), 87: ('webstats_head_js', 4, 20), 201: ('webstats_head_js', 8, 31)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696061112080 = {}
_static_1696099457552 = __compile_zt_expr
_static_1696094743056 = __C2ZContextWrapper
_static_1696125261840 = __compile_zt_expr
_static_1696124627664 = __C2ZContextWrapper
_static_1696099457168 = {}
_static_1696123631824 = __compile_zt_expr
_static_1696123619472 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163178832
            __attrs_1696163178832 = _static_1696061112080
            __backup_webstats_head_js_1696163251712 = get('webstats_head_js', __marker)
            # <Value 'view/webstats_js' (2:24)> -> __value
            __token = 42
            try:
                __zt_tmp = __attrs_1696163178832
            except NameError:
                __zt_tmp = None
            __value = _static_1696099457552('path', 'view/webstats_js', econtext=econtext)(_static_1696094743056(econtext, __zt_tmp))
            econtext['webstats_head_js'] = __value
            # <Value 'webstats_head_js' (4:20)> -> __condition
            __token = 87
            try:
                __zt_tmp = __attrs_1696163178832
            except NameError:
                __zt_tmp = None
            __condition = _static_1696125261840('path', 'webstats_head_js', econtext=econtext)(_static_1696124627664(econtext, __zt_tmp))
            if __condition:
                __append('\n  <!-- plone.analytics.head goes here -->\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164125584
                __attrs_1696164125584 = _static_1696099457168
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164123792
                __default_1696164123792 = _DEFAULT_MARKER
                # <Value 'webstats_head_js' (8:31)> -> __cache_1696164128848
                __token = 201
                try:
                    __zt_tmp = __attrs_1696164125584
                except NameError:
                    __zt_tmp = None
                __cache_1696164128848 = _static_1696123631824('path', 'webstats_head_js', econtext=econtext)(_static_1696123619472(econtext, __zt_tmp))
                # <BinOp left=<Value 'webstats_head_js' (8:31)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb42bad0> -> __condition
                __expression = __cache_1696164128848
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span></span>')
                else:
                    __content = __cache_1696164128848
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('\n')
            if __backup_webstats_head_js_1696163251712 is __marker:
                del econtext['webstats_head_js']
            else:
                econtext['webstats_head_js'] = __backup_webstats_head_js_1696163251712
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}