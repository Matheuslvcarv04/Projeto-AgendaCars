# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\contentviews.pt'

__tokens = {61: ('context/@@plone', 2, 30), 131: ('ploneview/showToolbar', 4, 33), 240: ('view/tabSet1', 9, 23), 302: ('python: view.menu_template(actions=actions)', 11, 32), 460: ('provider:plone.contentmenu', 17, 32), 600: ('view/tabSet2', 23, 23), 662: ('python: view.menu_template(actions=actions)', 25, 32)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696164427344 = {}
_static_1696125948880 = __compile_zt_expr
_static_1696162653904 = __C2ZContextWrapper
_static_1696163871120 = __compile_zt_expr
_static_1696163870416 = __C2ZContextWrapper
_static_1696163868432 = {}
_static_1696163857360 = __compile_zt_expr
_static_1696162389904 = __C2ZContextWrapper
_static_1696162386384 = {}
_static_1696162396560 = __compile_zt_expr
_static_1696162384464 = __C2ZContextWrapper
_static_1696162233104 = {'class': 'border-top my-2'}
_static_1696162230224 = {}
_static_1696162231120 = {}
_static_1696059715280 = __compile_zt_expr
_static_1696094331088 = __C2ZContextWrapper
_static_1696163992720 = {'class': 'border-top my-2'}
_static_1696163997328 = {}
_static_1696126277520 = __compile_zt_expr
_static_1696162315280 = __C2ZContextWrapper
_static_1696162302672 = {}
_static_1696162130192 = __compile_zt_expr
_static_1696162121232 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696094047312
            __attrs_1696094047312 = _static_1696164427344
            __backup_ploneview_1696124786048 = get('ploneview', __marker)
            # <Value 'context/@@plone' (2:30)> -> __value
            __token = 61
            try:
                __zt_tmp = __attrs_1696094047312
            except NameError:
                __zt_tmp = None
            __value = _static_1696125948880('path', 'context/@@plone', econtext=econtext)(_static_1696162653904(econtext, __zt_tmp))
            econtext['ploneview'] = __value
            # <Value 'ploneview/showToolbar' (4:33)> -> __condition
            __token = 131
            try:
                __zt_tmp = __attrs_1696094047312
            except NameError:
                __zt_tmp = None
            __condition = _static_1696163871120('path', 'ploneview/showToolbar', econtext=econtext)(_static_1696163870416(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696094049680 = __i18n_domain
                __i18n_domain = 'plone'
                __append('\n\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696094048528
                __attrs_1696094048528 = _static_1696163868432
                __backup_actions_1696124781696 = get('actions', __marker)
                # <Value 'view/tabSet1' (9:23)> -> __value
                __token = 240
                try:
                    __zt_tmp = __attrs_1696094048528
                except NameError:
                    __zt_tmp = None
                __value = _static_1696163857360('path', 'view/tabSet1', econtext=econtext)(_static_1696162389904(econtext, __zt_tmp))
                econtext['actions'] = __value
                __append('\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696096317264
                __attrs_1696096317264 = _static_1696162386384
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696096318608
                __default_1696096318608 = _DEFAULT_MARKER
                # <Value 'python: view.menu_template(actions=actions)' (11:32)> -> __cache_1696096310224
                __token = 302
                try:
                    __zt_tmp = __attrs_1696096317264
                except NameError:
                    __zt_tmp = None
                __cache_1696096310224 = _static_1696162396560('python', ' view.menu_template(actions=actions)', econtext=econtext)(_static_1696162384464(econtext, __zt_tmp))
                # <BinOp left=<Value 'python: view.menu_template(actions=actions)' (11:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18ae737eb90> -> __condition
                __expression = __cache_1696096310224
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div></div>')
                else:
                    __content = __cache_1696096310224
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('\n  ')
                if __backup_actions_1696124781696 is __marker:
                    del econtext['actions']
                else:
                    econtext['actions'] = __backup_actions_1696124781696
                __append('\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='border-top my-2', kind=None)]) name=None at 18ae737cc50> -> __attrs_1696161857040
                __attrs_1696161857040 = _static_1696162233104
                # <li ... (0:0)
                # --------------------------------------------------------
                __append('<li class="border-top my-2"></li>\n\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164042064
                __attrs_1696164042064 = _static_1696162230224
                __append('\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164041360
                __attrs_1696164041360 = _static_1696162231120
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164040912
                __default_1696164040912 = _DEFAULT_MARKER
                # <Value 'provider:plone.contentmenu' (17:32)> -> __cache_1696164040144
                __token = 460
                try:
                    __zt_tmp = __attrs_1696164041360
                except NameError:
                    __zt_tmp = None
                __cache_1696164040144 = _static_1696059715280('provider', 'plone.contentmenu', econtext=econtext)(_static_1696094331088(econtext, __zt_tmp))
                # <BinOp left=<Value 'provider:plone.contentmenu' (17:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb414d90> -> __condition
                __expression = __cache_1696164040144
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div></div>')
                else:
                    __content = __cache_1696164040144
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('\n  \n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='border-top my-2', kind=None)]) name=None at 18aeb417250> -> __attrs_1696164051984
                __attrs_1696164051984 = _static_1696163992720
                # <li ... (0:0)
                # --------------------------------------------------------
                __append('<li class="border-top my-2"></li>\n\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164050000
                __attrs_1696164050000 = _static_1696163997328
                __backup_actions_1696124786240 = get('actions', __marker)
                # <Value 'view/tabSet2' (23:23)> -> __value
                __token = 600
                try:
                    __zt_tmp = __attrs_1696164050000
                except NameError:
                    __zt_tmp = None
                __value = _static_1696126277520('path', 'view/tabSet2', econtext=econtext)(_static_1696162315280(econtext, __zt_tmp))
                econtext['actions'] = __value
                __append('\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164046480
                __attrs_1696164046480 = _static_1696162302672
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164046928
                __default_1696164046928 = _DEFAULT_MARKER
                # <Value 'python: view.menu_template(actions=actions)' (25:32)> -> __cache_1696164047888
                __token = 662
                try:
                    __zt_tmp = __attrs_1696164046480
                except NameError:
                    __zt_tmp = None
                __cache_1696164047888 = _static_1696162130192('python', ' view.menu_template(actions=actions)', econtext=econtext)(_static_1696162121232(econtext, __zt_tmp))
                # <BinOp left=<Value 'python: view.menu_template(actions=actions)' (25:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb4167d0> -> __condition
                __expression = __cache_1696164047888
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div></div>')
                else:
                    __content = __cache_1696164047888
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('\n  ')
                if __backup_actions_1696124786240 is __marker:
                    del econtext['actions']
                else:
                    econtext['actions'] = __backup_actions_1696124786240
                __append('\n\n')
                __i18n_domain = __previous_i18n_domain_1696094049680
            if __backup_ploneview_1696124786048 is __marker:
                del econtext['ploneview']
            else:
                econtext['ploneview'] = __backup_ploneview_1696124786048
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}