

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

            

            container.append(con1)
            con1.append(heading, p1, p2, p3) 

            let con2= document.createElement("div")
        
            let headcon2= document.createElement("h1")
            headcon2.innerText=data.name
            let a = Math.floor(Math.random()*1000)
            let pcon2= document.createElement("h4")
            pcon2.innerText="current temp:"+ data.main.temp
            
            let p2con2= document.createElement("h5")
            p2con2.innerText="current temp max:"+ a/2
            let b= Math.floor(Math.random()*100)
            let p3con3= document.createElement("h6")
            p3con3.innerText="current temp min:"+ b

            
            con2.append(headcon2, pcon2, p2con2, p3con3)
            
            container.append(con2)

            let con3= document.createElement("div")
        
            let headcon3= document.createElement("h1")
            headcon3.innerText=data.name
            let c = Math.floor(Math.random()*1000)
            let pcon3= document.createElement("h4")
            pcon3.innerText="current temp:"+ data.main.temp
            
            let p2con3= document.createElement("h5")
            p2con3.innerText="current temp max:"+ c/2
            let d= Math.floor(Math.random()*100)
            let p3con= document.createElement("h6")
            p3con.innerText="current temp min:"+ d

            
            con3.append(headcon3, pcon3, p2con3, p3con)
            
            container.append(con3)


            
            let con33= document.createElement("div")
        
            let headcon33= document.createElement("h1")
            headcon33.innerText=data.name
            let cc = Math.floor(Math.random()*1000)
            let pcon33= document.createElement("h4")
            pcon33.innerText="current temp:"+ data.main.temp
            
            let p2con33= document.createElement("h5")
            p2con33.innerText="current temp max:"+ cc/2
            let dd= Math.floor(Math.random()*100)
            let p3con33= document.createElement("h6")
            p3con33.innerText="current temp min:"+ dd

            
            con33.append(headcon33, pcon33, p2con33, p3con33)
            
            container.append(con33)


            
            let cont4= document.createElement("div")
        
            let headcont4= document.createElement("h1")
            headcont4.innerText=data.name
            let c4 = Math.floor(Math.random()*1000)
            let pcont4= document.createElement("h4")
            pcont4.innerText="current temp:"+ data.main.temp
            
            let p2cont4= document.createElement("h5")
            p2cont4.innerText="current temp max:"+ c4/2
            let d4= Math.floor(Math.random()*100)
            let p3cont4= document.createElement("h6")
            p3cont4.innerText="current temp min:"+ d4

            
            cont4.append(headcont4, pcont4, p2cont4, p3cont4)
            
            container.append(cont4)
            
            
            

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

    
