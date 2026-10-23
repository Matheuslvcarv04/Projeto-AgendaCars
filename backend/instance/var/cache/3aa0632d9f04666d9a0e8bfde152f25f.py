# -*- coding: utf-8 -*-
__filename = 'index_html'

__tokens = {56: ('template/title', 4, 24), 612: ('template/title', 18, 27), 641: ('context/title_or_id', 18, 56), 733: ('template/title', 21, 27), 762: ('template/title', 21, 56), 888: ('template/id', 26, 45)}
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
_static_2616787158544 = {}
_static_2616793283216 = {}
_static_2616782805072 = {}
_static_2616793510288 = __compile_zt_expr
_static_2616793509584 = __C2ZContextWrapper
_static_2616793729552 = {'charset': 'utf-8'}
_static_2616793734480 = {'name': 'viewport', 'content': 'width=device-width, initial-scale=1, shrink-to-fit=no'}
_static_2616792132496 = {'rel': 'shortcut icon', 'type': 'image/x-icon', 'href': '/++resource++logo/favicon/favicon.svg'}
_static_2616788591248 = {'rel': 'stylesheet', 'type': 'text/css', 'href': '/++resource++logo/default.css'}
_static_2616786347088 = {}
_static_2616797507920 = {'href': 'https://www.zope.dev', 'target': '_blank'}
_static_2616787676688 = {'src': '/++resource++logo/Zope.svg', 'id': 'logo', 'alt': 'Zope logo'}
_static_2616787677648 = {}
_static_2616794084880 = {}
_static_2616788135888 = __compile_zt_expr
_static_2616788139024 = __C2ZContextWrapper
_static_2616787539856 = __compile_zt_expr
_static_2616787538896 = __C2ZContextWrapper
_static_2616787442448 = {}
_static_2616794434960 = __compile_zt_expr
_static_2616794437264 = __C2ZContextWrapper
_static_2616788338000 = __compile_zt_expr
_static_2616788339280 = __C2ZContextWrapper
_static_2616797973520 = {}
_static_2616780117328 = {}
_static_2616757991632 = __compile_zt_expr
_static_2616757981520 = __C2ZContextWrapper
_static_2616786239632 = {}
_static_2616786250832 = {'href': 'https://zope.readthedocs.io'}
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
            __append('<!DOCTYPE html>\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616787285648
            __attrs_2616787285648 = _static_2616787158544
            # <html ... (0:0)
            # --------------------------------------------------------
            __append('<html>\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616882639632
            __attrs_2616882639632 = _static_2616793283216
            # <head ... (0:0)
            # --------------------------------------------------------
            __append('<head>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616788679120
            __attrs_2616788679120 = _static_2616782805072
            # <title ... (0:0)
            # --------------------------------------------------------
            __append('<title>')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616787218320
            __default_2616787218320 = _DEFAULT_MARKER
            # <Value 'template/title' (4:24)> -> __cache_2616789239824
            __token = 56
            try:
                __zt_tmp = __attrs_2616788679120
            except NameError:
                __zt_tmp = None
            __cache_2616789239824 = _static_2616793510288('path', 'template/title', econtext=econtext)(_static_2616793509584(econtext, __zt_tmp))
            # <BinOp left=<Value 'template/title' (4:24)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 2614a648b90> -> __condition
            __expression = __cache_2616789239824
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                __append('The title')
            else:
                __content = __cache_2616789239824
                __content = __quote(__content, None, '\xad', None, None)
                if __content is not None:
                    __append(__content)
            __append('</title>\n    ')
            # <Static value=Dict(keys=[Constant(value='charset', kind=None)], values=[Constant(value='utf-8', kind=None)]) name=None at 26144c5bed0> -> __attrs_2616788888144
            __attrs_2616788888144 = _static_2616793729552
            # <meta ... (0:0)
            # --------------------------------------------------------
            __append('<meta charset="utf-8" />\n    ')
            # <Static value=Dict(keys=[Constant(value='name', kind=None), Constant(value='content', kind=None)], values=[Constant(value='viewport', kind=None), Constant(value='width=device-width, initial-scale=1, shrink-to-fit=no', kind=None)]) name=None at 26144c81d90> -> __attrs_2616787508112
            __attrs_2616787508112 = _static_2616793734480
            # <meta ... (0:0)
            # --------------------------------------------------------
            __append('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n    ')
            # <Static value=Dict(keys=[Constant(value='rel', kind=None), ..., Constant(value='href', kind=None)], values=[Constant(value='shortcut icon', kind=None), ..., Constant(value='/++resource++logo/favicon/favicon.svg', kind=None)]) name=None at 26144b0a3d0> -> __attrs_2616787507792
            __attrs_2616787507792 = _static_2616792132496
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link rel="shortcut icon" type="image/x-icon" href="/++resource++logo/favicon/favicon.svg" />\n    ')
            # <Static value=Dict(keys=[Constant(value='rel', kind=None), ..., Constant(value='href', kind=None)], values=[Constant(value='stylesheet', kind=None), ..., Constant(value='/++resource++logo/default.css', kind=None)]) name=None at 26144b0a590> -> __attrs_2616787158160
            __attrs_2616787158160 = _static_2616788591248
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link rel="stylesheet" type="text/css" href="/++resource++logo/default.css" />\n  </head>\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616788998736
            __attrs_2616788998736 = _static_2616786347088
            # <body ... (0:0)
            # --------------------------------------------------------
            __append('<body>\n    ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), Constant(value='target', kind=None)], values=[Constant(value='https://www.zope.dev', kind=None), Constant(value='_blank', kind=None)]) name=None at 26144c75050> -> __attrs_2616786804176
            __attrs_2616786804176 = _static_2616797507920
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a href="https://www.zope.dev" target="_blank">\n      ')
            # <Static value=Dict(keys=[Constant(value='src', kind=None), ..., Constant(value='alt', kind=None)], values=[Constant(value='/++resource++logo/Zope.svg', kind=None), ..., Constant(value='Zope logo', kind=None)]) name=None at 26144aacd50> -> __attrs_2616787133584
            __attrs_2616787133584 = _static_2616787676688
            # <img ... (0:0)
            # --------------------------------------------------------
            __append('<img src="/++resource++logo/Zope.svg" id="logo" alt="Zope logo" />\n    </a>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616787134416
            __attrs_2616787134416 = _static_2616787677648
            # <h1 ... (0:0)
            # --------------------------------------------------------
            __append('<h1>\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616791839248
            __attrs_2616791839248 = _static_2616794084880
            # <Value 'template/title' (18:27)> -> __condition
            __token = 612
            try:
                __zt_tmp = __attrs_2616791839248
            except NameError:
                __zt_tmp = None
            __condition = _static_2616788135888('path', 'template/title', econtext=econtext)(_static_2616788139024(econtext, __zt_tmp))
            if __condition:
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616791837456
                __default_2616791837456 = _DEFAULT_MARKER
                # <Value 'context/title_or_id' (18:56)> -> __cache_2616791836624
                __token = 641
                try:
                    __zt_tmp = __attrs_2616791839248
                except NameError:
                    __zt_tmp = None
                __cache_2616791836624 = _static_2616787539856('path', 'context/title_or_id', econtext=econtext)(_static_2616787538896(econtext, __zt_tmp))
                # <BinOp left=<Value 'context/title_or_id' (18:56)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26144f29d50> -> __condition
                __expression = __cache_2616791836624
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>\n        content title or id\n      </span>')
                else:
                    __content = __cache_2616791836624
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
            __append(':\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616783166032
            __attrs_2616783166032 = _static_2616787442448
            # <Value 'template/title' (21:27)> -> __condition
            __token = 733
            try:
                __zt_tmp = __attrs_2616783166032
            except NameError:
                __zt_tmp = None
            __condition = _static_2616794434960('path', 'template/title', econtext=econtext)(_static_2616794437264(econtext, __zt_tmp))
            if __condition:
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616783166288
                __default_2616783166288 = _DEFAULT_MARKER
                # <Value 'template/title' (21:56)> -> __cache_2616783170960
                __token = 762
                try:
                    __zt_tmp = __attrs_2616783166032
                except NameError:
                    __zt_tmp = None
                __cache_2616783170960 = _static_2616788338000('path', 'template/title', econtext=econtext)(_static_2616788339280(econtext, __zt_tmp))
                # <BinOp left=<Value 'template/title' (21:56)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261446e6250> -> __condition
                __expression = __cache_2616783170960
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>\n        optional template title\n      </span>')
                else:
                    __content = __cache_2616783170960
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
            __append('\n    </h1>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616783160400
            __attrs_2616783160400 = _static_2616797973520
            # <p ... (0:0)
            # --------------------------------------------------------
            __append('<p>\n      This is Page Template ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616783166544
            __attrs_2616783166544 = _static_2616780117328
            # <em ... (0:0)
            # --------------------------------------------------------
            __append('<em>')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616783174480
            __default_2616783174480 = _DEFAULT_MARKER
            # <Value 'template/id' (26:45)> -> __cache_2616783160912
            __token = 888
            try:
                __zt_tmp = __attrs_2616783166544
            except NameError:
                __zt_tmp = None
            __cache_2616783160912 = _static_2616757991632('path', 'template/id', econtext=econtext)(_static_2616757981520(econtext, __zt_tmp))
            # <BinOp left=<Value 'template/id' (26:45)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261446e5810> -> __condition
            __expression = __cache_2616783160912
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                __append('template id')
            else:
                __content = __cache_2616783160912
                __content = __quote(__content, None, '\xad', None, None)
                if __content is not None:
                    __append(__content)
            __append('</em>.\n    </p>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616783175312
            __attrs_2616783175312 = _static_2616786239632
            # <p ... (0:0)
            # --------------------------------------------------------
            __append('<p>\n      For documentation, please visit\n      ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='https://zope.readthedocs.io', kind=None)]) name=None at 26144fa8d10> -> __attrs_2616792354640
            __attrs_2616792354640 = _static_2616786250832
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a href="https://zope.readthedocs.io">https://zope.readthedocs.io</a>.\n    </p>\n  </body>\n</html>')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}