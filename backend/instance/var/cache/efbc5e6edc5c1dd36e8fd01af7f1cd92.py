# -*- coding: utf-8 -*-
__filename = '/index_html'

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
_static_2616794261712 = {}
_static_2616794264080 = {}
_static_2616827980048 = {}
_static_2616792188752 = __compile_zt_expr
_static_2616792193488 = __C2ZContextWrapper
_static_2616794494096 = {'charset': 'utf-8'}
_static_2616797991312 = {'name': 'viewport', 'content': 'width=device-width, initial-scale=1, shrink-to-fit=no'}
_static_2616787089232 = {'rel': 'shortcut icon', 'type': 'image/x-icon', 'href': '/++resource++logo/favicon/favicon.svg'}
_static_2616820892496 = {'rel': 'stylesheet', 'type': 'text/css', 'href': '/++resource++logo/default.css'}
_static_2616820901776 = {}
_static_2616825066640 = {'href': 'https://www.zope.dev', 'target': '_blank'}
_static_2616825064272 = {'src': '/++resource++logo/Zope.svg', 'id': 'logo', 'alt': 'Zope logo'}
_static_2616825053904 = {}
_static_2616822211984 = {}
_static_2616828495888 = __compile_zt_expr
_static_2616828501584 = __C2ZContextWrapper
_static_2616788234704 = __compile_zt_expr
_static_2616788233232 = __C2ZContextWrapper
_static_2616828537232 = {}
_static_2616782725136 = __compile_zt_expr
_static_2616822085072 = __C2ZContextWrapper
_static_2616822086288 = __compile_zt_expr
_static_2616822825488 = __C2ZContextWrapper
_static_2616758642512 = {}
_static_2616758648592 = {}
_static_2616822218640 = __compile_zt_expr
_static_2616822217744 = __C2ZContextWrapper
_static_2616797799184 = {}
_static_2616798000912 = {'href': 'https://zope.readthedocs.io'}
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
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616850585744
            __attrs_2616850585744 = _static_2616794261712
            # <html ... (0:0)
            # --------------------------------------------------------
            __append('<html>\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616850592144
            __attrs_2616850592144 = _static_2616794264080
            # <head ... (0:0)
            # --------------------------------------------------------
            __append('<head>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616820407888
            __attrs_2616820407888 = _static_2616827980048
            # <title ... (0:0)
            # --------------------------------------------------------
            __append('<title>')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616850588048
            __default_2616850588048 = _DEFAULT_MARKER
            # <Value 'template/title' (4:24)> -> __cache_2616850584848
            __token = 56
            try:
                __zt_tmp = __attrs_2616820407888
            except NameError:
                __zt_tmp = None
            __cache_2616850584848 = _static_2616792188752('path', 'template/title', econtext=econtext)(_static_2616792193488(econtext, __zt_tmp))
            # <BinOp left=<Value 'template/title' (4:24)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26148733090> -> __condition
            __expression = __cache_2616850584848
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                __append('The title')
            else:
                __content = __cache_2616850584848
                __content = __quote(__content, None, '\xad', None, None)
                if __content is not None:
                    __append(__content)
            __append('</title>\n    ')
            # <Static value=Dict(keys=[Constant(value='charset', kind=None)], values=[Constant(value='utf-8', kind=None)]) name=None at 26146a68cd0> -> __attrs_2616820407056
            __attrs_2616820407056 = _static_2616794494096
            # <meta ... (0:0)
            # --------------------------------------------------------
            __append('<meta charset="utf-8" />\n    ')
            # <Static value=Dict(keys=[Constant(value='name', kind=None), Constant(value='content', kind=None)], values=[Constant(value='viewport', kind=None), Constant(value='width=device-width, initial-scale=1, shrink-to-fit=no', kind=None)]) name=None at 26146a6b5d0> -> __attrs_2616820401168
            __attrs_2616820401168 = _static_2616797991312
            # <meta ... (0:0)
            # --------------------------------------------------------
            __append('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n    ')
            # <Static value=Dict(keys=[Constant(value='rel', kind=None), ..., Constant(value='href', kind=None)], values=[Constant(value='shortcut icon', kind=None), ..., Constant(value='/++resource++logo/favicon/favicon.svg', kind=None)]) name=None at 261451bae10> -> __attrs_2616850798480
            __attrs_2616850798480 = _static_2616787089232
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link rel="shortcut icon" type="image/x-icon" href="/++resource++logo/favicon/favicon.svg" />\n    ')
            # <Static value=Dict(keys=[Constant(value='rel', kind=None), ..., Constant(value='href', kind=None)], values=[Constant(value='stylesheet', kind=None), ..., Constant(value='/++resource++logo/default.css', kind=None)]) name=None at 26148765190> -> __attrs_2616851792784
            __attrs_2616851792784 = _static_2616820892496
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link rel="stylesheet" type="text/css" href="/++resource++logo/default.css" />\n  </head>\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616851807312
            __attrs_2616851807312 = _static_2616820901776
            # <body ... (0:0)
            # --------------------------------------------------------
            __append('<body>\n    ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), Constant(value='target', kind=None)], values=[Constant(value='https://www.zope.dev', kind=None), Constant(value='_blank', kind=None)]) name=None at 2614885b890> -> __attrs_2616851793616
            __attrs_2616851793616 = _static_2616825066640
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a href="https://www.zope.dev" target="_blank">\n      ')
            # <Static value=Dict(keys=[Constant(value='src', kind=None), ..., Constant(value='alt', kind=None)], values=[Constant(value='/++resource++logo/Zope.svg', kind=None), ..., Constant(value='Zope logo', kind=None)]) name=None at 2614885be50> -> __attrs_2616819494032
            __attrs_2616819494032 = _static_2616825064272
            # <img ... (0:0)
            # --------------------------------------------------------
            __append('<img src="/++resource++logo/Zope.svg" id="logo" alt="Zope logo" />\n    </a>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616819494672
            __attrs_2616819494672 = _static_2616825053904
            # <h1 ... (0:0)
            # --------------------------------------------------------
            __append('<h1>\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616819493072
            __attrs_2616819493072 = _static_2616822211984
            # <Value 'template/title' (18:27)> -> __condition
            __token = 612
            try:
                __zt_tmp = __attrs_2616819493072
            except NameError:
                __zt_tmp = None
            __condition = _static_2616828495888('path', 'template/title', econtext=econtext)(_static_2616828501584(econtext, __zt_tmp))
            if __condition:
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819488848
                __default_2616819488848 = _DEFAULT_MARKER
                # <Value 'context/title_or_id' (18:56)> -> __cache_2616819492624
                __token = 641
                try:
                    __zt_tmp = __attrs_2616819493072
                except NameError:
                    __zt_tmp = None
                __cache_2616819492624 = _static_2616788234704('path', 'context/title_or_id', econtext=econtext)(_static_2616788233232(econtext, __zt_tmp))
                # <BinOp left=<Value 'context/title_or_id' (18:56)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 2614698a850> -> __condition
                __expression = __cache_2616819492624
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>\n        content title or id\n      </span>')
                else:
                    __content = __cache_2616819492624
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
            __append(':\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616852449360
            __attrs_2616852449360 = _static_2616828537232
            # <Value 'template/title' (21:27)> -> __condition
            __token = 733
            try:
                __zt_tmp = __attrs_2616852449360
            except NameError:
                __zt_tmp = None
            __condition = _static_2616782725136('path', 'template/title', econtext=econtext)(_static_2616822085072(econtext, __zt_tmp))
            if __condition:
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616852460304
                __default_2616852460304 = _DEFAULT_MARKER
                # <Value 'template/title' (21:56)> -> __cache_2616852462608
                __token = 762
                try:
                    __zt_tmp = __attrs_2616852449360
                except NameError:
                    __zt_tmp = None
                __cache_2616852462608 = _static_2616822086288('path', 'template/title', econtext=econtext)(_static_2616822825488(econtext, __zt_tmp))
                # <BinOp left=<Value 'template/title' (21:56)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261488fa010> -> __condition
                __expression = __cache_2616852462608
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>\n        optional template title\n      </span>')
                else:
                    __content = __cache_2616852462608
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
            __append('\n    </h1>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616852462032
            __attrs_2616852462032 = _static_2616758642512
            # <p ... (0:0)
            # --------------------------------------------------------
            __append('<p>\n      This is Page Template ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827611152
            __attrs_2616827611152 = _static_2616758648592
            # <em ... (0:0)
            # --------------------------------------------------------
            __append('<em>')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616852455632
            __default_2616852455632 = _DEFAULT_MARKER
            # <Value 'template/id' (26:45)> -> __cache_2616852454352
            __token = 888
            try:
                __zt_tmp = __attrs_2616827611152
            except NameError:
                __zt_tmp = None
            __cache_2616852454352 = _static_2616822218640('path', 'template/id', econtext=econtext)(_static_2616822217744(econtext, __zt_tmp))
            # <BinOp left=<Value 'template/id' (26:45)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261488fa050> -> __condition
            __expression = __cache_2616852454352
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                __append('template id')
            else:
                __content = __cache_2616852454352
                __content = __quote(__content, None, '\xad', None, None)
                if __content is not None:
                    __append(__content)
            __append('</em>.\n    </p>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827613072
            __attrs_2616827613072 = _static_2616797799184
            # <p ... (0:0)
            # --------------------------------------------------------
            __append('<p>\n      For documentation, please visit\n      ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='https://zope.readthedocs.io', kind=None)]) name=None at 26147148a50> -> __attrs_2616758803664
            __attrs_2616758803664 = _static_2616798000912
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a href="https://zope.readthedocs.io">https://zope.readthedocs.io</a>.\n    </p>\n  </body>\n</html>')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}