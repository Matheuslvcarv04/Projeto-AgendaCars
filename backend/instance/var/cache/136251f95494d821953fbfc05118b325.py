# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\path_bar.pt'

__tokens = {96: ('python:view.breadcrumbs', 5, 19), 288: ('python:view.navigation_root_url', 12, 45), 417: ('breadcrumbs', 15, 34), 494: ('not: repeat/crumb/end', 17, 27), 537: ("python:crumb['absolute_url']", 18, 20), 570: ("python:crumb['Title']", 18, 53), 704: ('repeat/crumb/end', 21, 27), 733: ("python:crumb['Title']", 22, 11)}
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
_static_1696162963664 = {'id': 'portal-breadcrumbs', 'aria-label': 'breadcrumb'}
_static_1696162665488 = __compile_zt_expr
_static_1696162662800 = __C2ZContextWrapper
_static_1696163293328 = {'class': 'container'}
_static_1696162733904 = {'class': 'breadcrumb'}
_static_1696164007568 = {'class': 'breadcrumb-item'}
_static_1696163098448 = {'href': '${python:view.navigation_root_url}'}
_static_1696162017552 = __compile_zt_expr
_static_1696162009424 = __C2ZContextWrapper
_static_1696162668368 = {}
_static_1696162904400 = __compile_zt_expr
_static_1696162893200 = __C2ZContextWrapper
_static_1696162899088 = {'class': 'breadcrumb-item'}
_static_1696162996624 = __compile_zt_expr
_static_1696163003088 = __C2ZContextWrapper
_static_1696163001104 = {'href': "${python:crumb['absolute_url']}"}
_static_1696164116560 = __compile_zt_expr
_static_1696164107664 = __C2ZContextWrapper
_static_1696163191504 = __compile_zt_expr
_static_1696163188496 = __C2ZContextWrapper
_static_1696093158096 = {'class': 'breadcrumb-item active', 'aria-current': 'page'}
_static_1696162936080 = __compile_zt_expr
_static_1696164586320 = __C2ZContextWrapper
_static_1696163524048 = __compile_zt_expr
_static_1696163521552 = __C2ZContextWrapper
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
            __append('\n')
            # <Static value=Dict(keys=[Constant(value='id', kind=None), Constant(value='aria-label', kind=None)], values=[Constant(value='portal-breadcrumbs', kind=None), Constant(value='breadcrumb', kind=None)]) name=None at 18aeb326610> -> __attrs_1696162045520
            __attrs_1696162045520 = _static_1696162963664
            __backup_breadcrumbs_1696071879616 = get('breadcrumbs', __marker)
            # <Value 'python:view.breadcrumbs' (5:19)> -> __value
            __token = 96
            try:
                __zt_tmp = __attrs_1696162045520
            except NameError:
                __zt_tmp = None
            __value = _static_1696162665488('python', 'view.breadcrumbs', econtext=econtext)(_static_1696162662800(econtext, __zt_tmp))
            econtext['breadcrumbs'] = __value
            __previous_i18n_domain_1696162037840 = __i18n_domain
            __i18n_domain = 'plone'
            # <nav ... (0:0)
            # --------------------------------------------------------
            __append('<nav id="portal-breadcrumbs"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163065616
            __default_1696163065616 = _DEFAULT_MARKER
            # <Translate msgid=None node=Constant(value='breadcrumb', kind=None) at 18aeb327c90> -> __attr_aria_label
            __attr_aria_label = 'breadcrumb'
            __attr_aria_label = translate(__attr_aria_label, default=__attr_aria_label, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
            if __attr_aria_label is not None:
                __append(' aria-label="%s"' % __attr_aria_label)
            __append(' >\n  ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='container', kind=None)]) name=None at 18aeb22c190> -> __attrs_1696162040912
            __attrs_1696162040912 = _static_1696163293328
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="container">\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='breadcrumb', kind=None)]) name=None at 18aeb22ef10> -> __attrs_1696162048592
            __attrs_1696162048592 = _static_1696162733904
            # <ol ... (0:0)
            # --------------------------------------------------------
            __append('<ol class="breadcrumb">\n      ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='breadcrumb-item', kind=None)]) name=None at 18ae731efd0> -> __attrs_1696162771920
            __attrs_1696162771920 = _static_1696164007568
            # <li ... (0:0)
            # --------------------------------------------------------
            __append('<li class="breadcrumb-item">')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='${python:view.navigation_root_url}', kind=None)]) name=None at 18aeb2df350> -> __attrs_1696162772688
            __attrs_1696162772688 = _static_1696163098448
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162762896
            __default_1696162762896 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution '${python:view.navigation_root_url}' (12:43)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb2df050> -> __attr_href
            __token = 288
            try:
                __zt_tmp = __attrs_1696162772688
            except NameError:
                __zt_tmp = None
            __attr_href = _static_1696162017552('python', 'view.navigation_root_url', econtext=econtext)(_static_1696162009424(econtext, __zt_tmp))
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
            __append(' >')
            __stream_1696162766800 = []
            __append_1696162766800 = __stream_1696162766800.append
            __append_1696162766800('Home')
            __msgid_1696162766800 = __re_whitespace(''.join(__stream_1696162766800)).strip()
            __append(translate('tabs_home', mapping=None, default=__msgid_1696162766800, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</a></li>\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162774544
            __attrs_1696162774544 = _static_1696162668368
            __backup_crumb_1696136264320 = get('crumb', __marker)
            # <Value 'breadcrumbs' (15:34)> -> __iterator
            __token = 417
            try:
                __zt_tmp = __attrs_1696162774544
            except NameError:
                __zt_tmp = None
            __iterator = _static_1696162904400('path', 'breadcrumbs', econtext=econtext)(_static_1696162893200(econtext, __zt_tmp))
            __iterator, ____index_1696162765776 = getname('repeat')('crumb', __iterator)
            econtext['crumb'] = None
            for __item in __iterator:
                econtext['crumb'] = __item
                __append('\n        ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='breadcrumb-item', kind=None)]) name=None at 18aeb2dc450> -> __attrs_1696162763792
                __attrs_1696162763792 = _static_1696162899088
                # <Value 'not: repeat/crumb/end' (17:27)> -> __condition
                __token = 494
                try:
                    __zt_tmp = __attrs_1696162763792
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696162996624('not', ' repeat/crumb/end', econtext=econtext)(_static_1696163003088(econtext, __zt_tmp))
                if __condition:
                    # <li ... (0:0)
                    # --------------------------------------------------------
                    __append('<li class="breadcrumb-item" >')
                    # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value="${python:crumb['absolute_url']}", kind=None)]) name=None at 18ae728c050> -> __attrs_1696163855376
                    __attrs_1696163855376 = _static_1696163001104
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696095337872
                    __default_1696095337872 = _DEFAULT_MARKER
                    # <Interpolation value=<Substitution "${python:crumb['absolute_url']}" (18:18)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18ae728fc10> -> __attr_href
                    __token = 537
                    try:
                        __zt_tmp = __attrs_1696163855376
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696164116560('python', "crumb['absolute_url']", econtext=econtext)(_static_1696164107664(econtext, __zt_tmp))
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
                    __append('>')
                    # <Interpolation value=<Substitution "${python:crumb['Title']}" (18:51)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb3e6d10> -> __content_1695946256768
                    __token = 570
                    try:
                        __zt_tmp = __attrs_1696163855376
                    except NameError:
                        __zt_tmp = None
                    __content_1695946256768 = _static_1696163191504('python', "crumb['Title']", econtext=econtext)(_static_1696163188496(econtext, __zt_tmp))
                    __content_1695946256768 = __quote(__content_1695946256768, '\x00', '&#0;', None, None)
                    __content_1695946256768 = __content_1695946256768
                    if __content_1695946256768 is None:
                        pass
                    elif __content_1695946256768 is None:
                        __content_1695946256768 = None
                    else:
                        __tt = type(__content_1695946256768)
                        if __tt is bytes:
                            __content_1695946256768 = decode(__content_1695946256768)
                        elif __tt is not str:
                            if __tt is int or __tt is float:
                                __content_1695946256768 = str(__content_1695946256768)
                            else:
                                __markup = getattr(__content_1695946256768, '__html__', None)
                                if __markup is None:
                                    __converted = translate(__content_1695946256768, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                    __content_1695946256768 = str(__content_1695946256768) if __content_1695946256768 is __converted else __converted
                                else:
                                    __content_1695946256768 = __markup()
                    if __content_1695946256768 is not None:
                        __append(__content_1695946256768)
                    __append('</a></li>')
                __append('\n        ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='aria-current', kind=None)], values=[Constant(value='breadcrumb-item active', kind=None), Constant(value='page', kind=None)]) name=None at 18aeb3e4950> -> __attrs_1696163845072
                __attrs_1696163845072 = _static_1696093158096
                # <Value 'repeat/crumb/end' (21:27)> -> __condition
                __token = 704
                try:
                    __zt_tmp = __attrs_1696163845072
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696162936080('path', 'repeat/crumb/end', econtext=econtext)(_static_1696164586320(econtext, __zt_tmp))
                if __condition:
                    # <li ... (0:0)
                    # --------------------------------------------------------
                    __append('<li class="breadcrumb-item active" aria-current="page" >')
                    # <Interpolation value=<Substitution "${python:crumb['Title']}" (22:9)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb3e6410> -> __content_1695946256768
                    __token = 733
                    try:
                        __zt_tmp = __attrs_1696163845072
                    except NameError:
                        __zt_tmp = None
                    __content_1695946256768 = _static_1696163524048('python', "crumb['Title']", econtext=econtext)(_static_1696163521552(econtext, __zt_tmp))
                    __content_1695946256768 = __quote(__content_1695946256768, '\x00', '&#0;', None, None)
                    __content_1695946256768 = __content_1695946256768
                    if __content_1695946256768 is None:
                        pass
                    elif __content_1695946256768 is None:
                        __content_1695946256768 = None
                    else:
                        __tt = type(__content_1695946256768)
                        if __tt is bytes:
                            __content_1695946256768 = decode(__content_1695946256768)
                        elif __tt is not str:
                            if __tt is int or __tt is float:
                                __content_1695946256768 = str(__content_1695946256768)
                            else:
                                __markup = getattr(__content_1695946256768, '__html__', None)
                                if __markup is None:
                                    __converted = translate(__content_1695946256768, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                    __content_1695946256768 = str(__content_1695946256768) if __content_1695946256768 is __converted else __converted
                                else:
                                    __content_1695946256768 = __markup()
                    if __content_1695946256768 is not None:
                        __append(__content_1695946256768)
                    __append('</li>')
                __append('\n      ')
                ____index_1696162765776 -= 1
                if ____index_1696162765776 > 0:
                    __append('')
            if __backup_crumb_1696136264320 is __marker:
                del econtext['crumb']
            else:
                econtext['crumb'] = __backup_crumb_1696136264320
            __append('\n    </ol>\n  </div>\n</nav>')
            __i18n_domain = __previous_i18n_domain_1696162037840
            if __backup_breadcrumbs_1696071879616 is __marker:
                del econtext['breadcrumbs']
            else:
                econtext['breadcrumbs'] = __backup_breadcrumbs_1696071879616
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}