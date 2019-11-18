# Ballerina
## 2019/4/10 - ballerina_grpc
copy [sample](https://ballerina.io/learn/by-guide/grpc-service/) and run.

### orderMgt.proto
```proto
syntax = "proto3";
package grpc_service;
import "google/protobuf/wrappers.proto";

service orderMgt {
  rpc findOrder(google.protobuf.StringValue) returns (google.protobuf.StringValue);
  rpc addOrder(orderInfo) returns (google.protobuf.StringValue);
  rpc updateOrder(orderInfo) returns (google.protobuf.StringValue);
  rpc cancelOrder(google.protobuf.StringValue) returns (google.protobuf.StringValue);
}
message orderInfo {
  string id = 1;
  string name = 2;
  string description = 3;
}
```

### order_mgt_service.bal
```ballerina
import ballerina/grpc;
import ballerina/log;

// gRPC service endpoint definition.
listener grpc:Listener ep = new (3000);

// Order management is done using an in memory map.
// Add some sample orders to 'orderMap' at startup.
map<orderInfo> ordersMap = {};

// gRPC service.
service orderMgt on ep {

    // gRPC method to find an order.
    resource function findOrder(grpc:Caller caller, string orderId) {
        string payload = "";
        error? result = ();
        // Find the requested order from the map.
        if (ordersMap.hasKey(orderId)) {
            var jsonValue = json.convert(ordersMap[orderId]);
            if (jsonValue is error) {
                // Send casting error as internal error.
                result = caller->sendError(grpc:INTERNAL, <string>jsonValue.detail().message);
            } else {
                json orderDetails = jsonValue;
                payload = orderDetails.toString();
                // Send response to the caller.
                result = caller->send(payload);
                result = caller->complete();
            }
        } else {
            // Send entity not found error.
            payload = "Order : '" + orderId + "' cannot be found.";
            result = caller->sendError(grpc:NOT_FOUND, payload);
        }

        if (result is error) {
            log:printError("Error from Connector: " + result.reason() + " - "
                    + <string>result.detail().message + "\n");
        }
    }

    // gRPC method to create a new Order.
    resource function addOrder(grpc:Caller caller, orderInfo orderReq) {
        // Add the new order to the map.
        string orderId = orderReq.id;
        ordersMap[orderReq.id] = orderReq;
        // Create response message.
        string payload = "Status : Order created; OrderID : " + orderId;

        // Send response to the caller.
        error? result = caller->send(payload);
        result = caller->complete();
        if (result is error) {
            log:printError("Error from Connector: " + result.reason() + " - "
                    + <string>result.detail().message + "\n");
        }
    }

    // gRPC method to update an existing Order.
    resource function updateOrder(grpc:Caller caller, orderInfo updatedOrder) {
        string payload;
        error? result = ();
        // Find the order that needs to be updated.
        string orderId = updatedOrder.id;
        if (ordersMap.hasKey(orderId)) {
            // Update the existing order.
            ordersMap[orderId] = updatedOrder;
            payload = "Order : '" + orderId + "' updated.";
            // Send response to the caller.
            result = caller->send(payload);
            result = caller->complete();
        } else {
            // Send entity not found error.
            payload = "Order : '" + orderId + "' cannot be found.";
            result = caller->sendError(grpc:NOT_FOUND, payload);
        }

        if (result is error) {
            log:printError("Error from Connector: " + result.reason() + " - "
                    + <string>result.detail().message + "\n");
        }
    }

    // gRPC method to delete an existing Order.
    resource function cancelOrder(grpc:Caller caller, string orderId) {
        string payload;
        error? result = ();
        // Find the order that needs to be updated.
        if (ordersMap.hasKey(orderId)) {
            // Remove the requested order from the map.
            _ = ordersMap.remove(orderId);
            payload = "Order : '" + orderId + "' removed.";
            // Send response to the caller.
            result = caller->send(payload);
            result = caller->complete();
        } else {
            // Send entity not found error.
            payload = "Order : '" + orderId + "' cannot be found.";
            result = caller->sendError(grpc:NOT_FOUND, payload);
        }
        if (result is error) {
            log:printError("Error from Connector: " + result.reason() + " - "
                    + <string>result.detail().message + "\n");
        }
    }
}

For simplicity, we use an in-memory map to record all the order details. As shown in the above code, to create a gRPC service you need to import the ballerina/grpc and define a grpc:Listener endpoint. 
```

### grpc_service/orderMgt_sample_service.bal
```ballerina
import ballerina/grpc;
import ballerina/log;

// gRPC service endpoint definition.
listener grpc:Listener ep = new (9090);

// Order management is done using an in memory map.
// Add some sample orders to 'orderMap' at startup.
map<orderInfo> ordersMap = {};

// gRPC service.
service orderMgt on ep {

  // gRPC method to find an order.
  resource function findOrder(grpc:Caller caller, string orderId) {
    string payload = "";
    error? result = ();
    // Find the requested order from the map.
    if (ordersMap.hasKey(orderId)) {
      var jsonValue = json.convert(ordersMap[orderId]);
      if (jsonValue is error) {
        // Send casting error as internal error.
        result = caller->sendError(grpc:INTERNAL, <string>jsonValue.detail().message);
      } else {
        json orderDetails = jsonValue;
        payload = orderDetails.toString();
        // Send response to the caller.
        result = caller->send(payload);
        result = caller->complete();
      }
    } else {
      // Send entity not found error.
      payload = "Order : '" + orderId + "' cannot be found.";
      result = caller->sendError(grpc:NOT_FOUND, payload);
    }

    if (result is error) {
      log:printError("Error from Connector: " + result.reason() + " - "
        + <string>result.detail().message + "\n");
    }
  }

  // gRPC method to create a new Order.
  resource function addOrder(grpc:Caller caller, orderInfo orderReq) {
    // Add the new order to the map.
    string orderId = orderReq.id;
    ordersMap[orderReq.id] = orderReq;
    // Create response message.
    string payload = "Status : Order created; OrderID : " + orderId;

    // Send response to the caller.
    error? result = caller->send(payload);
    result = caller->complete();
    if (result is error) {
      log:printError("Error from Connector: " + result.reason() + " - "
        + <string>result.detail().message + "\n");
    }
  }

  // gRPC method to update an existing Order.
  resource function updateOrder(grpc:Caller caller, orderInfo updatedOrder) {
    string payload;
    error? result = ();
    // Find the order that needs to be updated.
    string orderId = updatedOrder.id;
    if (ordersMap.hasKey(orderId)) {
      // Update the existing order.
      ordersMap[orderId] = updatedOrder;
      payload = "Order : '" + orderId + "' updated.";
      // Send response to the caller.
      result = caller->send(payload);
      result = caller->complete();
    } else {
      // Send entity not found error.
      payload = "Order : '" + orderId + "' cannot be found.";
      result = caller->sendError(grpc:NOT_FOUND, payload);
    }

    if (result is error) {
        log:printError("Error from Connector: " + result.reason() + " - "
          + <string>result.detail().message + "\n");
    }
  }

  // gRPC method to delete an existing Order.
  resource function cancelOrder(grpc:Caller caller, string orderId) {
    string payload;
    error? result = ();
    // Find the order that needs to be updated.
    if (ordersMap.hasKey(orderId)) {
      // Remove the requested order from the map.
      _ = ordersMap.remove(orderId);
      payload = "Order : '" + orderId + "' removed.";
      // Send response to the caller.
      result = caller->send(payload);
      result = caller->complete();
    } else {
      // Send entity not found error.
      payload = "Order : '" + orderId + "' cannot be found.";
      result = caller->sendError(grpc:NOT_FOUND, payload);
    }
    if (result is error) {
      log:printError("Error from Connector: " + result.reason() + " - "
        + <string>result.detail().message + "\n");
    }
  }
}
```

### grpc_client/orderMgt_sample_client.bal
```ballerina
import ballerina/grpc;
import ballerina/io;
import ballerina/log;

// This is client implementation for unary blocking scenario
public function main(string... args) {
    // Client endpoint configuration
    orderMgtBlockingClient orderMgtBlockingEp = new("http://localhost:9090");

    // Create an order
    log:printInfo("-----------------------Create a new order-----------------------");
    orderInfo orderReq = {id:"100500", name:"XYZ", description:"Sample order."};
    var addResponse = orderMgtBlockingEp->addOrder(orderReq);
    if (addResponse is error) {
        log:printError("Error from Connector: " + addResponse.reason() + " - "
                                                + <string>addResponse.detail().message + "\n");
    } else {
        string result;
        grpc:Headers resHeaders;
        (result, resHeaders) = addResponse;
        log:printInfo("Response - " + result + "\n");
    }

    // Update an order
    log:printInfo("--------------------Update an existing order--------------------");
    orderInfo updateReq = {id:"100500", name:"XYZ", description:"Updated."};
    var updateResponse = orderMgtBlockingEp->updateOrder(updateReq);
    if (updateResponse is error) {
        log:printError("Error from Connector: " + updateResponse.reason() + " - "
                                                + <string>updateResponse.detail().message + "\n");
    } else {
        string result;
        grpc:Headers resHeaders;
        (result, resHeaders) = updateResponse;
        log:printInfo("Response - " + result + "\n");
    }

    // Find an order
    log:printInfo("---------------------Find an existing order---------------------");
    var findResponse = orderMgtBlockingEp->findOrder("100500");
    if (findResponse is error) {
        log:printError("Error from Connector: " + findResponse.reason() + " - "
                                                + <string>findResponse.detail().message + "\n");
    } else {
        string result;
        grpc:Headers resHeaders;
        (result, resHeaders) = findResponse;
        log:printInfo("Response - " + result + "\n");
    }

    // Cancel an order
    log:printInfo("-------------------------Cancel an order------------------------");
    var cancelResponse = orderMgtBlockingEp->cancelOrder("100500");
    if (cancelResponse is error) {
        log:printError("Error from Connector: " + cancelResponse.reason() + " - "
                + <string>cancelResponse.detail().message + "\n");
    } else {
        string result;
        grpc:Headers resHeaders;
        (result, resHeaders) = cancelResponse;
        log:printInfo("Response - " + result + "\n");
    }
}

service orderMgtMessageListener = service {

    resource function onMessage(string message) {
        io:println("Response received from server: " + message);
    }

    resource function onError(error err) {
        io:println("Error from Connector: " + err.reason() + " - " + <string>err.detail().message);
    }

    resource function onComplete() {
        io:println("Server Complete Sending Responses.");
    }
};


```