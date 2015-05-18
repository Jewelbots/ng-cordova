'use strict';
/*global ngCordovaMocks */
/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaBluetoothle
 *
 * @description
 * A service for BluetoothLE features
 * in an app build with ngCordova.
 **/

ngCordovaMocks.factory('$cordovaBluetoothle', ['$q', '$timeout', function ($q, $timeout) {
    var contains = function (arr, obj) {
      for (var i = 0; i < arr.length; i= i+1) {
        if (arr[i] === obj) {
          return true;
        }
      }
      return false;
    };

  var deviceScan = {
    "name": "Test Device",
    "id": "AA:BB:CC:DD:EE:FF",
    "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    "rssi": -55
  };


  var deviceConnected = {
    "name": "Connected Test Device",
    "id": "AB:BC:CD:DE:EF:FA",
    "serviceUuid" : "180D",
    "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    "rssi": -55
  };

  var connected = {

    "name": "Polar H7 3B321015",
    "address": "ECC037FD-72AE-AFC5-9213-CA785B3B5C63",
    "status": "connected"
  };

  var devices = [
    deviceConnected
  ];

  var androidDevices = [
    {
      'status': 'discovered',
      'address': 'AB:BC:CD:DE:EF:FA',
      'name': 'Test bluetooth device',
      'services' : [
        {
          'characteristics': [
            {
              'descriptors': [

              ],
              'characteristicUuid': '2a00',
              'properties': {
                'write': true,
                'writeWithoutResponse': true,
                'read': true
              }
            },
            {
              'descriptors': [],
              'characteristicUuid': '2a01',
              'properties': {
                'read': true
              }
            },
            {
              'descriptors': [],
              'characteristicUuid': '2a02',
              'properties': {
                'read': true
              }
            },
            {
              'descriptors': [],
              'characteristicUuid': '2a03',
              'properties': {
                'write': true
              }
            },
            {
              'descriptors': [],
              'characteristicUuid': '2a04',
              'properties': {
                'read': true
              }
            },
          ],
          'serviceUUid': '1800'
        },
        {"characteristics": [
          {
            "descriptors": [
              {
                "descriptorUuid": "2902"
              }
            ],
            "characteristicUuid": "2a05",
            "properties": {
              "indicate": true
            }
          }
        ],
          "serviceUuid": "1801"
        },
        {
          "characteristics": [
            {
              "descriptors": [
                {
                  "descriptorUuid": "2902"
                }
              ],
              "characteristicUuid": "2a37",
              "properties": {
                "notify": true
              }
            },
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a38",
              "properties": {
                "read": true
              }
            }
          ],
          "serviceUuid": "180d"
        },
        {
          "characteristics": [
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a23",
              "properties": {
                "read": true
              }
            },
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a24",
              "properties": {
                "read": true
              }
            },
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a25",
              "properties": {
                "read": true
              }
            },
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a26",
              "properties": {
                "read": true
              }
            },
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a27",
              "properties": {
                "read": true
              }
            },
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a28",
              "properties": {
                "read": true
              }
            },
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a29",
              "properties": {
                "read": true
              }
            }
          ],
          "serviceUuid": "180a"
        },
        {
          "characteristics": [
            {
              "descriptors": [

              ],
              "characteristicUuid": "2a19",
              "properties": {
                "read": true
              }
            }
          ],
          "serviceUuid": "180f"
        },
        {
          "characteristics": [
            {
              "descriptors": [

              ],
              "characteristicUuid": "6217ff4c-c8ec-b1fb-1380-3ad986708e2d",
              "properties": {
                "read": true
              }
            },
            {
              "descriptors": [
                {
                  "descriptorUuid": "2902"
                }
              ],
              "characteristicUuid": "6217ff4d-91bb-91d0-7e2a-7cd3bda8a1f3",
              "properties": {
                "write": true,
                "indicate": true
              }
            }
          ],
          "serviceUuid": "6217ff4b-fb31-1140-ad5a-a45545d7ecf3"
        }
      ],
      "name": "Polar H7 3B321015"
    }
  ];

  var allServices = androidDevices.services;
  var allCharacteristics = androidDevices.characteristics;

  return {
    initialize: function (params) {
      params.time = params.time || 1;
      var q = $q.defer();
      $timeout(function () {
      }, params.timeout * 1000 ); //todo, check initialize params for timeout
      return q.promise;
    },

    enable: function () {
      var q = $q.defer();
      $timeout(function () {
        q.resolve();
      }, 1500);
      return q.promise;
    },

    disable: function () {
      var q = $q.defer();
      $timeout(function () {
        q.resolve();
      }, 1500);
      return q.promise;
    },

    startScan: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(deviceScan);
      }, params.time*1000);
      return q.promise;
    },

    stopScan : function () {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 500);
      return q.promise;
    },

    retrieveConnected: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(devices.filter(function (item) {
          if (item.hasOwnProperty('serviceUuid') && contains(params, item)) {
            return item;
          }
        }));
      }, 0);
      return q.promise;
    },
    connect: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(connected);
      }, 500);
      return q.promise;
    },
    reconnect: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(deviceConnected);
      }, 500);
      return q.promise;
    },
    disconnect: function (params) {
      var q = q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 500);
      return q.promise;
    },
    close: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 500);
      return q.promise;
    },
    discover: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(androidDevices);
      }, 500);
      return q.promise;
    },
    services: function (params) {

      var dev = function () {
        if (params.hasOwnProperty('device')) {
          return params.device;
        } else {
          return deviceConnected;
        };
      };

      var q = $q.defer();
      $timeout(function () {
        q.resolve(function () {
          var da = dev.address;
          var s = dev.services;
          if(!params.hasOwnProperty('address')) {
            return;
          }
          if (!params.hasOwnProperty('services')){
            { da.services = allServices};
          }
          else {
            da.services = s.filter(function (item) {
              if (item.hasOwnProperty('serviceUuid') && contains(params.services, item)) {
                return item;
              }
            });
          }
          return da;
        });
      }, 500);
      return q.promise;
    },
    characteristics : function (params) {
      var dev = {},
        q = $q.defer();
      if (params.hasOwnProperty('device')) {
        dev.address = params.device.address;
        dev.name = params.device.name;
        dev.status = 'characteristics';
        if (params.device.hasOwnProperty('characteristics')){
          dev.characteristics = params.device.characteristics;
        } else {
          dev.characteristics = allCharacteristics;
        }
      } else {
        dev.address = deviceConnected.address;
        dev.name = deviceConnected.name;
      }
      dev.characteristics = [];
      if (params.hasOwnProperty('characteristicUuids')) {
        dev.characteristics = dev.characteristics.filter(function(item) {
          return contains(params.characteristicUuids , item.serviceUuid);
        });
      } else {
        dev.characteristics = allCharacteristics;
      }
      $timeout(function () {
        q.resolve(dev);
      }, 100);
      return q.promise;
    },
    descriptors : function (params) {
      var q = $q.defer(),
        dev = {},
        i,
        j;
      dev.status = "descriptors";
      if (params.hasOwnProperty('device')) {
        dev.name = params.device.name;
        dev.address = params.device.address;
        if (params.device.hasOwnProperty('characteristicUuids')) {
          dev.characteristicUuid = params.device.characteristicUUids;
        }
        if (params.hasOwnProperty('serviceUuid')) {
          dev.serviceUuid = params.serviceUuid;
        }
        device.descriptorUuids = function() {
          var uuids = [];
          var servicesLength = params.device.services.length;
          for (i = 0; i < servicesLength; i = i + 1) {
            for (j = 0; j < params.device.services[i].characteristics.length; j = j + 1) {
              if (params.device.services[i].characteristics[j].hasOwnProperty('descriptor')) {
                if (contains(params.characteristicUuids, params.device.params.device.services[i].characteristics[j])) {
                  uuids.concat(params.device.services[i].characteristics[j].descriptors)
                }
              }
            }
          }
          return uuids;
        }
      }
      $timeout(function () {
        q.resolve(dev);
      }, 100);
      return q.promise;
    },
    read : function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(readData);
      }, 100);
      return q.promise;
    },
    subscribe : function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 100);
    },
    unsubscribe : function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 100);
    },
    write : function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 100);
      return q.promise;
    },
    readDescriptor: function (params) {
      var q = $q.defer(),
        readDescriptorData = {};
      $timeout(function () {
        q.resolve(readDescriptorData);
      }, 100);
      return q.promise;
    },
    writeDescriptor: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 100);
      return q.promise;
    },
    rssi: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve({'rssi':-50});
      }, 100);
      return q.promise;
    },
    isInitialized: function () {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      },100);
      return q.promise;
    },
    isEnabled: function () {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      },100);
      return q.promise;
    },
    isScanning: function () {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      },100);
      return q.promise;
    },
    isConnected: function () {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      },100);
      return q.promise;
    },
    isDiscovered: function (params) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      },100);
      return q.promise;
    },
    requestConnectionPriority: function () {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      },100);
      return q.promise;
    }
  }
}]);
