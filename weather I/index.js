

const apikey = "688b358723e288bea798868635e48620";



    async function getdata()
    {
        
        let city = document.getElementById("city").value
        
        let url= 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=688b358723e288bea798868635e48620'        
        let res= await fetch(url)
        let data= await res.json();
        console.log(data)
        check(data)

    }


    async function gps(latitude,longitude)
    {
      getLocationWeather()
      let url=  'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=688b358723e288bea798868635e48620'
        
        let res= await fetch(url)
        let data= await res.json();
        console.log(data)
        check(data)     
    }


    function check(data)
    {
      let mincons= document.getElementById("mincons")
      mincons.innerHTML=null
      let iframe= document.createElement("iframe")
            iframe.src="https://maps.google.com/maps?q="+data.name+"&t=&z=13&ie=UTF8&iwloc=&output=embed";
            mincons.append(iframe)

        let container= document.getElementById("container")
        container.innerHTML=null

        let con1= document.createElement("div")
        
            let heading= document.createElement("h1")
            heading.innerText=data.name

            let p1= document.createElement("h4")
            p1.innerText="current temp:"+ data.main.temp
            
            let p2= document.createElement("h5")
            p2.innerText="current temp max:"+ data.main.temp_max
            
            let p3= document.createElement("h6")
            p3.innerText="current temp min:"+ data.main.temp_min

            
            con1.append(heading, p1, p2, p3)
            
            container.append(con1)          
            

    }

    function getLocationWeather()
    {
        navigator.geolocation.getCurrentPosition(success)

        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
          
            // Do something with your latitude and longitude
           gps(latitude,longitude)


          }
    }

    
