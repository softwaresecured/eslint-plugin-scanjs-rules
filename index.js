"use strict";
module.exports = {
  rules: {
    'Directly Executing Scripts-call_eval': require('./lib/rules/call_eval'),
    'Directly Executing Scripts-new_Function': require('./lib/rules/new_Function'),
    'Directly Executing Scripts-call_Function': require('./lib/rules/call_Function'),
    'Directly Executing Scripts-call_setTimeout': require('./lib/rules/call_setTimeout'),
    'Directly Executing Scripts-call_setInterval': require('./lib/rules/call_setInterval'),
    'Directly Executing Scripts-call_setImmediate': require('./lib/rules/call_setImmediate'),
    'Directly Executing Scripts-call_execScript': require('./lib/rules/call_execScript'),
    'Directly Executing Scripts-call_generateCRMFRequest': require('./lib/rules/call_generateCRMFRequest'),
    'JavaScript Output-call_write': require('./lib/rules/call_write'),
    'JavaScript Output-call_writeln': require('./lib/rules/call_writeln'),
    'Modifying the DOM-property_createContextualFragment': require('./lib/rules/property_createContextualFragment'),
    'JavaScript Input-assign_to_location': require('./lib/rules/assign_to_location'),
    'Opening or Modifying a Window-assign_to_href': require('./lib/rules/assign_to_href'),
    'Opening or Modifying a Window-assign_to_pathname': require('./lib/rules/assign_to_pathname'),
    'Opening or Modifying a Window-assign_to_search': require('./lib/rules/assign_to_search'),
    'Opening or Modifying a Window-assign_to_protocol': require('./lib/rules/assign_to_protocol'),
    'Opening or Modifying a Window-assign_to_hostname': require('./lib/rules/assign_to_hostname'),
    'Opening or Modifying a Window-assign_to_src': require('./lib/rules/assign_to_src'),
    'JavaScript Output-call_parseFromString': require('./lib/rules/call_parseFromString'),
    'JavaScript Input-call_addEventListener': require('./lib/rules/call_addEventListener'),
    'JavaScript Input-call_addEventListener_message': require('./lib/rules/call_addEventListener_message'),
    'Cross Window-assign_to_onmessage': require('./lib/rules/assign_to_onmessage'),
    'Insecure Data Storage-identifier_indexedDB': require('./lib/rules/identifier_indexedDB'),
    'Insecure Data Storage-identifier_localStorage': require('./lib/rules/identifier_localStorage'),
    'Insecure Data Storage-identifier_sessionStorage': require('./lib/rules/identifier_sessionStorage'),
    'Insecure Data Storage-property_indexedDB': require('./lib/rules/property_indexedDB'),
    'Insecure Data Storage-property_localStorage': require('./lib/rules/property_localStorage'),
    'Insecure Data Storage-property_sessionStorage': require('./lib/rules/property_sessionStorage'),
    'JavaScript Input-new_MozActivity': require('./lib/rules/new_MozActivity'),
    'Directly Executing Scripts-call_mozSetMessageHandler_activity': require('./lib/rules/call_mozSetMessageHandler_activity'),
    'Directly Executing Scripts-call_mozSetMessageHandler': require('./lib/rules/call_mozSetMessageHandler'),
    'Insecure Data Storage-property_getDataStores': require('./lib/rules/property_getDataStores'),
    'JavaScript Input-call_connect': require('./lib/rules/call_connect'),
    'Directly Executing Scripts-call_setMessageHandler_connect': require('./lib/rules/call_setMessageHandler_connect'),
    'JavaScript Input-property_mozAlarms': require('./lib/rules/property_mozAlarms'),
    'JavaScript Input-call_open_attention': require('./lib/rules/call_open_attention'),
    'JavaScript Input-property_getUserMedia': require('./lib/rules/property_getUserMedia'),
    'Opening or Modifying a Window-assign_to_mozAudioChannelType': require('./lib/rules/assign_to_mozAudioChannelType'),
    'Opening or Modifying a Window-assign_to_mozAudioChannel': require('./lib/rules/assign_to_mozAudioChannel'),
    'JavaScript Input-call_addEventListener_deviceproximity': require('./lib/rules/call_addEventListener_deviceproximity'),
    'JavaScript Input-property_mozBluetooth': require('./lib/rules/property_mozBluetooth'),
    'Modifying the DOM-call_setAttribute_mozbrowser': require('./lib/rules/call_setAttribute_mozbrowser'),
    'JavaScript Input-property_mozCameras': require('./lib/rules/property_mozCameras'),
    'Cross Browsing-call_addEventListener_cellbroadcastmsgchanged': require('./lib/rules/call_addEventListener_cellbroadcastmsgchanged'),
    'JavaScript Input-property_mozContacts': require('./lib/rules/property_mozContacts'),
    'JavaScript Input-new_Notification': require('./lib/rules/new_Notification'),
    'Insecure Data Storage-property_getDeviceStorage': require('./lib/rules/property_getDeviceStorage'),
    'Insecure Data Storage-call_getDeviceStorage_apps': require('./lib/rules/call_getDeviceStorage_apps'),
    'Insecure Data Storage-call_getDeviceStorage_crashes': require('./lib/rules/call_getDeviceStorage_crashes'),
    'Insecure Data Storage-call_getDeviceStorage_music': require('./lib/rules/call_getDeviceStorage_music'),
    'Insecure Data Storage-call_getDeviceStorage_pictures': require('./lib/rules/call_getDeviceStorage_pictures'),
    'Insecure Data Storage-call_getDeviceStorage_sdcard': require('./lib/rules/call_getDeviceStorage_sdcard'),
    'Insecure Data Storage-call_getDeviceStorage_videos': require('./lib/rules/call_getDeviceStorage_videos'),
    'JavaScript Input-property_mozDownloadManager': require('./lib/rules/property_mozDownloadManager'),
    'Directly Executing Scripts-call_setAttribute_mozapp': require('./lib/rules/call_setAttribute_mozapp'),
    'JavaScript Input-property_mozFMRadio': require('./lib/rules/property_mozFMRadio'),
    'JavaScript Input-property_geolocation': require('./lib/rules/property_geolocation'),
    'JavaScript Input-property_addIdleObserver': require('./lib/rules/property_addIdleObserver'),
    'Javascript Input-property_mozInputMethod': require('./lib/rules/property_mozInputMethod'),
    'Modifying the DOM-call_hide': require('./lib/rules/call_hide'),
    'JavaScript Input-property_mozMobileConnections': require('./lib/rules/property_mozMobileConnections'),
    'JavaScript Input-property_lastKnownHomeNetwork': require('./lib/rules/property_lastKnownHomeNetwork'),
    'JavaScript Input-property_lastKnownNetwork': require('./lib/rules/property_lastKnownNetwork'),
    'JavaScript Input-call_addEventListener_moznetworkupload': require('./lib/rules/call_addEventListener_moznetworkupload'),
    'JavaScript Input-call_addEventListener_moznetworkdownload': require('./lib/rules/call_addEventListener_moznetworkdownload'),
    'JavaScript Input-property_mozNetworkStats': require('./lib/rules/property_mozNetworkStats'),
    'JavaScript Input-property_mozNfc': require('./lib/rules/property_mozNfc'),
    'JavaScript Input-call_open_remote=true': require('./lib/rules/call_open_remote=true'),
    'JavaScript Input-property_mozPermissionSettings': require('./lib/rules/property_mozPermissionSettings'),
    'JavaScript Input-property_mozPhoneNumberService': require('./lib/rules/property_mozPhoneNumberService'),
    'JavaScript Input-property_mozPower': require('./lib/rules/property_mozPower'),
    'JavaScript Input-property_mozSettings': require('./lib/rules/property_mozSettings'),
    'Cross Browsing-property_mozMobileMessage': require('./lib/rules/property_mozMobileMessage'),
    'JavaScript Input-new_MozSpeakerManager': require('./lib/rules/new_MozSpeakerManager'),
    'JavaScript Input-object_mozSystem': require('./lib/rules/object_mozSystem'),
    'JavaScript Input-property_mozTCPSocket': require('./lib/rules/property_mozTCPSocket'),
    'JavaScript Input-property_mozTelephony': require('./lib/rules/property_mozTelephony'),
    'JavaScript Input-property_mozTime': require('./lib/rules/property_mozTime'),
    'JavaScript Input-property_mozVoicemail': require('./lib/rules/property_mozVoicemail'),
    'JavaScript Input-call_mozSetMessageHandler_wappush_received': require('./lib/rules/call_mozSetMessageHandler_wappush_received'),
    'Vunlerabiltiy Management-property_mgmt': require('./lib/rules/property_mgmt'),
    'JavaScript Input-property_mozWifiManager': require('./lib/rules/property_mozWifiManager'),
    'JavaScript Input-property_mozKeyboard': require('./lib/rules/property_mozKeyboard'),
    'JavaScript Input-property_mozCellBroadcast': require('./lib/rules/property_mozCellBroadcast'),
    'JavaScript Input-property_mozMobileConnection': require('./lib/rules/property_mozMobileConnection'),
    'JavaScript Input-property_mozNotification': require('./lib/rules/property_mozNotification')
  },
  rulesConfig: {
    'Directly Executing Scripts-call_eval': 2
    'Directly Executing Scripts-new_Function': 2
    'Directly Executing Scripts-call_Function': 2
    'Directly Executing Scripts-call_setTimeout': 2
    'Directly Executing Scripts-call_setInterval': 2
    'Directly Executing Scripts-call_setImmediate': 2
    'Directly Executing Scripts-call_execScript': 2
    'Directly Executing Scripts-call_generateCRMFRequest': 2
    'JavaScript Output-call_write': 2
    'JavaScript Output-call_writeln': 2
    'Modifying the DOM-property_createContextualFragment': 2
    'JavaScript Input-assign_to_location': 2
    'Opening or Modifying a Window-assign_to_href': 2
    'Opening or Modifying a Window-assign_to_pathname': 2
    'Opening or Modifying a Window-assign_to_search': 2
    'Opening or Modifying a Window-assign_to_protocol': 2
    'Opening or Modifying a Window-assign_to_hostname': 2
    'Opening or Modifying a Window-assign_to_src': 2
    'JavaScript Output-call_parseFromString': 2
    'JavaScript Input-call_addEventListener': 2
    'JavaScript Input-call_addEventListener_message': 2
    'Cross Window-assign_to_onmessage': 2
    'Insecure Data Storage-identifier_indexedDB': 2
    'Insecure Data Storage-identifier_localStorage': 2
    'Insecure Data Storage-identifier_sessionStorage': 2
    'Insecure Data Storage-property_indexedDB': 2
    'Insecure Data Storage-property_localStorage': 2
    'Insecure Data Storage-property_sessionStorage': 2
    'JavaScript Input-new_MozActivity': 2
    'Directly Executing Scripts-call_mozSetMessageHandler_activity': 2
    'Directly Executing Scripts-call_mozSetMessageHandler': 2
    'Insecure Data Storage-property_getDataStores': 2
    'JavaScript Input-call_connect': 2
    'Directly Executing Scripts-call_setMessageHandler_connect': 2
    'JavaScript Input-property_mozAlarms': 2
    'JavaScript Input-call_open_attention': 2
    'JavaScript Input-property_getUserMedia': 2
    'Opening or Modifying a Window-assign_to_mozAudioChannelType': 2
    'Opening or Modifying a Window-assign_to_mozAudioChannel': 2
    'JavaScript Input-call_addEventListener_deviceproximity': 2
    'JavaScript Input-property_mozBluetooth': 2
    'Modifying the DOM-call_setAttribute_mozbrowser': 2
    'JavaScript Input-property_mozCameras': 2
    'Cross Browsing-call_addEventListener_cellbroadcastmsgchanged': 2
    'JavaScript Input-property_mozContacts': 2
    'JavaScript Input-new_Notification': 2
    'Insecure Data Storage-property_getDeviceStorage': 2
    'Insecure Data Storage-call_getDeviceStorage_apps': 2
    'Insecure Data Storage-call_getDeviceStorage_crashes': 2
    'Insecure Data Storage-call_getDeviceStorage_music': 2
    'Insecure Data Storage-call_getDeviceStorage_pictures': 2
    'Insecure Data Storage-call_getDeviceStorage_sdcard': 2
    'Insecure Data Storage-call_getDeviceStorage_videos': 2
    'JavaScript Input-property_mozDownloadManager': 2
    'Directly Executing Scripts-call_setAttribute_mozapp': 2
    'JavaScript Input-property_mozFMRadio': 2
    'JavaScript Input-property_geolocation': 2
    'JavaScript Input-property_addIdleObserver': 2
    'Javascript Input-property_mozInputMethod': 2
    'Modifying the DOM-call_hide': 2
    'JavaScript Input-property_mozMobileConnections': 2
    'JavaScript Input-property_lastKnownHomeNetwork': 2
    'JavaScript Input-property_lastKnownNetwork': 2
    'JavaScript Input-call_addEventListener_moznetworkupload': 2
    'JavaScript Input-call_addEventListener_moznetworkdownload': 2
    'JavaScript Input-property_mozNetworkStats': 2
    'JavaScript Input-property_mozNfc': 2
    'JavaScript Input-call_open_remote=true': 2
    'JavaScript Input-property_mozPermissionSettings': 2
    'JavaScript Input-property_mozPhoneNumberService': 2
    'JavaScript Input-property_mozPower': 2
    'JavaScript Input-property_mozSettings': 2
    'Cross Browsing-property_mozMobileMessage': 2
    'JavaScript Input-new_MozSpeakerManager': 2
    'JavaScript Input-object_mozSystem': 2
    'JavaScript Input-property_mozTCPSocket': 2
    'JavaScript Input-property_mozTelephony': 2
    'JavaScript Input-property_mozTime': 2
    'JavaScript Input-property_mozVoicemail': 2
    'JavaScript Input-call_mozSetMessageHandler_wappush_received': 2
    'Vunlerabiltiy Management-property_mgmt': 2
    'JavaScript Input-property_mozWifiManager': 2
    'JavaScript Input-property_mozKeyboard': 2
    'JavaScript Input-property_mozCellBroadcast': 2
    'JavaScript Input-property_mozMobileConnection': 2
    'JavaScript Input-property_mozNotification': 2

  }
}

