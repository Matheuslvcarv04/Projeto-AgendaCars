# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\nextprevious\\links.pt'

__tokens = {181: ('view/enabled|nothing', 5, 15), 224: (' view/isViewTemplate|nothin', 6, 21), 281: ('python:enabled and isViewTemplate', 8, 20), 455: ('view/previous', 16, 19), 503: ('previous', 18, 23), 553: ('previous/url', 20, 15), 738: ('view/next', 29, 15), 782: ('next', 31, 23), 828: ('next/url', 33, 15)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696125950160 = {'xmlns': 'http://www.w3.org/1999/xhtml'}
_static_1696164224208 = __compile_zt_expr
_static_1696164228048 = __C2ZContextWrapper
_static_1696096009872 = __compile_zt_expr
_static_1696098728976 = __C2ZContextWrapper
_static_1696163570512 = __compile_zt_expr
_static_1696162745552 = __C2ZContextWrapper
_static_1696098714000 = {'href': '', 'rel': 'previous', 'title': 'Go to previous item'}
_static_1696127196304 = __compile_zt_expr
_static_1696094332432 = __C2ZContextWrapper
_static_1696095605840 = __compile_zt_expr
_static_1696094401808 = __C2ZContextWrapper
_static_1696163181520 = __compile_zt_expr
_static_1696163170576 = __C2ZContextWrapper
_static_1696163419536 = {'href': '', 'rel': 'next', 'title': 'Go to next item'}
_static_1696125025488 = __compile_zt_expr
_static_1696094047440 = __C2ZContextWrapper
_static_1696163963856 = __compile_zt_expr
_static_1696163963408 = __C2ZContextWrapper
_static_1696101583952 = __compile_zt_expr
_static_1696101592784 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None)]) name=None at 18aeb36a750> -> __attrs_1696163336592
            __attrs_1696163336592 = _static_1696125950160
            __backup_enabled_1696123527744 = get('enabled', __marker)
            # <Value 'view/enabled|nothing' (5:15)> -> __value
            __token = 181
            try:
                __zt_tmp = __attrs_1696163336592
            except NameError:
                __zt_tmp = None
            __value = _static_1696164224208('path', 'view/enabled|nothing', econtext=econtext)(_static_1696164228048(econtext, __zt_tmp))
            econtext['enabled'] = __value
            __backup_isViewTemplate_1696123529536 = get('isViewTemplate', __marker)
            # <Value 'view/isViewTemplate|nothing' (6:21)> -> __value
            __token = 224
            try:
                __zt_tmp = __attrs_1696163336592
            except NameError:
                __zt_tmp = None
            __value = _static_1696096009872('path', 'view/isViewTemplate|nothing', econtext=econtext)(_static_1696098728976(econtext, __zt_tmp))
            econtext['isViewTemplate'] = __value
            # <Value 'python:enabled and isViewTemplate' (8:20)> -> __condition
            __token = 281
            try:
                __zt_tmp = __attrs_1696163336592
            except NameError:
                __zt_tmp = None
            __condition = _static_1696163570512('python', 'enabled and isViewTemplate', econtext=econtext)(_static_1696162745552(econtext, __zt_tmp))
            if __condition:
                __append('\n\n  ')
                # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='title', kind=None)], values=[Constant(value='', kind=None), ..., Constant(value='Go to previous item', kind=None)]) name=None at 18ae7079750> -> __attrs_1696162817424
                __attrs_1696162817424 = _static_1696098714000
                __backup_previous_1696123530048 = get('previous', __marker)
                # <Value 'view/previous' (16:19)> -> __value
                __token = 455
                try:
                    __zt_tmp = __attrs_1696162817424
                except NameError:
                    __zt_tmp = None
                __value = _static_1696127196304('path', 'view/previous', econtext=econtext)(_static_1696094332432(econtext, __zt_tmp))
                econtext['previous'] = __value
                # <Value 'previous' (18:23)> -> __condition
                __token = 503
                try:
                    __zt_tmp = __attrs_1696162817424
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696095605840('path', 'previous', econtext=econtext)(_static_1696094401808(econtext, __zt_tmp))
                if __condition:
                    # <link ... (0:0)
                    # --------------------------------------------------------
                    __append('<link')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696071887824
                    __default_1696071887824 = _DEFAULT_MARKER
                    # <Substitution 'previous/url' (20:15)> -> __attr_href
                    __token = 553
                    try:
                        __zt_tmp = __attrs_1696162817424
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696163181520('path', 'previous/url', econtext=econtext)(_static_1696163170576(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    __append(' rel="previous"')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163630736
                    __default_1696163630736 = _DEFAULT_MARKER
                    # <Translate msgid='title_previous_item' node=Constant(value='Go to previous item', kind=None) at 18ae94f6c90> -> __attr_title
                    __attr_title = 'Go to previous item'
                    __attr_title = translate('title_previous_item', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    __append(' />')
                if __backup_previous_1696123530048 is __marker:
                    del econtext['previous']
                else:
                    econtext['previous'] = __backup_previous_1696123530048
                __append('\n\n  ')
                # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='title', kind=None)], values=[Constant(value='', kind=None), ..., Constant(value='Go to next item', kind=None)]) name=None at 18aeb2e8c90> -> __attrs_1696162819024
                __attrs_1696162819024 = _static_1696163419536
                __backup_next_1696125788928 = get('next', __marker)
                # <Value 'view/next' (29:15)> -> __value
                __token = 738
                try:
                    __zt_tmp = __attrs_1696162819024
                except NameError:
                    __zt_tmp = None
                __value = _static_1696125025488('path', 'view/next', econtext=econtext)(_static_1696094047440(econtext, __zt_tmp))
                econtext['next'] = __value
                # <Value 'next' (31:23)> -> __condition
                __token = 782
                try:
                    __zt_tmp = __attrs_1696162819024
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696163963856('path', 'next', econtext=econtext)(_static_1696163963408(econtext, __zt_tmp))
                if __condition:
                    # <link ... (0:0)
                    # --------------------------------------------------------
                    __append('<link')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162822352
                    __default_1696162822352 = _DEFAULT_MARKER
                    # <Substitution 'next/url' (33:15)> -> __attr_href
                    __token = 828
                    try:
                        __zt_tmp = __attrs_1696162819024
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696101583952('path', 'next/url', econtext=econtext)(_static_1696101592784(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    __append(' rel="next"')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162809232
                    __default_1696162809232 = _DEFAULT_MARKER
                    # <Translate msgid='title_next_item' node=Constant(value='Go to next item', kind=None) at 18aeb2ea610> -> __attr_title
                    __attr_title = 'Go to next item'
                    __attr_title = translate('title_next_item', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    __append(' />')
                if __backup_next_1696125788928 is __marker:
                    del econtext['next']
                else:
                    econtext['next'] = __backup_next_1696125788928
                __append('\n\n')
            if __backup_isViewTemplate_1696123529536 is __marker:
                del econtext['isViewTemplate']
            else:
                econtext['isViewTemplate'] = __backup_isViewTemplate_1696123529536
            if __backup_enabled_1696123527744 is __marker:
                del econtext['enabled']
            else:
                econtext['enabled'] = __backup_enabled_1696123527744
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}