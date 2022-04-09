declare global {
  var mongoose: InstanceType<T>;
  var _mongoClientPromise: Promise<T>;
}

export {};
