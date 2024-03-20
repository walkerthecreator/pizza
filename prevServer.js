const http = require("http"); // loading the http module
const url = require('url')

//creating a server
const server = http
  .createServer((request, response) => {

    // if(request.url) 

    // url.parse(your url )
    // console.log(url.parse(request.url))

    const myPath = url.parse(request.url)
      // response.setHeader({ 'Content-Type' : 'text/html' })

        if(myPath.pathname == '/'){
            response.write("homepage");
        }
        else if(myPath.pathname == '/about'){
            response.write("about")
        }
        else{
            response.write("404 ")
        }
        response.end();
    })



  // starting the server on defined port 
  server.listen(3000 , ()=>{
    console.log('server started on 3000')
  })
