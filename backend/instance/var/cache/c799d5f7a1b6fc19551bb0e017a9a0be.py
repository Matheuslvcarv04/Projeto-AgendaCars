# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\document_actions.pt'

__tokens = {63: ('view/actions', 2, 24), 393: ('nocall: context/@@plone/normalizeString', 17, 28), 451: (" python:context.restrictedTraverse('@@iconresolver'", 18, 17), 557: ('view/actions', 21, 32), 617: ("python:'document-action-' + normalizeString(daction['id'])", 23, 17), 772: ('daction/url', 28, 20), 806: (' daction/link_target|nothin', 29, 21), 855: ('e daction/description|nothi', 30, 19), 958: ("python:icons.tag(daction.get('icon'))", 33, 45), 1031: ('daction/title', 34, 31)}
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
_static_1696164016400 = {'id': 'section-document-actions'}
_static_1696164013328 = __compile_zt_expr
_static_1696164077136 = __C2ZContextWrapper
_static_1696164083728 = {'class': 'viewlet viewlet-document-actions'}
_static_1696164082896 = {}
_static_1696164074768 = {'class': 'd-none'}
_static_1696162761168 = {'class': 'list-inline'}
_static_1696162962064 = __compile_zt_expr
_static_1696162960848 = __C2ZContextWrapper
_static_1696164526544 = __compile_zt_expr
_static_1696164516880 = __C2ZContextWrapper
_static_1696163783184 = {'id': "python:'document-action-' + normalizeString(daction['id'])"}
_static_1696162786768 = __compile_zt_expr
_static_1696162784656 = __C2ZContextWrapper
_static_1696162304656 = __compile_zt_expr
_static_1696162308816 = __C2ZContextWrapper
_static_1696162017040 = {'href': '', 'target': 'daction/link_target|nothing', 'title': 'daction/description|nothing'}
_static_1696162662288 = __compile_zt_expr
_static_1696162666448 = __C2ZContextWrapper
_static_1696094568848 = __compile_zt_expr
_static_1696164534480 = __C2ZContextWrapper
_static_1696164529296 = __compile_zt_expr
_static_1696163228688 = __C2ZContextWrapper
_static_1696164532816 = {}
_static_1696099465808 = __compile_zt_expr
_static_1696099461008 = __C2ZContextWrapper
_static_1696162842960 = {}
_static_1696164537424 = __compile_zt_expr
_static_1696164536144 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='section-document-actions', kind=None)]) name=None at 18aeb486610> -> __attrs_1696164501392
            __attrs_1696164501392 = _static_1696164016400
            # <Value 'view/actions' (2:24)> -> __condition
            __token = 63
            try:
                __zt_tmp = __attrs_1696164501392
            except NameError:
                __zt_tmp = None
            __condition = _static_1696164013328('path', 'view/actions', econtext=econtext)(_static_1696164077136(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696164497616 = __i18n_domain
                __i18n_domain = 'plone'
                # <section ... (0:0)
                # --------------------------------------------------------
                __append('<section id="section-document-actions" >\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='viewlet viewlet-document-actions', kind=None)]) name=None at 18ae39789d0> -> __attrs_1696139407696
                __attrs_1696139407696 = _static_1696164083728
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="viewlet viewlet-document-actions">\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696037486224
                __attrs_1696037486224 = _static_1696164082896
                __append('\n\n      ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='d-none', kind=None)]) name=None at 18ae3ac57d0> -> __attrs_1696163265360
                __attrs_1696163265360 = _static_1696164074768
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="d-none" >')
                __stream_1696036831888 = []
                __append_1696036831888 = __stream_1696036831888.append
                __append_1696036831888('\n              Document Actions\n      ')
                __msgid_1696036831888 = __re_whitespace(''.join(__stream_1696036831888)).strip()
                __append(translate('heading_document_actions', mapping=None, default=__msgid_1696036831888, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</div>\n\n      ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='list-inline', kind=None)]) name=None at 18ae3b6d1d0> -> __attrs_1696163520464
                __attrs_1696163520464 = _static_1696162761168
                __backup_normalizeString_1696060538304 = get('normalizeString', __marker)
                # <Value 'nocall: context/@@plone/normalizeString' (17:28)> -> __value
                __token = 393
                try:
                    __zt_tmp = __attrs_1696163520464
                except NameError:
                    __zt_tmp = None
                __value = _static_1696162962064('nocall', ' context/@@plone/normalizeString', econtext=econtext)(_static_1696162960848(econtext, __zt_tmp))
                econtext['normalizeString'] = __value
                __backup_icons_1696098866880 = get('icons', __marker)
                # <Value "python:context.restrictedTraverse('@@iconresolver')" (18:17)> -> __value
                __token = 451
                try:
                    __zt_tmp = __attrs_1696163520464
                except NameError:
                    __zt_tmp = None
                __value = _static_1696164526544('python', "context.restrictedTraverse('@@iconresolver')", econtext=econtext)(_static_1696164516880(econtext, __zt_tmp))
                econtext['icons'] = __value
                # <ul ... (0:0)
                # --------------------------------------------------------
                __append('<ul class="list-inline" >\n        ')
                # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value="python:'document-action-' + normalizeString(daction['id'])", kind=None)]) name=None at 18aeb395950> -> __attrs_1696163527824
                __attrs_1696163527824 = _static_1696163783184
                __backup_daction_1696061694336 = get('daction', __marker)
                # <Value 'view/actions' (21:32)> -> __iterator
                __token = 557
                try:
                    __zt_tmp = __attrs_1696163527824
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1696162786768('path', 'view/actions', econtext=econtext)(_static_1696162784656(econtext, __zt_tmp))
                __iterator, ____index_1696163513552 = getname('repeat')('daction', __iterator)
                econtext['daction'] = None
                for __item in __iterator:
                    econtext['daction'] = __item
                    # <li ... (0:0)
                    # --------------------------------------------------------
                    __append('<li')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163515792
                    __default_1696163515792 = _DEFAULT_MARKER
                    # <Substitution "python:'document-action-' + normalizeString(daction['id'])" (23:17)> -> __attr_id
                    __token = 617
                    try:
                        __zt_tmp = __attrs_1696163527824
                    except NameError:
                        __zt_tmp = None
                    __attr_id = _static_1696162304656('python', "'document-action-' + normalizeString(daction['id'])", econtext=econtext)(_static_1696162308816(econtext, __zt_tmp))
                    __attr_id = __quote(__attr_id, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_id is not None:
                        __append(' id="%s"' % __attr_id)
                    __append(' >\n          ')
                    # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='title', kind=None)], values=[Constant(value='', kind=None), ..., Constant(value='daction/description|nothing', kind=None)]) name=None at 18aeb397e10> -> __attrs_1696095606480
                    __attrs_1696095606480 = _static_1696162017040
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163527696
                    __default_1696163527696 = _DEFAULT_MARKER
                    # <Substitution 'daction/url' (28:20)> -> __attr_href
                    __token = 772
                    try:
                        __zt_tmp = __attrs_1696095606480
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696162662288('path', 'daction/url', econtext=econtext)(_static_1696162666448(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163527504
                    __default_1696163527504 = _DEFAULT_MARKER
                    # <Substitution 'daction/link_target|nothing' (29:21)> -> __attr_target
                    __token = 806
                    try:
                        __zt_tmp = __attrs_1696095606480
                    except NameError:
                        __zt_tmp = None
                    __attr_target = _static_1696094568848('path', 'daction/link_target|nothing', econtext=econtext)(_static_1696164534480(econtext, __zt_tmp))
                    __attr_target = __quote(__attr_target, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_target is not None:
                        __append(' target="%s"' % __attr_target)
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696095601296
                    __default_1696095601296 = _DEFAULT_MARKER
                    # <Substitution 'daction/description|nothing' (30:19)> -> __attr_title
                    __token = 855
                    try:
                        __zt_tmp = __attrs_1696095606480
                    except NameError:
                        __zt_tmp = None
                    __attr_title = _static_1696164529296('path', 'daction/description|nothing', econtext=econtext)(_static_1696163228688(econtext, __zt_tmp))
                    __attr_title = __quote(__attr_title, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    __append(' >\n            ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163315984
                    __attrs_1696163315984 = _static_1696164532816
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163317712
                    __default_1696163317712 = _DEFAULT_MARKER
                    # <Value "python:icons.tag(daction.get('icon'))" (33:45)> -> __cache_1696163320400
                    __token = 958
                    try:
                        __zt_tmp = __attrs_1696163315984
                    except NameError:
                        __zt_tmp = None
                    __cache_1696163320400 = _static_1696099465808('python', "icons.tag(daction.get('icon'))", econtext=econtext)(_static_1696099461008(econtext, __zt_tmp))
                    # <BinOp left=<Value "python:icons.tag(daction.get('icon'))" (33:45)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb366990> -> __condition
                    __expression = __cache_1696163320400
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1696163320400
                        __content = __convert(__content)
                        if __content is not None:
                            __append(__content)
                    __append('\n            ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163316944
                    __attrs_1696163316944 = _static_1696162842960
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163321936
                    __default_1696163321936 = _DEFAULT_MARKER
                    # <Value 'daction/title' (34:31)> -> __cache_1696163318032
                    __token = 1031
                    try:
                        __zt_tmp = __attrs_1696163316944
                    except NameError:
                        __zt_tmp = None
                    __cache_1696163318032 = _static_1696164537424('path', 'daction/title', econtext=econtext)(_static_1696164536144(econtext, __zt_tmp))
                    # <BinOp left=<Value 'daction/title' (34:31)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb365190> -> __condition
                    __expression = __cache_1696163318032
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span >\n                            Menu Title\n            </span>')
                    else:
                        __content = __cache_1696163318032
                        __content = translate(__content, default=None, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('\n          </a>\n        </li>')
                    ____index_1696163513552 -= 1
                    if ____index_1696163513552 > 0:
                        __append('\n        ')
                if __backup_daction_1696061694336 is __marker:
                    del econtext['daction']
                else:
                    econtext['daction'] = __backup_daction_1696061694336
                __append('\n      </ul>')
                if __backup_icons_1696098866880 is __marker:
                    del econtext['icons']
                else:
                    econtext['icons'] = __backup_icons_1696098866880
                if __backup_normalizeString_1696060538304 is __marker:
                    del econtext['normalizeString']
                else:
                    econtext['normalizeString'] = __backup_normalizeString_1696060538304
                __append('\n    \n\n  </div>\n</section>')
                __i18n_domain = __previous_i18n_domain_1696164497616
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}