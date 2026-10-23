# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\anontools.pt'

__tokens = {47: ('python:view.user_actions and view.anonymous', 2, 20), 181: ('view/user_actions', 6, 27), 296: ('action', 11, 11), 245: ('action/title', 9, 22)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696162671696 = {'id': 'portal-anontools'}
_static_1696162671760 = __compile_zt_expr
_static_1696162470224 = __C2ZContextWrapper
_static_1696162470480 = {'class': 'list-inline'}
_static_1696162476560 = {'class': 'list-inline-item'}
_static_1696164447632 = __compile_zt_expr
_static_1696164456272 = __C2ZContextWrapper
_static_1696162473424 = {'href': ''}
_static_1696164112144 = __compile_zt_expr
_static_1696164109840 = __C2ZContextWrapper
_static_1696164107408 = set(['compact', 'autofocus', 'shadowrootserializable', 'controls', 'playsinline', 'itemscope', 'reversed', 'loop', 'formnovalidate', 'disabled', 'readonly', 'nomodule', 'noresize', 'checked', 'allowfullscreen', 'defer', 'ismap', 'muted', 'multiple', 'autoplay', 'noshade', 'default', 'novalidate', 'open', 'async', 'selected', 'required', 'shadowrootclonable', 'inert', 'nowrap', 'declare', 'shadowrootdelegatesfocus'])
_static_1696164107728 = set([])
_static_1696162991504 = __compile_zt_expr
_static_1696163001296 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='portal-anontools', kind=None)]) name=None at 18aeb395690> -> __attrs_1696163518864
            __attrs_1696163518864 = _static_1696162671696
            # <Value 'python:view.user_actions and view.anonymous' (2:20)> -> __condition
            __token = 47
            try:
                __zt_tmp = __attrs_1696163518864
            except NameError:
                __zt_tmp = None
            __condition = _static_1696162671760('python', 'view.user_actions and view.anonymous', econtext=econtext)(_static_1696162470224(econtext, __zt_tmp))
            if __condition:
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div id="portal-anontools" >\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='list-inline', kind=None)]) name=None at 18aeb397390> -> __attrs_1696163526800
                __attrs_1696163526800 = _static_1696162470480
                # <ul ... (0:0)
                # --------------------------------------------------------
                __append('<ul class="list-inline">\n    ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='list-inline-item', kind=None)]) name=None at 18aeb396650> -> __attrs_1696163523472
                __attrs_1696163523472 = _static_1696162476560
                __backup_action_1696136255872 = get('action', __marker)
                # <Value 'view/user_actions' (6:27)> -> __iterator
                __token = 181
                try:
                    __zt_tmp = __attrs_1696163523472
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1696164447632('path', 'view/user_actions', econtext=econtext)(_static_1696164456272(econtext, __zt_tmp))
                __iterator, ____index_1696163515792 = getname('repeat')('action', __iterator)
                econtext['action'] = None
                for __item in __iterator:
                    econtext['action'] = __item
                    # <li ... (0:0)
                    # --------------------------------------------------------
                    __append('<li class="list-inline-item" >\n      ')
                    # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='', kind=None)]) name=None at 18aeb2c7a50> -> __attrs_1696162674704
                    __attrs_1696162674704 = _static_1696162473424
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Value 'action' (11:11)> -> __cache_1696162675536
                    __token = 296
                    try:
                        __zt_tmp = __attrs_1696162674704
                    except NameError:
                        __zt_tmp = None
                    __cache_1696162675536 = _static_1696164112144('path', 'action', econtext=econtext)(_static_1696164109840(econtext, __zt_tmp))
                    if 'href' not in __chain(__cache_1696162675536):
                        __append(' href=""')
                    __attr_1696162675920 = __cache_1696162675536
                    for name, value in __attr_1696162675920.items():
                        if name in _static_1696164107408:
                            if not bool(value):
                                continue
                            value = name
                        if name not in _static_1696164107728 and value is not None:
                            if name in _static_1696164107408:
                                if not bool(value):
                                    continue
                                value = name
                            __append(' ' + name + '=' + '"' + __quote(value, '"', '&quot;', None, None) + '"')
                    __append(' >')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162660688
                    __default_1696162660688 = _DEFAULT_MARKER
                    # <Value 'action/title' (9:22)> -> __cache_1696163521552
                    __token = 245
                    try:
                        __zt_tmp = __attrs_1696162674704
                    except NameError:
                        __zt_tmp = None
                    __cache_1696163521552 = _static_1696162991504('path', 'action/title', econtext=econtext)(_static_1696163001296(econtext, __zt_tmp))
                    # <BinOp left=<Value 'action/title' (9:22)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb3975d0> -> __condition
                    __expression = __cache_1696163521552
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        __append('\n          action title\n      ')
                    else:
                        __content = __cache_1696163521552
                        __content = translate(__content, default=None, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('</a>\n    </li>')
                    ____index_1696163515792 -= 1
                    if ____index_1696163515792 > 0:
                        __append('\n    ')
                if __backup_action_1696136255872 is __marker:
                    del econtext['action']
                else:
                    econtext['action'] = __backup_action_1696136255872
                __append('\n  </ul>\n</div>')
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}