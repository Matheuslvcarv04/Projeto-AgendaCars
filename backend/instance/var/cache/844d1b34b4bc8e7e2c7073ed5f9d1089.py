# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\document_byline.pt'

__tokens = {53: ('view/show', 2, 24), 154: ('here/creators', 6, 30), 206: (' context/@@plone_portal_state/navigation_root_ur', 7, 37), 306: ('python:creator_ids and view.show_about()', 9, 31), 466: ('creator_ids', 13, 31), 536: ('python: view.get_url_path(user_id)', 15, 29), 600: (' python:view.get_fullname(user_id', 16, 28), 814: ('url_path', 20, 28), 752: ('navigation_root_url', 19, 21), 775: ('url_path', 19, 44), 837: ('fullname', 21, 13), 959: ('not:url_path', 23, 31), 986: ('fullname', 24, 13), 1130: ('view/pub_date', 32, 25), 1168: (' context/ModificationDat', 33, 23), 1231: ('e python:view.show_modification_date', 34, 36), 1299: ('me nocall:here/@@plone/toLocalizedT', 35, 28), 1416: ('published', 38, 25), 1518: ('python:toLocalizedTime(published)', 41, 25), 1596: ('show_modification_date', 42, 26), 1705: ('show_modification_date', 46, 25), 1842: ('python:toLocalizedTime(modified)', 51, 25), 1964: ('view/isExpired', 57, 30)}
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
_static_1696164600528 = {'id': 'section-byline'}
_static_1696164593808 = __compile_zt_expr
_static_1696164532496 = __C2ZContextWrapper
_static_1696164541840 = {}
_static_1696141396944 = __compile_zt_expr
_static_1696141402256 = __C2ZContextWrapper
_static_1696163846480 = __compile_zt_expr
_static_1696163845072 = __C2ZContextWrapper
_static_1696163287504 = __compile_zt_expr
_static_1696163293328 = __C2ZContextWrapper
_static_1696163294864 = {'class': 'label-by-author'}
_static_1696162761232 = {}
_static_1696162765200 = {}
_static_1696162844816 = __compile_zt_expr
_static_1696162847952 = __C2ZContextWrapper
_static_1696162855056 = {}
_static_1696162305552 = __compile_zt_expr
_static_1696162313552 = __C2ZContextWrapper
_static_1696162838032 = __compile_zt_expr
_static_1696162830480 = __C2ZContextWrapper
_static_1696162837456 = {'class': 'badge rounded-pill bg-light text-dark fw-normal fs-6', 'href': '${navigation_root_url}/${url_path}'}
_static_1696162831632 = __compile_zt_expr
_static_1696162828880 = __C2ZContextWrapper
_static_1696162021136 = __compile_zt_expr
_static_1696162008848 = __C2ZContextWrapper
_static_1696164447184 = __compile_zt_expr
_static_1696164453072 = __C2ZContextWrapper
_static_1696094046352 = __compile_zt_expr
_static_1696164455632 = __C2ZContextWrapper
_static_1696162922896 = {'class': 'badge rounded-pill bg-light text-dark fw-normal fs-6'}
_static_1696164593936 = __compile_zt_expr
_static_1696163525520 = __C2ZContextWrapper
_static_1696163517520 = __compile_zt_expr
_static_1696162994704 = __C2ZContextWrapper
_static_1696164499856 = {}
_static_1696164106064 = __compile_zt_expr
_static_1696164102672 = __C2ZContextWrapper
_static_1696164105808 = __compile_zt_expr
_static_1696164103184 = __C2ZContextWrapper
_static_1696163456080 = __compile_zt_expr
_static_1696163452368 = __C2ZContextWrapper
_static_1696162668432 = __compile_zt_expr
_static_1696162665040 = __C2ZContextWrapper
_static_1696162671824 = {'class': 'documentPublished'}
_static_1696162672208 = __compile_zt_expr
_static_1696162675088 = __C2ZContextWrapper
_static_1696163218192 = {}
_static_1696162877904 = {}
_static_1696163456528 = __compile_zt_expr
_static_1696163454992 = __C2ZContextWrapper
_static_1696162900368 = {}
_static_1696162899024 = __compile_zt_expr
_static_1696162894800 = __C2ZContextWrapper
_static_1696162897872 = {'class': 'documentModified'}
_static_1696164013584 = __compile_zt_expr
_static_1696164007056 = __C2ZContextWrapper
_static_1696164004176 = {}
_static_1696164004752 = {}
_static_1696163859344 = __compile_zt_expr
_static_1696163583184 = __C2ZContextWrapper
_static_1696164467024 = {}
_static_1696164466832 = __compile_zt_expr
_static_1696164463568 = __C2ZContextWrapper
_static_1696164473936 = {'class': 'state-expired'}
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='section-byline', kind=None)]) name=None at 18aeb49ea90> -> __attrs_1696164609872
            __attrs_1696164609872 = _static_1696164600528
            # <Value 'view/show' (2:24)> -> __condition
            __token = 53
            try:
                __zt_tmp = __attrs_1696164609872
            except NameError:
                __zt_tmp = None
            __condition = _static_1696164593808('path', 'view/show', econtext=econtext)(_static_1696164532496(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696164594704 = __i18n_domain
                __i18n_domain = 'plone'
                # <section ... (0:0)
                # --------------------------------------------------------
                __append('<section id="section-byline" >\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163063376
                __attrs_1696163063376 = _static_1696164541840
                __backup_creator_ids_1696093152576 = get('creator_ids', __marker)
                # <Value 'here/creators' (6:30)> -> __value
                __token = 154
                try:
                    __zt_tmp = __attrs_1696163063376
                except NameError:
                    __zt_tmp = None
                __value = _static_1696141396944('path', 'here/creators', econtext=econtext)(_static_1696141402256(econtext, __zt_tmp))
                econtext['creator_ids'] = __value
                __backup_navigation_root_url_1696094743552 = get('navigation_root_url', __marker)
                # <Value 'context/@@plone_portal_state/navigation_root_url' (7:37)> -> __value
                __token = 206
                try:
                    __zt_tmp = __attrs_1696163063376
                except NameError:
                    __zt_tmp = None
                __value = _static_1696163846480('path', 'context/@@plone_portal_state/navigation_root_url', econtext=econtext)(_static_1696163845072(econtext, __zt_tmp))
                econtext['navigation_root_url'] = __value
                # <Value 'python:creator_ids and view.show_about()' (9:31)> -> __condition
                __token = 306
                try:
                    __zt_tmp = __attrs_1696163063376
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696163287504('python', 'creator_ids and view.show_about()', econtext=econtext)(_static_1696163293328(econtext, __zt_tmp))
                if __condition:
                    __append('\n    ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='label-by-author', kind=None)]) name=None at 18aeb3243d0> -> __attrs_1696163063888
                    __attrs_1696163063888 = _static_1696163294864
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span class="label-by-author">\n      ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163068944
                    __attrs_1696163068944 = _static_1696162761232
                    __stream_1696163056592 = []
                    __append_1696163056592 = __stream_1696163056592.append
                    __append_1696163056592('by')
                    __msgid_1696163056592 = __re_whitespace(''.join(__stream_1696163056592)).strip()
                    if __msgid_1696163056592:
                        __append(translate(__msgid_1696163056592, mapping=None, default=__msgid_1696163056592, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('\n      ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696099464528
                    __attrs_1696099464528 = _static_1696162765200
                    __backup_user_id_1696099827648 = get('user_id', __marker)
                    # <Value 'creator_ids' (13:31)> -> __iterator
                    __token = 466
                    try:
                        __zt_tmp = __attrs_1696099464528
                    except NameError:
                        __zt_tmp = None
                    __iterator = _static_1696162844816('path', 'creator_ids', econtext=econtext)(_static_1696162847952(econtext, __zt_tmp))
                    __iterator, ____index_1696099460880 = getname('repeat')('user_id', __iterator)
                    econtext['user_id'] = None
                    for __item in __iterator:
                        econtext['user_id'] = __item
                        __append('\n        ')
                        # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164522512
                        __attrs_1696164522512 = _static_1696162855056
                        __backup_url_path_1696094748032 = get('url_path', __marker)
                        # <Value 'python: view.get_url_path(user_id)' (15:29)> -> __value
                        __token = 536
                        try:
                            __zt_tmp = __attrs_1696164522512
                        except NameError:
                            __zt_tmp = None
                        __value = _static_1696162305552('python', ' view.get_url_path(user_id)', econtext=econtext)(_static_1696162313552(econtext, __zt_tmp))
                        econtext['url_path'] = __value
                        __backup_fullname_1696101517568 = get('fullname', __marker)
                        # <Value 'python:view.get_fullname(user_id)' (16:28)> -> __value
                        __token = 600
                        try:
                            __zt_tmp = __attrs_1696164522512
                        except NameError:
                            __zt_tmp = None
                        __value = _static_1696162838032('python', 'view.get_fullname(user_id)', econtext=econtext)(_static_1696162830480(econtext, __zt_tmp))
                        econtext['fullname'] = __value
                        __append('\n          ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='href', kind=None)], values=[Constant(value='badge rounded-pill bg-light text-dark fw-normal fs-6', kind=None), Constant(value='${navigation_root_url}/${url_path}', kind=None)]) name=None at 18aeb488d50> -> __attrs_1696164523536
                        __attrs_1696164523536 = _static_1696162837456
                        # <Value 'url_path' (20:28)> -> __condition
                        __token = 814
                        try:
                            __zt_tmp = __attrs_1696164523536
                        except NameError:
                            __zt_tmp = None
                        __condition = _static_1696162831632('path', 'url_path', econtext=econtext)(_static_1696162828880(econtext, __zt_tmp))
                        if __condition:
                            # <a ... (0:0)
                            # --------------------------------------------------------
                            __append('<a class="badge rounded-pill bg-light text-dark fw-normal fs-6"')
                            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164525968
                            __default_1696164525968 = _DEFAULT_MARKER
                            # <Interpolation value=<Substitution '${navigation_root_url}/${url_path}' (19:19)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb48af90> -> __attr_href
                            __token = 752
                            try:
                                __zt_tmp = __attrs_1696164523536
                            except NameError:
                                __zt_tmp = None
                            __attr_href = _static_1696162021136('path', 'navigation_root_url', econtext=econtext)(_static_1696162008848(econtext, __zt_tmp))
                            __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                            __token = 775
                            try:
                                __zt_tmp = __attrs_1696164523536
                            except NameError:
                                __zt_tmp = None
                            __attr_href_773 = _static_1696164447184('path', 'url_path', econtext=econtext)(_static_1696164453072(econtext, __zt_tmp))
                            __attr_href_773 = __quote(__attr_href_773, '"', '&quot;', None, _DEFAULT_MARKER)
                            __attr_href = '%s%s%s' % (__attr_href if __attr_href is not None else '', '/', __attr_href_773 if __attr_href_773 is not None else '')
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
                            # <Interpolation value=<Substitution '${fullname}' (21:11)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb489710> -> __content_1695946256768
                            __token = 837
                            try:
                                __zt_tmp = __attrs_1696164523536
                            except NameError:
                                __zt_tmp = None
                            __content_1695946256768 = _static_1696094046352('path', 'fullname', econtext=econtext)(_static_1696164455632(econtext, __zt_tmp))
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
                        __append('\n          ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='badge rounded-pill bg-light text-dark fw-normal fs-6', kind=None)]) name=None at 18aeb48aed0> -> __attrs_1696164593360
                        __attrs_1696164593360 = _static_1696162922896
                        # <Value 'not:url_path' (23:31)> -> __condition
                        __token = 959
                        try:
                            __zt_tmp = __attrs_1696164593360
                        except NameError:
                            __zt_tmp = None
                        __condition = _static_1696164593936('not', 'url_path', econtext=econtext)(_static_1696163525520(econtext, __zt_tmp))
                        if __condition:
                            # <span ... (0:0)
                            # --------------------------------------------------------
                            __append('<span class="badge rounded-pill bg-light text-dark fw-normal fs-6" >')
                            # <Interpolation value=<Substitution '${fullname}' (24:11)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb498310> -> __content_1695946256768
                            __token = 986
                            try:
                                __zt_tmp = __attrs_1696164593360
                            except NameError:
                                __zt_tmp = None
                            __content_1695946256768 = _static_1696163517520('path', 'fullname', econtext=econtext)(_static_1696162994704(econtext, __zt_tmp))
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
                        __append('\n        ')
                        if __backup_fullname_1696101517568 is __marker:
                            del econtext['fullname']
                        else:
                            econtext['fullname'] = __backup_fullname_1696101517568
                        if __backup_url_path_1696094748032 is __marker:
                            del econtext['url_path']
                        else:
                            econtext['url_path'] = __backup_url_path_1696094748032
                        __append('\n      ')
                        ____index_1696099460880 -= 1
                        if ____index_1696099460880 > 0:
                            __append('')
                    if __backup_user_id_1696099827648 is __marker:
                        del econtext['user_id']
                    else:
                        econtext['user_id'] = __backup_user_id_1696099827648
                    __append('\n    &mdash;\n    </span>\n  ')
                if __backup_navigation_root_url_1696094743552 is __marker:
                    del econtext['navigation_root_url']
                else:
                    econtext['navigation_root_url'] = __backup_navigation_root_url_1696094743552
                if __backup_creator_ids_1696093152576 is __marker:
                    del econtext['creator_ids']
                else:
                    econtext['creator_ids'] = __backup_creator_ids_1696093152576
                __append('\n\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164584592
                __attrs_1696164584592 = _static_1696164499856
                __backup_published_1696100540288 = get('published', __marker)
                # <Value 'view/pub_date' (32:25)> -> __value
                __token = 1130
                try:
                    __zt_tmp = __attrs_1696164584592
                except NameError:
                    __zt_tmp = None
                __value = _static_1696164106064('path', 'view/pub_date', econtext=econtext)(_static_1696164102672(econtext, __zt_tmp))
                econtext['published'] = __value
                __backup_modified_1696164227968 = get('modified', __marker)
                # <Value 'context/ModificationDate' (33:23)> -> __value
                __token = 1168
                try:
                    __zt_tmp = __attrs_1696164584592
                except NameError:
                    __zt_tmp = None
                __value = _static_1696164105808('path', 'context/ModificationDate', econtext=econtext)(_static_1696164103184(econtext, __zt_tmp))
                econtext['modified'] = __value
                __backup_show_modification_date_1696101762688 = get('show_modification_date', __marker)
                # <Value 'python:view.show_modification_date()' (34:36)> -> __value
                __token = 1231
                try:
                    __zt_tmp = __attrs_1696164584592
                except NameError:
                    __zt_tmp = None
                __value = _static_1696163456080('python', 'view.show_modification_date()', econtext=econtext)(_static_1696163452368(econtext, __zt_tmp))
                econtext['show_modification_date'] = __value
                __backup_toLocalizedTime_1696101272128 = get('toLocalizedTime', __marker)
                # <Value 'nocall:here/@@plone/toLocalizedTime' (35:28)> -> __value
                __token = 1299
                try:
                    __zt_tmp = __attrs_1696164584592
                except NameError:
                    __zt_tmp = None
                __value = _static_1696162668432('nocall', 'here/@@plone/toLocalizedTime', econtext=econtext)(_static_1696162665040(econtext, __zt_tmp))
                econtext['toLocalizedTime'] = __value
                __append('\n    ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='documentPublished', kind=None)]) name=None at 18aeb499490> -> __attrs_1696164588816
                __attrs_1696164588816 = _static_1696162671824
                # <Value 'published' (38:25)> -> __condition
                __token = 1416
                try:
                    __zt_tmp = __attrs_1696164588816
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696162672208('path', 'published', econtext=econtext)(_static_1696162675088(econtext, __zt_tmp))
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span class="documentPublished" >\n      ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696060790224
                    __attrs_1696060790224 = _static_1696163218192
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>')
                    __stream_1696164587472 = []
                    __append_1696164587472 = __stream_1696164587472.append
                    __append_1696164587472('published')
                    __msgid_1696164587472 = __re_whitespace(''.join(__stream_1696164587472)).strip()
                    __append(translate('box_published', mapping=None, default=__msgid_1696164587472, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</span>\n      ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164050192
                    __attrs_1696164050192 = _static_1696162877904
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164041104
                    __default_1696164041104 = _DEFAULT_MARKER
                    # <Value 'python:toLocalizedTime(published)' (41:25)> -> __cache_1696060793232
                    __token = 1518
                    try:
                        __zt_tmp = __attrs_1696164050192
                    except NameError:
                        __zt_tmp = None
                    __cache_1696060793232 = _static_1696163456528('python', 'toLocalizedTime(published)', econtext=econtext)(_static_1696163454992(econtext, __zt_tmp))
                    # <BinOp left=<Value 'python:toLocalizedTime(published)' (41:25)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18ae519e6d0> -> __condition
                    __expression = __cache_1696060793232
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        __append('Published')
                    else:
                        __content = __cache_1696060793232
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('</span>\n      ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164041680
                    __attrs_1696164041680 = _static_1696162900368
                    # <Value 'show_modification_date' (42:26)> -> __condition
                    __token = 1596
                    try:
                        __zt_tmp = __attrs_1696164041680
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696162899024('path', 'show_modification_date', econtext=econtext)(_static_1696162894800(econtext, __zt_tmp))
                    if __condition:
                        __append(',')
                    __append('\n    </span>')
                __append('\n\n    ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='documentModified', kind=None)]) name=None at 18aeb417350> -> __attrs_1696164046160
                __attrs_1696164046160 = _static_1696162897872
                # <Value 'show_modification_date' (46:25)> -> __condition
                __token = 1705
                try:
                    __zt_tmp = __attrs_1696164046160
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696164013584('path', 'show_modification_date', econtext=econtext)(_static_1696164007056(econtext, __zt_tmp))
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span class="documentModified" >\n      ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164046096
                    __attrs_1696164046096 = _static_1696164004176
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>')
                    __stream_1696164044816 = []
                    __append_1696164044816 = __stream_1696164044816.append
                    __append_1696164044816('\n      last modified\n      ')
                    __msgid_1696164044816 = __re_whitespace(''.join(__stream_1696164044816)).strip()
                    __append(translate('box_last_modified', mapping=None, default=__msgid_1696164044816, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</span>\n      ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163198416
                    __attrs_1696163198416 = _static_1696164004752
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163191888
                    __default_1696163191888 = _DEFAULT_MARKER
                    # <Value 'python:toLocalizedTime(modified)' (51:25)> -> __cache_1696164050768
                    __token = 1842
                    try:
                        __zt_tmp = __attrs_1696163198416
                    except NameError:
                        __zt_tmp = None
                    __cache_1696164050768 = _static_1696163859344('python', 'toLocalizedTime(modified)', econtext=econtext)(_static_1696163583184(econtext, __zt_tmp))
                    # <BinOp left=<Value 'python:toLocalizedTime(modified)' (51:25)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb415e10> -> __condition
                    __expression = __cache_1696164050768
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        __append('\n      Modified\n      ')
                    else:
                        __content = __cache_1696164050768
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('</span>\n    </span>')
                __append('\n  ')
                if __backup_toLocalizedTime_1696101272128 is __marker:
                    del econtext['toLocalizedTime']
                else:
                    econtext['toLocalizedTime'] = __backup_toLocalizedTime_1696101272128
                if __backup_show_modification_date_1696101762688 is __marker:
                    del econtext['show_modification_date']
                else:
                    econtext['show_modification_date'] = __backup_show_modification_date_1696101762688
                if __backup_modified_1696164227968 is __marker:
                    del econtext['modified']
                else:
                    econtext['modified'] = __backup_modified_1696164227968
                if __backup_published_1696100540288 is __marker:
                    del econtext['published']
                else:
                    econtext['published'] = __backup_published_1696100540288
                __append('\n\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163197072
                __attrs_1696163197072 = _static_1696164467024
                # <Value 'view/isExpired' (57:30)> -> __condition
                __token = 1964
                try:
                    __zt_tmp = __attrs_1696163197072
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696164466832('path', 'view/isExpired', econtext=econtext)(_static_1696164463568(econtext, __zt_tmp))
                if __condition:
                    __append('\n    &mdash;\n    ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='state-expired', kind=None)]) name=None at 18aeb345b10> -> __attrs_1696163192976
                    __attrs_1696163192976 = _static_1696164473936
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span class="state-expired" >')
                    __stream_1696163200336 = []
                    __append_1696163200336 = __stream_1696163200336.append
                    __append_1696163200336('expired')
                    __msgid_1696163200336 = __re_whitespace(''.join(__stream_1696163200336)).strip()
                    __append(translate('time_expired', mapping=None, default=__msgid_1696163200336, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</span>\n  ')
                __append('\n\n</section>')
                __i18n_domain = __previous_i18n_domain_1696164594704
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}