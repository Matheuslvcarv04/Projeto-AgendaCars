# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\portlets\\browser\\templates/footer.pt'

__tokens = {76: ('view/render_footer_portlets', 3, 32), 128: ('nothing', 4, 23)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tal import ErrorInfo as _ErrorInfo
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696162008976 = {'class': 'row'}
_static_1696162129360 = {'class': 'col-xs-12'}
_static_1696163765520 = {}
_static_1696037473680 = __compile_zt_expr
_static_1696164526160 = __C2ZContextWrapper
_static_1696163762896 = __compile_zt_expr
_static_1696163766096 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='row', kind=None)]) name=None at 18aeb2ff290> -> __attrs_1696062550736
            __attrs_1696062550736 = _static_1696162008976
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="row">\n  ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='col-xs-12', kind=None)]) name=None at 18aeb2ff090> -> __attrs_1696162896528
            __attrs_1696162896528 = _static_1696162129360
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="col-xs-12">\n    ')
            ____fallback_1696008579824 = len(__stream)
            try:
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162897744
                __attrs_1696162897744 = _static_1696163765520
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162891984
                __default_1696162891984 = _DEFAULT_MARKER
                # <Value 'view/render_footer_portlets' (3:32)> -> __cache_1696162891600
                __token = 76
                try:
                    __zt_tmp = __attrs_1696162897744
                except NameError:
                    __zt_tmp = None
                __cache_1696162891600 = _static_1696037473680('path', 'view/render_footer_portlets', econtext=econtext)(_static_1696164526160(econtext, __zt_tmp))
                # <BinOp left=<Value 'view/render_footer_portlets' (3:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb2ff110> -> __condition
                __expression = __cache_1696162891600
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div ></div>')
                else:
                    __content = __cache_1696162891600
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
            except (Exception,) as __exc:
                econtext['error'] = _ErrorInfo(__exc, __tokens[__token][1:3])
                if on_error_handler is not None:
                    on_error_handler(__exc)
                del __stream[____fallback_1696008579824:]
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div >')
                # <Value 'nothing' (4:23)> -> __content
                __token = 128
                try:
                    __zt_tmp = __attrs_1696162896528
                except NameError:
                    __zt_tmp = None
                __content = _static_1696163762896('path', 'nothing', econtext=econtext)(_static_1696163766096(econtext, __zt_tmp))
                __content = __quote(__content, None, '\xad', None, None)
                if __content is not None:
                    __append(__content)
                __append('</div>')
            __append('\n  </div>\n</div>\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}