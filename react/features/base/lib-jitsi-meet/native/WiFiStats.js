import { NativeModules } from 'react-native';
import { getJitsiMeetGlobalNS } from '../../util';

/**
 * Queries for wifi stats.
 *
 * @param {Function} callback - Callback delivering results. Having two
 * params, where first is error and second one is object with the results.
 * @returns {void}
 */
function getWiFiStats(callback) {
    NativeModules.WiFiStats.getWiFiStats()
        .then(results => callback(null, results))
        .catch(error => callback(error));
}

/**
 * If WiFiStats native module exist attach it to JitsiMeetGlobalNS.
 */
if (NativeModules.WiFiStats) {
    getJitsiMeetGlobalNS().getWiFiStats = getWiFiStats;
}
