# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\Products\\Five\\utilities\\browser\\manage_interfaces.pt'

__tokens = {27: ('context/manage_page_header', 1, 27), 99: ('context/manage_tabs', 2, 27), 193: ('context/@@edit-markers.html/main', 6, 30), 193: ('context/@@edit-markers.html/main', 6, 30), 267: ('context/manage_page_footer', 10, 27)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_2616819117520 = {}
_static_2616825778832 = __compile_zt_expr
_static_2616825777424 = __C2ZContextWrapper
_static_2616819496208 = {}
_static_2616852454544 = __compile_zt_expr
_static_2616852460304 = __C2ZContextWrapper
_static_2616819595920 = {'class': 'container-fluid'}
_static_2616794024720 = {}
_static_2616788032656 = 'main'
_static_2616851447184 = __compile_zt_expr
_static_2616787315344 = __C2ZContextWrapper
_static_2616786612048 = {}
_static_2616788134736 = __compile_zt_expr
_static_2616788137680 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616822076944
            __attrs_2616822076944 = _static_2616819117520
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616822081424
            __default_2616822081424 = _DEFAULT_MARKER
            # <Value 'context/manage_page_header' (1:27)> -> __cache_2616822087312
            __token = 27
            try:
                __zt_tmp = __attrs_2616822076944
            except NameError:
                __zt_tmp = None
            __cache_2616822087312 = _static_2616825778832('path', 'context/manage_page_header', econtext=econtext)(_static_2616825777424(econtext, __zt_tmp))
            # <BinOp left=<Value 'context/manage_page_header' (1:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146c00d10> -> __condition
            __expression = __cache_2616822087312
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                # <h1 ... (0:0)
                # --------------------------------------------------------
                __append('<h1>PAGE HEADER</h1>')
            else:
                __content = __cache_2616822087312
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616825058384
            __attrs_2616825058384 = _static_2616819496208
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616825057552
            __default_2616825057552 = _DEFAULT_MARKER
            # <Value 'context/manage_tabs' (2:27)> -> __cache_2616825057296
            __token = 99
            try:
                __zt_tmp = __attrs_2616825058384
            except NameError:
                __zt_tmp = None
            __cache_2616825057296 = _static_2616852454544('path', 'context/manage_tabs', econtext=econtext)(_static_2616852460304(econtext, __zt_tmp))
            # <BinOp left=<Value 'context/manage_tabs' (2:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146ed8950> -> __condition
            __expression = __cache_2616825057296
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                # <h2 ... (0:0)
                # --------------------------------------------------------
                __append('<h2>TABS</h2>')
            else:
                __content = __cache_2616825057296
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n\n')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='container-fluid', kind=None)]) name=None at 26146eda410> -> __attrs_2616825053328
            __attrs_2616825053328 = _static_2616819595920
            # <main ... (0:0)
            # --------------------------------------------------------
            __append('<main class="container-fluid">\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616825063952
            __attrs_2616825063952 = _static_2616794024720
            __backup_macroname_2616794264192 = get('macroname', __marker)
            # <Static value=Constant(value='main', kind=None) name=None at 26146eda1d0> -> __value
            __value = _static_2616788032656
            econtext['macroname'] = __value
            # <Value 'context/@@edit-markers.html/main' (6:30)> -> __macro
            __token = 193
            try:
                __zt_tmp = __attrs_2616825063952
            except NameError:
                __zt_tmp = None
            __macro = _static_2616851447184('path', 'context/@@edit-markers.html/main', econtext=econtext)(_static_2616787315344(econtext, __zt_tmp))
            __token = 193
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_2616794264192 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_2616794264192
            __append('\n\n</main>\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616825056144
            __attrs_2616825056144 = _static_2616786612048
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616825067856
            __default_2616825067856 = _DEFAULT_MARKER
            # <Value 'context/manage_page_footer' (10:27)> -> __cache_2616825056400
            __token = 267
            try:
                __zt_tmp = __attrs_2616825056144
            except NameError:
                __zt_tmp = None
            __cache_2616825056400 = _static_2616788134736('path', 'context/manage_page_footer', econtext=econtext)(_static_2616788137680(econtext, __zt_tmp))
            # <BinOp left=<Value 'context/manage_page_footer' (10:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146eda8d0> -> __condition
            __expression = __cache_2616825056400
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                # <h1 ... (0:0)
                # --------------------------------------------------------
                __append('<h1>PAGE FOOTER</h1>')
            else:
                __content = __cache_2616825056400
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}