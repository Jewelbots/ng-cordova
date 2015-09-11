// install   :      cordova plugin add phonegap-plugin-push
// link      :      https://github.com/phonegap/phonegap-plugin-push

angular.module('PushNotifications', [])
  .factory('PushNotifications', function () {
    return window.PushNotifications;
  })
angular.module('ngCordova.plugin.push_v5', [])
  .factory('$cordovaPushV5',['PushNotifications', '$q', '$rootScope', '$timeout', function (PushNotifications, $q, $rootScope, $timeout) {

    var push = undefined;
    return {
      initialize : function (options) {
        var q = $q.defer();
        push = PushNotifications.init(options);
        q.resolve(push);
        return q.promise;
      },
      onNotification : function () {
        $timeout(function () {
          push.on('notification', function (notification) {
            $rootScope.$broadcast('$cordovaPushV5:notificationReceived', notification);
          });
        });
      },
      onError : function () {
        $timeout(function () {
          push.on('error', function (error) { $rootScope.$broadcast('$cordovaPushV5:errorOccurred', error);});
        });
      },
      register : function () {
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.on('registration', function (data) {
            q.resolve(data.registrationId);
          });
        }
        return q.promise;
      },
      unregister : function () {
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.unregister(function (success) {
            q.resolve(success);
          },function (error) {
            q.reject(error)
          });
        }
        return q.promise;
      },
      setBadgeNumber : function (number) {
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.setApplicationIconBadgeNumber(function (success) {
            q.resolve(success);
          }, function (error) {
            q.reject(error);
          }, number);
        }
        return q.promise;
      }
    };
  }]);
