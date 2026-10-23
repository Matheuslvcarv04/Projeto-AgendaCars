# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\document_contributors.pt'

__tokens = {109: ('context/Contributors', 4, 24), 161: (' context/@@plone_portal_state/navigation_root_ur', 5, 30), 247: ('contributors', 7, 24), 445: ('contributors', 16, 27), 508: ('python: view.get_url_path(user_id)', 18, 25), 568: (' python:view.get_fullname(user_id', 19, 24), 766: ('url_path', 23, 24), 708: ('navigation_root_url', 22, 17), 731: ('url_path', 22, 40), 785: ('fullname', 24, 9), 899: ('not:url_path', 26, 27), 922: ('fullname', 27, 9)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696162735952 = {'class': 'text-muted', 'id': 'section-contributors'}
_static_1696162839888 = __compile_zt_expr
_static_1696162835024 = __C2ZContextWrapper
_static_1696162894160 = __compile_zt_expr
_static_1696162905424 = __C2ZContextWrapper
_static_1696162896400 = __compile_zt_expr
_static_1696163099728 = __C2ZContextWrapper
_static_1696163096400 = {'class': 'section-heading'}
_static_1696163853392 = {}
_static_1696163840848 = __compile_zt_expr
_static_1696125959312 = __C2ZContextWrapper
_static_1696125947536 = {}
_static_1696162128400 = __compile_zt_expr
_static_1696162125840 = __C2ZContextWrapper
_static_1696163013520 = __compile_zt_expr
_static_1696163019856 = __C2ZContextWrapper
_static_1696163015248 = {'class': 'badge rounded-pill bg-light text-dark fw-normal fs-6', 'href': '${navigation_root_url}/${url_path}'}
_static_1696163018960 = __compile_zt_expr
_static_1696164076752 = __C2ZContextWrapper
_static_1696095602512 = __compile_zt_expr
_static_1696164010448 = __C2ZContextWrapper
_static_1696164019792 = __compile_zt_expr
_static_1696164017424 = __C2ZContextWrapper
_static_1696032544720 = __compile_zt_expr
_static_1696163457488 = __C2ZContextWrapper
_static_1696163458128 = {'class': 'badge rounded-pill bg-light text-dark fw-normal fs-6'}
_static_1696163446864 = __compile_zt_expr
_static_1696163547600 = __C2ZContextWrapper
_static_1696163516880 = __compile_zt_expr
_static_1696163525776 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='text-muted', kind=None), Constant(value='section-contributors', kind=None)]) name=None at 18aeb417910> -> __attrs_1696164050576
            __attrs_1696164050576 = _static_1696162735952
            __backup_contributors_1696101305728 = get('contributors', __marker)
            # <Value 'context/Contributors' (4:24)> -> __value
            __token = 109
            try:
                __zt_tmp = __attrs_1696164050576
            except NameError:
                __zt_tmp = None
            __value = _static_1696162839888('path', 'context/Contributors', econtext=econtext)(_static_1696162835024(econtext, __zt_tmp))
            econtext['contributors'] = __value
            __backup_navigation_root_url_1696093154048 = get('navigation_root_url', __marker)
            # <Value 'context/@@plone_portal_state/navigation_root_url' (5:30)> -> __value
            __token = 161
            try:
                __zt_tmp = __attrs_1696164050576
            except NameError:
                __zt_tmp = None
            __value = _static_1696162894160('path', 'context/@@plone_portal_state/navigation_root_url', econtext=econtext)(_static_1696162905424(econtext, __zt_tmp))
            econtext['navigation_root_url'] = __value
            # <Value 'contributors' (7:24)> -> __condition
            __token = 247
            try:
                __zt_tmp = __attrs_1696164050576
            except NameError:
                __zt_tmp = None
            __condition = _static_1696162896400('path', 'contributors', econtext=econtext)(_static_1696163099728(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696164044048 = __i18n_domain
                __i18n_domain = 'plone'
                # <section ... (0:0)
                # --------------------------------------------------------
                __append('<section class="text-muted" id="section-contributors" >\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='section-heading', kind=None)]) name=None at 18aeb417510> -> __attrs_1696163196496
                __attrs_1696163196496 = _static_1696163096400
                # <header ... (0:0)
                # --------------------------------------------------------
                __append('<header class="section-heading" >')
                __stream_1696164038160 = []
                __append_1696164038160 = __stream_1696164038160.append
                __append_1696164038160('\n      Contributors\n  ')
                __msgid_1696164038160 = __re_whitespace(''.join(__stream_1696164038160)).strip()
                __append(translate('section_contributors_heading', mapping=None, default=__msgid_1696164038160, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</header>\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163193872
                __attrs_1696163193872 = _static_1696163853392
                __backup_user_id_1696124264704 = get('user_id', __marker)
                # <Value 'contributors' (16:27)> -> __iterator
                __token = 445
                try:
                    __zt_tmp = __attrs_1696163193872
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1696163840848('path', 'contributors', econtext=econtext)(_static_1696125959312(econtext, __zt_tmp))
                __iterator, ____index_1696163194192 = getname('repeat')('user_id', __iterator)
                econtext['user_id'] = None
                for __item in __iterator:
                    econtext['user_id'] = __item
                    __append('\n    ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163185872
                    __attrs_1696163185872 = _static_1696125947536
                    __backup_url_path_1696136221440 = get('url_path', __marker)
                    # <Value 'python: view.get_url_path(user_id)' (18:25)> -> __value
                    __token = 508
                    try:
                        __zt_tmp = __attrs_1696163185872
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162128400('python', ' view.get_url_path(user_id)', econtext=econtext)(_static_1696162125840(econtext, __zt_tmp))
                    econtext['url_path'] = __value
                    __backup_fullname_1696094891392 = get('fullname', __marker)
                    # <Value 'python:view.get_fullname(user_id)' (19:24)> -> __value
                    __token = 568
                    try:
                        __zt_tmp = __attrs_1696163185872
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696163013520('python', 'view.get_fullname(user_id)', econtext=econtext)(_static_1696163019856(econtext, __zt_tmp))
                    econtext['fullname'] = __value
                    __append('\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='href', kind=None)], values=[Constant(value='badge rounded-pill bg-light text-dark fw-normal fs-6', kind=None), Constant(value='${navigation_root_url}/${url_path}', kind=None)]) name=None at 18aeb347010> -> __attrs_1696060786576
                    __attrs_1696060786576 = _static_1696163015248
                    # <Value 'url_path' (23:24)> -> __condition
                    __token = 766
                    try:
                        __zt_tmp = __attrs_1696060786576
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696163018960('path', 'url_path', econtext=econtext)(_static_1696164076752(econtext, __zt_tmp))
                    if __condition:
                        # <a ... (0:0)
                        # --------------------------------------------------------
                        __append('<a class="badge rounded-pill bg-light text-dark fw-normal fs-6"')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163188944
                        __default_1696163188944 = _DEFAULT_MARKER
                        # <Interpolation value=<Substitution '${navigation_root_url}/${url_path}' (22:15)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb346010> -> __attr_href
                        __token = 708
                        try:
                            __zt_tmp = __attrs_1696060786576
                        except NameError:
                            __zt_tmp = None
                        __attr_href = _static_1696095602512('path', 'navigation_root_url', econtext=econtext)(_static_1696164010448(econtext, __zt_tmp))
                        __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                        __token = 731
                        try:
                            __zt_tmp = __attrs_1696060786576
                        except NameError:
                            __zt_tmp = None
                        __attr_href_729 = _static_1696164019792('path', 'url_path', econtext=econtext)(_static_1696164017424(econtext, __zt_tmp))
                        __attr_href_729 = __quote(__attr_href_729, '"', '&quot;', None, _DEFAULT_MARKER)
                        __attr_href = '%s%s%s' % (__attr_href if __attr_href is not None else '', '/', __attr_href_729 if __attr_href_729 is not None else '')
                        if __attr_href is None:
                            pass
                        elif __attr_href is _DEFAULT_MARKER:
                            __attr_href = None
                        else:
                            __tt = type(__attr_href)
                            if __tt is bytes:
                                __attr_href = decode(__attr_href)
                            elif __tt is not str:
                                if __tt is int or __tt is float:
                                    __attr_href = str(__attr_href)
                                else:
                                    __markup = getattr(__attr_href, '__html__', None)
                                    if __markup is None:
                                        __converted = translate(__attr_href, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                        __attr_href = str(__attr_href) if __attr_href is __converted else __converted
                                    else:
                                        __attr_href = __markup()
                        if __attr_href is not None:
                            __append(' href="%s"' % __attr_href)
                        __append(' >')
                        # <Interpolation value=<Substitution '${fullname}' (24:7)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb47ba50> -> __content_1695946256768
                        __token = 785
                        try:
                            __zt_tmp = __attrs_1696060786576
                        except NameError:
                            __zt_tmp = None
                        __content_1695946256768 = _static_1696032544720('path', 'fullname', econtext=econtext)(_static_1696163457488(econtext, __zt_tmp))
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
                        __append('</a>')
                    __append('\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='badge rounded-pill bg-light text-dark fw-normal fs-6', kind=None)]) name=None at 18aeb479290> -> __attrs_1696164457808
                    __attrs_1696164457808 = _static_1696163458128
                    # <Value 'not:url_path' (26:27)> -> __condition
                    __token = 899
                    try:
                        __zt_tmp = __attrs_1696164457808
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696163446864('not', 'url_path', econtext=econtext)(_static_1696163547600(econtext, __zt_tmp))
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="badge rounded-pill bg-light text-dark fw-normal fs-6" >')
                        # <Interpolation value=<Substitution '${fullname}' (27:7)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb479310> -> __content_1695946256768
                        __token = 922
                        try:
                            __zt_tmp = __attrs_1696164457808
                        except NameError:
                            __zt_tmp = None
                        __content_1695946256768 = _static_1696163516880('path', 'fullname', econtext=econtext)(_static_1696163525776(econtext, __zt_tmp))
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
                        __append('</span>')
                    __append('\n    ')
                    if __backup_fullname_1696094891392 is __marker:
                        del econtext['fullname']
                    else:
                        econtext['fullname'] = __backup_fullname_1696094891392
                    if __backup_url_path_1696136221440 is __marker:
                        del econtext['url_path']
                    else:
                        econtext['url_path'] = __backup_url_path_1696136221440
                    __append('\n  ')
                    ____index_1696163194192 -= 1
                    if ____index_1696163194192 > 0:
                        __append('')
                if __backup_user_id_1696124264704 is __marker:
                    del econtext['user_id']
                else:
                    econtext['user_id'] = __backup_user_id_1696124264704
                __append('\n\n</section>')
                __i18n_domain = __previous_i18n_domain_1696164044048
            if __backup_navigation_root_url_1696093154048 is __marker:
                del econtext['navigation_root_url']
            else:
                econtext['navigation_root_url'] = __backup_navigation_root_url_1696093154048
            if __backup_contributors_1696101305728 is __marker:
                del econtext['contributors']
            else:
                econtext['contributors'] = __backup_contributors_1696101305728
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}