# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\membertools.pt'

__tokens = {78: ('here/@@plone_context_state/is_toolbar_visible', 3, 23), 138: (' view/anonymou', 4, 13), 182: ('python:not isAnon and not toolbar_visible', 6, 20), 441: ('python:view.user_actions and not view.anonymous', 16, 22), 618: ('view/homelink_url', 22, 14), 677: ('view/user_name', 25, 25), 872: ('view/user_actions', 32, 29), 933: ('string:membertools-${action/id}', 34, 15), 1122: ('action/href', 41, 18), 1154: (' action/link_target|nothin', 42, 19), 1062: ('action/title', 39, 24)}
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
_static_1696162475216 = {'id': 'portal-membertools-wrapper'}
_static_1696164015248 = __compile_zt_expr
_static_1696164008208 = __C2ZContextWrapper
_static_1696094570704 = __compile_zt_expr
_static_1696163514960 = __C2ZContextWrapper
_static_1696163526096 = __compile_zt_expr
_static_1696164007824 = __C2ZContextWrapper
_static_1696162467600 = {'class': 'hiddenStructure'}
_static_1696163520336 = {'class': 'dropdown dropdown-menu-end', 'id': 'portal-membertools'}
_static_1696163327760 = __compile_zt_expr
_static_1696163320272 = __C2ZContextWrapper
_static_1696095324752 = {'class': 'dropdown-toggle', 'id': 'user-name', 'data-bs-toggle': 'dropdown', 'href': 'view/homelink_url'}
_static_1696162764112 = __compile_zt_expr
_static_1696162896784 = __C2ZContextWrapper
_static_1696162897616 = {}
_static_1696163462928 = __compile_zt_expr
_static_1696163462864 = __C2ZContextWrapper
_static_1696163448016 = {'class': 'caret'}
_static_1696163223376 = {'class': 'dropdown-menu', 'aria-labelledby': 'dropdownMenu', 'role': 'menu'}
_static_1696163228368 = {'id': 'string:membertools-${action/id}'}
_static_1696163219856 = __compile_zt_expr
_static_1696163228944 = __C2ZContextWrapper
_static_1696098740816 = __compile_zt_expr
_static_1696164609616 = __C2ZContextWrapper
_static_1696164594256 = {'class': 'dropdown-item', 'href': '', 'target': 'action/link_target|nothing'}
_static_1696164501264 = __compile_zt_expr
_static_1696164509008 = __C2ZContextWrapper
_static_1696163221008 = __compile_zt_expr
_static_1696163227280 = __C2ZContextWrapper
_static_1696164509392 = __compile_zt_expr
_static_1696164508240 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='portal-membertools-wrapper', kind=None)]) name=None at 18aeb2d5010> -> __attrs_1696162732176
            __attrs_1696162732176 = _static_1696162475216
            __backup_toolbar_visible_1696101468608 = get('toolbar_visible', __marker)
            # <Value 'here/@@plone_context_state/is_toolbar_visible' (3:23)> -> __value
            __token = 78
            try:
                __zt_tmp = __attrs_1696162732176
            except NameError:
                __zt_tmp = None
            __value = _static_1696164015248('path', 'here/@@plone_context_state/is_toolbar_visible', econtext=econtext)(_static_1696164008208(econtext, __zt_tmp))
            econtext['toolbar_visible'] = __value
            __backup_isAnon_1696101002560 = get('isAnon', __marker)
            # <Value 'view/anonymous' (4:13)> -> __value
            __token = 138
            try:
                __zt_tmp = __attrs_1696162732176
            except NameError:
                __zt_tmp = None
            __value = _static_1696094570704('path', 'view/anonymous', econtext=econtext)(_static_1696163514960(econtext, __zt_tmp))
            econtext['isAnon'] = __value
            # <Value 'python:not isAnon and not toolbar_visible' (6:20)> -> __condition
            __token = 182
            try:
                __zt_tmp = __attrs_1696162732176
            except NameError:
                __zt_tmp = None
            __condition = _static_1696163526096('python', 'not isAnon and not toolbar_visible', econtext=econtext)(_static_1696164007824(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696162731344 = __i18n_domain
                __i18n_domain = 'plone'
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div id="portal-membertools-wrapper" >\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='hiddenStructure', kind=None)]) name=None at 18aeb2d5b50> -> __attrs_1696162733456
                __attrs_1696162733456 = _static_1696162467600
                # <p ... (0:0)
                # --------------------------------------------------------
                __append('<p class="hiddenStructure" >')
                __stream_1696162732304 = []
                __append_1696162732304 = __stream_1696162732304.append
                __append_1696162732304('Member tools')
                __msgid_1696162732304 = __re_whitespace(''.join(__stream_1696162732304)).strip()
                __append(translate('heading_member_tools', mapping=None, default=__msgid_1696162732304, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</p>\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='dropdown dropdown-menu-end', kind=None), Constant(value='portal-membertools', kind=None)]) name=None at 18aeb2ee410> -> __attrs_1696162824272
                __attrs_1696162824272 = _static_1696163520336
                # <Value 'python:view.user_actions and not view.anonymous' (16:22)> -> __condition
                __token = 441
                try:
                    __zt_tmp = __attrs_1696162824272
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696163327760('python', 'view.user_actions and not view.anonymous', econtext=econtext)(_static_1696163320272(econtext, __zt_tmp))
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div class="dropdown dropdown-menu-end" id="portal-membertools" >\n    ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='href', kind=None)], values=[Constant(value='dropdown-toggle', kind=None), ..., Constant(value='view/homelink_url', kind=None)]) name=None at 18aeb2d4150> -> __attrs_1696162829200
                    __attrs_1696162829200 = _static_1696095324752
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a class="dropdown-toggle" id="user-name" data-bs-toggle="dropdown"')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162838352
                    __default_1696162838352 = _DEFAULT_MARKER
                    # <Substitution 'view/homelink_url' (22:14)> -> __attr_href
                    __token = 618
                    try:
                        __zt_tmp = __attrs_1696162829200
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696162764112('path', 'view/homelink_url', econtext=econtext)(_static_1696162896784(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    __append(' >\n      ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162839760
                    __attrs_1696162839760 = _static_1696162897616
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162825296
                    __default_1696162825296 = _DEFAULT_MARKER
                    # <Value 'view/user_name' (25:25)> -> __cache_1696162839696
                    __token = 677
                    try:
                        __zt_tmp = __attrs_1696162839760
                    except NameError:
                        __zt_tmp = None
                    __cache_1696162839696 = _static_1696163462928('path', 'view/user_name', econtext=econtext)(_static_1696163462864(econtext, __zt_tmp))
                    # <BinOp left=<Value 'view/user_name' (25:25)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb2efdd0> -> __condition
                    __expression = __cache_1696162839696
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span>John</span>')
                    else:
                        __content = __cache_1696162839696
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='caret', kind=None)]) name=None at 18aeb2ef410> -> __attrs_1696162827344
                    __attrs_1696162827344 = _static_1696163448016
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span class="caret"></span>\n    </a>\n    ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='role', kind=None)], values=[Constant(value='dropdown-menu', kind=None), ..., Constant(value='menu', kind=None)]) name=None at 18aeb2ee450> -> __attrs_1696163854672
                    __attrs_1696163854672 = _static_1696163223376
                    # <ul ... (0:0)
                    # --------------------------------------------------------
                    __append('<ul class="dropdown-menu" aria-labelledby="dropdownMenu" role="menu" >\n      ')
                    # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='string:membertools-${action/id}', kind=None)]) name=None at 18aeb3e4610> -> __attrs_1696163852816
                    __attrs_1696163852816 = _static_1696163228368
                    __backup_action_1696124261824 = get('action', __marker)
                    # <Value 'view/user_actions' (32:29)> -> __iterator
                    __token = 872
                    try:
                        __zt_tmp = __attrs_1696163852816
                    except NameError:
                        __zt_tmp = None
                    __iterator = _static_1696163219856('path', 'view/user_actions', econtext=econtext)(_static_1696163228944(econtext, __zt_tmp))
                    __iterator, ____index_1696163842256 = getname('repeat')('action', __iterator)
                    econtext['action'] = None
                    for __item in __iterator:
                        econtext['action'] = __item
                        # <li ... (0:0)
                        # --------------------------------------------------------
                        __append('<li')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163842320
                        __default_1696163842320 = _DEFAULT_MARKER
                        # <Substitution 'string:membertools-${action/id}' (34:15)> -> __attr_id
                        __token = 933
                        try:
                            __zt_tmp = __attrs_1696163852816
                        except NameError:
                            __zt_tmp = None
                        __attr_id = _static_1696098740816('string', 'membertools-${action/id}', econtext=econtext)(_static_1696164609616(econtext, __zt_tmp))
                        __attr_id = __quote(__attr_id, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_id is not None:
                            __append(' id="%s"' % __attr_id)
                        __append(' >\n        ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='target', kind=None)], values=[Constant(value='dropdown-item', kind=None), ..., Constant(value='action/link_target|nothing', kind=None)]) name=None at 18aeb3e4150> -> __attrs_1696162043536
                        __attrs_1696162043536 = _static_1696164594256
                        # <a ... (0:0)
                        # --------------------------------------------------------
                        __append('<a class="dropdown-item"')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162044240
                        __default_1696162044240 = _DEFAULT_MARKER
                        # <Substitution 'action/href' (41:18)> -> __attr_href
                        __token = 1122
                        try:
                            __zt_tmp = __attrs_1696162043536
                        except NameError:
                            __zt_tmp = None
                        __attr_href = _static_1696164501264('path', 'action/href', econtext=econtext)(_static_1696164509008(econtext, __zt_tmp))
                        __attr_href = __quote(__attr_href, '"', '&quot;', '', _DEFAULT_MARKER)
                        if __attr_href is not None:
                            __append(' href="%s"' % __attr_href)
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162038288
                        __default_1696162038288 = _DEFAULT_MARKER
                        # <Substitution 'action/link_target|nothing' (42:19)> -> __attr_target
                        __token = 1154
                        try:
                            __zt_tmp = __attrs_1696162043536
                        except NameError:
                            __zt_tmp = None
                        __attr_target = _static_1696163221008('path', 'action/link_target|nothing', econtext=econtext)(_static_1696163227280(econtext, __zt_tmp))
                        __attr_target = __quote(__attr_target, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_target is not None:
                            __append(' target="%s"' % __attr_target)
                        __append(' >')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163846032
                        __default_1696163846032 = _DEFAULT_MARKER
                        # <Value 'action/title' (39:24)> -> __cache_1696163854096
                        __token = 1062
                        try:
                            __zt_tmp = __attrs_1696162043536
                        except NameError:
                            __zt_tmp = None
                        __cache_1696163854096 = _static_1696164509392('path', 'action/title', econtext=econtext)(_static_1696164508240(econtext, __zt_tmp))
                        # <BinOp left=<Value 'action/title' (39:24)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb3e6d50> -> __condition
                        __expression = __cache_1696163854096
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            __append('\n                  action title\n        ')
                        else:
                            __content = __cache_1696163854096
                            __content = translate(__content, default=None, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append(__content)
                        __append('</a>\n      </li>')
                        ____index_1696163842256 -= 1
                        if ____index_1696163842256 > 0:
                            __append('\n      ')
                    if __backup_action_1696124261824 is __marker:
                        del econtext['action']
                    else:
                        econtext['action'] = __backup_action_1696124261824
                    __append('\n    </ul>\n  </div>')
                __append('\n\n</div>')
                __i18n_domain = __previous_i18n_domain_1696162731344
            if __backup_isAnon_1696101002560 is __marker:
                del econtext['isAnon']
            else:
                econtext['isAnon'] = __backup_isAnon_1696101002560
            if __backup_toolbar_visible_1696101468608 is __marker:
                del econtext['toolbar_visible']
            else:
                econtext['toolbar_visible'] = __backup_toolbar_visible_1696101468608
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}