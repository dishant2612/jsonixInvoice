const Jsonix = require('jsonix').Jsonix,
    PO = require('../mappings/PO').PO,
    context = new Jsonix.Context([PO]),
    marshaller = context.createMarshaller(),
    unmarshaller = context.createUnmarshaller();

// Unmarshal an object from the XML retrieved from the File or Url
unmarshaller.unmarshalFile('../../mappings/po.xml',
    function (unmarshalled) {
        console.log(unmarshalled.value.shipTo.name);
        console.log(unmarshalled.value.item[1].productName);
    });

// Marshal a JavaScript Object as XML (DOM Document)
var xmlData = marshaller.marshalDocument({
    name: {
        localPart: "purchaseOrder"
    },
    value: {
        orderDate: "1999-10-20",
        shipTo: {
            country: "US",
            name: "Alice Smith",
            street: "123 Maple Street",
            city: "Mill Valley",
            state: "CA",
            zip: 1234
        }
    }
})

let {format} = require('./formatXml');
xmlData = format(xmlData.toString());

// create xml file
require('fs').writeFile('../../files/PO_'+new Date().getTime()+'.xml', xmlData, (err) => {
    if(err) throw err
    console.log('created xml')
});

