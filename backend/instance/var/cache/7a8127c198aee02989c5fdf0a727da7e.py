# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\dexterity\\browser\\item.pt'

__tokens = {476: ('view/widgets/values|nothing', 15, 34), 542: ("python:widget.__name__ not in ('IBasic.title', 'IBasic.description', 'title', 'description',)", 16, 36), 685: ('widget/@@ploneform-render-widget', 17, 47), 803: ('view/groups|nothing', 21, 36), 882: ("python:''.join((group.prefix, 'groups.', group.__name__)).replace('.', '-')", 23, 23), 1020: ('group/label', 26, 31), 1083: ('group/widgets/values|nothing', 27, 40), 1161: ('widget/@@ploneform-render-widget', 28, 47), 247: ('context/@@main_template/macros/master', 6, 23), 247: ('context/@@main_template/macros/master', 6, 23)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from collections import deque as _deque
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1433427270480 = {}
_static_1433454021520 = {}
_static_1433427270544 = __compile_zt_expr
_static_1433454535184 = __C2ZContextWrapper
_static_1433454538704 = {}
_static_1433453141904 = __compile_zt_expr
_static_1433454576656 = __C2ZContextWrapper
_static_1433454577360 = {}
_static_1433454586960 = __compile_zt_expr
_static_1433454590352 = __C2ZContextWrapper
_static_1433453087184 = {'id': "python:''.join((group.prefix, 'groups.', group.__name__)).replace('.', '-')"}
_static_1433454887376 = __compile_zt_expr
_static_1433454888336 = __C2ZContextWrapper
_static_1433429295248 = __compile_zt_expr
_static_1433429295888 = __C2ZContextWrapper
_static_1433454893648 = {}
_static_1433455336400 = __compile_zt_expr
_static_1433455342224 = __C2ZContextWrapper
_static_1433455157584 = {}
_static_1433454842640 = __compile_zt_expr
_static_1433454844304 = __C2ZContextWrapper
_static_1433454848464 = {}
_static_1433455493584 = __compile_zt_expr
_static_1433455494480 = __C2ZContextWrapper
_static_1433392006864 = {}
_static_1433455162320 = 'master'
_static_1433391933392 = {}
_static_1433457368080 = __compile_zt_expr
_static_1433457369936 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433455042512
            __attrs_1433455042512 = _static_1433427270480
            __append('\n\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433455042768
            __attrs_1433455042768 = _static_1433454021520
            __backup_widget_1433486048128 = get('widget', __marker)
            # <Value 'view/widgets/values|nothing' (15:34)> -> __iterator
            __token = 476
            try:
                __zt_tmp = __attrs_1433455042768
            except NameError:
                __zt_tmp = None
            __iterator = _static_1433427270544('path', 'view/widgets/values|nothing', econtext=econtext)(_static_1433454535184(econtext, __zt_tmp))
            __iterator, ____index_1433455036944 = getname('repeat')('widget', __iterator)
            econtext['widget'] = None
            for __item in __iterator:
                econtext['widget'] = __item
                __append('\n          ')
                # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433392862096
                __attrs_1433392862096 = _static_1433454538704
                # <Value "python:widget.__name__ not in ('IBasic.title', 'IBasic.description', 'title', 'description',)" (16:36)> -> __condition
                __token = 542
                try:
                    __zt_tmp = __attrs_1433392862096
                except NameError:
                    __zt_tmp = None
                __condition = _static_1433453141904('python', "widget.__name__ not in ('IBasic.title', 'IBasic.description', 'title', 'description',)", econtext=econtext)(_static_1433454576656(econtext, __zt_tmp))
                if __condition:
                    __append('\n            ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433453319824
                    __attrs_1433453319824 = _static_1433454577360
                    # <Symbol value=<DEFAULT> at 14dbb413510> -> __default_1433392860048
                    __default_1433392860048 = _DEFAULT_MARKER
                    # <Value 'widget/@@ploneform-render-widget' (17:47)> -> __cache_1433453325200
                    __token = 685
                    try:
                        __zt_tmp = __attrs_1433453319824
                    except NameError:
                        __zt_tmp = None
                    __cache_1433453325200 = _static_1433454586960('path', 'widget/@@ploneform-render-widget', econtext=econtext)(_static_1433454590352(econtext, __zt_tmp))
                    # <BinOp left=<Value 'widget/@@ploneform-render-widget' (17:47)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 14dbb413510> at 14dc079d410> -> __condition
                    __expression = __cache_1433453325200
                    # <Symbol value=<DEFAULT> at 14dbb413510> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1433453325200
                        __content = __convert(__content)
                        if __content is not None:
                            __append(__content)
                    __append('\n          ')
                __append('\n        ')
                ____index_1433455036944 -= 1
                if ____index_1433455036944 > 0:
                    __append('')
            if __backup_widget_1433486048128 is __marker:
                del econtext['widget']
            else:
                econtext['widget'] = __backup_widget_1433486048128
            __append('\n\n        ')
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value="python:''.join((group.prefix, 'groups.', group.__name__)).replace('.', '-')", kind=None)]) name=None at 14dbcd01810> -> __attrs_1433454469136
            __attrs_1433454469136 = _static_1433453087184
            __backup_group_1433486047936 = get('group', __marker)
            # <Value 'view/groups|nothing' (21:36)> -> __iterator
            __token = 803
            try:
                __zt_tmp = __attrs_1433454469136
            except NameError:
                __zt_tmp = None
            __iterator = _static_1433454887376('path', 'view/groups|nothing', econtext=econtext)(_static_1433454888336(econtext, __zt_tmp))
            __iterator, ____index_1433454464592 = getname('repeat')('group', __iterator)
            econtext['group'] = None
            for __item in __iterator:
                econtext['group'] = __item
                # <fieldset ... (0:0)
                # --------------------------------------------------------
                __append('<fieldset')
                # <Symbol value=<DEFAULT> at 14dbb413510> -> __default_1433392860560
                __default_1433392860560 = _DEFAULT_MARKER
                # <Substitution "python:''.join((group.prefix, 'groups.', group.__name__)).replace('.', '-')" (23:23)> -> __attr_id
                __token = 882
                try:
                    __zt_tmp = __attrs_1433454469136
                except NameError:
                    __zt_tmp = None
                __attr_id = _static_1433429295248('python', "''.join((group.prefix, 'groups.', group.__name__)).replace('.', '-')", econtext=econtext)(_static_1433429295888(econtext, __zt_tmp))
                __attr_id = __quote(__attr_id, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_id is not None:
                    __append(' id="%s"' % __attr_id)
                __append(' >\n          ')
                # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433454468816
                __attrs_1433454468816 = _static_1433454893648
                # <legend ... (0:0)
                # --------------------------------------------------------
                __append('<legend>')
                # <Symbol value=<DEFAULT> at 14dbb413510> -> __default_1433454461200
                __default_1433454461200 = _DEFAULT_MARKER
                # <Value 'group/label' (26:31)> -> __cache_1433454464976
                __token = 1020
                try:
                    __zt_tmp = __attrs_1433454468816
                except NameError:
                    __zt_tmp = None
                __cache_1433454464976 = _static_1433455336400('path', 'group/label', econtext=econtext)(_static_1433455342224(econtext, __zt_tmp))
                # <BinOp left=<Value 'group/label' (26:31)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 14dbb413510> at 14dc08b51d0> -> __condition
                __expression = __cache_1433454464976
                # <Symbol value=<DEFAULT> at 14dbb413510> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_1433454464976
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</legend>\n          ')
                # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433454463760
                __attrs_1433454463760 = _static_1433455157584
                __backup_widget_1433486184448 = get('widget', __marker)
                # <Value 'group/widgets/values|nothing' (27:40)> -> __iterator
                __token = 1083
                try:
                    __zt_tmp = __attrs_1433454463760
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1433454842640('path', 'group/widgets/values|nothing', econtext=econtext)(_static_1433454844304(econtext, __zt_tmp))
                __iterator, ____index_1433454466320 = getname('repeat')('widget', __iterator)
                econtext['widget'] = None
                for __item in __iterator:
                    econtext['widget'] = __item
                    __append('\n            ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433423423568
                    __attrs_1433423423568 = _static_1433454848464
                    # <Symbol value=<DEFAULT> at 14dbb413510> -> __default_1433423994960
                    __default_1433423994960 = _DEFAULT_MARKER
                    # <Value 'widget/@@ploneform-render-widget' (28:47)> -> __cache_1433428506320
                    __token = 1161
                    try:
                        __zt_tmp = __attrs_1433423423568
                    except NameError:
                        __zt_tmp = None
                    __cache_1433428506320 = _static_1433455493584('path', 'widget/@@ploneform-render-widget', econtext=econtext)(_static_1433455494480(econtext, __zt_tmp))
                    # <BinOp left=<Value 'widget/@@ploneform-render-widget' (28:47)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 14dbb413510> at 14dbcdc8990> -> __condition
                    __expression = __cache_1433428506320
                    # <Symbol value=<DEFAULT> at 14dbb413510> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1433428506320
                        __content = __convert(__content)
                        if __content is not None:
                            __append(__content)
                    __append('\n          ')
                    ____index_1433454466320 -= 1
                    if ____index_1433454466320 > 0:
                        __append('')
                if __backup_widget_1433486184448 is __marker:
                    del econtext['widget']
                else:
                    econtext['widget'] = __backup_widget_1433486184448
                __append('\n        </fieldset>')
                ____index_1433454464592 -= 1
                if ____index_1433454464592 > 0:
                    __append('\n        ')
            if __backup_group_1433486047936 is __marker:
                del econtext['group']
            else:
                econtext['group'] = __backup_group_1433486047936
            __append('\n\n      ')
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
            # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433422923024
            __attrs_1433422923024 = _static_1433392006864
            __previous_i18n_domain_1433418303312 = __i18n_domain
            __i18n_domain = 'plone'
            __backup_macroname_1433429412928 = get('macroname', __marker)
            # <Static value=Constant(value='master', kind=None) name=None at 14dbe63a3d0> -> __value
            __value = _static_1433455162320
            econtext['macroname'] = __value

            def __fill_content_core(__stream, econtext, rcontext, __i18n_domain=__i18n_domain, __i18n_context=__i18n_context, target_language=target_language):
                getname = econtext.get_name
                get = econtext.get
                # <Static value=Dict(keys=[], values=[]) name=None at 14dbb768a50> -> __attrs_1433422922960
                __attrs_1433422922960 = _static_1433391933392
                __append('\n      ')
                __token = None
                render_content_core(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
                econtext.update(rcontext)
                __append('\n    ')
            _slots = econtext['__slot_content_core'] = _deque((__fill_content_core,))
            # <Value 'context/@@main_template/macros/master' (6:23)> -> __macro
            __token = 247
            try:
                __zt_tmp = __attrs_1433422923024
            except NameError:
                __zt_tmp = None
            __macro = _static_1433457368080('path', 'context/@@main_template/macros/master', econtext=econtext)(_static_1433457369936(econtext, __zt_tmp))
            __token = 247
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_1433429412928 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_1433429412928
            __i18n_domain = __previous_i18n_domain_1433418303312
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render_content_core': render_content_core, 'render': render}