const Jsonix = require('jsonix').Jsonix,
    INVOICE = require('../mappings/INVOICE'),
    context = new Jsonix.Context([INVOICE]),
    marshaller = context.createMarshaller(),
    unmarshaller = context.createUnmarshaller();

// Unmarshal an object from the XML retrieved from the File or Url
unmarshaller.unmarshalFile('../mappings/invoice.xml',
    function (unmarshalled) {
        console.log(unmarshalled.value.element.annotation.documentation);
    });


/*
let xmlData = marshaller.marshalDocument({
    name: {
        localPart: "purchaseOrder"
    },
    value: {
        shipTo: {
            country: "US",
            name: "Alice Smith",
            street: "123 Maple Street",
            city: "Mill Valley",
            state: "CA",
            zip: 90952
        }
    }
});

let fs = require('fs'),
    {format} = require('./formatXml');

fs.writeFile('../../files/INV_'+new Date().getTime()+'.xml', format(xmlData.toString()), (err) => {
    if(err) throw err
    console.log('created xml')
})*/
