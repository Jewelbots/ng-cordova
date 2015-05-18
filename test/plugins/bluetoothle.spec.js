describe('Service: $cordovaBluetoothle', function () {
  var $cordovaBluetoothle, $rootScope, $q;

  beforeEach(module('ngCordova.plugins.bluetoothle'));

  beforeEach(inject(function (_$cordovaBluetoothle_, _$q_, _$rootScope_) {
    $cordovaBluetoothle = _$cordovaBluetoothle_;
    $rootScope = _$rootScope_;
    $q = _$q_;

    bluetoothle = {
      discover : angular.noop,
      enable: angular.noop,
      connect: angular.noop
    };
  }));
  it('should call window.bluetoothle in scanning range', function () {
    var result;
    spyOn(window.bluetoothle, 'enable').andCallFake(function(success, error) {
      success();
    });
    $cordovaBluetoothle.enable()
      .then(function (response) {
        result = true;
      });
    $rootScope.$digest();
    expect(result).toBeTruthy();
    expect(window.bluetoothle.enable).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
  });
  it('should return null when  window.bluetoothle is undefined', function () {
    var result = null,
      params = {};

    bluetoothle = undefined;

    $cordovaBluetoothle.initialize(params).then(function (response) {
      result = response;
    });
    expect(result).toBe(null);
  });

  it('should call window.bluetoothle connect method', function () {
    var result = undefined;
    var params = { 'address': '12345'};

    spyOn(bluetoothle, 'connect')
      .andCallFake(function(success, error, params) {
        success(params);
      });

    $cordovaBluetoothle.connect(params).then(function(response){
      result = response;
    });

    $rootScope.$digest();
    expect(result).toBe(params);
  });
});
