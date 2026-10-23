# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\z3c\\form\\browser\\text_display.pt'

__tokens = {173: ('view/id', 5, 29), 213: (' view/klas', 6, 31), 256: ('e view/sty', 7, 30), 299: ('le view/ti', 8, 29), 341: ('ang view/', 9, 27), 385: ('lick view/on', 10, 29), 435: ('click view/ondb', 11, 31), 489: ('sedown view/onmo', 12, 31), 542: ('mouseup view/o', 13, 28), 595: ('ouseover view/on', 14, 29), 650: ('mousemove view/o', 15, 28), 704: ('onmouseout view', 16, 26), 757: (' onkeypress vie', 17, 25), 809: ('   onkeydown v', 18, 23), 858: ('      onkeyu', 19, 20), 918: ('view/value', 20, 21), 939: ('view/value', 20, 42)}
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
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696099559056 = {'xmlns': 'http://www.w3.org/1999/xhtml'}
_static_1696068776080 = {'id': '', 'class': '', 'style': 'view/style', 'title': 'view/title', 'lang': 'view/lang', 'onclick': 'view/onclick', 'ondblclick': 'view/ondblclick', 'onmousedown': 'view/onmousedown', 'onmouseup': 'view/onmouseup', 'onmouseover': 'view/onmouseover', 'onmousemove': 'view/onmousemove', 'onmouseout': 'view/onmouseout', 'onkeypress': 'view/onkeypress', 'onkeydown': 'view/onkeydown', 'onkeyup': 'view/onkeyup'}
_static_1696068231056 = __compile_zt_expr
_static_1696126645968 = __C2ZContextWrapper
_static_1696101120592 = __compile_zt_expr
_static_1696099464528 = __C2ZContextWrapper
_static_1696095323024 = __compile_zt_expr
_static_1696095338128 = __C2ZContextWrapper
_static_1696125954832 = __compile_zt_expr
_static_1696125955856 = __C2ZContextWrapper
_static_1696060979216 = __compile_zt_expr
_static_1696060977040 = __C2ZContextWrapper
_static_1696094052176 = __compile_zt_expr
_static_1696094049616 = __C2ZContextWrapper
_static_1696127196048 = __compile_zt_expr
_static_1696127197392 = __C2ZContextWrapper
_static_1696095927248 = __compile_zt_expr
_static_1696095927696 = __C2ZContextWrapper
_static_1696094390736 = __compile_zt_expr
_static_1696095337552 = __C2ZContextWrapper
_static_1696095246800 = __compile_zt_expr
_static_1696098985168 = __C2ZContextWrapper
_static_1696123617616 = __compile_zt_expr
_static_1696123619216 = __C2ZContextWrapper
_static_1696098724048 = __compile_zt_expr
_static_1696098723408 = __C2ZContextWrapper
_static_1696067208848 = __compile_zt_expr
_static_1696067133264 = __C2ZContextWrapper
_static_1696163512080 = __compile_zt_expr
_static_1696163561616 = __C2ZContextWrapper
_static_1696126022032 = __compile_zt_expr
_static_1696164057552 = __C2ZContextWrapper
_static_1696101584464 = {}
_static_1696163967760 = __compile_zt_expr
_static_1696095608144 = __C2ZContextWrapper
_static_1696163735568 = __compile_zt_expr
_static_1696163740624 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None)]) name=None at 18ae715c210> -> __attrs_1696094088016
            __attrs_1696094088016 = _static_1696099559056
            __append('\n    ')
            # <Static value=Dict(keys=[Constant(value='id', kind=None), ..., Constant(value='onkeyup', kind=None)], values=[Constant(value='', kind=None), ..., Constant(value='view/onkeyup', kind=None)]) name=None at 18ae5361550> -> __attrs_1696096000528
            __attrs_1696096000528 = _static_1696068776080
            # <span ... (0:0)
            # --------------------------------------------------------
            __append('<span')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696060794320
            __default_1696060794320 = _DEFAULT_MARKER
            # <Substitution 'view/id' (5:29)> -> __attr_id
            __token = 173
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_id = _static_1696068231056('path', 'view/id', econtext=econtext)(_static_1696126645968(econtext, __zt_tmp))
            __attr_id = __quote(__attr_id, '"', '&quot;', '', _DEFAULT_MARKER)
            if __attr_id is not None:
                __append(' id="%s"' % __attr_id)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696060793552
            __default_1696060793552 = _DEFAULT_MARKER
            # <Substitution 'view/klass' (6:31)> -> __attr_class
            __token = 213
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_class = _static_1696101120592('path', 'view/klass', econtext=econtext)(_static_1696099464528(econtext, __zt_tmp))
            __attr_class = __quote(__attr_class, '"', '&quot;', '', _DEFAULT_MARKER)
            if __attr_class is not None:
                __append(' class="%s"' % __attr_class)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696060786000
            __default_1696060786000 = _DEFAULT_MARKER
            # <Substitution 'view/style' (7:30)> -> __attr_style
            __token = 256
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_style = _static_1696095323024('path', 'view/style', econtext=econtext)(_static_1696095338128(econtext, __zt_tmp))
            __attr_style = __quote(__attr_style, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_style is not None:
                __append(' style="%s"' % __attr_style)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696094889936
            __default_1696094889936 = _DEFAULT_MARKER
            # <Substitution 'view/title' (8:29)> -> __attr_title
            __token = 299
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_title = _static_1696125954832('path', 'view/title', econtext=econtext)(_static_1696125955856(econtext, __zt_tmp))
            __attr_title = __quote(__attr_title, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_title is not None:
                __append(' title="%s"' % __attr_title)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696094885840
            __default_1696094885840 = _DEFAULT_MARKER
            # <Substitution 'view/lang' (9:27)> -> __attr_lang
            __token = 341
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_lang = _static_1696060979216('path', 'view/lang', econtext=econtext)(_static_1696060977040(econtext, __zt_tmp))
            __attr_lang = __quote(__attr_lang, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_lang is not None:
                __append(' lang="%s"' % __attr_lang)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696094896016
            __default_1696094896016 = _DEFAULT_MARKER
            # <Substitution 'view/onclick' (10:29)> -> __attr_onclick
            __token = 385
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onclick = _static_1696094052176('path', 'view/onclick', econtext=econtext)(_static_1696094049616(econtext, __zt_tmp))
            __attr_onclick = __quote(__attr_onclick, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onclick is not None:
                __append(' onclick="%s"' % __attr_onclick)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696094887440
            __default_1696094887440 = _DEFAULT_MARKER
            # <Substitution 'view/ondblclick' (11:31)> -> __attr_ondblclick
            __token = 435
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_ondblclick = _static_1696127196048('path', 'view/ondblclick', econtext=econtext)(_static_1696127197392(econtext, __zt_tmp))
            __attr_ondblclick = __quote(__attr_ondblclick, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_ondblclick is not None:
                __append(' ondblclick="%s"' % __attr_ondblclick)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696094881616
            __default_1696094881616 = _DEFAULT_MARKER
            # <Substitution 'view/onmousedown' (12:31)> -> __attr_onmousedown
            __token = 489
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onmousedown = _static_1696095927248('path', 'view/onmousedown', econtext=econtext)(_static_1696095927696(econtext, __zt_tmp))
            __attr_onmousedown = __quote(__attr_onmousedown, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onmousedown is not None:
                __append(' onmousedown="%s"' % __attr_onmousedown)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696071641616
            __default_1696071641616 = _DEFAULT_MARKER
            # <Substitution 'view/onmouseup' (13:28)> -> __attr_onmouseup
            __token = 542
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onmouseup = _static_1696094390736('path', 'view/onmouseup', econtext=econtext)(_static_1696095337552(econtext, __zt_tmp))
            __attr_onmouseup = __quote(__attr_onmouseup, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onmouseup is not None:
                __append(' onmouseup="%s"' % __attr_onmouseup)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696095995408
            __default_1696095995408 = _DEFAULT_MARKER
            # <Substitution 'view/onmouseover' (14:29)> -> __attr_onmouseover
            __token = 595
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onmouseover = _static_1696095246800('path', 'view/onmouseover', econtext=econtext)(_static_1696098985168(econtext, __zt_tmp))
            __attr_onmouseover = __quote(__attr_onmouseover, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onmouseover is not None:
                __append(' onmouseover="%s"' % __attr_onmouseover)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696095996624
            __default_1696095996624 = _DEFAULT_MARKER
            # <Substitution 'view/onmousemove' (15:28)> -> __attr_onmousemove
            __token = 650
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onmousemove = _static_1696123617616('path', 'view/onmousemove', econtext=econtext)(_static_1696123619216(econtext, __zt_tmp))
            __attr_onmousemove = __quote(__attr_onmousemove, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onmousemove is not None:
                __append(' onmousemove="%s"' % __attr_onmousemove)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696096005776
            __default_1696096005776 = _DEFAULT_MARKER
            # <Substitution 'view/onmouseout' (16:26)> -> __attr_onmouseout
            __token = 704
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onmouseout = _static_1696098724048('path', 'view/onmouseout', econtext=econtext)(_static_1696098723408(econtext, __zt_tmp))
            __attr_onmouseout = __quote(__attr_onmouseout, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onmouseout is not None:
                __append(' onmouseout="%s"' % __attr_onmouseout)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696096007120
            __default_1696096007120 = _DEFAULT_MARKER
            # <Substitution 'view/onkeypress' (17:25)> -> __attr_onkeypress
            __token = 757
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onkeypress = _static_1696067208848('path', 'view/onkeypress', econtext=econtext)(_static_1696067133264(econtext, __zt_tmp))
            __attr_onkeypress = __quote(__attr_onkeypress, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onkeypress is not None:
                __append(' onkeypress="%s"' % __attr_onkeypress)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696095998160
            __default_1696095998160 = _DEFAULT_MARKER
            # <Substitution 'view/onkeydown' (18:23)> -> __attr_onkeydown
            __token = 809
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onkeydown = _static_1696163512080('path', 'view/onkeydown', econtext=econtext)(_static_1696163561616(econtext, __zt_tmp))
            __attr_onkeydown = __quote(__attr_onkeydown, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onkeydown is not None:
                __append(' onkeydown="%s"' % __attr_onkeydown)
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696095997328
            __default_1696095997328 = _DEFAULT_MARKER
            # <Substitution 'view/onkeyup' (19:20)> -> __attr_onkeyup
            __token = 858
            try:
                __zt_tmp = __attrs_1696096000528
            except NameError:
                __zt_tmp = None
            __attr_onkeyup = _static_1696126022032('path', 'view/onkeyup', econtext=econtext)(_static_1696164057552(econtext, __zt_tmp))
            __attr_onkeyup = __quote(__attr_onkeyup, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_onkeyup is not None:
                __append(' onkeyup="%s"' % __attr_onkeyup)
            __append('>')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696071355600
            __attrs_1696071355600 = _static_1696101584464
            # <Value 'view/value' (20:21)> -> __condition
            __token = 918
            try:
                __zt_tmp = __attrs_1696071355600
            except NameError:
                __zt_tmp = None
            __condition = _static_1696163967760('path', 'view/value', econtext=econtext)(_static_1696095608144(econtext, __zt_tmp))
            if __condition:
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696095994000
                __default_1696095994000 = _DEFAULT_MARKER
                # <Value 'view/value' (20:42)> -> __cache_1696096005712
                __token = 939
                try:
                    __zt_tmp = __attrs_1696071355600
                except NameError:
                    __zt_tmp = None
                __cache_1696096005712 = _static_1696163735568('path', 'view/value', econtext=econtext)(_static_1696163740624(econtext, __zt_tmp))
                # <BinOp left=<Value 'view/value' (20:42)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18ae7333050> -> __condition
                __expression = __cache_1696096005712
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_1696096005712
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
            __append('</span>\n\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}