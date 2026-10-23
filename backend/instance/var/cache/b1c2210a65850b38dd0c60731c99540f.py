# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\distribution\\browser\\templates\\plone-overview.pt'

__tokens = {489: ('string:${context/absolute_url}/++resource++plone.distribution/plone.svg', 17, 18), 640: ('string:${context/absolute_url}/++theme++barceloneta/css/barceloneta.min.css', 21, 18), 796: ('string:${context/absolute_url}/++resource++plone-admin-ui.css', 25, 18), 938: ('string:${context/absolute_url}/++resource++plone.distribution/plone-overview.min.css', 29, 18), 1131: ('string:${context/absolute_url}/++resource++plone.distribution/plone-overview.min.js', 34, 19)}
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
_static_2616782725840 = {'xmlns': 'http://www.w3.org/1999/xhtml', 'lang': 'en', 'xml:lang': 'en'}
_static_2616793799056 = {}
_static_2616782980304 = {'charset': 'utf-8'}
_static_2616782991056 = {'name': 'viewport', 'content': 'width=device-width, initial-scale=1'}
_static_2616882640208 = {}
_static_2616794437008 = {'href': '${string:${context/absolute_url}/++resource++plone.distribution/plone.svg}', 'rel': 'icon', 'type': 'image/svg+xml'}
_static_2616788994576 = __compile_zt_expr
_static_2616788999824 = __C2ZContextWrapper
_static_2616788888080 = {'href': '${string:${context/absolute_url}/++theme++barceloneta/css/barceloneta.min.css}', 'rel': 'stylesheet', 'type': 'text/css'}
_static_2616793450960 = __compile_zt_expr
_static_2616793452816 = __C2ZContextWrapper
_static_2616792188816 = {'href': '${string:${context/absolute_url}/++resource++plone-admin-ui.css}', 'rel': 'stylesheet', 'type': 'text/css'}
_static_2616792299280 = __compile_zt_expr
_static_2616786240080 = __C2ZContextWrapper
_static_2616792198096 = {'href': '${string:${context/absolute_url}/++resource++plone.distribution/plone-overview.min.css}', 'rel': 'stylesheet', 'type': 'text/css'}
_static_2616782925264 = __compile_zt_expr
_static_2616782927632 = __C2ZContextWrapper
_static_2616852309904 = {'crossorigin': '', 'src': '${string:${context/absolute_url}/++resource++plone.distribution/plone-overview.min.js}', 'type': 'module'}
_static_2616828804176 = __compile_zt_expr
_static_2616828793424 = __C2ZContextWrapper
_static_2616821663312 = {}
_static_2616850794704 = {'id': 'root'}
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None), ..., Constant(value='xml:lang', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None), ..., Constant(value='en', kind=None)]) name=None at 261486b4c50> -> __attrs_2616757959120
            __attrs_2616757959120 = _static_2616782725840
            __previous_i18n_domain_2616757958672 = __i18n_domain
            __i18n_domain = 'plone'
            # <html ... (0:0)
            # --------------------------------------------------------
            __append('<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" >\n\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616757953360
            __attrs_2616757953360 = _static_2616793799056
            # <head ... (0:0)
            # --------------------------------------------------------
            __append('<head>\n    ')
            # <Static value=Dict(keys=[Constant(value='charset', kind=None)], values=[Constant(value='utf-8', kind=None)]) name=None at 26145557090> -> __attrs_2616798310992
            __attrs_2616798310992 = _static_2616782980304
            # <meta ... (0:0)
            # --------------------------------------------------------
            __append('<meta charset="utf-8" />\n    ')
            # <Static value=Dict(keys=[Constant(value='name', kind=None), Constant(value='content', kind=None)], values=[Constant(value='viewport', kind=None), Constant(value='width=device-width, initial-scale=1', kind=None)]) name=None at 26145556a10> -> __attrs_2616786239568
            __attrs_2616786239568 = _static_2616782991056
            # <meta ... (0:0)
            # --------------------------------------------------------
            __append('<meta name="viewport" content="width=device-width, initial-scale=1" />\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616786242064
            __attrs_2616786242064 = _static_2616882640208
            # <title ... (0:0)
            # --------------------------------------------------------
            __append('<title>')
            __stream_2616786253904 = []
            __append_2616786253904 = __stream_2616786253904.append
            __append_2616786253904('Welcome to Plone!')
            __msgid_2616786253904 = __re_whitespace(''.join(__stream_2616786253904)).strip()
            if __msgid_2616786253904:
                __append(translate(__msgid_2616786253904, mapping=None, default=__msgid_2616786253904, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</title>\n    ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='type', kind=None)], values=[Constant(value='${string:${context/absolute_url}/++resource++plone.distribution/plone.svg}', kind=None), ..., Constant(value='image/svg+xml', kind=None)]) name=None at 261449d4210> -> __attrs_2616787129872
            __attrs_2616787129872 = _static_2616794437008
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616782728720
            __default_2616782728720 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${string:${context/absolute_url}/++resource++plone.distribution/plone.svg}' (17:16)> braces_required=True translation=False default='"?"' default_marker='"?"' at 26144aac710> -> __attr_href
            __token = 489
            try:
                __zt_tmp = __attrs_2616787129872
            except NameError:
                __zt_tmp = None
            __attr_href = _static_2616788994576('string', '${context/absolute_url}/++resource++plone.distribution/plone.svg', econtext=econtext)(_static_2616788999824(econtext, __zt_tmp))
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
            __append(' rel="icon" type="image/svg+xml" />\n    ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='type', kind=None)], values=[Constant(value='${string:${context/absolute_url}/++theme++barceloneta/css/barceloneta.min.css}', kind=None), ..., Constant(value='text/css', kind=None)]) name=None at 26144aaf350> -> __attrs_2616794648656
            __attrs_2616794648656 = _static_2616788888080
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616787124688
            __default_2616787124688 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${string:${context/absolute_url}/++theme++barceloneta/css/barceloneta.min.css}' (21:16)> braces_required=True translation=False default='"?"' default_marker='"?"' at 26144aae690> -> __attr_href
            __token = 640
            try:
                __zt_tmp = __attrs_2616794648656
            except NameError:
                __zt_tmp = None
            __attr_href = _static_2616793450960('string', '${context/absolute_url}/++theme++barceloneta/css/barceloneta.min.css', econtext=econtext)(_static_2616793452816(econtext, __zt_tmp))
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
            __append(' rel="stylesheet" type="text/css" />\n    ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='type', kind=None)], values=[Constant(value='${string:${context/absolute_url}/++resource++plone-admin-ui.css}', kind=None), ..., Constant(value='text/css', kind=None)]) name=None at 261451d8910> -> __attrs_2616793340176
            __attrs_2616793340176 = _static_2616792188816
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616793340688
            __default_2616793340688 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${string:${context/absolute_url}/++resource++plone-admin-ui.css}' (25:16)> braces_required=True translation=False default='"?"' default_marker='"?"' at 261418627d0> -> __attr_href
            __token = 796
            try:
                __zt_tmp = __attrs_2616793340176
            except NameError:
                __zt_tmp = None
            __attr_href = _static_2616792299280('string', '${context/absolute_url}/++resource++plone-admin-ui.css', econtext=econtext)(_static_2616786240080(econtext, __zt_tmp))
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
            __append(' rel="stylesheet" type="text/css" />\n    ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='type', kind=None)], values=[Constant(value='${string:${context/absolute_url}/++resource++plone.distribution/plone-overview.min.css}', kind=None), ..., Constant(value='text/css', kind=None)]) name=None at 2614509a610> -> __attrs_2616782805072
            __attrs_2616782805072 = _static_2616792198096
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616793337168
            __default_2616793337168 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${string:${context/absolute_url}/++resource++plone.distribution/plone-overview.min.css}' (29:16)> braces_required=True translation=False default='"?"' default_marker='"?"' at 26145099ed0> -> __attr_href
            __token = 938
            try:
                __zt_tmp = __attrs_2616782805072
            except NameError:
                __zt_tmp = None
            __attr_href = _static_2616782925264('string', '${context/absolute_url}/++resource++plone.distribution/plone-overview.min.css', econtext=econtext)(_static_2616782927632(econtext, __zt_tmp))
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
            __append(' rel="stylesheet" type="text/css" />\n    ')
            # <Static value=Dict(keys=[Constant(value='crossorigin', kind=None), ..., Constant(value='type', kind=None)], values=[Constant(value='', kind=None), ..., Constant(value='module', kind=None)]) name=None at 2614468c650> -> __attrs_2616788590032
            __attrs_2616788590032 = _static_2616852309904
            # <script ... (0:0)
            # --------------------------------------------------------
            __append('<script crossorigin=""')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616782809360
            __default_2616782809360 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${string:${context/absolute_url}/++resource++plone.distribution/plone-overview.min.js}' (34:17)> braces_required=True translation=False default='"?"' default_marker='"?"' at 2614468c050> -> __attr_src
            __token = 1131
            try:
                __zt_tmp = __attrs_2616788590032
            except NameError:
                __zt_tmp = None
            __attr_src = _static_2616828804176('string', '${context/absolute_url}/++resource++plone.distribution/plone-overview.min.js', econtext=econtext)(_static_2616828793424(econtext, __zt_tmp))
            __attr_src = __quote(__attr_src, '"', '&quot;', None, _DEFAULT_MARKER)
            __attr_src = __attr_src
            if __attr_src is None:
                pass
            elif __attr_src is _DEFAULT_MARKER:
                __attr_src = None
            else:
                __tt = type(__attr_src)
                if __tt is bytes:
                    __attr_src = decode(__attr_src)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __attr_src = str(__attr_src)
                    else:
                        __markup = getattr(__attr_src, '__html__', None)
                        if __markup is None:
                            __converted = translate(__attr_src, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __attr_src = str(__attr_src) if __attr_src is __converted else __converted
                        else:
                            __attr_src = __markup()
            if __attr_src is not None:
                __append(' src="%s"' % __attr_src)
            __append(' type="module" ></script>\n  </head>\n\n\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616788584848
            __attrs_2616788584848 = _static_2616821663312
            # <body ... (0:0)
            # --------------------------------------------------------
            __append('<body>\n    ')
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='root', kind=None)]) name=None at 26144c11850> -> __attrs_2616788138704
            __attrs_2616788138704 = _static_2616850794704
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div id="root"></div>\n  </body>\n</html>')
            __i18n_domain = __previous_i18n_domain_2616757958672
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}