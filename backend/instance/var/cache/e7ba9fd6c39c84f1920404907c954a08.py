# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\portlets\\portlets\\actions.pt'

__tokens = {285: ('context/@@plone_portal_state/portal_url', 10, 20), 393: ('view/showTitle', 15, 24), 442: ('view/title', 17, 27), 479: ('view/title', 18, 25), 627: ('string:actions-${view/category}', 26, 18), 708: ('view/actionLinks', 28, 35), 842: ('nocall:link/icon', 31, 21), 774: ("python:link['id']", 29, 47), 963: ('link/modal|nothing', 36, 23), 1054: ('link/url', 39, 22), 1086: (" python:'pat-plone-modal' if modal else Non", 40, 22), 1168: ('l python:modal if modal else No', 41, 36), 1269: ('not:icon', 44, 35), 1312: ('link/title', 45, 33), 1447: ('icon/absolute_url|icon', 50, 31), 1528: ('icon', 52, 35), 1644: ('string:background-image:url($icon_url);', 55, 28), 1567: ('link/title', 53, 33)}
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
_static_1696163330000 = {'xmlns': 'http://www.w3.org/1999/xhtml'}
_static_1696163322192 = {'class': 'card portlet portletActions'}
_static_1696164520080 = __compile_zt_expr
_static_1696162307792 = __C2ZContextWrapper
_static_1696162303056 = {'class': 'card-header'}
_static_1696162765968 = __compile_zt_expr
_static_1696163069776 = __C2ZContextWrapper
_static_1696164581456 = {}
_static_1696162315152 = __compile_zt_expr
_static_1696163319888 = __C2ZContextWrapper
_static_1696162764624 = __compile_zt_expr
_static_1696095329168 = __C2ZContextWrapper
_static_1696162982352 = {'class': 'card-body portletContent'}
_static_1696094577424 = {'class': 'string:actions-${view/category}'}
_static_1696164537616 = __compile_zt_expr
_static_1696164536656 = __C2ZContextWrapper
_static_1696163578896 = {}
_static_1696162960464 = __compile_zt_expr
_static_1696162956240 = __C2ZContextWrapper
_static_1696162962768 = {'class': "portletItem action-item-${python:link['id']}"}
_static_1696162923856 = __compile_zt_expr
_static_1696162938000 = __C2ZContextWrapper
_static_1696164049424 = __compile_zt_expr
_static_1696141402448 = __C2ZContextWrapper
_static_1696163285328 = {'href': '#', 'class': "python:'pat-plone-modal' if modal else None", 'data-pat-plone-modal': 'python:modal if modal else None'}
_static_1696162824336 = __compile_zt_expr
_static_1696164509648 = __C2ZContextWrapper
_static_1696164502224 = __compile_zt_expr
_static_1696164500048 = __C2ZContextWrapper
_static_1696163453520 = __compile_zt_expr
_static_1696163450576 = __C2ZContextWrapper
_static_1696163872208 = __compile_zt_expr
_static_1696163871056 = __C2ZContextWrapper
_static_1696163053840 = {}
_static_1696164009616 = __compile_zt_expr
_static_1696164019856 = __C2ZContextWrapper
_static_1696164010192 = __compile_zt_expr
_static_1696163549840 = __C2ZContextWrapper
_static_1696093431184 = {'style': 'string:background-image:url($icon_url);'}
_static_1696125958992 = __compile_zt_expr
_static_1696125957840 = __C2ZContextWrapper
_static_1696164346704 = __compile_zt_expr
_static_1696099460816 = __C2ZContextWrapper
_static_1696164597264 = __compile_zt_expr
_static_1696164608464 = __C2ZContextWrapper
_static_1696163225488 = __compile_zt_expr
_static_1696163217616 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None)]) name=None at 18aeb41d6d0> -> __attrs_1696099819728
            __attrs_1696099819728 = _static_1696163330000
            __previous_i18n_domain_1696099821328 = __i18n_domain
            __i18n_domain = 'plone'
            __append('\n\n  ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card portlet portletActions', kind=None)]) name=None at 18ae76d4710> -> __attrs_1696164518160
            __attrs_1696164518160 = _static_1696163322192
            __backup_portal_url_1696124257728 = get('portal_url', __marker)
            # <Value 'context/@@plone_portal_state/portal_url' (10:20)> -> __value
            __token = 285
            try:
                __zt_tmp = __attrs_1696164518160
            except NameError:
                __zt_tmp = None
            __value = _static_1696164520080('path', 'context/@@plone_portal_state/portal_url', econtext=econtext)(_static_1696162307792(econtext, __zt_tmp))
            econtext['portal_url'] = __value
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="card portlet portletActions" >\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card-header', kind=None)]) name=None at 18aeb48b8d0> -> __attrs_1696164514000
            __attrs_1696164514000 = _static_1696162303056
            # <Value 'view/showTitle' (15:24)> -> __condition
            __token = 393
            try:
                __zt_tmp = __attrs_1696164514000
            except NameError:
                __zt_tmp = None
            __condition = _static_1696162765968('path', 'view/showTitle', econtext=econtext)(_static_1696163069776(econtext, __zt_tmp))
            if __condition:
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="card-header" >\n      ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164584464
                __attrs_1696164584464 = _static_1696164581456
                # <Value 'view/title' (17:27)> -> __condition
                __token = 442
                try:
                    __zt_tmp = __attrs_1696164584464
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696162315152('path', 'view/title', econtext=econtext)(_static_1696163319888(econtext, __zt_tmp))
                if __condition:
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164524688
                    __default_1696164524688 = _DEFAULT_MARKER
                    # <Value 'view/title' (18:25)> -> __cache_1696164524752
                    __token = 479
                    try:
                        __zt_tmp = __attrs_1696164584464
                    except NameError:
                        __zt_tmp = None
                    __cache_1696164524752 = _static_1696162764624('path', 'view/title', econtext=econtext)(_static_1696095329168(econtext, __zt_tmp))
                    # <BinOp left=<Value 'view/title' (18:25)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb48ab90> -> __condition
                    __expression = __cache_1696164524752
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span >\n        Title\n      </span>')
                    else:
                        __content = __cache_1696164524752
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                __append('\n    </div>')
            __append('\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card-body portletContent', kind=None)]) name=None at 18aeb49b210> -> __attrs_1696164578960
            __attrs_1696164578960 = _static_1696162982352
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="card-body portletContent">\n      ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='string:actions-${view/category}', kind=None)]) name=None at 18aeb49a310> -> __attrs_1696164033232
            __attrs_1696164033232 = _static_1696094577424
            # <ul ... (0:0)
            # --------------------------------------------------------
            __append('<ul')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164034960
            __default_1696164034960 = _DEFAULT_MARKER
            # <Substitution 'string:actions-${view/category}' (26:18)> -> __attr_class
            __token = 627
            try:
                __zt_tmp = __attrs_1696164033232
            except NameError:
                __zt_tmp = None
            __attr_class = _static_1696164537616('string', 'actions-${view/category}', econtext=econtext)(_static_1696164536656(econtext, __zt_tmp))
            __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_class is not None:
                __append(' class="%s"' % __attr_class)
            __append('>\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164034192
            __attrs_1696164034192 = _static_1696163578896
            __backup_link_1696101273024 = get('link', __marker)
            # <Value 'view/actionLinks' (28:35)> -> __iterator
            __token = 708
            try:
                __zt_tmp = __attrs_1696164034192
            except NameError:
                __zt_tmp = None
            __iterator = _static_1696162960464('path', 'view/actionLinks', econtext=econtext)(_static_1696162956240(econtext, __zt_tmp))
            __iterator, ____index_1696164028560 = getname('repeat')('link', __iterator)
            econtext['link'] = None
            for __item in __iterator:
                econtext['link'] = __item
                __append('\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value="portletItem action-item-${python:link['id']}", kind=None)]) name=None at 18aeb410d90> -> __attrs_1696162781136
                __attrs_1696162781136 = _static_1696162962768
                __backup_icon_1696099814912 = get('icon', __marker)
                # <Value 'nocall:link/icon' (31:21)> -> __value
                __token = 842
                try:
                    __zt_tmp = __attrs_1696162781136
                except NameError:
                    __zt_tmp = None
                __value = _static_1696162923856('nocall', 'link/icon', econtext=econtext)(_static_1696162938000(econtext, __zt_tmp))
                econtext['icon'] = __value
                # <li ... (0:0)
                # --------------------------------------------------------
                __append('<li')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164032400
                __default_1696164032400 = _DEFAULT_MARKER
                # <Interpolation value=<Substitution "portletItem action-item-${python:link['id']}" (29:21)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb411390> -> __attr_class
                __token = 774
                try:
                    __zt_tmp = __attrs_1696162781136
                except NameError:
                    __zt_tmp = None
                __attr_class = _static_1696164049424('python', "link['id']", econtext=econtext)(_static_1696141402448(econtext, __zt_tmp))
                __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                __attr_class = '%s%s' % ('portletItem action-item-', __attr_class if __attr_class is not None else '')
                if __attr_class is None:
                    pass
                elif __attr_class is _DEFAULT_MARKER:
                    __attr_class = None
                else:
                    __tt = type(__attr_class)
                    if __tt is bytes:
                        __attr_class = decode(__attr_class)
                    elif __tt is not str:
                        if __tt is int or __tt is float:
                            __attr_class = str(__attr_class)
                        else:
                            __markup = getattr(__attr_class, '__html__', None)
                            if __markup is None:
                                __converted = translate(__attr_class, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                __attr_class = str(__attr_class) if __attr_class is __converted else __converted
                            else:
                                __attr_class = __markup()
                if __attr_class is not None:
                    __append(' class="%s"' % __attr_class)
                __append(' >\n            ')
                # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='data-pat-plone-modal', kind=None)], values=[Constant(value='#', kind=None), ..., Constant(value='python:modal if modal else None', kind=None)]) name=None at 18aeb2e10d0> -> __attrs_1696162781904
                __attrs_1696162781904 = _static_1696163285328
                __backup_modal_1696101777216 = get('modal', __marker)
                # <Value 'link/modal|nothing' (36:23)> -> __value
                __token = 963
                try:
                    __zt_tmp = __attrs_1696162781904
                except NameError:
                    __zt_tmp = None
                __value = _static_1696162824336('path', 'link/modal|nothing', econtext=econtext)(_static_1696164509648(econtext, __zt_tmp))
                econtext['modal'] = __value
                # <a ... (0:0)
                # --------------------------------------------------------
                __append('<a')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162779856
                __default_1696162779856 = _DEFAULT_MARKER
                # <Substitution 'link/url' (39:22)> -> __attr_href
                __token = 1054
                try:
                    __zt_tmp = __attrs_1696162781904
                except NameError:
                    __zt_tmp = None
                __attr_href = _static_1696164502224('path', 'link/url', econtext=econtext)(_static_1696164500048(econtext, __zt_tmp))
                __attr_href = __quote(__attr_href, '"', '&quot;', '#', _DEFAULT_MARKER)
                if __attr_href is not None:
                    __append(' href="%s"' % __attr_href)
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162777680
                __default_1696162777680 = _DEFAULT_MARKER
                # <Substitution "python:'pat-plone-modal' if modal else None" (40:22)> -> __attr_class
                __token = 1086
                try:
                    __zt_tmp = __attrs_1696162781904
                except NameError:
                    __zt_tmp = None
                __attr_class = _static_1696163453520('python', "'pat-plone-modal' if modal else None", econtext=econtext)(_static_1696163450576(econtext, __zt_tmp))
                __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_class is not None:
                    __append(' class="%s"' % __attr_class)
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162783440
                __default_1696162783440 = _DEFAULT_MARKER
                # <Substitution 'python:modal if modal else None' (41:36)> -> __attr_data_pat_plone_modal
                __token = 1168
                try:
                    __zt_tmp = __attrs_1696162781904
                except NameError:
                    __zt_tmp = None
                __attr_data_pat_plone_modal = _static_1696163872208('python', 'modal if modal else None', econtext=econtext)(_static_1696163871056(econtext, __zt_tmp))
                __attr_data_pat_plone_modal = __quote(__attr_data_pat_plone_modal, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_data_pat_plone_modal is not None:
                    __append(' data-pat-plone-modal="%s"' % __attr_data_pat_plone_modal)
                __append(' >\n              ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162783632
                __attrs_1696162783632 = _static_1696163053840
                # <Value 'not:icon' (44:35)> -> __condition
                __token = 1269
                try:
                    __zt_tmp = __attrs_1696162783632
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696164009616('not', 'icon', econtext=econtext)(_static_1696164019856(econtext, __zt_tmp))
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span >')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162780048
                    __default_1696162780048 = _DEFAULT_MARKER
                    # <Value 'link/title' (45:33)> -> __cache_1696162783376
                    __token = 1312
                    try:
                        __zt_tmp = __attrs_1696162783632
                    except NameError:
                        __zt_tmp = None
                    __cache_1696162783376 = _static_1696164010192('path', 'link/title', econtext=econtext)(_static_1696163549840(econtext, __zt_tmp))
                    # <BinOp left=<Value 'link/title' (45:33)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb2e3cd0> -> __condition
                    __expression = __cache_1696162783376
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        __append('\n              Action\n              ')
                    else:
                        __content = __cache_1696162783376
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('</span>')
                __append('\n              ')
                # <Static value=Dict(keys=[Constant(value='style', kind=None)], values=[Constant(value='string:background-image:url($icon_url);', kind=None)]) name=None at 18aeb31ae50> -> __attrs_1696163015120
                __attrs_1696163015120 = _static_1696093431184
                __backup_icon_url_1696101776832 = get('icon_url', __marker)
                # <Value 'icon/absolute_url|icon' (50:31)> -> __value
                __token = 1447
                try:
                    __zt_tmp = __attrs_1696163015120
                except NameError:
                    __zt_tmp = None
                __value = _static_1696125958992('path', 'icon/absolute_url|icon', econtext=econtext)(_static_1696125957840(econtext, __zt_tmp))
                econtext['icon_url'] = __value
                # <Value 'icon' (52:35)> -> __condition
                __token = 1528
                try:
                    __zt_tmp = __attrs_1696163015120
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696164346704('path', 'icon', econtext=econtext)(_static_1696099460816(econtext, __zt_tmp))
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163007312
                    __default_1696163007312 = _DEFAULT_MARKER
                    # <Substitution 'string:background-image:url($icon_url);' (55:28)> -> __attr_style
                    __token = 1644
                    try:
                        __zt_tmp = __attrs_1696163015120
                    except NameError:
                        __zt_tmp = None
                    __attr_style = _static_1696164597264('string', 'background-image:url($icon_url);', econtext=econtext)(_static_1696164608464(econtext, __zt_tmp))
                    __attr_style = __quote(__attr_style, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_style is not None:
                        __append(' style="%s"' % __attr_style)
                    __append(' >')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696095606544
                    __default_1696095606544 = _DEFAULT_MARKER
                    # <Value 'link/title' (53:33)> -> __cache_1696095609872
                    __token = 1567
                    try:
                        __zt_tmp = __attrs_1696163015120
                    except NameError:
                        __zt_tmp = None
                    __cache_1696095609872 = _static_1696163225488('path', 'link/title', econtext=econtext)(_static_1696163217616(econtext, __zt_tmp))
                    # <BinOp left=<Value 'link/title' (53:33)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18ae72d0850> -> __condition
                    __expression = __cache_1696095609872
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        __append('\n              Action\n              ')
                    else:
                        __content = __cache_1696095609872
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('</span>')
                if __backup_icon_url_1696101776832 is __marker:
                    del econtext['icon_url']
                else:
                    econtext['icon_url'] = __backup_icon_url_1696101776832
                __append('\n            </a>')
                if __backup_modal_1696101777216 is __marker:
                    del econtext['modal']
                else:
                    econtext['modal'] = __backup_modal_1696101777216
                __append('\n          </li>')
                if __backup_icon_1696099814912 is __marker:
                    del econtext['icon']
                else:
                    econtext['icon'] = __backup_icon_1696099814912
                __append('\n        ')
                ____index_1696164028560 -= 1
                if ____index_1696164028560 > 0:
                    __append('')
            if __backup_link_1696101273024 is __marker:
                del econtext['link']
            else:
                econtext['link'] = __backup_link_1696101273024
            __append('\n      </ul>\n    </div>\n\n  </div>')
            if __backup_portal_url_1696124257728 is __marker:
                del econtext['portal_url']
            else:
                econtext['portal_url'] = __backup_portal_url_1696124257728
            __append('\n\n')
            __i18n_domain = __previous_i18n_domain_1696099821328
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}