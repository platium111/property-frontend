import HandleBars from 'handlebars';

export const customerFormToDb = (data) => {
  // ! using quote for key and value
  const template = `
  {
    "id": "{{id}}",
    "firstName": "{{firstName}}",
    "lastName": "{{lastName}}",
    "middleName": "{{middleName}}",
    "phoneNumbers": ["{{phoneNumber}}", "{{otherPhoneNumber}}"],
    "dateOfBirth": "{{dateOfBirth}}",
    "identityCardNo": "{{identityCardNo}}",
    "issueDate": "{{issueDate}}",
    "address": {
        "id": "{{addressId}}",
        "alley": "{{alley}}",
        "city": "{{city}}",
        "district": "{{district}}",
        "hamlet": "{{hamlet}}",
        "homeNumber": "{{homeNumber}}",
        "lane": "{{lane}}",
        "province": "{{province}}",
        "street": "{{street}}",
        "village": "{{village}}"
    }
  }`;
  const handleTemplate = HandleBars.compile(template);
  const resultStr = handleTemplate(data);
  return JSON.parse(resultStr);
};
