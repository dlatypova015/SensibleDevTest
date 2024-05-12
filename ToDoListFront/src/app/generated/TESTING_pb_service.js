// package: 
// file: TESTING.proto

var TESTING_pb = require("./TESTING_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CountryService = (function () {
  function CountryService() {}
  CountryService.serviceName = "CountryService";
  return CountryService;
}());

CountryService.GetAll = {
  methodName: "GetAll",
  service: CountryService,
  requestStream: false,
  responseStream: false,
  requestType: TESTING_pb.EmptyRequest,
  responseType: TESTING_pb.CountriesReply
};

exports.CountryService = CountryService;

function CountryServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CountryServiceClient.prototype.getAll = function getAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CountryService.GetAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CountryServiceClient = CountryServiceClient;

