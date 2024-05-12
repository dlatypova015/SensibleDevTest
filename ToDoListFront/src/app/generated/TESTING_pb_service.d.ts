// package: 
// file: TESTING.proto

import * as TESTING_pb from "./TESTING_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CountryServiceGetAll = {
  readonly methodName: string;
  readonly service: typeof CountryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof TESTING_pb.EmptyRequest;
  readonly responseType: typeof TESTING_pb.CountriesReply;
};

export class CountryService {
  static readonly serviceName: string;
  static readonly GetAll: CountryServiceGetAll;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CountryServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAll(
    requestMessage: TESTING_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: TESTING_pb.CountriesReply|null) => void
  ): UnaryResponse;
  getAll(
    requestMessage: TESTING_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: TESTING_pb.CountriesReply|null) => void
  ): UnaryResponse;
}

