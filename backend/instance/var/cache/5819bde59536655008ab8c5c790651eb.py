# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\document_relateditems.pt'

__tokens = {71: ('view/related_items', 3, 19), 112: (' nocall:context/@@plon', 4, 21), 159: ('t nocall:context/@@plone_layo', 5, 22), 216: ('ng nocall:plone_view/normalizeStr', 6, 24), 275: ('ate nocall:context/@@plone_context_s', 7, 21), 339: ("tion python:context.portal_registry.get('types_use_view_action_in_listings'", 8, 22), 456: ('related', 10, 24), 678: ('related', 21, 30), 767: ('item/Description', 24, 16), 805: (' item/portal_typ', 25, 20), 849: ("s python:'contenttype-' + normalizeString(item_typ", 26, 25), 925: ('te item/review_state|python: context_state.workflow_stat', 27, 22), 1013: ("ass python: 'state-' + normalizeString(item_wf_st", 28, 27), 1083: ('_url item/getURL|item/absolut', 29, 15), 1133: ("m_url python:(item_type in use_view_action) and item_url+'/view' or it", 30, 14), 1230: ('_image python:item.', 31, 19), 1370: ('item_url', 37, 21), 1394: ('item/pretty_title_or_id', 38, 13), 1446: ('item/Description', 39, 17), 1573: ("python:item.getURL() +'/@@images/image/thumb'", 45, 21), 1659: ('item_has_image', 47, 26), 1720: ('string:$getIcon', 49, 17), 1753: (' item/Descriptio', 50, 16)}
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
_static_1696162999568 = {'id': 'section-related'}
_static_1696060794320 = __compile_zt_expr
_static_1696095330448 = __C2ZContextWrapper
_static_1696162828432 = __compile_zt_expr
_static_1696163256720 = __C2ZContextWrapper
_static_1696162762704 = __compile_zt_expr
_static_1696163578640 = __C2ZContextWrapper
_static_1696098719504 = __compile_zt_expr
_static_1696098722000 = __C2ZContextWrapper
_static_1696162767056 = __compile_zt_expr
_static_1696162765648 = __C2ZContextWrapper
_static_1696162473936 = __compile_zt_expr
_static_1696162465232 = __C2ZContextWrapper
_static_1696163547024 = __compile_zt_expr
_static_1696163553424 = __C2ZContextWrapper
_static_1696162763984 = {'class': 'section-heading'}
_static_1696162135760 = {}
_static_1696164074896 = __compile_zt_expr
_static_1696162851408 = __C2ZContextWrapper
_static_1696162841744 = {'class': 'media position-relative'}
_static_1696162777808 = __compile_zt_expr
_static_1696162778768 = __C2ZContextWrapper
_static_1696164522768 = __compile_zt_expr
_static_1696164523664 = __C2ZContextWrapper
_static_1696162964368 = __compile_zt_expr
_static_1696162958352 = __C2ZContextWrapper
_static_1696163519056 = __compile_zt_expr
_static_1696163527632 = __C2ZContextWrapper
_static_1696162972624 = __compile_zt_expr
_static_1696162985680 = __C2ZContextWrapper
_static_1696162875792 = __compile_zt_expr
_static_1696162882704 = __C2ZContextWrapper
_static_1696163018128 = __compile_zt_expr
_static_1696163009296 = __C2ZContextWrapper
_static_1696164518160 = __compile_zt_expr
_static_1696164526992 = __C2ZContextWrapper
_static_1696162128272 = {'class': 'media-body'}
_static_1696164045648 = {}
_static_1696163087696 = {'class': 'h6 stretched-link', 'href': '${item_url}'}
_static_1696062706576 = __compile_zt_expr
_static_1696124740624 = __C2ZContextWrapper
_static_1696164009616 = __compile_zt_expr
_static_1696163323664 = __C2ZContextWrapper
_static_1696164513360 = {}
_static_1696163861136 = __compile_zt_expr
_static_1696163861328 = __C2ZContextWrapper
_static_1696094575632 = {'class': 'ms-3', 'src': '', 'alt': 'item/Description'}
_static_1696163295248 = __compile_zt_expr
_static_1696164051152 = __C2ZContextWrapper
_static_1696164455376 = __compile_zt_expr
_static_1696164024144 = __C2ZContextWrapper
_static_1696164458064 = __compile_zt_expr
_static_1696162998672 = __C2ZContextWrapper
_static_1696163007952 = __compile_zt_expr
_static_1696163290768 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='section-related', kind=None)]) name=None at 18aeb3a4990> -> __attrs_1696163585424
            __attrs_1696163585424 = _static_1696162999568
            __backup_related_1696093155200 = get('related', __marker)
            # <Value 'view/related_items' (3:19)> -> __value
            __token = 71
            try:
                __zt_tmp = __attrs_1696163585424
            except NameError:
                __zt_tmp = None
            __value = _static_1696060794320('path', 'view/related_items', econtext=econtext)(_static_1696095330448(econtext, __zt_tmp))
            econtext['related'] = __value
            __backup_plone_view_1696101763264 = get('plone_view', __marker)
            # <Value 'nocall:context/@@plone' (4:21)> -> __value
            __token = 112
            try:
                __zt_tmp = __attrs_1696163585424
            except NameError:
                __zt_tmp = None
            __value = _static_1696162828432('nocall', 'context/@@plone', econtext=econtext)(_static_1696163256720(econtext, __zt_tmp))
            econtext['plone_view'] = __value
            __backup_plone_layout_1696125790144 = get('plone_layout', __marker)
            # <Value 'nocall:context/@@plone_layout' (5:22)> -> __value
            __token = 159
            try:
                __zt_tmp = __attrs_1696163585424
            except NameError:
                __zt_tmp = None
            __value = _static_1696162762704('nocall', 'context/@@plone_layout', econtext=econtext)(_static_1696163578640(econtext, __zt_tmp))
            econtext['plone_layout'] = __value
            __backup_normalizeString_1696031992000 = get('normalizeString', __marker)
            # <Value 'nocall:plone_view/normalizeString' (6:24)> -> __value
            __token = 216
            try:
                __zt_tmp = __attrs_1696163585424
            except NameError:
                __zt_tmp = None
            __value = _static_1696098719504('nocall', 'plone_view/normalizeString', econtext=econtext)(_static_1696098722000(econtext, __zt_tmp))
            econtext['normalizeString'] = __value
            __backup_context_state_1696094078400 = get('context_state', __marker)
            # <Value 'nocall:context/@@plone_context_state' (7:21)> -> __value
            __token = 275
            try:
                __zt_tmp = __attrs_1696163585424
            except NameError:
                __zt_tmp = None
            __value = _static_1696162767056('nocall', 'context/@@plone_context_state', econtext=econtext)(_static_1696162765648(econtext, __zt_tmp))
            econtext['context_state'] = __value
            __backup_use_view_action_1696135758016 = get('use_view_action', __marker)
            # <Value "python:context.portal_registry.get('types_use_view_action_in_listings', [])" (8:22)> -> __value
            __token = 339
            try:
                __zt_tmp = __attrs_1696163585424
            except NameError:
                __zt_tmp = None
            __value = _static_1696162473936('python', "context.portal_registry.get('types_use_view_action_in_listings', [])", econtext=econtext)(_static_1696162465232(econtext, __zt_tmp))
            econtext['use_view_action'] = __value
            # <Value 'related' (10:24)> -> __condition
            __token = 456
            try:
                __zt_tmp = __attrs_1696163585424
            except NameError:
                __zt_tmp = None
            __condition = _static_1696163547024('path', 'related', econtext=econtext)(_static_1696163553424(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696163586512 = __i18n_domain
                __i18n_domain = 'plone'
                # <section ... (0:0)
                # --------------------------------------------------------
                __append('<section id="section-related" >\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='section-heading', kind=None)]) name=None at 18aeb3a6c50> -> __attrs_1696163190736
                __attrs_1696163190736 = _static_1696162763984
                # <header ... (0:0)
                # --------------------------------------------------------
                __append('<header class="section-heading" >')
                __stream_1696163585104 = []
                __append_1696163585104 = __stream_1696163585104.append
                __append_1696163585104('\n      Related content\n  ')
                __msgid_1696163585104 = __re_whitespace(''.join(__stream_1696163585104)).strip()
                __append(translate('section_related_heading', mapping=None, default=__msgid_1696163585104, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</header>\n\n  <!-- section content -->\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163185104
                __attrs_1696163185104 = _static_1696162135760
                __backup_item_1696098408064 = get('item', __marker)
                # <Value 'related' (21:30)> -> __iterator
                __token = 678
                try:
                    __zt_tmp = __attrs_1696163185104
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1696164074896('path', 'related', econtext=econtext)(_static_1696162851408(econtext, __zt_tmp))
                __iterator, ____index_1696163187024 = getname('repeat')('item', __iterator)
                econtext['item'] = None
                for __item in __iterator:
                    econtext['item'] = __item
                    __append('\n    ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='media position-relative', kind=None)]) name=None at 18aeb347850> -> __attrs_1696163199440
                    __attrs_1696163199440 = _static_1696162841744
                    __backup_desc_1696099553088 = get('desc', __marker)
                    # <Value 'item/Description' (24:16)> -> __value
                    __token = 767
                    try:
                        __zt_tmp = __attrs_1696163199440
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162777808('path', 'item/Description', econtext=econtext)(_static_1696162778768(econtext, __zt_tmp))
                    econtext['desc'] = __value
                    __backup_item_type_1696135877824 = get('item_type', __marker)
                    # <Value 'item/portal_type' (25:20)> -> __value
                    __token = 805
                    try:
                        __zt_tmp = __attrs_1696163199440
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696164522768('path', 'item/portal_type', econtext=econtext)(_static_1696164523664(econtext, __zt_tmp))
                    econtext['item_type'] = __value
                    __backup_item_type_class_1696092906880 = get('item_type_class', __marker)
                    # <Value "python:'contenttype-' + normalizeString(item_type)" (26:25)> -> __value
                    __token = 849
                    try:
                        __zt_tmp = __attrs_1696163199440
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162964368('python', "'contenttype-' + normalizeString(item_type)", econtext=econtext)(_static_1696162958352(econtext, __zt_tmp))
                    econtext['item_type_class'] = __value
                    __backup_item_wf_state_1696093154368 = get('item_wf_state', __marker)
                    # <Value 'item/review_state|python: context_state.workflow_state()' (27:22)> -> __value
                    __token = 925
                    try:
                        __zt_tmp = __attrs_1696163199440
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696163519056('path', 'item/review_state|python: context_state.workflow_state()', econtext=econtext)(_static_1696163527632(econtext, __zt_tmp))
                    econtext['item_wf_state'] = __value
                    __backup_item_wf_state_class_1696098744832 = get('item_wf_state_class', __marker)
                    # <Value "python: 'state-' + normalizeString(item_wf_state)" (28:27)> -> __value
                    __token = 1013
                    try:
                        __zt_tmp = __attrs_1696163199440
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162972624('python', " 'state-' + normalizeString(item_wf_state)", econtext=econtext)(_static_1696162985680(econtext, __zt_tmp))
                    econtext['item_wf_state_class'] = __value
                    __backup_item_url_1696099338176 = get('item_url', __marker)
                    # <Value 'item/getURL|item/absolute_url' (29:15)> -> __value
                    __token = 1083
                    try:
                        __zt_tmp = __attrs_1696163199440
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696162875792('path', 'item/getURL|item/absolute_url', econtext=econtext)(_static_1696162882704(econtext, __zt_tmp))
                    econtext['item_url'] = __value
                    __backup_item_url_1696123525632 = get('item_url', __marker)
                    # <Value "python:(item_type in use_view_action) and item_url+'/view' or item_url" (30:14)> -> __value
                    __token = 1133
                    try:
                        __zt_tmp = __attrs_1696163199440
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696163018128('python', "(item_type in use_view_action) and item_url+'/view' or item_url", econtext=econtext)(_static_1696163009296(econtext, __zt_tmp))
                    econtext['item_url'] = __value
                    __backup_item_has_image_1696099341824 = get('item_has_image', __marker)
                    # <Value 'python:item.getIcon' (31:19)> -> __value
                    __token = 1230
                    try:
                        __zt_tmp = __attrs_1696163199440
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696164518160('python', 'item.getIcon', econtext=econtext)(_static_1696164526992(econtext, __zt_tmp))
                    econtext['item_has_image'] = __value
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div class="media position-relative" >\n\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='media-body', kind=None)]) name=None at 18aeb344090> -> __attrs_1696163194448
                    __attrs_1696163194448 = _static_1696162128272
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div class="media-body">\n        ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164073936
                    __attrs_1696164073936 = _static_1696164045648
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div>')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='href', kind=None)], values=[Constant(value='h6 stretched-link', kind=None), Constant(value='${item_url}', kind=None)]) name=None at 18aeb41e990> -> __attrs_1696164085520
                    __attrs_1696164085520 = _static_1696163087696
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a class="h6 stretched-link"')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164073424
                    __default_1696164073424 = _DEFAULT_MARKER
                    # <Interpolation value=<Substitution '${item_url}' (37:19)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb41ca90> -> __attr_href
                    __token = 1370
                    try:
                        __zt_tmp = __attrs_1696164085520
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696062706576('path', 'item_url', econtext=econtext)(_static_1696124740624(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                    __attr_href = __attr_href
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
                    # <Interpolation value=<Substitution '${item/pretty_title_or_id}' (38:11)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb41d110> -> __content_1695946256768
                    __token = 1394
                    try:
                        __zt_tmp = __attrs_1696164085520
                    except NameError:
                        __zt_tmp = None
                    __content_1695946256768 = _static_1696164009616('path', 'item/pretty_title_or_id', econtext=econtext)(_static_1696163323664(econtext, __zt_tmp))
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
                    __append('</a></div>\n        ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696098722704
                    __attrs_1696098722704 = _static_1696164513360
                    # <small ... (0:0)
                    # --------------------------------------------------------
                    __append('<small>')
                    # <Interpolation value=<Substitution '${item/Description}' (39:15)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18ae75c9a10> -> __content_1695946256768
                    __token = 1446
                    try:
                        __zt_tmp = __attrs_1696098722704
                    except NameError:
                        __zt_tmp = None
                    __content_1695946256768 = _static_1696163861136('path', 'item/Description', econtext=econtext)(_static_1696163861328(econtext, __zt_tmp))
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
                    __append('</small>\n      </div>\n\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='alt', kind=None)], values=[Constant(value='ms-3', kind=None), ..., Constant(value='item/Description', kind=None)]) name=None at 18ae75cbbd0> -> __attrs_1696164497360
                    __attrs_1696164497360 = _static_1696094575632
                    __backup_getIcon_1696124262528 = get('getIcon', __marker)
                    # <Value "python:item.getURL() +'/@@images/image/thumb'" (45:21)> -> __value
                    __token = 1573
                    try:
                        __zt_tmp = __attrs_1696164497360
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696163295248('python', "item.getURL() +'/@@images/image/thumb'", econtext=econtext)(_static_1696164051152(econtext, __zt_tmp))
                    econtext['getIcon'] = __value
                    # <Value 'item_has_image' (47:26)> -> __condition
                    __token = 1659
                    try:
                        __zt_tmp = __attrs_1696164497360
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696164455376('path', 'item_has_image', econtext=econtext)(_static_1696164024144(econtext, __zt_tmp))
                    if __condition:
                        # <img ... (0:0)
                        # --------------------------------------------------------
                        __append('<img class="ms-3"')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164504784
                        __default_1696164504784 = _DEFAULT_MARKER
                        # <Substitution 'string:$getIcon' (49:17)> -> __attr_src
                        __token = 1720
                        try:
                            __zt_tmp = __attrs_1696164497360
                        except NameError:
                            __zt_tmp = None
                        __attr_src = _static_1696164458064('string', '$getIcon', econtext=econtext)(_static_1696162998672(econtext, __zt_tmp))
                        __attr_src = __quote(__attr_src, '"', '&quot;', '', _DEFAULT_MARKER)
                        if __attr_src is not None:
                            __append(' src="%s"' % __attr_src)
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164500240
                        __default_1696164500240 = _DEFAULT_MARKER
                        # <Substitution 'item/Description' (50:16)> -> __attr_alt
                        __token = 1753
                        try:
                            __zt_tmp = __attrs_1696164497360
                        except NameError:
                            __zt_tmp = None
                        __attr_alt = _static_1696163007952('path', 'item/Description', econtext=econtext)(_static_1696163290768(econtext, __zt_tmp))
                        __attr_alt = __quote(__attr_alt, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_alt is not None:
                            __append(' alt="%s"' % __attr_alt)
                        __append(' />')
                    if __backup_getIcon_1696124262528 is __marker:
                        del econtext['getIcon']
                    else:
                        econtext['getIcon'] = __backup_getIcon_1696124262528
                    __append('\n\n    </div>')
                    if __backup_item_has_image_1696099341824 is __marker:
                        del econtext['item_has_image']
                    else:
                        econtext['item_has_image'] = __backup_item_has_image_1696099341824
                    if __backup_item_url_1696123525632 is __marker:
                        del econtext['item_url']
                    else:
                        econtext['item_url'] = __backup_item_url_1696123525632
                    if __backup_item_url_1696099338176 is __marker:
                        del econtext['item_url']
                    else:
                        econtext['item_url'] = __backup_item_url_1696099338176
                    if __backup_item_wf_state_class_1696098744832 is __marker:
                        del econtext['item_wf_state_class']
                    else:
                        econtext['item_wf_state_class'] = __backup_item_wf_state_class_1696098744832
                    if __backup_item_wf_state_1696093154368 is __marker:
                        del econtext['item_wf_state']
                    else:
                        econtext['item_wf_state'] = __backup_item_wf_state_1696093154368
                    if __backup_item_type_class_1696092906880 is __marker:
                        del econtext['item_type_class']
                    else:
                        econtext['item_type_class'] = __backup_item_type_class_1696092906880
                    if __backup_item_type_1696135877824 is __marker:
                        del econtext['item_type']
                    else:
                        econtext['item_type'] = __backup_item_type_1696135877824
                    if __backup_desc_1696099553088 is __marker:
                        del econtext['desc']
                    else:
                        econtext['desc'] = __backup_desc_1696099553088
                    __append('\n  ')
                    ____index_1696163187024 -= 1
                    if ____index_1696163187024 > 0:
                        __append('')
                if __backup_item_1696098408064 is __marker:
                    del econtext['item']
                else:
                    econtext['item'] = __backup_item_1696098408064
                __append('\n\n</section>')
                __i18n_domain = __previous_i18n_domain_1696163586512
            if __backup_use_view_action_1696135758016 is __marker:
                del econtext['use_view_action']
            else:
                econtext['use_view_action'] = __backup_use_view_action_1696135758016
            if __backup_context_state_1696094078400 is __marker:
                del econtext['context_state']
            else:
                econtext['context_state'] = __backup_context_state_1696094078400
            if __backup_normalizeString_1696031992000 is __marker:
                del econtext['normalizeString']
            else:
                econtext['normalizeString'] = __backup_normalizeString_1696031992000
            if __backup_plone_layout_1696125790144 is __marker:
                del econtext['plone_layout']
            else:
                econtext['plone_layout'] = __backup_plone_layout_1696125790144
            if __backup_plone_view_1696101763264 is __marker:
                del econtext['plone_view']
            else:
                econtext['plone_view'] = __backup_plone_view_1696101763264
            if __backup_related_1696093155200 is __marker:
                del econtext['related']
            else:
                econtext['related'] = __backup_related_1696093155200
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}