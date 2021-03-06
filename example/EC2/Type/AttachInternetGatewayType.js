var Modeler = require("../Modeler.js");
var className = 'TypeAttachInternetGatewayType';

var TypeAttachInternetGatewayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  internetGatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "internetGatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttachInternetGatewayType;
Modeler.register(TypeAttachInternetGatewayType, "TypeAttachInternetGatewayType");
