# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\sections.pt'

__tokens = {218: ('python:view.navtree', 4, 29), 369: ('python:view.render_globalnav()', 11, 36)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696163197328 = {}
_static_1696164507984 = __compile_zt_expr
_static_1696164542096 = __C2ZContextWrapper
_static_1696164538576 = {'class': 'navbar-nav', 'id': 'portal-globalnav'}
_static_1696163519760 = {}
_static_1696164456848 = __compile_zt_expr
_static_1696164450192 = __C2ZContextWrapper
_static_1696163001744 = {'class': 'navbar-toggler', 'aria-label': 'Toggle navigation', 'type': 'button'}
_static_1696162992592 = {'class': 'navbar-toggler-icon'}
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163293136
            __attrs_1696163293136 = _static_1696163197328
            # <Value 'python:view.navtree' (4:29)> -> __condition
            __token = 218
            try:
                __zt_tmp = __attrs_1696163293136
            except NameError:
                __zt_tmp = None
            __condition = _static_1696164507984('python', 'view.navtree', econtext=econtext)(_static_1696164542096(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696163295632 = __i18n_domain
                __i18n_domain = 'plone'
                __append('\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='navbar-nav', kind=None), Constant(value='portal-globalnav', kind=None)]) name=None at 18aeb35eb10> -> __attrs_1696163286928
                __attrs_1696163286928 = _static_1696164538576
                # <ul ... (0:0)
                # --------------------------------------------------------
                __append('<ul class="navbar-nav" id="portal-globalnav" >\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163284176
                __attrs_1696163284176 = _static_1696163519760
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163283536
                __default_1696163283536 = _DEFAULT_MARKER
                # <Value 'python:view.render_globalnav()' (11:36)> -> __cache_1696163286736
                __token = 369
                try:
                    __zt_tmp = __attrs_1696163284176
                except NameError:
                    __zt_tmp = None
                __cache_1696163286736 = _static_1696164456848('python', 'view.render_globalnav()', econtext=econtext)(_static_1696164450192(econtext, __zt_tmp))
                # <BinOp left=<Value 'python:view.render_globalnav()' (11:36)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb35c910> -> __condition
                __expression = __cache_1696163286736
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <navtree ... (0:0)
                    # --------------------------------------------------------
                    __append('<navtree></navtree>')
                else:
                    __content = __cache_1696163286736
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('\n  </ul>\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='type', kind=None)], values=[Constant(value='navbar-toggler', kind=None), ..., Constant(value='button', kind=None)]) name=None at 18aeb35ed50> -> __attrs_1696163199504
                __attrs_1696163199504 = _static_1696163001744
                # <button ... (0:0)
                # --------------------------------------------------------
                __append('<button class="navbar-toggler"')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163191440
                __default_1696163191440 = _DEFAULT_MARKER
                # <Translate msgid='label_toggle_navigation' node=Constant(value='Toggle navigation', kind=None) at 18aeb344d50> -> __attr_aria_label
                __attr_aria_label = 'Toggle navigation'
                __attr_aria_label = translate('label_toggle_navigation', default=__attr_aria_label, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                if __attr_aria_label is not None:
                    __append(' aria-label="%s"' % __attr_aria_label)
                __append(' type="button" >\n    ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='navbar-toggler-icon', kind=None)]) name=None at 18aeb345d50> -> __attrs_1696163185744
                __attrs_1696163185744 = _static_1696162992592
                # <span ... (0:0)
                # --------------------------------------------------------
                __append('<span class="navbar-toggler-icon"></span>\n  </button>\n\n')
                __i18n_domain = __previous_i18n_domain_1696163295632
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}