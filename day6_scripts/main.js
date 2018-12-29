const bbCore = require('sdk');



exports.present_template = function(data, callback){

 
  bbCore.getCompany().then( (company) =>
  {
    
        
      company.$post('liquid_renderer', {entity: "company", id: company.id, named_template: "presents.6geese"}).then( (res) => {
        
         callback(null, {
           proxy: true,
            headers: {
              "Content-Type": "text/html; charset=UTF-8"
            },
            response: res.liquid_render
         });
        console.log(res);
      }, (err) => console.log(err));

    console.log(company);
  })
}


exports.present = function(data, callback){

  bbCore.getCompany().then( (company) =>
  {
      let template = "<html></body><h2>Welcome to {{company.name}}</h2>" +
        "<h4>Have some geese</h4>" +
        "{% for i in (1..6) %}" +
        "{{i}}. <img src='https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/97d5f9be-c371-e411-95bd-0050568e420d/630x355.jpg' style='width:100px;margin:2px'/>" +
        "{% endfor  %}" +
        "</body></html>"
        
      company.$post('liquid_renderer', {entity: "company", id: company.id},  {liquid_template: template}).then( (res) => {
        
         callback(null, {
           proxy: true,
            headers: {
              "Content-Type": "text/html; charset=UTF-8"
            },
            response: res.liquid_render
         });
        console.log(res);
      }, (err) => console.log(err));

    console.log(company);
  })

}





exports.message = function(data, callback){

 
  bbCore.getCompany().then( (company) => {
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

    company.$post('communications', {}, post_data).then( (res) => {
        
       callback(null, {
         proxy: true,
          headers: {
            "Content-Type": "text/html; charset=UTF-8"
          },
          response: res
       });
      console.log(res);
    }, (err) => console.log(err));

  }, (err) => console.log(err));
}

