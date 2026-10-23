# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\menu.pt'

__tokens = {61: ('context/@@plone', 2, 30), 104: (' view/locked_ico', 3, 26), 147: ("s python:context.restrictedTraverse('@@iconresolver", 4, 24), 255: ('ploneview/showToolbar', 6, 33), 352: ('options/actions', 9, 34), 473: ('action/id', 13, 19), 502: (' action/selected | python:Fals', 14, 18), 421: ('action/id', 11, 26), 579: ("python:'locked' if locked and actionid == 'history' else ''", 18, 27), 642: ('action/cssClass | nothing', 18, 90), 671: ("python:'active' if selected else None", 18, 119), 771: ('action/url', 21, 16), 800: (' action/link_target|nothin', 22, 17), 876: ("python:actionid != 'history'", 26, 27), 942: ("python:action['icon']", 27, 35), 1008: ("python:icons.tag(action['icon'] or 'toolbar-action', tag_class='me-1')", 28, 43), 1160: ('action/title', 31, 29), 1286: ("python:actionid == 'history'", 36, 31), 1360: ("python:icons.tag('lock' if locked else action['icon'], tag_class='me-1')", 37, 43), 1549: ('context/ModificationDate', 40, 30), 1670: ('', 42, 31), 1687: ('context/ModificationDate', 43, 15)}
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
_static_1696162127376 = {}
_static_1696059714000 = __compile_zt_expr
_static_1696101585040 = __C2ZContextWrapper
_static_1696163727632 = __compile_zt_expr
_static_1696163741136 = __C2ZContextWrapper
_static_1696068772688 = __compile_zt_expr
_static_1696161970256 = __C2ZContextWrapper
_static_1696162227024 = __compile_zt_expr
_static_1696163857488 = __C2ZContextWrapper
_static_1696164033808 = {}
_static_1696164030928 = __compile_zt_expr
_static_1696164028688 = __C2ZContextWrapper
_static_1696060941968 = {'class': 'nav-item', 'id': 'contentview-${action/id}'}
_static_1696124951952 = __compile_zt_expr
_static_1696095641680 = __C2ZContextWrapper
_static_1696163994320 = __compile_zt_expr
_static_1696164000400 = __C2ZContextWrapper
_static_1696162648144 = __compile_zt_expr
_static_1696162658064 = __C2ZContextWrapper
_static_1696164045264 = {'class': "nav-link ${python:'locked' if locked and actionid == 'history' else ''} ${action/cssClass | nothing} ${python:'active' if selected else None}", 'href': '#', 'target': 'action/link_target|nothing'}
_static_1696101525776 = __compile_zt_expr
_static_1696095814736 = __C2ZContextWrapper
_static_1696164082896 = __compile_zt_expr
_static_1696163509520 = __C2ZContextWrapper
_static_1696164021136 = __compile_zt_expr
_static_1696162384592 = __C2ZContextWrapper
_static_1696099824784 = __compile_zt_expr
_static_1696163999248 = __C2ZContextWrapper
_static_1696164084112 = __compile_zt_expr
_static_1696164075280 = __C2ZContextWrapper
_static_1696095921936 = {}
_static_1696162053200 = __compile_zt_expr
_static_1696162050576 = __C2ZContextWrapper
_static_1696094046352 = {}
_static_1696162049296 = __compile_zt_expr
_static_1696094576144 = __C2ZContextWrapper
_static_1696162601872 = __compile_zt_expr
_static_1696162597008 = __C2ZContextWrapper
_static_1696099658768 = {'class': 'toolbar-label'}
_static_1696163093520 = __compile_zt_expr
_static_1696163099216 = __C2ZContextWrapper
_static_1696031599440 = {}
_static_1696141394384 = __compile_zt_expr
_static_1696141399376 = __C2ZContextWrapper
_static_1696141401616 = {}
_static_1696095326480 = __compile_zt_expr
_static_1696095323984 = __C2ZContextWrapper
_static_1696059903056 = {'class': 'toolbar-label'}
_static_1696162932176 = {'class': 'pat-display-time', 'datetime': '${context/ModificationDate}', 'data-pat-display-time': 'output-format: L LTS'}
_static_1696164070544 = __compile_zt_expr
_static_1696094570512 = __C2ZContextWrapper
_static_1696163852176 = __compile_zt_expr
_static_1696164080912 = __C2ZContextWrapper
_static_1696164009744 = __compile_zt_expr
_static_1696094403920 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696161970960
            __attrs_1696161970960 = _static_1696162127376
            __backup_ploneview_1696101316544 = get('ploneview', __marker)
            # <Value 'context/@@plone' (2:30)> -> __value
            __token = 61
            try:
                __zt_tmp = __attrs_1696161970960
            except NameError:
                __zt_tmp = None
            __value = _static_1696059714000('path', 'context/@@plone', econtext=econtext)(_static_1696101585040(econtext, __zt_tmp))
            econtext['ploneview'] = __value
            __backup_locked_1696099342848 = get('locked', __marker)
            # <Value 'view/locked_icon' (3:26)> -> __value
            __token = 104
            try:
                __zt_tmp = __attrs_1696161970960
            except NameError:
                __zt_tmp = None
            __value = _static_1696163727632('path', 'view/locked_icon', econtext=econtext)(_static_1696163741136(econtext, __zt_tmp))
            econtext['locked'] = __value
            __backup_icons_1696101314560 = get('icons', __marker)
            # <Value "python:context.restrictedTraverse('@@iconresolver')" (4:24)> -> __value
            __token = 147
            try:
                __zt_tmp = __attrs_1696161970960
            except NameError:
                __zt_tmp = None
            __value = _static_1696068772688('python', "context.restrictedTraverse('@@iconresolver')", econtext=econtext)(_static_1696161970256(econtext, __zt_tmp))
            econtext['icons'] = __value
            # <Value 'ploneview/showToolbar' (6:33)> -> __condition
            __token = 255
            try:
                __zt_tmp = __attrs_1696161970960
            except NameError:
                __zt_tmp = None
            __condition = _static_1696162227024('path', 'ploneview/showToolbar', econtext=econtext)(_static_1696163857488(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696161970320 = __i18n_domain
                __i18n_domain = 'plone'
                __append('\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696095995664
                __attrs_1696095995664 = _static_1696164033808
                __backup_action_1696101313856 = get('action', __marker)
                # <Value 'options/actions' (9:34)> -> __iterator
                __token = 352
                try:
                    __zt_tmp = __attrs_1696095995664
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1696164030928('path', 'options/actions', econtext=econtext)(_static_1696164028688(econtext, __zt_tmp))
                __iterator, ____index_1696096004752 = getname('repeat')('action', __iterator)
                econtext['action'] = None
                for __item in __iterator:
                    econtext['action'] = __item
                    __append('\n    ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='nav-item', kind=None), Constant(value='contentview-${action/id}', kind=None)]) name=None at 18ae73312d0> -> __attrs_1696162303376
                    __attrs_1696162303376 = _static_1696060941968
                    __backup_actionid_1696163182656 = get('actionid', __marker)
                    # <Value 'action/id' (13:19)> -> __value
                    __token = 473
                    try:
                        __zt_tmp = __attrs_1696162303376
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696124951952('path', 'action/id', econtext=econtext)(_static_1696095641680(econtext, __zt_tmp))
                    econtext['actionid'] = __value
                    __backup_selected_1696124270272 = get('selected', __marker)
                    # <Value 'action/selected | python:False' (14:18)> -> __value
                    __token = 502
                    try:
                        __zt_tmp = __attrs_1696162303376
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696163994320('path', 'action/selected | python:False', econtext=econtext)(_static_1696164000400(econtext, __zt_tmp))
                    econtext['selected'] = __value
                    # <li ... (0:0)
                    # --------------------------------------------------------
                    __append('<li class="nav-item"')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162313040
                    __default_1696162313040 = _DEFAULT_MARKER
                    # <Interpolation value=<Substitution 'contentview-${action/id}' (11:12)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb2189d0> -> __attr_id
                    __token = 421
                    try:
                        __zt_tmp = __attrs_1696162303376
                    except NameError:
                        __zt_tmp = None
                    __attr_id = _static_1696162648144('path', 'action/id', econtext=econtext)(_static_1696162658064(econtext, __zt_tmp))
                    __attr_id = __quote(__attr_id, '"', '&quot;', None, _DEFAULT_MARKER)
                    __attr_id = '%s%s' % ('contentview-', __attr_id if __attr_id is not None else '')
                    if __attr_id is None:
                        pass
                    elif __attr_id is _DEFAULT_MARKER:
                        __attr_id = None
                    else:
                        __tt = type(__attr_id)
                        if __tt is bytes:
                            __attr_id = decode(__attr_id)
                        elif __tt is not str:
                            if __tt is int or __tt is float:
                                __attr_id = str(__attr_id)
                            else:
                                __markup = getattr(__attr_id, '__html__', None)
                                if __markup is None:
                                    __converted = translate(__attr_id, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                    __attr_id = str(__attr_id) if __attr_id is __converted else __converted
                                else:
                                    __attr_id = __markup()
                    if __attr_id is not None:
                        __append(' id="%s"' % __attr_id)
                    __append(' >\n\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='target', kind=None)], values=[Constant(value="nav-link ${python:'locked' if locked and actionid == 'history' else ''} ${action/cssClass | nothing} ${python:'active' if selected else None}", kind=None), ..., Constant(value='action/link_target|nothing', kind=None)]) name=None at 18aeb26d890> -> __attrs_1696162302032
                    __attrs_1696162302032 = _static_1696164045264
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162315344
                    __default_1696162315344 = _DEFAULT_MARKER
                    # <Interpolation value=<Substitution "nav-link ${python:'locked' if locked and actionid == 'history' else ''} ${action/cssClass | nothing} ${python:'active' if selected else None}" (18:16)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb26f490> -> __attr_class
                    __token = 579
                    try:
                        __zt_tmp = __attrs_1696162302032
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_1696101525776('python', "'locked' if locked and actionid == 'history' else ''", econtext=econtext)(_static_1696095814736(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                    __token = 642
                    try:
                        __zt_tmp = __attrs_1696162302032
                    except NameError:
                        __zt_tmp = None
                    __attr_class_640 = _static_1696164082896('path', 'action/cssClass | nothing', econtext=econtext)(_static_1696163509520(econtext, __zt_tmp))
                    __attr_class_640 = __quote(__attr_class_640, '"', '&quot;', None, _DEFAULT_MARKER)
                    __token = 671
                    try:
                        __zt_tmp = __attrs_1696162302032
                    except NameError:
                        __zt_tmp = None
                    __attr_class_669 = _static_1696164021136('python', "'active' if selected else None", econtext=econtext)(_static_1696162384592(econtext, __zt_tmp))
                    __attr_class_669 = __quote(__attr_class_669, '"', '&quot;', None, _DEFAULT_MARKER)
                    __attr_class = '%s%s%s%s%s%s' % ('nav-link ', __attr_class if __attr_class is not None else '', ' ', __attr_class_640 if __attr_class_640 is not None else '', ' ', __attr_class_669 if __attr_class_669 is not None else '')
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
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162314064
                    __default_1696162314064 = _DEFAULT_MARKER
                    # <Substitution 'action/url' (21:16)> -> __attr_href
                    __token = 771
                    try:
                        __zt_tmp = __attrs_1696162302032
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696099824784('path', 'action/url', econtext=econtext)(_static_1696163999248(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '#', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162302160
                    __default_1696162302160 = _DEFAULT_MARKER
                    # <Substitution 'action/link_target|nothing' (22:17)> -> __attr_target
                    __token = 800
                    try:
                        __zt_tmp = __attrs_1696162302032
                    except NameError:
                        __zt_tmp = None
                    __attr_target = _static_1696164084112('path', 'action/link_target|nothing', econtext=econtext)(_static_1696164075280(econtext, __zt_tmp))
                    __attr_target = __quote(__attr_target, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_target is not None:
                        __append(' target="%s"' % __attr_target)
                    __append(' >\n\n        ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162233104
                    __attrs_1696162233104 = _static_1696095921936
                    # <Value "python:actionid != 'history'" (26:27)> -> __condition
                    __token = 876
                    try:
                        __zt_tmp = __attrs_1696162233104
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696162053200('python', "actionid != 'history'", econtext=econtext)(_static_1696162050576(econtext, __zt_tmp))
                    if __condition:
                        __append('\n          ')
                        # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162225360
                        __attrs_1696162225360 = _static_1696094046352
                        # <Value "python:action['icon']" (27:35)> -> __condition
                        __token = 942
                        try:
                            __zt_tmp = __attrs_1696162225360
                        except NameError:
                            __zt_tmp = None
                        __condition = _static_1696162049296('python', "action['icon']", econtext=econtext)(_static_1696094576144(econtext, __zt_tmp))
                        if __condition:
                            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162223632
                            __default_1696162223632 = _DEFAULT_MARKER
                            # <Value "python:icons.tag(action['icon'] or 'toolbar-action', tag_class='me-1')" (28:43)> -> __cache_1696162227152
                            __token = 1008
                            try:
                                __zt_tmp = __attrs_1696162225360
                            except NameError:
                                __zt_tmp = None
                            __cache_1696162227152 = _static_1696162601872('python', "icons.tag(action['icon'] or 'toolbar-action', tag_class='me-1')", econtext=econtext)(_static_1696162597008(econtext, __zt_tmp))
                            # <BinOp left=<Value "python:icons.tag(action['icon'] or 'toolbar-action', tag_class='me-1')" (28:43)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb26d450> -> __condition
                            __expression = __cache_1696162227152
                            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                            __value = _DEFAULT_MARKER
                            __condition = __expression is __value
                            if __condition:
                                pass
                            else:
                                __content = __cache_1696162227152
                                __content = __convert(__content)
                                if __content is not None:
                                    __append(__content)
                        __append('\n          ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='toolbar-label', kind=None)]) name=None at 18aeb258c90> -> __attrs_1696093665296
                        __attrs_1696093665296 = _static_1696099658768
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="toolbar-label" >')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162222992
                        __default_1696162222992 = _DEFAULT_MARKER
                        # <Value 'action/title' (31:29)> -> __cache_1696162220944
                        __token = 1160
                        try:
                            __zt_tmp = __attrs_1696093665296
                        except NameError:
                            __zt_tmp = None
                        __cache_1696162220944 = _static_1696163093520('path', 'action/title', econtext=econtext)(_static_1696163099216(econtext, __zt_tmp))
                        # <BinOp left=<Value 'action/title' (31:29)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb259b90> -> __condition
                        __expression = __cache_1696162220944
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            __append('View name')
                        else:
                            __content = __cache_1696162220944
                            __content = translate(__content, default=None, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append(__content)
                        __append('</span>\n        ')
                    __append('\n\n        ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696093657872
                    __attrs_1696093657872 = _static_1696031599440
                    # <Value "python:actionid == 'history'" (36:31)> -> __condition
                    __token = 1286
                    try:
                        __zt_tmp = __attrs_1696093657872
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696141394384('python', "actionid == 'history'", econtext=econtext)(_static_1696141399376(econtext, __zt_tmp))
                    if __condition:
                        __append('\n          ')
                        # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162020496
                        __attrs_1696162020496 = _static_1696141401616
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162005904
                        __default_1696162005904 = _DEFAULT_MARKER
                        # <Value "python:icons.tag('lock' if locked else action['icon'], tag_class='me-1')" (37:43)> -> __cache_1696162014096
                        __token = 1360
                        try:
                            __zt_tmp = __attrs_1696162020496
                        except NameError:
                            __zt_tmp = None
                        __cache_1696162014096 = _static_1696095326480('python', "icons.tag('lock' if locked else action['icon'], tag_class='me-1')", econtext=econtext)(_static_1696095323984(econtext, __zt_tmp))
                        # <BinOp left=<Value "python:icons.tag('lock' if locked else action['icon'], tag_class='me-1')" (37:43)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb2243d0> -> __condition
                        __expression = __cache_1696162014096
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            pass
                        else:
                            __content = __cache_1696162014096
                            __content = __convert(__content)
                            if __content is not None:
                                __append(__content)
                        __append('\n          ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='toolbar-label', kind=None)]) name=None at 18aeb227610> -> __attrs_1696162017104
                        __attrs_1696162017104 = _static_1696059903056
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="toolbar-label">\n            ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='data-pat-display-time', kind=None)], values=[Constant(value='pat-display-time', kind=None), ..., Constant(value='output-format: L LTS', kind=None)]) name=None at 18aeb226050> -> __attrs_1696162009680
                        __attrs_1696162009680 = _static_1696162932176
                        # <time ... (0:0)
                        # --------------------------------------------------------
                        __append('<time class="pat-display-time"')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162005712
                        __default_1696162005712 = _DEFAULT_MARKER
                        # <Interpolation value=<Substitution '${context/ModificationDate}' (40:28)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb224b10> -> __attr_datetime
                        __token = 1549
                        try:
                            __zt_tmp = __attrs_1696162009680
                        except NameError:
                            __zt_tmp = None
                        __attr_datetime = _static_1696164070544('path', 'context/ModificationDate', econtext=econtext)(_static_1696094570512(econtext, __zt_tmp))
                        __attr_datetime = __quote(__attr_datetime, '"', '&quot;', None, _DEFAULT_MARKER)
                        __attr_datetime = __attr_datetime
                        if __attr_datetime is None:
                            pass
                        elif __attr_datetime is _DEFAULT_MARKER:
                            __attr_datetime = None
                        else:
                            __tt = type(__attr_datetime)
                            if __tt is bytes:
                                __attr_datetime = decode(__attr_datetime)
                            elif __tt is not str:
                                if __tt is int or __tt is float:
                                    __attr_datetime = str(__attr_datetime)
                                else:
                                    __markup = getattr(__attr_datetime, '__html__', None)
                                    if __markup is None:
                                        __converted = translate(__attr_datetime, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                        __attr_datetime = str(__attr_datetime) if __attr_datetime is __converted else __converted
                                    else:
                                        __attr_datetime = __markup()
                        if __attr_datetime is not None:
                            __append(' datetime="%s"' % __attr_datetime)
                        __append(' data-pat-display-time="output-format: L LTS" >')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162014224
                        __default_1696162014224 = _DEFAULT_MARKER
                        # <Value '' (42:31)> -> __cache_1696162013520
                        __token = 1670
                        try:
                            __zt_tmp = __attrs_1696162009680
                        except NameError:
                            __zt_tmp = None
                        __cache_1696162013520 = _static_1696163852176('path', '', econtext=econtext)(_static_1696164080912(econtext, __zt_tmp))
                        # <BinOp left=<Value '' (42:31)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb226290> -> __condition
                        __expression = __cache_1696162013520
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            # <Interpolation value=<Substitution '${context/ModificationDate}' (43:13)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb225690> -> __content_1695946256768
                            __token = 1687
                            try:
                                __zt_tmp = __attrs_1696162009680
                            except NameError:
                                __zt_tmp = None
                            __content_1695946256768 = _static_1696164009744('path', 'context/ModificationDate', econtext=econtext)(_static_1696094403920(econtext, __zt_tmp))
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
                        else:
                            __content = __cache_1696162013520
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append(__content)
                        __append('</time>\n          </span>\n        ')
                    __append('\n\n      </a>\n\n    </li>')
                    if __backup_selected_1696124270272 is __marker:
                        del econtext['selected']
                    else:
                        econtext['selected'] = __backup_selected_1696124270272
                    if __backup_actionid_1696163182656 is __marker:
                        del econtext['actionid']
                    else:
                        econtext['actionid'] = __backup_actionid_1696163182656
                    __append('\n  ')
                    ____index_1696096004752 -= 1
                    if ____index_1696096004752 > 0:
                        __append('')
                if __backup_action_1696101313856 is __marker:
                    del econtext['action']
                else:
                    econtext['action'] = __backup_action_1696101313856
                __append('\n')
                __i18n_domain = __previous_i18n_domain_1696161970320
            if __backup_icons_1696101314560 is __marker:
                del econtext['icons']
            else:
                econtext['icons'] = __backup_icons_1696101314560
            if __backup_locked_1696099342848 is __marker:
                del econtext['locked']
            else:
                econtext['locked'] = __backup_locked_1696099342848
            if __backup_ploneview_1696101316544 is __marker:
                del econtext['ploneview']
            else:
                econtext['ploneview'] = __backup_ploneview_1696101316544
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}