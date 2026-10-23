# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\contenttypes\\browser\\templates\\document.pt'

__tokens = {519: ("python:  getattr(context, 'table_of_contents', False)", 15, 32), 781: ("python:getattr(context, 'text', None)", 22, 30), 671: ("python: toc and 'pat-autotoc' or ''", 20, 24), 858: ('python:context.text.output_relative_to(view.context)', 23, 38), 247: ('context/@@main_template/macros/master', 6, 23), 247: ('context/@@main_template/macros/master', 6, 23)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from collections import deque as _deque
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696101587856 = {}
_static_1696123619600 = __compile_zt_expr
_static_1696123628496 = __C2ZContextWrapper
_static_1696123618768 = {'id': 'section-text'}
_static_1696123625872 = {'class': "${python: toc and 'pat-autotoc' or ''}", 'id': 'parent-fieldname-text'}
_static_1696125958032 = __compile_zt_expr
_static_1696123631120 = __C2ZContextWrapper
_static_1696164128016 = __compile_zt_expr
_static_1696124620432 = __C2ZContextWrapper
_static_1696068228176 = __compile_zt_expr
_static_1696060942736 = __C2ZContextWrapper
_static_1696068579088 = {}
_static_1696163337616 = 'master'
_static_1696163336592 = {}
_static_1696101113552 = __compile_zt_expr
_static_1696163343568 = __C2ZContextWrapper
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

    def render_content_core(__stream, econtext, rcontext, __i18n_domain=None, __i18n_context=None, target_language=None):
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696094569104
            __attrs_1696094569104 = _static_1696101587856
            __backup_toc_1696125791488 = get('toc', __marker)
            # <Value "python:  getattr(context, 'table_of_contents', False)" (15:32)> -> __value
            __token = 519
            try:
                __zt_tmp = __attrs_1696094569104
            except NameError:
                __zt_tmp = None
            __value = _static_1696123619600('python', "  getattr(context, 'table_of_contents', False)", econtext=econtext)(_static_1696123628496(econtext, __zt_tmp))
            econtext['toc'] = __value
            __append('\n\n        ')
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='section-text', kind=None)]) name=None at 18ae71d5390> -> __attrs_1696094575376
            __attrs_1696094575376 = _static_1696123618768
            # <section ... (0:0)
            # --------------------------------------------------------
            __append('<section id="section-text">\n          ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value="${python: toc and 'pat-autotoc' or ''}", kind=None), Constant(value='parent-fieldname-text', kind=None)]) name=None at 18ae5bd7d90> -> __attrs_1696094058832
            __attrs_1696094058832 = _static_1696123625872
            # <Value "python:getattr(context, 'text', None)" (22:30)> -> __condition
            __token = 781
            try:
                __zt_tmp = __attrs_1696094058832
            except NameError:
                __zt_tmp = None
            __condition = _static_1696125958032('python', "getattr(context, 'text', None)", econtext=econtext)(_static_1696123631120(econtext, __zt_tmp))
            if __condition:
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696071501520
                __default_1696071501520 = _DEFAULT_MARKER
                # <Interpolation value=<Substitution "${python: toc and 'pat-autotoc' or ''}" (20:22)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18ae5bd7b10> -> __attr_class
                __token = 671
                try:
                    __zt_tmp = __attrs_1696094058832
                except NameError:
                    __zt_tmp = None
                __attr_class = _static_1696164128016('python', " toc and 'pat-autotoc' or ''", econtext=econtext)(_static_1696124620432(econtext, __zt_tmp))
                __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                __attr_class = __attr_class
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
                __append(' id="parent-fieldname-text" >')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696071508240
                __default_1696071508240 = _DEFAULT_MARKER
                # <Value 'python:context.text.output_relative_to(view.context)' (23:38)> -> __cache_1696094578192
                __token = 858
                try:
                    __zt_tmp = __attrs_1696094058832
                except NameError:
                    __zt_tmp = None
                __cache_1696094578192 = _static_1696068228176('python', 'context.text.output_relative_to(view.context)', econtext=econtext)(_static_1696060942736(econtext, __zt_tmp))
                # <BinOp left=<Value 'python:context.text.output_relative_to(view.context)' (23:38)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18ae5bd5950> -> __condition
                __expression = __cache_1696094578192
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    __append('\n      Text\n          ')
                else:
                    __content = __cache_1696094578192
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('</div>')
            __append('\n        </section>\n\n      ')
            if __backup_toc_1696125791488 is __marker:
                del econtext['toc']
            else:
                econtext['toc'] = __backup_toc_1696125791488
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise

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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696101597072
            __attrs_1696101597072 = _static_1696068579088
            __previous_i18n_domain_1696101580880 = __i18n_domain
            __i18n_domain = 'plone'
            __backup_macroname_1696123438848 = get('macroname', __marker)
            # <Static value=Constant(value='master', kind=None) name=None at 18ae7887fd0> -> __value
            __value = _static_1696163337616
            econtext['macroname'] = __value

            def __fill_content_core(__stream, econtext, rcontext, __i18n_domain=__i18n_domain, __i18n_context=__i18n_context, target_language=target_language):
                getname = econtext.get_name
                get = econtext.get
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696094577232
                __attrs_1696094577232 = _static_1696163336592
                __append('\n      ')
                __token = None
                render_content_core(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
                econtext.update(rcontext)
                __append('\n    ')
            _slots = econtext['__slot_content_core'] = _deque((__fill_content_core,))
            # <Value 'context/@@main_template/macros/master' (6:23)> -> __macro
            __token = 247
            try:
                __zt_tmp = __attrs_1696101597072
            except NameError:
                __zt_tmp = None
            __macro = _static_1696101113552('path', 'context/@@main_template/macros/master', econtext=econtext)(_static_1696163343568(econtext, __zt_tmp))
            __token = 247
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_1696123438848 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_1696123438848
            __i18n_domain = __previous_i18n_domain_1696101580880
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render_content_core': render_content_core, 'render': render}