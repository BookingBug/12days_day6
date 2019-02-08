const bbCore = require('sdk');



exports.present_template = async function(data, callback){

  // get the company using an async call
  const company = await bbCore.getCompany();
    
  // render a liquid template from a template- again with an async call
  const result = await company.$post('liquid_renderer', {entity: "company", id: company.id, named_template: "presents.6geese"});
        
  // and return the result as a proxied value
  callback(null, {
    proxy: true,
      headers: {
        "Content-Type": "text/html; charset=UTF-8"
      },
      response: result.liquid_render
  });

  console.log(result);
}


exports.present = async function(data, callback){

  const company = await bbCore.getCompany();

  // hand craft a template
  let template = "<html></body><h2>Welcome to {{company.name}}</h2>" +
    "<h4>Have some geese</h4>" +
    "{% for i in (1..6) %}" +
    "{{i}}. <img src='https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/97d5f9be-c371-e411-95bd-0050568e420d/630x355.jpg' style='width:100px;margin:2px'/>" +
    "{% endfor  %}" +
    "</body></html>"
    
  // render a liquid tempalte based on the submitted template as an async call
  const result = await company.$post('liquid_renderer', {entity: "company", id: company.id},  {liquid_template: template});
        
  callback(null, {
    proxy: true,
      headers: {
        "Content-Type": "text/html; charset=UTF-8"
      },
      response: result.liquid_render
  });
  console.log(result);

}


exports.message = async function(data, callback){

  const company = await bbCore.getCompany();

  // craft an email message to sent to the client
  const post_data = {
    entity: 'client',
    id: data.client_id,
    subject: {
      subject_type: "plaintext",
      value: "Have a present"
    },
    body: {
      body_type: "liquid",
      value: "Hi there {{client.name}}, here are you 6 Geese" +
       "{% for i in (1..6) %}" +
      "{{i}}. <img src='https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/97d5f9be-c371-e411-95bd-0050568e420d/630x355.jpg' style='width:100px;margin:2px'/>" +
      "{% endfor  %}"
    },
    message_type: "email",
    recipient: data.client_email,
    sender: "truelove@bookingbug.com"
  }

  // send the email
  const result = await company.$post('communications', {}, post_data);
        
  // send back the result - just confirming it was done
  callback(null, {
    proxy: true,
      headers: {
        "Content-Type": "text/html; charset=UTF-8"
      },
      response: result
   });
  
  console.log(result);
}

