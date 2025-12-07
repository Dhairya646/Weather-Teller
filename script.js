async function showWeather() {
    let city=document.getElementById("city").value;
    let apiKey="befbb2a1a804d021b6b78157a1aa1d0a";

    let url=``;

    let response = await fetch(url);
    let data= await response.json();
    console.log(data);

    if(data.cod===200){
        document.getElementById("result").innerHTML= `
            <h2>${data.name}, ${data.sys.country}</h2>

        `;
    } else {

        document.getElementById("result").innerHTML=`
        <p>not found</p>
        `;
    }
}