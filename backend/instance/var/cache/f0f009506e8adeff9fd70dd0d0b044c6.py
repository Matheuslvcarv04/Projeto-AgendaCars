# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\i18n\\locales\\browser\\languageselector.pt'

__tokens = {29: ('view/available', 1, 29), 118: ('view/showFlags', 4, 18), 151: (' view/language', 5, 17), 183: ('l context/@@plone_context_state/view_u', 6, 15), 241: ('rl view/portal_', 7, 16), 271: ("ons python:context.restrictedTraverse('@@iconresolv", 8, 10), 371: ('languages', 11, 31), 423: ('lang/code', 13, 17), 454: (' lang/selecte', 14, 20), 490: ('s string:language-${cod', 15, 20), 534: ("nt python: selected and 'currentLanguage ' or", 16, 17), 641: ('string:${current}${codeclass}', 19, 18), 753: ('lang/flag|nothing', 24, 18), 789: (' lang/native|lang/nam', 25, 17), 833: ('g python:showFlags and fl', 26, 20), 921: ('string:${here_url}?set_language=${code}', 29, 18), 980: (' nam', 30, 18), 1041: ('showflag', 33, 31), 1092: ("python:icons.tag(flag, tag_class='plone-icon-flag')", 34, 40), 1204: ('not: showflag', 36, 34), 1251: ('name', 37, 32)}
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
_static_1696162899664 = {}
_static_1696162835216 = __compile_zt_expr
_static_1696162826192 = __C2ZContextWrapper
_static_1696162832400 = {'id': 'portal-languageselector'}
_static_1696162767952 = __compile_zt_expr
_static_1696162764240 = __C2ZContextWrapper
_static_1696163330128 = __compile_zt_expr
_static_1696163324432 = __C2ZContextWrapper
_static_1696163580496 = __compile_zt_expr
_static_1696163587856 = __C2ZContextWrapper
_static_1696163852304 = __compile_zt_expr
_static_1696163591184 = __C2ZContextWrapper
_static_1696162736720 = __compile_zt_expr
_static_1696162732432 = __C2ZContextWrapper
_static_1696162740816 = {}
_static_1696094569936 = __compile_zt_expr
_static_1696163455184 = __C2ZContextWrapper
_static_1696163451536 = {'class': 'string:${current}${codeclass}'}
_static_1696162673552 = __compile_zt_expr
_static_1696162671184 = __C2ZContextWrapper
_static_1696162669712 = __compile_zt_expr
_static_1696164457552 = __C2ZContextWrapper
_static_1696162933840 = __compile_zt_expr
_static_1696162933968 = __C2ZContextWrapper
_static_1696162965776 = __compile_zt_expr
_static_1696162969360 = __C2ZContextWrapper
_static_1696164594512 = __compile_zt_expr
_static_1696164608848 = __C2ZContextWrapper
_static_1696164600272 = {'href': '', 'title': 'name'}
_static_1696163221072 = __compile_zt_expr
_static_1696163226960 = __C2ZContextWrapper
_static_1696163100688 = __compile_zt_expr
_static_1696163095760 = __C2ZContextWrapper
_static_1696162477584 = __compile_zt_expr
_static_1696162475792 = __C2ZContextWrapper
_static_1696164006992 = __compile_zt_expr
_static_1696164005712 = __C2ZContextWrapper
_static_1696164458640 = __compile_zt_expr
_static_1696164460688 = __C2ZContextWrapper
_static_1696162769232 = {}
_static_1696162672208 = __compile_zt_expr
_static_1696164013648 = __C2ZContextWrapper
_static_1696163447824 = {}
_static_1696141403536 = __compile_zt_expr
_static_1696141403152 = __C2ZContextWrapper
_static_1696164102672 = {}
_static_1696164105616 = __compile_zt_expr
_static_1696124627856 = __C2ZContextWrapper
_static_1696163513296 = __compile_zt_expr
_static_1696163528144 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163546768
            __attrs_1696163546768 = _static_1696162899664
            # <Value 'view/available' (1:29)> -> __condition
            __token = 29
            try:
                __zt_tmp = __attrs_1696163546768
            except NameError:
                __zt_tmp = None
            __condition = _static_1696162835216('path', 'view/available', econtext=econtext)(_static_1696162826192(econtext, __zt_tmp))
            if __condition:
                __append('\n  ')
                # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='portal-languageselector', kind=None)]) name=None at 18aeb39df50> -> __attrs_1696163553872
                __attrs_1696163553872 = _static_1696162832400
                __backup_showFlags_1696124790464 = get('showFlags', __marker)
                # <Value 'view/showFlags' (4:18)> -> __value
                __token = 118
                try:
                    __zt_tmp = __attrs_1696163553872
                except NameError:
                    __zt_tmp = None
                __value = _static_1696162767952('path', 'view/showFlags', econtext=econtext)(_static_1696162764240(econtext, __zt_tmp))
                econtext['showFlags'] = __value
                __backup_languages_1696124261440 = get('languages', __marker)
                # <Value 'view/languages' (5:17)> -> __value
                __token = 151
                try:
                    __zt_tmp = __attrs_1696163553872
                except NameError:
                    __zt_tmp = None
                __value = _static_1696163330128('path', 'view/languages', econtext=econtext)(_static_1696163324432(econtext, __zt_tmp))
                econtext['languages'] = __value
                __backup_here_url_1696101521792 = get('here_url', __marker)
                # <Value 'context/@@plone_context_state/view_url' (6:15)> -> __value
                __token = 183
                try:
                    __zt_tmp = __attrs_1696163553872
                except NameError:
                    __zt_tmp = None
                __value = _static_1696163580496('path', 'context/@@plone_context_state/view_url', econtext=econtext)(_static_1696163587856(econtext, __zt_tmp))
                econtext['here_url'] = __value
                __backup_portal_url_1696098745152 = get('portal_url', __marker)
                # <Value 'view/portal_url' (7:16)> -> __value
                __token = 241
                try:
                    __zt_tmp = __attrs_1696163553872
                except NameError:
                    __zt_tmp = None
                __value = _static_1696163852304('path', 'view/portal_url', econtext=econtext)(_static_1696163591184(econtext, __zt_tmp))
                econtext['portal_url'] = __value
                __backup_icons_1696093146560 = get('icons', __marker)
                # <Value "python:context.restrictedTraverse('@@iconresolver')" (8:10)> -> __value
                __token = 271
                try:
                    __zt_tmp = __attrs_1696163553872
                except NameError:
                    __zt_tmp = None
                __value = _static_1696162736720('python', "context.restrictedTraverse('@@iconresolver')", econtext=econtext)(_static_1696162732432(econtext, __zt_tmp))
                econtext['icons'] = __value
                # <ul ... (0:0)
                # --------------------------------------------------------
                __append('<ul id="portal-languageselector" >\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163555216
                __attrs_1696163555216 = _static_1696162740816
                __backup_lang_1696098745408 = get('lang', __marker)
                # <Value 'languages' (11:31)> -> __iterator
                __token = 371
                try:
                    __zt_tmp = __attrs_1696163555216
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1696094569936('path', 'languages', econtext=econtext)(_static_1696163455184(econtext, __zt_tmp))
                __iterator, ____index_1696163556752 = getname('repeat')('lang', __iterator)
                econtext['lang'] = None
                for __item in __iterator:
                    econtext['lang'] = __item
                    __append('\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='string:${current}${codeclass}', kind=None)]) name=None at 18aeb39c450> -> __attrs_1696162009680
                    __attrs_1696162009680 = _static_1696163451536
                    __backup_code_1696099814144 = get('code', __marker)
                    # <Value 'lang/code' (13:17)> -> __value
                    __token = 423
                    try:
                        __zt_tmp = __attrs_1696162009680
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162673552('path', 'lang/code', econtext=econtext)(_static_1696162671184(econtext, __zt_tmp))
                    econtext['code'] = __value
                    __backup_selected_1696031990592 = get('selected', __marker)
                    # <Value 'lang/selected' (14:20)> -> __value
                    __token = 454
                    try:
                        __zt_tmp = __attrs_1696162009680
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162669712('path', 'lang/selected', econtext=econtext)(_static_1696164457552(econtext, __zt_tmp))
                    econtext['selected'] = __value
                    __backup_codeclass_1696071886464 = get('codeclass', __marker)
                    # <Value 'string:language-${code}' (15:20)> -> __value
                    __token = 490
                    try:
                        __zt_tmp = __attrs_1696162009680
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162933840('string', 'language-${code}', econtext=econtext)(_static_1696162933968(econtext, __zt_tmp))
                    econtext['codeclass'] = __value
                    __backup_current_1696098989440 = get('current', __marker)
                    # <Value "python: selected and 'currentLanguage ' or ''" (16:17)> -> __value
                    __token = 534
                    try:
                        __zt_tmp = __attrs_1696162009680
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162965776('python', " selected and 'currentLanguage ' or ''", econtext=econtext)(_static_1696162969360(econtext, __zt_tmp))
                    econtext['current'] = __value
                    # <li ... (0:0)
                    # --------------------------------------------------------
                    __append('<li')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163548112
                    __default_1696163548112 = _DEFAULT_MARKER
                    # <Substitution 'string:${current}${codeclass}' (19:18)> -> __attr_class
                    __token = 641
                    try:
                        __zt_tmp = __attrs_1696162009680
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_1696164594512('string', '${current}${codeclass}', econtext=econtext)(_static_1696164608848(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_class is not None:
                        __append(' class="%s"' % __attr_class)
                    __append(' >\n        ')
                    # <Static value=Dict(keys=[Constant(value='href', kind=None), Constant(value='title', kind=None)], values=[Constant(value='', kind=None), Constant(value='name', kind=None)]) name=None at 18aeb224710> -> __attrs_1696162021136
                    __attrs_1696162021136 = _static_1696164600272
                    __backup_flag_1696123535232 = get('flag', __marker)
                    # <Value 'lang/flag|nothing' (24:18)> -> __value
                    __token = 753
                    try:
                        __zt_tmp = __attrs_1696162021136
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696163221072('path', 'lang/flag|nothing', econtext=econtext)(_static_1696163226960(econtext, __zt_tmp))
                    econtext['flag'] = __value
                    __backup_name_1696099818432 = get('name', __marker)
                    # <Value 'lang/native|lang/name' (25:17)> -> __value
                    __token = 789
                    try:
                        __zt_tmp = __attrs_1696162021136
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696163100688('path', 'lang/native|lang/name', econtext=econtext)(_static_1696163095760(econtext, __zt_tmp))
                    econtext['name'] = __value
                    __backup_showflag_1696101200320 = get('showflag', __marker)
                    # <Value 'python:showFlags and flag' (26:20)> -> __value
                    __token = 833
                    try:
                        __zt_tmp = __attrs_1696162021136
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162477584('python', 'showFlags and flag', econtext=econtext)(_static_1696162475792(econtext, __zt_tmp))
                    econtext['showflag'] = __value
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162014544
                    __default_1696162014544 = _DEFAULT_MARKER
                    # <Substitution 'string:${here_url}?set_language=${code}' (29:18)> -> __attr_href
                    __token = 921
                    try:
                        __zt_tmp = __attrs_1696162021136
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696164006992('string', '${here_url}?set_language=${code}', econtext=econtext)(_static_1696164005712(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162008528
                    __default_1696162008528 = _DEFAULT_MARKER
                    # <Substitution 'name' (30:18)> -> __attr_title
                    __token = 980
                    try:
                        __zt_tmp = __attrs_1696162021136
                    except NameError:
                        __zt_tmp = None
                    __attr_title = _static_1696164458640('path', 'name', econtext=econtext)(_static_1696164460688(econtext, __zt_tmp))
                    __attr_title = __quote(__attr_title, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    __append(' >\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162020176
                    __attrs_1696162020176 = _static_1696162769232
                    # <Value 'showflag' (33:31)> -> __condition
                    __token = 1041
                    try:
                        __zt_tmp = __attrs_1696162020176
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696162672208('path', 'showflag', econtext=econtext)(_static_1696164013648(econtext, __zt_tmp))
                    if __condition:
                        __append('\n            ')
                        # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162005456
                        __attrs_1696162005456 = _static_1696163447824
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162021200
                        __default_1696162021200 = _DEFAULT_MARKER
                        # <Value "python:icons.tag(flag, tag_class='plone-icon-flag')" (34:40)> -> __cache_1696162006416
                        __token = 1092
                        try:
                            __zt_tmp = __attrs_1696162005456
                        except NameError:
                            __zt_tmp = None
                        __cache_1696162006416 = _static_1696141403536('python', "icons.tag(flag, tag_class='plone-icon-flag')", econtext=econtext)(_static_1696141403152(econtext, __zt_tmp))
                        # <BinOp left=<Value "python:icons.tag(flag, tag_class='plone-icon-flag')" (34:40)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb226690> -> __condition
                        __expression = __cache_1696162006416
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            # <img ... (0:0)
                            # --------------------------------------------------------
                            __append('<img />')
                        else:
                            __content = __cache_1696162006416
                            __content = __convert(__content)
                            if __content is not None:
                                __append(__content)
                        __append('\n          ')
                    __append('\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163291856
                    __attrs_1696163291856 = _static_1696164102672
                    # <Value 'not: showflag' (36:34)> -> __condition
                    __token = 1204
                    try:
                        __zt_tmp = __attrs_1696163291856
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696164105616('not', ' showflag', econtext=econtext)(_static_1696124627856(econtext, __zt_tmp))
                    if __condition:
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163283536
                        __default_1696163283536 = _DEFAULT_MARKER
                        # <Value 'name' (37:32)> -> __cache_1696162018960
                        __token = 1251
                        try:
                            __zt_tmp = __attrs_1696163291856
                        except NameError:
                            __zt_tmp = None
                        __cache_1696162018960 = _static_1696163513296('path', 'name', econtext=econtext)(_static_1696163528144(econtext, __zt_tmp))
                        # <BinOp left=<Value 'name' (37:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb35e190> -> __condition
                        __expression = __cache_1696162018960
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            __append('language name')
                        else:
                            __content = __cache_1696162018960
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append(__content)
                    __append('\n        </a>')
                    if __backup_showflag_1696101200320 is __marker:
                        del econtext['showflag']
                    else:
                        econtext['showflag'] = __backup_showflag_1696101200320
                    if __backup_name_1696099818432 is __marker:
                        del econtext['name']
                    else:
                        econtext['name'] = __backup_name_1696099818432
                    if __backup_flag_1696123535232 is __marker:
                        del econtext['flag']
                    else:
                        econtext['flag'] = __backup_flag_1696123535232
                    __append('\n      </li>')
                    if __backup_current_1696098989440 is __marker:
                        del econtext['current']
                    else:
                        econtext['current'] = __backup_current_1696098989440
                    if __backup_codeclass_1696071886464 is __marker:
                        del econtext['codeclass']
                    else:
                        econtext['codeclass'] = __backup_codeclass_1696071886464
                    if __backup_selected_1696031990592 is __marker:
                        del econtext['selected']
                    else:
                        econtext['selected'] = __backup_selected_1696031990592
                    if __backup_code_1696099814144 is __marker:
                        del econtext['code']
                    else:
                        econtext['code'] = __backup_code_1696099814144
                    __append('\n    ')
                    ____index_1696163556752 -= 1
                    if ____index_1696163556752 > 0:
                        __append('')
                if __backup_lang_1696098745408 is __marker:
                    del econtext['lang']
                else:
                    econtext['lang'] = __backup_lang_1696098745408
                __append('\n  </ul>')
                if __backup_icons_1696093146560 is __marker:
                    del econtext['icons']
                else:
                    econtext['icons'] = __backup_icons_1696093146560
                if __backup_portal_url_1696098745152 is __marker:
                    del econtext['portal_url']
                else:
                    econtext['portal_url'] = __backup_portal_url_1696098745152
                if __backup_here_url_1696101521792 is __marker:
                    del econtext['here_url']
                else:
                    econtext['here_url'] = __backup_here_url_1696101521792
                if __backup_languages_1696124261440 is __marker:
                    del econtext['languages']
                else:
                    econtext['languages'] = __backup_languages_1696124261440
                if __backup_showFlags_1696124790464 is __marker:
                    del econtext['showFlags']
                else:
                    econtext['showFlags'] = __backup_showFlags_1696124790464
                __append('\n')
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}